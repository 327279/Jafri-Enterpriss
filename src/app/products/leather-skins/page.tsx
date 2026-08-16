import type { Metadata } from "next";
import { ShoppingBag, Zap, Footprints, Shirt, Car, Wallet } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import ProductCard from "@/components/ProductCard";
import QuoteButton from "@/components/QuoteButton";
import StatNumber from "@/components/StatNumber";
import CustomLeatherForm from "@/components/CustomLeatherForm";
import ProseSection, { type ProseSpec } from "@/components/ProseSection";

export const metadata: Metadata = {
  title: "Finished Leather Skins",
  description:
    "Premium finished leather skins from Jafri Enterprises. Full-grain, top-grain, nappa, pebbled, and custom finishes. B2B bulk supply, MOQ 1,000 sq ft.",
};

const finishedProducts = [
  {
    image: "/images/products/skins/nappa.jpg",
    title: "Nappa Leather",
    description:
      "Soft, smooth full-grain nappa leather with a supple hand feel. Ideal for premium garments, handbags, and fashion accessories. Available in 0.6mm–1.2mm thickness.",
    specs: [
      { label: "Material", value: "Full-Grain Sheep/Lamb" },
      { label: "Finish", value: "Nappa (Smooth)" },
      { label: "Thickness", value: "0.6 – 1.2 mm" },
      { label: "Texture", value: "Ultra-smooth" },
    ],
    moq: "1,000 sq ft / order",
    tag: "Best Seller",
  },
  {
    image: "/images/products/skins/pebbled-grain.jpg",
    title: "Pebbled Grain Leather",
    description:
      "Textured pebbled finish leather with natural or embossed grain patterns. Excellent durability for handbags, wallets, belts, and fashion accessories.",
    specs: [
      { label: "Material", value: "Top-Grain Cowhide" },
      { label: "Finish", value: "Pebbled / Embossed" },
      { label: "Thickness", value: "0.8 – 1.6 mm" },
      { label: "Texture", value: "Pebbled" },
    ],
    moq: "1,000 sq ft / order",
  },
  {
    image: "/images/products/skins/pull-up.jpg",
    title: "Pull-Up Leather",
    description:
      "Natural pull-up effect leather that develops a beautiful patina over time. Full-grain with a wax/oil finish. Perfect for high-end bags, belts, and footwear.",
    specs: [
      { label: "Material", value: "Full-Grain Cowhide" },
      { label: "Finish", value: "Wax / Oil Pull-Up" },
      { label: "Thickness", value: "1.0 – 2.0 mm" },
      { label: "Texture", value: "Natural grain" },
    ],
    moq: "1,000 sq ft / order",
  },
  {
    image: "/images/products/skins/garment.jpg",
    title: "Garment Leather",
    description:
      "Lightweight, flexible leather for garment applications including jackets, coats, and pants. Available in sheep, goat, and cowhide varieties.",
    specs: [
      { label: "Material", value: "Sheep / Goat / Cowhide" },
      { label: "Finish", value: "Soft / Semi-gloss" },
      { label: "Thickness", value: "0.5 – 0.9 mm" },
      { label: "Texture", value: "Smooth / Soft" },
    ],
    moq: "1,000 sq ft / order",
  },
  {
    image: "/images/products/skins/embossed.jpg",
    title: "Embossed Leather",
    description:
      "Custom embossed leather with crocodile, ostrich, python, and custom pattern options. Premium fashion leather for luxury goods and accessories.",
    specs: [
      { label: "Material", value: "Top-Grain Cowhide" },
      { label: "Finish", value: "Custom Embossed" },
      { label: "Thickness", value: "0.8 – 1.4 mm" },
      { label: "Texture", value: "Crocodile / Custom" },
    ],
    moq: "1,000 sq ft / order",
    tag: "Premium",
  },
  {
    image: "/images/products/skins/shoe-upper.jpg",
    title: "Shoe Upper Leather",
    description:
      "Firm, durable leather specifically processed for shoe upper applications. High abrasion resistance with excellent color fastness.",
    specs: [
      { label: "Material", value: "Top-Grain Cowhide" },
      { label: "Finish", value: "Semi-gloss / Matt" },
      { label: "Thickness", value: "1.0 – 1.8 mm" },
      { label: "Texture", value: "Smooth / Grain" },
    ],
    moq: "1,000 sq ft / order",
  },
];

