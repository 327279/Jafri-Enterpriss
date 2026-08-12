import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Globe, Shield, Target, Lightbulb } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import QuoteButton from "@/components/QuoteButton";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Company Profile | Jafri Enterprises",
  description:
    "Jafri Enterprises — an established leather tannery and exporter based in Karachi, Pakistan with over two decades of experience since 2005. Premium leather for clothing, bags, shoes, and jackets exported to Korea, Germany, China, and beyond.",
};

const highlights = [
  {
    icon: Target,
    title: "Custom Specifications",
    description:
      "Custom leather colors, thickness, textures, and finishes to match exact client specifications — tailored to your product needs.",
  },
  {
    icon: Shield,
    title: "Rigorous Quality Control",
    description:
      "Strict quality inspection at every stage — from raw material selection to final finished leather — ensuring international standards are met consistently.",
  },
  {
    icon: Globe,
    title: "Global Export Reach",
    description:
      "Trusted by clients across Korea, Germany, China, and multiple other markets worldwide. Built on long-term partnerships and reliable supply.",
  },
  {
    icon: Lightbulb,
    title: "Modern Tanning Processes",
    description:
      "Advanced tanning facilities with a strong focus on quality and sustainability — capable of bulk orders with reliable repeat supply.",
  },
];

const milestones = [
  { year: "2005", label: "Founded", detail: "Jafri Enterprises established in Karachi, Pakistan" },
  { year: "2008", label: "Tannery Expansion", detail: "Advanced drum processing & dyeing facilities added" },
  { year: "2012", label: "Garments Division", detail: "Leather jackets and clothing manufacturing launched" },
  { year: "2016", label: "Accessories Line", detail: "Leather bags, belts, wallets — full accessories division operational" },
  { year: "2020", label: "Quality Certified", detail: "ISO-aligned quality management implemented site-wide" },
  { year: "2025", label: "20 Years", detail: "Two decades of premium leather manufacturing & global export" },
];

const markets = [
  { country: "Korea", detail: "Long-standing export partnership" },
  { country: "Germany", detail: "European fashion-grade supply" },
  { country: "China", detail: "High-volume bulk supply" },
  { country: "Worldwide", detail: "Clients across multiple regions" },
];

