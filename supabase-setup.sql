-- Create newsletter_signups table
CREATE TABLE IF NOT EXISTS newsletter_signups (
  id BIGSERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  timestamp TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  ip_address VARCHAR(45),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_newsletter_signups_email ON newsletter_signups(email);

-- Create index on timestamp for sorting
CREATE INDEX IF NOT EXISTS idx_newsletter_signups_timestamp ON newsletter_signups(timestamp);

-- Enable Row Level Security (RLS)
ALTER TABLE newsletter_signups ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts from anyone (for newsletter signups)
CREATE POLICY "Allow public newsletter signups" ON newsletter_signups
  FOR INSERT WITH CHECK (true);

-- Create policy to allow admin reads (you'll need to set up authentication for this)
-- For now, allowing all reads - you can restrict this later with proper authentication
CREATE POLICY "Allow read access" ON newsletter_signups
  FOR SELECT USING (true); 