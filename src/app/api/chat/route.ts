import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Messages array is required." },
        { status: 400 }
      );
    }

    const apiKey = process.env.OPENAI_API_KEY || process.env.AI_API_KEY || "";
    const baseUrl = process.env.OPENAI_BASE_URL || "https://api.openai.com/v1";

    const systemPrompt = {
      role: "system",
      content: `You are the sourcing assistant for Jafri Enterprises, a leather tannery and exporter based in Karachi, Pakistan, established 2005.
You speak to B2B buyers — brands, importers, and wholesalers — with the plain, competent tone of an experienced export manager.

Company facts:
- Products: finished leather skins, leather jackets and garments, bags, shoes, and accessories.
- Services: OEM and private label manufacturing.
- Capacity: 30,000 sq ft of finished leather per day across 3 production units in Korangi Industrial Area, Karachi.
- Leather skins minimum: 1,000 sq ft per order.
- Leather jackets & OEM minimum: 40 units per style. Sample turnaround: 3-4 weeks.
- Export markets: Korea, Germany, China, Europe, North America, and Asia.
- Location: Plot 339, Sector 7-A, Korangi Industrial Area, Karachi, Pakistan
- Email: info@jafrienterprises.biz, jafrienterprises026@gmail.com
- Phone / WhatsApp: +92 370 1132411, +92 334 9219214
- LinkedIn: https://www.linkedin.com/in/jafri-enterprises-2141ba42b/

Answer questions about materials, finishes, minimum order quantities, lead times, certifications, and the quotation process.
Never invent prices, delivery dates, or certification numbers — for those, direct the buyer to request a formal quote.
Keep responses short and concrete.`
    };

    // Attempt calling the external API if key is present
    if (apiKey) {
      try {
        const apiRes = await fetch(`${baseUrl}/chat/completions`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            model: process.env.AI_MODEL || "gpt-4o-mini",
            messages: [systemPrompt, ...messages],
            temperature: 0.7,
            max_tokens: 500,
          }),
        });

        if (apiRes.ok) {
          const data = await apiRes.json();
          const reply = data.choices?.[0]?.message?.content;
          if (reply) {
            return NextResponse.json({ reply, source: "api" });
          }
        }
      } catch (err) {
        console.warn("External API call failed, using fallback response:", err);
      }
    }

    // Static fallback used when no API key is configured or the upstream call fails
    const lastUserMsg = messages[messages.length - 1]?.content?.toLowerCase() || "";
    let reply = "Welcome to Jafri Enterprises. I can help with our leather products, OEM and private label manufacturing, minimum order quantities, and the quotation process. What are you sourcing?";

    if (lastUserMsg.includes("product") || lastUserMsg.includes("leather") || lastUserMsg.includes("skin") || lastUserMsg.includes("jacket")) {
      reply = "We supply finished leather skins, leather jackets and garments, bags, shoes, and accessories. Our tannery handles everything from raw hide to finished product. Which category are you interested in?";
    } else if (lastUserMsg.includes("moq") || lastUserMsg.includes("minimum") || lastUserMsg.includes("quantity") || lastUserMsg.includes("order")) {
      reply = "For finished leather skins, our minimum order quantity is 1,000 sq ft. For leather jackets and OEM garments, our minimum is 40 units per style, with a 3-4 week sample turnaround. Request a quote and our export team will confirm details.";
    } else if (lastUserMsg.includes("oem") || lastUserMsg.includes("private label") || lastUserMsg.includes("custom")) {
      reply = "We offer full OEM and private label manufacturing — your patterns, specs, labels, and packaging. Minimum 40 units per style. See the OEM page, or request a quote to start an inquiry.";
    } else if (lastUserMsg.includes("contact") || lastUserMsg.includes("quote") || lastUserMsg.includes("email") || lastUserMsg.includes("sample")) {
      reply = "You can reach our export team at info@jafrienterprises.biz, or use the Request a Quote button on any page. We respond to inquiries within 24 business hours.";
    } else if (lastUserMsg.includes("certif") || lastUserMsg.includes("compliance") || lastUserMsg.includes("audit")) {
      reply = "We are CBR group certified and export to markets with strict compliance requirements including Germany and Korea. See the Certifications page, or request documentation directly and we will send the current certificates.";
    } else if (lastUserMsg.includes("capacity") || lastUserMsg.includes("factory") || lastUserMsg.includes("production")) {
      reply = "We produce 30,000 sq ft of finished leather per day across 3 production units in Korangi Industrial Area, Karachi. Factory visits can be arranged — mention it in your inquiry.";
    }

    return NextResponse.json({ reply, source: "fallback" });
  } catch (error) {
    console.error("Error in chat route:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