export default function CompanyPage() {
  return (
    <div>
      {/* ── Page Hero ─────────────────────────────────── */}
      <div
        className="relative min-h-[62vh] flex items-end overflow-hidden"
        style={{ background: "linear-gradient(150deg, var(--color-brown-deep) 0%, var(--color-void) 65%)" }}
      >
        {/* Texture overlay */}
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(144,108,86,0.18) 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />
        {/* Ambient gradient */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 80% 50%, var(--color-brown) 0%, transparent 70%)",
          }}
        />

        <div className="container-luxury relative z-10 pb-16 pt-40">
          <AnimatedSection>
            <p className="text-label mb-4">Company Profile</p>
            <h1 className="text-display-lg mb-6" style={{ color: "var(--color-cream)" }}>
              Crafted for Quality.<br />
              <span style={{ color: "var(--color-amber-light)" }}>Built to Last.</span>
            </h1>
            <p
              className="max-w-xl text-lg leading-relaxed mb-2"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Established 2005 · Karachi, Pakistan
            </p>
            <div
              className="inline-block mt-2 px-5 py-2 rounded-full text-sm font-semibold tracking-widest uppercase"
              style={{
                background: "rgba(144,108,86,0.15)",
                border: "1px solid var(--color-border-strong)",
                color: "var(--color-amber-light)",
              }}
            >
              Leather Tannery &amp; Exporter
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* ── About Us ───────────────────────────────────── */}
      <section
        className="section-padding"
        style={{ background: "var(--color-warm-white)" }}
      >
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left — text block */}
            <AnimatedSection>
              <p className="text-label mb-4" style={{ color: "var(--color-amber)" }}>About Us</p>
              <h2
                className="text-display-lg mb-8"
                style={{ color: "var(--color-void)" }}
              >
                Two Decades of Premium Leather
              </h2>
              <div className="space-y-5" style={{ color: "var(--color-dark)" }}>
                <p className="text-lg leading-relaxed">
                  Jafri Enterprises is an established leather tannery and exporter based in
                  Karachi, Pakistan, with over two decades of experience in the leather
                  manufacturing industry since 2005. We specialize in the tanning and supply
                  of premium leather for clothing, bags, shoes, jackets, and a wide range of
                  finished leather goods.
                </p>
                <p className="text-lg leading-relaxed">
                  We serve valued clients across <strong>Korea, Germany, China,</strong> and
                  several other markets worldwide — backed by advanced tanning facilities,
                  skilled craftsmen, and rigorous quality control at every stage.
                </p>
                <p className="text-lg leading-relaxed">
                  Our approach is built on three core commitments:{" "}
                  <span style={{ color: "var(--color-brown-deep)", fontWeight: 600 }}>
                    the highest quality, competitive pricing, and on-time delivery
                  </span>{" "}
                  — supported by efficient management and a well-trained team.
                </p>
                <p className="text-lg leading-relaxed">
                  In an increasingly competitive global market, we remain focused on agility,
                  efficiency, and close, long-term relationships with our clients. Every
                  partnership we build is grounded in a simple principle:{" "}
                  <em style={{ color: "var(--color-brown-deep)" }}>
                    your needs are our concern, and your satisfaction is our aim.
                  </em>
                </p>
              </div>
            </AnimatedSection>

            {/* Right — stats + markets */}
            <AnimatedSection delay={0.15}>
              {/* Stats strip */}
              <div
                className="grid grid-cols-2 gap-4 mb-8"
              >
                {[
                  { value: "20+", label: "Years Experience" },
                  { value: "4+", label: "Export Markets" },
                  { value: "200+", label: "Min. Order Units" },
                  { value: "3", label: "Product Divisions" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl p-6 text-center"
                    style={{
                      background: "var(--color-cream)",
                      border: "1px solid var(--color-border-strong)",
                    }}
                  >
                    <div
                      className="text-display-md mb-1"
                      style={{ color: "var(--color-brown-deep)", fontFamily: "var(--font-display)" }}
                    >
                      {s.value}
                    </div>
                    <div className="text-sm tracking-wide uppercase" style={{ color: "var(--color-text-muted)" }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Export markets */}
              <div
                className="rounded-2xl p-6"
                style={{
                  background: "var(--color-cream)",
                  border: "1px solid var(--color-border-strong)",
                }}
              >
                <h3
                  className="text-label mb-4"
                  style={{ color: "var(--color-amber)" }}
                >
                  Export Markets
                </h3>
                <div className="space-y-3">
                  {markets.map((m) => (
                    <div
                      key={m.country}
                      className="flex items-center justify-between py-2"
                      style={{ borderBottom: "1px solid var(--color-border)" }}
                    >
                      <span
                        className="font-semibold text-base"
                        style={{ color: "var(--color-void)" }}
                      >
                        {m.country}
                      </span>
                      <span className="text-sm" style={{ color: "var(--color-text-muted)" }}>
                        {m.detail}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Key Highlights ─────────────────────────────── */}
      <section
        className="section-padding"
        style={{ background: "var(--color-void)" }}
      >
        <div className="container-luxury">
          <AnimatedSection className="text-center mb-16">
            <p className="text-label mb-3">Key Highlights</p>
            <h2 className="text-display-lg" style={{ color: "var(--color-cream)" }}>
              Why Work With Us
            </h2>
            <p
              className="max-w-2xl mx-auto mt-4 text-lg"
              style={{ color: "var(--color-text-secondary)" }}
            >
              We believe the true value of a quality product should always be maximized —
              that belief drives everything we do.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((h, i) => (
              <AnimatedSection key={h.title} delay={i * 0.1}>
                <div
                  className="rounded-2xl p-7 h-full flex flex-col gap-4"
                  style={{
                    background: "rgba(144,108,86,0.06)",
                    border: "1px solid var(--color-border)",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: "rgba(144,108,86,0.18)", color: "var(--color-amber-light)" }}
                  >
                    <h.icon size={22} />
                  </div>
                  <h3
                    className="text-display-sm"
                    style={{ color: "var(--color-cream)" }}
                  >
                    {h.title}
                  </h3>
                  <p style={{ color: "var(--color-text-secondary)", lineHeight: 1.65 }}>
                    {h.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ───────────────────────────────────── */}
      <section
        className="section-padding"
        style={{ background: "var(--color-cream)" }}
      >
        <div className="container-luxury">
          <AnimatedSection className="text-center mb-16">
            <p className="text-label mb-3" style={{ color: "var(--color-brown)" }}>
              Our Journey
            </p>
            <h2 className="text-display-lg" style={{ color: "var(--color-void)" }}>
              Two Decades of Growth
            </h2>
          </AnimatedSection>

          <div className="relative">
            {/* vertical line */}
            <div
              className="absolute left-1/2 top-0 bottom-0 w-px hidden lg:block"
              style={{ background: "var(--color-border-strong)", transform: "translateX(-50%)" }}
            />

            <div className="space-y-10">
              {milestones.map((m, i) => (
                <AnimatedSection key={m.year} delay={i * 0.08}>
                  <div
                    className={`flex flex-col lg:flex-row gap-6 lg:gap-0 items-start lg:items-center ${
                      i % 2 === 0 ? "" : "lg:flex-row-reverse"
                    }`}
                  >
                    {/* Content side */}
                    <div className={`lg:w-[calc(50%-2.5rem)] ${i % 2 === 0 ? "lg:text-right lg:pr-12" : "lg:text-left lg:pl-12"}`}>
                      <div
                        className="inline-block rounded-xl px-5 py-4"
                        style={{
                          background: "var(--color-warm-white)",
                          border: "1px solid var(--color-border-strong)",
                          boxShadow: "0 2px 16px rgba(107,58,26,0.08)",
                        }}
                      >
                        <p
                          className="text-sm font-semibold tracking-widest uppercase mb-1"
                          style={{ color: "var(--color-amber)" }}
                        >
                          {m.label}
                        </p>
                        <p className="text-base" style={{ color: "var(--color-dark)" }}>
                          {m.detail}
                        </p>
                      </div>
                    </div>

                    {/* Year bubble */}
                    <div className="lg:w-20 flex justify-center">
                      <div
                        className="w-16 h-16 rounded-full flex items-center justify-center text-sm font-bold z-10"
                        style={{
                          background: "var(--color-brown-deep)",
                          color: "var(--color-amber-pale)",
                          border: "3px solid var(--color-amber)",
                          fontFamily: "var(--font-display)",
                        }}
                      >
                        {m.year}
                      </div>
                    </div>

                    {/* Spacer for alternating side */}
                    <div className="hidden lg:block lg:w-[calc(50%-2.5rem)]" />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Get in Touch CTA ───────────────────────────── */}
      <section
        className="section-padding on-brown"
        style={{ background: "linear-gradient(135deg, var(--color-brown-deep) 0%, var(--color-void) 100%)" }}
      >
        <div className="container-luxury">
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <p className="text-label mb-4">Get in Touch</p>
            <h2 className="text-display-lg mb-5" style={{ color: "var(--color-cream)" }}>
              Start a Partnership
            </h2>
            <p className="text-lg mb-2" style={{ color: "var(--color-text-secondary)" }}>
              Karachi, Pakistan
            </p>
            <p className="text-lg mb-8" style={{ color: "var(--color-text-secondary)" }}>
              We work with importers, brands, and retailers worldwide.
              All inquiries are handled personally with a quote within 24–48 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <QuoteButton label="Request a Quote" size="lg" />
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">
                  Contact Us
                  <ArrowRight />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
