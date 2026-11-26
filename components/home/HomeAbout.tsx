import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckmarkIcon, ArrowRightIcon } from "@/components/ui/Icons";
import { FloralDivider } from "@/components/ui/FloralDivider";

export function HomeAbout() {
  return (
    <section id="about" className="py-4 sm:py-6 bg-[#FCF8F4]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-[#FFFDFB] border border-[#E9D9C9] rounded-2xl sm:rounded-3xl p-3 sm:p-5 lg:p-6 shadow-2xs">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6 items-center">
            {/* Left Column: Golden-framed sewing machine photo with built-in 20+ Years Experience badge */}
            <div className="md:col-span-4 flex justify-center">
              <div className="w-full max-w-[300px] sm:max-w-[340px]">
                <Image
                  src="/assets/about-sewing.webp"
                  alt="Pramod Sah Stitching Ladies Garment with 20+ Years Experience"
                  width={1024}
                  height={609}
                  sizes="(max-width: 768px) 300px, 340px"
                  className="w-full h-auto object-contain drop-shadow-sm"
                />
              </div>
            </div>

            {/* Middle Column: Text, Feature bullets, Know More */}
            <div className="md:col-span-5 flex flex-col justify-center text-left">
              <h2 className="font-serif-display font-extrabold text-xl sm:text-2xl text-[#6E0D25]">
                About Pramod Ladies Tailor
              </h2>

              <FloralDivider className="my-1.5 self-start" />

              <p className="text-[#4E3F3B] text-xs sm:text-[13px] leading-relaxed mt-1">
                With over 20 years of experience in ladies garment stitching, I, Pramod Sah, started my journey from my hometown Chapra, Bihar. Our aim is to provide perfect fitting, beautiful designs and professional stitching to every woman.
              </p>

              {/* 4 Feature Points */}
              <div className="mt-3 space-y-1.5">
                <div className="flex items-center gap-2 text-xs sm:text-[13px] text-[#2C2420] font-medium">
                  <CheckmarkIcon className="w-4 h-4 text-[#6E0D25] flex-shrink-0" />
                  <span>Expert Tailoring & Finishing</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-[13px] text-[#2C2420] font-medium">
                  <CheckmarkIcon className="w-4 h-4 text-[#6E0D25] flex-shrink-0" />
                  <span>Customized Designs</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-[13px] text-[#2C2420] font-medium">
                  <CheckmarkIcon className="w-4 h-4 text-[#6E0D25] flex-shrink-0" />
                  <span>On-Time Delivery</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-[13px] text-[#2C2420] font-medium">
                  <CheckmarkIcon className="w-4 h-4 text-[#6E0D25] flex-shrink-0" />
                  <span>Affordable Price</span>
                </div>
              </div>

              {/* Know More Button */}
              <div className="mt-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1.5 bg-[#6E0D25] hover:bg-[#52081B] text-white text-xs font-semibold px-5 py-2 rounded-full shadow-xs hover:shadow-md transition"
                >
                  <span>Know More</span>
                  <ArrowRightIcon className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Right Column: User uploaded bride illustration */}
            <div className="md:col-span-3 flex justify-center relative">
              {/* Background Temple Line Art silhouette */}
              <div className="absolute inset-0 opacity-15 pointer-events-none flex items-center justify-center">
                <div className="relative w-full h-full">
                  <Image
                    src="/assets/temple-art.png"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Model requested by user */}
              <div className="relative w-44 sm:w-52 h-64 sm:h-72 z-10">
                <Image
                  src="/assets/about-model.webp"
                  alt="Indian Bridal Wear Design Model"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
