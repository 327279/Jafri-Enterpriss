"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Wand2, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import AnimatedSection from "./AnimatedSection";

/**
 * CustomLeatherForm — "describe what you want and we'll make it".
 *
 * The catalogue cards cover stock lines; this covers everything else. A buyer
 * picks the broad strokes from chips (fast, and it keeps the free-text field
 * focused on genuine specifics) then writes the detail in their own words.
 *
 * Chips are non-exclusive suggestions rather than a validated taxonomy — the
 * spec that matters is the prose, so only the description is required. Chip
 * selections are appended to the message so the export team reads one blob.
 */

const APPLICATIONS = [
  "Garments / Jackets",
  "Handbags & Luggage",
  "Footwear / Shoe Upper",
  "Belts & Straps",
  "Wallets & Small Goods",
  "Automotive Upholstery",
  "Furniture",
  "Other",
];

const FINISHES = [
  "Nappa (smooth)",
  "Pebbled / Embossed",
  "Pull-Up (wax/oil)",
  "Suede / Nubuck",
  "Patent / High-gloss",
  "Matte / Natural",
  "Distressed / Vintage",
  "Not sure — advise me",
];

const HIDES = ["Cowhide", "Sheep / Lamb", "Goat", "Buffalo", "No preference"];

function Chip({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className="rounded-full px-3.5 py-2 text-xs font-medium transition-all duration-200"
      style={{
        background: selected ? "rgba(144,108,86,0.22)" : "rgba(144,108,86,0.06)",
        border: `1px solid ${selected ? "var(--color-amber)" : "var(--color-border-strong)"}`,
        color: selected ? "var(--color-amber-light)" : "var(--color-text-secondary)",
      }}
    >
      {label}
    </button>
  );
}

