"use client";
import Marquee from "react-fast-marquee";
import Image from "next/image";

function MarqueeWithText({ logos }: { logos?: { logo?: string }[] }) {
  if (!logos) return null;

  return (
    <section className="py-4">
      <Marquee
        gradient={false}
        speed={50}
        className="rounded-3xl md:rounded-none"
      >
        {!!logos?.length &&
          logos.map((item, i) => (
            <div key={i} className="flex items-center mr-8">
              <Image
                className="w-40 h-20"
                src={item?.logo || ""}
                width={40}
                height={20}
                alt="logo"
              />
            </div>
          ))}
      </Marquee>
    </section>
  );
}

export default MarqueeWithText;
