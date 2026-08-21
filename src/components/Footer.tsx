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
    <footer className="footer-bg border-t border-[rgba(140,87,56,0.20)]">
      {/* CTA Banner (Dark Leather Section) */}
      <div
        className="py-16 text-white"
        style={{
          background: "linear-gradient(135deg, #362217 0%, #1A0E07 100%)",
          borderBottom: "1px solid rgba(255,255,255,0.15)",
        }}
      >
        <div className="container-luxury text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] mb-4 text-[#D4B296]">
            Start Your Order
          </p>
          <h2 className="text-display-md mb-6 text-white">
            Ready to Source{" "}
            <span className="text-[#EBE3D5] italic font-serif">Premium Leather?</span>
          </h2>
          <p className="mb-10 max-w-xl mx-auto text-[#FAF6F0]/90 text-base font-medium">
            Connect with our export team for pricing, samples, and bulk order arrangements. We ship worldwide.
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
            <Button asChild variant="heroOutline" size="lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Footer Grid (Light Parchment Section) */}
      <div className="container-luxury py-16" style={{ background: "#FBF8F3" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div
                className="relative flex items-center justify-center w-12 h-12 overflow-hidden rounded-2xl bg-white p-1.5 border border-amber-900/20 shadow-sm group-hover:scale-105 transition-transform duration-300"
              >
                <Image
                  src="/images/jafri-logo.svg"
                  alt="Jafri Enterprises Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain rounded-xl"
                />
              </div>
              <div>
                <div className="text-base font-bold" style={{ fontFamily: "var(--font-display)", color: "#1A0E07" }}>
                  Jafri Enterprises
                </div>
                <div className="text-[0.65rem] font-bold tracking-[0.18em] uppercase mt-0.5" style={{ color: "#6E4D3B" }}>
                  Est. 2005 · Karachi, Pakistan
                </div>
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-8 max-w-xs font-medium" style={{ color: "#36251B" }}>
              Established leather tannery and exporter based in Karachi, Pakistan. Premium leather for clothing, bags, shoes, and jackets — serving global markets since 2005.
            </p>
            {/* Contact */}
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm font-medium" style={{ color: "#36251B" }}>
                <MapPin size={16} className="mt-0.5 shrink-0" style={{ color: "#8C5738" }} />
                <span>Plot #40, Sector 7-A, Korangi Industrial Area, Karachi</span>
              </li>
              <li className="flex items-center gap-3 text-sm font-medium" style={{ color: "#36251B" }}>
                <Mail size={16} style={{ color: "#8C5738" }} />
                <a href="mailto:info@jafrienterprises.biz" className="hover:text-[#8C5738] transition-colors">
                  info@jafrienterprises.biz
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm font-medium" style={{ color: "#36251B" }}>
                <Phone size={16} style={{ color: "#8C5738" }} />
                <a href="tel:+922135000000" className="hover:text-[#8C5738] transition-colors">
                  +92 (21) 3500-0000
                </a>
              </li>
            </ul>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4
                className="text-xs font-bold tracking-[0.2em] uppercase mb-5"
                style={{ color: "#8C5738" }}
              >
                {section}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm font-medium transition-colors duration-200 hover:text-[#8C5738]"
                      style={{ color: "#523B2D" }}
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
