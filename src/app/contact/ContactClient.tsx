"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";

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
        style={{ background: "linear-gradient(135deg, var(--color-brown-deep) 0%, var(--color-void) 70%)" }}
      >
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, var(--color-void) 0%, transparent 60%)" }} />
        <div className="container-luxury relative z-10 pb-20 pt-44">
          <AnimatedSection>
            <p className="text-label mb-4">Get In Touch</p>
            <h1 className="text-display-lg">
              Contact{" "}
              <span className="text-gradient-gold italic">Our Team</span>
            </h1>
          </AnimatedSection>
        </div>
      </div>

      {/* Main content */}
      <section className="section-padding on-brown" style={{ background: "var(--color-obsidian)" }}>
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Contact info — 2 cols */}
            <div className="lg:col-span-2 space-y-8">
              <AnimatedSection>
                <div className="section-eyebrow mb-6">
                  <div className="divider-gold" />
                  <p className="text-label">Reach Us Directly</p>
                </div>
                <h2 className="text-display-md mb-6">
                  Let&apos;s Discuss{" "}
                  <span className="text-gradient-gold italic">Your Order</span>
                </h2>
                <p style={{ color: "var(--color-text-secondary)" }}>
                  Our export team is ready to discuss your requirements, provide samples, and prepare custom quotations for leather skins, garments, and accessories.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <div className="space-y-6">
                  {/* Email */}
                  <div
                    className="flex items-start gap-4 p-5"
                    style={{ background: "rgba(144,108,86,0.05)", border: "1px solid var(--color-border)" }}
                  >
                    <div
                      className="w-10 h-10 flex items-center justify-center shrink-0"
                      style={{ background: "rgba(144,108,86,0.12)" }}
                    >
                      <Mail size={18} style={{ color: "var(--color-amber)" }} />
                    </div>
                    <div>
                      <p className="text-label mb-1">Email</p>
                      <a href="mailto:info@jafrienterprises.biz" className="hover-accent transition-colors" style={{ color: "var(--color-cream)" }}>
                        info@jafrienterprises.biz
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div
                    className="flex items-start gap-4 p-5"
                    style={{ background: "rgba(144,108,86,0.05)", border: "1px solid var(--color-border)" }}
                  >
                    <div
                      className="w-10 h-10 flex items-center justify-center shrink-0"
                      style={{ background: "rgba(144,108,86,0.12)" }}
                    >
                      <Phone size={18} style={{ color: "var(--color-amber)" }} />
                    </div>
                    <div>
                      <p className="text-label mb-1">Phone / WhatsApp</p>
                      <a href="tel:+922135000000" className="hover-accent transition-colors" style={{ color: "var(--color-cream)" }}>
                        +92 (21) 3500-0000
                      </a>
                    </div>
                  </div>

                  {/* Head Office */}
                  <div
                    className="flex items-start gap-4 p-5"
                    style={{ background: "rgba(144,108,86,0.05)", border: "1px solid var(--color-border)" }}
                  >
                    <div
                      className="w-10 h-10 flex items-center justify-center shrink-0"
                      style={{ background: "rgba(144,108,86,0.12)" }}
                    >
                      <MapPin size={18} style={{ color: "var(--color-amber)" }} />
                    </div>
                    <div>
                      <p className="text-label mb-1">Head Office</p>
                      <p style={{ color: "var(--color-cream)" }}>
                        Plot #A-024, Block-3<br />
                        Gulistan-E-Jauhar<br />
                        Karachi, Pakistan
                      </p>
                    </div>
                  </div>

                  {/* Factory */}
                  <div
                    className="flex items-start gap-4 p-5"
                    style={{ background: "rgba(144,108,86,0.05)", border: "1px solid var(--color-border)" }}
                  >
                    <div
                      className="w-10 h-10 flex items-center justify-center shrink-0"
                      style={{ background: "rgba(144,108,86,0.12)" }}
                    >
                      <MapPin size={18} style={{ color: "var(--color-amber)" }} />
                    </div>
                    <div>
                      <p className="text-label mb-1">Manufacturing Facility</p>
                      <p style={{ color: "var(--color-cream)" }}>
                        Plot #40, Sector 7-A<br />
                        Korangi Industrial Area<br />
                        Karachi, Pakistan
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div
                    className="flex items-start gap-4 p-5"
                    style={{ background: "rgba(144,108,86,0.05)", border: "1px solid var(--color-border)" }}
                  >
                    <div
                      className="w-10 h-10 flex items-center justify-center shrink-0"
                      style={{ background: "rgba(144,108,86,0.12)" }}
                    >
                      <Clock size={18} style={{ color: "var(--color-amber)" }} />
                    </div>
                    <div>
                      <p className="text-label mb-1">Business Hours</p>
                      <p style={{ color: "var(--color-cream)" }}>
                        Mon – Sat: 9:00 AM – 6:00 PM<br />
                        <span style={{ color: "var(--color-text-muted)" }}>Pakistan Standard Time (PKT, UTC+5)</span>
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Form — 3 cols */}
            <div className="lg:col-span-3">
              <AnimatedSection direction="right">
                <div
                  className="p-10"
                  style={{ background: "rgba(26,18,8,0.8)", border: "1px solid var(--color-border)" }}
                >
                  {!submitted ? (
                    <>
                      <h3 className="text-display-sm mb-2">
                        Send Us a Message
                      </h3>
                      <p className="text-sm mb-8" style={{ color: "var(--color-text-secondary)" }}>
                        For quotes, samples, and general inquiries. Response within 24 business hours.
                      </p>

                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label className="text-label block mb-2">Full Name *</label>
                            <input required name="name" type="text" placeholder="John Smith" className="form-field" />
                          </div>
                          <div>
                            <label className="text-label block mb-2">Company *</label>
                            <input required name="company" type="text" placeholder="Your Company Ltd." className="form-field" />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label className="text-label block mb-2">Email *</label>
                            <input required name="email" type="email" placeholder="john@company.com" className="form-field" />
                          </div>
                          <div>
                            <label className="text-label block mb-2">Phone / WhatsApp</label>
                            <input name="phone" type="tel" placeholder="+1 555 000 0000" className="form-field" />
                          </div>
                        </div>
                        <div>
                          <label className="text-label block mb-2">Country</label>
                          <input name="country" type="text" placeholder="United States" className="form-field" />
                        </div>
                        <div>
                          <label className="text-label block mb-2">Inquiry Type</label>
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
                          <label className="text-label block mb-2">Message *</label>
                          <textarea
                            required
                            name="message"
                            rows={5}
                            placeholder="Tell us about your requirements — product, quantity, destination, timeline..."
                            className="form-field resize-none"
                          />
                        </div>

                        {error && (
                          <p className="text-sm" style={{ color: "#e5806b" }}>
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
                        className="w-16 h-16 mx-auto mb-6 flex items-center justify-center"
                        style={{ background: "rgba(144,108,86,0.15)", border: "1px solid var(--color-amber)" }}
                      >
                        <Check size={26} style={{ color: "var(--color-amber)" }} aria-hidden="true" />
                      </div>
                      <h3 className="text-display-sm mb-3" style={{ color: "var(--color-amber)" }}>
                        {delivered ? "Message Sent!" : "Almost There"}
                      </h3>
                      <p style={{ color: "var(--color-text-secondary)" }}>
                        {delivered ? (
                          <>
                            Thank you for contacting Jafri Enterprises. Our export team will be in touch within <strong>24 business hours</strong>.
                          </>
                        ) : (
                          <>
                            Email delivery is not configured on this site yet. Please send your requirements directly to{" "}
                            <a href="mailto:info@jafrienterprises.biz" className="underline" style={{ color: "var(--color-amber)" }}>
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
