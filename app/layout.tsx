import type { Metadata } from "next";
import "./globals.css";
import { TopBar } from "@/components/layout/TopBar";
import { Navbar } from "@/components/layout/Navbar";
import { PreFooter } from "@/components/layout/PreFooter";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { siteConfig } from "@/data/siteConfig";

const siteUrl = "https://pramodladiestailor.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Pramod Ladies Tailor | Best Ladies Tailoring & Stitching in Chapra, Bihar",
    template: "%s | Pramod Ladies Tailor",
  },
  description:
    "With 20+ years of expertise, Pramod Ladies Tailor by Pramod Sah in Chapra, Bihar offers top-quality stitching for designer blouses, suits, lehengas, kurtis, bridal wear & alterations. Call +91 99399 96464 / +91 95703 57272.",
  keywords: [
    "Pramod Ladies Tailor",
    "Pramod Ladies Tailor Chapra",
    "ladies tailor in Chapra",
    "best ladies tailor in Chapra Bihar",
    "blouse stitching in Chapra",
    "designer suit tailor Chapra",
    "lehenga stitching Chapra",
    "kurti stitching Chapra",
    "bridal wear tailoring Chapra",
    "ladies boutique in Chapra",
    "Pramod Sah tailor",
    "custom ladies tailoring Bihar",
    "perfect fitting ladies tailor",
  ],
  authors: [{ name: "Pramod Sah", url: siteUrl }],
  creator: "Pramod Sah",
  publisher: "Pramod Ladies Tailor",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Pramod Ladies Tailor | Best Ladies Tailoring & Stitching in Chapra, Bihar",
    description:
      "20+ years of trusted ladies tailoring in Chapra, Bihar. Expert stitching for designer blouses, suits, lehengas, kurtis & bridal wear. Call +91 99399 96464.",
    url: siteUrl,
    siteName: "Pramod Ladies Tailor",
    images: [
      {
        url: "/assets/hero-banner.webp",
        width: 1200,
        height: 630,
        alt: "Pramod Ladies Tailor Chapra Bihar",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pramod Ladies Tailor | Best Ladies Tailoring in Chapra, Bihar",
    description:
      "Expert stitching for designer blouses, suits, lehengas, kurtis & bridal wear in Chapra. Call +91 99399 96464.",
    images: ["/assets/hero-banner.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Pramod Ladies Tailor",
  image: `${siteUrl}/assets/logo.jpg`,
  description:
    "With over 20 years of experience, Pramod Ladies Tailor in Chapra, Bihar provides expert custom stitching for ladies garments including blouses, suits, kurtis, lehengas and bridal wear.",
  url: siteUrl,
  telephone: ["+91-9939996464", "+91-9570357272"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Main Market",
    addressLocality: "Chapra",
    addressRegion: "Bihar",
    postalCode: "841301",
    addressCountry: "IN",
  },
  founder: {
    "@type": "Person",
    name: "Pramod Sah",
  },
  priceRange: "₹₹",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "20:00",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Alex+Brush&family=Cinzel:wght@600;700;800;900&family=Playfair+Display:ital,wght@0,500;0,600;0,700;0,800;1,400;1,600;1,700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-[#FCF8F4] text-[#2C2420] antialiased" suppressHydrationWarning>
        <TopBar />
        <Navbar />
        <main className="flex-1">{children}</main>
        <PreFooter />
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
