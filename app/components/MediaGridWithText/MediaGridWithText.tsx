"use client";
import React from "react";
import Image from "next/image";
import Heading from "../Heading";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export interface MediaGridWithTextProps {
  _id: string;
  heading?: string;
  videoUrl?: string;
  image?: string;
  text?: string;
}

const MediaGridWithText = ({
  heading,
  _id,
  videoUrl,
  image,
  text,
}: MediaGridWithTextProps) => {
  const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: true });
  return (
    <section
      className="container relative p-7 sm:p-14 max-md:scroll-mt-16 scroll-mt-24"
      id="baking"
    >
      {heading && (
        <Heading
          className="text-3xl font-bold text-left whitespace-pre-line absolute max-sm:-top-2 top-5 md:top-0 left-10 sm:left-20 z-above-content"
          heading={heading}
        />
      )}

      <div
        ref={ref}
        className="grid w-full max-w-full grid-cols-12 grid-rows-[4rem_4rem_4rem_3rem_0rem_auto] md:grid-rows-[8rem_8rem_8rem_6rem_4rem_auto] gap-x-6 relative"
      >
        {videoUrl && (
          <div className="col-start-1 col-end-8 row-start-1 row-end-4 z-content rounded-3xl overflow-hidden shadow-lg">
            <motion.video
              src={videoUrl}
              initial="initial"
              transition={{ duration: 0.5, ease: "easeOut" }}
              animate={inView ? "animate" : "initial"}
              variants={{
                initial: { opacity: 0.5 },
                animate: { opacity: 1 },
              }}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="w-full h-full object-cover"
            />
          </div>
        )}
        {image && (
          <div className="col-start-6 col-end-13 row-start-3 row-end-7 z-base overflow-hidden shadow-lg">
            <Image
              src={image}
              alt="products"
              width={626}
              height={414}
              className="object-cover rounded-3xl"
            />
          </div>
        )}
        {text && (
          <div className="col-start-1 col-end-12 row-start-7 sm:col-end-6 sm:row-start-5 md:row-start-4 z-content flex items-end p-2 sm:p-4 sm:pt-8">
            <p className="md:text-xl mb-0">{text}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default MediaGridWithText;
