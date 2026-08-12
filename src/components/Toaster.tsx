"use client";

import { Toaster as SonnerToaster } from "sonner";

/**
 * Toaster — Sonner, dressed in the brand's surface tokens.
 *
 * Sonner ships a light default that would read as a foreign element on the
 * dark leather ground, so the panel, border, and type are bound to the same
 * custom properties the rest of the site uses. Styling goes through
 * `toastOptions.style` rather than a stylesheet override so it survives
 * Sonner's own class names without a specificity fight.
 *
 * Bottom-right on desktop keeps confirmations away from the fixed navbar and
 * near the primary CTAs; Sonner drops it to the top on narrow viewports.
 */
export default function Toaster() {
  return (
    <SonnerToaster
      position="bottom-right"
      theme="dark"
      closeButton
      gap={12}
      offset={24}
      toastOptions={{
        style: {
          background: "rgba(26, 18, 8, 0.94)",
          border: "1px solid var(--color-border-strong)",
          borderRadius: "3px",
          color: "var(--color-text)",
          fontFamily: "var(--font-sans)",
          fontSize: "0.875rem",
          lineHeight: "1.5",
          boxShadow: "var(--shadow-lg)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        },
        classNames: {
          title: "font-semibold",
          description: "opacity-80",
        },
      }}
    />
  );
}
