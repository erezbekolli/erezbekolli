import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { GoogleAnalytics } from "@/components/analytics";

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
    default: "Erëz Bekolli | Architecture Portfolio | Architectural Design & Visualization",
    template: "%s | Erëz Bekolli"
  },
  description:
    "Architecture portfolio of Erëz Bekolli, showcasing architectural design, visualization, research, and creative projects including residential, hospitality, cultural heritage, and conceptual architecture.",
  alternates: {
    canonical: "/"
  },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png", sizes: "1010x1010" }]
  },
  keywords: [
    "Erëz Bekolli",
    "architecture portfolio",
    "architectural design",
    "architectural visualization",
    "architecture research",
    "BIM",
    "adaptive reuse",
    "cultural heritage",
    "contextual design",
    "Kosovo architect"
  ],
  openGraph: {
    title: "Erëz Bekolli | Architecture Portfolio | Architectural Design & Visualization",
    description:
      "Architecture portfolio showcasing design, visualization, research, and creative projects across residential, hospitality, cultural heritage, and conceptual architecture.",
    url: "/",
    siteName: "Erëz Bekolli Architecture Portfolio",
    type: "website",
    images: [
      {
        url: "/images/hero-monograph.jpg",
        width: 2000,
        height: 1320,
        alt: "Erëz Bekolli architecture portfolio preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Erëz Bekolli | Architecture Portfolio",
    description:
      "Architectural design, visualization, research, and creative project portfolio by Erëz Bekolli.",
    images: ["/images/hero-monograph.jpg"]
  },
  robots: {
    index: true,
    follow: true
  }
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://erez-bekolli.vercel.app/#person",
      name: "Erëz Bekolli",
      jobTitle: "Architect",
      url: "https://erez-bekolli.vercel.app",
      image: "https://erez-bekolli.vercel.app/images/about/PROFILE.JPG",
      email: "mailto:erezbekolli@gmail.com",
      telephone: "+38349469507",
      sameAs: ["https://www.linkedin.com/in/er%C3%ABz-bekolli-0127482a1"],
      hasOccupation: {
        "@type": "Occupation",
        name: "Architect",
        skills:
          "Architectural design, architectural visualization, BIM, technical documentation, heritage research, digital design, web design"
      },
      description:
        "Erëz Bekolli is an architect specializing in architectural design, visualization, research, and digital workflows."
    },
    {
      "@type": "WebSite",
      "@id": "https://erez-bekolli.vercel.app/#website",
      name: "Erëz Bekolli Architecture Portfolio",
      url: "https://erez-bekolli.vercel.app",
      publisher: {
        "@id": "https://erez-bekolli.vercel.app/#person"
      },
      description:
        "Architecture portfolio of Erëz Bekolli, showcasing architectural design, visualization, research, and creative projects."
    }
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sans.variable} ${serif.variable} min-h-screen font-sans antialiased`}>
        <GoogleAnalytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
