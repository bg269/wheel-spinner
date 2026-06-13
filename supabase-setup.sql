-- ============================================================
--  Spin The Choice — anonymous wheels schema
--  Safe to re-run: drops and recreates everything cleanly.
--  Run in Supabase SQL Editor.
-- ============================================================

-- Drop any previous version (no real data yet)
DROP TABLE IF EXISTS wheels CASCADE;
DROP FUNCTION IF EXISTS increment_spin_count(text);

-- ============================================================
--  Table
-- ============================================================
CREATE TABLE wheels (
  id         uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  slug       text        UNIQUE NOT NULL,
  title      text,
  entries    jsonb       NOT NULL,
  created_at timestamptz DEFAULT now(),
  spin_count integer     DEFAULT 0
);

-- Fast slug lookups
CREATE INDEX wheels_slug_idx ON wheels (slug);

-- ============================================================
--  Row-Level Security
--  No user ownership — this is a fully anonymous tool.
--  Anyone can read or create a wheel; no client-side updates
--  or deletes are permitted.
-- ============================================================
ALTER TABLE wheels ENABLE ROW LEVEL SECURITY;

CREATE POLICY "public_select" ON wheels
  FOR SELECT USING (true);

CREATE POLICY "public_insert" ON wheels
  FOR INSERT WITH CHECK (true);

-- ============================================================
--  Spin count helper
--  SECURITY DEFINER lets the anon key call this function
--  without needing an UPDATE policy on the table.
-- ============================================================
CREATE OR REPLACE FUNCTION increment_spin_count(wheel_slug text)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  UPDATE wheels
  SET spin_count = spin_count + 1
  WHERE slug = wheel_slug;
END;
$$;
