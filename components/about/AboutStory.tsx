import React from "react";
import Image from "next/image";

export function AboutStory() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
      {/* Left Story Text Column */}
      <div className="lg:col-span-7 flex flex-col justify-center">
        <div className="flex items-center gap-2 mb-3">
          <h2 className="font-serif-display font-extrabold text-2xl sm:text-3xl text-[#6E0D25]">
            Our Story
          </h2>
          <div className="flex items-center gap-1 text-[#B37943] text-sm select-none">
            <span>—</span>
            <span>❖</span>
            <span>—</span>
          </div>
        </div>

        <div className="space-y-3 text-xs sm:text-sm text-[#4A3B35] leading-relaxed">
          <p>
            Hello! I am <span className="font-semibold text-[#2C2420]">Pramod Sah</span>, a professional tailor from Chapra, Bihar. For over 20 years, I have been dedicated to the art of stitching and designing ladies garments with precision and care.
          </p>
          <p>
            What started as a small initiative in my hometown has now grown into a trusted tailoring studio with a skilled team. Our mission is to provide high-quality stitching, perfect fitting and beautiful designs to every woman.
          </p>
        </div>

        {/* Quote Box */}
        <div className="bg-gradient-to-r from-[#FFF5E6] via-[#FAF0DF] to-[#F5EAD9] border border-[#ECD9C5] rounded-xl sm:rounded-2xl p-4 sm:p-5 mt-4 relative shadow-2xs">
          <span className="absolute left-3 top-2 font-serif text-3xl sm:text-4xl text-[#C49A50]/40 leading-none select-none">
            “
          </span>
          <p className="font-serif-display italic text-[#3B2C27] text-xs sm:text-sm md:text-base font-medium px-4 text-center leading-normal">
            &ldquo;Our goal is not just to stitch clothes, but to add happiness to your wardrobe.&rdquo;
          </p>
          <p className="text-center font-serif-display font-bold text-xs sm:text-sm text-[#6E0D25] mt-1.5">
            — Pramod Sah
          </p>
          <span className="absolute right-3 bottom-2 font-serif text-3xl sm:text-4xl text-[#C49A50]/40 leading-none select-none">
            ”
          </span>
        </div>
      </div>

      {/* Right Story Tailor Photo */}
      <div className="lg:col-span-5 flex justify-center">
        <div className="relative w-full max-w-md aspect-[4/3] rounded-2xl overflow-hidden shadow-sm border border-[#E9D9C9] bg-[#F2E5D5]">
          <Image
            src="/assets/parmod-cutting-fabric.jpg"
            alt="Parmod Sah Cutting Designer Fabric with Golden Scissors"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
}
