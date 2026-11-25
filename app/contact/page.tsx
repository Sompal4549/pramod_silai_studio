import React from "react";
import type { Metadata } from "next";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactSection } from "@/components/contact/ContactSection";
import { ContactMapStudio } from "@/components/contact/ContactMapStudio";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Contact & Studio Location | Pramod Ladies Tailor - Chapra, Bihar",
  description:
    "Visit Pramod Ladies Tailor in Chapra, Bihar or submit your tailoring enquiry online. Quick call, WhatsApp booking, and custom fitting consultations.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/contact`,
  },
  openGraph: {
    title: "Contact & Studio Location | Pramod Ladies Tailor",
    description:
      `Get in touch with Master Tailor Parmod Sah in Chapra. Call ${siteConfig.phoneDisplay} or chat on WhatsApp.`,
    url: `${siteConfig.siteUrl}/contact`,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, type: "image/jpeg", alt: "Contact Pramod Ladies Tailor" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Pramod Ladies Tailor",
    description: `Get in touch with Master Tailor Parmod Sah in Chapra, Bihar. Call ${siteConfig.phoneDisplay}.`,
    images: ["/og-image.jpg"],
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
