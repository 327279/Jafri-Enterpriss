import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Layers, Shirt, Briefcase } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import QuoteButton from "@/components/QuoteButton";
import { Button } from "@/components/ui/button";
import CustomLeatherForm from "@/components/CustomLeatherForm";

export const metadata: Metadata = {
  title: "Products Overview",
  description:
    "Browse Jafri Enterprises product range — finished leather skins, leather jackets, and leather accessories. B2B bulk supply and OEM manufacturing.",
};

const categories = [
  {
    division: "Tannery Division",
    icon: Layers,
    title: "Finished Leather Skins",
    description:
      "Premium full-grain and top-grain finished leather in a range of textures, finishes, and thicknesses. Processed in our Korangi tannery from raw hide to finished state.",
    image: "/images/products/leather-skins.jpg",
    href: "/products/leather-skins",
    moq: "5,000 sq ft",
    moqLabel: "per order",
    useCases: ["Handbags & Luggage", "Belts & Straps", "Shoe Upper", "Upholstery", "Garments"],
    highlights: ["Full-Grain", "Nappa", "Pebbled", "Pull-Up", "Embossed"],
  },
  {
    division: "Garments Division",
    icon: Shirt,
    title: "Leather Jackets",
    description:
      "Biker, casual, classic, and winter leather jackets in sheep nappa and other premium leathers. Made to order from S to 5XL with full OEM and private label capability.",
    image: "/images/products/jacket-biker.jpg",
    href: "/products/jackets",
    moq: "200 units",
    moqLabel: "per style",
    useCases: ["Fashion Brands", "Retail Chains", "Private Label", "Custom Orders"],
    highlights: ["Sheep Nappa", "Cowhide", "Custom Colors", "Logo Options"],
  },
  {
    division: "Accessories Division",
    icon: Briefcase,
    title: "Leather Accessories",
    description:
      "Belts, wallets, bags, and bespoke accessories crafted from our in-house finished leather. Full OEM capability with logo embossing and custom packaging.",
    image: "/images/products/accessories.jpg",
    href: "/contact",
    moq: "500 units",
    moqLabel: "per style",
    useCases: ["Belt Brands", "Wallet Collections", "Gift Sets", "Fashion Accessories"],
    highlights: ["Belts", "Wallets", "Bags", "Custom Items"],
  },
];

