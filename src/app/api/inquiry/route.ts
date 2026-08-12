import { NextResponse } from "next/server";

export interface InquiryPayload {
  name: string;
  company: string;
  email: string;
  phone?: string;
  country?: string;
  productType?: string;
  quantity?: string;
  inquiryType?: string;
  message: string;
  source: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Partial<InquiryPayload>;

    const name = (body.name || "").trim();
    const company = (body.company || "").trim();
    const email = (body.email || "").trim();
    const message = (body.message || "").trim();

    if (!name || !company || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Name, company, email, and message are required." },
        { status: 400 }
      );
    }

    if (!EMAIL_RE.test(email)) {
      return NextResponse.json(
        { ok: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const fields: [string, string | undefined][] = [
      ["Name", name],
      ["Company", company],
      ["Email", email],
      ["Phone", body.phone],
      ["Country", body.country],
      ["Product type", body.productType],
      ["Quantity / MOQ", body.quantity],
      ["Inquiry type", body.inquiryType],
      ["Source", body.source],
    ];

    const present = fields.filter(([, v]) => v && String(v).trim());
    const textBody =
      present.map(([k, v]) => `${k}: ${v}`).join("\n") + `\n\nMessage:\n${message}`;
    const htmlBody =
      present
        .map(([k, v]) => `<p><strong>${k}:</strong> ${escapeHtml(String(v))}</p>`)
        .join("") +
      `<p><strong>Message:</strong><br>${escapeHtml(message).replace(/\n/g, "<br>")}</p>`;

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.INQUIRY_TO_EMAIL || "info@jafrienterprises.biz";
    const from = process.env.INQUIRY_FROM_EMAIL || "onboarding@resend.dev";

    // Without a mail provider configured the inquiry cannot actually be
    // delivered. Report that honestly so the UI can show the direct-email
    // fallback instead of a success message the buyer would rely on.
    if (!apiKey) {
      console.warn(
        "[inquiry] RESEND_API_KEY not set — inquiry NOT delivered:\n" + textBody
      );
      return NextResponse.json({ ok: true, delivered: false });
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: `Jafri Enterprises Website <${from}>`,
        to: [to],
        reply_to: email,
        subject: `New ${body.source === "quote-modal" ? "quote request" : "inquiry"} — ${company}`,
        text: textBody,
        html: htmlBody,
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error("[inquiry] Resend rejected the request:", res.status, detail);
      console.warn("[inquiry] Undelivered inquiry:\n" + textBody);
      return NextResponse.json({ ok: true, delivered: false });
    }

    return NextResponse.json({ ok: true, delivered: true });
  } catch (error) {
    console.error("[inquiry] Unexpected error:", error);
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please email us directly." },
      { status: 500 }
    );
  }
}
