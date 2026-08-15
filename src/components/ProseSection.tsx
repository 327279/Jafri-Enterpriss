"use client";

import AnimatedSection from "./AnimatedSection";

/**
 * ProseSection — long-form editorial copy between the catalogue blocks.
 *
 * B2B buyers read this before they trust a supplier, and search engines need
 * the depth, but a wall of text at full container width is unreadable. The
 * body is capped to the project's measure token and set in two columns on
 * wide screens so the line length stays comfortable either way.
 *
 * `specs` renders capability lists as a definition grid rather than bullets:
 * buyers scan these for one attribute ("what thicknesses?") instead of reading
 * them through, and a label/value pair is far quicker to scan than a run-on
 * line. It spans full width because the values are long enough that a narrow
 * column would wrap most of them.
 */

export interface ProseBlock {
  heading: string;
  paragraphs: string[];
}

export interface ProseSpec {
  label: string;
  value: string;
}

export default function ProseSection({
  eyebrow,
  title,
  titleAccent,
  intro,
  blocks,
  specs,
  specsHeading,
  outro,
  background = "#FAF6F0",
}: {
  eyebrow: string;
  title: string;
  titleAccent?: string;
  intro?: string;
  blocks?: ProseBlock[];
  specs?: ProseSpec[];
  specsHeading?: string;
  outro?: string;
  background?: string;
}) {
  return (
    <section className="section-padding" style={{ background, borderTop: "1px solid rgba(140,87,56,0.18)" }}>
      <div className="container-luxury">
        <AnimatedSection className="mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3 text-[#8C5738]">{eyebrow}</p>
          <h2 className="text-display-md" style={{ color: "#1A0E07" }}>
            {title}
            {titleAccent && (
              <>
                {" "}
                <span className="text-[#8C5738] italic font-serif">{titleAccent}</span>
              </>
            )}
          </h2>
          {intro && (
            <p
              className="mt-5 text-lg leading-relaxed font-medium"
              style={{ color: "#36251B", maxWidth: "var(--measure)" }}
            >
              {intro}
            </p>
          )}
        </AnimatedSection>

        {blocks && blocks.length > 0 && (
          <div className="grid grid-cols-1 gap-x-14 gap-y-10 lg:grid-cols-2">
            {blocks.map((block, i) => (
              <AnimatedSection key={block.heading} delay={i * 0.06}>
                <h3 className="text-xl font-bold mb-3" style={{ color: "#1A0E07", fontFamily: "var(--font-display)" }}>{block.heading}</h3>
                {block.paragraphs.map((p, j) => (
                  <p
                    key={j}
                    className="mb-4 last:mb-0 leading-relaxed font-medium text-base"
                    style={{
                      color: "#36251B",
                      maxWidth: "var(--measure)",
                    }}
                  >
                    {p}
                  </p>
                ))}
              </AnimatedSection>
            ))}
          </div>
        )}

        {specs && specs.length > 0 && (
          <AnimatedSection className={blocks && blocks.length > 0 ? "mt-14" : ""}>
            {specsHeading && (
              <h3 className="text-xl font-bold mb-6" style={{ color: "#1A0E07", fontFamily: "var(--font-display)" }}>{specsHeading}</h3>
            )}
            <dl
              className="grid grid-cols-1 border-t md:grid-cols-2"
              style={{ borderColor: "rgba(140,87,56,0.22)" }}
            >
              {specs.map((s) => (
                <div
                  key={s.label}
                  className="flex flex-col gap-1 border-b py-4 pr-6 sm:flex-row sm:gap-4"
                  style={{ borderColor: "rgba(140,87,56,0.18)" }}
                >
                  <dt
                    className="shrink-0 text-xs font-bold uppercase tracking-[0.14em] sm:w-36 sm:pt-0.5 text-[#8C5738]"
                  >
                    {s.label}
                  </dt>
                  <dd
                    className="text-sm leading-relaxed font-medium text-[#36251B]"
                  >
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>
          </AnimatedSection>
        )}

        {outro && (
          <AnimatedSection className="mt-12">
            <p
              className="leading-relaxed font-medium text-base"
              style={{ color: "#36251B", maxWidth: "var(--measure)" }}
            >
              {outro}
            </p>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
}
