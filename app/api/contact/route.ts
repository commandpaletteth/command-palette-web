import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, company, email, tel, size, inquiry } = data;

    // 1. ตั้งค่าคนส่ง (ใช้ Gmail ของคุณ)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS, 
      },
    });

    // 2. จัดระเบียบเนื้อหาอีเมล (HTML Format)
    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`, // ชื่อผู้ส่ง
      to: 'command.palette.th@gmail.com', // ส่งหาตัวคุณเอง
      replyTo: email, // เวลากด Reply ให้ตอบกลับไปหาลูกค้า
      subject: `[New Inquiry] ลูกค้าใหม่: ${name} (${company || 'No Company'})`,
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
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Company:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${company || '-'}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">
                  <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Tel:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${tel || '-'}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Size:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${size || '-'}</td>
              </tr>
            </table>

            <div style="margin-top: 30px;">
              <h3 style="color: #0f172a; border-left: 4px solid #0f172a; padding-left: 10px;">Inquiry Details:</h3>
              <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; color: #475569; line-height: 1.6;">
                ${inquiry.replace(/\n/g, '<br>')}
              </div>
            </div>
          </div>
          
          <div style="background-color: #f1f5f9; padding: 15px; text-align: center; font-size: 12px; color: #64748b;">
            Sent from Command & Palette Website
          </div>
        </div>
      `,
    };

    // 3. ส่งเลย!
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ success: false, message: 'Failed to send' }, { status: 500 });
  }
}