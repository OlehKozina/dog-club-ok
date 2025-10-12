"use client";
import React from "react";
import {
  getHeadingParts,
  containerVariants,
  charVariants,
} from "../Hero/utils";
import clsx from "clsx";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Heading = ({
  heading,
  className,
}: {
  heading?: string;
  className?: string;
}) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  if (!heading) return null;
  const words = heading.split(" ");
  const lastTwoWords = words.slice(-2).join(" ");
  const fullText = heading.split(""); // keep character array for animation
  const lastTwoChars = lastTwoWords.length;
  const lastTwoStartIndex = fullText.length - lastTwoChars;

  return (
    <motion.h2
      ref={ref}
      variants={containerVariants}
      initial="initial"
      animate={inView ? "animate" : "initial"}
      className={clsx(
        "font-extrabold leading-tight text-3xl md:text-6xl",
        className
      )}
    >
      {fullText.map((char, index) => {
        const isLastTwoWordsChar = index >= lastTwoStartIndex;
        return (
          <motion.span
            key={index}
            variants={charVariants}
            className={isLastTwoWordsChar ? "text-brand-default" : ""}
          >
            {char}
          </motion.span>
        );
      })}
    </motion.h2>
  );
};

export default Heading;
