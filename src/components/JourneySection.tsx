"use client";

import Image from "next/image";
import { BriefcaseBusiness } from "lucide-react";
import { useRef } from "react";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";

const jobs = [
  ["/icons/Vector-4.png", "airbnb"],
  ["/icons/Vector-5.png", "dribbble"],
  ["/icons/Vector-6.png", "zoom"],
] as const;

export default function JourneySection() {
  const carouselRef = useRef<HTMLDivElement>(null);

  function scroll(direction: -1 | 1) {
    const carousel = carouselRef.current;
    if (!carousel) return;

    carousel.scrollBy({
      left: direction * carousel.clientWidth * 0.9,
      behavior: "smooth",
    });
  }

  return (
    <Section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 xl:px-5">
        <h2 className="text-4xl font-semibold lg:text-5xl">
          My Journey in Tech
        </h2>
        <p className="mt-5 text-zinc-400">
          From small gigs to real-world challenges, each experience helped me
          grow as a builder and problem-solver.
        </p>

        <div
          ref={carouselRef}
          className="scrollbar-hidden mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-6"
        >
          {jobs.map(([logo, name]) => (
            <article
              key={name}
              className="min-w-[88%] snap-start border border-white/15 p-5 sm:min-w-[70%] lg:min-w-[48%]"
            >
              <div className="border-l-2 border-[#20a4b8] pl-4">
                <div className="flex justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold">
                      Frontend Developer
                    </h3>
                    <p className="mt-3">2025- Present</p>
                  </div>
                  <BriefcaseBusiness className="size-5" />
                </div>
              </div>
              <p className="mt-6 border-t border-white/15 pt-6 leading-7 text-zinc-400">
                Built responsive web interfaces using modern frameworks like
                React.js, ensuring seamless integration with backend systems.
                Optimized performance, implemented accessible designs, and
                delivered clean, reusable code to enhance user experience and
                scalability.
              </p>
              <Image
                src={logo}
                alt={name}
                width={128}
                height={40}
                className="mt-7 h-10 w-auto object-contain"
              />
            </article>
          ))}
        </div>

        <div className="h-1 max-w-xl bg-white/15">
          <div className="h-full w-1/2 bg-white" />
        </div>
        <div className="mt-10 flex gap-3">
          <Button
            type="button"
            variant="outline"
            className="h-12 w-28 bg-black text-zinc-400"
            onClick={() => scroll(-1)}
          >
            Prev
          </Button>
          <Button
            type="button"
            variant="outline"
            className="h-12 w-28 bg-black text-white"
            onClick={() => scroll(1)}
          >
            Next
          </Button>
        </div>
      </div>
    </Section>
  );
}
