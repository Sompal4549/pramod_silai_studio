import React from "react";
import Image from "next/image";
import { MapPinIcon, ClockIcon, ArrowRightIcon } from "@/components/ui/Icons";
import { siteConfig } from "@/data/siteConfig";

export function ContactMapStudio() {
  return (
    <section className="py-6 sm:py-8 bg-[#FCF8F4]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-[#FFFDFB] border border-[#E9D9C9] rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xs relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Left: Real Interactive Google Map (Not an image) */}
            <div className="lg:col-span-7">
              <div className="relative w-full h-[280px] sm:h-[320px] rounded-xl sm:rounded-2xl overflow-hidden border border-[#DECBC0] shadow-xs">
                <iframe
                  title={`${siteConfig.name} Location in ${siteConfig.city}, ${siteConfig.state}`}
                  src={siteConfig.mapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </div>

            {/* Right: Visit Our Studio details with temple silhouette background */}
            <div className="lg:col-span-5 relative flex flex-col justify-center pl-0 lg:pl-2">
              {/* Temple art watermark background */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-40 sm:w-48 h-56 opacity-15 pointer-events-none select-none">
                <Image
                  src="/assets/temple-art.png"
                  alt=""
                  fill
                  className="object-contain object-right"
                />
              </div>

              <div className="relative z-10">
                <h3 className="font-serif-display font-bold text-xl sm:text-2xl text-[#6E0D25]">
                  Visit Our Studio
                </h3>
                <p className="text-xs sm:text-sm text-[#6B5A55] mt-1">
                  Drop by at our studio in {siteConfig.city}, {siteConfig.state}.
                </p>

                {/* Details List */}
                <div className="mt-4 space-y-3">
                  <div className="flex items-start gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-[#FAF3EC] border border-[#EADAC9] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MapPinIcon className="w-4 h-4 text-[#6E0D25]" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-semibold text-[#2C2420]">
                        {siteConfig.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-[#FAF3EC] border border-[#EADAC9] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ClockIcon className="w-4 h-4 text-[#6E0D25]" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-semibold text-[#2C2420]">
                        {siteConfig.hours}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Get Directions Button */}
                <div className="mt-5">
                  <a
                    href={siteConfig.mapsDirectionsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 border border-[#6E0D25] text-[#6E0D25] hover:bg-[#6E0D25] hover:text-white text-xs sm:text-sm font-semibold px-5 py-2 rounded-full transition-colors duration-200"
                  >
                    <span>Get Directions</span>
                    <ArrowRightIcon className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
