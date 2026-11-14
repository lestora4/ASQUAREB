// ============================================================
// ASQUAREB - Dashboard Data API (JWT-protected)
// GET /api/dashboard-data                          -> summary counts for all tables
// GET /api/dashboard-data?table=enquiry             -> rows from enquiry_leads
// GET /api/dashboard-data?table=enquiry&from=2026-01-01&to=2026-01-31
// GET /api/dashboard-data?table=enquiry&type=Online&search=john
// ============================================================

const jwt = require('jsonwebtoken');
const { getPool } = require('./_lib/db');

const TABLES = {
    popup: {
        table: 'popup_leads',
        dateCol: 'created_at',
        nameExpr: 'full_name',
        typeCol: null
    },
    enquiry: {
        table: 'enquiry_leads',
        dateCol: 'created_at',
        nameExpr: 'student_name',
        typeCol: 'preferred_program'
    },
    contact: {
        table: 'contact_messages',
        dateCol: 'created_at',
        nameExpr: 'name',
        typeCol: null
    },
    newsletter: {
        table: 'newsletter_subscribers',
        dateCol: 'subscribed_at',
        nameExpr: 'full_name',
        typeCol: 'interested_category'
    },
    global_education: {
        table: 'global_education_registrations',
        dateCol: 'created_at',
        nameExpr: 'full_name',
        typeCol: 'country_code',
        // columns searched by the Search box (name + these)
        searchCols: ['email', 'mobile', 'pincode', 'registration_id']
    },
    careers: {
        table: 'career_applications',
        dateCol: 'created_at',
        nameExpr: 'full_name',
        typeCol: 'role_title',
        searchCols: ['email', 'mobile', 'city', 'qualification', 'role_title', 'application_id']
    },
    chatbot: {
        table: 'chatbot_leads',
        dateCol: 'created_at',
        nameExpr: 'student_name',
        typeCol: 'course'
    },
    partnership: {
        table: 'partnership_enquiries',
        dateCol: 'created_at',
        nameExpr: 'org_name',
        typeCol: 'partnership_type',
        searchCols: ['contact_person', 'email', 'phone', 'programme', 'org_category', 'reference'],
        // everything except the stored proposal file (proposal_data) - that is downloaded separately
        selectCols: 'id, reference, programme, org_name, website, registration_details, contact_person, designation, email, phone, org_category, partnership_type, summary, proposal_name, proposal_size, created_at'
    }
};

function verifyToken(req) {
    const authHeader = req.headers.authorization || '';
    const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : null;
    if (!token) return null;
    try {
        return jwt.verify(token, process.env.ADMIN_JWT_SECRET);
    } catch (err) {
        return null;
    }
}

module.exports = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'GET') {
        return res.status(405).json({ success: false, message: 'Method not allowed' });
    }

    if (!process.env.ADMIN_JWT_SECRET) {
        console.error('❌ ADMIN_JWT_SECRET is not set');
        return res.status(500).json({ success: false, message: 'Server misconfigured' });
    }

    const admin = verifyToken(req);
    if (!admin) {
        return res.status(401).json({ success: false, message: 'Unauthorized. Please log in again.' });
    }

    const pool = getPool();

    try {
        const { table, from, to, type, search, limit } = req.query;

        // No table specified -> return summary counts across all tables
        if (!table || table === 'summary') {
            const counts = {};
            for (const key of Object.keys(TABLES)) {
                try {
                    const r = await pool.query(`SELECT COUNT(*) FROM ${TABLES[key].table}`);
                    counts[key] = parseInt(r.rows[0].count, 10);
                } catch (e) {
                    // table not created yet (e.g. SQL script not run) - don't break the whole dashboard
                    console.error(`⚠️ Count failed for ${TABLES[key].table}:`, e.message);
                    counts[key] = 0;
                }
            }
            return res.json({ success: true, summary: counts });
        }

        const config = TABLES[table];
        if (!config) {
            return res.status(400).json({ success: false, message: 'Invalid table name' });
        }

        const conditions = [];
        const params = [];
        let i = 1;

        if (from) {
            conditions.push(`${config.dateCol} >= $${i++}`);
            params.push(from);
        }
        if (to) {
            conditions.push(`${config.dateCol} <= $${i++}`);
            params.push(`${to} 23:59:59`);
        }
        if (type && config.typeCol) {
            conditions.push(`${config.typeCol} = $${i++}`);
            params.push(type);
        }
        if (search) {
            const cols = [config.nameExpr].concat(config.searchCols || ['email']);
            conditions.push('(' + cols.map(c => `${c} ILIKE $${i}`).join(' OR ') + ')');
            params.push(`%${search}%`);
            i++;
        }

        const where = conditions.length ? `WHERE ${conditions.join(' AND ')}` : '';
        const lim = Math.min(parseInt(limit, 10) || 100, 5000);

        const query = `SELECT ${config.selectCols || '*'} FROM ${config.table} ${where} ORDER BY ${config.dateCol} DESC LIMIT ${lim}`;
        const result = await pool.query(query, params);

        // Distinct type/category values, useful for populating a filter dropdown
        let typeOptions = [];
        if (config.typeCol) {
            const typeResult = await pool.query(
                `SELECT DISTINCT ${config.typeCol} AS val FROM ${config.table} WHERE ${config.typeCol} IS NOT NULL AND ${config.typeCol} != '' ORDER BY val`
            );
            typeOptions = typeResult.rows.map(r => r.val);
        }

        res.json({
            success: true,
            table,
            count: result.rows.length,
            typeOptions,
            data: result.rows
        });

    } catch (error) {
        console.error('❌ Dashboard data error:', error);
        res.status(500).json({ success: false, message: 'Failed to fetch dashboard data' });
    }
};
