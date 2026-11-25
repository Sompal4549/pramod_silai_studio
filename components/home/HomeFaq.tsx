import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";

export interface FaqItem {
  question: string;
  answer: string;
}

export const homeFaqs: FaqItem[] = [
  {
    question: "What ladies tailoring services are offered by Pramod Ladies Tailor in Chapra?",
    answer:
      "We stitch all types of ladies wear including designer and padded blouses, bridal lehengas, party gowns, kurtis, Patiala & Anarkali suits, palazzos, cigarette pants, saree fall & pico, winter coats, girls kids wear, and readymade garment alterations.",
  },
  {
    question: "How long does blouse, suit, or bridal lehenga stitching take?",
    answer:
      "Regular kurtis, suits, and blouses are typically delivered within 3 to 5 days. Custom bridal lehengas and heavy designer gowns take 7 to 12 days depending on embroidery work, with express urgent stitching available upon request.",
  },
  {
    question: "Can you stitch custom designs from Pinterest or reference photos?",
    answer:
      "Yes! Share any neck, sleeve, back, or full-outfit reference photo with Master Tailor Parmod Sah in studio or on WhatsApp, and we draft the pattern to match the design cleanly for your measurements.",
  },
  {
    question: "Do you provide readymade lehenga fitting and garment alterations in Chapra?",
    answer:
      "Yes, we offer precision invisible alterations including readymade bridal lehenga waist/length setting, blouse resizing, kurti fitting, zipper replacements, and saree pre-pleating.",
  },
  {
    question: "What are the studio timings and how can I book a consultation?",
    answer:
      "Our studio in Chapra, Bihar (841301) is open Monday to Saturday from 9:00 AM to 8:00 PM. You can visit directly, call +91 99399 96464, chat on WhatsApp, or submit an enquiry on our website.",
  },
];

export function HomeFaq() {
  return (
    <section id="faq" className="py-5 sm:py-7 bg-[#FCF8F4]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <SectionHeader
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about our ladies tailoring in Chapra"
          className="mb-4 sm:mb-5"
        />

        <div className="space-y-2.5">
          {homeFaqs.map((item, idx) => (
            <details
              key={idx}
              className="group bg-[#FFFDFB] border border-[#E9D9C9] rounded-xl sm:rounded-2xl px-4 py-3 sm:px-5 sm:py-3.5 shadow-2xs open:border-[#6E0D25]/40 transition"
            >
              <summary className="flex items-center justify-between gap-3 cursor-pointer list-none font-serif-display font-bold text-xs sm:text-sm text-[#6E0D25]">
                <span>{item.question}</span>
                <span
                  aria-hidden="true"
                  className="w-6 h-6 rounded-full bg-[#FAF3EC] border border-[#EADAC9] text-[#6E0D25] flex items-center justify-center flex-shrink-0 text-sm font-sans transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="text-xs sm:text-[13px] text-[#4E3F3B] leading-relaxed mt-2.5 pt-2.5 border-t border-[#F0E4D7]">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
