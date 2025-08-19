import React from "react";
import { Header } from "./header";
import { Footer } from "./footer";
import { Inter, PT_Sans_Caption } from "next/font/google";

interface LayoutProps {
  children: React.ReactNode;
}

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
});

const ptSansCaption = PT_Sans_Caption({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-sans",
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
      <Footer />
    </div>
  );
};
