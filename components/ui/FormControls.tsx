import React from "react";

export function Input({
  className = "",
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      suppressHydrationWarning
      className={`w-full bg-[#FCFAF7] border border-[#DECBC0] rounded-lg px-3.5 py-2 text-xs sm:text-sm text-[#2C2420] placeholder-[#8F7C75] focus:outline-none focus:border-[#6E0D25] focus:ring-1 focus:ring-[#6E0D25] transition-colors ${className}`}
      {...props}
    />
  );
}

export function Select({
  className = "",
  children,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      suppressHydrationWarning
      className={`w-full bg-[#FCFAF7] border border-[#DECBC0] rounded-lg px-3.5 py-2 text-xs sm:text-sm text-[#2C2420] focus:outline-none focus:border-[#6E0D25] focus:ring-1 focus:ring-[#6E0D25] transition-colors ${className}`}
      {...props}
    >
      {children}
    </select>
  );
}

export function Textarea({
  className = "",
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      suppressHydrationWarning
      className={`w-full bg-[#FCFAF7] border border-[#DECBC0] rounded-lg px-3.5 py-2 text-xs sm:text-sm text-[#2C2420] placeholder-[#8F7C75] focus:outline-none focus:border-[#6E0D25] focus:ring-1 focus:ring-[#6E0D25] resize-none transition-colors ${className}`}
      {...props}
    />
  );
}
