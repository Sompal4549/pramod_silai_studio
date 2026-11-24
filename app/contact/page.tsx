import React from "react";
import type { Metadata } from "next";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactSection } from "@/components/contact/ContactSection";
import { ContactMapStudio } from "@/components/contact/ContactMapStudio";

export const metadata: Metadata = {
  title: "Contact Us | Pramod Ladies Tailor - Chapra, Bihar | Call 9939996464",
  description:
    "Get in touch with Pramod Ladies Tailor by Pramod Sah in Chapra, Bihar. Call +91 99399 96464 or +91 95703 57272, WhatsApp or visit our studio in Chapra.",
  alternates: {
    canonical: "https://pramodladiestailor.in/contact",
  },
  openGraph: {
    title: "Contact Us | Pramod Ladies Tailor Chapra, Bihar",
    description:
      "Have a stitching query or want to book an appointment? Contact Pramod Ladies Tailor at +91 99399 96464 or +91 95703 57272.",
    url: "https://pramodladiestailor.in/contact",
    images: ["/assets/contact-hero-banner.webp"],
  },
};

export default function ContactPage() {
  return (
    <>
      {/* 1. Contact Hero Banner */}
      <ContactHero />

      {/* 2. Contact Details & Send Enquiry Form */}
      <ContactSection />

      {/* 3. Visit Our Studio with Interactive Google Map */}
      <ContactMapStudio />
    </>
  );
}
