import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FloralDivider } from "@/components/ui/FloralDivider";

export function AboutHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#FAF3EC] border-b border-[#EADAC9] min-h-[200px] sm:min-h-[220px] md:min-h-[240px] flex items-center">
      {/* Background image with mobile readability overlay */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/assets/about-hero-banner.webp"
          alt="About Pramod Ladies Tailor"
          fill
          priority
          className="object-cover object-right md:object-center"
        />
        {/* Mobile-only overlay: visible on mobile phones for text readability, completely hidden on tablet and desktop */}
        <div className="block sm:hidden absolute inset-0 bg-gradient-to-r from-[#FAF3EC]/95 via-[#FAF3EC]/85 to-[#FAF3EC]/60 pointer-events-none" />
      </div>

      {/* Content Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 py-6 sm:py-8">
        <div className="max-w-xl">
          <h1 className="font-serif-display font-extrabold text-[#6E0D25] text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight">
            About Us
          </h1>

          <p className="font-serif-display italic text-[#6E0D25] text-base sm:text-lg md:text-xl font-medium mt-1">
            Stitching Dreams, Creating Confidence
          </p>

          <FloralDivider className="my-2 self-start" />

          {/* Breadcrumb */}
          <div className="flex items-center gap-1.5 text-xs text-[#5C4F4B] font-medium mt-1">
            <Link href="/" className="hover:text-[#6E0D25] flex items-center gap-1">
              <span>🏠 Home</span>
            </Link>
            <span>&gt;</span>
            <span className="text-[#6E0D25] font-semibold">About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
}
