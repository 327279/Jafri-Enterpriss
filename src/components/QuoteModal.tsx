"use client";
import { createContext, useContext, useState, useCallback, useEffect } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X, Check } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { useScrollLock } from "@/lib/useScrollLock";

// The panel rolls down from its own top edge like a shop shutter. Clipping
// rather than translating means the reveal is independent of the panel's
// height, so a short success screen and a full form both roll at the same
// rate and neither has to travel off-viewport first.
const SHUTTER = { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const };
const ROLLED_UP = "inset(0 0 100% 0)";
const ROLLED_DOWN = "inset(0 0 0% 0)";

// ── Context ───────────────────────────────────────────────
interface QuoteContextType {
  isOpen: boolean;
  openModal: (productHint?: string) => void;
  closeModal: () => void;
}

const QuoteContext = createContext<QuoteContextType>({
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
});

export function useQuote() {
  return useContext(QuoteContext);
}

// ── Modal Component ────────────────────────────────────────
export default function QuoteModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [productHint, setProductHint] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [delivered, setDelivered] = useState(true);
  const [error, setError] = useState("");
  // Reduced-motion users get the panel as a plain fade — a sheet rolling
  // down the viewport is exactly the kind of motion they opted out of.
  const reduceMotion = useReducedMotion();

  const openModal = useCallback((hint = "") => {
    setProductHint(hint);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    setTimeout(() => {
      setSubmitted(false);
      setError("");
    }, 400);
  }, []);

  // Body overflow alone does not hold on touch while Lenis owns root scroll,
  // and tying the lock to state means it is always released on unmount.
  useScrollLock(isOpen);

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
          productType: data.get("productType"),
          quantity: data.get("quantity"),
          message: data.get("message"),
          source: "quote-modal",
        }),
      });

      const result = await res.json();

      if (!res.ok || !result.ok) {
        const message = result.error || "Something went wrong. Please email us directly.";
        setError(message);
        // The inline error is inside a scrollable panel and can land below the
        // fold on a long form, so the toast guarantees the failure is seen.
        toast.error("Inquiry not sent", { description: message });
        return;
      }

      setDelivered(result.delivered !== false);
      setSubmitted(true);

      if (result.delivered !== false) {
        toast.success("Inquiry received", {
          description: "Our export team will respond within 24 business hours.",
        });
      }
    } catch {
      const message = "Could not reach the server. Please email info@jafrienterprises.biz directly.";
      setError(message);
      toast.error("Connection failed", { description: message });
    } finally {
      setSending(false);
    }
  };

  // Expose openModal globally for QuoteButton / Navbar / Footer triggers.
  useEffect(() => {
    (window as typeof window & { openQuoteModal: (h?: string) => void }).openQuoteModal = openModal;
  }, [openModal]);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => e.target === e.currentTarget && closeModal()}
          >
            {/* The wrapper carries the drop so the panel lands with some
                weight; the panel itself carries the clip so its content is
                uncovered top-to-bottom as the shutter comes down. */}
            <motion.div
              className="relative w-full max-w-2xl"
              initial={{ y: reduceMotion ? 0 : -22 }}
              animate={{ y: 0 }}
              exit={{ y: reduceMotion ? 0 : -22 }}
              transition={SHUTTER}
            >
              <motion.div
                className="bg-white rounded-2xl shadow-2xl max-h-[90dvh] w-full overflow-y-auto overscroll-contain border border-amber-900/20"
                data-lenis-prevent
                initial={{
                  clipPath: reduceMotion ? ROLLED_DOWN : ROLLED_UP,
                  opacity: reduceMotion ? 0 : 1,
                }}
                animate={{ clipPath: ROLLED_DOWN, opacity: 1 }}
                exit={{
                  clipPath: reduceMotion ? ROLLED_DOWN : ROLLED_UP,
                  opacity: reduceMotion ? 0 : 1,
                }}
                transition={SHUTTER}
              >
              {/* Header */}
              <div className="flex items-start justify-between gap-4 border-b p-6 sm:p-8" style={{ borderColor: "rgba(140,87,56,0.18)" }}>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] mb-2 text-[#8C5738]">B2B Inquiry</p>
                  <h2 className="text-display-md" style={{ color: "#1A0E07" }}>
                    Request a Quote
                  </h2>
                  <p className="mt-1 text-sm font-medium" style={{ color: "#523B2D" }}>
                    Our team typically responds within 24 business hours.
                  </p>
                </div>
                <button
                  onClick={closeModal}
                  className="-mr-2 -mt-2 flex size-11 shrink-0 items-center justify-center rounded-full text-[#523B2D] hover:bg-[#FAF6F0] hover:text-[#1A0E07] transition-colors"
                  aria-label="Close"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-8">
                {!submitted ? (
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
                        <label className="text-xs font-bold uppercase tracking-[0.16em] block mb-2 text-[#8C5738]">Email Address *</label>
                        <input required name="email" type="email" placeholder="john@company.com" className="form-field" />
                      </div>
                      <div>
                        <label className="text-xs font-bold uppercase tracking-[0.16em] block mb-2 text-[#8C5738]">Phone</label>
                        <input name="phone" type="tel" placeholder="+1 555 000 0000" className="form-field" />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase tracking-[0.16em] block mb-2 text-[#8C5738]">Product Type *</label>
                      <select required name="productType" className="form-field" defaultValue={productHint || ""}>
                        <option value="" disabled>Select product category</option>
                        <option value="leather-skins">Finished Leather Skins</option>
                        <option value="jackets">Leather Jackets</option>
                        <option value="accessories">Leather Accessories</option>
                        <option value="oem">OEM / Private Label</option>
                        <option value="other">Other / Multiple</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase tracking-[0.16em] block mb-2 text-[#8C5738]">Estimated Quantity / MOQ</label>
                      <input name="quantity" type="text" placeholder="e.g. 1,000 sq ft / 40 units per month" className="form-field" />
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase tracking-[0.16em] block mb-2 text-[#8C5738]">Message & Requirements *</label>
                      <textarea
                        required
                        name="message"
                        rows={4}
                        placeholder="Describe your requirements — material, finish, color, delivery timeline, destination country..."
                        className="form-field resize-none"
                      />
                    </div>

                    {error && (
                      <p className="text-sm font-semibold text-rose-600">
                        {error}
                      </p>
                    )}

                    <Button type="submit" size="lg" block disabled={sending}>
                      {sending ? "Sending…" : "Send Inquiry"}
                    </Button>
                    <p className="text-xs text-center font-semibold" style={{ color: "#6E4D3B" }}>
                      By submitting, you agree to our privacy policy. No spam, ever.
                    </p>
                  </form>
                ) : (
                  <motion.div
                    className="text-center py-12"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 bg-[#8C5738]/15 border border-[#8C5738]"
                    >
                      <Check size={26} className="text-[#8C5738]" aria-hidden="true" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-[#1A0E07]" style={{ fontFamily: "var(--font-display)" }}>
                      {delivered ? "Inquiry Received!" : "Almost There"}
                    </h3>
                    <p className="font-medium text-[#36251B] leading-relaxed">
                      {delivered ? (
                        <>
                          Thank you for reaching out to Jafri Enterprises. Our export team will contact you within <strong className="text-[#1A0E07]">24 business hours</strong>.
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
                    <Button onClick={closeModal} variant="outline" className="mt-8">
                      Close
                    </Button>
                  </motion.div>
                )}
              </div>
              </motion.div>

              {/* Leading rail — the heavy closing bar that pulls the panel
                  down. The travelling layer is full-height so a `y` of 100%
                  moves it exactly one panel height, keeping it on the clip's
                  advancing edge without animating layout. The mask around it
                  is absolute and clips, so the sweep cannot extend the
                  overlay's scroll area on its way past the bottom. */}
              {!reduceMotion && (
                <div
                  className="pointer-events-none absolute inset-0 overflow-hidden"
                  aria-hidden="true"
                >
                  <motion.div
                    className="absolute inset-x-0 top-0 h-full"
                    initial={{ y: "0%", opacity: 1 }}
                    animate={{ y: "100%", opacity: [1, 1, 0] }}
                    exit={{ y: "0%", opacity: 1 }}
                    transition={{
                      ...SHUTTER,
                      opacity: {
                        duration: SHUTTER.duration,
                        times: [0, 0.72, 1],
                        ease: "linear",
                      },
                    }}
                  >
                    <div
                      className="absolute inset-x-0 top-0"
                      style={{
                        height: "10px",
                        background:
                          "linear-gradient(180deg, #6b4e39 0%, #3a2819 55%, #120c07 100%)",
                        borderTop: "1px solid rgba(214,199,186,0.28)",
                        boxShadow: "0 8px 22px rgba(0,0,0,0.55)",
                      }}
                    />
                  </motion.div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
