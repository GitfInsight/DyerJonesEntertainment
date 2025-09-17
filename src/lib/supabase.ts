import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

// Create a dummy client if environment variables are missing (for build time)
export const supabase = (supabaseUrl && supabaseAnonKey)
  ? createClient(supabaseUrl, supabaseAnonKey)
  : createClient('https://dummy.supabase.co', 'dummy-key');

// Newsletter signup interface
export interface NewsletterSignup {
  id?: number;
  email: string;
  timestamp: string;
  ip_address?: string;
  created_at?: string;
}

// Database table name
export const NEWSLETTER_TABLE = 'newsletter_signups'; 