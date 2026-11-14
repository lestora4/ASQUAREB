// ============================================================
// Run this LOCALLY (not on Vercel) to create your first admin login.
// It never sends your password anywhere — it only hashes it.
//
// Usage:
//   npm install bcryptjs   (if not already installed)
//   node scripts/generate-admin-hash.js "yourUsername" "your@email.com" "YourStrongPassword"
// ============================================================

const bcrypt = require('bcryptjs');

const [, , username, email, password] = process.argv;

if (!username || !email || !password) {
    console.log('Usage: node scripts/generate-admin-hash.js "username" "email" "password"');
    process.exit(1);
}

bcrypt.hash(password, 10).then((hash) => {
    console.log('\n✅ Password hash generated.\n');
    console.log('Run this in Neon SQL Editor:\n');
    console.log(
        `INSERT INTO admins (username, email, password_hash) VALUES ('${username}', '${email}', '${hash}');`
    );
    console.log('\n(Your plain password was not saved or sent anywhere — only the hash above matters.)\n');
});
