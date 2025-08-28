import { Layout } from "@/components/layout";
import "@/styles/globals.css";
import { METADATA } from "@/utils";

export const metadata = METADATA;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
