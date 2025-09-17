import { NextRequest, NextResponse } from 'next/server';
import { verifyAdminToken, createUnauthorizedResponse } from '@/lib/auth';
import { supabase, NEWSLETTER_TABLE } from '@/lib/supabase';

export async function GET(request: NextRequest) {
  // Check authentication
  const user = await verifyAdminToken(request);
  if (!user) {
    return createUnauthorizedResponse();
  }
  try {
    const { data: signups, error } = await supabase
      .from(NEWSLETTER_TABLE)
      .select('*')
      .order('timestamp', { ascending: false });

    if (error) {
      console.error('Database read error:', error);
      return NextResponse.json({
        error: 'Could not export newsletter signups'
      }, { status: 500 });
    }

    const newsletterSignups = signups || [];
    
    // Create CSV content
    const csvHeader = 'Email,Timestamp,IP Address\n';
    const csvRows = newsletterSignups.map(signup => 
      `"${signup.email}","${signup.timestamp}","${signup.ip_address || 'unknown'}"`
    ).join('\n');
    
    const csvContent = csvHeader + csvRows;
    
    // Generate filename with current date
    const now = new Date();
    const dateStr = now.toISOString().split('T')[0]; // YYYY-MM-DD format
    const filename = `contempo-newsletter-signups-${dateStr}.csv`;
    
    return new Response(csvContent, {
      headers: {
        'Content-Type': 'text/csv',
        'Content-Disposition': `attachment; filename="${filename}"`,
      },
    });
    
  } catch (error) {
    console.error('Error exporting newsletter file:', error);
    return NextResponse.json({
      error: 'Could not export newsletter signups'
    }, { status: 500 });
  }
} 