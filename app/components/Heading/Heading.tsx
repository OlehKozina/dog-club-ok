"use client";
import React from "react";
import { containerVariants, charVariants } from "../Hero/utils";
import clsx from "clsx";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

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
      {words.map((word, wordIndex) => {
        // Detect numbers inside the word
        const numberMatch = word.match(/\d+/);

        if (numberMatch) {
          const number = parseInt(numberMatch[0], 10);

          return (
            <motion.span
              key={wordIndex}
              variants={charVariants}
              className="text-brand-default inline-block mx-1"
            >
              <CountUp
                start={1}
                end={number}
                duration={2}
                enableScrollSpy
                scrollSpyOnce
              />
              {/* Keep suffix if number had one (like "1,200+" or "100%") */}
              {word.replace(numberMatch[0], "")}
            </motion.span>
          );
        }

        // Default: animate word by characters
        return (
          <span key={wordIndex} className="inline-block mx-1">
            {word.split("").map((char, charIndex) => (
              <motion.span
                key={`${wordIndex}-${charIndex}`}
                variants={charVariants}
                className=""
              >
                {char}
              </motion.span>
            ))}
          </span>
        );
      })}
    </motion.h2>
  );
};

export default Heading;
