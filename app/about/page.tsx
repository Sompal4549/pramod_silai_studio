import React from "react";
import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutStory } from "@/components/about/AboutStory";
import { AboutHighlights } from "@/components/about/AboutHighlights";

export const metadata: Metadata = {
  title: "About Us | Pramod Ladies Tailor - 20+ Years Tailoring in Chapra, Bihar",
  description:
    "Meet Pramod Sah, founder of Pramod Ladies Tailor in Chapra, Bihar. Discover our 20+ years of dedication to perfect-fitting ladies suits, blouses, kurtis, and bridal wear.",
  alternates: {
    canonical: "https://pramodladiestailor.in/about",
  },
  openGraph: {
    title: "About Us | Pramod Ladies Tailor - 20+ Years Experience in Chapra",
    description:
      "Crafting beautiful ladies garments with perfect fitting and 20+ years of tailoring experience in Chapra, Bihar. Call +91 99399 96464.",
    url: "https://pramodladiestailor.in/about",
    images: ["/assets/about-hero-banner.webp"],
  },
};

export default function AboutPage() {
  return (
    <>
      {/* 1. About Us Hero Banner with Mobile Overlay */}
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
