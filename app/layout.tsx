import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Background from "./components/Background";
import { getHeader, getFooter } from "@/sanity/sanity-utils";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "900"],
});

export const metadata: Metadata = {
  description: "Website for a local bakery",
  title: "Bakery website",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [header, footer] = await Promise.all([getHeader(), getFooter()]);
  console.log("header", header);
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header header={header} />
        <Background> {children}</Background>
        <Footer footer={footer} />
      </body>
    </html>
  );
}
