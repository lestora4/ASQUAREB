// ============================================================
// ASQUAREB - Complete Server with API Routes (Node.js)
// ============================================================

const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const nodemailer = require('nodemailer');

// Load environment variables
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// ============================================================
// MIDDLEWARE
// ============================================================
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Old program URLs -> new program URLs (301)
const OLD_PROGRAM_URLS = {
    'academic-coaching': 'academic-excellence',
    'competitive-exams': 'competitive-exam-preparation',
    'skill-development': 'professional-soft-skills-development',
    'special-programs': 'special-learning-development-programs',
    'technology-programs': 'online-education-skill-development',
    'consultancy-services': 'education-admissions-guidance',
    'career-development': 'career-intelligence-assessment',
    'founder-team': 'orbit-council',
    'distance-learning-skill-development': 'online-education-skill-development'
};
app.use((req, res, next) => {
    const key = req.path.replace(/^\//, '').replace(/\.html$/, '');
    if (Object.prototype.hasOwnProperty.call(OLD_PROGRAM_URLS, key)) {
        return res.redirect(301, '/' + OLD_PROGRAM_URLS[key]);
    }
    next();
});

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// ============================================================
// EMAIL CONFIGURATION
// ============================================================
const emailConfig = {
    host: process.env.EMAIL_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.EMAIL_PORT) || 587,
    secure: false,
    auth: {
        user: process.env.EMAIL_USER || 'care@asquareb.in',
        pass: process.env.EMAIL_PASS || ' xezm ulwc kbul yyun'
    }
};

const transporter = nodemailer.createTransport(emailConfig);

// ============================================================
// DATABASE CONFIGURATION (PostgreSQL)
// ============================================================
const { Pool } = require('pg');

const pool = new Pool({
    host: process.env.NEON_HOST || 'ep-soft-pine-axeo5o24-pooler.c-4.us-east-2.aws.neon.tech',
    database: process.env.NEON_DATABASE || 'neondb',
    user: process.env.NEON_USER || 'neondb_owner',
    password: process.env.NEON_PASSWORD,
    port: 5432,
    ssl: {
        rejectUnauthorized: false
    }
});

