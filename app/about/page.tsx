import React from "react";
import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutStory } from "@/components/about/AboutStory";
import { AboutHighlights } from "@/components/about/AboutHighlights";
import { siteConfig } from "@/data/siteConfig";

const pageUrl = `${siteConfig.siteUrl}/about`;

export const metadata: Metadata = {
  title: "About Us – 20+ Years Tailoring Legacy",
  description:
    "Meet Master Tailor Parmod Sah & discover 20+ years of ladies tailoring excellence: bridal wear, designer blouses & perfect fitting in Chapra, Bihar.",
  keywords: [
    "Parmod Sah Tailor Chapra",
    "About Pramod Ladies Tailor",
    "Master Ladies Tailor Bihar",
    "Experienced Tailor in Chapra",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: siteConfig.name,
    title: "About Us | Pramod Ladies Tailor – Chapra, Bihar",
    description:
      "20+ years of master ladies tailoring legacy in Chapra, Bihar by Parmod Sah. Bespoke bridal wear & blouses.",
    url: pageUrl,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "About Pramod Ladies Tailor - Parmod Sah",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Pramod Ladies Tailor",
    description:
      "20+ years of trusted ladies tailoring excellence in Chapra, Bihar by Master Tailor Parmod Sah.",
    images: ["/og-image.jpg"],
  },
};

export default function AboutPage() {
  const aboutSchemas = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        url: pageUrl,
        name: "About Pramod Ladies Tailor",
        description:
          "History and 20+ year bespoke tailoring journey of Master Tailor Parmod Sah in Chapra, Bihar.",
        mainEntity: {
          "@id": `${siteConfig.siteUrl}/#business`,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.siteUrl },
          { "@type": "ListItem", position: 2, name: "About Us", item: pageUrl },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchemas) }}
      />
      {/* 1. About Us Hero Banner */}
      <AboutHero />

      {/* 2. Our Story Section & Highlights */}
      <section className="py-6 sm:py-8 bg-[#FCF8F4]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <AboutStory />
          <AboutHighlights />
        </div>
      </section>
    </>
  );
}