const crustProducts = [
  {
    image: "/images/products/skins/upholstery-cured.jpg",
    title: "Cured Leather for Upholstery",
    description:
      "Cured full-hide leather selected for furniture and seating. Retains its natural grain and tensile strength across large panels, so cutters get consistent yield from every hide.",
    specs: [
      { label: "Material", value: "Cow / Buffalo Hide" },
      { label: "Grade", value: "Cured – Upholstery" },
      { label: "Thickness", value: "1.2 – 2.0 mm" },
      { label: "Hide Size", value: "45 – 55 sq ft avg" },
    ],
    moq: "1,000 sq ft / order",
  },
  {
    image: "/images/products/skins/upholstery-crust.jpg",
    title: "Upholstery Crust",
    description:
      "Vegetable- and chrome-tanned crust supplied undyed or base-dyed, ready for your own finishing line. Large, evenly substanced panels for furniture, seating, and automotive interiors.",
    specs: [
      { label: "Material", value: "Cow / Buffalo Hide" },
      { label: "Grade", value: "Crust (Unfinished)" },
      { label: "Thickness", value: "1.0 – 2.2 mm" },
      { label: "Tannage", value: "Chrome / Veg" },
    ],
    moq: "1,000 sq ft / order",
  },
  {
    image: "/images/products/skins/crust-bags.jpg",
    title: "Leather Crust for Bags",
    description:
      "Crust and finished grades cut for handbags, totes, and travel goods. Durable yet flexible enough to fold and stitch cleanly at the gusset without cracking along the fold line.",
    specs: [
      { label: "Material", value: "Cow / Buffalo Hide" },
      { label: "Grade", value: "Crust & Finished" },
      { label: "Thickness", value: "0.9 – 1.6 mm" },
      { label: "Applications", value: "Bags & Travel Goods" },
    ],
    moq: "1,000 sq ft / order",
  },
  {
    image: "/images/products/skins/crust-belts.jpg",
    title: "Leather Crust for Belts",
    description:
      "Firm-substance crust cut from the butt for strap and belt production. Strong, flexible, and long-lasting, with tight fibre structure that holds edge burnish and stitch tension.",
    specs: [
      { label: "Material", value: "Cow Butt / Bend" },
      { label: "Grade", value: "Crust – Belt" },
      { label: "Thickness", value: "2.0 – 4.0 mm" },
      { label: "Cut", value: "Strips or Full Bend" },
    ],
    moq: "1,000 sq ft / order",
  },
  {
    image: "/images/products/skins/cow-lining.jpg",
    title: "Cow Lining Leather",
    description:
      "Thin, breathable cow lining supplied in crust and finished grades. Comfortable against the foot and colour-fast in wear, making it a dependable lining for footwear and leather goods.",
    specs: [
      { label: "Material", value: "Cow Split / Skin" },
      { label: "Grade", value: "Crust & Finished" },
      { label: "Thickness", value: "0.6 – 1.0 mm" },
      { label: "Applications", value: "Footwear & Goods Lining" },
    ],
    moq: "1,000 sq ft / order",
  },
  {
    image: "/images/products/skins/shoe-upper-crust.jpg",
    title: "Shoe Upper Crust",
    description:
      "Cow skin crust processed for shoe upper production and supplied ready to finish. Takes a luxurious finish on your own line while holding shape through lasting.",
    specs: [
      { label: "Material", value: "Cow Skin" },
      { label: "Grade", value: "Crust – Shoe Upper" },
      { label: "Thickness", value: "1.0 – 1.8 mm" },
      { label: "Tannage", value: "Chrome / Semi-Chrome" },
    ],
    moq: "1,000 sq ft / order",
  },
];

const useCases = [
  { title: "Handbags & Luggage", icon: ShoppingBag },
  { title: "Belts & Straps", icon: Zap },
  { title: "Shoe Upper", icon: Footprints },
  { title: "Garments", icon: Shirt },
  { title: "Automotive Upholstery", icon: Car },
  { title: "Wallets & Small Goods", icon: Wallet },
];

const customIntro =
  "We manufacture and export premium-quality leather skins tailored to our clients' exact requirements. Whether you require Cow, Buffalo, Sheep, or Goat leather, we can produce leather in virtually any specification for a wide range of industries and applications. Our customization capabilities include:";

const customSpecs: ProseSpec[] = [
  { label: "Leather Types", value: "Cow, Buffalo, Sheep & Goat" },
  { label: "Thickness", value: "Customized as per buyer specifications" },
  { label: "Grades", value: "Premium, A, B, and custom grading options" },
  { label: "Colors", value: "Any color and finish as requested" },
  {
    label: "Finishes",
    value:
      "Aniline, Semi-Aniline, Pigmented, Nubuck, Suede, Pull-Up, Waxed, Printed, Embossed, and more",
  },
  {
    label: "Texture",
    value: "Smooth, Natural Grain, Corrected Grain, Embossed, and Customized Patterns",
  },
  {
    label: "Quality",
    value:
      "Manufactured to meet international export standards with strict quality control",
  },
  {
    label: "Applications",
    value:
      "Footwear, Leather Goods, Bags, Belts, Wallets, Jackets, Gloves, Upholstery, Furniture, Automotive, and Industrial Products",
  },
];

const customOutro =
  "At Jafri Enterprises, we are committed to delivering leather that matches your exact specifications in terms of quality, thickness, color, finish, and performance. Whether you require standard production or fully customized solutions, we are ready to manufacture according to your demand while ensuring consistency, competitive pricing, and timely delivery.";

