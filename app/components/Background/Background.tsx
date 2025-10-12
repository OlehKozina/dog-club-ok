import React from "react";
import { Flour } from "../Icons";

export default function Background({
  children,
}: {
  children: React.ReactNode;
}) {
  const flours = [
    { position: "left-1/4 bottom-0" },
    { position: "right-1/4 top-0" },
  ];

  return (
    <div className="relative overflow-hidden -mt-[--header-height]">
      {flours.map((flour, index) => (
        <Flour
          key={index}
          className={`pointer-events-none fixed w-[25rem] opacity-20 z-under ${flour.position}`}
        />
      ))}
      {children}
    </div>
  );
}
