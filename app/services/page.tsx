import React from "react";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { WhyChooseUs } from "@/components/ui/WhyChooseUs";

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
