-- ============================================================
-- AsquareB - FULL Neon setup (paste ALL of this in Neon SQL Editor, click Run)
-- Safe to re-run: tables use IF NOT EXISTS (no data is ever deleted),
-- only the admin login below is reset.
-- ============================================================

CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- 1) Popup enquiry form
CREATE TABLE IF NOT EXISTS popup_leads (
    id          BIGSERIAL PRIMARY KEY,
    lead_id     TEXT NOT NULL UNIQUE,
    full_name   TEXT NOT NULL,
    phone       TEXT NOT NULL,
    email       TEXT NOT NULL DEFAULT '',
    created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 2) Admission enquiry form
CREATE TABLE IF NOT EXISTS enquiry_leads (
    id               BIGSERIAL PRIMARY KEY,
    lead_id          TEXT NOT NULL UNIQUE,
    student_name     TEXT NOT NULL,
    parent_name      TEXT NOT NULL DEFAULT '',
    phone            TEXT NOT NULL,
    email            TEXT NOT NULL DEFAULT '',
    current_class    TEXT NOT NULL,
    board            TEXT NOT NULL,
    course           TEXT NOT NULL,
    branch           TEXT NOT NULL,
    learning_mode    TEXT NOT NULL,
    city             TEXT NOT NULL,
    counselling_date DATE,
    created_at       TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 3) Contact page messages
CREATE TABLE IF NOT EXISTS contact_messages (
    id          BIGSERIAL PRIMARY KEY,
    message_id  TEXT NOT NULL UNIQUE,
    name        TEXT NOT NULL,
    email       TEXT NOT NULL DEFAULT '',
    subject     TEXT NOT NULL DEFAULT '',
    message     TEXT NOT NULL DEFAULT '',
    created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 4) Newsletter
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
    id                  BIGSERIAL PRIMARY KEY,
    subscriber_id       TEXT NOT NULL UNIQUE,
    full_name           TEXT NOT NULL DEFAULT '',
    email               TEXT NOT NULL UNIQUE,
    phone               TEXT NOT NULL DEFAULT '',
    interested_category TEXT NOT NULL DEFAULT '',
    subscribed_at       TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 5) Global Education & Admissions registrations
CREATE TABLE IF NOT EXISTS global_education_registrations (
    id               BIGSERIAL PRIMARY KEY,
    registration_id  TEXT        NOT NULL UNIQUE,
    full_name        TEXT        NOT NULL,
    email            TEXT        NOT NULL DEFAULT '',
    country_code     TEXT        NOT NULL DEFAULT '+91',
    mobile           TEXT        NOT NULL DEFAULT '',
    pincode          TEXT        NOT NULL DEFAULT '',
    source_page      TEXT        NOT NULL DEFAULT 'global-education-register',
    email_sent       BOOLEAN     NOT NULL DEFAULT FALSE,
    created_at       TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT gea_contact_required CHECK (email <> '' OR mobile <> '')
);
CREATE INDEX IF NOT EXISTS idx_gea_created_at   ON global_education_registrations (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_gea_email        ON global_education_registrations (LOWER(email));
CREATE INDEX IF NOT EXISTS idx_gea_mobile       ON global_education_registrations (mobile);
CREATE INDEX IF NOT EXISTS idx_gea_country_code ON global_education_registrations (country_code);

-- 6) Careers applications + resume files
CREATE TABLE IF NOT EXISTS career_applications (
    id                BIGSERIAL PRIMARY KEY,
    application_id    TEXT        NOT NULL UNIQUE,
    role_title        TEXT        NOT NULL,
    full_name         TEXT        NOT NULL,
    mobile            TEXT        NOT NULL,
    email             TEXT        NOT NULL,
    qualification     TEXT        NOT NULL,
    state             TEXT        NOT NULL,
    city              TEXT        NOT NULL,
    career_type       TEXT        NOT NULL,
    experience_years  NUMERIC(4,1),
    previous_industry TEXT        NOT NULL DEFAULT '',
    current_ctc_lpa   NUMERIC(6,2),
    expected_ctc_lpa  NUMERIC(6,2),
    notice_period     TEXT        NOT NULL DEFAULT '',
    languages         TEXT        NOT NULL DEFAULT '',
    relocate          TEXT        NOT NULL DEFAULT '',
    skills            TEXT        NOT NULL DEFAULT '',
    onsite_ok         TEXT        NOT NULL DEFAULT '',
    resume_name       TEXT        NOT NULL DEFAULT '',
    email_sent        BOOLEAN     NOT NULL DEFAULT FALSE,
    created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT car_career_type_chk CHECK (career_type IN ('Fresher', 'Experienced'))
);

