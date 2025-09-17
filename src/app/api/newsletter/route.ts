import { NextRequest, NextResponse } from 'next/server';
import { supabase, NEWSLETTER_TABLE, NewsletterSignup } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Check if email already exists
    const { data: existingSignup, error: checkError } = await supabase
      .from(NEWSLETTER_TABLE)
      .select('email')
      .eq('email', email.toLowerCase())
      .single();

    if (checkError && checkError.code !== 'PGRST116') {
      // PGRST116 means no rows found, which is what we want
      console.error('Database check error:', checkError);
      return NextResponse.json(
        { error: 'Failed to process newsletter signup. Please try again.' },
        { status: 500 }
      );
    }

    if (existingSignup) {
      return NextResponse.json(
        { error: 'This email is already subscribed to our newsletter' },
        { status: 409 }
      );
    }

    // Add new signup
    const newSignup: Omit<NewsletterSignup, 'id' | 'created_at'> = {
      email: email.toLowerCase(),
      timestamp: new Date().toISOString(),
      ip_address: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'
    };

    const { error: insertError } = await supabase
      .from(NEWSLETTER_TABLE)
      .insert([newSignup]);

    if (insertError) {
      console.error('Database insert error:', insertError);
      return NextResponse.json(
        { error: 'Failed to process newsletter signup. Please try again.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Successfully subscribed to newsletter!' },
      { status: 201 }
    );

  } catch (error) {
    console.error('Newsletter signup error:', error);
    return NextResponse.json(
      { error: 'Failed to process newsletter signup. Please try again.' },
      { status: 500 }
    );
  }
}

export async function GET() {
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
    console.error('Newsletter read error:', error);
    return NextResponse.json({
      count: 0,
      signups: []
    });
  }
} 