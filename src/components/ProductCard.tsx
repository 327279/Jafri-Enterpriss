"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "./AnimatedSection";

interface Spec {
  label: string;
  value: string;
}

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  specs?: Spec[];
  moq?: string;
  href?: string;
  delay?: number;
  tag?: string;
}

export default function ProductCard({
  image,
  title,
  description,
  specs,
  moq,
  href,
  delay = 0,
  tag,
}: ProductCardProps) {
  const openQuote = () => {
    if (typeof window !== "undefined" && (window as typeof window & { openQuoteModal?: (h?: string) => void }).openQuoteModal) {
      (window as typeof window & { openQuoteModal: (h?: string) => void }).openQuoteModal(title);
    }
  };

  return (
    <AnimatedSection delay={delay}>
      <div
        className="rounded-2xl group relative overflow-hidden flex flex-col h-full bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
        style={{
          border: "1px solid rgba(140, 87, 56, 0.20)",
        }}
      >
        {/* Tag */}
        {tag && (
          <div
            className="absolute top-3 left-3 z-10 px-3 py-1 text-[0.65rem] font-bold tracking-widest uppercase rounded-md shadow-sm"
            style={{ background: "#8C5738", color: "#FFFFFF" }}
          >
            {tag}
          </div>
        )}

        {/* Image */}
        <div className="relative h-56 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to top, rgba(26,14,7,0.3) 0%, transparent 60%)",
            }}
          />
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-6">
          <h3 className="text-xl font-bold mb-2.5" style={{ color: "#1A0E07", fontFamily: "var(--font-display)" }}>
            {title}
          </h3>
          <p className="text-sm leading-relaxed mb-5 flex-1 font-medium" style={{ color: "#36251B" }}>
            {description}
          </p>

          {/* Specs */}
          {specs && specs.length > 0 && (
            <div className="mb-5 divide-y divide-[rgba(140,87,56,0.15)]">
              {specs.map((spec) => (
                <div key={spec.label} className="flex justify-between py-1.5 text-xs">
                  <span className="font-semibold" style={{ color: "#6E4D3B" }}>
                    {spec.label}
                  </span>
                  <span className="font-bold" style={{ color: "#1A0E07" }}>
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* MOQ badge & Buttons */}
          <div className="pt-4 border-t border-[rgba(140,87,56,0.18)] flex items-center justify-between gap-3">
            {moq && (
              <span className="text-xs font-bold" style={{ color: "#8C5738" }}>
                MOQ: {moq}
              </span>
            )}
            <div className="flex items-center gap-2 ml-auto">
              <Button onClick={openQuote} size="sm">
                Inquire
              </Button>
              {href && (
                <Button asChild variant="outline" size="sm">
                  <Link href={href}>
                    Details
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>

  );
}
