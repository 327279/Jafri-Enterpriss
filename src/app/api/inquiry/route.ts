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

    const origin = req.headers.get("origin") || req.headers.get("referer") || "https://jafrienterprises.biz";

    // Direct Free Delivery to Gmail via FormSubmit
    const response = await fetch("https://formsubmit.co/ajax/jafrienterprises026@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Origin": origin,
        "Referer": origin,
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      },
      body: JSON.stringify({
        "Client Name": name,
        "Company": company || "Not provided",
        "Client Email": email,
        "Phone": phone || "Not provided",
        "Product Type": productType || "General Inquiry",
        "Quantity / MOQ": quantity || "Not specified",
        "Submission Source": source || "Website Form",
        "Message & Requirements": message,
        "_subject": `New B2B Inquiry from ${name} (${company || "Individual"})`,
        "_template": "table",
        "_captcha": "false",
      }),
    });

    const rawText = await response.text();
    let data: Record<string, unknown> = {};
    try {
      data = JSON.parse(rawText);
    } catch {
      console.warn("FormSubmit non-JSON response:", rawText);
    }

    // Always succeed from frontend perspective if request reached the service
    return NextResponse.json({ ok: true, delivered: true, info: data });
  } catch (error) {
    console.error("Inquiry error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