export default function CustomLeatherForm({
  defaultApplication,
}: {
  defaultApplication?: string;
}) {
  const [application, setApplication] = useState(defaultApplication ?? "");
  const [finish, setFinish] = useState("");
  const [hide, setHide] = useState("");
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (sending) return;

    const data = new FormData(e.currentTarget);
    const description = String(data.get("description") || "").trim();

    // Fold the chip picks into the message so nothing depends on the API
    // learning new field names.
    const chips = [
      application && `Application: ${application}`,
      hide && `Hide: ${hide}`,
      finish && `Finish: ${finish}`,
      data.get("thickness") && `Thickness: ${data.get("thickness")}`,
      data.get("color") && `Colour / Pantone: ${data.get("color")}`,
    ].filter(Boolean);

    const message = chips.length
      ? `${chips.join("\n")}\n\nRequirement:\n${description}`
      : description;

    setSending(true);
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          company: data.get("company"),
          email: data.get("email"),
          quantity: data.get("quantity"),
          productType: "custom-leather",
          inquiryType: "Custom leather development",
          message,
          source: "custom-leather-form",
        }),
      });
      const result = await res.json();

      if (!res.ok || !result.ok) {
        toast.error("Could not send", {
          description: result.error || "Please email info@jafrienterprises.biz directly.",
        });
        return;
      }

      setDone(true);
      if (result.delivered !== false) {
        toast.success("Custom spec received", {
          description: "Our development team will respond within 24 business hours.",
        });
      }
    } catch {
      toast.error("Connection failed", {
        description: "Please email info@jafrienterprises.biz directly.",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    // scroll-mt clears the fixed 80px header when linked to by hash from the
    // navbar, so the eyebrow is not parked underneath it on arrival.
    <section
      id="custom-leather"
      className="section-padding scroll-mt-24"
      style={{ background: "var(--color-void)" }}
    >
      <div className="container-luxury">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Pitch */}
          <AnimatedSection>
            <div className="section-eyebrow">
              <div className="divider-gold" />
              <p className="text-label">Bespoke Development</p>
            </div>
            <h2 className="text-display-md mb-5">
              Can&apos;t Find It?{" "}
              <span className="text-gradient-gold italic">We&apos;ll Make It.</span>
            </h2>
            <p className="mb-6 leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
              Our Korangi tannery processes hide from raw to finished in-house, so
              we are not limited to what is on this page. Describe the leather you
              need — substrate, finish, thickness, colour, hand feel — and our
              development team will match it or produce a sample to your reference.
            </p>
            <ul className="space-y-3">
              {[
                "Any Pantone colour matched in-house",
                "Custom embossing and print plates",
                "Physical swatch posted worldwide",
                "Development samples in 3–4 weeks",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm">
                  <Wand2
                    size={15}
                    className="mt-0.5 shrink-0"
                    style={{ color: "var(--color-amber)" }}
                    aria-hidden="true"
                  />
                  <span style={{ color: "var(--color-text)" }}>{point}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          {/* Builder */}
          <AnimatedSection direction="right">
            <div
              className="p-6 sm:p-9"
              style={{
                background: "rgba(26,18,8,0.62)",
                border: "1px solid var(--color-border-strong)",
                borderRadius: "14px",
              }}
            >
              {done ? (
                <motion.div
                  className="py-14 text-center"
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div
                    className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full"
                    style={{
                      background: "rgba(144,108,86,0.15)",
                      border: "1px solid var(--color-amber)",
                    }}
                  >
                    <Send size={24} style={{ color: "var(--color-amber)" }} aria-hidden="true" />
                  </div>
                  <h3 className="text-display-sm mb-3" style={{ color: "var(--color-amber)" }}>
                    Spec Received
                  </h3>
                  <p style={{ color: "var(--color-text-secondary)" }}>
                    Our development team will review your requirement and respond
                    within <strong>24 business hours</strong>.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Application */}
                  <fieldset>
                    <legend className="text-label mb-3">What is it for?</legend>
                    <div className="flex flex-wrap gap-2">
                      {APPLICATIONS.map((a) => (
                        <Chip
                          key={a}
                          label={a}
                          selected={application === a}
                          onClick={() => setApplication(application === a ? "" : a)}
                        />
                      ))}
                    </div>
                  </fieldset>

                  {/* Hide */}
                  <fieldset>
                    <legend className="text-label mb-3">Hide type</legend>
                    <div className="flex flex-wrap gap-2">
                      {HIDES.map((h) => (
                        <Chip
                          key={h}
                          label={h}
                          selected={hide === h}
                          onClick={() => setHide(hide === h ? "" : h)}
                        />
                      ))}
                    </div>
                  </fieldset>

                  {/* Finish */}
                  <fieldset>
                    <legend className="text-label mb-3">Finish</legend>
                    <div className="flex flex-wrap gap-2">
                      {FINISHES.map((f) => (
                        <Chip
                          key={f}
                          label={f}
                          selected={finish === f}
                          onClick={() => setFinish(finish === f ? "" : f)}
                        />
                      ))}
                    </div>
                  </fieldset>

                  {/* Free text — the part that actually carries the spec. */}
                  <div>
                    <label htmlFor="cl-description" className="text-label mb-2 block">
                      Describe what you want *
                    </label>
                    <textarea
                      required
                      id="cl-description"
                      name="description"
                      rows={5}
                      placeholder="e.g. Soft glove-hand lamb nappa, 0.7mm, deep oxblood close to Pantone 19-1522, slight sheen but not glossy. Needs to pass EU REACH. Reference: the shell of a Loro Piana bomber."
                      className="form-field resize-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                    <div>
                      <label htmlFor="cl-thickness" className="text-label mb-2 block">
                        Thickness
                      </label>
                      <input
                        id="cl-thickness"
                        name="thickness"
                        type="text"
                        placeholder="0.8 mm"
                        className="form-field"
                      />
                    </div>
                    <div>
                      <label htmlFor="cl-color" className="text-label mb-2 block">
                        Colour
                      </label>
                      <input
                        id="cl-color"
                        name="color"
                        type="text"
                        placeholder="Pantone 19-1522"
                        className="form-field"
                      />
                    </div>
                    <div>
                      <label htmlFor="cl-quantity" className="text-label mb-2 block">
                        Quantity
                      </label>
                      <input
                        id="cl-quantity"
                        name="quantity"
                        type="text"
                        placeholder="5,000 sq ft"
                        className="form-field"
                      />
                    </div>
                  </div>

                  <div
                    className="border-t pt-6"
                    style={{ borderColor: "var(--color-border)" }}
                  >
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                      <div>
                        <label htmlFor="cl-name" className="text-label mb-2 block">
                          Your name *
                        </label>
                        <input
                          required
                          id="cl-name"
                          name="name"
                          type="text"
                          placeholder="John Smith"
                          className="form-field"
                        />
                      </div>
                      <div>
                        <label htmlFor="cl-company" className="text-label mb-2 block">
                          Company *
                        </label>
                        <input
                          required
                          id="cl-company"
                          name="company"
                          type="text"
                          placeholder="Your Company Ltd."
                          className="form-field"
                        />
                      </div>
                      <div>
                        <label htmlFor="cl-email" className="text-label mb-2 block">
                          Email *
                        </label>
                        <input
                          required
                          id="cl-email"
                          name="email"
                          type="email"
                          placeholder="john@company.com"
                          className="form-field"
                        />
                      </div>
                    </div>
                  </div>

                  <Button type="submit" size="lg" block disabled={sending}>
                    {sending ? "Sending…" : "Send My Custom Spec"}
                  </Button>
                  <p
                    className="text-center text-xs"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    No obligation. We reply with feasibility, pricing, and a sample plan.
                  </p>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
