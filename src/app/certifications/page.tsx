import type { Metadata } from "next";
import Image from "next/image";
import { Award, CheckCircle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import QuoteButton from "@/components/QuoteButton";

export const metadata: Metadata = {
  title: "Certifications",
  description:
    "Jafri Enterprises certifications and compliance standards. ISO 9001:2015, REACH compliance, Pakistan TDAP export certification, and CBR Group partnership.",
};

const certifications = [
  {
    title: "ISO 9001:2015",
    authority: "International Organization for Standardization",
    category: "Quality Management",
    description:
      "Our quality management system is certified to ISO 9001:2015 standards, ensuring consistent product quality, process efficiency, and continuous improvement across all production units.",
    scope: "All leather manufacturing processes across Tannery, Garments, and Accessories divisions",
    color: "var(--color-amber)",
  },
  {
    title: "REACH Compliant",
    authority: "European Chemicals Agency (ECHA)",
    category: "Chemical Compliance",
    description:
      "Full compliance with the EU REACH regulation (EC No 1907/2006) for chemical substances used in leather processing. Our products meet all EU import requirements.",
    scope: "Leather finishing chemicals, dyes, and treatments",
    color: "var(--color-amber-light)",
  },
  {
    title: "TDAP Export Certification",
    authority: "Trade Development Authority of Pakistan",
    category: "Export Compliance",
    description:
      "Registered and certified exporter under Pakistan's Trade Development Authority. Compliance with all Pakistan export regulations and international trade laws.",
    scope: "All export shipments — leather skins, garments, accessories",
    color: "var(--color-amber)",
  },
  {
    title: "CBR Group Official Agent",
    authority: "CBR Group GmbH — Germany",
    category: "Brand Partnership",
    description:
      "Official Pakistan manufacturing agent for Germany's CBR Group, managing Street One, One Touch, and Cecil brands. Demonstrates compliance with European fashion industry standards.",
    scope: "R&D, sampling, styling, quality control for EU brand leather supply",
    color: "var(--color-amber-light)",
  },
  {
    title: "Leather Council of Pakistan",
    authority: "Leather Council of Pakistan",
    category: "Industry Membership",
    description:
      "Active member of Pakistan's official leather trade body, ensuring compliance with national leather industry standards and best practices.",
    scope: "Industry code of conduct and ethical sourcing standards",
    color: "var(--color-amber)",
  },
  {
    title: "Korangi Industrial Association",
    authority: "Korangi Industrial Area Association",
    category: "Industrial Compliance",
    description:
      "Registered manufacturing unit within Karachi's Korangi Industrial Area, complying with all local environmental and industrial regulations.",
    scope: "Factory operations, waste management, environmental standards",
    color: "var(--color-amber-light)",
  },
];

// Scanned membership certificates, sourced from jafrienterprises.biz.
const documents = [
  {
    image: "/images/certifications/kcci-membership.jpg",
    title: "KCCI Membership",
    issuer: "Karachi Chamber of Commerce & Industry",
  },
  {
    image: "/images/certifications/kati-membership.jpg",
    title: "KATI Membership",
    issuer: "Korangi Association of Trade & Industry",
  },
  {
    image: "/images/certifications/pta-membership.jpg",
    title: "PTA Membership",
    issuer: "Pakistan Tanners Association",
  },
  {
    image: "/images/certifications/pajcci-membership.jpg",
    title: "PAJCCI Membership",
    issuer: "Pak-Afghan Joint Chamber of Commerce & Industry",
  },
];

const standards = [
  "EU REACH Chemical Regulation",
  "Restricted Substance List (RSL) Compliance",
  "Azo-Free Dye Standards",
  "Chrome VI Standards",
  "ZDHC Gateway Standards",
  "Ethical Sourcing Guidelines",
];

export default function CertificationsPage() {
  return (
    <div>
      {/* Header */}
      <div
        className="relative min-h-[50vh] flex items-end overflow-hidden"
        style={{ background: "linear-gradient(135deg, #362217 0%, #1A0E07 100%)", color: "#FFFFFF" }}
      >
        <div className="container-luxury relative z-10 pb-20 pt-44">
          <AnimatedSection>
            <p className="text-xs font-bold uppercase tracking-[0.2em] mb-4 text-[#D4B296]">Quality & Compliance</p>
            <h1 className="text-display-lg text-white">
              Our <span className="text-[#EBE3D5] italic font-serif">Certifications</span>
            </h1>
          </AnimatedSection>
        </div>
      </div>

      {/* Intro */}
      <section
        className="py-16"
        style={{ background: "#FAF6F0", borderBottom: "1px solid rgba(140,87,56,0.20)" }}
      >
        <div className="container-luxury">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3 text-[#8C5738]">
                  Export-Ready Quality
                </p>
                <h2 className="text-display-md mb-6" style={{ color: "#1A0E07" }}>
                  Built for <span className="text-[#8C5738] italic font-serif">Global Standards</span>
                </h2>
                <p className="leading-relaxed font-medium" style={{ color: "#36251B" }}>
                  Jafri Enterprises is committed to meeting the highest quality, chemical compliance, and ethical standards demanded by global B2B buyers. Our certifications open doors to EU, US, and worldwide markets.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
                {["ISO 9001", "REACH", "TDAP", "CBR Group", "LCP", "KIA"].map((cert, i) => (
                  <AnimatedSection key={cert} delay={i * 0.07}>
                    <div
                      className="h-full px-3 py-5 text-center sm:px-4 sm:py-6 bg-white rounded-xl shadow-sm"
                      style={{ border: "1px solid rgba(140,87,56,0.20)" }}
                    >
                      <Award size={24} className="mx-auto mb-2" style={{ color: "#8C5738" }} />
                      <div className="text-xs font-bold" style={{ color: "#1A0E07" }}>{cert}</div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Certifications Grid (Fixes Screenshot 2) */}
      <section className="section-padding" style={{ background: "#FBF8F3" }}>
        <div className="container-luxury">
          <AnimatedSection className="mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3 text-[#8C5738]">
              Full Certification List
            </p>
            <h2 className="text-display-md" style={{ color: "#1A0E07" }}>
              Verified & <span className="text-[#8C5738] italic font-serif">Compliant</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, i) => (
              <AnimatedSection key={cert.title} delay={i * 0.08}>
                <div
                  className="rounded-2xl p-8 h-full bg-white shadow-sm transition-transform duration-300 hover:-translate-y-1"
                  style={{
                    border: "1px solid rgba(140,87,56,0.22)",
                    borderTop: `4px solid ${cert.color === "var(--color-amber-light)" ? "#A37557" : "#8C5738"}`,
                  }}
                >
                  <div className="flex items-start gap-4 mb-5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: "rgba(140,87,56,0.12)", border: "1px solid rgba(140,87,56,0.25)" }}
                    >
                      <Award size={22} style={{ color: "#8C5738" }} />
                    </div>
                    <div>
                      <div className="text-xs font-bold tracking-[0.18em] uppercase mb-1" style={{ color: "#8C5738" }}>
                        {cert.category}
                      </div>
                      <h3 className="text-xl font-bold" style={{ color: "#1A0E07", fontFamily: "var(--font-display)" }}>
                        {cert.title}
                      </h3>
                      <p className="text-xs mt-1 font-semibold" style={{ color: "#6E4D3B" }}>
                        Issued by: {cert.authority}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed mb-6 font-medium" style={{ color: "#36251B" }}>
                    {cert.description}
                  </p>

                  <div
                    className="flex items-start gap-2.5 p-4 rounded-xl text-xs font-medium"
                    style={{ background: "#FAF6F0", border: "1px solid rgba(140,87,56,0.18)" }}
                  >
                    <CheckCircle size={15} className="mt-0.5 shrink-0" style={{ color: "#8C5738" }} />
                    <span style={{ color: "#36251B" }}>
                      <strong style={{ color: "#1A0E07" }}>Scope: </strong>
                      {cert.scope}
                    </span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Scanned documents */}
      <section className="section-padding" style={{ background: "#FAF6F0" }}>
        <div className="container-luxury">
          <AnimatedSection className="mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3 text-[#8C5738]">
              Registered Memberships
            </p>
            <h2 className="text-display-md" style={{ color: "#1A0E07" }}>
              Chamber & <span className="text-[#8C5738] italic font-serif">Association Records</span>
            </h2>
            <p
              className="mt-4 leading-relaxed font-medium"
              style={{ color: "#523B2D", maxWidth: "var(--measure)" }}
            >
              Jafri Enterprises is a registered member of Pakistan&apos;s principal
              trade bodies. Current-year certificates are available on request for
              your procurement and vendor onboarding files.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {documents.map((doc, i) => (
              <AnimatedSection key={doc.title} delay={i * 0.08} className="h-full">
                <figure className="rounded-2xl group flex h-full flex-col overflow-hidden bg-white shadow-sm border border-amber-900/18">
                  <div
                    className="relative h-64 w-full overflow-hidden"
                    style={{ background: "#FBF8F3" }}
                  >
                    <Image
                      src={doc.image}
                      alt={`${doc.title} — ${doc.issuer}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-contain p-4 transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <figcaption
                    className="border-t p-5"
                    style={{ borderColor: "rgba(140,87,56,0.18)" }}
                  >
                    <h3 className="text-base font-bold mb-1" style={{ color: "#1A0E07", fontFamily: "var(--font-display)" }}>
                      {doc.title}
                    </h3>
                    <p className="text-xs leading-snug font-semibold" style={{ color: "#6E4D3B" }}>
                      {doc.issuer}
                    </p>
                  </figcaption>
                </figure>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Standards (Dark Section) */}
      <section className="section-padding text-white" style={{ background: "#362217" }}>
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <p className="text-xs font-bold uppercase tracking-[0.2em] mb-4 text-[#D4B296]">
                Chemical & Material Standards
              </p>
              <h2 className="text-display-md mb-8 text-white">
                Chemical <span className="text-[#EBE3D5] italic font-serif">Compliance</span>
              </h2>
              <ul className="space-y-4">
                {standards.map((s) => (
                  <li key={s} className="flex items-center gap-3">
                    <CheckCircle size={18} className="text-[#D4B296]" />
                    <span className="text-[#FAF6F0] font-medium">{s}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div
                className="p-10 rounded-2xl bg-white/10 border border-white/20 shadow-xl"
              >
                <Award size={48} className="mb-6 text-[#D4B296]" />
                <h3 className="text-display-sm mb-4 text-white">Request Documentation</h3>
                <p className="mb-8 text-[#FAF6F0]/90 font-medium">
                  Need certification copies, test reports, or compliance documentation for your procurement process? Contact our export team.
                </p>
                <QuoteButton label="Request Documentation" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
