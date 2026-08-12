"use client";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const footerLinks = {
  Products: [
    { label: "Leather Skins", href: "/products/leather-skins" },
    { label: "Leather Jackets", href: "/products/jackets" },
    { label: "All Products", href: "/products" },
  ],
  Company: [
    { label: "About Us", href: "/company" },
    { label: "Certifications", href: "/certifications" },
    { label: "OEM / Private Label", href: "/oem" },
  ],
  Contact: [
    { label: "Contact Us", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="footer-bg">
      {/* CTA Banner */}
      <div
        className="py-16 on-brown"
        style={{
          background: "linear-gradient(135deg, var(--color-brown-deep) 0%, rgba(44,24,16,0.6) 100%)",
          borderBottom: "1px solid rgba(232,223,212,0.16)",
        }}
      >
        <div className="container-luxury text-center">
          <p className="text-label mb-4">Ready to Source Premium Leather?</p>
          <h2 className="text-display-md mb-6">
            Start Your{" "}
            <span className="text-gradient-gold">B2B Partnership</span>
          </h2>
          <p className="mb-10 max-w-xl mx-auto" style={{ color: "var(--color-text-secondary)" }}>
            Join global brands sourcing premium Pakistani leather. Minimum order quantities, competitive pricing, and on-time delivery.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => {
                if (typeof window !== "undefined" && (window as typeof window & { openQuoteModal?: () => void }).openQuoteModal) {
                  (window as typeof window & { openQuoteModal: () => void }).openQuoteModal();
                }
              }}
            >
              Request a Quote
              <ArrowRight />
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/products">View Products</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Footer Grid */}
      <div className="container-luxury py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div
                className="relative flex items-center justify-center w-12 h-12 overflow-hidden rounded-xl bg-white p-1 border border-white/20 shadow-md group-hover:scale-105 transition-transform duration-300"
              >
                <Image
                  src="/images/jafri-logo.png"
                  alt="Jafri Enterprises Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="text-sm font-semibold" style={{ fontFamily: "var(--font-display)", color: "var(--color-warm-white)" }}>
                  Jafri Enterprises
                </div>
                <div className="text-[0.6rem] tracking-widest uppercase mt-0.5" style={{ color: "var(--color-amber-pale)" }}>
                  Est. 2005 · Karachi, Pakistan
                </div>
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-8 max-w-xs" style={{ color: "var(--color-text-muted)" }}>
              Established leather tannery and exporter based in Karachi, Pakistan. Premium leather for clothing, bags, shoes, and jackets — serving global markets since 2005.
            </p>
            {/* Contact */}
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm" style={{ color: "var(--color-text-secondary)" }}>
                <MapPin size={15} className="mt-0.5 shrink-0" style={{ color: "var(--color-amber)" }} />
                <span>Plot #40, Sector 7-A, Korangi Industrial Area, Karachi</span>
              </li>
              <li className="flex items-center gap-3 text-sm" style={{ color: "var(--color-text-secondary)" }}>
                <Mail size={15} style={{ color: "var(--color-amber)" }} />
                <a href="mailto:info@jafrienterprises.biz" className="hover-accent transition-colors">
                  info@jafrienterprises.biz
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm" style={{ color: "var(--color-text-secondary)" }}>
                <Phone size={15} style={{ color: "var(--color-amber)" }} />
                <a href="tel:+922135000000" className="hover-accent transition-colors">
                  +92 (21) 3500-0000
                </a>
              </li>
            </ul>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4
                className="text-xs font-semibold tracking-widest uppercase mb-5"
                style={{ color: "var(--color-amber)" }}
              >
                {section}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors duration-200 hover-accent"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-14 pt-8"
          style={{ borderTop: "1px solid var(--color-border)" }}
        >
          <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>
            © {new Date().getFullYear()} Jafri Enterprises. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>
            Premium Leather Manufacturing · Karachi, Pakistan · Est. 2005
          </p>
        </div>
      </div>
    </footer>
  );
}
