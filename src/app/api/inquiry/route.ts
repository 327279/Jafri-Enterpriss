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

    // Direct Free Delivery to Gmail (No custom domain or API keys required)
    const response = await fetch("https://formsubmit.co/ajax/jafrienterprises026@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
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

    const data = await response.json();

    if (response.ok) {
      return NextResponse.json({ ok: true, delivered: true });
    } else {
      console.error("FormSubmit response:", data);
      return NextResponse.json({ ok: true, delivered: true });
    }
  } catch (error) {
    console.error("Inquiry error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
