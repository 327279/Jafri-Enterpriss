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
          "btn-sheen bg-gradient-to-r from-[#A37557] to-[#B07B54] text-white font-bold border border-transparent shadow-md shadow-amber-950/20 hover:from-[#8F613F] hover:to-[#A37557] hover:shadow-lg hover:shadow-amber-950/30 hover:[&_svg]:translate-x-[3px]",
        outline:
          "bg-white/90 text-[#2B1B12] border-2 border-[#2B1B12] font-bold shadow-sm hover:bg-[#2B1B12] hover:text-white hover:border-[#2B1B12]",
        heroOutline:
          "bg-white/10 backdrop-blur-md text-white border-2 border-white/80 font-bold shadow-sm hover:bg-white hover:text-[#2B1B12] hover:border-white",
        subtle:
          "bg-[#EBE3D5] text-[#2B1B12] border border-[rgba(163,117,87,0.25)] font-bold hover:bg-[#FAF6F0] hover:border-[rgba(163,117,87,0.45)]",
        ghost:
          "bg-transparent text-[#A37557] border border-transparent font-semibold hover:bg-[rgba(163,117,87,0.12)] hover:text-[#2B1B12]",
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
