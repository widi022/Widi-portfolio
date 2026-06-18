import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const sectionVariants = cva("relative isolate overflow-hidden bg-black text-white", {
  variants: {
    background: {
      plain: "",
      hero: "section-background-hero",
      glow: "section-background-glow",
      bars: "section-background-bars",
    },
  },
  defaultVariants: {
    background: "plain",
  },
});

function Section({
  className,
  background,
  ...props
}: React.ComponentProps<"section"> & VariantProps<typeof sectionVariants>) {
  return (
    <section
      className={cn(sectionVariants({ background }), className)}
      {...props}
    />
  );
}

export { Section, sectionVariants };
