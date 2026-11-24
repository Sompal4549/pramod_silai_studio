import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckmarkIcon, ArrowRightIcon } from "@/components/ui/Icons";
import { SectionHeader } from "@/components/ui/SectionHeader";

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Parmod Sah",
    role: "Founder & Master Tailor",
    image: "/assets/team-parmod.jpg",
  },
  {
    name: "Rohit Kumar",
    role: "Senior Tailor",
    image: "/assets/team-rohit.jpg",
  },
  {
    name: "Amit Kumar",
    role: "Tailoring Expert",
    image: "/assets/team-amit.jpg",
  },
  {
    name: "Saurabh Kumar",
    role: "Design Assistant",
    image: "/assets/team-saurabh.jpg",
  },
];

export function AboutTeam() {
  return (
    <section className="py-4 sm:py-6 bg-[#FCF8F4]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Reusable Section Header */}
        <SectionHeader
          title="Our Team"
          subtitle="A Dedicated Team of Skilled Professionals"
        />

        {/* Team Grid + Why Choose Us Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-stretch">
          {/* Left 4 Team Members */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-[#FFFDFB] border border-[#E9D9C9] rounded-xl sm:rounded-2xl p-3 flex flex-col items-center text-center shadow-2xs hover:shadow-sm transition hover:-translate-y-0.5"
              >
                {/* Circular Avatar with Golden Ring */}
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-[#D4AF37] shadow-xs mb-2.5">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Name and Title */}
                <h3 className="font-serif-display font-bold text-xs sm:text-sm text-[#6E0D25] leading-tight">
                  {member.name}
                </h3>
                <p className="text-[10px] sm:text-[11px] text-[#7A6458] font-medium mt-0.5">
                  {member.role}
                </p>
              </div>
            ))}
          </div>

          {/* Right: Why Choose Us Card with Mannequin sketch */}
          <div className="lg:col-span-4 bg-gradient-to-b from-[#FFFDF9] to-[#FBF1E6] border border-[#E9D9C9] rounded-xl sm:rounded-2xl p-4 sm:p-5 relative overflow-hidden shadow-2xs flex flex-col justify-between">
            {/* Background Mannequin sketch on right side */}
            <div className="absolute right-0 bottom-0 w-24 h-40 opacity-20 pointer-events-none">
              <Image
                src="/assets/mannequin-sketch.jpg"
                alt=""
                fill
                className="object-contain object-bottom"
              />
            </div>

            <div className="relative z-10">
              <h3 className="font-serif-display font-bold text-lg sm:text-xl text-[#6E0D25] mb-3">
                Why Choose Us?
              </h3>

              <div className="space-y-2 text-xs sm:text-[13px] text-[#2C2420] font-medium">
                <div className="flex items-center gap-2">
                  <CheckmarkIcon className="w-4 h-4 text-[#6E0D25] flex-shrink-0" />
                  <span>20+ Years of Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckmarkIcon className="w-4 h-4 text-[#6E0D25] flex-shrink-0" />
                  <span>Perfect Fitting & Finishing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckmarkIcon className="w-4 h-4 text-[#6E0D25] flex-shrink-0" />
                  <span>Latest Designs & Styles</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckmarkIcon className="w-4 h-4 text-[#6E0D25] flex-shrink-0" />
                  <span>On-Time Delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckmarkIcon className="w-4 h-4 text-[#6E0D25] flex-shrink-0" />
                  <span>Affordable Prices</span>
                </div>
              </div>
            </div>

            {/* Call to action button */}
            <div className="mt-4 pt-2 relative z-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs text-[#6E0D25] font-bold hover:underline"
              >
                <span>Book Your Stitching Appointment</span>
                <ArrowRightIcon className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
