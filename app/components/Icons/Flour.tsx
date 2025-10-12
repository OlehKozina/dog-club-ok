import React from "react";
import clsx from "clsx";

const Flour = ({ className }: { className?: string }) => {
  return (
    <>
      <img
        src="/flour.png"
        alt="Flour"
        className={clsx("opacity-20 z-under", className)}
      />
    </>
  );
};

export default Flour;