export default function ProductsPage() {
  return (
    <div>
      {/* ── Page header ─────────────────────────────────── */}
      <header className="page-header on-dark">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('/images/products/leather-skins.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.28,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, var(--color-void) 10%, rgba(26,18,8,0.55) 100%)",
          }}
        />
        <div className="container-luxury relative z-10 pb-16 pt-40">
          <AnimatedSection>
            <div className="section-eyebrow">
              <div className="divider-gold" />
              <p className="text-label">B2B Leather Supply</p>
            </div>
            <h1 className="text-display-lg max-w-3xl">Our Products</h1>
            <p
              className="mt-5 max-w-xl text-lg"
              style={{ color: "var(--color-text-on-dark-2)" }}
            >
              Three divisions, one vertically integrated supply chain — from raw
              hide to finished goods.
            </p>
          </AnimatedSection>
        </div>
      </header>

      {/* ── Intro ───────────────────────────────────────── */}
      <section
        className="section-padding"
        style={{ background: "var(--color-page)" }}
      >
        <div className="container-luxury">
          <AnimatedSection className="max-w-3xl mb-14">
            <div className="section-eyebrow">
              <div className="divider-gold" />
              <p className="text-label">Three Divisions</p>
            </div>
            <h2 className="text-display-md mb-5">
              Premium Leather for Every Application
            </h2>
            <p style={{ color: "var(--color-text-muted)" }}>
              From raw hide to finished product, Jafri Enterprises offers a
              complete range of premium leather for global B2B buyers. All
              products are available for bulk order with OEM and private label
              options.
            </p>
          </AnimatedSection>

          {/* ── Category grid — equal-height cards ───────── */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {categories.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <AnimatedSection key={cat.title} delay={i * 0.08} className="h-full">
                  <article className="card-luxury group flex h-full flex-col overflow-hidden">
                    {/* Image — 16:9 keeps the card compact; taller ratios made
                        the media outweigh the copy it introduces. */}
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={cat.image}
                        alt={cat.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                      <div
                        className="absolute left-0 top-3 px-2.5 py-1 text-[0.6rem] font-bold uppercase tracking-[0.12em]"
                        style={{
                          background: "var(--color-amber)",
                          color: "#FFFFFF",
                        }}
                      >
                        {cat.division}
                      </div>
                    </div>

                    {/* Body — flex-1 pushes the footer down so CTAs align */}
                    <div className="flex flex-1 flex-col p-5">
                      <div className="mb-2 flex items-center gap-2">
                        <Icon
                          size={16}
                          style={{ color: "var(--color-amber)" }}
                          aria-hidden="true"
                        />
                        <h3 className="text-display-xs">{cat.title}</h3>
                      </div>

                      {/* Clamped to three lines so one long entry cannot make
                          its card taller than the two beside it. The full text
                          stays in the DOM for crawlers. */}
                      <p
                        className="mb-3 line-clamp-3 text-sm leading-relaxed"
                        style={{ color: "var(--color-text-muted)" }}
                      >
                        {cat.description}
                      </p>

                      {/* MOQ */}
                      <div
                        className="mb-3 flex items-baseline gap-2 border-y py-2.5"
                        style={{ borderColor: "var(--color-border)" }}
                      >
                        <span
                          className="text-[0.6rem] font-semibold uppercase tracking-[0.16em]"
                          style={{ color: "var(--color-text-muted)" }}
                        >
                          MOQ
                        </span>
                        <span
                          className="font-display text-sm"
                          style={{ color: "var(--color-text-heading)" }}
                        >
                          {cat.moq}
                        </span>
                        <span
                          className="text-xs"
                          style={{ color: "var(--color-text-muted)" }}
                        >
                          {cat.moqLabel}
                        </span>
                      </div>

                      {/* Highlights — the row is clipped to a single line so a
                          card with long chip labels cannot wrap to a second
                          row and drive the whole equal-height grid taller. The
                          full count lives in the label instead of a +N chip. */}
                      <p
                        className="mb-2 text-[0.6rem] font-semibold uppercase tracking-[0.16em]"
                        style={{ color: "var(--color-text-muted)" }}
                      >
                        Available in ({cat.highlights.length})
                      </p>
                      <ul
                        className="mb-3 flex h-[31px] flex-nowrap gap-1.5 overflow-hidden"
                        style={{
                          maskImage:
                            "linear-gradient(to right, #000 76%, transparent 98%)",
                          WebkitMaskImage:
                            "linear-gradient(to right, #000 76%, transparent 98%)",
                        }}
                      >
                        {cat.highlights.map((h) => (
                          <li key={h} className="pill-badge shrink-0">
                            {h}
                          </li>
                        ))}
                      </ul>

                      {/* Use cases */}
                      <p
                        className="mb-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.16em]"
                        style={{ color: "var(--color-text-muted)" }}
                      >
                        Use cases
                      </p>
                      <p
                        className="mb-4 line-clamp-2 text-xs leading-relaxed"
                        style={{ color: "var(--color-text)" }}
                      >
                        {cat.useCases.join(" · ")}
                      </p>

                      {/* Footer — mt-auto locks CTAs to the card bottom */}
                      <div className="mt-auto flex flex-wrap gap-2.5">
                        <Button asChild size="sm">
                          <Link href={cat.href}>
                            View Range
                            <ArrowRight />
                          </Link>
                        </Button>
                        <QuoteButton
                          label="Get a Quote"
                          variant="outline"
                          size="sm"
                          hint={cat.title}
                        />
                      </div>
                    </div>
                  </article>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Custom leather builder */}
      <CustomLeatherForm />

      {/* ── CTA ─────────────────────────────────────────── */}
      <section
        className="on-dark py-20 text-center"
        style={{ background: "var(--color-void)" }}
      >
        <div className="container-luxury">
          <AnimatedSection>
            <p className="text-label mb-4">Ready to Source?</p>
            <h2 className="text-display-md mb-4">
              Request a Quote for Any Division
            </h2>
            <p
              className="mx-auto mb-9 max-w-xl"
              style={{ color: "var(--color-text-on-dark-2)" }}
            >
              Tell us your material, finish, quantity, and destination. Our
              export team responds within 24 business hours.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <QuoteButton label="Request a Quote" size="lg" />
              <Button asChild variant="outline" size="lg">
                <Link href="/oem">Explore OEM</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
