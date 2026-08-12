"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import NumberFlow from "@number-flow/react";

/**
 * StatNumber — drop-in replacement for `<div className="stat-number">{value}</div>`
 * that counts the figure up when the stat scrolls into view.
 *
 * Stat values across the site are mixed strings: "2005", "20+", "200 units",
 * "30,000 sq ft/day", but also "CBR", "Raw to Finish", "3–6 weeks", "S – 5XL".
 * Only a value that *starts* with digits and is not a range gets animated —
 * everything else renders as plain text, so a new stat can be written in the
 * page without checking whether it happens to be countable.
 *
 * The unit that trails the figure ("sq ft/day", "+", "units") stays static;
 * animating it would make the width jump. `aria-hidden` on the animated part
 * plus an `aria-label` carrying the original string means assistive tech and
 * crawlers always read the real value, never a mid-count 0.
 */

type Parsed = { target: number; suffix: string; grouped: boolean };

function parseStat(value: string): Parsed | null {
  const match = /^([\d,]+)(.*)$/.exec(value);
  if (!match) return null;

  const [, digits, suffix] = match;
  // "3–6 weeks" / "3–4wk" — a range reads as one figure, so leave it alone.
  if (/^\s*[–—-]\s*\d/.test(suffix)) return null;

  const target = Number(digits.replace(/,/g, ""));
  if (!Number.isFinite(target)) return null;

  // Mirror the source: "30,000" keeps its separator, the year "2005" must not
  // gain one.
  return { target, suffix, grouped: digits.includes(",") };
}

const EASE = "cubic-bezier(0.25,0.46,0.45,0.94)";

export interface StatNumberProps {
  value: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function StatNumber({
  value,
  className = "stat-number",
  style,
}: StatNumberProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-12% 0px" });
  const parsed = parseStat(value);

  if (!parsed) {
    return (
      <div ref={ref} className={className} style={style}>
        {value}
      </div>
    );
  }

  return (
    <div ref={ref} className={className} style={style} aria-label={value}>
      <span aria-hidden="true">
        <NumberFlow
          value={inView ? parsed.target : 0}
          format={{ useGrouping: parsed.grouped }}
          transformTiming={{ duration: 900, easing: EASE }}
          spinTiming={{ duration: 900, easing: EASE }}
          opacityTiming={{ duration: 350, easing: "ease-out" }}
          willChange
        />
        {parsed.suffix}
      </span>
    </div>
  );
}
