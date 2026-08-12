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
        className="card-luxury group relative overflow-hidden flex flex-col h-full"
        style={{
          background: "rgba(26, 18, 8, 0.8)",
          border: "1px solid var(--color-border)",
        }}
      >
        {/* Tag */}
        {tag && (
          <div
            className="absolute top-3 left-3 z-10 px-2.5 py-1 text-[0.6rem] font-semibold tracking-widest uppercase"
            style={{ background: "var(--color-amber)", color: "var(--color-void)" }}
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
              background: "linear-gradient(to top, rgba(8,6,4,0.85) 0%, transparent 60%)",
            }}
          />
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-5">
          <h3 className="text-display-xs mb-2">
            {title}
          </h3>
          <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: "var(--color-text-secondary)" }}>
            {description}
          </p>

          {/* Specs */}
          {specs && specs.length > 0 && (
            <div className="mb-4">
              {specs.map((spec) => (
                <div key={spec.label} className="spec-row">
                  <span className="text-xs font-medium" style={{ color: "var(--color-text-muted)" }}>
                    {spec.label}
                  </span>
                  <span className="text-xs font-semibold" style={{ color: "var(--color-cream)" }}>
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* MOQ */}
          {moq && (
            <div
              className="flex items-center gap-2 px-3 py-2.5 mb-4 text-xs rounded-md"
              style={{
                background: "rgba(144,108,86,0.08)",
                border: "1px solid var(--color-border)",
              }}
            >
              <span style={{ color: "var(--color-amber)" }}>MOQ:</span>
              <span style={{ color: "var(--color-cream)" }}>{moq}</span>
            </div>
          )}

          {/* CTAs — basis-0 rather than flex-1 so the buttons share width on
              the row axis without their height collapsing on the column axis. */}
          <div className="flex flex-col sm:flex-row gap-2.5 mt-auto">
            <Button onClick={openQuote} size="sm" className="w-full sm:flex-1 sm:w-auto">
              Request a Quote
            </Button>
            {href && (
              <Button asChild variant="outline" size="sm" className="w-full sm:flex-1 sm:w-auto">
                <Link href={href}>
                  View Details
                  <ArrowRight />
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
