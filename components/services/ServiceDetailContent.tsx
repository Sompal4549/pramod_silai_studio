"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRightIcon, StarIcon, WhatsAppIcon } from "@/components/ui/Icons";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { siteConfig } from "@/data/siteConfig";
import type { ServiceItem } from "@/data/servicesData";

interface ServiceDetailContentProps {
  service: ServiceItem;
}

const serviceReviews = [
  {
    name: "Neha Singh",
    location: "Chapra",
    avatar: "/assets/avatar-neha.webp",
    objectPosition: "50% 34%",
    getQuote: (title: string) =>
      `The ${title.toLowerCase()} is simply amazing! Perfect fit and beautiful finishing. Highly recommended!`,
  },
  {
    name: "Pooja Kumari",
    location: "Chapra",
    avatar: "/assets/avatar-pooja.webp",
    objectPosition: "50% 15%",
    getQuote: (title: string) =>
      `Best tailor in Chapra for ${title.toLowerCase()}. On-time delivery and super comfortable fitting!`,
  },
  {
    name: "Rita Devi",
    location: "Chapra",
    avatar: "/assets/avatar-rita.webp",
    objectPosition: "58% 20%",
    getQuote: (title: string) =>
      `Very neat work and graceful design detailing on my ${title.toLowerCase()}. Thank you ${siteConfig.name} team!`,
  },
];

const processSteps = [
  {
    step: 1,
    line1: "Share Your",
    line2: "Design Idea",
    icon: (
      <svg className="w-6 h-6 text-[#6E0D25]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 2H4a2 2 0 00-2 2v12a2 2 0 002 2h3v3l4.5-3H20a2 2 0 002-2V4a2 2 0 00-2-2zM8 11H6V9h2v2zm5 0h-2V9h2v2zm5 0h-2V9h2v2z" />
      </svg>
    ),
  },
  {
    step: 2,
    line1: "Provide",
    line2: "Measurements",
    icon: (
      <svg className="w-6 h-6 text-[#6E0D25]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21 6H3a2 2 0 00-2 2v8a2 2 0 002 2h18a2 2 0 002-2V8a2 2 0 00-2-2zm0 10H3V8h2v3h2V8h2v2h2V8h2v3h2V8h2v2h2V8h2v8z" />
      </svg>
    ),
  },
  {
    step: 3,
    line1: "Confirm",
    line2: "Details",
    icon: (
      <svg className="w-6 h-6 text-[#6E0D25]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 8h-2V6a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3h1v2a1 1 0 001 1h8a1 1 0 001-1v-1h3a2 2 0 002-2v-6a2 2 0 00-2-2zM6 5h8a1 1 0 011 1v2H6a1 1 0 01-1-1zm13 10h-2v-3h2v3z" />
      </svg>
    ),
  },
  {
    step: 4,
    line1: "Get Your",
    line2: "Beautiful Outfit",
    icon: (
      <svg className="w-6 h-6 text-[#6E0D25]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M15.5 4.5a3.5 3.5 0 01-7 0h-2l-1.5 5 3 1.5L5.5 21h13L16 11l3-1.5-1.5-5h-2z" />
      </svg>
    ),
  },
];

