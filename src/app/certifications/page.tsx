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
        style={{ background: "linear-gradient(135deg, var(--color-brown-deep) 0%, var(--color-void) 70%)" }}
      >
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, var(--color-void) 0%, transparent 60%)" }} />
        <div className="container-luxury relative z-10 pb-20 pt-44">
          <AnimatedSection>
            <p className="text-label mb-4">Quality & Compliance</p>
            <h1 className="text-display-lg">
              Our{" "}
              <span className="text-gradient-gold italic">Certifications</span>
            </h1>
          </AnimatedSection>
        </div>
      </div>

      {/* Intro */}
      <section
        className="py-16 on-brown"
        style={{ background: "var(--color-obsidian)", borderBottom: "1px solid rgba(232,223,212,0.16)" }}
      >
        <div className="container-luxury">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="section-eyebrow mb-6">
                  <div className="divider-gold" />
                  <p className="text-label">Export-Ready Quality</p>
                </div>
                <h2 className="text-display-md mb-6">
                  Built for{" "}
                  <span className="text-gradient-gold italic">Global Standards</span>
                </h2>
                <p className="leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                  Jafri Enterprises is committed to meeting the highest quality, chemical compliance, and ethical standards demanded by global B2B buyers. Our certifications open doors to EU, US, and worldwide markets.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
                {["ISO 9001", "REACH", "TDAP", "CBR Group", "LCP", "KIA"].map((cert, i) => (
                  <AnimatedSection key={cert} delay={i * 0.07}>
                    <div
                      className="h-full px-3 py-5 text-center sm:px-4 sm:py-6"
                      style={{ background: "rgba(144,108,86,0.06)", border: "1px solid var(--color-border-strong)" }}
                    >
                      <Award size={24} className="mx-auto mb-2" style={{ color: "var(--color-amber)" }} />
                      <div className="text-xs font-semibold" style={{ color: "var(--color-cream)" }}>{cert}</div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="section-padding" style={{ background: "var(--color-void)" }}>
        <div className="container-luxury">
          <AnimatedSection className="mb-14">
            <div className="section-eyebrow">
              <div className="divider-gold" />
              <p className="text-label">Full Certification List</p>
            </div>
            <h2 className="text-display-md">
              Verified &{" "}
              <span className="text-gradient-gold italic">Compliant</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, i) => (
              <AnimatedSection key={cert.title} delay={i * 0.08}>
                <div
                  className="card-luxury p-8 h-full"
                  style={{
                    background: "rgba(26,18,8,0.6)",
                    border: `1px solid var(--color-border)`,
                    borderTop: `3px solid ${cert.color}`,
                  }}
                >
                  <div className="flex items-start gap-4 mb-5">
                    <div
                      className="w-12 h-12 flex items-center justify-center shrink-0"
                      style={{ background: "rgba(144,108,86,0.1)", border: "1px solid var(--color-border-strong)" }}
                    >
                      <Award size={22} style={{ color: cert.color }} />
                    </div>
                    <div>
                      <div className="text-label mb-1">{cert.category}</div>
                      <h3 className="text-display-xs">
                        {cert.title}
                      </h3>
                      <p className="text-xs mt-1" style={{ color: "var(--color-text-muted)" }}>
                        Issued by: {cert.authority}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--color-text-secondary)" }}>
                    {cert.description}
                  </p>

                  <div
                    className="flex items-start gap-2 p-4 text-xs"
                    style={{ background: "rgba(144,108,86,0.05)", border: "1px solid rgba(144,108,86,0.12)" }}
                  >
                    <CheckCircle size={14} className="mt-0.5 shrink-0" style={{ color: "var(--color-amber)" }} />
                    <span style={{ color: "var(--color-text-secondary)" }}>
                      <strong style={{ color: "var(--color-amber)" }}>Scope: </strong>
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
      <section className="section-padding" style={{ background: "var(--color-dark)" }}>
        <div className="container-luxury">
          <AnimatedSection className="mb-12">
            <div className="section-eyebrow">
              <div className="divider-gold" />
              <p className="text-label">Registered Memberships</p>
            </div>
            <h2 className="text-display-md">
              Chamber &{" "}
              <span className="text-gradient-gold italic">Association Records</span>
            </h2>
            <p
              className="mt-5 leading-relaxed"
              style={{ color: "var(--color-text-secondary)", maxWidth: "var(--measure)" }}
            >
              Jafri Enterprises is a registered member of Pakistan&apos;s principal
              trade bodies. Current-year certificates are available on request for
              your procurement and vendor onboarding files.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {documents.map((doc, i) => (
              <AnimatedSection key={doc.title} delay={i * 0.08} className="h-full">
                <figure className="card-luxury group flex h-full flex-col overflow-hidden">
                  {/* Scans are mixed portrait/landscape, so the frame is fixed
                      and the page is contained inside it rather than cropped —
                      a cropped certificate reads as a mistake. */}
                  <div
                    className="relative h-64 w-full overflow-hidden"
                    style={{ background: "rgba(232,223,212,0.04)" }}
                  >
                    <Image
                      src={doc.image}
                      alt={`${doc.title} — ${doc.issuer}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-contain p-3 transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <figcaption
                    className="border-t p-5"
                    style={{ borderColor: "var(--color-border)" }}
                  >
                    <h3 className="text-display-xs mb-1">{doc.title}</h3>
                    <p className="text-xs leading-snug" style={{ color: "var(--color-text-muted)" }}>
                      {doc.issuer}
                    </p>
                  </figcaption>
                </figure>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Standards */}
      <section className="section-padding on-brown" style={{ background: "var(--color-obsidian)" }}>
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="section-eyebrow mb-6">
                <div className="divider-gold" />
                <p className="text-label">Chemical & Material Standards</p>
              </div>
              <h2 className="text-display-md mb-8">
                Chemical{" "}
                <span className="text-gradient-gold italic">Compliance</span>
              </h2>
              <ul className="space-y-4">
                {standards.map((s) => (
                  <li key={s} className="flex items-center gap-3">
                    <CheckCircle size={18} style={{ color: "var(--color-amber)" }} />
                    <span style={{ color: "var(--color-cream)" }}>{s}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div
                className="p-10"
                style={{ background: "rgba(144,108,86,0.05)", border: "1px solid var(--color-border-strong)" }}
              >
                <Award size={48} className="mb-6" style={{ color: "var(--color-amber)" }} />
                <h3 className="text-display-sm mb-4">Request Documentation</h3>
                <p className="mb-8" style={{ color: "var(--color-text-secondary)" }}>
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
