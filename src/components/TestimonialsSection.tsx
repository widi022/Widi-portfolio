"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { useRef } from "react";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";

const testimonials = [
  {
    metric: "8X",
    title: "More users converted after redesign",
    text: "Working with Edwin has been a fantastic experience. His attention to detail and commitment to quality are evident in every project. He consistently delivers results that exceed expectations, making him a valuable asset to any team.",
    image: "/images/pablo.png",
    featured: true,
  },
  {
    metric: "3X",
    title: "Improved user engagement and sign-ups",
    text: "Edwin's expertise in frontend development is remarkable. He brings creativity and innovation to the table, ensuring that every project is not only functional but also visually appealing.",
    image: "/images/pablo-1.png",
  },
  {
    title: "",
    text: "Edwin's work ethic and dedication are truly inspiring. He approaches challenges with a positive attitude and consistently finds effective solutions.",
    image: "/images/pablo-2.png",
  },
  {
    title: "",
    text: "Edwin has a unique ability to transform complex ideas into user-friendly designs. His contributions have significantly enhanced our projects.",
    image: "/images/pablo-3.png",
  },
];

function Stars() {
  return (
    <div className="flex gap-2 text-amber-400">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} className="size-4 fill-current" />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
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
        <div className="mb-12 flex flex-col gap-8 text-center sm:flex-row sm:items-end sm:justify-between sm:text-left">
          <div>
            <h2 className="text-4xl font-semibold lg:text-5xl">
              Trusted Voices
            </h2>
            <p className="mt-5 text-zinc-400">
              Here&apos;s what people say about working with me, across
              projects, teams, and timelines.
            </p>
          </div>
          <div className="flex justify-center gap-3 sm:justify-end">
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

        <div
          ref={carouselRef}
          className="scrollbar-hidden flex snap-x snap-mandatory gap-5 overflow-x-auto"
        >
          {testimonials.map((item, index) => (
            <article
              key={index}
              className={`flex min-h-[500px] min-w-[88%] snap-start flex-col border p-6 sm:min-w-[65%] lg:min-w-[42%] xl:min-w-[36%] ${
                item.featured
                  ? "border-[#20a4b8]/50 bg-gradient-to-br from-[#063b43] to-black"
                  : "border-white/15 bg-black"
              }`}
            >
              {item.metric && (
                <p className="text-4xl font-bold">{item.metric}</p>
              )}
              {item.title && (
                <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
              )}
              <div className={item.metric ? "mt-4" : ""}>
                <Stars />
              </div>
              <p className="mt-5 leading-7 text-zinc-400">{item.text}</p>

              <div className="mt-auto flex items-center gap-3 pt-8">
                <Image
                  src={item.image}
                  alt="Pablo Stanley"
                  width={48}
                  height={48}
                  className="size-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">Pablo Stanley</p>
                  <p className="mt-1 text-sm">Product Manager at Finovate</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
