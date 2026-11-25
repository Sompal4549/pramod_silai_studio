import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/ui/Icons";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { featuredServices } from "@/data/servicesData";

interface HomeServicesProps {
  selectedService: string;
  onSelectService: (serviceTitle: string) => void;
}

export function HomeServices({ selectedService, onSelectService }: HomeServicesProps) {
  return (
    <section id="services" className="py-4 sm:py-6 bg-[#FCF8F4]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Reusable Section Header */}
        <SectionHeader
          title="Our Services"
          subtitle="Complete Solutions for Your Ladies Wear"
          className="mb-3 sm:mb-4"
        />

        {/* 5 Services Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3.5">
          {featuredServices.map((service, index) => (
            <div
              key={index}
              onClick={() => onSelectService(service.title)}
              className={`group cursor-pointer bg-gradient-to-b from-[#FFFDFB] to-[#FBF1E6] border border-[#E9D9C9] rounded-xl sm:rounded-2xl p-2 sm:p-2.5 flex flex-col items-center shadow-2xs hover:shadow-md hover:border-[#D9BD9E] transition-all duration-200 hover:-translate-y-0.5 ${
                selectedService === service.title ? "ring-2 ring-[#6E0D25] border-transparent" : ""
              }`}
            >
              {/* Image Box */}
              <div className="relative w-full aspect-[4/3] rounded-lg sm:rounded-xl overflow-hidden bg-[#EFE4D7] border border-[#ECE0D3]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  style={service.objectPosition ? { objectPosition: service.objectPosition } : undefined}
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Service Title */}
              <h3 className="font-serif-display text-center text-[#6E0D25] font-semibold text-xs sm:text-[13px] leading-tight mt-2 min-h-[32px] flex items-center justify-center">
                {service.title}
              </h3>
            </div>
          ))}
        </div>

        {/* View All Services Link */}
        <div className="text-center mt-3">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-xs text-[#6E0D25] font-bold hover:underline"
          >
            <span>Explore All 12 Tailoring Services</span>
            <ArrowRightIcon className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </section>
  );
}
