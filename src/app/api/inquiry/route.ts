import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// SMTP transporter using EazyHost business email
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "mail.jafrienterprises.biz",
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false, // TLS on port 587
  auth: {
    user: process.env.SMTP_USER || "info@jafrienterprises.biz",
    pass: process.env.SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false, // EazyHost shared hosting uses self-signed cert
  },
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, company, email, phone, productType, quantity, message, source } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const recipient = process.env.INQUIRY_RECIPIENT_EMAIL || "info@jafrienterprises.biz";

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0d5c9; border-radius: 8px; overflow: hidden;">
        <div style="background: #1A0E07; padding: 24px 32px;">
          <h1 style="color: #EBE3D5; margin: 0; font-size: 22px;">New B2B Inquiry</h1>
          <p style="color: #A37557; margin: 6px 0 0; font-size: 13px;">via jafrienterprises.biz</p>
        </div>
        <div style="padding: 28px 32px; background: #FDFAF7;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #EDE6DC; font-weight: bold; color: #5C3D1E; width: 38%;">Client Name</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #EDE6DC; color: #1A0E07;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #EDE6DC; font-weight: bold; color: #5C3D1E;">Company</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #EDE6DC; color: #1A0E07;">${company || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #EDE6DC; font-weight: bold; color: #5C3D1E;">Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #EDE6DC;"><a href="mailto:${email}" style="color: #8C5738;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #EDE6DC; font-weight: bold; color: #5C3D1E;">Phone</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #EDE6DC; color: #1A0E07;">${phone || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #EDE6DC; font-weight: bold; color: #5C3D1E;">Product Type</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #EDE6DC; color: #1A0E07;">${productType || "General Inquiry"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #EDE6DC; font-weight: bold; color: #5C3D1E;">Quantity / MOQ</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #EDE6DC; color: #1A0E07;">${quantity || "Not specified"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #EDE6DC; font-weight: bold; color: #5C3D1E;">Source</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #EDE6DC; color: #1A0E07;">${source || "Website Form"}</td>
            </tr>
          </table>
          <div style="margin-top: 20px;">
            <p style="font-weight: bold; color: #5C3D1E; margin-bottom: 8px;">Message &amp; Requirements:</p>
            <div style="background: #F3EDE5; border-left: 4px solid #8C5738; padding: 16px; border-radius: 4px; color: #1A0E07; white-space: pre-wrap;">${message}</div>
          </div>
        </div>
        <div style="background: #362217; padding: 16px 32px; text-align: center;">
          <p style="color: #A37557; margin: 0; font-size: 12px;">Jafri Enterprises · Karachi, Pakistan · Est. 2005</p>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"Jafri Enterprises Website" <${process.env.SMTP_USER || "info@jafrienterprises.biz"}>`,
      to: recipient,
      replyTo: email, // Reply goes directly to the client who submitted
      subject: `New B2B Inquiry from ${name}${company ? ` (${company})` : ""}`,
      html: htmlBody,
      text: `New inquiry from ${name}\nCompany: ${company || "N/A"}\nEmail: ${email}\nPhone: ${phone || "N/A"}\nProduct: ${productType || "General"}\nQuantity: ${quantity || "N/A"}\n\nMessage:\n${message}`,
    });

    return NextResponse.json({ ok: true, delivered: true });
  } catch (error) {
    console.error("Inquiry email error:", error);
    return NextResponse.json({ error: "Failed to send inquiry. Please try again." }, { status: 500 });
  }
}
