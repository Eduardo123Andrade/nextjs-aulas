import React from "react";
import { Header } from "../header";
import { Footer } from "../footer";
import { Inter } from "next/font/google";

interface LayoutProps {
  children: React.ReactNode;
}

const inter = Inter({ subsets: ["latin"] });

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div
      className={`${inter.className} relative flex min-h-screen flex-col dark`}
    >
      <Header />
      <main className="flex-1 flex flex-col pb-12 bg-black">{children}</main>
      <Footer />
    </div>
  );
};
