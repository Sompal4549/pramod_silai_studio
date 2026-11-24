import React from "react";

export interface HighlightItem {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}

const highlights: HighlightItem[] = [
  {
    title: "20+ Years",
    subtitle: "Of Experience",
    icon: (
      <svg className="w-8 h-8 text-[#B37943]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
  {
    title: "Professional",
    subtitle: "Stitching",
    icon: (
      <svg className="w-8 h-8 text-[#6E0D25]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 8h-2V6a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3h1v3a1 1 0 001 1h8a1 1 0 001-1v-1h3a2 2 0 002-2V10a2 2 0 00-2-2zM6 5h8a1 1 0 011 1v2H6a1 1 0 01-1-1zm9 13H8v-2h7v2zm4-2h-2v-4h2v4z" />
      </svg>
    ),
  },
  {
    title: "Skilled",
    subtitle: "Team",
    icon: (
      <svg className="w-8 h-8 text-[#6E0D25]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
      </svg>
    ),
  },
  {
    title: "Quality",
    subtitle: "Assurance",
    icon: (
      <svg className="w-8 h-8 text-[#6E0D25]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
      </svg>
    ),
  },
  {
    title: "Customer",
    subtitle: "Satisfaction",
    icon: (
      <svg className="w-8 h-8 text-[#6E0D25]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
      </svg>
    ),
  },
];

export function AboutHighlights() {
  return (
    <div className="bg-[#FFFDF9] border border-[#E8D7C6] rounded-xl sm:rounded-2xl p-3 sm:p-4 my-6 sm:my-8 shadow-2xs">
      <div className="grid grid-cols-2 sm:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-[#EADAC9] text-center">
        {highlights.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center justify-center p-2.5 sm:p-2">
            <div className="mb-1 text-[#6E0D25]">{item.icon}</div>
            <span className="font-serif-display font-bold text-sm sm:text-base text-[#6E0D25] leading-tight">
              {item.title}
            </span>
            <span className="text-[11px] sm:text-xs text-[#6B5A55] font-medium leading-tight">
              {item.subtitle}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
