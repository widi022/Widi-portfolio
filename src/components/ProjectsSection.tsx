import Image from "next/image";

import { Section } from "@/components/ui/section";

const projects = [
  ["Portofolio 1", "/images/Portfolio1.png"],
  ["Portofolio 2", "/images/Portfolio2.png"],
  ["Portofolio 3", "/images/Portfolio3.png"],
] as const;

export default function ProjectsSection() {
  return (
    <Section id="projects" className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 xl:px-5">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl lg:text-5xl">
            Bridging Design and Development
          </h2>
          <p className="mt-5 text-zinc-400">
            These are real projects where I implemented frontend interfaces
            with precision and attention to detail.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map(([title, src]) => (
            <article key={title}>
              <Image
                src={src}
                alt={title}
                width={373}
                height={427}
                className="w-full object-contain object-top"
              />
              <h3 className="mt-5 text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-zinc-500">2025</p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
