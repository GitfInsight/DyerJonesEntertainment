import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend only if API key is available
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, eventType, eventDate, message } = body;

    if (!name || !email || !eventType || !message) {
      return NextResponse.json(
        { error: 'Please fill in all required fields' },
        { status: 400 }
      );
    }

    if (!email.includes('@')) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Check if Resend is configured
    if (!resend) {
      console.error('Resend API key not configured');
      return NextResponse.json(
        { error: 'Email service not configured. Please contact us directly at sarahdyermezzo@gmail.com.' },
        { status: 500 }
      );
    }

    const emailContent = `
New Event Inquiry from Dyer-Jones Entertainment Website

From: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Event Type: ${eventType}
Preferred Date: ${eventDate || 'Not specified'}

Message:
${message}

---
This inquiry was submitted through the Dyer-Jones Entertainment website contact form.
    `;

    const data = await resend.emails.send({
      from: 'Dyer-Jones Entertainment <noreply@dyerjonesentertainment.com>',
      to: ['sarahdyermezzo@gmail.com'],
      subject: `New Event Inquiry: ${eventType} from ${name}`,
      text: emailContent,
    });

    console.log('Email sent successfully:', data);

    return NextResponse.json(
      { message: 'Thank you for your inquiry! We will be in touch within 24 hours.' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again or contact us directly at sarahdyermezzo@gmail.com.' },
      { status: 500 }
    );
  }
}