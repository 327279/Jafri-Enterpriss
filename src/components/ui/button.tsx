"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Button — brand-tokened variants.
 *
 * Colours resolve from the CSS custom properties in globals.css so the
 * button follows the palette rather than hard-coding hex values.
 *
 * Use `asChild` to render a Link while keeping button styling:
 *   <Button asChild><Link href="/products">View</Link></Button>
 *
 * Inside a `.on-dark` section the outline and ghost variants invert
 * automatically via the on-dark rules in globals.css.
 */
const buttonVariants = cva(
  // base
  // `indent-[0.1em]` optically re-centres the label: letter-spacing appends
  // its space AFTER the final glyph, so tracked uppercase text otherwise sits
  // visibly left of centre. The indent adds the same amount back on the left.
  // (No `leading-*` here — tailwind-merge treats it as conflicting with the
  // size variants' `text-[…]` and would drop it. The fixed heights plus
  // flex centring already control the label's vertical position.)
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm font-sans font-semibold uppercase tracking-[0.1em] indent-[0.1em] transition-[color,background-color,border-color,box-shadow,transform] duration-200 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] cursor-pointer select-none active:translate-y-px active:scale-[0.985] motion-reduce:active:translate-y-0 motion-reduce:active:scale-100 disabled:pointer-events-none disabled:opacity-55 focus-visible:outline-2 focus-visible:outline-offset-[3px] [&_svg]:shrink-0 [&_svg]:indent-0 [&_svg]:transition-transform [&_svg]:duration-200",
  {
    variants: {
      variant: {
        primary:
          "btn-sheen bg-[var(--color-amber)] text-white border border-transparent shadow-[var(--shadow-sm)] hover:brightness-110 hover:shadow-[var(--shadow-md)] hover:[&_svg]:translate-x-[3px]",
        outline:
          "bg-transparent text-[var(--color-text-heading)] border border-[var(--color-border-strong)] hover:bg-[var(--color-text-heading)] hover:text-[var(--color-void)] hover:border-[var(--color-text-heading)]",
        subtle:
          "bg-[rgba(144,108,86,0.12)] text-[var(--color-text-heading)] border border-[rgba(144,108,86,0.30)] hover:bg-[rgba(144,108,86,0.22)] hover:border-[rgba(144,108,86,0.48)]",
        ghost:
          "bg-transparent text-[var(--color-amber-light)] border border-transparent hover:bg-[rgba(144,108,86,0.14)]",
      },
      // Heights are set with min-h in addition to h so the button keeps its
      // size when it is a flex child on a column axis — `flex-1` resolves
      // flex-basis to 0 there and would otherwise collapse `h-*` entirely.
      // Every size clears the 44px touch-target minimum on coarse pointers.
      size: {
        sm: "h-11 min-h-11 px-4 text-[0.7rem] [&_svg]:size-3.5 sm:h-9 sm:min-h-9",
        md: "h-11 min-h-11 px-6 text-[0.75rem] [&_svg]:size-4",
        lg: "h-13 min-h-13 px-8 text-[0.8rem] [&_svg]:size-4",
      },
      block: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      block: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, block, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, block }), className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
