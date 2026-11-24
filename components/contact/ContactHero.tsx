import React from "react";
import Image from "next/image";
import { WhatsAppIcon, ArrowRightIcon } from "@/components/ui/Icons";
import { siteConfig } from "@/data/siteConfig";

export function ContactHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#FAF3EC] border-b border-[#EADAC9] min-h-[300px] sm:min-h-[340px] md:min-h-[380px] lg:min-h-[420px] flex items-center">
      {/* Full-width pure background image (NO OVERLAY) */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/assets/contact-hero-banner.webp"
          alt={`Contact ${siteConfig.name}`}
          fill
          priority
          className="object-cover object-right md:object-center"
        />
      </div>

      {/* Content Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 py-6 sm:py-8">
        <div className="max-w-xl flex flex-col justify-center">
          {/* Top Ornate Tag */}
          <div className="flex items-center gap-1.5 self-start select-none">
            <span className="w-6 h-[1.5px] bg-[#B37943]" />
            <span className="text-[#6E0D25] text-xs">❖</span>
            <span className="text-[#6E0D25] font-serif-display font-semibold text-xs tracking-wider uppercase">
              Get in Touch
            </span>
            <span className="text-[#6E0D25] text-xs">❖</span>
            <span className="w-6 h-[1.5px] bg-[#B37943]" />
          </div>

          {/* Main Headline */}
          <h1 className="font-serif-display font-extrabold text-[#6E0D25] text-3xl sm:text-4xl md:text-5xl lg:text-[52px] mt-2 tracking-tight leading-tight">
            Contact Us
          </h1>

          {/* Subheading */}
          <h2 className="font-serif-display italic text-[#6E0D25] text-2xl sm:text-3xl md:text-4xl font-semibold mt-0.5">
            We&apos;re Here to Help You!
          </h2>

          {/* Description */}
          <p className="text-[#4E3F3B] text-xs sm:text-sm md:text-base leading-relaxed max-w-sm sm:max-w-md mt-2">
            Have a query, need a custom design, or want to discuss your stitching requirements? Feel free to reach out!
          </p>

          {/* WhatsApp CTA Button */}
          <div className="mt-4">
            <a
              href={`${siteConfig.whatsappUrl}?text=Hi%20${encodeURIComponent(siteConfig.name)},%20I%20have%20a%20query%20about%20ladies%20tailoring`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#6E0D25] hover:bg-[#52081B] text-white text-xs sm:text-sm font-semibold px-6 py-2.5 rounded-full shadow-md hover:shadow-lg transition-transform hover:scale-[1.02]"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>Chat on WhatsApp</span>
              <ArrowRightIcon className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
