import React from "react";
import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutStory } from "@/components/about/AboutStory";
import { AboutHighlights } from "@/components/about/AboutHighlights";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "About Us | 20+ Years Tailoring Legacy - Pramod Ladies Tailor",
  description:
    "Meet Master Tailor Parmod Sah & discover 20+ years of ladies tailoring excellence: bespoke bridal wear, designer blouses & perfect fitting in Chapra, Bihar.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/about`,
  },
  openGraph: {
    title: "About Us | Pramod Ladies Tailor - Chapra, Bihar",
    description:
      "20+ years of master ladies tailoring legacy in Chapra, Bihar by Parmod Sah. Bespoke bridal wear & designer blouses.",
    url: `${siteConfig.siteUrl}/about`,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, type: "image/jpeg", alt: "About Pramod Ladies Tailor" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Pramod Ladies Tailor",
    description: "20+ years of trusted ladies tailoring excellence in Chapra, Bihar.",
    images: ["/og-image.jpg"],
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
