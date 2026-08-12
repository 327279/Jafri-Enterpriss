"use client";

import { useEffect } from "react";

/**
 * Feeds the cursor position into every `.card-luxury` as `--mx` / `--my`, which
 * the card's `::after` spotlight gradient reads.
 *
 * One delegated listener rather than per-card React state: the position is
 * written straight to CSS custom properties, so a pointer move repaints the
 * gradient without re-rendering the tree. Mounted once in the root layout, it
 * covers every card on the site — including ones added later.
 */
export default function SpotlightTracker() {
  useEffect(() => {
    // Coarse pointers have no hover, so the glow would only ever flash on tap.
    if (window.matchMedia("(hover: none)").matches) return;

    let frame = 0;
    let pending: { card: HTMLElement; x: number; y: number } | null = null;

    // Batch into rAF so a burst of moves costs one layout read + one write.
    const flush = () => {
      frame = 0;
      if (!pending) return;
      const { card, x, y } = pending;
      pending = null;
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${x - rect.left}px`);
      card.style.setProperty("--my", `${y - rect.top}px`);
    };

    const onPointerMove = (e: PointerEvent) => {
      const target = e.target;
      if (!(target instanceof Element)) return;
      const card = target.closest<HTMLElement>(".card-luxury");
      if (!card) return;
      pending = { card, x: e.clientX, y: e.clientY };
      if (!frame) frame = requestAnimationFrame(flush);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
