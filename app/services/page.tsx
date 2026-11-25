import React from "react";
import type { Metadata } from "next";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { WhyChooseUs } from "@/components/ui/WhyChooseUs";
import { allServices } from "@/data/servicesData";
import { siteConfig } from "@/data/siteConfig";

const pageUrl = `${siteConfig.siteUrl}/services`;

export const metadata: Metadata = {
  title: "Ladies Tailoring Services in Chapra",
  description:
    "Explore 12+ expert tailoring services at Pramod Ladies Tailor in Chapra: designer blouse, bridal lehenga, kurti & suit stitching, palazzo & gowns.",
  keywords: [
    "Ladies tailoring services Chapra",
    "Blouse stitching Chapra",
    "Bridal lehenga tailor Chapra",
    "Kurti suit stitching Bihar",
    "Garment alterations Chapra",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: siteConfig.name,
    title: "Ladies Tailoring Services | Pramod Ladies Tailor Chapra",
    description:
      "Expert stitching for designer blouses, suits, bridal lehengas, and western wear in Chapra, Bihar.",
    url: pageUrl,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Pramod Ladies Tailor Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ladies Tailoring Services | Pramod Ladies Tailor",
    description: "12+ specialized ladies tailoring services in Chapra, Bihar.",
    images: ["/og-image.jpg"],
  },
};

export default function ServicesPage() {
  const servicesSchemas = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        url: pageUrl,
        name: "Ladies Tailoring Services in Chapra",
        description:
          "Complete list of 12 specialized ladies tailoring services crafted at Pramod Ladies Tailor.",
        mainEntity: {
          "@type": "ItemList",
          itemListElement: allServices.map((svc, idx) => ({
            "@type": "ListItem",
            position: idx + 1,
            name: svc.title,
            url: `${siteConfig.siteUrl}/services/${svc.id}`,
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.siteUrl },
          { "@type": "ListItem", position: 2, name: "Services", item: pageUrl },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchemas) }}
      />
      {/* 1. Services Hero Banner */}
      <ServicesHero />

      {/* 2. 12 Services Grid */}
      <ServicesGrid />

      {/* 3. Reusable Why Choose Us 5 Pillars */}
      <WhyChooseUs className="py-4 sm:py-6" />
    </>
  );
}
