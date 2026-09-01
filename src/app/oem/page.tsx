import type { Metadata } from "next";
import { ArrowRight, Package, Palette, Tag, Truck, ClipboardList, Microscope, Factory, Ship, Check } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import QuoteButton from "@/components/QuoteButton";
import StatNumber from "@/components/StatNumber";

export const metadata: Metadata = {
  title: "OEM / Private Label",
  description:
    "Jafri Enterprises offers full OEM and private label leather manufacturing. Your brand, our expertise. Custom materials, colors, logo embossing, and packaging.",
};

const capabilities = [
  {
    icon: Package,
    title: "Material Selection",
    desc: "Choose from our full range of finished leathers — full-grain, top-grain, nappa, pebbled, embossed — in any thickness and color.",
  },
  {
    icon: Palette,
    title: "Custom Colors & Finishes",
    desc: "Our tannery dyes leather to Pantone specifications. Any color, any finish. Wax, oil, matte, gloss, or antique effects.",
  },
  {
    icon: Tag,
    title: "Logo Embossing & Labels",
    desc: "Emboss your brand logo into the leather or add woven labels, hang tags, and branded packaging as required.",
  },
  {
    icon: Truck,
    title: "Custom Packaging",
    desc: "Branded boxes, dust bags, hangers, and poly bags with your logo. Retail-ready packaging for direct-to-shelf delivery.",
  },
];

const steps = [
  {
    number: "01",
    title: "Inquiry & Briefing",
    description:
      "Share your requirements — product type, material, quantities, target market, and timeline. Our export team will respond within 24 hours.",
    icon: ClipboardList,
  },
  {
    number: "02",
    title: "Sampling & Approval",
    description:
      "We develop proto samples (3–4 weeks). Free revisions until you're satisfied. Samples can be shipped worldwide for physical review.",
    icon: Microscope,
  },
  {
    number: "03",
    title: "Bulk Production",
    description:
      "Once sample is approved and deposit received, bulk production begins. Real-time factory updates. Typically 6–10 weeks depending on complexity.",
    icon: Factory,
  },
  {
    number: "04",
    title: "Quality Control & Delivery",
    description:
      "100% QC inspection before shipment. Packed to your specifications. Shipped via air freight, DHL, or sea freight per your Incoterms.",
    icon: Ship,
  },
];

const markets = [
  "Europe (EU Fashion Brands)",
  "United Kingdom",
  "United States & Canada",
  "Middle East",
  "Japan & South Korea",
  "Australia",
];


