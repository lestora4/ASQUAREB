// ============================================================
// ASQUAREB - Chatbot Lead Capture API → chatbot_leads
// ============================================================

const { getPool } = require('./_lib/db');
const { sendAdminEmail } = require('./_lib/email');
const { appendLeadRow } = require('./_lib/sheets');

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

    const pool = getPool();

    try {
        const data = req.body;
        const { student_name, parent_name, phone, email, class: cls, board, course, branch } = data;

        if (!student_name || !phone) {
            return res.status(400).json({ success: false, message: 'Student name and phone are required' });
        }

        const leadId = 'CHAT_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6);

        await pool.query(
            `INSERT INTO chatbot_leads (lead_id, student_name, parent_name, phone, email, student_class, board, course, branch)
             VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
            [leadId, student_name, parent_name || '', phone, email || '', cls || '', board || '', course || '', branch || '']
        );

        await sendAdminEmail({
            subject: 'ASQUAREB - New Chatbot Lead',
            body: `New Chatbot Lead!\n\nStudent: ${student_name}\nParent: ${parent_name || 'N/A'}\nPhone: ${phone}\nEmail: ${email || 'Not provided'}\nClass: ${cls || 'N/A'}\nBoard: ${board || 'N/A'}\nCourse: ${course || 'N/A'}\nBranch: ${branch || 'N/A'}\nDate: ${new Date().toISOString()}`
        });

        await appendLeadRow('chatbot', {
            studentName: student_name,
            parentName: parent_name || 'N/A',
            phone,
            email: email || '',
            studentClass: cls || '',
            board: board || '',
            course: course || '',
            branch: branch || '',
            referenceId: leadId
        });

        res.json({ success: true, message: 'Thank you! Our counsellor will contact you shortly.', lead_id: leadId });

    } catch (error) {
        console.error('❌ Chatbot lead error:', error);
        res.status(500).json({ success: false, message: 'An error occurred. Please try again.' });
    }
};
