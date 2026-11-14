const nodemailer = require('nodemailer');

let transporter = null;

function getTransporter() {
    if (!transporter) {
        transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST || 'smtp.gmail.com',
            port: parseInt(process.env.EMAIL_PORT) || 587,
            secure: false,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });
    }
    return transporter;
}

// Never throws — a failed email should not break form submission.
async function sendAdminEmail({ subject, body, to, attachments, replyTo }) {
    try {
        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
            console.log('⚠️ Email credentials not configured, skipping email. Subject:', subject);
            return false;
        }

        await getTransporter().sendMail({
            from: process.env.EMAIL_FROM_NAME
                ? `"${process.env.EMAIL_FROM_NAME}" <${process.env.EMAIL_FROM || process.env.EMAIL_USER}>`
                : (process.env.EMAIL_FROM || process.env.EMAIL_USER),
            to: to || process.env.NOTIFICATION_EMAIL || 'care@asquareb.in',
            subject,
            text: body,
            ...(replyTo ? { replyTo } : {}),
            ...(attachments && attachments.length ? { attachments } : {})
        });

        console.log('✅ Admin email sent:', subject);
        return true;
    } catch (error) {
        console.error('❌ Email send failed:', error.message);
        return false;
    }
}

module.exports = { sendAdminEmail };