export function ServiceDetailContent({ service }: ServiceDetailContentProps) {
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);

  const handlePrev = () => {
    setActiveReviewIndex((prev) => (prev === 0 ? serviceReviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveReviewIndex((prev) => (prev === serviceReviews.length - 1 ? 0 : prev + 1));
  };

  const currentReview = serviceReviews[activeReviewIndex];
  const whatsappCustomHref = `${siteConfig.whatsappUrl}?text=${encodeURIComponent(
    `Hi ${siteConfig.name}, I have a custom design idea for ${service.title}.`
  )}`;

  return (
    <div className="bg-[#FCF8F4] py-6 sm:py-9">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8 sm:space-y-10">
        {/* 1. About This Service + 2x2 Highlights Box */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-center">
          {/* Left Framed Photo */}
          <div className="lg:col-span-4">
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border-2 border-[#E5CEB3] shadow-sm bg-[#EFE4D7]">
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                style={service.objectPosition ? { objectPosition: service.objectPosition } : undefined}
                className="object-cover"
              />
            </div>
          </div>

          {/* Center About Text & Checklist */}
          <div className="lg:col-span-5">
            <h2 className="font-serif-display font-bold text-xl sm:text-2xl text-[#6E0D25] tracking-tight">
              About This Service
            </h2>
            <p className="text-xs sm:text-[13px] text-[#4E3F3B] leading-relaxed mt-2">
              {service.aboutDescription}
            </p>
            <ul className="mt-3.5 space-y-2">
              {service.highlights.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2.5">
                  <span className="w-4 h-4 rounded-full bg-[#6E0D25] text-white flex items-center justify-center flex-shrink-0">
                    <svg className="w-2.5 h-2.5" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="text-xs sm:text-[13px] font-medium text-[#2C2420]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right 2x2 Feature Card */}
          <div className="lg:col-span-3">
            <div className="bg-[#FFFDF9] border border-[#E6D3BF] rounded-2xl p-3.5 shadow-2xs relative">
              <div className="grid grid-cols-2 relative">
                {/* Crosshair dividers */}
                <div className="absolute inset-y-2 left-1/2 -translate-x-1/2 w-[1px] bg-[#EADAC9]" />
                <div className="absolute inset-x-2 top-1/2 -translate-y-1/2 h-[1px] bg-[#EADAC9]" />
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FFFDF9] px-1 text-[#B37943] text-[10px] leading-none">
                  ❖
                </span>

                {/* Cell 1: Premium Quality */}
                <div className="flex flex-col items-center justify-center text-center p-2.5">
                  <svg className="w-6 h-6 text-[#6E0D25] mb-1.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 3H8L2 9l10 12L22 9l-6-6zm-4 14.5L5.2 9.5h4.3l2.5 8zm0-9.5H7.2l2-3h2.8v3zm2 9.5l2.5-8h4.3L14 17.5zm0-9.5V5h2.8l2 3H14z" />
                  </svg>
                  <span className="font-serif-display font-semibold text-xs text-[#6E0D25] leading-tight">
                    Premium
                    <br />
                    Quality
                  </span>
                </div>

                {/* Cell 2: Perfect Fitting */}
                <div className="flex flex-col items-center justify-center text-center p-2.5">
                  <svg className="w-6 h-6 text-[#6E0D25] mb-1.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2a1.5 1.5 0 00-1.5 1.5c0 .5.3 1 .7 1.3L9 8.5 7 11l2.5 1.5L7.5 21h9l-2-8.5L17 11l-2-2.5-2.2-3.7c.4-.3.7-.8.7-1.3A1.5 1.5 0 0012 2z" />
                  </svg>
                  <span className="font-serif-display font-semibold text-xs text-[#6E0D25] leading-tight">
                    Perfect
                    <br />
                    Fitting
                  </span>
                </div>

                {/* Cell 3: Expert Tailoring */}
                <div className="flex flex-col items-center justify-center text-center p-2.5">
                  <svg className="w-6 h-6 text-[#6E0D25] mb-1.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 8h-2V6a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3h1v2a1 1 0 001 1h8a1 1 0 001-1v-1h3a2 2 0 002-2v-6a2 2 0 00-2-2zM6 5h8a1 1 0 011 1v2H6a1 1 0 01-1-1z" />
                  </svg>
                  <span className="font-serif-display font-semibold text-xs text-[#6E0D25] leading-tight">
                    Expert
                    <br />
                    Tailoring
                  </span>
                </div>

                {/* Cell 4: On-Time Delivery */}
                <div className="flex flex-col items-center justify-center text-center p-2.5">
                  <svg className="w-6 h-6 text-[#6E0D25] mb-1.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l7.1-1.01L12 2z" />
                  </svg>
                  <span className="font-serif-display font-semibold text-xs text-[#6E0D25] leading-tight">
                    On-Time
                    <br />
                    Delivery
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Collection Showcase Row */}
        <section>
          <SectionHeader
            title={service.collectionTitle}
            subtitle="Explore Our Beautiful Stitching Work"
            className="mb-4 sm:mb-5"
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {service.gallery.map((item, idx) => (
              <div
                key={idx}
                className="group bg-[#FFFDFB] p-1.5 rounded-xl border border-[#E6D3BF] shadow-2xs hover:shadow-md transition overflow-hidden"
              >
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-[#EFE4D7]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    style={item.objectPosition ? { objectPosition: item.objectPosition } : undefined}
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. How It Works? 4 Simple Steps */}
        <section>
          <SectionHeader
            title="How It Works?"
            subtitle="Get Your Dream Outfit in 4 Simple Steps"
            className="mb-5"
          />
          <div className="grid grid-cols-2 md:flex md:items-center md:justify-center gap-4 md:gap-5 lg:gap-8">
            {processSteps.map((s, idx) => (
              <React.Fragment key={s.step}>
                <div className="flex flex-col items-center text-center">
                  <div className="relative w-14 h-14 rounded-full bg-[#F7EBDC] border border-[#E6D3BF] flex items-center justify-center shadow-2xs">
                    <span className="absolute -top-1 -left-2 w-5 h-5 rounded-full bg-[#6E0D25] text-white text-[10px] font-bold flex items-center justify-center shadow-xs">
                      {s.step}
                    </span>
                    {s.icon}
                  </div>
                  <p className="text-[11px] sm:text-xs font-semibold text-[#3D302C] leading-tight mt-2">
                    {s.line1}
                    <br />
                    {s.line2}
                  </p>
                </div>
                {idx < processSteps.length - 1 && (
                  <span className="hidden md:inline-block text-[#8C6D5A] text-xl font-light select-none mb-6">
                    ›
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </section>

        {/* 4. Split Row: Client Reviews Carousel + Have a Custom Design CTA */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-center pt-1">
          {/* Left: Client Carousel */}
          <div className="lg:col-span-7">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="w-8 sm:w-12 h-[1px] bg-[#6E0D25]/40" />
              <h3 className="font-serif-display font-bold text-base sm:text-lg text-[#6E0D25]">
                What Our Clients Say
              </h3>
              <span className="w-8 sm:w-12 h-[1px] bg-[#6E0D25]/40" />
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous client review"
                className="w-7 h-7 rounded-full bg-[#6E0D25] hover:bg-[#52081B] text-white flex items-center justify-center flex-shrink-0 cursor-pointer shadow-xs transition"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>

              <div className="flex-1 bg-[#FFFDFB] border border-[#E6D3BF] rounded-xl p-3.5 sm:p-4 shadow-2xs flex items-center gap-3.5 min-h-[108px]">
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-[#E6D3BF] flex-shrink-0">
                  <Image
                    src={currentReview.avatar}
                    alt={currentReview.name}
                    fill
                    sizes="64px"
                    style={{ objectPosition: currentReview.objectPosition }}
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-0.5 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-[#3D302C] italic leading-snug">
                    &ldquo;{currentReview.getQuote(service.title)}&rdquo;
                  </p>
                  <p className="text-[11px] font-semibold text-[#6E0D25] mt-1.5">
                    — {currentReview.name}, <span className="font-normal text-[#7C6B66]">{currentReview.location}</span>
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={handleNext}
                aria-label="Next client review"
                className="w-7 h-7 rounded-full bg-[#6E0D25] hover:bg-[#52081B] text-white flex items-center justify-center flex-shrink-0 cursor-pointer shadow-xs transition"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>

            {/* Carousel Dots */}
            <div className="flex items-center justify-center gap-1.5 mt-3">
              {serviceReviews.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveReviewIndex(idx)}
                  aria-label={`View review ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all cursor-pointer ${
                    idx === activeReviewIndex
                      ? "w-4 bg-[#6E0D25]"
                      : "w-1.5 bg-[#D5C3B3] hover:bg-[#B89F8D]"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right: Have a Custom Design? Card */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-br from-[#7A102B] via-[#6E0D25] to-[#4E0718] border border-[#9B2743] rounded-2xl p-4 sm:p-5 shadow-lg flex items-center gap-4 text-white relative overflow-hidden">
              {/* Golden Dress / Gown Sketch Vector */}
              <div className="w-16 sm:w-20 h-24 flex-shrink-0 flex items-center justify-center opacity-95">
                <svg viewBox="0 0 80 110" className="w-full h-full drop-shadow-sm">
                  <defs>
                    <linearGradient id="goldDressGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#F5DE9E" />
                      <stop offset="50%" stopColor="#D8A74C" />
                      <stop offset="100%" stopColor="#A67423" />
                    </linearGradient>
                  </defs>
                  {/* Mannequin top */}
                  <circle cx="40" cy="8" r="2.5" fill="url(#goldDressGrad)" />
                  <path
                    d="M36 12 C36 12, 32 16, 28 20 L31 36 L49 36 L52 20 C48 16, 44 12, 44 12 Z"
                    fill="url(#goldDressGrad)"
                  />
                  {/* Pleated flared gown skirt */}
                  <path
                    d="M31 37 L49 37 L68 98 C52 103, 28 103, 12 98 Z"
                    fill="url(#goldDressGrad)"
                  />
                  {/* Pleat lines */}
                  <path
                    d="M35 37 L24 100 M40 37 L40 102 M45 37 L56 100"
                    stroke="#7A102B"
                    strokeWidth="0.9"
                    opacity="0.55"
                  />
                  <rect x="30" y="35.5" width="20" height="2" rx="1" fill="#FFF3C8" />
                </svg>
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="font-serif-display font-bold text-lg sm:text-xl text-white leading-tight">
                  Have a Custom Design?
                </h3>
                <p className="text-amber-100/90 text-[11px] sm:text-xs mt-1 leading-relaxed">
                  Share your design or idea with us on WhatsApp and get expert advice.
                </p>
                <a
                  href={whatsappCustomHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#ECC880] via-[#F4D99B] to-[#D29E3C] hover:from-[#E2B96B] hover:to-[#C08C2B] text-[#4A0A19] font-bold text-xs px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-transform hover:scale-105 mt-3"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 text-[#1E9E49]" />
                  <span>Chat on WhatsApp</span>
                  <ArrowRightIcon className="w-3 h-3 text-[#4A0A19]" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