// ============================================================
// CREATE TABLES IF NOT EXISTS
// ============================================================
async function initializeDatabase() {
    try {
        await pool.query(`
            CREATE TABLE IF NOT EXISTS leads (
                id SERIAL PRIMARY KEY,
                lead_id VARCHAR(50) UNIQUE NOT NULL,
                full_name VARCHAR(255),
                phone VARCHAR(50),
                email VARCHAR(255),
                form_type VARCHAR(50),
                source VARCHAR(255),
                page_url TEXT,
                course VARCHAR(100),
                type VARCHAR(100),
                city VARCHAR(100),
                message TEXT,
                subject VARCHAR(255),
                category VARCHAR(100),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);
        console.log('✅ Database initialized');
    } catch (err) {
        console.log('⚠️ Database init warning:', err.message);
    }
}

initializeDatabase();

// ============================================================
// API ROUTES
// ============================================================

// ===== TEST API =====
app.get('/api/test', (req, res) => {
    res.json({
        success: true,
        message: 'API is working!',
        timestamp: new Date().toISOString(),
        env: {
            neon_host: process.env.NEON_HOST ? 'Set' : 'Not set',
            email_user: process.env.EMAIL_USER ? 'Set' : 'Not set',
            app_url: process.env.APP_URL || 'Not set'
        }
    });
});

// ===== SUBMIT FORM =====
app.post('/api/submit-form', async (req, res) => {
    try {
        const formData = req.body;
        const formType = formData.form_type;

        console.log('📝 Form submission:', formType);

        // Validate
        if (!formType) {
            return res.status(400).json({
                success: false,
                message: 'Form type is required'
            });
        }

        let result = null;

        // ===== POPUP FORM =====
        if (formType === 'popup') {
            const { full_name, phone, email, source, page_url } = formData;

            if (!full_name || !phone) {
                return res.status(400).json({
                    success: false,
                    message: 'Name and phone are required'
                });
            }

            // Save to database
            const leadId = 'POP_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6);
            await pool.query(
                `INSERT INTO leads (lead_id, full_name, phone, email, form_type, source, page_url)
                 VALUES ($1, $2, $3, $4, $5, $6, $7)`,
                [leadId, full_name, phone, email || 'Not provided', 'popup', source || 'Website', page_url || '']
            );

            // Send email notification
            await sendEmail({
                to: process.env.NOTIFICATION_EMAIL || 'care@asquareb.in',
                subject: 'ASQUAREB - New Popup Enquiry',
                body: `
New Popup Enquiry!

Name: ${full_name}
Phone: ${phone}
Email: ${email || 'Not provided'}
Source: ${source || 'Website'}
Page: ${page_url || 'Unknown'}
Date: ${new Date().toISOString()}
                `.trim()
            });

            result = {
                success: true,
                message: 'Thank you! We will contact you shortly.',
                lead_id: leadId
            };
        }

        // ===== ENQUIRY FORM =====
        else if (formType === 'enquiry') {
            const { first_name, last_name, phone, email, course, type, city, message } = formData;

            if (!first_name || !last_name || !phone || !course) {
                return res.status(400).json({
                    success: false,
                    message: 'Please fill in all required fields'
                });
            }

            const fullName = first_name + ' ' + last_name;
            const leadId = 'ENQ_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6);

            await pool.query(
                `INSERT INTO leads (lead_id, full_name, phone, email, form_type, course, type, city, message)
                 VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
                [leadId, fullName, phone, email || '', 'enquiry', course, type || '', city || '', message || '']
            );

            await sendEmail({
                to: process.env.NOTIFICATION_EMAIL || 'care@asquareb.in',
                subject: 'ASQUAREB - New Enquiry',
                body: `
New Enquiry!

Name: ${fullName}
Phone: ${phone}
Email: ${email || 'Not provided'}
Course: ${course}
Type: ${type || 'N/A'}
City: ${city || 'N/A'}
Message: ${message || 'N/A'}
Date: ${new Date().toISOString()}
                `.trim()
            });

            result = {
                success: true,
                message: 'Thank you! We will contact you within 24 hours.',
                lead_id: leadId
            };
        }

        // ===== CONTACT FORM =====
        else if (formType === 'contact') {
            const { name, email, subject, message } = formData;

            if (!name || !email || !message) {
                return res.status(400).json({
                    success: false,
                    message: 'Please fill in all required fields'
                });
            }

            const leadId = 'CON_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6);

            await pool.query(
                `INSERT INTO leads (lead_id, full_name, email, form_type, subject, message)
                 VALUES ($1, $2, $3, $4, $5, $6)`,
                [leadId, name, email, 'contact', subject || '', message]
            );

            await sendEmail({
                to: process.env.NOTIFICATION_EMAIL || 'care@asquareb.in',
                subject: 'ASQUAREB - New Contact Message',
                body: `
New Contact Message!

Name: ${name}
Email: ${email}
Subject: ${subject || 'N/A'}
Message: ${message}
Date: ${new Date().toISOString()}
                `.trim()
            });

            result = {
                success: true,
                message: 'Thank you! We will get back to you soon.'
            };
        }

        // ===== NEWSLETTER FORM =====
        else if (formType === 'newsletter') {
            const { full_name, email, phone, interested_category } = formData;

            if (!full_name || !email) {
                return res.status(400).json({
                    success: false,
                    message: 'Name and email are required'
                });
            }

            const leadId = 'NEW_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6);

            await pool.query(
                `INSERT INTO leads (lead_id, full_name, email, phone, form_type, category)
                 VALUES ($1, $2, $3, $4, $5, $6)`,
                [leadId, full_name, email, phone || '', 'newsletter', interested_category || '']
            );

            result = {
                success: true,
                message: 'Thank you for subscribing!'
            };
        }

        else {
            return res.status(400).json({
                success: false,
                message: 'Unknown form type'
            });
        }

        // Send success response
        res.json(result);

    } catch (error) {
        console.error('❌ Form submission error:', error);
        res.status(500).json({
            success: false,
            message: 'An error occurred. Please try again.',
            error: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    }
});

// ===== CHATBOT LEAD CAPTURE =====
app.post('/chatbot/lead.php', async (req, res) => {
    try {
        const data = req.body;
        const { student_name, parent_name, phone, email, class: cls, board, course, branch } = data;

        if (!student_name || !phone) {
            return res.status(400).json({
                success: false,
                message: 'Student name and phone are required'
            });
        }

        const leadId = 'CHAT_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6);

        await pool.query(
            `INSERT INTO leads (lead_id, full_name, phone, email, form_type, course, message)
             VALUES ($1, $2, $3, $4, $5, $6, $7)`,
            [leadId, student_name + (parent_name ? ' (Parent: ' + parent_name + ')' : ''), phone, email || '', 'chatbot', course || '', 'Board: ' + board + ', Class: ' + cls + ', Branch: ' + branch]
        );

        // Send email
        await sendEmail({
            to: process.env.NOTIFICATION_EMAIL || 'care@asquareb.in',
            subject: 'ASQUAREB - New Chatbot Lead',
            body: `
New Chatbot Lead!

Student Name: ${student_name}
Parent Name: ${parent_name || 'N/A'}
Phone: ${phone}
Email: ${email || 'Not provided'}
Class: ${cls || 'N/A'}
Board: ${board || 'N/A'}
Course: ${course || 'N/A'}
Branch: ${branch || 'N/A'}
Date: ${new Date().toISOString()}
            `.trim()
        });

        res.json({
            success: true,
            message: 'Thank you! Our counsellor will contact you shortly.',
            lead_id: leadId
        });

    } catch (error) {
        console.error('❌ Chatbot lead error:', error);
        res.status(500).json({
            success: false,
            message: 'An error occurred. Please try again.'
        });
    }
});

