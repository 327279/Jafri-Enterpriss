"use client";
import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";

/**
 * ScrollProgress — a slim brand-amber bar pinned to the very top of the
 * viewport that fills as the page scrolls. Sits above the navbar (z-[101]).
 *
 * The raw scrollYProgress (0 → 1) is smoothed with a spring so the bar
 * eases rather than tracking every pixel. Under prefers-reduced-motion we
 * bind straight to the unsmoothed value — the bar still reflects position,
 * it just doesn't glide.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const reduceMotion = useReducedMotion();

  const smooth = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    restDelta: 0.001,
  });

  const scaleX = reduceMotion ? scrollYProgress : smooth;

  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-[101] h-[3px] origin-left"
      style={{
        scaleX,
        background:
          "linear-gradient(90deg, var(--color-amber) 0%, var(--color-amber-light) 100%)",
        boxShadow: "0 0 12px rgba(144,108,86,0.55)",
      }}
    />
  );
}
