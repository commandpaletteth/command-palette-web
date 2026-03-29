import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, company, email, tel, size, inquiry } = data;

    if (!name || !email || !inquiry) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const safeName    = escapeHtml(String(name));
    const safeCompany = escapeHtml(String(company || ''));
    const safeEmail   = escapeHtml(String(email));
    const safeTel     = escapeHtml(String(tel || ''));
    const safeSize    = escapeHtml(String(size || ''));
    const safeInquiry = escapeHtml(String(inquiry)).replace(/\n/g, '<br>');

    const mailOptions = {
      from: `"${safeName} (via Website)" <${process.env.EMAIL_USER}>`,
      to: 'warut.c@command-palette.co',
      cc: 'info@command-palette.co',
      replyTo: email,
      subject: `[New Inquiry] ${safeName} (${safeCompany || 'No Company'})`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 10px; overflow: hidden;">
          <div style="background-color: #0f172a; padding: 20px; text-align: center;">
            <h2 style="color: #ffffff; margin: 0;">New Business Inquiry</h2>
          </div>
          <div style="padding: 30px; background-color: #ffffff;">
            <p style="font-size: 16px; color: #333;">มีลูกค้าสนใจติดต่อผ่านเว็บไซต์ครับ นี่คือข้อมูลสรุป:</p>
            <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 150px;">Name:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${safeName}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Company:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${safeCompany || '-'}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">
                  <a href="mailto:${safeEmail}" style="color: #2563eb; text-decoration: none;">${safeEmail}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Tel:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${safeTel || '-'}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Size:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${safeSize || '-'}</td>
              </tr>
            </table>
            <div style="margin-top: 30px;">
              <h3 style="color: #0f172a; border-left: 4px solid #0f172a; padding-left: 10px;">Inquiry Details:</h3>
              <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; color: #475569; line-height: 1.6;">
                ${safeInquiry}
              </div>
            </div>
          </div>
          <div style="background-color: #f1f5f9; padding: 15px; text-align: center; font-size: 12px; color: #64748b;">
            Sent from Command &amp; Palette Website
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ success: false, message: 'Failed to send' }, { status: 500 });
  }
}