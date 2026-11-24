import React from "react";
import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutStory } from "@/components/about/AboutStory";
import { AboutHighlights } from "@/components/about/AboutHighlights";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "About Us | 20+ Years Tailoring Legacy - Sajni Silai Studio",
  description:
    "Meet Master Tailor Parmod Sah and learn about Sajni Silai Studio's 20+ year legacy in bespoke ladies tailoring, bridal wear, and precision fitting in Chapra, Bihar.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/about`,
  },
  openGraph: {
    title: "About Sajni Silai Studio | 20+ Years Legacy in Chapra, Bihar",
    description:
      "Crafting elegance and perfect fits since 2004. Discover the story and master craftsmanship of Parmod Sah.",
    url: `${siteConfig.siteUrl}/about`,
    images: [{ url: "/assets/about-hero-banner.webp", width: 1200, height: 630, alt: "About Sajni Silai Studio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Sajni Silai Studio",
    description: "20+ years of trust & tailored excellence in Chapra, Bihar.",
    images: ["/assets/about-hero-banner.webp"],
  },
};

export default function AboutPage() {
  return (
    <>
      {/* 1. About Us Hero Banner (Full Width, No Overlay) */}
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
