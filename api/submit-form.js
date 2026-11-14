// ============================================================
// ASQUAREB - Form Submission API (Vercel Serverless)
// Each form type writes to its own table, notifies admin by
// email, and logs a row to Google Sheets (with Source column).
// Email/Sheets failures never block the form's success response.
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
        return res.status(405).json({
            success: false,
            message: 'Method not allowed'
        });
    }

    const pool = getPool();

    try {
        const formData = req.body;
        const formType = formData.form_type;

        console.log('📝 Form submission:', formType);

        if (!formType) {
            return res.status(400).json({
                success: false,
                message: 'Form type is required'
            });
        }

        // Privacy Policy acknowledgement is required on enquiry / registration style forms
        const PRIVACY_REQUIRED = ['popup','enquiry','contact','global_education','career_application','partnership_enquiry'];
        if (PRIVACY_REQUIRED.includes(formType) && formData.privacy_consent !== true) {
            return res.status(400).json({
                success: false,
                message: 'Please confirm that you have read the Privacy Policy before submitting.'
            });
        }

        let result = null;

        // ===== POPUP FORM → popup_leads =====
        if (formType === 'popup') {
            const { full_name, phone, email, preferred_program } = formData;

            if (!full_name || !phone) {
                return res.status(400).json({
                    success: false,
                    message: 'Name and phone are required'
                });
            }

            const leadId = 'POP_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6);

            await pool.query(
                `INSERT INTO popup_leads (lead_id, full_name, phone, email, preferred_program)
                 VALUES ($1, $2, $3, $4, $5)`,
                [leadId, full_name, phone, email || 'Not provided', preferred_program || '']
            );

            // Side effects — never block the response on these
            await sendAdminEmail({
                subject: 'ASQUAREB - New Free Consultation Enquiry',
                body: `New Free Consultation Enquiry!\n\nName: ${full_name}\nPhone: ${phone}\nEmail: ${email || 'Not provided'}\nPreferred Program: ${preferred_program || 'Not selected'}\nDate: ${new Date().toISOString()}`
            });
            await appendLeadRow('popup', {
                name: full_name,
                phone,
                email: email || 'Not provided',
                preferredProgram: preferred_program || '',
                referenceId: leadId
            });

            result = {
                success: true,
                message: 'Thank you! We will contact you shortly.',
                lead_id: leadId
            };
        }

        // ===== ENQUIRY FORM (Admission Enquiry) → enquiry_leads =====
        else if (formType === 'enquiry') {
            const {
                student_name, parent_name, phone, email,
                current_class, board, preferred_program, counselling_mode,
                city, counselling_date, notes
            } = formData;

            if (!student_name || !phone || !current_class || !board || !preferred_program || !counselling_mode || !city) {
                return res.status(400).json({
                    success: false,
                    message: 'Please fill in all required fields'
                });
            }

            const leadId = 'ENQ_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6);

            await pool.query(
                `INSERT INTO enquiry_leads
                    (lead_id, student_name, parent_name, phone, email, current_class, board, preferred_program, counselling_mode, city, counselling_date)
                 VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`,
                [leadId, student_name, parent_name || '', phone, email || '', current_class, board, preferred_program, counselling_mode, city, counselling_date || null]
            );

            await sendAdminEmail({
                subject: 'ASQUAREB - New Admission Enquiry',
                body: `New Admission Enquiry!\n\nStudent Name: ${student_name}\nParent Name: ${parent_name || 'N/A'}\nMobile Number: ${phone}\nEmail: ${email || 'Not provided'}\nCurrent Class: ${current_class}\nBoard/University: ${board}\nPreferred Program: ${preferred_program}\nPreferred Counselling Mode: ${counselling_mode}\nCity: ${city}\nCounselling Date Preference: ${counselling_date || 'Not specified'}\nNotes: ${notes || 'None'}\nDate: ${new Date().toISOString()}`
            });
            await appendLeadRow('enquiry', {
                studentName: student_name,
                parentName: parent_name || 'N/A',
                phone,
                email: email || '',
                currentClass: current_class,
                board,
                preferredProgram: preferred_program,
                counsellingMode: counselling_mode,
                city,
                counsellingDate: counselling_date || 'N/A',
                referenceId: leadId
            });

            result = {
                success: true,
                message: 'Thank you! We will contact you within 24 hours.',
                lead_id: leadId
            };
        }

        // ===== CONTACT FORM → contact_messages =====
        else if (formType === 'contact') {
            const { name, email, subject, message } = formData;

            if (!name || !email || !message) {
                return res.status(400).json({
                    success: false,
                    message: 'Please fill in all required fields'
                });
            }

            const messageId = 'CON_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6);

            await pool.query(
                `INSERT INTO contact_messages (message_id, name, email, subject, message)
                 VALUES ($1, $2, $3, $4, $5)`,
                [messageId, name, email, subject || '', message]
            );

            await sendAdminEmail({
                subject: 'ASQUAREB - New Contact Message',
                body: `New Contact Message!\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject || 'N/A'}\nMessage: ${message}\nDate: ${new Date().toISOString()}`
            });
            await appendLeadRow('contact', {
                name,
                email,
                subject: subject || 'N/A',
                message,
                referenceId: messageId
            });

            result = {
                success: true,
                message: 'Thank you! We will get back to you soon.'
            };
        }

        // ===== NEWSLETTER FORM → newsletter_subscribers =====
        else if (formType === 'newsletter') {
            const { full_name, email, phone, interested_category } = formData;

            if (!full_name || !email) {
                return res.status(400).json({
                    success: false,
                    message: 'Name and email are required'
                });
            }

            const subscriberId = 'NEW_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6);

            try {
                await pool.query(
                    `INSERT INTO newsletter_subscribers (subscriber_id, full_name, email, phone, interested_category)
                     VALUES ($1, $2, $3, $4, $5)`,
                    [subscriberId, full_name, email, phone || '', interested_category || '']
                );
            } catch (dbErr) {
                if (dbErr.code === '23505') {
                    return res.status(200).json({
                        success: true,
                        message: 'You are already subscribed!'
                    });
                }
                throw dbErr;
            }

            await sendAdminEmail({
                subject: 'ASQUAREB - New Newsletter Subscriber',
                body: `New Newsletter Subscriber!\n\nName: ${full_name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\nInterested Category: ${interested_category || 'N/A'}\nDate: ${new Date().toISOString()}`
            });
            await appendLeadRow('newsletter', {
                name: full_name,
                email,
                phone: phone || '',
                interestedCategory: interested_category || 'N/A',
                referenceId: subscriberId
            });

            result = {
                success: true,
                message: 'Thank you for subscribing!'
            };
        }

        // ===== GLOBAL EDUCATION REGISTRATION → global_education_registrations =====
        else if (formType === 'global_education') {
            const clean = (v, max) => String(v == null ? '' : v).trim().slice(0, max);

            // Honeypot: real visitors never fill this hidden field. Pretend success, store nothing.
            if (clean(formData.website, 200)) {
                return res.json({ success: true, message: 'Thank you! Our counsellor will contact you shortly.' });
            }

            const full_name    = clean(formData.full_name, 120);
            const email        = clean(formData.email, 160).toLowerCase();
            const country_code = clean(formData.country_code, 6) || '+91';
            const mobile       = clean(formData.mobile, 20).replace(/\D/g, '');
            const pincode      = clean(formData.pincode, 12);
            const source_page  = clean(formData.source_page, 120) || 'global-education-register';

            if (full_name.length < 2) {
                return res.status(400).json({ success: false, message: 'Please enter your full name.' });
            }
            if (!email && !mobile) {
                return res.status(400).json({ success: false, message: 'Please enter at least one of Email or Mobile.' });
            }
            if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
                return res.status(400).json({ success: false, message: 'Please enter a valid email address.' });
            }
            if (!/^\+\d{1,4}$/.test(country_code)) {
                return res.status(400).json({ success: false, message: 'Invalid country code.' });
            }
            if (mobile) {
                const okMobile = country_code === '+91' ? /^[6-9]\d{9}$/.test(mobile) : /^\d{6,14}$/.test(mobile);
                if (!okMobile) {
                    return res.status(400).json({ success: false, message: 'Please enter a valid mobile number.' });
                }
            }
            if (pincode && !/^[A-Za-z0-9][A-Za-z0-9 -]{1,10}$/.test(pincode)) {
                return res.status(400).json({ success: false, message: 'Please enter a valid pincode.' });
            }

            const registrationId = 'GEA_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6);

            await pool.query(
                `INSERT INTO global_education_registrations
                    (registration_id, full_name, email, country_code, mobile, pincode, source_page)
                 VALUES ($1, $2, $3, $4, $5, $6, $7)`,
                [registrationId, full_name, email, country_code, mobile, pincode, source_page]
            );

            // Email to care@asquareb.in (NOTIFICATION_EMAIL). Never blocks the success response.
            const emailed = await sendAdminEmail({
                subject: 'ASQUAREB - New Global Education Registration',
                body: `New Global Education & Admissions Registration!\n\n` +
                      `Name: ${full_name}\n` +
                      `Email: ${email || 'Not provided'}\n` +
                      `Mobile: ${mobile ? country_code + ' ' + mobile : 'Not provided'}\n` +
                      `Pincode: ${pincode || 'Not provided'}\n` +
                      `Reference: ${registrationId}\n` +
                      `Date: ${new Date().toISOString()}`
            });
            if (emailed) {
                try {
                    await pool.query(
                        'UPDATE global_education_registrations SET email_sent = TRUE WHERE registration_id = $1',
                        [registrationId]
                    );
                } catch (e) {
                    console.error('⚠️ Could not flag email_sent:', e.message);
                }
            }

            result = {
                success: true,
                message: 'Thank you for registering! Our counsellor will contact you shortly.',
                registration_id: registrationId
            };
        }

        // ===== CAREER APPLICATION → career_applications (+ career_application_resumes) =====
        else if (formType === 'career_application') {
            const clean = (v, max) => String(v == null ? '' : v).trim().slice(0, max);
            const num = (v) => {
                const n = parseFloat(String(v == null ? '' : v).trim());
                return Number.isFinite(n) && n >= 0 && n < 1000 ? n : null;
            };

            // Honeypot
            if (clean(formData.website, 200)) {
                return res.json({ success: true, message: 'Application submitted.' });
            }

            const role_title    = clean(formData.role_title, 120);
            const full_name     = clean(formData.full_name, 120);
            const mobile        = clean(formData.mobile, 20).replace(/\D/g, '');
            const email         = clean(formData.email, 160).toLowerCase();
            const qualification = clean(formData.qualification, 120);
            const state         = clean(formData.state, 80);
            const city          = clean(formData.city, 80);
            const career_type   = clean(formData.career_type, 20);
            const relocate      = clean(formData.relocate, 5);
            const onsite_ok     = clean(formData.onsite_ok, 5);
            const notice_period = clean(formData.notice_period, 60);
            const previous_industry = clean(formData.previous_industry, 120);

            const bad = (message) => res.status(400).json({ success: false, message });

            if (!role_title) return bad('Please choose a role to apply for.');
            if (full_name.length < 2) return bad('Please enter your full name.');
            if (!/^[6-9]\d{9}$/.test(mobile)) return bad('Please enter a valid 10-digit mobile number.');
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) return bad('Please enter a valid email address.');
            if (!qualification || !state || !city) return bad('Qualification, state and city are required.');
            if (!['Fresher', 'Experienced'].includes(career_type)) return bad('Please select Fresher or Experienced.');
            if (!['Yes', 'No'].includes(relocate)) return bad('Please tell us whether you can relocate.');
            if (!['Yes', 'No'].includes(onsite_ok)) return bad('Please select your office preference.');

            const expected_ctc_lpa = num(formData.expected_ctc_lpa);
            if (expected_ctc_lpa === null) return bad('Please enter your expected CTC.');

            let experience_years = null, current_ctc_lpa = null;
            if (career_type === 'Experienced') {
                experience_years = num(formData.experience_years);
                current_ctc_lpa  = num(formData.current_ctc_lpa);
                if (experience_years === null || current_ctc_lpa === null || !previous_industry) {
                    return bad('Please complete your experience details.');
                }
                if (experience_years < 2) {
                    return bad('Minimum 2 years of experience is required to apply.');
                }
            }

            // Languages: whitelist only
            const LANGS = ['English', 'Malayalam', 'Hindi', 'Kannada'];
            const languages = (Array.isArray(formData.languages) ? formData.languages : [])
                .filter(l => LANGS.includes(l)).join(', ');

            // Skills: up to 10, each { name, rating 1-5 }
            const skills = (Array.isArray(formData.skills) ? formData.skills : [])
                .slice(0, 10)
                .map(s => ({ name: clean(s && s.name, 60), rating: parseInt(s && s.rating, 10) }))
                .filter(s => s.name)
                .map(s => `${s.name} (${s.rating >= 1 && s.rating <= 5 ? s.rating : '-'})`)
                .join(', ');

            // Resume: max 10 MB, PDF / DOC / DOCX verified by file signature.
            // Normally arrives as chunks stored by /api/career-upload (resume_upload_id);
            // a plain base64 body is still accepted for small files.
            const MAX_RESUME_BYTES = 10 * 1024 * 1024;
            const resume_name = clean(formData.resume_name, 160).replace(/[^\w.\- ()]/g, '_');
            const uploadId = clean(formData.resume_upload_id, 40);
            let buf;
            if (uploadId) {
                if (!/^[a-z0-9]{16,40}$/i.test(uploadId)) return bad('Invalid resume upload. Please re-select your file.');
                const cr = await pool.query(
                    'SELECT chunk_index, total_chunks, data FROM career_resume_chunks WHERE upload_id = $1 ORDER BY chunk_index',
                    [uploadId]
                );
                const ok = cr.rows.length && cr.rows.length === cr.rows[0].total_chunks &&
                           cr.rows.every((r, i) => r.chunk_index === i);
                if (!ok) return bad('Your resume upload was incomplete. Please try again.');
                buf = Buffer.concat(cr.rows.map(r => r.data));
            } else {
                const b64 = String(formData.resume_base64 || '');
                if (!b64) return bad('Resume is required.');
                buf = Buffer.from(b64, 'base64');
            }
            if (!buf.length) return bad('Resume is required.');
            if (buf.length > MAX_RESUME_BYTES) return bad('Resume must be 10 MB or smaller.');
            let mime = null;
            if (buf.slice(0, 4).toString('latin1') === '%PDF') mime = 'application/pdf';
            else if (buf[0] === 0x50 && buf[1] === 0x4b) mime = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
            else if (buf[0] === 0xd0 && buf[1] === 0xcf && buf[2] === 0x11 && buf[3] === 0xe0) mime = 'application/msword';
            if (!mime) return bad('Please upload your resume as a PDF, DOC or DOCX file.');

            const applicationId = 'CAR_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6);

            const client = await pool.connect();
            try {
                await client.query('BEGIN');
                await client.query(
                    `INSERT INTO career_applications
                        (application_id, role_title, full_name, mobile, email, qualification, state, city,
                         career_type, experience_years, previous_industry, current_ctc_lpa, expected_ctc_lpa,
                         notice_period, languages, relocate, skills, onsite_ok, resume_name)
                     VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19)`,
                    [applicationId, role_title, full_name, mobile, email, qualification, state, city,
                     career_type, experience_years, previous_industry, current_ctc_lpa, expected_ctc_lpa,
                     notice_period, languages, relocate, skills, onsite_ok, resume_name]
                );
                await client.query(
                    `INSERT INTO career_application_resumes (application_id, file_name, mime_type, size_bytes, data)
                     VALUES ($1,$2,$3,$4,$5)`,
                    [applicationId, resume_name || 'resume', mime, buf.length, buf]
                );
                await client.query('COMMIT');
            } catch (e) {
                await client.query('ROLLBACK').catch(() => {});
                throw e;
            } finally {
                client.release();
            }
            if (uploadId) {
                pool.query('DELETE FROM career_resume_chunks WHERE upload_id = $1', [uploadId]).catch(() => {});
            }

            const emailed = await sendAdminEmail({
                subject: `ASQUAREB - New Career Application: ${role_title}`,
                body: `New Career Application!\n\n` +
                      `Role: ${role_title}\n` +
                      `Name: ${full_name}\n` +
                      `Mobile: ${mobile}\n` +
                      `Email: ${email}\n` +
                      `Qualification: ${qualification}\n` +
                      `Location: ${city}, ${state}\n` +
                      `Type: ${career_type}` +
                      (career_type === 'Experienced' ? ` (${experience_years} yrs, ${previous_industry}, current ${current_ctc_lpa} LPA, notice: ${notice_period || 'n/a'})` : '') + `\n` +
                      `Expected CTC: ${expected_ctc_lpa} LPA\n` +
                      `Languages: ${languages || 'Not provided'}\n` +
                      `Relocate: ${relocate} | Onsite OK: ${onsite_ok}\n` +
                      `Skills: ${skills || 'Not provided'}\n` +
                      `Resume: ${resume_name} (download from the admin dashboard > Careers)\n` +
                      `Reference: ${applicationId}\n` +
                      `Date: ${new Date().toISOString()}`
            });
            if (emailed) {
                try {
                    await pool.query('UPDATE career_applications SET email_sent = TRUE WHERE application_id = $1', [applicationId]);
                } catch (e) {
                    console.error('⚠️ Could not flag email_sent:', e.message);
                }
            }

            result = {
                success: true,
                message: `Your application for ${role_title} was submitted successfully.`,
                application_id: applicationId
            };
        }

        // ===== PARTNERSHIP ENQUIRY (Campus Connect / Orbit Alliance / Orbit Innovate) =====
        else if (formType === 'partnership_enquiry') {
            const clean = (v, max) => String(v == null ? '' : v).trim().slice(0, max);
            const bad = (message) => res.status(400).json({ success: false, message });

            if (clean(formData.hp_field, 200)) return res.json({ success: true, message: 'Enquiry submitted.' }); // honeypot

            const PROGRAMMES = { campus_connect: 'AsquareB Campus Connect', orbit_alliance: 'AsquareB Orbit Alliance', orbit_innovate: 'AsquareB Orbit Innovate' };
            const programme = clean(formData.programme, 40);
            if (!PROGRAMMES[programme]) return bad('Unknown programme. Please reload the page and try again.');

            const org_name = clean(formData.org_name, 200);
            const website = clean(formData.website, 300);
            const registration_details = clean(formData.registration_details, 300);
            const contact_person = clean(formData.contact_person, 120);
            const designation = clean(formData.designation, 120);
            const email = clean(formData.email, 160).toLowerCase();
            let phone = clean(formData.phone, 25).replace(/\D/g, '').replace(/^91(?=\d{10}$)/, '').replace(/^0(?=\d{10}$)/, '');
            const org_category = clean(formData.org_category, 120);
            const partnership_type = clean(formData.partnership_type, 160);
            const summary = clean(formData.summary, 2000);

            if (org_name.length < 2) return bad('Please enter the company / institution name.');
            if (contact_person.length < 2 || designation.length < 2) return bad('Please enter the contact person and designation.');
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) return bad('Please enter a valid business email address.');
            if (!/^[6-9]\d{9}$/.test(phone)) return bad('Please enter a valid 10-digit phone number.');
            if (!org_category) return bad('Please select the organisation category.');
            if (!partnership_type) return bad('Please select the nature of the proposed partnership.');
            if (website && !/^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,}(\/\S*)?$/i.test(website)) return bad('Please enter a valid website URL.');

            // Optional proposal document: max 10 MB, PDF / DOC / DOCX / PPT / PPTX verified by file signature.
            const MAX_BYTES = 10 * 1024 * 1024;
            const uploadId = clean(formData.proposal_upload_id, 40);
            let buf = null, mime = null, fileName = '';
            if (uploadId) {
                if (!/^[a-z0-9]{16,40}$/i.test(uploadId)) return bad('Invalid file upload. Please re-select your document.');
                const cr = await pool.query(
                    'SELECT chunk_index, total_chunks, data FROM career_resume_chunks WHERE upload_id = $1 ORDER BY chunk_index',
                    [uploadId]
                );
                const ok = cr.rows.length && cr.rows.length === cr.rows[0].total_chunks && cr.rows.every((r, i) => r.chunk_index === i);
                if (!ok) return bad('Your document upload was incomplete. Please try again.');
                buf = Buffer.concat(cr.rows.map(r => r.data));
                if (!buf.length) return bad('The selected file is empty.');
                if (buf.length > MAX_BYTES) return bad('The proposal document must be 10 MB or smaller.');
                const head = buf.slice(0, 4);
                const name = clean(formData.proposal_name, 160).replace(/[^\w.\- ()]/g, '_') || 'proposal';
                const ext = (name.match(/\.([A-Za-z0-9]+)$/) || [])[1];
                const lower = (ext || '').toLowerCase();
                if (head.toString('latin1') === '%PDF' && lower === 'pdf') mime = 'application/pdf';
                else if (head[0] === 0x50 && head[1] === 0x4b && ['docx', 'pptx'].includes(lower)) mime = lower === 'docx'
                    ? 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
                    : 'application/vnd.openxmlformats-officedocument.presentationml.presentation';
                else if (head[0] === 0xd0 && head[1] === 0xcf && head[2] === 0x11 && head[3] === 0xe0 && ['doc', 'ppt'].includes(lower)) mime = lower === 'doc' ? 'application/msword' : 'application/vnd.ms-powerpoint';
                if (!mime) return bad('Please attach a PDF, DOC, DOCX, PPT or PPTX file.');
                fileName = name;
            }

            await pool.query(`
                CREATE TABLE IF NOT EXISTS partnership_enquiries (
                    id SERIAL PRIMARY KEY,
                    reference TEXT UNIQUE NOT NULL,
                    programme TEXT NOT NULL,
                    org_name TEXT NOT NULL,
                    website TEXT,
                    registration_details TEXT,
                    contact_person TEXT NOT NULL,
                    designation TEXT NOT NULL,
                    email TEXT NOT NULL,
                    phone TEXT NOT NULL,
                    org_category TEXT NOT NULL,
                    partnership_type TEXT NOT NULL,
                    summary TEXT,
                    proposal_name TEXT,
                    proposal_mime TEXT,
                    proposal_size INTEGER,
                    proposal_data BYTEA,
                    privacy_consent BOOLEAN NOT NULL DEFAULT TRUE,
                    source_page TEXT,
                    email_sent BOOLEAN NOT NULL DEFAULT FALSE,
                    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
                )`);

            const reference = 'PAR_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5).toUpperCase();
            await pool.query(
                `INSERT INTO partnership_enquiries
                    (reference, programme, org_name, website, registration_details, contact_person, designation, email, phone,
                     org_category, partnership_type, summary, proposal_name, proposal_mime, proposal_size, proposal_data, source_page)
                 VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17)`,
                [reference, PROGRAMMES[programme], org_name, website, registration_details, contact_person, designation, email, phone,
                 org_category, partnership_type, summary, fileName || null, mime, buf ? buf.length : null, buf, clean(formData.source_page, 200)]
            );
            if (uploadId) pool.query('DELETE FROM career_resume_chunks WHERE upload_id = $1', [uploadId]).catch(() => {});

            const emailed = await sendAdminEmail({
                to: process.env.PARTNERSHIP_NOTIFICATION_EMAIL || undefined,
                replyTo: email,
                subject: `ASQUAREB - New Partnership Enquiry (${PROGRAMMES[programme]}): ${org_name}`,
                body: `New Partnership Enquiry\n\n` +
                      `Programme: ${PROGRAMMES[programme]}\n` +
                      `Organisation: ${org_name}\n` +
                      `Category: ${org_category}\n` +
                      `Nature of partnership: ${partnership_type}\n` +
                      `Website: ${website || 'Not provided'}\n` +
                      `Registration details: ${registration_details || 'Not provided'}\n` +
                      `Contact: ${contact_person} (${designation})\n` +
                      `Email: ${email}\n` +
                      `Phone: ${phone}\n` +
                      `Summary: ${summary || 'Not provided'}\n` +
                      `Proposal document: ${fileName ? fileName + ' (attached)' : 'None attached'}\n` +
                      `Privacy Policy acknowledged: Yes\n` +
                      `Reference: ${reference}\n` +
                      `Date: ${new Date().toISOString()}`,
                attachments: buf ? [{ filename: fileName, content: buf, contentType: mime }] : undefined
            });
            if (emailed) pool.query('UPDATE partnership_enquiries SET email_sent = TRUE WHERE reference = $1', [reference]).catch(() => {});

            result = { success: true, message: 'Your enquiry was submitted successfully.', reference };
        }

        else {
            return res.status(400).json({
                success: false,
                message: 'Unknown form type'
            });
        }

        res.json(result);

    } catch (error) {
        console.error('❌ Form submission error:', error);
        res.status(500).json({
            success: false,
            message: 'An error occurred. Please try again.'
        });
    }
};
