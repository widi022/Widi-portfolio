import Image from "next/image";
import { Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";

const skills = [
  ["HTML", 100, "/icons/html.png"],
  ["CSS", 90, "/icons/css.png"],
  ["Javascript", 90, "/icons/javascript.png"],
  ["Typescript", 80, "/icons/typescript.png"],
  ["Sequelize", 80, "/icons/sequalize.png"],
  ["Mongo DB", 75, "/icons/mongo-DB.png"],
] as const;

export default function SkillsSection() {
  return (
    <Section id="skill" className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 md:grid-cols-[0.9fr_1.1fr] lg:px-8 xl:px-5">
        <div className="flex flex-col md:border-r md:border-white/70 md:pr-12">
          <h2 className="text-4xl font-semibold leading-tight lg:text-5xl">
            Tools I Use to
            <br />
            Build
          </h2>
          <p className="mt-6 max-w-sm leading-7 text-zinc-400">
            From code to design, here&apos;s the tech that helps me turn ideas
            into real products.
          </p>
          <Button
            variant="portfolio"
            size="portfolio"
            asChild
            className="mt-12 w-full sm:w-72 md:mt-auto"
          >
            <a href="#contact">
              <Mail />
              Send Message
            </a>
          </Button>
        </div>

        <div>
          {skills.map(([name, value, src]) => (
            <div
              key={name}
              className="flex items-center gap-4 border-b border-white/15 px-2 py-5 sm:px-4"
            >
              <Image
                src={src}
                alt=""
                width={42}
                height={42}
                className="size-9 object-contain"
              />
              <span className="text-lg">{name}</span>
              <span className="ml-auto text-lg font-semibold">{value}%</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
