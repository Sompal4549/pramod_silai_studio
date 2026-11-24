"use client";

import React, { useState } from "react";
import Image from "next/image";
import { WhatsAppIcon, CheckmarkIcon, ArrowRightIcon, PaperAirplaneIcon } from "@/components/ui/Icons";
import { Input, Select, Textarea } from "@/components/ui/FormControls";
import { serviceOptions } from "@/data/servicesData";
import { siteConfig } from "@/data/siteConfig";

interface HomeQueryFormProps {
  selectedService: string;
  onServiceChange: (service: string) => void;
}

interface QueryFormData {
  name: string;
  mobile: string;
  service: string;
  location: string;
  message: string;
}

export function HomeQueryForm({
  selectedService,
  onServiceChange,
}: HomeQueryFormProps) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState<QueryFormData>({
    name: "",
    mobile: "",
    service: selectedService || serviceOptions[0],
    location: siteConfig.city,
    message: "",
  });

  React.useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({ ...prev, service: selectedService }));
    }
  }, [selectedService]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.mobile) {
      alert("Please enter your Name and Mobile Number");
      return;
    }
    setFormSubmitted(true);
  };

  return (
    <section id="query-section" className="py-4 sm:py-6 bg-[#FCF8F4]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-[#6E0D25] border-2 border-[#8E1E3B] rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-7 shadow-xl relative overflow-hidden">
          {/* Background filigree watermark */}
          <div className="absolute -right-8 -bottom-8 w-44 h-44 opacity-10 pointer-events-none">
            <Image
              src="/assets/mandala-corner.png"
              alt=""
              fill
              className="object-contain"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-center">
            {/* Left Column: Heading + WhatsApp Button */}
            <div className="lg:col-span-4 text-white">
              <h2 className="font-serif-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
                Have a Query?
              </h2>
              <p className="text-amber-100/90 text-xs sm:text-sm mt-1.5 leading-relaxed">
                Send us your requirements on WhatsApp or fill the form below. We will get back to you soon!
              </p>

              <div className="mt-4">
                <a
                  href={`${siteConfig.whatsappUrl}?text=Hi%20${encodeURIComponent(siteConfig.name)},%20I%20have%20a%20query%20about%20ladies%20garment%20stitching`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-full shadow-md hover:shadow-lg transition-transform hover:scale-105"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white" />
                  <span>Chat on WhatsApp</span>
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Center Golden Sewing Machine Art */}
            <div className="hidden lg:flex lg:col-span-2 justify-center items-center">
              <div className="relative w-20 h-20 drop-shadow-sm opacity-90">
                <Image
                  src="/assets/query-sewing-machine.png"
                  alt="Sewing Machine"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Right Column: Form Container */}
            <div className="lg:col-span-6 bg-[#FCFAF7] rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-md">
              {formSubmitted ? (
                <div className="text-center py-6 space-y-2">
                  <div className="w-12 h-12 bg-green-100 text-green-700 rounded-full flex items-center justify-center mx-auto">
                    <CheckmarkIcon className="w-6 h-6 text-green-700" />
                  </div>
                  <h4 className="font-serif-display font-bold text-lg text-[#6E0D25]">
                    Query Sent Successfully!
                  </h4>
                  <p className="text-xs text-[#5C4F4B]">
                    Thank you, <span className="font-semibold">{formData.name}</span>! {siteConfig.founder} Stitching Studio will call you at{" "}
                    <span className="font-semibold">{formData.mobile}</span> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        name: "",
                        mobile: "",
                        service: serviceOptions[0],
                        location: siteConfig.city,
                        message: "",
                      });
                    }}
                    className="mt-3 text-xs text-[#6E0D25] underline font-semibold cursor-pointer"
                  >
                    Send another query
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-2.5" suppressHydrationWarning>
                  {/* Row 1: Name and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <Input
                      type="text"
                      required
                      placeholder="Your Name *"
                      value={formData.name}
                      onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                    />
                    <Input
                      type="tel"
                      required
                      placeholder="Mobile Number *"
                      value={formData.mobile}
                      onChange={(e) => setFormData((prev) => ({ ...prev, mobile: e.target.value }))}
                    />
                  </div>

                  {/* Row 2: Select Service and Location */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <Select
                      value={formData.service}
                      onChange={(e) => {
                        const val = e.target.value;
                        setFormData((prev) => ({ ...prev, service: val }));
                        onServiceChange(val);
                      }}
                    >
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </Select>
                    <Input
                      type="text"
                      placeholder={`Your City / Area (${siteConfig.city})`}
                      value={formData.location}
                      onChange={(e) => setFormData((prev) => ({ ...prev, location: e.target.value }))}
                    />
                  </div>

                  {/* Row 3: Message Textarea */}
                  <Textarea
                    rows={2}
                    placeholder="Your Message... (cloth type, fitting preference, delivery date)"
                    value={formData.message}
                    onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                  />

                  {/* Submit Button */}
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-1.5 bg-[#6E0D25] hover:bg-[#52081B] text-white text-xs sm:text-sm font-semibold px-6 py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer"
                      suppressHydrationWarning
                    >
                      <PaperAirplaneIcon className="w-3.5 h-3.5" />
                      <span>Send Query</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
