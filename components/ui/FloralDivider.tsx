import React from "react";

export function FloralDivider({ className = "my-2.5" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-1.5 select-none ${className}`} aria-hidden="true">
      <span className="w-8 sm:w-12 h-[1.5px] bg-[#B37943]" />
      <span className="text-[#6E0D25] text-xs">✤</span>
      <span className="text-[#B37943] text-sm font-serif">❖</span>
      <span className="text-[#6E0D25] text-xs">✤</span>
      <span className="w-8 sm:w-12 h-[1.5px] bg-[#B37943]" />
    </div>
  );
}
