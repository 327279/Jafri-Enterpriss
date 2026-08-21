"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";

function InstagramIcon({ size = 18, className = "", style }: { size?: number; className?: string; style?: React.CSSProperties }) {
  return (
    <svg
      width={size}
      height={size}
      className={className}
      style={style}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [delivered, setDelivered] = useState(true);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (sending) return;

    const data = new FormData(e.currentTarget);
    setSending(true);
    setError("");

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          company: data.get("company"),
          email: data.get("email"),
          phone: data.get("phone"),
          country: data.get("country"),
          inquiryType: data.get("inquiryType"),
          message: data.get("message"),
          source: "contact-page",
        }),
      });

      const result = await res.json();

      if (!res.ok || !result.ok) {
        setError(result.error || "Something went wrong. Please email us directly.");
        return;
      }

      setDelivered(result.delivered !== false);
      setSubmitted(true);
    } catch {
      setError("Could not reach the server. Please email info@jafrienterprises.biz directly.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div>
      {/* Header */}
      <div
        className="relative min-h-[50vh] flex items-end overflow-hidden"
        style={{ background: "linear-gradient(135deg, #362217 0%, #1A0E07 100%)", color: "#FFFFFF" }}
      >
        <div className="container-luxury relative z-10 pb-20 pt-44">
          <AnimatedSection>
            <p className="text-xs font-bold uppercase tracking-[0.2em] mb-4 text-[#D4B296]">Get In Touch</p>
            <h1 className="text-display-lg text-white" style={{ color: "#FFFFFF" }}>
              <span className="text-white" style={{ color: "#FFFFFF" }}>Contact</span>{" "}
              <span className="text-[#EBE3D5] italic font-serif">Our Team</span>
            </h1>
          </AnimatedSection>
        </div>
      </div>

      {/* Main content (Fixes Screenshot 3) */}
      <section className="section-padding" style={{ background: "#FAF6F0" }}>
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
            {/* Contact info — 2 cols */}
            <div className="lg:col-span-2 space-y-8">
              <AnimatedSection>
                <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3 text-[#8C5738]">
                  Reach Us Directly
                </p>
                <h2 className="text-display-md mb-6" style={{ color: "#1A0E07" }}>
                  Let&apos;s Discuss<br />
                  <span className="text-[#8C5738] italic font-serif">Your Order</span>
                </h2>
                <p className="font-medium text-base leading-relaxed" style={{ color: "#36251B" }}>
                  Our export team is ready to discuss your requirements, provide samples, and prepare custom quotations for leather skins, garments, and accessories.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <div className="space-y-4">
                  {/* Email */}
                  <div
                    className="flex items-start gap-4 p-5 rounded-xl bg-white shadow-sm"
                    style={{ border: "1px solid rgba(140,87,56,0.18)" }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: "rgba(140,87,56,0.12)" }}
                    >
                      <Mail size={18} style={{ color: "#8C5738" }} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] mb-1 text-[#8C5738]">Email</p>
                      <div className="space-y-0.5">
                        <div>
                          <a href="mailto:info@jafrienterprises.biz" className="text-sm font-bold transition-colors hover:text-[#8C5738]" style={{ color: "#1A0E07" }}>
                            info@jafrienterprises.biz
                          </a>
                        </div>
                        <div>
                          <a href="mailto:jafrienterprises026@gmail.com" className="text-xs font-medium transition-colors hover:text-[#8C5738]" style={{ color: "#6E4D3B" }}>
                            jafrienterprises026@gmail.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Phone & WhatsApp */}
                  <div
                    className="flex items-start gap-4 p-5 rounded-xl bg-white shadow-sm"
                    style={{ border: "1px solid rgba(140,87,56,0.18)" }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: "rgba(140,87,56,0.12)" }}
                    >
                      <Phone size={18} style={{ color: "#8C5738" }} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] mb-1 text-[#8C5738]">Phone / WhatsApp</p>
                      <div className="space-y-0.5">
                        <div>
                          <a href="https://wa.me/923701132411" target="_blank" rel="noopener noreferrer" className="text-sm font-bold transition-colors hover:text-[#8C5738]" style={{ color: "#1A0E07" }}>
                            +92 370 1132411 (WhatsApp)
                          </a>
                        </div>
                        <div>
                          <a href="tel:+923349219214" className="text-xs font-medium transition-colors hover:text-[#8C5738]" style={{ color: "#6E4D3B" }}>
                            +92 334 9219214 (Direct Line)
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Instagram */}
                  <div
                    className="flex items-start gap-4 p-5 rounded-xl bg-white shadow-sm"
                    style={{ border: "1px solid rgba(140,87,56,0.18)" }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: "rgba(140,87,56,0.12)" }}
                    >
                      <InstagramIcon size={18} style={{ color: "#8C5738" }} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] mb-1 text-[#8C5738]">Instagram</p>
                      <a
                        href="https://www.instagram.com/jafrienterprises?igsh=dGVnc2Q3aXk0c2l5&igsi=dGVnc2Q3aXk0c2l5&utm_source=qr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-bold transition-colors hover:text-[#8C5738]"
                        style={{ color: "#1A0E07" }}
                      >
                        @jafrienterprises
                      </a>
                    </div>
                  </div>

                  {/* Head Office */}
                  <div
                    className="flex items-start gap-4 p-5 rounded-xl bg-white shadow-sm"
                    style={{ border: "1px solid rgba(140,87,56,0.18)" }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: "rgba(140,87,56,0.12)" }}
                    >
                      <MapPin size={18} style={{ color: "#8C5738" }} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] mb-1 text-[#8C5738]">Head Office</p>
                      <p className="text-sm font-semibold leading-relaxed" style={{ color: "#1A0E07" }}>
                        Plot #A-024, Block-3<br />
                        Gulistan-E-Jauhar<br />
                        Karachi, Pakistan
                      </p>
                    </div>
                  </div>

                  {/* Factory */}
                  <div
                    className="flex items-start gap-4 p-5 rounded-xl bg-white shadow-sm"
                    style={{ border: "1px solid rgba(140,87,56,0.18)" }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: "rgba(140,87,56,0.12)" }}
                    >
                      <MapPin size={18} style={{ color: "#8C5738" }} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] mb-1 text-[#8C5738]">Manufacturing Facility</p>
                      <p className="text-sm font-semibold leading-relaxed" style={{ color: "#1A0E07" }}>
                        Plot #40, Sector 7-A<br />
                        Korangi Industrial Area<br />
                        Karachi, Pakistan
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div
                    className="flex items-start gap-4 p-5 rounded-xl bg-white shadow-sm"
                    style={{ border: "1px solid rgba(140,87,56,0.18)" }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: "rgba(140,87,56,0.12)" }}
                    >
                      <Clock size={18} style={{ color: "#8C5738" }} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] mb-1 text-[#8C5738]">Business Hours</p>
                      <p className="text-sm font-semibold" style={{ color: "#1A0E07" }}>
                        Mon – Sat: 9:00 AM – 6:00 PM<br />
                        <span className="text-xs font-semibold text-[#6E4D3B]">Pakistan Standard Time (PKT, UTC+5)</span>
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Form — 3 cols (Clean White Card) */}
            <div className="lg:col-span-3">
              <AnimatedSection direction="right">
                <div
                  className="p-8 sm:p-10 rounded-2xl bg-white shadow-sm"
                  style={{ border: "1px solid rgba(140,87,56,0.22)" }}
                >
                  {!submitted ? (
                    <>
                      <h3 className="text-2xl font-bold mb-2" style={{ color: "#1A0E07", fontFamily: "var(--font-display)" }}>
                        Send Us a Message
                      </h3>
                      <p className="text-sm font-medium mb-8" style={{ color: "#523B2D" }}>
                        For quotes, samples, and general inquiries. Response within 24 business hours.
                      </p>

                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label className="text-xs font-bold uppercase tracking-[0.16em] block mb-2 text-[#8C5738]">Full Name *</label>
                            <input required name="name" type="text" placeholder="John Smith" className="form-field" />
                          </div>
                          <div>
                            <label className="text-xs font-bold uppercase tracking-[0.16em] block mb-2 text-[#8C5738]">Company *</label>
                            <input required name="company" type="text" placeholder="Your Company Ltd." className="form-field" />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label className="text-xs font-bold uppercase tracking-[0.16em] block mb-2 text-[#8C5738]">Email *</label>
                            <input required name="email" type="email" placeholder="john@company.com" className="form-field" />
                          </div>
                          <div>
                            <label className="text-xs font-bold uppercase tracking-[0.16em] block mb-2 text-[#8C5738]">Phone / WhatsApp</label>
                            <input name="phone" type="tel" placeholder="+1 555 000 0000" className="form-field" />
                          </div>
                        </div>
                        <div>
                          <label className="text-xs font-bold uppercase tracking-[0.16em] block mb-2 text-[#8C5738]">Country</label>
                          <input name="country" type="text" placeholder="United States" className="form-field" />
                        </div>
                        <div>
                          <label className="text-xs font-bold uppercase tracking-[0.16em] block mb-2 text-[#8C5738]">Inquiry Type</label>
                          <select name="inquiryType" className="form-field" defaultValue="">
                            <option value="" disabled>Select inquiry type</option>
                            <option value="quote">Request a Quote</option>
                            <option value="sample">Sample Request</option>
                            <option value="oem">OEM Partnership</option>
                            <option value="cert">Certification Documents</option>
                            <option value="visit">Factory Visit</option>
                            <option value="other">General Inquiry</option>
                          </select>
                        </div>
                        <div>
                          <label className="text-xs font-bold uppercase tracking-[0.16em] block mb-2 text-[#8C5738]">Message *</label>
                          <textarea
                            required
                            name="message"
                            rows={5}
                            placeholder="Tell us about your requirements — product, quantity, destination, timeline..."
                            className="form-field resize-none"
                          />
                        </div>

                        {error && (
                          <p className="text-sm font-semibold text-rose-600">
                            {error}
                          </p>
                        )}

                        <Button type="submit" size="lg" block disabled={sending}>
                          {sending ? "Sending…" : "Send Message"}
                          <Send />
                        </Button>
                      </form>
                    </>
                  ) : (
                    <div className="text-center py-16">
                      <div
                        className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-[#8C5738]/15 border border-[#8C5738]"
                      >
                        <Check size={26} className="text-[#8C5738]" aria-hidden="true" />
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-[#1A0E07]" style={{ fontFamily: "var(--font-display)" }}>
                        {delivered ? "Message Sent!" : "Almost There"}
                      </h3>
                      <p className="font-medium text-[#36251B] leading-relaxed">
                        {delivered ? (
                          <>
                            Thank you for contacting Jafri Enterprises. Our export team will be in touch within <strong className="text-[#1A0E07]">24 business hours</strong>.
                          </>
                        ) : (
                          <>
                            Email delivery is not configured on this site yet. Please send your requirements directly to{" "}
                            <a href="mailto:info@jafrienterprises.biz" className="underline font-bold text-[#8C5738]">
                              info@jafrienterprises.biz
                            </a>{" "}
                            and our export team will respond within 24 business hours.
                          </>
                        )}
                      </p>
                    </div>
                  )}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Map embed */}
      <section style={{ background: "var(--color-void)", borderTop: "1px solid var(--color-border)" }}>
        <AnimatedSection>
          <div className="h-96 w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.292!2d67.0959!3d24.8607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e5e!2sKorangi+Industrial+Area%2C+Karachi%2C+Pakistan!5e0!3m2!1sen!2s!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(0.85) contrast(0.85)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Jafri Enterprises Karachi Location"
            />
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
