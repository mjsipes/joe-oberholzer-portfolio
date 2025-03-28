// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();
    // The recipient email is now hardcoded on the server side for security
    const recipientEmail = process.env.RECIPIENT_EMAIL;

    // Validate inputs
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check if we have SMTP credentials configured
    const isProduction = process.env.NODE_ENV === 'production' || 
                         (process.env.EMAIL_SERVER && process.env.EMAIL_USER && process.env.EMAIL_PASSWORD);
    
    let transporter;
    
    if (isProduction) {
      // Production configuration - using configured SMTP service
      transporter = nodemailer.createTransport({
        host: process.env.EMAIL_SERVER,
        port: parseInt(process.env.EMAIL_PORT || '587'),
        secure: process.env.EMAIL_SECURE === 'true',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD,
        },
      });
    } else {
      // Development configuration - using Ethereal for testing
      const testAccount = await nodemailer.createTestAccount();
      transporter = nodemailer.createTransport({
        host: testAccount.smtp.host,
        port: testAccount.smtp.port,
        secure: testAccount.smtp.secure,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      });
    }

    // Email message configuration
    const mailOptions = {
      from: `"Website Contact Form" <${process.env.EMAIL_FROM || email}>`,
      to: recipientEmail,
      replyTo: email,
      subject: `New contact form message from ${name}`,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
      html: `
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Message:</strong></p>
<p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);

    // If using Ethereal in dev environment, log the preview URL
    if (!isProduction && info.messageId) {
      console.log('Message sent: %s', info.messageId);
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}