// ===== GET LEADS (Admin only) =====
app.get('/api/leads', async (req, res) => {
    try {
        const result = await pool.query(
            'SELECT * FROM leads ORDER BY created_at DESC LIMIT 100'
        );
        res.json({
            success: true,
            count: result.rows.length,
            data: result.rows
        });
    } catch (error) {
        console.error('❌ Error fetching leads:', error);
        res.status(500).json({
            success: false,
            message: 'Error fetching leads'
        });
    }
});

// ============================================================
// EMAIL HELPER FUNCTION
// ============================================================
async function sendEmail({ to, subject, body }) {
    try {
        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
            console.log('⚠️ Email credentials not configured, logging instead:');
            console.log(`To: ${to}, Subject: ${subject}`);
            console.log(body);
            return true;
        }

        const mailOptions = {
            from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
            to: to,
            subject: subject,
            text: body
        };

        await transporter.sendMail(mailOptions);
        console.log('✅ Email sent to:', to);
        return true;
    } catch (error) {
        console.error('❌ Email error:', error.message);
        return false;
    }
}

// ============================================================
// SERVE HTML PAGES
// ============================================================
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get('/orbit-council', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'orbit-council.html'));
});

app.get('/founder-afsar-baig', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'founder-afsar-baig.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

app.get('/enquiry', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'enquiry.html'));
});

app.get('/blog', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'blog.html'));
});

app.get('/programs', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'programs.html'));
});

app.get('/faq', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'faq.html'));
});

app.get('/gallery', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'gallery.html'));
});

app.get('/privacy', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'privacy.html'));
});

app.get('/refund-cancellation-policy', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'refund-cancellation-policy.html'));
});

app.get('/cookie-policy', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'cookie-policy.html'));
});

app.get('/admissions-consultancy-disclaimer', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'admissions-consultancy-disclaimer.html'));
});

app.get('/child-protection-parental-consent', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'child-protection-parental-consent.html'));
});

app.get('/marketing-communication-consent', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'marketing-communication-consent.html'));
});

app.get('/campus-connect', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'campus-connect.html'));
});

app.get('/orbit-alliance', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'orbit-alliance.html'));
});

app.get('/orbit-innovate', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'orbit-innovate.html'));
});

app.get('/terms', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'terms.html'));
});

// Handle all other routes - serve static files or 404
app.get('*', (req, res) => {
    // Try to serve as .html file
    const url = req.path.replace(/^\//, '').replace(/\/$/, '');
    if (url) {
        const htmlPath = path.join(__dirname, 'public', url + '.html');
        if (fs.existsSync(htmlPath)) {
            return res.sendFile(htmlPath);
        }
    }
    res.status(404).send('Page not found');
});

// ============================================================
// START SERVER
// ============================================================
app.listen(PORT, () => {
    console.log('========================================');
    console.log('🚀 ASQUAREB Node.js Server Running!');
    console.log('========================================');
    console.log(`📍 URL: http://localhost:${PORT}`);
    console.log(`📍 About: http://localhost:${PORT}/about`);
    console.log(`📍 Contact: http://localhost:${PORT}/contact`);
    console.log(`📍 Enquiry: http://localhost:${PORT}/enquiry`);
    console.log(`📍 Blog: http://localhost:${PORT}/blog`);
    console.log(`📍 Programs: http://localhost:${PORT}/programs`);
    console.log('========================================');
    console.log(`📁 Serving files from: ${path.join(__dirname, 'public')}`);
    console.log(`📧 Email: ${process.env.EMAIL_USER ? 'Configured' : 'Not configured'}`);
    console.log(`🗄️ Database: ${process.env.NEON_HOST ? 'Configured' : 'Not configured'}`);
    console.log('========================================');
});