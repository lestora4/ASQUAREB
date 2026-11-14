// ============================================================
// ASQUAREB - Career resume upload (chunked)
// POST /api/career-upload
//   { upload_id, index, total, chunk_base64, website }
//
// Why chunks: Vercel rejects any request body larger than 4.5 MB, and a
// 10 MB resume becomes ~13.4 MB once base64-encoded inside JSON. The browser
// therefore sends the file in <= 3 MB pieces; each piece is stored here and
// /api/submit-form stitches them together (and validates size + file type)
// when the application is submitted.
// ============================================================

const { getPool } = require('./_lib/db');

const MAX_CHUNK_BYTES = 3 * 1024 * 1024 + 1024; // 3 MB piece (+ tiny slack)
const MAX_CHUNKS = 4;                            // 4 x 3 MB covers the 10 MB limit

let tableReady = false;
async function ensureTable(pool) {
    if (tableReady) return;
    await pool.query(`
        CREATE TABLE IF NOT EXISTS career_resume_chunks (
            upload_id    TEXT        NOT NULL,
            chunk_index  INTEGER     NOT NULL,
            total_chunks INTEGER     NOT NULL,
            data         BYTEA       NOT NULL,
            created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW(),
            PRIMARY KEY (upload_id, chunk_index)
        )`);
    tableReady = true;
}

module.exports = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') return res.status(200).end();
    if (req.method !== 'POST') return res.status(405).json({ success: false, message: 'Method not allowed' });

    const bad = (m) => res.status(400).json({ success: false, message: m });

    try {
        const b = req.body || {};
        if (String(b.website || '').trim()) return res.status(200).json({ success: true }); // honeypot

        const uploadId = String(b.upload_id || '');
        const index = parseInt(b.index, 10);
        const total = parseInt(b.total, 10);
        if (!/^[a-z0-9]{16,40}$/i.test(uploadId)) return bad('Invalid upload. Please re-select your resume.');
        if (!Number.isInteger(total) || total < 1 || total > MAX_CHUNKS) return bad('Resume must be 10 MB or smaller.');
        if (!Number.isInteger(index) || index < 0 || index >= total) return bad('Invalid upload. Please try again.');

        const buf = Buffer.from(String(b.chunk_base64 || ''), 'base64');
        if (!buf.length) return bad('Empty file. Please choose a different resume.');
        if (buf.length > MAX_CHUNK_BYTES) return bad('Upload chunk too large. Please try again.');

        const pool = getPool();
        await ensureTable(pool);

        // Housekeeping: drop abandoned uploads older than 2 hours.
        await pool.query(`DELETE FROM career_resume_chunks WHERE created_at < NOW() - INTERVAL '2 hours'`);

        await pool.query(
            `INSERT INTO career_resume_chunks (upload_id, chunk_index, total_chunks, data)
             VALUES ($1,$2,$3,$4)
             ON CONFLICT (upload_id, chunk_index) DO UPDATE SET data = EXCLUDED.data, total_chunks = EXCLUDED.total_chunks`,
            [uploadId, index, total, buf]
        );
        return res.status(200).json({ success: true });
    } catch (err) {
        console.error('❌ Resume chunk upload error:', err);
        return res.status(500).json({ success: false, message: 'Could not upload your resume. Please try again.' });
    }
};
