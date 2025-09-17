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
        count: 0,
        signups: []
      });
    }

    return NextResponse.json({
      count: signups?.length || 0,
      signups: signups || []
    });
  } catch (error) {
    console.error('Error reading newsletter signups:', error);
    return NextResponse.json({
      count: 0,
      signups: []
    });
  }
} 