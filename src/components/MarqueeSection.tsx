import Image from "next/image";

const items = [
  "App Development",
  "Website Development",
  "Pixel Perfect",
  "React Expert",
];

function MarqueeItems({ hidden = false }: { hidden?: boolean }) {
  return (
    <div
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-center gap-5 pr-5 sm:gap-8 sm:pr-8"
    >
      {items.map((item) => (
        <div key={item} className="flex items-center gap-5 sm:gap-8">
          <span>{item}</span>
          <Image
            src="/icons/Vector-7.png"
            alt=""
            width={60}
            height={60}
            className="size-9 opacity-30 sm:size-12"
          />
        </div>
      ))}
    </div>
  );
}

export default function MarqueeSection() {
  return (
    <div className="overflow-hidden bg-[#106876] py-4 text-white sm:py-5">
      <div className="marquee-track flex w-max text-base font-bold sm:text-xl lg:text-2xl">
        <MarqueeItems />
        <MarqueeItems hidden />
      </div>
    </div>
  );
}
