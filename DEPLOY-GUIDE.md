# AsquareB – Deploy Guide (Neon + Vercel), step by step

## 0. What changed in this version
- Folder is `public/` (lowercase). Vercel only serves lowercase `public/`; the earlier update used `PUBLIC/`, which would show a blank site.
- All pages merged with the old site images/assets (nothing missing).
- `.env` and junk files (.bat/.ps1) were REMOVED from the zip for safety. Put values in Vercel (step 3).
- SQL scripts are in `database/`.

## 0b. UPDATE: Preferred Program + Counselling Mode (run BEFORE deploying this version)
1. Neon > SQL Editor > run `database/migration_preferred_program.sql` (or re-run `neon_FULL_SETUP.sql`). Safe to re-run; no data is deleted.
   - Adds `popup_leads.preferred_program`, `enquiry_leads.preferred_program` and `enquiry_leads.counselling_mode`.
   - Old columns (`course`, `branch`, `learning_mode`) are kept for historical records but are no longer filled; the dashboard hides them.
2. Google Sheet (only if Sheets logging is on) - the app only writes headers when it creates a NEW tab, so edit the existing tabs once:
   - **Popup** tab: add a header `Preferred Program` in cell F1.
   - **Enquiry** tab: delete the old `Branch` column (I), then rename headers `Course` -> `Preferred Program` and `Learning Mode` -> `Preferred Counselling Mode`.
   (Or rename the old tabs, and fresh tabs with the right headers are created automatically.)

## 1. Neon database (run SQL)
1. Open https://console.neon.tech > your project > **SQL Editor** (database `neondb`).
2. Open `database/neon_FULL_SETUP.sql`, copy ALL text, paste in the editor, click **Run**.
   - Safe to re-run: it uses `CREATE TABLE IF NOT EXISTS` and never deletes data.
   - Creates: popup_leads, enquiry_leads, contact_messages, newsletter_subscribers,
     global_education_registrations, chatbot_leads, admins, career_applications, career_application_resumes.
3. Create your admin login: run (already included in neon_FULL_SETUP.sql) (username ADMIN@GMAIL.COM, password Admin@2050).
   - On your computer, in this project folder: `npm install` then
     `node scripts/generate-admin-hash.js "asquareb_admin" "care@asquareb.in" "YourStrongPassword"`
   - Copy the printed hash. In Neon SQL Editor run:
     `DELETE FROM admins WHERE username='asquareb_admin';`
     `INSERT INTO admins (username,email,password_hash) VALUES ('asquareb_admin','care@asquareb.in','PASTE_HASH_HERE');`
4. Check: `SELECT table_name FROM information_schema.tables WHERE table_schema='public';` (you should see the 9 tables).

## 2. Put the code on GitHub
1. In your existing repo (`as`), delete everything old, then copy the contents of this zip's folder into it
   (so `public/`, `api/`, `vercel.json`, `package.json` are at the repo ROOT).
2. Commit and push. Vercel auto-deploys.
   (No Git? On github.com open the repo > Add file > Upload files, drag the folders, Commit.)

## 3. Vercel environment variables
Vercel > Project > Settings > Environment Variables. Add every key in `.env.example` with real values
(NEON_*, EMAIL_*, NOTIFICATION_EMAIL, ADMIN_JWT_SECRET). Then **Deployments > Redeploy**.
- Gmail needs an *App Password* (Google Account > Security > 2-Step Verification > App passwords).
- SECURITY: your old zip contained the Neon password, Gmail app password and JWT secret.
  Change all three (Neon: Roles > reset password; Google: delete + create app password; new random ADMIN_JWT_SECRET).

## 4. Test after deploy
1. `/global-education-register` – submit a test. Check email at care@asquareb.in and a new row in Neon.
2. `/careers` – submit a test application with a resume (max 1 MB).
3. `/login` – sign in, open `/dashboard` – check Global Education + Careers tabs, filters, CSV and PDF download.
4. `/academic-excellence` – click each branch button; WhatsApp must open with the branch message.
5. Open every page on mobile: "Our Collaborators" must show 8 logos in order.

## 5. Things the client must confirm (edit then redeploy)
- Academic branches: open `public/academic-excellence.html`, find `EDIT HERE: branch details`.
  Branch addresses, phones and map links are filled in (WhatsApp goes to each branch number).
- Flowchart (Global page): Word text has 10 steps; the attached image has 9 different steps. Current page = Word's 10 steps, with
  IELTS coaching, airport pickup and job assistance added (marked "where applicable"). Ask the client which to keep.
- Country list ("22 Countries") on the Global page should be verified before going live.
