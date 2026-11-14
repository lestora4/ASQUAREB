// ============================================================
// Lightweight Google Sheets writer using a service account.
// Uses the built-in Vercel/Node fetch + jsonwebtoken, so it does
// NOT require the heavy 'googleapis' package.
//
// Behaviour:
//   Each form type gets its OWN tab in the spreadsheet (Popup,
//   Enquiry, Contact, Newsletter, Chatbot). Tabs are created
//   automatically the first time a lead of that type comes in —
//   no manual setup needed beyond sharing the sheet itself.
//   Every field is written to its own column (no more squashed
//   "Details" string).
//
// Required env vars:
//   GOOGLE_SHEETS_ID              - the spreadsheet ID
//   GOOGLE_SERVICE_ACCOUNT_EMAIL  - service account's client_email
//   GOOGLE_PRIVATE_KEY            - service account's private_key
//
// Setup (one-time):
//   1. Google Cloud Console -> create a Service Account -> create a JSON key.
//   2. Copy "client_email" -> GOOGLE_SERVICE_ACCOUNT_EMAIL
//   3. Copy "private_key"  -> GOOGLE_PRIVATE_KEY (keep the \n escapes as-is)
//   4. Open your Google Sheet -> Share -> add the service account email
//      as an Editor. That's it — tabs + headers are created automatically.
// ============================================================

const jwt = require('jsonwebtoken');

// One config entry per form_type. `tab` is the sheet tab name (auto-created),
// `headers` is the header row, `row(fields)` maps the raw fields passed in
// from the API handler into that header order.
const SHEET_CONFIG = {
    popup: {
        tab: 'Popup',
        headers: ['Timestamp', 'Name', 'Phone', 'Email', 'Reference ID', 'Preferred Program'],
        row: (d) => [
            new Date().toISOString(),
            d.name || '',
            d.phone || '',
            d.email || '',
            d.referenceId || '',
            d.preferredProgram || ''
        ]
    },
    enquiry: {
        tab: 'Enquiry',
        headers: [
            'Timestamp', 'Student Name', 'Parent Name', 'Phone', 'Email',
            'Current Class', 'Board', 'Preferred Program', 'Preferred Counselling Mode',
            'City', 'Counselling Date', 'Reference ID'
        ],
        row: (d) => [
            new Date().toISOString(),
            d.studentName || '',
            d.parentName || '',
            d.phone || '',
            d.email || '',
            d.currentClass || '',
            d.board || '',
            d.preferredProgram || '',
            d.counsellingMode || '',
            d.city || '',
            d.counsellingDate || '',
            d.referenceId || ''
        ]
    },
    contact: {
        tab: 'Contact',
        headers: ['Timestamp', 'Name', 'Email', 'Subject', 'Message', 'Reference ID'],
        row: (d) => [
            new Date().toISOString(),
            d.name || '',
            d.email || '',
            d.subject || '',
            d.message || '',
            d.referenceId || ''
        ]
    },
    newsletter: {
        tab: 'Newsletter',
        headers: ['Timestamp', 'Name', 'Email', 'Phone', 'Interested Category', 'Reference ID'],
        row: (d) => [
            new Date().toISOString(),
            d.name || '',
            d.email || '',
            d.phone || '',
            d.interestedCategory || '',
            d.referenceId || ''
        ]
    },
    chatbot: {
        tab: 'Chatbot',
        headers: [
            'Timestamp', 'Student Name', 'Parent Name', 'Phone', 'Email',
            'Class', 'Board', 'Course', 'Branch', 'Reference ID'
        ],
        row: (d) => [
            new Date().toISOString(),
            d.studentName || '',
            d.parentName || '',
            d.phone || '',
            d.email || '',
            d.studentClass || '',
            d.board || '',
            d.course || '',
            d.branch || '',
            d.referenceId || ''
        ]
    }
};

let cachedToken = null;
let cachedTokenExpiry = 0;