export default function OEMPage() {
  return (
    <div>
      {/* Hero */}
      <div
        className="relative min-h-[60vh] sm:min-h-[65vh] flex items-end overflow-hidden"
        style={{
          background: "#1A0E07",
          color: "#FFFFFF",
        }}
      >
        <div className="absolute inset-0 overflow-hidden bg-[#1A0E07]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-center sm:object-[75%_center] lg:object-right scale-105"
          >
            <source src="/assets/jackets-showcase-hero.mp4" type="video/mp4" />
            <source src="/assets/jackets-hero.mp4" type="video/mp4" />
          </video>
          {/* Responsive gradient overlay: top-to-bottom on mobile, left-to-right on desktop */}
          <div
            className="absolute inset-0 hidden sm:block"
            style={{
              background:
                "linear-gradient(90deg, rgba(26,14,7,0.92) 0%, rgba(26,14,7,0.72) 45%, rgba(26,14,7,0.30) 75%, rgba(26,14,7,0.15) 100%)",
            }}
          />
          <div
            className="absolute inset-0 sm:hidden"
            style={{
              background:
                "linear-gradient(to bottom, rgba(26,14,7,0.80) 0%, rgba(26,14,7,0.50) 40%, rgba(26,14,7,0.92) 100%)",
            }}
          />
        </div>
        <div className="container-luxury relative z-10 pb-16 sm:pb-20 pt-36 sm:pt-44">
          <AnimatedSection>
            <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3 sm:mb-4 text-[#D4B296]">Private Label & OEM</p>
            <h1 className="text-display-md sm:text-display-lg mb-4 sm:mb-6 text-white">
              Your Brand,{" "}
              <span className="block text-[#EBE3D5] italic font-serif">Our Manufacturing</span>
            </h1>
            <p className="text-base sm:text-lg max-w-2xl mb-8 sm:mb-10 text-[#FAF6F0]/90 font-medium leading-relaxed">
              Partner with Jafri Enterprises for full OEM and private label leather manufacturing. From concept to delivery — with your brand at the center.
            </p>
            <div className="w-full sm:w-auto [&_button]:w-full sm:[&_button]:w-auto">
              <QuoteButton label="Start Your OEM Inquiry" hint="oem" size="lg" />
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Why OEM with us (Fixes Screenshot 3 Stats) */}
      <section
        className="py-12"
        style={{ background: "#FAF6F0", borderBottom: "1px solid rgba(140,87,56,0.18)" }}
      >
        <div className="container-luxury">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {[
              { value: "20+", label: "Years OEM Experience" },
              { value: "40", label: "Min. Units / Style" },
              { value: "3–4wk", label: "Sample Turnaround" },
              { value: "CBR", label: "Group Certified" },
            ].map((s) => (
              <div key={s.label}>
                <StatNumber value={s.value} style={{ fontSize: "1.6rem", color: "#1A0E07", fontWeight: 800 }} />
                <div className="text-xs font-bold tracking-widest uppercase mt-1 text-[#8C5738]">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-padding" style={{ background: "#FBF8F3" }}>
        <div className="container-luxury">
          <AnimatedSection className="mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3 text-[#8C5738]">Customization Options</p>
            <h2 className="text-display-md max-w-2xl" style={{ color: "#1A0E07" }}>
              Everything Customized{" "}
              <span className="text-[#8C5738] italic font-serif">to Your Spec</span>
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((cap, i) => (
              <AnimatedSection key={cap.title} delay={i * 0.1}>
                <div
                  className="rounded-2xl p-8 h-full text-center bg-white shadow-sm transition-transform duration-300 hover:-translate-y-1"
                  style={{ border: "1px solid rgba(140,87,56,0.18)" }}
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6"
                    style={{ background: "rgba(140,87,56,0.12)" }}
                  >
                    <cap.icon size={26} style={{ color: "#8C5738" }} />
                  </div>
                  <h3 className="text-base font-bold mb-3" style={{ color: "#1A0E07", fontFamily: "var(--font-display)" }}>
                    {cap.title}
                  </h3>
                  <p className="text-sm font-medium leading-relaxed" style={{ color: "#523B2D" }}>
                    {cap.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding" style={{ background: "#FAF6F0" }}>
        <div className="container-luxury">
          <AnimatedSection className="mb-16 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3 text-[#8C5738]">How It Works</p>
            <h2 className="text-display-md" style={{ color: "#1A0E07" }}>
              The OEM <span className="text-[#8C5738] italic font-serif">Process</span>
            </h2>
          </AnimatedSection>

          <div className="relative">
            {/* Timeline line */}
            <div
              className="absolute left-8 top-0 bottom-0 w-px hidden lg:block"
              style={{ background: "linear-gradient(180deg, rgba(140,87,56,0.4) 0%, transparent 100%)" }}
            />
            <div className="space-y-6">
              {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <AnimatedSection key={step.number} delay={i * 0.1} direction="left">
                    <div className="flex gap-8 items-start">
                      {/* Icon marker */}
                      <div
                        className="relative hidden lg:flex w-16 h-16 shrink-0 items-center justify-center z-10 rounded-2xl bg-white shadow-sm"
                        style={{
                          border: "1px solid rgba(140,87,56,0.25)",
                        }}
                      >
                        <Icon size={24} style={{ color: "#8C5738" }} aria-hidden="true" />
                      </div>
                      {/* Card */}
                      <div className="rounded-2xl flex-1 p-8 bg-white shadow-sm border border-amber-900/18">
                        <div className="flex items-start gap-5">
                          <span
                            className="text-3xl shrink-0 font-serif font-black text-[#8C5738]"
                          >
                            {step.number}
                          </span>
                          <div>
                            <h3
                              className="text-xl mb-2 font-bold"
                              style={{
                                fontFamily: "var(--font-display)",
                                color: "#1A0E07",
                              }}
                            >
                              {step.title}
                            </h3>
                            <p className="font-medium text-sm leading-relaxed" style={{ color: "#523B2D" }}>
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Export Markets (Fixes Screenshot 1) */}
      <section className="section-padding" style={{ background: "#FAF6F0" }}>
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <p className="text-xs font-bold uppercase tracking-[0.2em] mb-4 text-[#8C5738]">Global Reach</p>
              <h2 className="text-display-md mb-6" style={{ color: "#1A0E07" }}>
                Export Markets{" "}
                <span className="text-[#8C5738] italic font-serif">Worldwide</span>
              </h2>
              <p className="mb-8 font-medium text-base leading-relaxed" style={{ color: "#36251B" }}>
                Our leather products reach fashion brands and retailers across 20+ countries. Experienced in EU REACH compliance, US customs, and international export documentation.
              </p>
              <ul className="space-y-3">
                {markets.map((m) => (
                  <li key={m} className="flex items-center gap-3 text-sm font-semibold" style={{ color: "#36251B" }}>
                    <ArrowRight size={16} style={{ color: "#8C5738" }} aria-hidden="true" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            {/* CBR Partnership highlight */}
            <AnimatedSection direction="right">
              <div
                className="p-8 sm:p-10 rounded-2xl bg-white shadow-sm"
                style={{ border: "1px solid rgba(140,87,56,0.22)" }}
              >
                <div className="text-xs font-bold tracking-[0.18em] uppercase mb-3 text-[#8C5738]">Official Partnership</div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: "#1A0E07", fontFamily: "var(--font-display)" }}>
                  CBR Group Partnership
                </h3>
                <p className="mb-5 font-medium text-sm leading-relaxed" style={{ color: "#36251B" }}>
                  Jafri Enterprises is the official Pakistan agent for Germany&apos;s <strong style={{ color: "#1A0E07" }}>CBR Group</strong> — managing renowned European brands:
                </p>
                <ul className="space-y-2.5 mb-6">
                  {["Street One", "One Touch", "Cecil"].map((brand) => (
                    <li key={brand} className="flex items-center gap-3">
                      <Check size={18} style={{ color: "#8C5738" }} aria-hidden="true" />
                      <span className="font-bold text-base" style={{ color: "#1A0E07" }}>{brand}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs font-semibold leading-relaxed" style={{ color: "#6E4D3B" }}>
                  Services: R&D, sampling, styling direction, quality control, and production management for European fashion brands.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA (Dark Leather Section) */}
      <section className="py-20 text-center text-white" style={{ background: "#362217" }}>
        <div className="container-luxury">
          <AnimatedSection>
            <p className="text-xs font-bold uppercase tracking-[0.2em] mb-4 text-[#D4B296]">Start OEM Partnership</p>
            <h2 className="text-display-md mb-4 text-white">
              Ready to Launch Your{" "}
              <span className="text-[#EBE3D5] italic font-serif">Leather Line?</span>
            </h2>
            <p className="max-w-xl mx-auto mb-10 text-[#FAF6F0]/90 font-medium">
              Minimum 40 units per style. Free consultation and no-obligation quotes. Samples shipped worldwide.
            </p>
            <QuoteButton label="Start OEM Inquiry" hint="oem" size="lg" />
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
