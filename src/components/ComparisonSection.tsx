import { Check, Minus } from "lucide-react";

import { Section } from "@/components/ui/section";

const rows = [
  "React Expert",
  "Pixel perfect",
  "TypeScript Proficiency",
  "Clean, Maintainable Code",
  "Performance optimization",
  "Responsive Website",
  "UI Design Proficiency (Figma)",
];

export default function ComparisonSection() {
  return (
    <Section background="glow" className="py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 xl:px-5">
        <div className="mb-9 text-center sm:mb-12">
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl lg:text-5xl">
            Not Your Typical Frontend Developer
          </h2>
          <p className="mt-5 text-zinc-400">
            I care about how it looks, how it works, and how it feels, all at
            once.
          </p>
        </div>

        <div className="grid grid-cols-[1.5fr_0.8fr_0.8fr] overflow-hidden border border-white/10 text-xs sm:grid-cols-[1.25fr_1fr_1fr] sm:text-sm">
          <div className="bg-black/50 p-3 font-semibold sm:p-5">Skill</div>
          <div className="bg-[#087488] p-3 text-center font-semibold sm:p-5">
            With Me
          </div>
          <div className="bg-black/50 p-3 text-center font-semibold sm:p-5">Other</div>

          {rows.map((row) => (
            <div key={row} className="contents">
              <div className="border-t border-white/10 bg-black/50 p-3 text-zinc-300 sm:p-4">
                {row}
              </div>
              <div className="grid place-items-center border-t border-white/10 bg-[#087488] p-3 sm:p-4">
                <Check className="size-4" />
              </div>
              <div className="grid place-items-center border-t border-white/10 bg-black/50 p-3 text-zinc-600 sm:p-4">
                <Minus className="size-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
