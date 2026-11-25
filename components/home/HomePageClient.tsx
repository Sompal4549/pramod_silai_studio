"use client";

import React, { useState } from "react";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeServices } from "@/components/home/HomeServices";
import { HomeAbout } from "@/components/home/HomeAbout";
import { HomeQueryForm } from "@/components/home/HomeQueryForm";
import { HomeTestimonials } from "@/components/home/HomeTestimonials";
import { HomeFaq } from "@/components/home/HomeFaq";

export function HomePageClient() {
  const [selectedService, setSelectedService] = useState("Kurti & Suit Stitching");

  const handleSelectService = (title: string) => {
    setSelectedService(title);
    const element = document.getElementById("query-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* 1. Hero Banner Section */}
      <HomeHero />

      {/* 2. Top Services Section */}
      <HomeServices
        selectedService={selectedService}
        onSelectService={handleSelectService}
      />

      {/* 3. About Pramod Ladies Tailor Section */}
      <HomeAbout />

      {/* 4. Have a Query? Contact Form Section */}
      <HomeQueryForm
        selectedService={selectedService}
        onServiceChange={setSelectedService}
      />

      {/* 5. What Our Clients Say (Testimonials) */}
      <HomeTestimonials />

      {/* 6. Frequently Asked Questions */}
      <HomeFaq />
    </>
  );
}
