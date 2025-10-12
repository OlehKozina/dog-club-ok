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
    <footer className="relative text-center py-8 bg-cover bg-center bg-no-repeat md:text-left md:hover:bg-brand-dark md:hover:bg-opacity-40 transition-all">
      <Icons icons={[{ name: "breadCut", position: "center" }]} />
      <FooterContainer footerContainer={footerContainer} />
      <FooterImages footerImages={footerImages} />
    </footer>
  );
}

export default Footer;