export default function LeatherSkinsPage() {
  return (
    <div>
      {/* Header */}
      <div
        className="relative min-h-[50vh] flex items-end overflow-hidden"
        style={{ background: "linear-gradient(135deg, #362217 0%, #1A0E07 100%)", color: "#FFFFFF" }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('/images/products/skins/nappa.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.22,
          }}
        />
        <div className="container-luxury relative z-10 pb-20 pt-44">
          <AnimatedSection>
            <p className="text-xs font-bold uppercase tracking-[0.2em] mb-4 text-[#D4B296]">Tannery Division</p>
            <h1 className="text-display-lg mb-4 text-white" style={{ color: "#FFFFFF" }}>
              <span className="text-white" style={{ color: "#FFFFFF" }}>Finished</span>{" "}
              <span className="text-[#EBE3D5] italic font-serif">Leather Skins</span>
            </h1>
            <p className="max-w-xl text-lg text-[#FAF6F0]/90 font-medium">
              Premium full-grain and top-grain finished leather. Processed in Korangi Industrial Area, Karachi.
            </p>
          </AnimatedSection>
        </div>
      </div>

      {/* Category Stats Strip */}
      <section
        className="py-12"
        style={{ background: "#FAF6F0", borderBottom: "1px solid rgba(140,87,56,0.18)" }}
      >
        <div className="container-luxury">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {[
              { label: "Capacity", value: "30,000 sq ft/day" },
              { label: "Min. Order", value: "1,000 sq ft" },
              { label: "Lead Time", value: "3–6 weeks" },
              { label: "Processing", value: "Raw to Finish" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <StatNumber value={s.value} style={{ fontSize: "1.5rem", color: "#1A0E07", fontWeight: 800 }} />
                <div className="text-xs font-bold tracking-widest uppercase mt-1 text-[#8C5738]">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding" style={{ background: "#FBF8F3" }}>
        <div className="container-luxury">
          <AnimatedSection className="mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3 text-[#8C5738]">Available Types</p>
            <h2 className="text-display-md" style={{ color: "#1A0E07" }}>
              Full Product <span className="text-[#8C5738] italic font-serif">Range</span>
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {finishedProducts.map((p, i) => (
              <ProductCard key={p.title} {...p} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>

      {/* Crust & Semi-Finished Grid */}
      <section
        className="section-padding"
        style={{
          background: "#FAF6F0",
          borderTop: "1px solid rgba(140,87,56,0.18)",
        }}
      >
        <div className="container-luxury">
          <AnimatedSection className="mb-14 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3 text-[#8C5738]">Crust &amp; Semi-Finished</p>
            <h2 className="text-display-md mb-5" style={{ color: "#1A0E07" }}>
              Supplied Ready to <span className="text-[#8C5738] italic font-serif">Finish</span>
            </h2>
            <p className="text-lg font-medium leading-relaxed" style={{ color: "#36251B" }}>
              For buyers running their own finishing lines, we supply crust and
              semi-finished stock by application — sorted, graded, and substanced
              to the tolerance your cutting room works to.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {crustProducts.map((p, i) => (
              <ProductCard key={p.title} {...p} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-padding" style={{ background: "#FBF8F3" }}>
        <div className="container-luxury">
          <AnimatedSection className="mb-12 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3 text-[#8C5738]">Applications</p>
            <h2 className="text-display-md" style={{ color: "#1A0E07" }}>
              What Our Leather <span className="text-[#8C5738] italic font-serif">Powers</span>
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
            {useCases.map((u, i) => {
              const Icon = u.icon;
              return (
                <AnimatedSection key={u.title} delay={i * 0.07} className="h-full">
                  <div className="rounded-2xl bg-white shadow-sm flex h-full flex-col items-center justify-start p-6 text-center border border-amber-900/18 transition-transform duration-300 hover:-translate-y-1">
                    <Icon
                      size={28}
                      className="mb-3"
                      style={{ color: "#8C5738" }}
                      aria-hidden="true"
                    />
                    <p
                      className="text-xs font-bold leading-snug"
                      style={{ color: "#1A0E07" }}
                    >
                      {u.title}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Editorial detail */}
      <ProseSection
        eyebrow="Custom Manufacturing"
        title="Made to Your"
        titleAccent="Specification"
        intro={customIntro}
        specs={customSpecs}
        outro={customOutro}
        background="#FAF6F0"
      />

      {/* Custom leather builder */}
      <CustomLeatherForm defaultApplication="Other" />

      {/* CTA */}
      <section className="py-20 text-center text-white" style={{ background: "#362217" }}>
        <div className="container-luxury">
          <AnimatedSection>
            <p className="text-xs font-bold uppercase tracking-[0.2em] mb-4 text-[#D4B296]">Ready to Order?</p>
            <h2 className="text-display-md mb-8 text-white">
              Get a Quote for <span className="text-[#EBE3D5] italic font-serif">Leather Skins</span>
            </h2>
            <QuoteButton label="Request a Quote" hint="leather-skins" size="lg" />
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
