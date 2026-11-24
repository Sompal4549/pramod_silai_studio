import React from "react";
import type { Metadata } from "next";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactSection } from "@/components/contact/ContactSection";
import { ContactMapStudio } from "@/components/contact/ContactMapStudio";

export const metadata: Metadata = {
  title: "Contact Us | Sajni Silai Studio - Chapra, Bihar",
  description:
    "Get in touch with Sajni Silai Studio by Parmod Sah in Chapra, Bihar. Call +91 98765 43210 or send your tailoring enquiry online.",
};

export default function ContactPage() {
  return (
    <>
      {/* 1. Contact Hero Banner (Full Width, No Overlay) */}
      <ContactHero />

      {/* 2. Contact Details & Send Enquiry Form */}
      <ContactSection />

      {/* 3. Visit Our Studio with Interactive Google Map */}
      <ContactMapStudio />
    </>
  );
}
