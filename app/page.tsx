import React from "react";
import type { Metadata } from "next";
import { HomePageClient } from "@/components/home/HomePageClient";
import { homeFaqs } from "@/components/home/HomeFaq";
import { allServices } from "@/data/servicesData";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: {
    absolute: "Pramod Ladies Tailor | Best Tailor in Chapra, Bihar",
  },
  description:
    "Pramod Ladies Tailor in Chapra, Bihar. 20+ years of expert stitching: designer blouses, bridal lehengas, kurtis, suits, gowns & custom alterations.",
  alternates: {
    canonical: siteConfig.siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    title: "Pramod Ladies Tailor | Best Tailor in Chapra, Bihar",
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
};

export default function HomePage() {
  const homeSchemas = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        mainEntity: homeFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
      {
        "@type": "OfferCatalog",
        name: "Ladies Tailoring & Stitching Services",
        url: `${siteConfig.siteUrl}/services`,
        itemListElement: allServices.map((svc, idx) => ({
          "@type": "Offer",
          position: idx + 1,
          itemOffered: {
            "@type": "Service",
            name: svc.title,
            description: svc.seoDescription,
            url: `${siteConfig.siteUrl}/services/${svc.id}`,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteConfig.siteUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchemas) }}
      />
      <HomePageClient />
    </>
  );
}