CREATE TABLE IF NOT EXISTS career_application_resumes (
    application_id TEXT PRIMARY KEY REFERENCES career_applications (application_id) ON DELETE CASCADE,
    file_name      TEXT        NOT NULL,
    mime_type      TEXT        NOT NULL,
    size_bytes     INTEGER     NOT NULL,
    data           BYTEA       NOT NULL,
    created_at     TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
-- Temporary storage for resume pieces while a 10 MB upload is in progress.
-- (api/career-upload.js also creates this automatically if it is missing.)
CREATE TABLE IF NOT EXISTS career_resume_chunks (
    upload_id    TEXT        NOT NULL,
    chunk_index  INTEGER     NOT NULL,
    total_chunks INTEGER     NOT NULL,
    data         BYTEA       NOT NULL,
    created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    PRIMARY KEY (upload_id, chunk_index)
);

CREATE INDEX IF NOT EXISTS idx_car_created_at ON career_applications (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_car_role       ON career_applications (role_title);
CREATE INDEX IF NOT EXISTS idx_car_email      ON career_applications (LOWER(email));

-- 7) Chatbot leads
CREATE TABLE IF NOT EXISTS chatbot_leads (
    id            BIGSERIAL PRIMARY KEY,
    lead_id       TEXT NOT NULL UNIQUE,
    student_name  TEXT NOT NULL DEFAULT '',
    parent_name   TEXT NOT NULL DEFAULT '',
    phone         TEXT NOT NULL DEFAULT '',
    email         TEXT NOT NULL DEFAULT '',
    student_class TEXT NOT NULL DEFAULT '',
    board         TEXT NOT NULL DEFAULT '',
    course        TEXT NOT NULL DEFAULT '',
    branch        TEXT NOT NULL DEFAULT '',
    created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ------------------------------------------------------------
-- MIGRATION: Preferred Program + Preferred Counselling Mode
-- (safe to re-run; no data is deleted)
-- ------------------------------------------------------------
ALTER TABLE popup_leads   ADD COLUMN IF NOT EXISTS preferred_program TEXT NOT NULL DEFAULT '';
ALTER TABLE enquiry_leads ADD COLUMN IF NOT EXISTS preferred_program TEXT NOT NULL DEFAULT '';
ALTER TABLE enquiry_leads ADD COLUMN IF NOT EXISTS counselling_mode  TEXT NOT NULL DEFAULT '';
-- Legacy columns stay for old records, but are no longer filled by the form
ALTER TABLE enquiry_leads ALTER COLUMN course        SET DEFAULT '';
ALTER TABLE enquiry_leads ALTER COLUMN branch        SET DEFAULT '';
ALTER TABLE enquiry_leads ALTER COLUMN learning_mode SET DEFAULT '';

-- 8) Admin logins
CREATE TABLE IF NOT EXISTS admins (
    id            BIGSERIAL PRIMARY KEY,
    username      TEXT NOT NULL UNIQUE,
    email         TEXT NOT NULL DEFAULT '',
    password_hash TEXT NOT NULL,
    role          TEXT NOT NULL DEFAULT 'admin',
    last_login    TIMESTAMPTZ,
    created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 9) Admin user: username ADMIN@GMAIL.COM / password Admin@2050 (change after first login)
DELETE FROM admins WHERE LOWER(username) IN ('admin@gmail.com', 'asquareb_admin');
INSERT INTO admins (username, email, password_hash)
VALUES ('ADMIN@GMAIL.COM', 'admin@gmail.com', crypt('Admin@2050', gen_salt('bf', 10)));

-- Check: lists every table
SELECT table_name FROM information_schema.tables
WHERE table_schema = 'public' ORDER BY table_name;


-- ============================================================
-- Partnership enquiries (Campus Connect / Orbit Alliance / Orbit Innovate)
-- (also created automatically by /api/submit-form on first submission)
-- ============================================================
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
);
