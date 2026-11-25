import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/ui/Icons";

export function ServicesHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#FAF3EC] border-b border-[#EADAC9] min-h-[300px] sm:min-h-[340px] md:min-h-[380px] lg:min-h-[420px] flex items-center">
      {/* Full-width background image with mobile readability overlay */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/assets/services-hero-banner.webp"
          alt="Complete Ladies Tailoring Solutions by Pramod Ladies Tailor"
          fill
          priority
          className="object-cover object-right md:object-center"
        />
        {/* Mobile-only overlay: visible on mobile phones for text readability, completely hidden on tablet and desktop */}
        <div className="block sm:hidden absolute inset-0 bg-gradient-to-r from-[#FAF3EC]/95 via-[#FAF3EC]/85 to-[#FAF3EC]/60 pointer-events-none" />
      </div>

      {/* Content Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 py-6 sm:py-8">
        <div className="max-w-xl flex flex-col justify-center">
          {/* Top Ornate Tag */}
          <div className="flex items-center gap-1.5 self-start select-none">
            <span className="w-6 h-[1.5px] bg-[#B37943]" />
            <span className="text-[#6E0D25] text-xs">❖</span>
            <span className="text-[#6E0D25] font-serif-display font-semibold text-xs tracking-wider uppercase">
              Our Services
            </span>
            <span className="text-[#6E0D25] text-xs">❖</span>
            <span className="w-6 h-[1.5px] bg-[#B37943]" />
          </div>

          {/* Main Headline */}
          <h1 className="font-serif-display font-extrabold text-[#6E0D25] text-3xl sm:text-4xl md:text-5xl lg:text-[52px] mt-2 tracking-tight leading-tight">
            Complete Ladies
            <span className="block italic font-semibold text-2xl sm:text-3xl md:text-4xl mt-0.5">
              Tailoring Solutions
            </span>
          </h1>

          {/* Description */}
          <p className="text-[#4E3F3B] text-xs sm:text-sm md:text-base leading-relaxed max-w-sm sm:max-w-md mt-2">
            From traditional elegance to modern trends, we stitch your style with perfection.
          </p>

          {/* CTA Button */}
          <div className="mt-4">
            <Link
              href="/#query-section"
              className="inline-flex items-center gap-2 bg-[#6E0D25] hover:bg-[#52081B] text-white text-xs sm:text-sm font-semibold px-6 py-2.5 rounded-full shadow-md hover:shadow-lg transition-transform hover:scale-[1.02]"
            >
              <span>Get Your Query Now</span>
              <ArrowRightIcon className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
