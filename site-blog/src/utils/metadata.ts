import { Metadata } from "next";

export const METADATA: Metadata = {
  title: "Site.Set",
  description: "Venda seus produtos como afiliado em um único lugar",
  robots: "index, follow",
  openGraph: {
    title: "Site.Set",
    description: "Venda seus produtos como afiliado em um único lugar",
    url: "http://localhost:3000/og-image.png",
    siteName: "Site.Set",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "http://localhost:3000/og-image.png",
        width: 800,
        height: 600,
        alt: "Site.Set",
      },
    ],
  },
};
