import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/ui/Icons";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { allServices } from "@/data/servicesData";

export function ServicesGrid() {
  return (
    <section className="py-6 sm:py-8 bg-[#FCF8F4]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Reusable Section Header */}
        <SectionHeader
          title="Our Services"
          subtitle="Premium Stitching Services for Every Occasion"
        />

        {/* 12 Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 lg:gap-5">
          {allServices.map((item, index) => (
            <div
              key={index}
              className="group bg-gradient-to-b from-[#FFFDFB] to-[#FBF1E6] border border-[#E9D9C9] rounded-xl sm:rounded-2xl p-2.5 sm:p-3 flex flex-col shadow-2xs hover:shadow-md hover:border-[#D9BD9E] transition-all duration-200 hover:-translate-y-0.5"
            >
              {/* Clean Cropped Photo Container */}
              <div className="relative w-full aspect-[4/3] rounded-lg sm:rounded-xl overflow-hidden bg-[#EFE4D7] border border-[#ECE0D3]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  style={item.objectPosition ? { objectPosition: item.objectPosition } : undefined}
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Card Bottom Meta */}
              <div className="flex items-center justify-between gap-2 mt-2.5 pt-1">
                <div className="flex items-center gap-2 min-w-0">
                  <div className="relative w-5 h-6 flex-shrink-0">
                    <Image
                      src={item.icon}
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-serif-display font-bold text-xs sm:text-[13px] text-[#2C2420] group-hover:text-[#6E0D25] transition-colors truncate">
                      {item.title}
                    </h3>
                    <p className="text-[10px] sm:text-[11px] text-[#7A6458] truncate">
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="w-6 h-6 rounded-full bg-[#6E0D25] text-white flex items-center justify-center flex-shrink-0 group-hover:bg-[#52081B] group-hover:scale-110 transition shadow-2xs"
                  aria-label={`Inquire about ${item.title}`}
                >
                  <ArrowRightIcon className="w-3 h-3 text-white" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
