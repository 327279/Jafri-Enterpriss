import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import ProductCard from "@/components/ProductCard";
import QuoteButton from "@/components/QuoteButton";
import StatNumber from "@/components/StatNumber";
import CustomLeatherForm from "@/components/CustomLeatherForm";
import ProseSection, { type ProseSpec } from "@/components/ProseSection";

export const metadata: Metadata = {
  title: "Leather Jackets",
  description:
    "Premium leather jackets from Jafri Enterprises. Biker, casual, classic, and winter styles in sheep nappa and cowhide. OEM & private label, MOQ 40 units.",
};

const products = [
  {
    image: "/images/jackets/Untitled_design_19.webp",
    title: "Classic Asymmetrical Biker Leather Jacket",
    description: "Iconic street motorcycle jacket with asymmetrical zip closure, lapel snaps, and heavy-duty chrome hardware. Engineered from premium full-grain cowhide.",
    specs: [
      { label: "Material", value: "Full-Grain Cowhide" },
      { label: "Hardware", value: "Heavy Chrome YKK" },
      { label: "Sizes", value: "S – 5XL" },
      { label: "Lining", value: "Satin Polyester" },
    ],
    moq: "40 units / color",
    tag: "Bestseller",
  },
  {
    image: "/images/jackets/Untitled_design_21.webp",
    title: "Vintage Shearling Flight Leather Jacket",
    description: "Classic aviator flight jacket with plush shearling collar, double buckle neck latches, dual storm pockets, and reinforced elbow patches.",
    specs: [
      { label: "Material", value: "Top-Grain Cowhide / Shearling" },
      { label: "Style", value: "Aviator / Flight" },
      { label: "Sizes", value: "S – 5XL" },
      { label: "Insulation", value: "Warm Shearling Fleece" },
    ],
    moq: "40 units / color",
    tag: "Heritage",
  },
  {
    image: "/images/jackets/Untitled_design_22.webp",
    title: "Obsidian Black Minimalist Café Racer",
    description: "Ultra-clean minimalist racer jacket featuring streamlined Mandarin snap collar, concealed front zip, and tailored sleeve gussets.",
    specs: [
      { label: "Material", value: "Premium Sheep Nappa" },
      { label: "Finish", value: "Aniline Deep Black" },
      { label: "Sizes", value: "S – 5XL" },
      { label: "Collar", value: "Mandarin Snap Collar" },
    ],
    moq: "40 units / color",
    tag: "Designer",
  },
  {
    image: "/images/jackets/Untitled_design_23.webp",
    title: "Hand-Burnished Cognac Leather Bomber",
    description: "Artisanal hand-dyed cognac jacket with rich wax rub-off patina effect, ribbed hem trim, and antique brass metalware.",
    specs: [
      { label: "Material", value: "Hand-Dyed Cowhide" },
      { label: "Finish", value: "Vintage Wax Pull-Up" },
      { label: "Sizes", value: "S – 5XL" },
      { label: "Color", value: "Burnished Cognac" },
    ],
    moq: "40 units / color",
    tag: "Handcrafted",
  },
  {
    image: "/images/jackets/Untitled_design_24.webp",
    title: "Contemporary Urban Leather Bomber",
    description: "Everyday luxury casual jacket with ribbed elastic cuffs, hem trim, zippered utility arm pocket, and breathable silk lining.",
    specs: [
      { label: "Material", value: "Ultra-Soft Lambskin" },
      { label: "Style", value: "Bomber / Casual" },
      { label: "Sizes", value: "S – 5XL" },
      { label: "Trim", value: "Elastic Rib Knit" },
    ],
    moq: "40 units / color",
  },
  {
    image: "/images/jackets/Untitled_design_25.webp",
    title: "Executive Tailored Leather Coat",
    description: "Tailored long-line executive leather overcoat with classic button closure, deep side welt pockets, and refined notched lapel collar.",
    specs: [
      { label: "Material", value: "Sheep Nappa / Lambskin" },
      { label: "Fit", value: "Tailored Executive" },
      { label: "Sizes", value: "S – 5XL" },
      { label: "Style", value: "Overcoat / Car Coat" },
    ],
    moq: "40 units / color",
    tag: "Executive",
  },
  {
    image: "/images/jackets/Untitled_design_26.webp",
    title: "Two-Tone Dual Color Racing Jacket",
    description: "Bold two-tone motorsport leather jacket with contrasting leather racing panels, padded shoulders, and dual waist adjusters.",
    specs: [
      { label: "Material", value: "1.2mm Heavy Cowhide" },
      { label: "Design", value: "Dual Color Racing Panel" },
      { label: "Sizes", value: "S – 5XL" },
      { label: "Safety", value: "Armor Pockets Ready" },
    ],
    moq: "40 units / color",
    tag: "Motorsport",
  },
  {
    image: "/images/jackets/Untitled_design_27.webp",
    title: "Women's Lotus Slim-Fit Nappa Jacket",
    description: "Elegant tailored women's leather jacket featuring tapered silhouette, polished hardware, and asymmetrical front zip styling.",
    specs: [
      { label: "Material", value: "Ultra-Soft Sheep Nappa" },
      { label: "Category", value: "Womenswear" },
      { label: "Sizes", value: "XS – 3XL" },
      { label: "Fit", value: "Slim Contour" },
    ],
    moq: "40 units / color",
    tag: "Women's Collection",
  },
  {
    image: "/images/jackets/Untitled_design_28.webp",
    title: "Winter Heavyweight Insulated Leather Coat",
    description: "Full winter specification leather coat with heavy thermal padding, storm neck closure, and deep fleece-lined hand warmer pockets.",
    specs: [
      { label: "Material", value: "Heavy-Duty Cowhide" },
      { label: "Insulation", value: "300g Quilted Thermal" },
      { label: "Sizes", value: "S – 5XL" },
      { label: "Rating", value: "Sub-Zero Weather" },
    ],
    moq: "40 units / color",
    tag: "Winter Heavyweight",
  },
  {
    image: "/images/jackets/Untitled_design_29.webp",
    title: "Distressed Vintage Biker Leather Jacket",
    description: "Authentic hand-finished distressed leather jacket with vintage character, asymmetrical zip, belted waist, and snap lapels.",
    specs: [
      { label: "Material", value: "Distressed Cowhide" },
      { label: "Finish", value: "Vintage Rubbed Patina" },
      { label: "Sizes", value: "S – 5XL" },
      { label: "Hardware", value: "Antique Brass" },
    ],
    moq: "40 units / color",
    tag: "Vintage",
  },
  {
    image: "/images/jackets/Untitled_design_30.webp",
    title: "Artisanal Wax Pull-Up Suede & Leather Jacket",
    description: "Rich textured hybrid leather jacket combining soft suede panels with waxed pull-up leather highlights for an elevated artisanal aesthetic.",
    specs: [
      { label: "Material", value: "Pull-Up Cowhide & Suede" },
      { label: "Finish", value: "Wax Patina" },
      { label: "Sizes", value: "S – 5XL" },
      { label: "Pockets", value: "Dual Chest Flap + Welt" },
    ],
    moq: "40 units / color",
  },
  {
    image: "/images/jackets/Untitled_design_32.webp",
    title: "Statement Crimson Aniline Leather Jacket",
    description: "Vibrant crimson red leather jacket crafted from buttery soft sheep nappa. Premium statement piece for contemporary high-fashion brands.",
    specs: [
      { label: "Material", value: "Grade-A Sheep Nappa" },
      { label: "Color", value: "Crimson Red / Custom" },
      { label: "Sizes", value: "S – 5XL" },
      { label: "Finish", value: "High-Gloss Aniline" },
    ],
    moq: "40 units / color",
    tag: "Statement Piece",
  },
];

