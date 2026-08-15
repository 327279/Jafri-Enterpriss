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
      {/* ── Page header (Fixes Screenshot 4) ─────────────────────────── */}
      <header className="relative min-h-[50vh] flex items-end overflow-hidden" style={{ background: "linear-gradient(135deg, #362217 0%, #1A0E07 100%)", color: "#FFFFFF" }}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('/images/products/leather-skins.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.22,
          }}
        />
        <div className="container-luxury relative z-10 pb-16 pt-40">
          <AnimatedSection>
            <p className="text-xs font-bold uppercase tracking-[0.2em] mb-4 text-[#D4B296]">B2B Leather Supply</p>
            <h1 className="text-display-lg max-w-3xl text-white">Our Products</h1>
            <p className="mt-5 max-w-xl text-lg font-medium text-[#FAF6F0]/90">
              Three divisions, one vertically integrated supply chain — from raw
              hide to finished goods.
            </p>
          </AnimatedSection>
        </div>
      </header>

      {/* ── Intro ───────────────────────────────────────── */}
      <section
        className="section-padding"
        style={{ background: "#FBF8F3" }}
      >
        <div className="container-luxury">
          <AnimatedSection className="max-w-3xl mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3 text-[#8C5738]">Three Divisions</p>
            <h2 className="text-display-md mb-5" style={{ color: "#1A0E07" }}>
              Premium Leather for Every Application
            </h2>
            <p className="text-base font-medium leading-relaxed" style={{ color: "#36251B" }}>
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
                  <article className="rounded-2xl bg-white shadow-sm flex h-full flex-col overflow-hidden transition-transform duration-300 hover:-translate-y-1" style={{ border: "1px solid rgba(140,87,56,0.20)" }}>
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={cat.image}
                        alt={cat.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 hover:scale-[1.04]"
                      />
                      <div
                        className="absolute left-0 top-3 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.14em] rounded-r-md"
                        style={{
                          background: "#8C5738",
                          color: "#FFFFFF",
                        }}
                      >
                        {cat.division}
                      </div>
                    </div>

                    {/* Body */}
                    <div className="flex flex-1 flex-col p-6">
                      <div className="mb-2.5 flex items-center gap-2.5">
                        <Icon
                          size={18}
                          style={{ color: "#8C5738" }}
                          aria-hidden="true"
                        />
                        <h3 className="text-xl font-bold" style={{ color: "#1A0E07", fontFamily: "var(--font-display)" }}>
                          {cat.title}
                        </h3>
                      </div>

                      <p
                        className="mb-4 line-clamp-3 text-sm leading-relaxed font-medium"
                        style={{ color: "#36251B" }}
                      >
                        {cat.description}
                      </p>

                      {/* MOQ */}
                      <div
                        className="mb-4 flex items-baseline gap-2 border-y py-2.5"
                        style={{ borderColor: "rgba(140,87,56,0.18)" }}
                      >
                        <span
                          className="text-[0.65rem] font-bold uppercase tracking-[0.16em]"
                          style={{ color: "#8C5738" }}
                        >
                          MOQ
                        </span>
                        <span
                          className="font-display font-bold text-sm"
                          style={{ color: "#1A0E07" }}
                        >
                          {cat.moq}
                        </span>
                        <span
                          className="text-xs font-semibold"
                          style={{ color: "#6E4D3B" }}
                        >
                          {cat.moqLabel}
                        </span>
                      </div>

                      {/* Highlights */}
                      <p
                        className="mb-2 text-[0.65rem] font-bold uppercase tracking-[0.16em]"
                        style={{ color: "#8C5738" }}
                      >
                        Available in ({cat.highlights.length})
                      </p>
                      <ul
                        className="mb-4 flex h-[31px] flex-nowrap gap-1.5 overflow-hidden"
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
                        className="mb-1 text-[0.65rem] font-bold uppercase tracking-[0.16em]"
                        style={{ color: "#8C5738" }}
                      >
                        Use cases
                      </p>
                      <p
                        className="mb-5 line-clamp-2 text-xs leading-relaxed font-semibold"
                        style={{ color: "#36251B" }}
                      >
                        {cat.useCases.join(" · ")}
                      </p>

                      {/* Footer */}
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

      {/* ── CTA (Dark Leather Section) ─────────────────────────────────── */}
      <section
        className="py-20 text-center text-white"
        style={{ background: "#362217" }}
      >
        <div className="container-luxury">
          <AnimatedSection>
            <p className="text-xs font-bold uppercase tracking-[0.2em] mb-4 text-[#D4B296]">Ready to Source?</p>
            <h2 className="text-display-md mb-4 text-white">
              Request a Quote for Any Division
            </h2>
            <p
              className="mx-auto mb-9 max-w-xl text-[#FAF6F0]/90 font-medium"
            >
              Tell us your material, finish, quantity, and destination. Our
              export team responds within 24 business hours.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <QuoteButton label="Request a Quote" size="lg" />
              <Button asChild variant="heroOutline" size="lg">
                <Link href="/oem">Explore OEM</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
