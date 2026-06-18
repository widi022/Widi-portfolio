import Image from "next/image";
import { Code2, Component, Globe, Smartphone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok } from "react-icons/fa";

import { Section } from "@/components/ui/section";

const services = [
  {
    icon: Code2,
    title: "Frontend Development",
    text: "I build responsive, accessible, and scalable websites using modern frontend tools and best practices.",
  },
  {
    icon: Globe,
    title: "Web Performance",
    text: "I optimize websites for speed and efficiency to ensure smooth experiences across all devices.",
  },
  {
    icon: Component,
    title: "Component Based UI",
    text: "I specialize in crafting reusable UI components that are clean, maintainable, and aligned with design systems.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    text: "I ensure that every layout adapts beautifully to different screen sizes, from mobile to desktop.",
  },
];

export default function AboutSection() {
  return (
    <Section id="about" className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 xl:px-5">
        <div className="mb-12 grid gap-8 border-b border-white/15 pb-12 lg:grid-cols-[1.5fr_0.5fr]">
          <p className="max-w-3xl text-2xl font-semibold leading-tight sm:text-3xl lg:text-4xl">
            I turn ideas and designs into functional, accessible, and performant
            websites{" "}
            <span className="block text-[#20a4b8]">
              using modern frontend technologies.
            </span>
          </p>
          <div className="flex flex-col justify-between gap-8 lg:items-end">
            <p className="text-zinc-400">About Me</p>
            <div className="flex items-center gap-3">
              {[FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#contact"
                    aria-label="Social profile"
                    className="grid size-10 place-items-center rounded-full border border-white/20 text-zinc-300 transition hover:border-[#20a4b8] hover:text-[#20a4b8]"
                  >
                    <Icon className="size-4" />
                  </a>
                ),
              )}
            </div>
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center xl:gap-16">
          <div className="relative mx-auto w-full max-w-md overflow-hidden border border-white/10 bg-[#07191c]">
            <Image
              src="/images/pict-1.png"
              alt="Edwin Anderson"
              width={341}
              height={671}
              className=" w-full object-cover object-center"
            />
          </div>

          <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
            {services.map(({ icon: Icon, title, text }) => (
              <article key={title}>
                <Icon className="mb-6 size-8 text-[#20a4b8]" />
                <h3 className="mb-2 text-lg font-semibold">{title}</h3>
                <p className="text-sm leading-7 text-zinc-400">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
