import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY!;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

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