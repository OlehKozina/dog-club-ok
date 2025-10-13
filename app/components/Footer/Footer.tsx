"use client";
import FooterImages from "./FooterImages";
import React from "react";
import FooterContainer from "./FooterContainer";
import { NavigationType } from "@/types";
import Icons from "../Icons";

function Footer({ footer }: { footer?: NavigationType }) {
  if (!footer) return null;
  const { footerImages, ...footerContainer } = footer;
  return (
    <footer
      className="relative text-center py-8 bg-cover bg-center bg-no-repeat md:text-left transition-all"
      style={{
        background: "linear-gradient(to top, #31261a, #4b3928)", // adjust second color as needed
      }}
    >
      <Icons icons={[{ name: "breadCut", position: "center" }]} />
      <FooterContainer footerContainer={footerContainer} />
      <FooterImages footerImages={footerImages} />
    </footer>
  );
}

export default Footer;
