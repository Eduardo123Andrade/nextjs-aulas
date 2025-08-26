import { Inter } from "next/font/google";
import React from "react";
import { Footer } from "./footer";
import { Header } from "./header";
import { CallToAction } from "./call-to-action";

interface LayoutProps {
  children: React.ReactNode;
}

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
});

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div
      className={`${inter.className} relative flex min-h-screen flex-col bg-gray-700`}
      // className={`${inter.className} ${ptSansCaption.className} relative flex min-h-screen flex-col bg-gray-700 font-inter`}
    >
      <Header />
      <main className="flex-1 flex flex-col pt-10 pb-12 bg-black">
        {children}
      </main>
      <CallToAction />
      <Footer />
    </div>
  );
};
