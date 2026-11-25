"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRightIcon, WhatsAppIcon } from "@/components/ui/Icons";
import { siteConfig } from "@/data/siteConfig";
import { getServiceBySlug } from "@/data/servicesData";

export function PreFooter() {
  const pathname = usePathname();
  const isContactPage = pathname === "/contact";
  const isAboutPage = pathname === "/about";
  const serviceMatch = pathname.startsWith("/services/")
    ? getServiceBySlug(pathname.replace("/services/", ""))
    : undefined;

  const bannerSrc = isContactPage
    ? "/assets/contact-cta-banner.webp"
    : isAboutPage
    ? "/assets/about-bottom-cta.webp"
    : "/assets/cta-ribbon-banner.webp";

  const headline = isContactPage
    ? "Have a Design in Mind?"
    : "Let's Stitch Your Dream Together!";

  const subline = isContactPage
    ? "Send us a picture on WhatsApp and get a free consultation!"
    : serviceMatch
    ? `Get in touch today for the best ${serviceMatch.title.toLowerCase()} services in ${siteConfig.city}, ${siteConfig.state}.`
    : `Get in touch today for the best stitching solutions in ${siteConfig.city}, ${siteConfig.state}.`;

  return (
    <section className="relative w-full overflow-hidden py-8 sm:py-10 md:py-12 mt-auto">
      {/* Background Banner - Full size edge-to-edge without background color */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={bannerSrc}
          alt={headline}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center w-full h-full"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left spacing so text does not overlap the sewing machine in the banner on desktop */}
        <div className="hidden md:block w-36 h-12 flex-shrink-0" />

        {/* Center Callout */}
        <div className="text-center md:text-left flex-1">
          <h3 className="font-script text-2xl sm:text-3xl lg:text-4xl text-amber-200 tracking-wide font-normal drop-shadow-sm">
            {headline}
          </h3>
          <p className="text-amber-100/90 text-xs sm:text-sm mt-0.5">
            {subline}
          </p>
        </div>

        {/* Right Button */}
        <div className="md:mr-6 flex-shrink-0">
          {isContactPage ? (
            <a
              href={`${siteConfig.whatsappUrl}?text=Hi%20${encodeURIComponent(siteConfig.name)},%20I%20have%20a%20design%20in%20mind`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#ECC880] via-[#F4D99B] to-[#D29E3C] hover:from-[#E2B96B] hover:to-[#C08C2B] text-[#4A0A19] font-bold text-xs sm:text-sm px-6 py-2 sm:py-2.5 rounded-full shadow-md hover:shadow-lg transition-transform hover:scale-105"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#4A0A19]" />
              <span>Chat on WhatsApp</span>
              <ArrowRightIcon className="w-3.5 h-3.5 text-[#4A0A19]" />
            </a>
          ) : (
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#ECC880] via-[#F4D99B] to-[#D29E3C] hover:from-[#E2B96B] hover:to-[#C08C2B] text-[#4A0A19] font-bold text-xs sm:text-sm px-6 py-2 sm:py-2.5 rounded-full shadow-md hover:shadow-lg transition-transform hover:scale-105"
            >
              <span>Contact Us</span>
              <ArrowRightIcon className="w-3.5 h-3.5 text-[#4A0A19]" />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
