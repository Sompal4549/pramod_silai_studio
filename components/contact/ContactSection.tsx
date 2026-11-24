import React from "react";
import { ContactDetailsCards } from "./ContactDetailsCards";
import { ContactEnquiryForm } from "./ContactEnquiryForm";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function ContactSection() {
  return (
    <section className="py-6 sm:py-8 bg-[#FCF8F4]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Reusable Section Header */}
        <SectionHeader
          title="Our Contact Details"
          subtitle="Connect with us through any of these options"
          className="mb-6 sm:mb-8"
        />

        {/* 2-Column Layout: Details on Left, Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          <div className="lg:col-span-6">
            <ContactDetailsCards />
          </div>
          <div className="lg:col-span-6">
            <ContactEnquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
}
