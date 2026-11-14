// ============================================================
// ASQUAREB - Career resume download (JWT-protected)
// GET /api/career-resume?id=CAR_...  -> streams the stored resume file
// ============================================================

const jwt = require('jsonwebtoken');
const { getPool } = require('./_lib/db');

module.exports = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (req.method === 'OPTIONS') return res.status(200).end();
    if (req.method !== 'GET') return res.status(405).json({ success: false, message: 'Method not allowed' });

    if (!process.env.ADMIN_JWT_SECRET) {
        return res.status(500).json({ success: false, message: 'Server misconfigured' });
    }

    const authHeader = req.headers.authorization || '';
    const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : null;
    try {
        if (!token) throw new Error('no token');
        jwt.verify(token, process.env.ADMIN_JWT_SECRET);
    } catch (e) {
        return res.status(401).json({ success: false, message: 'Unauthorized. Please log in again.' });
    }

    const id = String(req.query.id || '');
    if (!/^CAR_\d+_[a-z0-9]+$/i.test(id)) {
        return res.status(400).json({ success: false, message: 'Invalid application id' });
    }

    try {
        const r = await getPool().query(
            'SELECT file_name, mime_type, data FROM career_application_resumes WHERE application_id = $1',
            [id]
        );
        if (!r.rows.length) return res.status(404).json({ success: false, message: 'Resume not found' });

        const { file_name, mime_type, data } = r.rows[0];
        const safeName = String(file_name || 'resume').replace(/[^\w.\- ()]/g, '_');
        res.setHeader('Content-Type', mime_type);
        res.setHeader('Content-Disposition', `attachment; filename="${safeName}"`);
        res.setHeader('Cache-Control', 'private, no-store');
        return res.status(200).send(data);
    } catch (err) {
        console.error('❌ Resume download error:', err);
        return res.status(500).json({ success: false, message: 'Failed to fetch resume' });
    }
};
