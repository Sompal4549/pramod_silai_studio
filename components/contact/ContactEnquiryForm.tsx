"use client";

import React, { useState } from "react";
import { PaperAirplaneIcon, CheckmarkIcon } from "@/components/ui/Icons";
import { Input, Select, Textarea } from "@/components/ui/FormControls";
import { serviceOptions } from "@/data/servicesData";
import { siteConfig } from "@/data/siteConfig";

export function ContactEnquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.name.trim() || !formData.mobile.trim()) {
      setErrorMessage("Please fill in your Name and Mobile Number");
      return;
    }

    if (!formData.email.trim() || !formData.email.includes("@")) {
      setErrorMessage("Please enter a valid Email address to receive your confirmation");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Failed to submit enquiry. Please try again.");
      }

      setSubmitted(true);
    } catch (err: any) {
      console.error("Contact enquiry submission failed:", err);
      setErrorMessage(err.message || "Failed to submit enquiry. Please try again or reach out on WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#6E0D25] border-2 border-[#8E1E3B] rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xl relative overflow-hidden">
      {/* Top Ornate Motif Accent */}
      <div className="text-center mb-4 select-none">
        <div className="flex items-center justify-center gap-1.5 text-amber-200/70 text-xs">
          <span>❖</span>
          <span className="w-8 h-[1px] bg-amber-200/50" />
          <span>✤</span>
          <span className="w-8 h-[1px] bg-amber-200/50" />
          <span>❖</span>
        </div>
        <h3 className="font-serif-display font-bold text-xl sm:text-2xl text-white mt-1">
          Send Us an Enquiry
        </h3>
        <p className="text-amber-100/80 text-xs sm:text-sm mt-0.5">
          Fill the form below. Confirmation will be sent to both you and our studio!
        </p>
      </div>

      {submitted ? (
        <div className="bg-[#FCFAF7] rounded-xl p-5 text-center space-y-2.5 my-4">
          <div className="w-12 h-12 bg-green-100 text-green-700 rounded-full flex items-center justify-center mx-auto">
            <CheckmarkIcon className="w-6 h-6 text-green-700" />
          </div>
          <h4 className="font-serif-display font-bold text-base text-[#6E0D25]">
            Enquiry Received!
          </h4>
          <p className="text-xs text-[#5C4F4B]">
            Thank you, <span className="font-semibold">{formData.name}</span>. A confirmation email has been sent to{" "}
            <span className="font-semibold text-[#6E0D25]">{formData.email}</span>. {siteConfig.founder} Silai Studio team will call you at{" "}
            <span className="font-semibold">{formData.mobile}</span> soon.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({ name: "", mobile: "", email: "", service: "", message: "" });
            }}
            className="text-xs text-[#6E0D25] underline font-semibold cursor-pointer pt-1"
          >
            Send another enquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3" suppressHydrationWarning>
          {errorMessage && (
            <div className="text-xs text-red-200 bg-red-950/60 border border-red-500/50 rounded-lg p-2.5">
              ⚠️ {errorMessage}
            </div>
          )}

          {/* Row 1: Name and Mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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

          {/* Row 2: Email (Required to send customer confirmation) */}
          <div>
            <Input
              type="email"
              required
              placeholder="Email Address (to receive confirmation) *"
              value={formData.email}
              onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
            />
          </div>

          {/* Row 3: Select Service Dropdown */}
          <Select
            value={formData.service}
            onChange={(e) => setFormData((prev) => ({ ...prev, service: e.target.value }))}
          >
            <option value="">Select Service</option>
            {serviceOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </Select>

          {/* Row 4: Message Textarea */}
          <Textarea
            rows={3}
            required
            placeholder="Your Message... (measurements, cloth type, design ideas) *"
            value={formData.message}
            onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
          />

          {/* Submit Button */}
          <div className="pt-1 flex flex-col items-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center gap-2 bg-[#52081B] hover:bg-[#3E0514] disabled:opacity-60 text-white border border-[#91203E] text-xs sm:text-sm font-semibold px-8 py-2.5 rounded-full shadow-md hover:shadow-lg transition-transform hover:scale-[1.02] cursor-pointer"
              suppressHydrationWarning
            >
              <PaperAirplaneIcon className="w-3.5 h-3.5" />
              <span>{isSubmitting ? "Sending..." : "Send Enquiry"}</span>
            </button>
            <p className="text-[11px] text-amber-100/70 mt-2 flex items-center gap-1">
              <span>🔒</span>
              <span>Your enquiry & email are strictly confidential.</span>
            </p>
          </div>
        </form>
      )}
    </div>
  );
}
