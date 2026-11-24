import React from "react";
import { WhatsAppIcon } from "@/components/ui/Icons";
import { siteConfig } from "@/data/siteConfig";

export function FloatingWhatsApp() {
  return (
    <a
      href={siteConfig.whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white p-3 sm:p-3.5 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all flex items-center justify-center group"
    >
      <WhatsAppIcon className="w-6 h-6 text-white" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-xs font-semibold text-white px-0 group-hover:px-1.5">
        Chat with us
      </span>
    </a>
  );
}
