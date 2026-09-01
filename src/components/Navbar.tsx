"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useScrollLock } from "@/lib/useScrollLock";

const navLinks = [
  { href: "/", label: "Home" },
  {
    href: "/products",
    label: "Products",
    children: [
      { href: "/products/leather-skins", label: "Leather Skins" },
      { href: "/products/jackets", label: "Leather Jackets" },
      { href: "/products#custom-leather", label: "Custom Leather" },
    ],
  },
  {
    href: "/company",
    label: "About",
  },
  { href: "/oem", label: "OEM / Private Label" },
  { href: "/certifications", label: "Certifications" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const [mobileExpanded, setMobileExpanded] = useState<string | null>("/products");

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // The mobile menu closes from the link click handlers below (it covers the
  // viewport, so in-menu links are the only navigation triggers while it is
  // open). Closing on click — rather than in a pathname effect — keeps this
  // lint-clean and also closes the menu for same-path hash links like the
  // "Custom Leather" anchor, where the pathname never changes.

  // The overlay covers the viewport, so the page behind it must not scroll.
  // Lenis owns root scroll here, so a CSS-only lock would not hold on touch.
  useScrollLock(mobileOpen);

  // Escape closes the menu, matching the quote modal's behaviour.
  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  const openQuote = () => {
    if (typeof window !== "undefined" && (window as typeof window & { openQuoteModal?: (h?: string) => void }).openQuoteModal) {
      (window as typeof window & { openQuoteModal: (h?: string) => void }).openQuoteModal();
    }
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-[100] transition-all duration-500"
        style={{
          background: scrolled
            ? "rgba(251, 248, 243, 0.96)"
            : "rgba(43, 27, 18, 0.65)",
          backdropFilter: "blur(20px) saturate(1.4)",
          WebkitBackdropFilter: "blur(20px) saturate(1.4)",
          borderBottom: scrolled ? "1px solid rgba(163, 117, 87, 0.18)" : "1px solid rgba(255, 255, 255, 0.12)",
          boxShadow: scrolled ? "0 4px 20px rgba(60, 40, 25, 0.05)" : "none",
        }}
      >
        <div className="container-luxury">
          <div className="flex items-center justify-between h-18 sm:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group">
              <div
                className="relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 overflow-hidden rounded-2xl bg-white p-1.5 border border-amber-900/15 shadow-sm group-hover:scale-105 transition-transform duration-300"
              >
                <Image
                  src="/images/jafri-logo.svg"
                  alt="Jafri Enterprises Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain rounded-xl"
                  priority
                />
              </div>
              <div>
                <div
                  className="text-sm sm:text-base font-bold leading-none tracking-wide transition-colors duration-300"
                  style={{ color: scrolled ? "#2B1B12" : "#FFFFFF", fontFamily: "var(--font-display)" }}
                >
                  Jafri Enterprises
                </div>
                <div
                  className="text-[0.6rem] sm:text-[0.65rem] font-bold tracking-[0.2em] uppercase mt-1 transition-colors duration-300"
                  style={{ color: scrolled ? "#A37557" : "#EBE3D5" }}
                >
                  Est. 2005 · Karachi
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) =>
                link.children ? (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(link.href)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      className="flex items-center gap-1.5 text-sm font-semibold transition-colors duration-200 cursor-pointer"
                      style={{
                        color: pathname.startsWith(link.href)
                          ? scrolled
                            ? "#8C5738"
                            : "#EBE3D5"
                          : scrolled
                          ? "#2B1B12"
                          : "#FFFFFF",
                      }}
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        size={14}
                        className={cn(
                          "transition-transform duration-200",
                          activeDropdown === link.href ? "rotate-180" : ""
                        )}
                        style={{
                          color: pathname.startsWith(link.href)
                            ? scrolled
                              ? "#8C5738"
                              : "#EBE3D5"
                            : scrolled
                            ? "#8C5738"
                            : "#D4B296",
                        }}
                      />
                    </button>
                    <AnimatePresence>
                      {activeDropdown === link.href && (
                        <motion.div
                          className="absolute top-full left-0 mt-3 min-w-[220px] bg-white rounded-xl shadow-xl p-2 border border-amber-900/15"
                          initial={{ opacity: 0, y: -6, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -6, scale: 0.98 }}
                          transition={{ duration: 0.18, ease: "easeOut" }}
                        >
                          {link.children.map((child) => {
                            const isActive = pathname === child.href;
                            return (
                              <Link
                                key={child.label}
                                href={child.href}
                                className={cn(
                                  "flex items-center justify-between px-3.5 py-2.5 text-sm font-medium rounded-lg transition-all duration-200",
                                  isActive
                                    ? "bg-[#FAF6F0] text-[#8C5738] font-bold shadow-xs"
                                    : "text-[#2B1B12] hover:bg-[#FBF8F3] hover:text-[#8C5738]"
                                )}
                              >
                                <span>{child.label}</span>
                                {isActive && (
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#8C5738]" />
                                )}
                              </Link>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm font-semibold transition-colors duration-200"
                    style={{
                      color:
                        pathname === link.href
                          ? scrolled
                            ? "#8C5738"
                            : "#EBE3D5"
                          : scrolled
                          ? "#2B1B12"
                          : "#FFFFFF",
                    }}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            {/* CTA + Mobile toggle */}
            <div className="flex items-center gap-3 sm:gap-4">
              <Button onClick={openQuote} size="sm" className="hidden lg:inline-flex">
                Request a Quote
              </Button>
              <button
                className="lg:hidden flex h-11 w-11 items-center justify-center rounded-xl transition-colors active:scale-95"
                style={{ color: scrolled || mobileOpen ? "#1A0E07" : "#FFFFFF" }}
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer (Light Luxury Parchment Theme) */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[99] lg:hidden flex flex-col h-[100dvh] overflow-hidden"
            style={{ background: "#FAF6F0" }}
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Top header strip in drawer */}
            <div
              className="flex items-center justify-between px-5 sm:px-6 h-18 sm:h-20 border-b shrink-0 bg-white"
              style={{ borderColor: "rgba(140,87,56,0.18)" }}
            >
              <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-2.5">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#FAF6F0] p-1 border border-amber-900/15 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/images/jafri-logo.svg"
                    alt="Jafri Enterprises"
                    width={36}
                    height={36}
                    className="object-contain rounded-lg"
                  />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#1A0E07]" style={{ fontFamily: "var(--font-display)" }}>
                    Jafri Enterprises
                  </div>
                  <div className="text-[0.6rem] font-bold tracking-widest text-[#8C5738] uppercase">
                    Est. 2005 · Karachi
                  </div>
                </div>
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-[#FAF6F0] border border-amber-900/15 text-[#1A0E07] active:scale-95"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* Scrollable links list */}
            <div className="flex-1 overflow-y-auto overscroll-contain px-5 py-5 sm:px-8 flex flex-col justify-between">
              <nav className="flex flex-col gap-0.5">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.22 }}
                    className="border-b last:border-b-0 py-1"
                    style={{ borderColor: "rgba(140,87,56,0.12)" }}
                  >
                    {link.children ? (
                      <div>
                        <div className="flex items-center justify-between">
                          <Link
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                            className="flex-1 py-3 text-base sm:text-lg font-bold transition-colors"
                            style={{
                              color: pathname.startsWith(link.href) ? "#8C5738" : "#1A0E07",
                              fontFamily: "var(--font-display)",
                            }}
                          >
                            {link.label}
                          </Link>
                          <button
                            type="button"
                            onClick={() => setMobileExpanded(mobileExpanded === link.href ? null : link.href)}
                            className="p-3 text-[#8C5738] active:scale-95"
                            aria-label={`Toggle ${link.label} sub-menu`}
                          >
                            <ChevronDown
                              size={18}
                              className={cn(
                                "transition-transform duration-200",
                                mobileExpanded === link.href ? "rotate-180" : ""
                              )}
                            />
                          </button>
                        </div>
                        <AnimatePresence>
                          {mobileExpanded === link.href && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="pl-3 pb-2 space-y-1 overflow-hidden"
                            >
                              {link.children.map((child) => (
                                <Link
                                  key={child.label}
                                  href={child.href}
                                  onClick={() => setMobileOpen(false)}
                                  className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors"
                                  style={{
                                    background: pathname === child.href ? "rgba(140,87,56,0.12)" : "transparent",
                                    color: pathname === child.href ? "#8C5738" : "#36251B",
                                  }}
                                >
                                  <ChevronRight size={14} className="text-[#8C5738] shrink-0" aria-hidden="true" />
                                  {child.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center justify-between py-3 text-base sm:text-lg font-bold transition-colors"
                        style={{
                          color: pathname === link.href ? "#8C5738" : "#1A0E07",
                          fontFamily: "var(--font-display)",
                        }}
                      >
                        <span>{link.label}</span>
                        <ChevronRight size={16} className="text-[#8C5738]/60" />
                      </Link>
                    )}
                  </motion.div>
                ))}
              </nav>

              {/* Bottom drawer actions & contact */}
              <div className="pt-5 mt-4 border-t pb-[max(1rem,env(safe-area-inset-bottom))]" style={{ borderColor: "rgba(140,87,56,0.18)" }}>
                <Button
                  onClick={() => { setMobileOpen(false); openQuote(); }}
                  size="lg"
                  block
                  className="w-full shadow-lg"
                >
                  Request a Quote
                </Button>

                <div className="grid grid-cols-2 gap-2.5 mt-3">
                  <a
                    href="https://wa.me/923701132411?text=Hello%20Jafri%20Enterprises%2C%20I%20would%20like%20to%20inquire%20about%20your%20leather%20products."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-bold bg-[#25D366]/15 text-[#1b7a3e] border border-[#25D366]/30 active:scale-98 transition-transform"
                  >
                    <span>WhatsApp Us</span>
                  </a>
                  <a
                    href="tel:+923701132411"
                    className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-bold bg-white text-[#1A0E07] border border-amber-900/20 active:scale-98 transition-transform shadow-xs"
                  >
                    <span>Call Sales</span>
                  </a>
                </div>

                <a
                  href="mailto:info@jafrienterprises.biz"
                  className="mt-3 block text-center text-[0.75rem] font-bold tracking-wider text-[#8C5738]"
                >
                  info@jafrienterprises.biz
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