const customIntro =
  "We manufacture and export premium-quality leather jackets tailored to our clients' exact requirements. Whether you are looking for fashion, casual, biker, bomber, racer, aviator, suede, or workwear jackets, we can produce high-quality garments according to your designs, specifications, and brand requirements. Our customization capabilities include:";

const customSpecs: ProseSpec[] = [
  { label: "Leather Types", value: "Cow, Buffalo, Sheep (Lambskin), Goat & Suede" },
  {
    label: "Styles",
    value:
      "Biker, Bomber, Racer, Aviator, Casual, Fashion, Vintage, Hooded, Varsity, and Custom Designs",
  },
  { label: "Leather Thickness", value: "Customized according to the intended application" },
  { label: "Colors", value: "Any color as per buyer requirements" },
  {
    label: "Finishes",
    value:
      "Aniline, Semi-Aniline, Pigmented, Nubuck, Suede, Pull-Up, Waxed, Distressed, Printed, and Embossed",
  },
  { label: "Sizes", value: "XS to 5XL or fully customized sizing" },
  { label: "Lining Options", value: "Polyester, Satin, Quilted, Cotton, Mesh, or custom linings" },
  {
    label: "Hardware",
    value:
      "Premium-quality zippers, buttons, snaps, buckles, and customized metal accessories",
  },
  {
    label: "Branding",
    value:
      "Private Label, OEM & ODM Manufacturing, Custom Logos, Embroidery, Printing, Woven Labels, Hang Tags, and Custom Packaging",
  },
  {
    label: "Quality",
    value:
      "Manufactured to international export standards with strict quality control at every stage",
  },
];

const customOutro =
  "At Jafri Enterprises, we are committed to delivering leather jackets that meet your exact specifications in design, material, craftsmanship, and finish. Whether you require bulk production, private label manufacturing, or fully customized collections, we ensure superior quality, competitive pricing, and reliable on-time delivery for customers worldwide.";

