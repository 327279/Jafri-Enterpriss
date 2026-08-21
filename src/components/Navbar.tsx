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
          borderBottom: scrolled ? "1px solid rgba(163, 117, 87, 0.18)" : "1px solid rgba(255, 255, 255, 0.12)",
          boxShadow: scrolled ? "0 4px 20px rgba(60, 40, 25, 0.05)" : "none",
        }}
      >
        <div className="container-luxury">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div
                className="relative flex items-center justify-center w-12 h-12 overflow-hidden rounded-xl bg-white p-1 border border-amber-900/15 shadow-sm group-hover:scale-105 transition-transform duration-300"
              >
                <Image
                  src="/images/jafri-logo.svg"
                  alt="Jafri Enterprises Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div
                  className="text-base font-bold leading-none tracking-wide transition-colors duration-300"
                  style={{ color: scrolled ? "#2B1B12" : "#FFFFFF", fontFamily: "var(--font-display)" }}
                >
                  Jafri Enterprises
                </div>
                <div
                  className="text-[0.65rem] font-bold tracking-[0.2em] uppercase mt-1 transition-colors duration-300"
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
                      className="flex items-center gap-1.5 text-sm font-semibold transition-colors duration-300"
                      style={{
                        color: pathname.startsWith(link.href)
                          ? "#A37557"
                          : scrolled
                          ? "#2B1B12"
                          : "#FFFFFF",
                      }}
                    >
                      {link.label}
                      <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === link.href ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {activeDropdown === link.href && (
                        <motion.div
                          className="absolute top-full left-0 mt-3 min-w-[210px] bg-white rounded-xl shadow-lg p-2 border border-amber-900/15"
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.2 }}
                        >
                          {link.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className="block px-4 py-2.5 text-sm font-medium rounded-lg transition-colors duration-200 hover:bg-[#FBF8F3]"
                              style={{
                                color: pathname === child.href ? "#A37557" : "#2B1B12",
                              }}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm font-semibold transition-colors duration-300 hover:text-[#A37557]"
                    style={{
                      color: pathname === link.href ? "#A37557" : scrolled ? "#2B1B12" : "#FFFFFF",
                    }}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            {/* CTA + Mobile toggle */}
            <div className="flex items-center gap-4">
              <Button onClick={openQuote} size="sm" className="hidden lg:inline-flex">
                Request a Quote
              </Button>
              <button
                className="lg:hidden -mr-2 flex h-11 w-11 items-center justify-center rounded-xl transition-colors"
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
            className="fixed inset-0 z-[99] lg:hidden flex flex-col"
            style={{ background: "#FAF6F0" }}
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Top header strip in drawer */}
            <div
              className="flex items-center justify-between px-6 h-20 border-b shrink-0 bg-white"
              style={{ borderColor: "rgba(140,87,56,0.18)" }}
            >
              <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FAF6F0] p-1 border border-amber-900/15 flex items-center justify-center">
                  <Image
                    src="/images/jafri-logo.svg"
                    alt="Jafri Enterprises"
                    width={36}
                    height={36}
                    className="object-contain"
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
                className="w-10 h-10 rounded-full flex items-center justify-center bg-[#FAF6F0] border border-amber-900/15 text-[#1A0E07]"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* Scrollable links list */}
            <div className="flex-1 overflow-y-auto overscroll-contain px-6 py-6 sm:px-8">
              <nav className="flex flex-col gap-1 mb-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.25 }}
                    className="border-b last:border-b-0 py-2"
                    style={{ borderColor: "rgba(140,87,56,0.14)" }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center justify-between py-3 text-lg font-bold transition-colors"
                      style={{
                        color: pathname === link.href ? "#8C5738" : "#1A0E07",
                        fontFamily: "var(--font-display)",
                      }}
                    >
                      <span>{link.label}</span>
                      {link.children && <ChevronDown size={18} className="text-[#8C5738]" />}
                    </Link>
                    {link.children && (
                      <div className="pl-3 pb-2 space-y-1">
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
                      </div>
                    )}
                  </motion.div>
                ))}
              </nav>

              <div className="pt-4 border-t" style={{ borderColor: "rgba(140,87,56,0.18)" }}>
                <Button
                  onClick={() => { setMobileOpen(false); openQuote(); }}
                  size="lg"
                  block
                  className="w-full"
                >
                  Request a Quote
                </Button>
                <a
                  href="mailto:info@jafrienterprises.biz"
                  className="mt-4 block text-center text-xs font-bold tracking-wider text-[#8C5738]"
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
