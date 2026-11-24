import React from "react";
import Image from "next/image";
import { ArrowRightIcon } from "@/components/ui/Icons";
import { FloralDivider } from "@/components/ui/FloralDivider";

export function HomeHero() {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-[#FAF3EC] border-b border-[#EADAC9] min-h-[340px] sm:min-h-[380px] md:min-h-[420px] lg:min-h-[460px] flex items-center"
    >
      {/* Full-width background image with mobile readability overlay */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/assets/hero-banner.webp"
          alt="Ladies Tailoring by Pramod Ladies Tailor"
          fill
          priority
          className="object-cover object-right md:object-center"
        />
        {/* Mobile-only overlay: visible on mobile phones for text readability, completely hidden on tablet and desktop */}
        <div className="block sm:hidden absolute inset-0 bg-gradient-to-r from-[#FAF3EC]/95 via-[#FAF3EC]/85 to-[#FAF3EC]/60 pointer-events-none" />
      </div>

      {/* Content Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 py-8 sm:py-10">
        <div className="max-w-xl flex flex-col justify-center">
          {/* Experience Badge */}
          <div className="inline-flex items-center self-start">
            <span className="bg-[#6E0D25] text-white text-[11px] sm:text-xs font-semibold px-3.5 sm:px-4 py-1 rounded-full shadow-xs">
              Since 20+ Years of Experience
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif-display font-bold text-[#6E0D25] text-3xl sm:text-4xl md:text-5xl lg:text-[52px] mt-2 tracking-tight leading-tight">
            Pramod Ladies Tailor
          </h1>

          {/* Subheading */}
          <h2 className="font-serif-display italic text-[#6E0D25] text-base sm:text-lg md:text-xl lg:text-2xl font-medium mt-1">
            Your Trusted Partner for Ladies Garment Stitching
          </h2>

          {/* Description */}
          <p className="text-[#4E3F3B] text-xs sm:text-sm md:text-base leading-relaxed max-w-sm sm:max-w-md mt-2">
            From our hometown Chapra, Bihar, now bringing our expert tailoring services to you online.
          </p>

          {/* Small Ornate Divider */}
          <div className="self-start">
            <FloralDivider className="my-2.5" />
          </div>

          {/* CTA Button */}
          <div className="mt-1">
            <a
              href="#query-section"
              className="inline-flex items-center gap-2 bg-[#6E0D25] hover:bg-[#52081B] text-white text-xs sm:text-sm font-semibold px-6 py-2.5 rounded-full shadow-md hover:shadow-lg transition-transform hover:scale-[1.02]"
            >
              <span>Get Your Query Now</span>
              <ArrowRightIcon className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
