"use client";
import { PortableText, PortableTextBlock } from "@portabletext/react";
import React from "react";
import { ItemType } from "@/types";
import Heading from "../Heading";
import Icons from "../Icons";
import Illustration from "./Illustration";

interface MediaWithTextProps {
  _id?: string;
  heading?: string;
  content?: PortableTextBlock;
  image?: string;
  horizontalImage?: string;
}

function MediaWithText({
  heading,
  content,
  horizontalImage,
  image,
  _id,
}: MediaWithTextProps) {
  return (
    <section
      className="py-10 md:py-20 text-sm md:text-base relative overflow-hidden scroll-mt-10 max-md:scroll-mt-16"
      id="traditions"
    >
      <Icons
        icons={[
          { name: "bread2", position: "top-left" },
          { name: "basket", position: "top-right" },
          { name: "loaf", position: "bottom-left" },
          { name: "baguette", position: "bottom-right" },
        ]}
      />
      <div className="container relative bg-brand-dark rounded-3xl bg-opacity-80 py-10">
        <div className="flex flex-col md:flex-row items-start max-md:items-center justify-center gap-10 md:gap-0 md:space-x-10 text-base md:text-xl">
          <div className="max-w-[35rem] lg:max-w-[43rem]">
            <Heading
              heading={heading}
              className="mb-6 mx-auto text-center md:mb-10 whitespace-pre-line"
            />
            {content && (
              <div className="mb-5">
                <PortableText value={content} />
              </div>
            )}
          </div>
          <div className="max-w-[25rem] w-full hidden md:block">
            <Illustration
              image={image}
              className="rounded-3xl"
              width={450}
              height={300}
            />
          </div>
          <div className="max-w-[35rem] w-full block md:hidden">
            <Illustration
              image={horizontalImage}
              className="rounded-3xl"
              width={450}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default MediaWithText;