const process = [
  { step: "01", title: "Submit Tech Pack", desc: "Share your design files, patterns, measurements, and material preferences." },
  { step: "02", title: "Proto Sample", desc: "We produce a prototype for your approval. Revisions included." },
  { step: "03", title: "Bulk Production", desc: "Approved sample goes into bulk. Real-time updates through production." },
  { step: "04", title: "Quality Control", desc: "100% inspection before shipment. CBR Group QC standards applied." },
  { step: "05", title: "Export & Delivery", desc: "Packed and shipped per your Incoterms. DHL, sea freight, and air options." },
];

export default function JacketsPage() {
  return (
    <div>
      {/* Header with Video Background */}
      <div className="relative min-h-[60vh] flex items-end overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-[75%_center] lg:object-right scale-105"
          >
            <source src="/assets/jackets-showcase-hero.mp4" type="video/mp4" />
            <source src="/assets/jackets-hero.mp4" type="video/mp4" />
          </video>
          {/* Gradients to fit video cleanly and keep text highly readable */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(26,14,7,0.90) 0%, rgba(26,14,7,0.72) 40%, rgba(26,14,7,0.30) 70%, rgba(26,14,7,0.15) 100%)",
            }}
          />
        </div>
        <div className="container-luxury relative z-10 pb-20 pt-44">
          <AnimatedSection>
            <p className="text-xs font-bold uppercase tracking-[0.2em] mb-4 text-[#D4B296]">Garments Division</p>
            <h1 className="text-display-lg mb-4 text-white" style={{ color: "#FFFFFF" }}>
              <span className="text-white" style={{ color: "#FFFFFF" }}>Leather</span>{" "}
              <span className="text-[#EBE3D5] italic font-serif">Jackets</span>
            </h1>
            <p className="max-w-xl text-lg text-[#FAF6F0]/90 font-medium">
              Made-to-order leather jackets in all styles and sizes. OEM and private label for global fashion brands.
            </p>
          </AnimatedSection>
        </div>
      </div>

      {/* Stats */}
      <section
        className="py-12"
        style={{ background: "#FAF6F0", borderBottom: "1px solid rgba(140,87,56,0.18)" }}
      >
        <div className="container-luxury">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {[
              { label: "Styles", value: "6+" },
              { label: "Min. Order", value: "40 units" },
              { label: "Sizes", value: "S – 5XL" },
              { label: "Lead Time", value: "8–10 weeks" },
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
            <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3 text-[#8C5738]">Jacket Styles</p>
            <h2 className="text-display-md" style={{ color: "#1A0E07" }}>
              Find Your <span className="text-[#8C5738] italic font-serif">Perfect Style</span>
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((p, i) => (
              <ProductCard key={p.title} {...p} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>

      {/* Editorial detail */}
      <ProseSection
        eyebrow="Custom Manufacturing"
        title="Built to Your"
        titleAccent="Specification"
        intro={customIntro}
        specs={customSpecs}
        outro={customOutro}
        background="#FAF6F0"
      />

      {/* Custom leather builder */}
      <CustomLeatherForm defaultApplication="Garments / Jackets" />

      {/* OEM Process */}
      <section className="section-padding" style={{ background: "#FAF6F0" }}>
        <div className="container-luxury">
          <AnimatedSection className="mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3 text-[#8C5738]">OEM Process</p>
            <h2 className="text-display-md" style={{ color: "#1A0E07" }}>
              From Concept to <span className="text-[#8C5738] italic font-serif">Delivery</span>
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {process.map((p, i) => (
              <AnimatedSection key={p.step} delay={i * 0.08}>
                <div
                  className="rounded-2xl p-6 h-full bg-white shadow-sm transition-transform duration-300 hover:-translate-y-1"
                  style={{ border: "1px solid rgba(140,87,56,0.18)" }}
                >
                  <div
                    className="text-4xl font-black leading-none mb-4 font-serif text-[#8C5738]"
                  >
                    {p.step}
                  </div>
                  <h3 className="text-base font-bold mb-2" style={{ color: "#1A0E07", fontFamily: "var(--font-display)" }}>
                    {p.title}
                  </h3>
                  <p className="text-xs font-medium leading-relaxed" style={{ color: "#523B2D" }}>
                    {p.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center text-white" style={{ background: "#362217" }}>
        <div className="container-luxury">
          <AnimatedSection>
            <p className="text-xs font-bold uppercase tracking-[0.2em] mb-4 text-[#D4B296]">Start Your Order</p>
            <h2 className="text-display-md mb-8 text-white">
              Request Samples & <span className="text-[#EBE3D5] italic font-serif">Pricing</span>
            </h2>
            <QuoteButton label="Request a Quote" hint="jackets" size="lg" />
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
