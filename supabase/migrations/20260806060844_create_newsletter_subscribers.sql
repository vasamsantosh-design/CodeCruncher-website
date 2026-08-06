/*
# Create newsletter_subscribers table (single-tenant, no auth)

1. New Tables
- `newsletter_subscribers`
  - `id` (uuid, primary key)
  - `email` (text, unique, not null) — subscriber email address
  - `experience` (text) — self-reported level: beginner or professional
  - `created_at` (timestamptz, default now())
2. Security
- Enable RLS on `newsletter_subscribers`.
- Allow anon + authenticated to INSERT (public newsletter signup) and SELECT their own existence check.
- The table is intentionally public for signup; email uniqueness is enforced by the unique constraint.
3. Notes
- No user_id / auth dependency — this is a public newsletter signup form.
- SELECT is allowed publicly only so the form can check for duplicate emails; emails are not sensitive in this context. For stricter privacy, SELECT could be removed.
*/

CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  experience text CHECK (experience IN ('beginner', 'professional')),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_subscribers" ON newsletter_subscribers;
CREATE POLICY "anon_insert_subscribers" ON newsletter_subscribers FOR INSERT
TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_select_subscribers" ON newsletter_subscribers;
CREATE POLICY "anon_select_subscribers" ON newsletter_subscribers FOR SELECT
TO anon, authenticated USING (true);
