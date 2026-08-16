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
        className="relative min-h-[50vh] flex items-end overflow-hidden"
        style={{ background: "linear-gradient(135deg, #362217 0%, #1A0E07 100%)", color: "#FFFFFF" }}
      >
        <div className="container-luxury relative z-10 pb-16 pt-40">
          <AnimatedSection>
            <p className="text-xs font-bold uppercase tracking-[0.2em] mb-4 text-[#D4B296]">Company Profile</p>
            <h1 className="text-display-lg mb-6 text-white">
              Crafted for Quality.<br />
              <span className="text-[#EBE3D5] italic font-serif">Built to Last.</span>
            </h1>
            <p
              className="max-w-xl text-lg leading-relaxed mb-4 text-[#FAF6F0]/90 font-medium"
            >
              Established 2005 · Karachi, Pakistan
            </p>
            <div
              className="inline-block px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase bg-white/10 border border-white/25 text-[#EBE3D5]"
            >
              Leather Tannery &amp; Exporter
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* ── About Us Section (Matching Reference Image 1) ───────────────── */}
      <section
        className="section-padding"
        style={{ background: "#FBF8F3" }}
      >
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column — Content Block */}
            <AnimatedSection className="lg:col-span-6">
              <p
                className="text-xs font-bold uppercase tracking-[0.2em] mb-4"
                style={{ color: "#A37557" }}
              >
                About Us
              </p>
              <h2
                className="text-display-lg mb-8"
                style={{ color: "#2B1B12", lineHeight: 1.1 }}
              >
                Two Decades of<br />
                Premium Leather
              </h2>
              <div className="space-y-6" style={{ color: "#3D2E24", fontSize: "1.05rem", lineHeight: 1.75 }}>
                <p>
                  Jafri Enterprises is an established leather tannery and exporter based in
                  Karachi, Pakistan, with over two decades of experience in the leather
                  manufacturing industry since 2005. We specialize in the tanning and supply
                  of premium leather for clothing, bags, shoes, jackets, and a wide range of
                  finished leather goods.
                </p>
                <p>
                  We serve valued clients across <strong style={{ color: "#2B1B12", fontWeight: 700 }}>Korea, Germany, China,</strong> and
                  several other markets worldwide — backed by advanced tanning facilities,
                  skilled craftsmen, and rigorous quality control at every stage.
                </p>
                <p>
                  Our approach is built on three core commitments:{" "}
                  <strong style={{ color: "#362217", fontWeight: 700 }}>
                    the highest quality, competitive pricing, and on-time delivery
                  </strong>{" "}
                  — supported by efficient management and a well-trained team.
                </p>
              </div>
            </AnimatedSection>

            {/* Right Column — 2x2 Stats Grid + Export Markets Box */}
            <AnimatedSection delay={0.15} className="lg:col-span-6 space-y-6">
              {/* 2x2 Grid of Stat Cards */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "20+", label: "Years Experience" },
                  { value: "4+", label: "Export Markets" },
                  { value: "40+", label: "Min. Order Units" },
                  { value: "3", label: "Product Divisions" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl p-6 md:p-8 text-center transition-transform duration-300 hover:-translate-y-1"
                    style={{
                      background: "#EBE3D5",
                      border: "1px solid rgba(163, 117, 87, 0.22)",
                      boxShadow: "0 4px 20px rgba(60, 40, 25, 0.04)",
                    }}
                  >
                    <div
                      className="text-3xl md:text-4xl font-black mb-2"
                      style={{ color: "#2B1B12", fontFamily: "var(--font-display)" }}
                    >
                      {s.value}
                    </div>
                    <div
                      className="text-[0.7rem] md:text-xs font-bold tracking-[0.15em] uppercase"
                      style={{ color: "#A37557" }}
                    >
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Export Markets Card */}
              <div
                className="rounded-2xl p-6 md:p-8"
                style={{
                  background: "#EBE3D5",
                  border: "1px solid rgba(163, 117, 87, 0.22)",
                  boxShadow: "0 4px 20px rgba(60, 40, 25, 0.04)",
                }}
              >
                <p
                  className="text-xs font-bold uppercase tracking-[0.2em] mb-4"
                  style={{ color: "#A37557" }}
                >
                  Export Markets
                </p>
                <div className="divide-y divide-[rgba(163,117,87,0.18)]">
                  {markets.map((m) => (
                    <div
                      key={m.country}
                      className="flex items-center justify-between py-3.5"
                    >
                      <span
                        className="font-bold text-base md:text-lg"
                        style={{ color: "#2B1B12" }}
                      >
                        {m.country}
                      </span>
                      <span className="text-xs md:text-sm text-right" style={{ color: "#7A685B" }}>
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

      {/* ── Key Highlights Section ─────────────────────────────── */}
      <section
        className="section-padding"
        style={{ background: "#EFE7DC" }}
      >
        <div className="container-luxury">
          <AnimatedSection className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3" style={{ color: "#A37557" }}>
              Key Highlights
            </p>
            <h2 className="text-display-lg" style={{ color: "#2B1B12" }}>
              Why Work With Us
            </h2>
            <p
              className="max-w-2xl mx-auto mt-4 text-lg"
              style={{ color: "#7A685B" }}
            >
              We believe the true value of a quality product should always be maximized —
              that belief drives everything we do.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((h, i) => (
              <AnimatedSection key={h.title} delay={i * 0.1}>
                <div
                  className="rounded-2xl p-7 h-full flex flex-col gap-4 bg-white shadow-sm transition-transform duration-300 hover:-translate-y-1"
                  style={{
                    border: "1px solid rgba(163, 117, 87, 0.18)",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: "rgba(163, 117, 87, 0.12)", color: "#A37557" }}
                  >
                    <h.icon size={22} />
                  </div>
                  <h3
                    className="text-display-xs"
                    style={{ color: "#2B1B12" }}
                  >
                    {h.title}
                  </h3>
                  <p style={{ color: "#7A685B", lineHeight: 1.65, fontSize: "0.95rem" }}>
                    {h.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline Section (Matching Reference Image 2) ───────────────── */}
      <section
        className="section-padding"
        style={{ background: "#EFE7DC" }}
      >
        <div className="container-luxury">
          <AnimatedSection className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3" style={{ color: "#A37557" }}>
              Our Journey
            </p>
            <h2 className="text-display-lg" style={{ color: "#2B1B12" }}>
              Two Decades of Growth
            </h2>
          </AnimatedSection>

          <div className="relative max-w-5xl mx-auto">
            {/* vertical center line */}
            <div
              className="absolute left-1/2 top-4 bottom-4 w-0.5 hidden lg:block"
              style={{ background: "rgba(163, 117, 87, 0.25)", transform: "translateX(-50%)" }}
            />

            <div className="space-y-12">
              {milestones.map((m, i) => (
                <AnimatedSection key={m.year} delay={i * 0.08}>
                  <div
                    className={`flex flex-col lg:flex-row gap-6 lg:gap-0 items-start lg:items-center ${
                      i % 2 === 0 ? "" : "lg:flex-row-reverse"
                    }`}
                  >
                    {/* Content side — White Card */}
                    <div className={`lg:w-[calc(50%-3rem)] w-full ${i % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                      <div
                        className="rounded-2xl p-6 bg-white shadow-sm inline-block w-full"
                        style={{
                          border: "1px solid rgba(163, 117, 87, 0.16)",
                        }}
                      >
                        <p
                          className="text-xs font-bold tracking-[0.18em] uppercase mb-1.5"
                          style={{ color: "#A37557" }}
                        >
                          {m.label}
                        </p>
                        <p className="text-base md:text-lg font-medium leading-snug" style={{ color: "#2B1B12" }}>
                          {m.detail}
                        </p>
                      </div>
                    </div>

                    {/* Center Year Bubble Circle */}
                    <div className="lg:w-24 flex justify-center w-full my-2 lg:my-0">
                      <div
                        className="w-16 h-16 rounded-full flex items-center justify-center text-base font-black z-10 shadow-md"
                        style={{
                          background: "#5C3D2E",
                          color: "#FFFFFF",
                          border: "4px solid #EFE7DC",
                          fontFamily: "var(--font-display)",
                        }}
                      >
                        {m.year}
                      </div>
                    </div>

                    {/* Spacer for alternating side */}
                    <div className="hidden lg:block lg:w-[calc(50%-3rem)]" />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Get in Touch CTA ───────────────────────────── */}
      <section
        className="section-padding"
        style={{ background: "#362217", color: "#FBF8F3" }}
      >
        <div className="container-luxury">
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-[0.2em] mb-4" style={{ color: "#EAE0D0" }}>
              Get in Touch
            </p>
            <h2 className="text-display-lg mb-5" style={{ color: "#FFFFFF" }}>
              Start a Partnership
            </h2>
            <p className="text-lg mb-2" style={{ color: "#EAE0D0" }}>
              Karachi, Pakistan
            </p>
            <p className="text-lg mb-8" style={{ color: "#EAE0D0", opacity: 0.9 }}>
              We work with importers, brands, and retailers worldwide.
              All inquiries are handled personally with a quote within 24–48 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <QuoteButton label="Request a Quote" size="lg" />
              <Button asChild variant="heroOutline" size="lg">
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
