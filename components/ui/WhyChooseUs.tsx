import React from "react";
import Image from "next/image";

export function WhyChooseUs({ className = "py-4 sm:py-6" }: { className?: string }) {
  const highlights = [
    {
      title: "20+ Years",
      subtitle: "of Experience",
      icon: "/assets/icon-pillar-exp.png",
    },
    {
      title: "Perfect Fitting",
      subtitle: "& Premium Quality",
      icon: "/assets/icon-pillar-fitting.png",
    },
    {
      title: "Modern Designs",
      subtitle: "with Traditional Touch",
      icon: "/assets/icon-pillar-design.png",
    },
    {
      title: "Skilled Team",
      subtitle: "of Professionals",
      icon: "/assets/icon-pillar-team.png",
    },
    {
      title: "On-Time Delivery",
      subtitle: "& Reliable Service",
      icon: "/assets/icon-pillar-delivery.png",
    },
  ];

  return (
    <section className={`${className} bg-[#FCF8F4]`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-[#FFFDF9] border border-[#E8D7C6] rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xs relative overflow-hidden">
          {/* Background Corner Watermark Mandalas */}
          <div className="absolute -left-6 -bottom-6 w-32 h-32 opacity-10 pointer-events-none">
            <Image
              src="/assets/mandala-corner.png"
              alt=""
              fill
              className="object-contain"
            />
          </div>
          <div className="absolute -right-6 -bottom-6 w-32 h-32 opacity-10 pointer-events-none">
            <Image
              src="/assets/mandala-corner.png"
              alt=""
              fill
              className="object-contain"
            />
          </div>

          {/* Header */}
          <div className="text-center mb-4 relative z-10">
            <div className="flex items-center justify-center gap-2">
              <span className="w-8 sm:w-16 h-[1.5px] bg-[#B37943]" />
              <h2 className="font-serif-display font-bold text-lg sm:text-xl md:text-2xl text-[#6E0D25]">
                Why Choose Sajni Silai Studio?
              </h2>
              <span className="w-8 sm:w-16 h-[1.5px] bg-[#B37943]" />
            </div>
          </div>

          {/* 5 Highlights Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-[#EADAC9] text-center relative z-10">
            {highlights.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center p-2.5 sm:p-2">
                <div className="relative w-8 h-8 mb-1 flex items-center justify-center">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="font-serif-display font-bold text-xs sm:text-sm text-[#6E0D25] leading-tight">
                  {item.title}
                </span>
                <span className="text-[10px] sm:text-[11px] text-[#6B5A55] font-medium leading-tight">
                  {item.subtitle}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
