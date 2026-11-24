import React from "react";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutStory } from "@/components/about/AboutStory";
import { AboutHighlights } from "@/components/about/AboutHighlights";
import { AboutTeam } from "@/components/about/AboutTeam";

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

      {/* 3. Our Team & Why Choose Us */}
      <AboutTeam />
    </>
  );
}
