import React from "react";
import type { Metadata } from "next";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { WhyChooseUs } from "@/components/ui/WhyChooseUs";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Ladies Tailoring Services | Blouse, Kurti, Lehenga, Gowns - Chapra",
  description:
    "Explore 12+ expert tailoring services at Sajni Silai Studio in Chapra: custom designer blouse, bridal lehenga, kurti & suit stitching, palazzo pants, gowns & urgent alterations.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/services`,
  },
  openGraph: {
    title: "Ladies Tailoring Services | Sajni Silai Studio Chapra",
    description:
      "Expert stitching for designer blouses, suits, bridal lehengas, and western wear in Chapra, Bihar.",
    url: `${siteConfig.siteUrl}/services`,
    images: [{ url: "/assets/services-hero-banner.webp", width: 1200, height: 630, alt: "Sajni Silai Studio Services" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ladies Tailoring Services | Sajni Silai Studio",
    description: "12+ specialized ladies tailoring services in Chapra, Bihar.",
    images: ["/assets/services-hero-banner.webp"],
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
