-- Run once in Neon SQL Editor BEFORE deploying the new code
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

