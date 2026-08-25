"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Award, Globe, Factory, Layers } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import ProductCard from "@/components/ProductCard";
import StatNumber from "@/components/StatNumber";
import { Button } from "@/components/ui/button";

// ─────────────────────────────────────────
// Data
// ─────────────────────────────────────────
const stats = [
  { value: "2005", label: "Established", icon: Factory },
  { value: "20+", label: "Years Experience", icon: Award },
  { value: "40+", label: "Min. Order Units", icon: Layers },
  { value: "4+", label: "Export Markets", icon: Globe },
];

const products = [
  {
    image: "/images/products/leather-skins.jpg",
    title: "Finished Leather Skins",
    description:
      "Premium full-grain and top-grain finished leather in a variety of finishes — nappa, pebbled, pull-up, and embossed. Processed in our Korangi tannery from raw to finished state.",
    specs: [
      { label: "Material", value: "Full-Grain / Top-Grain" },
      { label: "Finish", value: "Nappa, Pebbled, Pull-up" },
      { label: "Thickness", value: "0.6mm – 2.0mm" },
      { label: "Processing", value: "Drum, Dyeing, Toggling" },
    ],
    moq: "1,000 sq ft / order",
    href: "/products/leather-skins",
    tag: "Tannery Division",
  },
  {
    image: "/images/jackets/Untitled_design_19.webp",
    title: "Leather Jackets",
    description:
      "Biker, casual, classic and winter leather jackets in sheep nappa and other premium leathers. Made-to-order from S to 5XL with custom specifications.",
    specs: [
      { label: "Material", value: "Sheep Nappa, Cowhide" },
      { label: "Styles", value: "Biker, Casual, Classic" },
      { label: "Sizes", value: "S — 5XL (custom)" },
      { label: "Service", value: "OEM / Private Label" },
    ],
    moq: "40 units / style",
    href: "/products/jackets",
    tag: "Garments Division",
  },
  {
    image: "/images/products/leather-skins.jpg",
    title: "Leather Accessories",
    description:
      "Premium leather accessories including belts, wallets, bags, and bespoke items for global fashion brands. Crafted from our in-house finished leather.",
    specs: [
      { label: "Material", value: "Premium Finished Leather" },
      { label: "Products", value: "Belts, Wallets, Bags" },
      { label: "Branding", value: "Logo embossing available" },
      { label: "Service", value: "OEM / Private Label" },
    ],
    moq: "500 pieces / style",
    href: "/products",
    tag: "Accessories Division",
  },
];

const features = [
  {
    icon: Factory,
    title: "Vertical Integration",
    desc: "Raw hide to finished product under one roof. Complete control over quality at every stage.",
  },
  {
    icon: Globe,
    title: "Global Export Experience",
    desc: "20+ years exporting to Europe, North America, and Asia. Familiar with all international compliance standards.",
  },
  {
    icon: Layers,
    title: "Bulk Production Capacity",
    desc: "30,000 sq ft of finished leather per day across 3 production units in Karachi's industrial zone.",
  },
  {
    icon: Award,
    title: "CBR Group Partnership",
    desc: "Official Pakistan agent for Germany's CBR Group — managing Street One, One Touch & Cecil brand leather.",
  },
  {
    icon: Award,
    title: "Custom Finishing",
    desc: "Any finish, color, texture, or grain. Our R&D team develops custom leather to your exact specification.",
  },
  {
    icon: Globe,
    title: "OEM & Private Label",
    desc: "Full OEM capability. Your brand, your design, our manufacturing expertise and quality leather.",
  },
];

