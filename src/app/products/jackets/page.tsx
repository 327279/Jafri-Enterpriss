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
    "Premium leather jackets from Jafri Enterprises. Biker, casual, classic, and winter styles in sheep nappa and cowhide. OEM & private label, MOQ 200 units.",
};

const products = [
  {
    image: "/images/jackets/3RD-STREET-LEATHER-JACKET.jpg",
    title: "3rd Street Leather Biker Jacket",
    description: "Classic street motorcycle jacket with asymmetrical zip, lapel snaps, and heavy-duty chrome hardware. Engineered from premium full-grain cowhide.",
    specs: [
      { label: "Material", value: "Full-Grain Cowhide" },
      { label: "Hardware", value: "Heavy Chrome YKK" },
      { label: "Sizes", value: "S – 5XL" },
      { label: "Lining", value: "Satin Polyester" },
    ],
    moq: "200 units / color",
    tag: "Bestseller",
  },
  {
    image: "/images/jackets/ACCENTURE-EVERGREEN-LEATHER-COAT.jpg",
    title: "Accenture Evergreen Leather Coat",
    description: "Tailored long-line executive leather coat with classic button closure, deep side welt pockets, and refined lapel collar.",
    specs: [
      { label: "Material", value: "Sheep Nappa / Lamb" },
      { label: "Fit", value: "Tailored Executive" },
      { label: "Sizes", value: "S – 5XL" },
      { label: "Style", value: "Overcoat" },
    ],
    moq: "200 units / color",
    tag: "Executive",
  },
  {
    image: "/images/jackets/BALMEN-LEATHER-BIKER-JACKET.jpg",
    title: "Balmen Slim Biker Leather Jacket",
    description: "Slim-fit designer biker jacket with quilted shoulder padding, dual chest zips, and adjustable waist side tabs.",
    specs: [
      { label: "Material", value: "Supple Sheep Nappa" },
      { label: "Finish", value: "Aniline Black" },
      { label: "Sizes", value: "S – 5XL" },
      { label: "Padding", value: "Quilted Shoulders" },
    ],
    moq: "200 units / color",
    tag: "Designer",
  },
  {
    image: "/images/jackets/elegant-mens-leather-jacket-black.jpg",
    title: "Elegant Black Nappa Leather Jacket",
    description: "Ultra-clean minimalist leather jacket featuring concealed front zip, mandarin stand collar, and plush satin lining.",
    specs: [
      { label: "Material", value: "Premium Sheep Nappa" },
      { label: "Color", value: "Deep Obsidian Black" },
      { label: "Sizes", value: "S – 5XL" },
      { label: "Collar", value: "Mandarin Snap" },
    ],
    moq: "200 units / color",
  },
  {
    image: "/images/jackets/FASHIONABLE-CASUAL-JACKET-FOR-MENS.jpg",
    title: "Fashion Casual Leather Bomber",
    description: "Everyday casual leather jacket with ribbed elastic cuffs, hem trim, and multi-zip utility pockets.",
    specs: [
      { label: "Material", value: "Soft Lambskin" },
      { label: "Style", value: "Bomber / Casual" },
      { label: "Sizes", value: "S – 5XL" },
      { label: "Trim", value: "Ribbed Elastic" },
    ],
    moq: "200 units / color",
  },
  {
    image: "/images/jackets/fashionable-classic-pu-leather-jackets.jpg",
    title: "Classic Flight Leather Jacket",
    description: "Aviator style leather jacket with storm flap closure, dual cargo hand pockets, and reinforced elbow stitching.",
    specs: [
      { label: "Material", value: "Top-Grain Cowhide" },
      { label: "Style", value: "Flight / Aviator" },
      { label: "Sizes", value: "S – 5XL" },
      { label: "Pockets", value: "Dual Cargo + Zip" },
    ],
    moq: "200 units / color",
  },
  {
    image: "/images/jackets/HAND-MADE-BROWN-LEATER-JACKET-FOR-MENS.jpg",
    title: "Handcrafted Vintage Brown Leather Jacket",
    description: "Artisanal hand-dyed brown leather jacket with rich wax rub-off patina effect and brass antiqued hardware.",
    specs: [
      { label: "Material", value: "Hand-Dyed Cowhide" },
      { label: "Finish", value: "Vintage Wax Pull-Up" },
      { label: "Sizes", value: "S – 5XL" },
      { label: "Color", value: "Cognac Brown" },
    ],
    moq: "200 units / color",
    tag: "Handcrafted",
  },
  {
    image: "/images/jackets/K-2-MENS-LEATHER-JACKET.jpg",
    title: "K-2 Expedition Leather Jacket",
    description: "Rugged expedition jacket engineered with reinforced shoulder panels, high thermal lining, and storm neck collar.",
    specs: [
      { label: "Material", value: "Heavy Duty Cowhide" },
      { label: "Lining", value: "Thermal Fleece" },
      { label: "Sizes", value: "S – 5XL" },
      { label: "Protection", value: "Cold & Wind Proof" },
    ],
    moq: "200 units / color",
  },
  {
    image: "/images/jackets/ladies-lotus-lather-jacket.jpg",
    title: "Lotus Women's Leather Jacket",
    description: "Elegant tailored women's leather jacket featuring tapered silhouette, brass hardware, and asymmetrical front zip.",
    specs: [
      { label: "Material", value: "Ultra-Soft Sheep Nappa" },
      { label: "Category", value: "Womenswear" },
      { label: "Sizes", value: "XS – 3XL" },
      { label: "Fit", value: "Slim Contour" },
    ],
    moq: "200 units / color",
    tag: "Women's Collection",
  },
  {
    image: "/images/jackets/mens-leather-jacket-coat-pant.jpg",
    title: "Executive Leather Coat Collection",
    description: "Premium full-length executive leather coat designed for formal retail and luxury corporate apparel lines.",
    specs: [
      { label: "Material", value: "Full-Grain Nappa" },
      { label: "Style", value: "Formal Executive" },
      { label: "Sizes", value: "S – 5XL" },
      { label: "Length", value: "Mid-Thigh / Knee" },
    ],
    moq: "200 units / color",
  },
  {
    image: "/images/jackets/MOTOR-BIKE-LEATHER-CORDURA-JACKET.jpg",
    title: "Motorbike Leather & Cordura Hybrid Jacket",
    description: "Performance motorcycle jacket combining abrasion-resistant leather with 600D Cordura textile inserts and CE armor pockets.",
    specs: [
      { label: "Material", value: "1.2mm Cowhide + Cordura" },
      { label: "Protection", value: "CE Armor Ready" },
      { label: "Sizes", value: "S – 5XL" },
      { label: "Safety", value: "Reflective Piping" },
    ],
    moq: "200 units / color",
    tag: "Motorsport",
  },
  {
    image: "/images/jackets/PU-LEATHER-JACKET-WITH-DOUBLE-COULOR.jpg",
    title: "Two-Tone Dual Color Leather Jacket",
    description: "Bold two-tone leather jacket with contrasting panel construction, racing stripes, and dual waist adjusters.",
    specs: [
      { label: "Material", value: "Sheep Nappa / Cowhide" },
      { label: "Design", value: "Dual Color Panel" },
      { label: "Sizes", value: "S – 5XL" },
      { label: "Colors", value: "Custom Combos" },
    ],
    moq: "200 units / color",
  },
  {
    image: "/images/jackets/RIVER-ROAD-HOODLUM-JACKET.jpg",
    title: "River Road Hoodlum Leather Jacket",
    description: "Classic cruiser motorcycle jacket with snap collar, removable thermal vest lining, and zippered ventilation ports.",
    specs: [
      { label: "Material", value: "Top-Grain Cowhide" },
      { label: "Venting", value: "Zippered Air Vents" },
      { label: "Sizes", value: "S – 5XL" },
      { label: "Lining", value: "Removable Vest" },
    ],
    moq: "200 units / color",
  },
  {
    image: "/images/jackets/SHEEP-NAPPA-RED.jpg",
    title: "Crimson Red Sheep Nappa Jacket",
    description: "Vibrant crimson red leather jacket crafted from buttery soft sheep nappa. Premium statement piece for fashion brands.",
    specs: [
      { label: "Material", value: "Grade-A Sheep Nappa" },
      { label: "Color", value: "Crimson Red" },
      { label: "Sizes", value: "S – 5XL" },
      { label: "Finish", value: "High-Gloss Aniline" },
    ],
    moq: "200 units / color",
    tag: "Statement Piece",
  },
  {
    image: "/images/jackets/SHEEP-NAPPA-WHTIE-WITH-BLACK-CONTRASS.jpg",
    title: "Monochrome Contrast Nappa Jacket",
    description: "High-contrast white and black monochrome leather jacket with racing shoulder bands and gunmetal hardware.",
    specs: [
      { label: "Material", value: "Sheep Nappa" },
      { label: "Colorway", value: "White / Black Contrast" },
      { label: "Sizes", value: "S – 5XL" },
      { label: "Hardware", value: "Gunmetal Zips" },
    ],
    moq: "200 units / color",
  },
  {
    image: "/images/jackets/STYLISH-LEATHER-JACKETS-FOR-MENS.jpg",
    title: "Stylish Urban Racer Jacket",
    description:
      "Modern slim-fit racer jacket with channel quilting on sleeve cuffs, stand collar, and double vertical zip chest pockets.",
    specs: [
      { label: "Material", value: "Lambskin / Nappa" },
      { label: "Fit", value: "Slim Modern" },
      { label: "Sizes", value: "S – 5XL" },
      { label: "Quilting", value: "Sleeve Channels" },
    ],
    moq: "200 units / color",
  },
  {
    image: "/images/jackets/WINTER-LEATHER-JACKET-600x630.jpg",
    title: "Heavy Winter Insulated Leather Coat",
    description: "Full winter specification leather jacket with heavy thermal padding, storm neck closure, and deep hand warmer pockets.",
    specs: [
      { label: "Material", value: "Heavy Cowhide" },
      { label: "Insulation", value: "300g Quilted Thermal" },
      { label: "Sizes", value: "S – 5XL" },
      { label: "Climate", value: "Sub-Zero Rated" },
    ],
    moq: "200 units / color",
    tag: "Winter Heavyweight",
  },
  {
    image: "/images/jackets/24.jpg",
    title: "Contemporary Minimalist Leather Jacket",
    description: "Sleek contemporary leather jacket with clean seamlines, concealed zip placket, and tailored cuffs.",
    specs: [
      { label: "Material", value: "Sheep Nappa" },
      { label: "Finish", value: "Matte Smooth" },
      { label: "Sizes", value: "S – 5XL" },
      { label: "Design", value: "Clean Seamline" },
    ],
    moq: "200 units / color",
  },
  {
    image: "/images/jackets/80859e84-4d87-404f-a458-61b7a03d832e.webp",
    title: "Distressed Vintage Biker Jacket",
    description: "Authentic hand-finished distressed leather jacket with vintage character, asymmetrical zip, and snap lapels.",
    specs: [
      { label: "Material", value: "Distressed Cowhide" },
      { label: "Finish", value: "Vintage Rubbed" },
      { label: "Sizes", value: "S – 5XL" },
      { label: "Hardware", value: "Antique Brass" },
    ],
    moq: "200 units / color",
    tag: "Vintage",
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
      <div className="relative min-h-[65vh] flex items-end overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-105"
          >
            <source src="/assets/jackets-vintage-hero.mp4" type="video/mp4" />
          </video>
          {/* Gradients to fit video cleanly and keep text highly readable */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(105deg, rgba(85,58,46,0.88) 0%, rgba(3,2,1,0.80) 50%, rgba(3,2,1,0.65) 100%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, var(--color-obsidian) 0%, transparent 60%)",
            }}
          />
        </div>
        <div className="container-luxury relative z-10 pb-20 pt-44">
          <AnimatedSection>
            <p className="text-label mb-4">Garments Division</p>
            <h1 className="text-display-lg mb-4">
              Leather{" "}
              <span className="text-gradient-gold italic">Jackets</span>
            </h1>
            <p className="max-w-xl text-lg" style={{ color: "var(--color-text-secondary)" }}>
              Made-to-order leather jackets in all styles and sizes. OEM and private label for global fashion brands.
            </p>
          </AnimatedSection>
        </div>
      </div>

      {/* Stats */}
      <section
        className="py-14 on-brown"
        style={{ background: "linear-gradient(90deg, var(--color-brown-deep) 0%, var(--color-obsidian) 100%)", borderBottom: "1px solid rgba(232,223,212,0.16)" }}
      >
        <div className="container-luxury">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {[
              { label: "Styles", value: "6+" },
              { label: "Min. Order", value: "200 units" },
              { label: "Sizes", value: "S – 5XL" },
              { label: "Lead Time", value: "8–10 weeks" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <StatNumber value={s.value} style={{ fontSize: "1.5rem" }} />
                <div className="text-xs tracking-widest uppercase mt-1" style={{ color: "var(--color-text-muted)" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding on-brown" style={{ background: "var(--color-obsidian)" }}>
        <div className="container-luxury">
          <AnimatedSection className="mb-14">
            <div className="section-eyebrow">
              <div className="divider-gold" />
              <p className="text-label">Jacket Styles</p>
            </div>
            <h2 className="text-display-md">
              Find Your{" "}
              <span className="text-gradient-gold italic">Perfect Style</span>
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
        background="var(--color-dark)"
      />

      {/* Custom leather builder */}
      <CustomLeatherForm defaultApplication="Garments / Jackets" />

      {/* OEM Process */}
      <section className="section-padding" style={{ background: "var(--color-void)" }}>
        <div className="container-luxury">
          <AnimatedSection className="mb-14">
            <div className="section-eyebrow">
              <div className="divider-gold" />
              <p className="text-label">OEM Process</p>
            </div>
            <h2 className="text-display-md">
              From Concept to{" "}
              <span className="text-gradient-gold italic">Delivery</span>
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {process.map((p, i) => (
              <AnimatedSection key={p.step} delay={i * 0.08}>
                <div
                  className="relative p-6 h-full"
                  style={{ background: "rgba(26,18,8,0.7)", border: "1px solid var(--color-border)" }}
                >
                  <div
                    className="text-4xl font-display leading-none mb-4 opacity-20"
                    style={{ color: "var(--color-amber)" }}
                  >
                    {p.step}
                  </div>
                  <h3 className="text-display-xs mb-2">
                    {p.title}
                  </h3>
                  <p className="text-sm" style={{ color: "var(--color-text-secondary)" }}>
                    {p.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center" style={{ background: "var(--color-dark)", borderTop: "1px solid var(--color-border)" }}>
        <div className="container-luxury">
          <AnimatedSection>
            <p className="text-label mb-4">Start Your Order</p>
            <h2 className="text-display-md mb-8">
              Request Samples &{" "}
              <span className="text-gradient-gold italic">Pricing</span>
            </h2>
            <QuoteButton label="Request a Quote" hint="jackets" />
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
