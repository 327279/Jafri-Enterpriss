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
  background = "var(--color-void)",
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
    <section className="section-padding" style={{ background }}>
      <div className="container-luxury">
        <AnimatedSection className="mb-12">
          <div className="section-eyebrow">
            <div className="divider-gold" />
            <p className="text-label">{eyebrow}</p>
          </div>
          <h2 className="text-display-md">
            {title}
            {titleAccent && (
              <>
                {" "}
                <span className="text-gradient-gold italic">{titleAccent}</span>
              </>
            )}
          </h2>
          {intro && (
            <p
              className="mt-5 text-lg leading-relaxed"
              style={{ color: "var(--color-text-secondary)", maxWidth: "var(--measure)" }}
            >
              {intro}
            </p>
          )}
        </AnimatedSection>

        {blocks && blocks.length > 0 && (
          <div className="grid grid-cols-1 gap-x-14 gap-y-10 lg:grid-cols-2">
            {blocks.map((block, i) => (
              <AnimatedSection key={block.heading} delay={i * 0.06}>
                <h3 className="text-display-xs mb-3">{block.heading}</h3>
                {block.paragraphs.map((p, j) => (
                  <p
                    key={j}
                    className="mb-4 last:mb-0 leading-relaxed"
                    style={{
                      color: "var(--color-text-secondary)",
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
              <h3 className="text-display-xs mb-6">{specsHeading}</h3>
            )}
            <dl
              className="grid grid-cols-1 border-t md:grid-cols-2"
              style={{ borderColor: "var(--color-border)" }}
            >
              {specs.map((s) => (
                <div
                  key={s.label}
                  className="flex flex-col gap-1 border-b py-4 pr-6 sm:flex-row sm:gap-4"
                  style={{ borderColor: "var(--color-border)" }}
                >
                  <dt
                    className="shrink-0 text-[0.65rem] font-semibold uppercase tracking-[0.14em] sm:w-36 sm:pt-0.5"
                    style={{ color: "var(--color-amber)" }}
                  >
                    {s.label}
                  </dt>
                  <dd
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--color-text-secondary)" }}
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
              className="leading-relaxed"
              style={{ color: "var(--color-text-secondary)", maxWidth: "var(--measure)" }}
            >
              {outro}
            </p>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
}
