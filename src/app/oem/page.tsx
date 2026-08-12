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
        className="relative min-h-[65vh] flex items-end overflow-hidden"
        style={{
          background: "linear-gradient(135deg, var(--color-brown-deep) 0%, var(--color-void) 60%)",
        }}
      >
        <div className="absolute inset-0 overflow-hidden opacity-45">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/images/hero/oem-workshop.jpg"
            className="w-full h-full object-cover scale-105"
          >
            <source src="/assets/leather-craftsmanship.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, var(--color-obsidian) 0%, rgba(3,2,1,0.5) 60%, transparent 100%)" }} />
        <div className="container-luxury relative z-10 pb-20 pt-44">
          <AnimatedSection>
            <div className="section-eyebrow mb-6">
              <div className="divider-gold" />
              <p className="text-label">Private Label & OEM</p>
            </div>
            <h1 className="text-display-lg mb-6">
              Your Brand,{" "}
              <span className="block text-gradient-gold italic">Our Manufacturing</span>
            </h1>
            <p className="text-lg max-w-2xl mb-10" style={{ color: "var(--color-text-secondary)" }}>
              Partner with Jafri Enterprises for full OEM and private label leather manufacturing. From concept to delivery — with your brand at the center.
            </p>
            <QuoteButton label="Start Your OEM Inquiry" hint="oem" />
          </AnimatedSection>
        </div>
      </div>

      {/* Why OEM with us */}
      <section
        className="py-14 on-brown"
        style={{ background: "linear-gradient(90deg, var(--color-brown-deep) 0%, var(--color-obsidian) 100%)", borderBottom: "1px solid rgba(232,223,212,0.16)" }}
      >
        <div className="container-luxury">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {[
              { value: "20+", label: "Years OEM Experience" },
              { value: "200", label: "Min. Units / Style" },
              { value: "3–4wk", label: "Sample Turnaround" },
              { value: "CBR", label: "Group Certified" },
            ].map((s) => (
              <div key={s.label}>
                <StatNumber value={s.value} style={{ fontSize: "1.6rem" }} />
                <div className="text-xs tracking-widest uppercase mt-1" style={{ color: "var(--color-text-muted)" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-padding on-brown" style={{ background: "var(--color-obsidian)" }}>
        <div className="container-luxury">
          <AnimatedSection className="mb-16">
            <div className="section-eyebrow">
              <div className="divider-gold" />
              <p className="text-label">Customization Options</p>
            </div>
            <h2 className="text-display-md max-w-2xl">
              Everything Customized{" "}
              <span className="text-gradient-gold italic">to Your Spec</span>
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((cap, i) => (
              <AnimatedSection key={cap.title} delay={i * 0.1}>
                <div
                  className="card-luxury p-8 h-full text-center"
                  style={{ background: "rgba(26,18,8,0.7)", border: "1px solid var(--color-border)" }}
                >
                  <div
                    className="w-14 h-14 flex items-center justify-center mx-auto mb-6"
                    style={{ background: "rgba(144,108,86,0.1)", border: "1px solid var(--color-border-strong)" }}
                  >
                    <cap.icon size={24} style={{ color: "var(--color-amber)" }} />
                  </div>
                  <h3 className="text-display-xs mb-3">
                    {cap.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                    {cap.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding" style={{ background: "var(--color-void)" }}>
        <div className="container-luxury">
          <AnimatedSection className="mb-16 text-center">
            <p className="text-label mb-3">How It Works</p>
            <h2 className="text-display-md">
              The OEM{" "}
              <span className="text-gradient-gold">Process</span>
            </h2>
          </AnimatedSection>

          <div className="relative">
            {/* Timeline line */}
            <div
              className="absolute left-8 top-0 bottom-0 w-px hidden lg:block"
              style={{ background: "linear-gradient(180deg, var(--color-amber) 0%, transparent 100%)" }}
            />
            <div className="space-y-6">
              {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <AnimatedSection key={step.number} delay={i * 0.1} direction="left">
                    <div className="flex gap-8 items-start">
                      {/* Icon marker */}
                      <div
                        className="relative hidden lg:flex w-16 h-16 shrink-0 items-center justify-center z-10 rounded-sm"
                        style={{
                          background: "var(--color-void)",
                          border: "1px solid rgba(144,108,86,0.45)",
                        }}
                      >
                        <Icon size={24} style={{ color: "var(--color-amber)" }} aria-hidden="true" />
                      </div>
                      {/* Card */}
                      <div className="card-luxury flex-1 p-8">
                        <div className="flex items-start gap-5">
                          <span
                            className="text-3xl shrink-0"
                            style={{
                              color: "var(--color-amber)",
                              fontFamily: "var(--font-display)",
                              fontWeight: 900,
                            }}
                          >
                            {step.number}
                          </span>
                          <div>
                            <h3
                              className="text-xl mb-2"
                              style={{
                                fontFamily: "var(--font-display)",
                                fontWeight: 900,
                                color: "var(--color-text-heading)",
                              }}
                            >
                              {step.title}
                            </h3>
                            <p style={{ color: "var(--color-text-muted)" }}>
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

      {/* Export Markets */}
      <section className="section-padding" style={{ background: "var(--color-dark)" }}>
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="section-eyebrow">
                <div className="divider-gold" />
                <p className="text-label">Global Reach</p>
              </div>
              <h2 className="text-display-md mb-6">
                Export Markets{" "}
                <span style={{ color: "var(--color-amber)" }}>Worldwide</span>
              </h2>
              <p className="mb-8" style={{ color: "var(--color-text-muted)" }}>
                Our leather products reach fashion brands and retailers across 20+ countries. Experienced in EU REACH compliance, US customs, and international export documentation.
              </p>
              <ul className="space-y-3">
                {markets.map((m) => (
                  <li key={m} className="flex items-center gap-3 text-sm">
                    <ArrowRight size={15} style={{ color: "var(--color-amber)" }} aria-hidden="true" />
                    <span style={{ color: "var(--color-text)" }}>{m}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            {/* CBR Partnership highlight */}
            <AnimatedSection direction="right">
              <div
                className="p-10 rounded-sm"
                style={{ background: "rgba(144,108,86,0.07)", border: "1px solid rgba(144,108,86,0.28)" }}
              >
                <div className="text-label mb-4">Official Partnership</div>
                <h3 className="text-display-sm mb-4">
                  CBR Group Partnership
                </h3>
                <p className="mb-4" style={{ color: "var(--color-text-muted)" }}>
                  Jafri Enterprises is the official Pakistan agent for Germany&apos;s <strong style={{ color: "var(--color-text-heading)" }}>CBR Group</strong> — managing renowned European brands:
                </p>
                <ul className="space-y-2 mb-6">
                  {["Street One", "One Touch", "Cecil"].map((brand) => (
                    <li key={brand} className="flex items-center gap-3">
                      <Check size={16} style={{ color: "var(--color-amber)" }} aria-hidden="true" />
                      <span className="font-medium" style={{ color: "var(--color-text-heading)" }}>{brand}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
                  Services: R&D, sampling, styling direction, quality control, and production management for European fashion brands.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center" style={{ background: "var(--color-void)", borderTop: "1px solid var(--color-border)" }}>
        <div className="container-luxury">
          <AnimatedSection>
            <p className="text-label mb-4">Start OEM Partnership</p>
            <h2 className="text-display-md mb-4">
              Ready to Launch Your{" "}
              <span className="text-gradient-gold italic">Leather Line?</span>
            </h2>
            <p className="max-w-xl mx-auto mb-10" style={{ color: "var(--color-text-secondary)" }}>
              Minimum 200 units per style. Free consultation and no-obligation quotes. Samples shipped worldwide.
            </p>
            <QuoteButton label="Start OEM Inquiry" hint="oem" />
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