// Tabs we've already confirmed exist (with a header row) during this
// warm serverless instance. Avoids an extra metadata round-trip on
// every single submission.
const verifiedTabs = new Set();

async function getAccessToken() {
    const now = Math.floor(Date.now() / 1000);
    if (cachedToken && cachedTokenExpiry > now + 30) {
        return cachedToken;
    }

    const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    const rawKey = process.env.GOOGLE_PRIVATE_KEY;

    if (!email || !rawKey) {
        throw new Error('Google service account credentials not configured');
    }

    const privateKey = rawKey.replace(/\\n/g, '\n');

    const assertion = jwt.sign(
        {
            iss: email,
            scope: 'https://www.googleapis.com/auth/spreadsheets',
            aud: 'https://oauth2.googleapis.com/token',
            iat: now,
            exp: now + 3600
        },
        privateKey,
        { algorithm: 'RS256' }
    );

    const response = await fetch('https://oauth2.googleapis.com/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
            grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
            assertion
        })
    });

    const data = await response.json();
    if (!response.ok) {
        throw new Error('Google OAuth token exchange failed: ' + JSON.stringify(data));
    }

    cachedToken = data.access_token;
    cachedTokenExpiry = now + data.expires_in;
    return cachedToken;
}

async function sheetsApi(sheetId, path, token, options = {}) {
    const response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${sheetId}${path}`, {
        ...options,
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
            ...(options.headers || {})
        }
    });
    const data = await response.json();
    return { ok: response.ok, data };
}

// Makes sure the given tab exists and has a header row. Creates it
// (and writes the header) the first time it's seen.
async function ensureTabExists(sheetId, tabName, headers, token) {
    if (verifiedTabs.has(tabName)) return;

    const meta = await sheetsApi(sheetId, '?fields=sheets.properties.title', token);
    const existingTitles = ((meta.data && meta.data.sheets) || []).map(s => s.properties.title);

    if (!existingTitles.includes(tabName)) {
        const created = await sheetsApi(sheetId, ':batchUpdate', token, {
            method: 'POST',
            body: JSON.stringify({
                requests: [{ addSheet: { properties: { title: tabName } } }]
            })
        });

        if (!created.ok) {
            throw new Error('Failed to create sheet tab: ' + JSON.stringify(created.data));
        }

        const range = encodeURIComponent(`${tabName}!A1`);
        await sheetsApi(sheetId, `/values/${range}?valueInputOption=USER_ENTERED`, token, {
            method: 'PUT',
            body: JSON.stringify({ values: [headers] })
        });
    }

    verifiedTabs.add(tabName);
}

// Never throws — a failed sheet write should not break form submission.
// formType: 'popup' | 'enquiry' | 'contact' | 'newsletter' | 'chatbot'
// fields:   raw field object, mapped to the right columns by SHEET_CONFIG
async function appendLeadRow(formType, fields) {
    const sheetId = process.env.GOOGLE_SHEETS_ID;
    const config = SHEET_CONFIG[formType];

    if (!sheetId) {
        console.log('⚠️ GOOGLE_SHEETS_ID not set, skipping Google Sheets logging');
        return false;
    }

    if (!config) {
        console.error('❌ Unknown form type for Google Sheets:', formType);
        return false;
    }

    try {
        const token = await getAccessToken();
        await ensureTabExists(sheetId, config.tab, config.headers, token);

        const range = encodeURIComponent(`${config.tab}!A:Z`);
        const { ok, data } = await sheetsApi(
            sheetId,
            `/values/${range}:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`,
            token,
            {
                method: 'POST',
                body: JSON.stringify({ values: [config.row(fields)] })
            }
        );

        if (!ok) {
            console.error('❌ Google Sheets append failed:', data);
            return false;
        }

        console.log('✅ Row added to Google Sheet tab:', config.tab);
        return true;
    } catch (error) {
        console.error('❌ Google Sheets error:', error.message);
        return false;
    }
}

module.exports = { appendLeadRow };
