"use client";

import { Button, type ButtonProps } from "@/components/ui/button";

interface QuoteButtonProps extends Omit<ButtonProps, "variant"> {
  label?: string;
  hint?: string;
  variant?: ButtonProps["variant"];
}

export default function QuoteButton({
  label = "Request a Quote",
  hint = "",
  variant = "primary",
  ...props
}: QuoteButtonProps) {
  const open = () => {
    const w = window as typeof window & {
      openQuoteModal?: (h?: string) => void;
    };
    w.openQuoteModal?.(hint);
  };

  return (
    <Button onClick={open} variant={variant} {...props}>
      {label}
    </Button>
  );
}
