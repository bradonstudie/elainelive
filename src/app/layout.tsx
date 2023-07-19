import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "elaine elaine live",
  description: "elaine elaine is a band",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
