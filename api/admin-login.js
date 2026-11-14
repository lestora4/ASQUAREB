// ============================================================
// ASQUAREB - Admin Login (issues a JWT for dashboard access)
// ============================================================

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { getPool } = require('./_lib/db');

module.exports = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, message: 'Method not allowed' });
    }

    if (!process.env.ADMIN_JWT_SECRET) {
        console.error('❌ ADMIN_JWT_SECRET is not set');
        return res.status(500).json({ success: false, message: 'Server misconfigured' });
    }

    const pool = getPool();

    try {
        const { username, password } = req.body || {};

        if (!username || !password) {
            return res.status(400).json({ success: false, message: 'Username and password are required' });
        }

        const result = await pool.query('SELECT * FROM admins WHERE LOWER(username) = LOWER($1)', [username]);

        if (result.rows.length === 0) {
            return res.status(401).json({ success: false, message: 'Invalid username or password' });
        }

        const admin = result.rows[0];
        const match = await bcrypt.compare(password, admin.password_hash);

        if (!match) {
            return res.status(401).json({ success: false, message: 'Invalid username or password' });
        }

        await pool.query('UPDATE admins SET last_login = NOW() WHERE id = $1', [admin.id]);

        const token = jwt.sign(
            { adminId: admin.id, username: admin.username, role: admin.role },
            process.env.ADMIN_JWT_SECRET,
            { expiresIn: '12h' }
        );

        res.json({
            success: true,
            token,
            username: admin.username,
            role: admin.role
        });

    } catch (error) {
        console.error('❌ Admin login error:', error);
        res.status(500).json({ success: false, message: 'Login failed. Please try again.' });
    }
};
