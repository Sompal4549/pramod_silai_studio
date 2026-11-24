import React from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  ornament?: boolean;
  align?: "center" | "left";
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  ornament = true,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div className={`mb-5 sm:mb-6 ${isCenter ? "text-center" : "text-left"} ${className}`}>
      <div className={`flex items-center gap-2 ${isCenter ? "justify-center" : "justify-start"}`}>
        {ornament && <span className="w-8 sm:w-14 h-[1.5px] bg-[#6E0D25]/40" />}
        {ornament && <span className="text-[#6E0D25] text-xs">❖</span>}
        <h2 className="font-serif-display font-bold text-xl sm:text-2xl text-[#6E0D25] tracking-tight">
          {title}
        </h2>
        {ornament && <span className="text-[#6E0D25] text-xs">❖</span>}
        {ornament && <span className="w-8 sm:w-14 h-[1.5px] bg-[#6E0D25]/40" />}
      </div>
      {subtitle && (
        <p className="text-[#6B5A55] text-xs sm:text-sm font-medium mt-0.5">
          {subtitle}
        </p>
      )}
    </div>
  );
}
