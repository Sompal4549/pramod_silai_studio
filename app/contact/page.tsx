import React from "react";
import type { Metadata } from "next";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactSection } from "@/components/contact/ContactSection";
import { ContactMapStudio } from "@/components/contact/ContactMapStudio";
import { siteConfig } from "@/data/siteConfig";

const pageUrl = `${siteConfig.siteUrl}/contact`;

export const metadata: Metadata = {
  title: "Contact & Studio Location in Chapra",
  description:
    "Visit Pramod Ladies Tailor in Chapra, Bihar or submit your tailoring enquiry online. Quick call, WhatsApp booking, and custom fitting consultations.",
  keywords: [
    "Contact Pramod Ladies Tailor",
    "Ladies tailor phone number Chapra",
    "Tailoring studio near me Chapra 841301",
    "WhatsApp tailor booking Chapra",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: siteConfig.name,
    title: "Contact & Studio Location | Pramod Ladies Tailor",
    description: `Get in touch with Master Tailor Parmod Sah in Chapra. Call ${siteConfig.phoneDisplay} or chat on WhatsApp.`,
    url: pageUrl,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Contact Pramod Ladies Tailor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Pramod Ladies Tailor",
    description: `Get in touch with Master Tailor Parmod Sah in Chapra, Bihar. Call ${siteConfig.phoneDisplay}.`,
    images: ["/og-image.jpg"],
  },
};

export default function ContactPage() {
  const contactSchemas = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        url: pageUrl,
        name: "Contact Pramod Ladies Tailor",
        description:
          "Phone, WhatsApp, studio location map, and online tailoring enquiry form in Chapra, Bihar.",
        mainEntity: {
          "@id": `${siteConfig.siteUrl}/#business`,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.siteUrl },
          { "@type": "ListItem", position: 2, name: "Contact Us", item: pageUrl },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchemas) }}
      />
      {/* 1. Contact Hero Banner */}
      <ContactHero />

      {/* 2. Contact Details & Send Enquiry Form */}
      <ContactSection />

      {/* 3. Visit Our Studio with Interactive Google Map */}
      <ContactMapStudio />
    </>
  );
}
