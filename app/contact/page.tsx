import React from "react";
import type { Metadata } from "next";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactSection } from "@/components/contact/ContactSection";
import { ContactMapStudio } from "@/components/contact/ContactMapStudio";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Contact & Studio Location | Sajni Silai Studio - Chapra, Bihar",
  description:
    "Visit Sajni Silai Studio in Chapra, Bihar or submit your tailoring enquiry online. Quick call, WhatsApp booking, and doorstep fitting consultations.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/contact`,
  },
  openGraph: {
    title: "Contact & Studio Location | Sajni Silai Studio",
    description:
      "Get in touch with Parmod Sah Silai Studio in Chapra. Call +91 98765 43210 or chat on WhatsApp.",
    url: `${siteConfig.siteUrl}/contact`,
    images: [{ url: "/assets/contact-hero-banner.webp", width: 1200, height: 630, alt: "Contact Sajni Silai Studio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Sajni Silai Studio",
    description: "Get in touch with Master Tailor Parmod Sah in Chapra, Bihar.",
    images: ["/assets/contact-hero-banner.webp"],
  },
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
