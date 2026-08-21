import { NextResponse } from "next/server";

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

    const apiKey = process.env.RESEND_API_KEY;
    const recipient = process.env.INQUIRY_RECIPIENT_EMAIL;

    if (!apiKey || !recipient) {
      console.error("Missing RESEND_API_KEY or INQUIRY_RECIPIENT_EMAIL env vars");
      return NextResponse.json({ error: "Server configuration error." }, { status: 500 });
    }

    // Send email using Resend
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: "Jafri Enterprises <onboarding@resend.dev>",
        to: [recipient],
        reply_to: email,
        subject: `New B2B Inquiry from ${name} (${company || "Individual"})`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1A0E07; line-height: 1.6;">
            <div style="background-color: #362217; color: #FAF6F0; padding: 24px; text-align: center; border-radius: 8px 8px 0 0;">
              <h2 style="margin: 0; font-size: 22px;">New Sourcing Inquiry</h2>
              <p style="margin: 4px 0 0 0; font-size: 13px; color: #D4B296;">Jafri Enterprises Website</p>
            </div>
            
            <div style="background-color: #FAF6F0; padding: 24px; border: 1px solid rgba(140,87,56,0.2); border-radius: 0 0 8px 8px;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #8C5738; width: 35%;">Client Name:</td>
                  <td style="padding: 8px 0;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #8C5738;">Company:</td>
                  <td style="padding: 8px 0;">${company || "Not provided"}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #8C5738;">Client Email:</td>
                  <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #8C5738; text-decoration: underline;">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #8C5738;">Phone:</td>
                  <td style="padding: 8px 0;">${phone || "Not provided"}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #8C5738;">Product Category:</td>
                  <td style="padding: 8px 0; font-weight: bold;">${productType || "General Inquiry"}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #8C5738;">Quantity / MOQ:</td>
                  <td style="padding: 8px 0;">${quantity || "Not specified"}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #8C5738;">Source:</td>
                  <td style="padding: 8px 0; font-size: 12px; color: #6E4D3B;">${source || "Website Form"}</td>
                </tr>
              </table>

              <div style="margin-top: 20px; padding-top: 16px; border-top: 1px solid rgba(140,87,56,0.2);">
                <p style="font-weight: bold; margin-bottom: 8px; color: #8C5738;">Client Message & Requirements:</p>
                <div style="background: #FFFFFF; padding: 16px; border-radius: 6px; border: 1px solid rgba(140,87,56,0.15); white-space: pre-wrap;">${message}</div>
              </div>
            </div>
          </div>
        `,
      }),
    });

    const resendData = await resendResponse.json();

    if (!resendResponse.ok) {
      console.error("Resend API Error:", resendData);
      return NextResponse.json(
        { error: resendData.message || "Failed to send email via Resend." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true, delivered: true, id: resendData.id });
  } catch (error) {
    console.error("Inquiry route error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
