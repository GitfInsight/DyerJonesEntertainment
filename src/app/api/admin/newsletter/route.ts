import { NextRequest, NextResponse } from 'next/server';
import { verifyAdminToken, createUnauthorizedResponse } from '@/lib/auth';
import { supabase, NEWSLETTER_TABLE } from '@/lib/supabase';

export async function GET(request: NextRequest) {
  // Check authentication
  const user = await verifyAdminToken(request);
  if (!user) {
    return createUnauthorizedResponse();
  }

  // Check if Supabase is configured
  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_ANON_KEY) {
    console.error('Supabase environment variables not configured');
    return NextResponse.json({
      error: 'Database not configured',
      count: 0,
      signups: []
    }, { status: 500 });
  }

  try {
    const { data: signups, error } = await supabase
      .from(NEWSLETTER_TABLE)
      .select('*')
      .order('timestamp', { ascending: false });

    if (error) {
      console.error('Database read error:', error);
      return NextResponse.json({
        error: 'Could not read newsletter signups',
        count: 0,
        signups: []
      });
    }

    const newsletterSignups = signups || [];
    
    // Create a nicely formatted HTML response
    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Newsletter Signups - Dyer-Jones Entertainment</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 40px; }
            .header { border-bottom: 2px solid #333; padding-bottom: 20px; margin-bottom: 30px; }
            .stats { background: #f5f5f5; padding: 20px; border-radius: 8px; margin-bottom: 30px; }
            .signup { padding: 15px; border-bottom: 1px solid #eee; }
            .email { font-weight: bold; color: #333; }
            .timestamp { color: #666; font-size: 0.9em; }
            .ip { color: #999; font-size: 0.8em; }
            .export-btn { background: #333; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>Newsletter Signups - Dyer-Jones Entertainment</h1>
            <p>Total subscribers: <strong>${newsletterSignups.length}</strong></p>
            <a href="/api/admin/newsletter/export" class="export-btn">Export as CSV</a>
          </div>
          
          <div class="stats">
            <h3>Recent Activity</h3>
            <p>Last 7 days: ${newsletterSignups.filter(s => new Date(s.timestamp) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)).length} signups</p>
            <p>Last 30 days: ${newsletterSignups.filter(s => new Date(s.timestamp) > new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)).length} signups</p>
          </div>
          
          <div class="signups">
            ${newsletterSignups.map(signup => `
              <div class="signup">
                <div class="email">${signup.email}</div>
                <div class="timestamp">${new Date(signup.timestamp).toLocaleString()}</div>
                <div class="ip">IP: ${signup.ip_address || 'unknown'}</div>
              </div>
            `).join('')}
          </div>
        </body>
      </html>
    `;
    
    return new Response(html, {
      headers: {
        'Content-Type': 'text/html',
      },
    });
    
  } catch (error) {
    console.error('Error reading newsletter file:', error);
    return NextResponse.json({
      error: 'Could not read newsletter signups',
      count: 0,
      signups: []
    });
  }
} 