import React from "react";
import type { Metadata } from "next";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { WhyChooseUs } from "@/components/ui/WhyChooseUs";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Ladies Tailoring Services | Blouse, Kurti, Lehenga, Gowns - Chapra",
  description:
    "Explore 12+ expert tailoring services at Pramod Ladies Tailor in Chapra: custom designer blouse, bridal lehenga, kurti & suit stitching, palazzo & gowns.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/services`,
  },
  openGraph: {
    title: "Ladies Tailoring Services | Pramod Ladies Tailor Chapra",
    description:
      "Expert stitching for designer blouses, suits, bridal lehengas, and western wear in Chapra, Bihar.",
    url: `${siteConfig.siteUrl}/services`,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, type: "image/jpeg", alt: "Pramod Ladies Tailor Services" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ladies Tailoring Services | Pramod Ladies Tailor",
    description: "12+ specialized ladies tailoring services in Chapra, Bihar.",
    images: ["/og-image.jpg"],
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* 1. Services Hero Banner (Full Width, No Overlay) */}
      <ServicesHero />

      {/* 2. 12 Services Grid */}
      <ServicesGrid />

      {/* 3. Reusable Why Choose Us 5 Pillars */}
      <WhyChooseUs className="py-4 sm:py-6" />
    </>
  );
}
