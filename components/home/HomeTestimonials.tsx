import React from "react";
import Image from "next/image";
import { StarIcon } from "@/components/ui/Icons";
import { SectionHeader } from "@/components/ui/SectionHeader";

export interface TestimonialItem {
  name: string;
  location: string;
  avatar: string;
  comment: string;
  stars: number;
}

const testimonials: TestimonialItem[] = [
  {
    name: "Neha Singh",
    location: "Chapra",
    avatar: "/assets/avatar-neha.jpg",
    comment: "Very professional work and perfect fitting. Highly recommended!",
    stars: 5,
  },
  {
    name: "Pooja Kumari",
    location: "Chapra",
    avatar: "/assets/avatar-pooja.jpg",
    comment: "Amazing stitching and on-time delivery. Thank you, Sah Studio!",
    stars: 5,
  },
  {
    name: "Rita Devi",
    location: "Chapra",
    avatar: "/assets/avatar-rita.jpg",
    comment: "Beautiful designs and great service. I am fully satisfied.",
    stars: 5,
  },
];

export function HomeTestimonials() {
  return (
    <section className="py-4 sm:py-6 bg-[#FCF8F4]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Reusable Section Header */}
        <SectionHeader
          title="What Our Clients Say"
          subtitle="Trusted by Hundreds of Happy Customers"
          className="mb-3 sm:mb-4"
        />

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E9D9C9] rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xs hover:shadow-sm transition flex items-center gap-3"
            >
              {/* Client Avatar */}
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#E0D0BE] flex-shrink-0">
                <Image
                  src={item.avatar}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Rating & Review */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-0.5 mb-1">
                  {[...Array(item.stars)].map((_, i) => (
                    <StarIcon key={i} className="w-3 h-3 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-[#3D302C] text-xs italic leading-tight line-clamp-2">
                  &ldquo;{item.comment}&rdquo;
                </p>
                <div className="mt-1">
                  <span className="block font-semibold text-xs text-[#6E0D25] leading-tight">
                    {item.name}
                  </span>
                  <span className="block text-[10px] text-[#7C6B66]">
                    {item.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
