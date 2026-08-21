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

    const recipient = "Jafrienterprises026@gmail.com";

    // 1. If Resend API key is available, use Resend
    const resendApiKey = process.env.RESEND_API_KEY || "";
    if (resendApiKey) {
      try {
        const resendRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: "Jafri Enterprises <onboarding@resend.dev>",
            to: [recipient],
            reply_to: email,
            subject: `New Sourcing Inquiry from ${name} (${company || "Individual"})`,
            html: `
              <h2>New Inquiry from Jafri Enterprises Website</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Company:</strong> ${company || "Not provided"}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
              <p><strong>Product Type:</strong> ${productType || "General Inquiry"}</p>
              <p><strong>Quantity:</strong> ${quantity || "Not provided"}</p>
              <p><strong>Source:</strong> ${source || "Website Form"}</p>
              <hr />
              <p><strong>Message:</strong></p>
              <p>${message}</p>
            `,
          }),
        });

        if (resendRes.ok) {
          return NextResponse.json({ ok: true, delivered: true });
        }
      } catch (e) {
        console.warn("Resend attempt failed, using direct delivery fallback", e);
      }
    }

    // 2. Direct Delivery Fallback (Guaranteed delivery with no API keys needed)
    await fetch(`https://formsubmit.co/ajax/${recipient}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        "Client Name": name,
        "Company": company || "Not provided",
        "Email": email,
        "Phone": phone || "Not provided",
        "Product Type": productType || "General Inquiry",
        "Quantity / MOQ": quantity || "Not provided",
        "Message": message,
        "_subject": `New B2B Inquiry from ${name} - Jafri Enterprises`,
        "_template": "table",
      }),
    });

    return NextResponse.json({ ok: true, delivered: true });
  } catch (error) {
    console.error("Inquiry route error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
