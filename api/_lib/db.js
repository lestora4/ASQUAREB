const { Pool } = require('pg');

let pool = null;

function getPool() {
    if (!pool) {
        pool = new Pool({
            host: process.env.NEON_HOST,
            database: process.env.NEON_DATABASE,
            user: process.env.NEON_USER,
            password: process.env.NEON_PASSWORD,
            port: 5432,
            ssl: { rejectUnauthorized: false },
            max: 5,
            idleTimeoutMillis: 30000,
            connectionTimeoutMillis: 10000
        });
    }
    return pool;
}

module.exports = { getPool };
