-- Run via: wrangler d1 execute slatin-crm --file=src/db/schema.sql

CREATE TABLE IF NOT EXISTS leads (
  id               TEXT PRIMARY KEY,
  created_at       TEXT NOT NULL,
  tier             INTEGER NOT NULL,        -- 1 or 2
  name             TEXT NOT NULL,
  email            TEXT NOT NULL,
  phone            TEXT NOT NULL,
  instagram        TEXT NOT NULL,
  experience       TEXT NOT NULL,
  needs_invoice    INTEGER NOT NULL DEFAULT 0,
  billing_name     TEXT,                    -- only when needs_invoice = 1
  billing_nif      TEXT,
  billing_address  TEXT,
  billing_city     TEXT,
  billing_postal   TEXT,
  stripe_session_id TEXT,
  payment_status   TEXT DEFAULT 'pending'   -- pending | paid | expired
);
