import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/ui/Icons";
import type { ServiceItem } from "@/data/servicesData";

interface ServiceDetailHeroProps {
  service: ServiceItem;
}

export function ServiceDetailHero({ service }: ServiceDetailHeroProps) {
  return (
    <section className="relative w-full overflow-hidden bg-[#FAF3EC] border-b border-[#EADAC9] min-h-[300px] sm:min-h-[340px] md:min-h-[380px] flex items-center">
      {/* Right-anchored studio photography fading gracefully into the warm ivory canvas */}
      <div className="absolute inset-0 w-full h-full">
        <div className="relative w-full h-full md:w-[68%] md:ml-auto">
          <Image
            src={service.image}
            alt={service.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 68vw"
            style={service.objectPosition ? { objectPosition: service.objectPosition } : undefined}
            className="object-cover object-center"
          />
          {/* Soft blend from left edge of photo into canvas */}
          <div className="hidden md:block absolute inset-y-0 left-0 w-44 bg-gradient-to-r from-[#FAF3EC] via-[#FAF3EC]/70 to-transparent pointer-events-none" />
        </div>
        {/* Mobile & left backdrop overlay for clear readable serif typography */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF3EC] via-[#FAF3EC]/90 md:via-[#FAF3EC]/75 to-transparent pointer-events-none md:w-[65%]" />
      </div>

      {/* Content Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 py-6 sm:py-8">
        <div className="max-w-lg flex flex-col justify-center">
          {/* Top Ornate Breadcrumb / Tag */}
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 self-start select-none group"
          >
            <span className="w-6 h-[1.5px] bg-[#B37943]" />
            <span className="text-[#6E0D25] text-xs">❖</span>
            <span className="text-[#6E0D25] font-serif-display font-semibold text-xs tracking-wider uppercase group-hover:underline">
              Our Services
            </span>
            <span className="text-[#6E0D25] text-xs">❖</span>
            <span className="w-6 h-[1.5px] bg-[#B37943]" />
          </Link>

          {/* Main H1 Title */}
          <h1 className="font-serif-display font-bold text-[#6E0D25] text-3xl sm:text-4xl md:text-[44px] mt-2 tracking-tight leading-[1.12]">
            {service.title}
          </h1>

          {/* Italic Script Tagline */}
          <p className="font-script text-[#6E0D25] text-2xl sm:text-3xl lg:text-[34px] mt-1 font-normal">
            {service.tagline}
          </p>

          {/* Short Intro Description */}
          <p className="text-[#4E3F3B] text-xs sm:text-sm leading-relaxed max-w-sm mt-2">
            {service.heroDescription}
          </p>

          {/* Primary Pill CTA Button */}
          <div className="mt-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#6E0D25] hover:bg-[#52081B] text-white text-xs sm:text-sm font-semibold px-6 py-2.5 rounded-full shadow-md hover:shadow-lg transition-transform hover:scale-[1.02]"
            >
              <span>Get a Free Consultation</span>
              <ArrowRightIcon className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
