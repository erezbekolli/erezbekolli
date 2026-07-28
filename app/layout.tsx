import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500"],
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://erez-bekolli.vercel.app"),
  title: {
    default: "Erëz Bekolli | Architect & Architectural Visualizer",
    template: "%s | Erëz Bekolli"
  },
  description:
    "Architecture portfolio of Erëz Bekolli, featuring architectural design, visualization, adaptive reuse, cultural heritage, and contextual design projects.",
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png", sizes: "1010x1010" }]
  },
  keywords: [
    "Erëz Bekolli",
    "architecture portfolio",
    "architectural visualization",
    "adaptive reuse",
    "cultural heritage",
    "contextual design"
  ],
  openGraph: {
    title: "Erëz Bekolli | Architect & Architectural Visualizer",
    description:
      "Architecture and visualization portfolio exploring context, cultural heritage, adaptive reuse, and contemporary architectural design.",
    type: "website",
    images: ["/images/hero-monograph.jpg"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sans.variable} ${serif.variable} min-h-screen font-sans antialiased`}>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
