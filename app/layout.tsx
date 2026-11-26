import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { TopBar } from "@/components/layout/TopBar";
import { Navbar } from "@/components/layout/Navbar";
import { PreFooter } from "@/components/layout/PreFooter";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { siteConfig } from "@/data/siteConfig";

const gaMeasurementId = process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX";

export const viewport: Viewport = {
  themeColor: "#6E0D25",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "Pramod Ladies Tailor | Best Tailor in Chapra, Bihar",
    template: `%s | ${siteConfig.name}`,
  },
  // 150 characters — ideal for Google search snippet (150-160 max)
  description:
    "Pramod Ladies Tailor in Chapra, Bihar. 20+ years of expert stitching: designer blouses, bridal lehengas, kurtis, suits, gowns & custom alterations.",
  applicationName: siteConfig.name,
  category: "fashion",
  keywords: [
    "Ladies tailor in Chapra",
    "Best ladies tailor Chapra Bihar",
    "Pramod Ladies Tailor",
    "Parmod Sah tailor Chapra",
    "Blouse stitching Chapra",
    "Designer blouse tailor Chapra",
    "Bridal lehenga stitching Chapra",
    "Kurti and suit tailor Chapra",
    "Ladies boutique Chapra",
    "Tailoring shop near me Chapra",
    "Saree fall pico Chapra",
    "Ladies alteration Chapra",
    "Custom women tailoring Bihar 841301",
  ],
  authors: [
    { name: siteConfig.founder },
    { name: siteConfig.name, url: siteConfig.siteUrl },
  ],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  alternates: {
    canonical: siteConfig.siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    title: "Pramod Ladies Tailor | Best Tailor in Chapra, Bihar",
    // 118 characters — ideal for social previews (<125 chars mobile limit)
    description:
      "Expert ladies tailoring in Chapra, Bihar. Custom designer blouses, bridal lehengas, kurtis, suits & perfect fittings.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: `${siteConfig.name} - Best Ladies Tailor in Chapra, Bihar`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pramod Ladies Tailor | Best Tailor in Chapra",
    description:
      "20+ years of bespoke ladies tailoring in Chapra, Bihar. Designer blouses, bridal lehengas, kurtis & suits.",
    images: ["/og-image.jpg"],
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
  other: {
    "geo.region": "IN-BR",
    "geo.placename": `${siteConfig.city}, ${siteConfig.state}`,
    "geo.position": `${siteConfig.geo.latitude};${siteConfig.geo.longitude}`,
    ICBM: `${siteConfig.geo.latitude}, ${siteConfig.geo.longitude}`,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/assets/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "ProfessionalService", "ClothingStore"],
        "@id": `${siteConfig.siteUrl}/#business`,
        name: siteConfig.name,
        alternateName: `${siteConfig.name} ${siteConfig.subtitle}`,
        description:
          "Pramod Ladies Tailor by Parmod Sah offers expert ladies garment stitching, kurti, lehenga, blouse, palazzo, and custom bridal wear with 20+ years of experience in Chapra, Bihar.",
        url: siteConfig.siteUrl,
        telephone: siteConfig.phoneDisplay,
        email: siteConfig.email,
        priceRange: "₹₹",
        currenciesAccepted: "INR",
        paymentAccepted: "Cash, UPI",
        hasMap: siteConfig.mapsDirectionsUrl,
        founder: {
          "@type": "Person",
          name: siteConfig.founder,
          jobTitle: "Master Ladies Tailor",
        },
        areaServed: [
          { "@type": "City", name: "Chapra" },
          { "@type": "AdministrativeArea", name: "Saran" },
          { "@type": "State", name: "Bihar" },
        ],
        knowsAbout: [
          "Blouse Stitching",
          "Bridal Lehenga Stitching",
          "Kurti & Suit Stitching",
          "Anarkali Suits",
          "Palazzo & Pants",
          "Saree Fall & Pico",
          "Ladies Garment Alterations",
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.address,
          addressLocality: siteConfig.city,
          addressRegion: siteConfig.state,
          postalCode: siteConfig.pincode,
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: siteConfig.geo.latitude,
          longitude: siteConfig.geo.longitude,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            opens: "09:00",
            closes: "20:00",
          },
        ],
        image: `${siteConfig.siteUrl}/og-image.jpg`,
        logo: `${siteConfig.siteUrl}/assets/logo.jpg`,
        sameAs: [
          siteConfig.socials.instagram,
          siteConfig.whatsappUrl,
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "165",
          bestRating: "5",
          worstRating: "1",
        },
        review: [
          {
            "@type": "Review",
            author: { "@type": "Person", name: "Neha Singh" },
            reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
            reviewBody:
              "Very professional work and perfect fitting. Highly recommended!",
          },
          {
            "@type": "Review",
            author: { "@type": "Person", name: "Pooja Kumari" },
            reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
            reviewBody:
              "Amazing stitching and on-time delivery. Thank you, Sah Studio!",
          },
          {
            "@type": "Review",
            author: { "@type": "Person", name: "Rita Devi" },
            reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
            reviewBody:
              "Beautiful designs and great service. I am fully satisfied.",
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.siteUrl}/#website`,
        url: siteConfig.siteUrl,
        name: siteConfig.name,
        description:
          "Complete Ladies Tailoring Solutions in Chapra, Bihar by Master Tailor Parmod Sah.",
        publisher: {
          "@id": `${siteConfig.siteUrl}/#business`,
        },
        inLanguage: "en-IN",
      },
    ],
  };

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
      <body
        className="min-h-full flex flex-col font-sans bg-[#FCF8F4] text-[#2C2420] antialiased"
        suppressHydrationWarning
      >
        <TopBar />
        <Navbar />
        <main className="flex-1">{children}</main>
        <PreFooter />
        <Footer />
        <FloatingWhatsApp />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
          strategy="afterInteractive"
        />
        <Script
          id="ga-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaMeasurementId}');
            `,
          }}
        />
      </body>
    </html>
  );
}
