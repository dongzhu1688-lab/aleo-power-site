import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DAKOLAS | Premium Mobile Phone Replacement Parts Supplier",
  description:
    "Shenzhen Dakolas Co., Ltd. supplies premium replacement parts for mobile phones, tablets and laptops, serving B2B buyers worldwide.",
  alternates: {
    canonical: "https://dakolas.com/"
  },
  openGraph: {
    title: "DAKOLAS | Premium Replacement Parts Supplier",
    description:
      "Mobile phone screens, batteries, tablet parts, laptop components and OEM/ODM manufacturing services.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
