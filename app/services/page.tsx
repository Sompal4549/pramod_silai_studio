import React from "react";
import type { Metadata } from "next";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { WhyChooseUs } from "@/components/ui/WhyChooseUs";

export const metadata: Metadata = {
  title: "Ladies Tailoring Services | Blouse, Suit, Lehenga & Kurti in Chapra",
  description:
    "Explore our complete range of ladies tailoring services in Chapra: custom blouse stitching, designer suits, lehengas, kurtis, anarkalis, bridal wear, and expert alteration. Call +91 99399 96464.",
  alternates: {
    canonical: "https://pramodladiestailor.in/services",
  },
  openGraph: {
    title: "Complete Ladies Tailoring Services in Chapra | Pramod Ladies Tailor",
    description:
      "Expert stitching for blouse, suit, kurti, lehenga, anarkali and custom bridal garments in Chapra, Bihar.",
    url: "https://pramodladiestailor.in/services",
    images: ["/assets/services-hero-banner.webp"],
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* 1. Services Hero Banner */}
      <ServicesHero />

      {/* 2. 12 Services Grid */}
      <ServicesGrid />

      {/* 3. Reusable Why Choose Us 5 Pillars */}
      <WhyChooseUs className="py-4 sm:py-6" />
    </>
  );
}
