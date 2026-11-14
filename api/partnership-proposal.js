// ============================================================
// ASQUAREB - Partnership proposal download (JWT-protected)
// GET /api/partnership-proposal?id=PAR_...  -> streams the stored proposal file
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
    if (!/^PAR_\d+_[a-z0-9]+$/i.test(id)) {
        return res.status(400).json({ success: false, message: 'Invalid reference' });
    }

    try {
        const r = await getPool().query(
            'SELECT proposal_name, proposal_mime, proposal_data FROM partnership_enquiries WHERE reference = $1',
            [id]
        );
        if (!r.rows.length || !r.rows[0].proposal_data) {
            return res.status(404).json({ success: false, message: 'No proposal document attached' });
        }
        const { proposal_name, proposal_mime, proposal_data } = r.rows[0];
        const safeName = String(proposal_name || 'proposal').replace(/[^\w.\- ()]/g, '_');
        res.setHeader('Content-Type', proposal_mime || 'application/octet-stream');
        res.setHeader('Content-Disposition', `attachment; filename="${safeName}"`);
        res.setHeader('Cache-Control', 'private, no-store');
        return res.status(200).send(proposal_data);
    } catch (err) {
        console.error('❌ Proposal download error:', err);
        return res.status(500).json({ success: false, message: 'Failed to fetch proposal' });
    }
};