// ─────────────────────────────────────────
// Component
// ─────────────────────────────────────────
export default function HomePage() {
  const openQuote = () => {
    if (typeof window !== "undefined" && (window as typeof window & { openQuoteModal?: () => void }).openQuoteModal) {
      (window as typeof window & { openQuoteModal: () => void }).openQuoteModal();
    }
  };

  return (
    <div className="overflow-x-hidden">
      {/* ══════════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Video — plays once and stays on last frame in background */}
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            muted
            playsInline
            poster="/images/hero/hero-main.jpg"
            className="w-full h-full object-cover scale-105"
          >
            <source src="/assets/hero-intro.mp4" type="video/mp4" />
          </video>
          {/* Overlays */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(105deg, rgba(85,58,46,0.85) 0%, rgba(3,2,1,0.75) 55%, rgba(3,2,1,0.55) 100%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 20% 50%, rgba(85,58,46,0.35) 0%, transparent 65%)",
            }}
          />
        </div>

        {/* Content */}
        <div className="container-luxury relative z-10 pt-36 pb-28">
          <div className="max-w-4xl">
            {/* Eyebrow */}
            <motion.div
              className="flex items-center gap-4 mb-8"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="w-10 h-0.5 bg-[#D4B296]" />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4B296]">Karachi, Pakistan · Est. 2005</p>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="text-display-xl mb-8"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <span className="block text-white">Leather That</span>
              <span className="block text-[#EBE3D5]">Defines Quality</span>
            </motion.h1>

            {/* Sub Paragraph — High contrast for dark background */}
            <motion.p
              className="text-lg sm:text-xl max-w-2xl leading-relaxed mb-10 text-[#FAF6F0]/90 font-medium"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
            >
              Two decades of craftsmanship from Pakistan&apos;s tannery capital. Finished leather skins, garments, and accessories for global B2B buyers.
            </motion.p>

            {/* CTAs — kept clean with only Request a Quote and View Products */}
            <motion.div
              className="flex flex-wrap items-center gap-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.75 }}
            >
              <Button onClick={openQuote} size="lg">
                Request a Quote
                <ArrowRight />
              </Button>
              <Button asChild variant="heroOutline" size="lg">
                <Link href="/products">View Products</Link>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <div
            className="w-px h-16 mx-auto mb-2 relative overflow-hidden"
            style={{ background: "rgba(144,108,86,0.2)" }}
          >
            <motion.div
              className="absolute top-0 left-0 w-full"
              style={{ height: "40%", background: "var(--color-amber)" }}
              animate={{ top: ["0%", "100%"] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
          </div>
          <p className="text-[0.6rem] tracking-[0.25em] uppercase" style={{ color: "var(--color-text-muted)" }}>
            Scroll
          </p>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════
          STATS BAR
      ══════════════════════════════════════════ */}
      <section
        className="py-12"
        style={{
          background: "#FAF6F0",
          borderTop: "1px solid rgba(140,87,56,0.20)",
          borderBottom: "1px solid rgba(140,87,56,0.20)",
        }}
      >
        <div className="container-luxury">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <AnimatedSection key={stat.label} delay={i * 0.1} direction="up">
                  <div className="text-center">
                    <Icon size={32} className="mx-auto mb-2" style={{ color: "#8C5738" }} aria-hidden="true" />
                    <div className="text-3xl lg:text-4xl font-black mb-1" style={{ color: "#8C5738", fontFamily: "var(--font-display)" }}>
                      {stat.value}
                    </div>
                    <div className="text-xs font-bold tracking-[0.18em] uppercase" style={{ color: "#523B2D" }}>
                      {stat.label}
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          LEATHER VISUAL SECTION (Dark Leather Section)
      ══════════════════════════════════════════ */}
      <section className="section-padding text-white" style={{ background: "#362217" }}>
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <div className="relative">
                <div
                  className="absolute -inset-4 opacity-20"
                  style={{
                    background: "radial-gradient(ellipse, #A37557 0%, transparent 70%)",
                  }}
                />
                <div className="relative z-10 w-full rounded-2xl overflow-hidden border border-white/20 shadow-2xl" style={{ height: "460px" }}>
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="/images/hero/texture-closeup.jpg"
                    className="w-full h-full object-cover"
                  >
                    <source src="/assets/leather-craftsmanship.mp4" type="video/mp4" />
                  </video>
                </div>
                {/* Floating badge */}
                <div
                  className="absolute bottom-6 right-6 bg-[#1A0E07]/90 backdrop-blur-md px-6 py-4 rounded-xl border border-white/20 z-20 shadow-lg"
                >
                  <div className="text-2xl font-black leading-none text-[#EBE3D5]" style={{ fontFamily: "var(--font-display)" }}>
                    30,000
                  </div>
                  <div className="text-xs font-bold tracking-wide mt-1.5 text-white/90">
                    sq ft produced daily
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] mb-4 text-[#D4B296]">
                  Leather Finishes & Quality
                </p>
                <h2 className="text-display-lg mb-6 text-white">
                  Every Hide,{" "}
                  <span className="text-[#EBE3D5] italic font-serif">Perfected</span>
                </h2>
                <p className="leading-relaxed mb-6 text-[#FAF6F0]/90 text-base font-medium">
                  Our Korangi tannery processes leather from the raw state through drum processing, shaving, toggling, and dyeing — delivering consistent, export-grade finished leather to global buyers.
                </p>
                <p className="leading-relaxed mb-10 text-[#FAF6F0]/90 text-base font-medium">
                  Available in full-grain, top-grain, nappa, pebbled, pull-up, and custom embossed finishes. Multiple thicknesses and colors to specification.
                </p>

                {/* Finish chips */}
                <div className="flex flex-wrap gap-3 mb-10">
                  {["Full-Grain", "Top-Grain", "Nappa", "Pebbled", "Pull-Up", "Embossed"].map((f) => (
                    <span
                      key={f}
                      className="px-4 py-2 text-xs font-bold rounded-lg bg-white/10 border border-white/20 text-[#FAF6F0]"
                    >
                      {f}
                    </span>
                  ))}
                </div>

                <Button asChild size="lg">
                  <Link href="/products/leather-skins">
                    Explore Leather Skins
                    <ArrowRight />
                  </Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          ABOUT SECTION (Matching Parchment Light Reference)
      ══════════════════════════════════════════ */}
      <section
        className="section-padding"
        style={{ background: "#FBF8F3" }}
      >
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] mb-4" style={{ color: "#8C5738" }}>
                  About Jafri Enterprises
                </p>
                <h2 className="text-display-lg mb-6" style={{ color: "#1A0E07" }}>
                  Pakistan&apos;s Premier<br />
                  <span className="text-[#8C5738] italic font-serif">Leather House</span>
                </h2>
                <p className="leading-relaxed mb-5 text-base font-medium" style={{ color: "#36251B" }}>
                  Jafri Enterprises is an established leather tannery and exporter based in Karachi, Pakistan, with over two decades of experience since 2005. We specialize in the tanning and supply of premium leather for clothing, bags, shoes, jackets, and finished leather goods.
                </p>
                <p className="leading-relaxed mb-5 text-base font-medium" style={{ color: "#36251B" }}>
                  We serve valued clients across Korea, Germany, China, and several other markets worldwide — backed by advanced tanning facilities, skilled craftsmen, and rigorous quality control at every production stage.
                </p>
                <p className="leading-relaxed mb-10 text-base font-medium" style={{ color: "#36251B" }}>
                  Our approach is built on three core commitments: <strong style={{ color: "#1A0E07", fontWeight: 700 }}>the highest quality, competitive pricing, and on-time delivery</strong> — supported by efficient management and a well-trained team dedicated to your satisfaction.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg">
                    <Link href="/company">
                      Company Profile
                      <ArrowRight />
                    </Link>
                  </Button>
                  <Button onClick={openQuote} variant="outline" size="lg">
                    Get in Touch
                  </Button>
                </div>
              </div>
            </AnimatedSection>

            {/* Factory image */}
            <AnimatedSection direction="right" delay={0.2}>
              <div className="relative">
                <Image
                  src="/images/hero/factory.jpg"
                  alt="Jafri Enterprises tannery facility"
                  width={640}
                  height={480}
                  className="w-full object-cover rounded-2xl shadow-xl border border-amber-900/15"
                  style={{ maxHeight: "460px" }}
                />
                {/* Year badge */}
                <div
                  className="absolute -bottom-6 -left-6 px-7 py-6 rounded-2xl shadow-xl flex flex-col items-center justify-center border border-amber-900/20"
                  style={{
                    background: "#362217",
                    color: "#FFFFFF",
                  }}
                >
                  <span className="text-3xl font-black leading-none text-[#EBE3D5]" style={{ fontFamily: "var(--font-display)" }}>
                    20+
                  </span>
                  <span className="text-xs font-bold text-center leading-tight mt-1.5 text-white/90">
                    Years of<br />Excellence
                  </span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PRODUCTS SECTION (Dark Leather Section)
      ══════════════════════════════════════════ */}
      <section className="section-padding text-white" style={{ background: "#362217" }}>
        <div className="container-luxury">
          <AnimatedSection className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.2em] mb-4 text-[#D4B296]">
              Our Divisions
            </p>
            <h2 className="text-display-lg mb-4 text-white">
              Product <span className="text-[#EBE3D5] italic font-serif">Categories</span>
            </h2>
            <p className="max-w-xl mx-auto text-[#FAF6F0]/90 text-base font-medium">
              Three divisions, one quality standard. Premium leather products for global B2B buyers.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, i) => (
              <ProductCard key={product.title} {...product} delay={i * 0.12} />
            ))}
          </div>

          <AnimatedSection className="text-center mt-14">
            <Button asChild variant="heroOutline" size="lg">
              <Link href="/products">
                Browse All Products
                <ArrowRight />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHY CHOOSE US (Light Warm Sand Section)
      ══════════════════════════════════════════ */}
      <section
        className="section-padding"
        style={{
          background: "#EFE7DC",
        }}
      >
        <div className="container-luxury">
          <AnimatedSection className="mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.2em] mb-4" style={{ color: "#8C5738" }}>
              Why Source With Us
            </p>
            <h2 className="text-display-lg max-w-2xl" style={{ color: "#1A0E07" }}>
              The Jafri <span className="text-[#8C5738] italic font-serif">Advantage</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <AnimatedSection key={f.title} delay={i * 0.08}>
                <div
                  className="rounded-2xl p-8 h-full bg-white shadow-sm transition-transform duration-300 hover:-translate-y-1"
                  style={{
                    border: "1px solid rgba(140,87,56,0.18)",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{
                      background: "rgba(140,87,56,0.12)",
                    }}
                  >
                    <f.icon size={22} style={{ color: "#8C5738" }} />
                  </div>
                  <h3
                    className="text-lg font-bold mb-3"
                    style={{ fontFamily: "var(--font-display)", color: "#1A0E07" }}
                  >
                    {f.title}
                  </h3>
                  <p className="text-sm leading-relaxed font-medium" style={{ color: "#523B2D" }}>
                    {f.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CERTIFICATIONS STRIP (Fixing Screenshot 5!)
      ══════════════════════════════════════════ */}
      <section
        className="py-16"
        style={{
          background: "#FBF8F3",
          borderTop: "1px solid rgba(140,87,56,0.20)",
          borderBottom: "1px solid rgba(140,87,56,0.20)",
        }}
      >
        <div className="container-luxury">
          <AnimatedSection className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] mb-2" style={{ color: "#8C5738" }}>
              Compliance & Standards
            </p>
            <h3 className="text-display-sm font-black" style={{ color: "#1A0E07" }}>
              Certified for Global Export
            </h3>
          </AnimatedSection>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { label: "ISO 9001:2015", sub: "Quality Management" },
              { label: "REACH Compliant", sub: "EU Chemical Regulation" },
              { label: "Export Certified", sub: "Pakistan TDAP" },
              { label: "CBR Group", sub: "Official Pakistan Agent" },
            ].map((cert, i) => (
              <AnimatedSection key={cert.label} delay={i * 0.1}>
                <div
                  className="rounded-2xl text-center p-6 bg-white shadow-sm transition-transform duration-300 hover:-translate-y-1"
                  style={{
                    border: "1px solid rgba(140,87,56,0.22)",
                  }}
                >
                  <div
                    className="w-12 h-12 mx-auto mb-4 rounded-xl flex items-center justify-center"
                    style={{
                      background: "rgba(140,87,56,0.12)",
                      border: "1px solid rgba(140,87,56,0.25)",
                    }}
                  >
                    <Award size={22} style={{ color: "#8C5738" }} />
                  </div>
                  <div className="font-bold text-base mb-1" style={{ color: "#1A0E07" }}>
                    {cert.label}
                  </div>
                  <div className="text-xs font-semibold" style={{ color: "#523B2D" }}>
                    {cert.sub}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-8">
            <Button asChild variant="outline">
              <Link href="/certifications">View All Certifications</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          MARQUEE / TICKER
      ══════════════════════════════════════════ */}
      <section
        className="py-5 overflow-hidden select-none"
        style={{
          background: "linear-gradient(90deg, var(--color-amber) 0%, var(--color-amber-light) 100%)",
        }}
        aria-hidden="true"
      >
        <div className="flex w-max animate-marquee motion-reduce:transform-none">
          {[0, 1].map((track) => (
            <div key={track} className="flex shrink-0 items-center">
              {[
                "Finished Leather Skins",
                "Leather Jackets",
                "OEM Manufacturing",
                "Private Label",
                "Bulk Export Worldwide",
                "Karachi, Pakistan",
                "Est. 2005",
                "30,000 sq ft / day",
              ].map((item, i) => (
                <span
                  key={`${track}-${i}`}
                  className="inline-flex items-center mx-5 text-xs font-bold tracking-[0.16em] uppercase text-white drop-shadow-xs"
                >
                  {item}
                  <span className="mx-4 text-white/50">·</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FINAL CTA
      ══════════════════════════════════════════ */}
      <section className="section-padding relative overflow-hidden text-white" style={{ background: "#362217" }}>
        <div className="container-luxury relative z-10 text-center">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto">
              <p className="text-xs font-bold uppercase tracking-[0.2em] mb-4 text-[#D4B296]">Start Your Order</p>
              <h2 className="text-display-lg mb-6 text-white">
                Ready to Source{" "}
                <span className="text-[#EBE3D5] italic font-serif">Premium Leather?</span>
              </h2>
              <p className="text-lg mb-10 text-[#FAF6F0]/90 font-medium max-w-2xl mx-auto">
                Connect with our export team for pricing, samples, and bulk order arrangements. We ship worldwide.
              </p>
              <div className="flex flex-wrap gap-5 justify-center">
                <Button onClick={openQuote} size="lg">
                  Request a Quote
                  <ArrowRight />
                </Button>
                <Button asChild variant="heroOutline" size="lg">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
