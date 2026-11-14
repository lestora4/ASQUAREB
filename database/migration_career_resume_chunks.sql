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
