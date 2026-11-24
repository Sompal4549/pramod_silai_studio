import React from "react";
import {
  PhoneIcon,
  WhatsAppIcon,
  MapPinIcon,
  FacebookIcon,
  InstagramIcon,
  YouTubeIcon,
  PinterestIcon,
} from "@/components/ui/Icons";
import { siteConfig } from "@/data/siteConfig";

export function TopBar() {
  return (
    <div className="bg-[#6E0D25] text-white text-[11px] sm:text-xs py-1.5 px-4 sm:px-6 border-b border-[#54091A]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-2">
        {/* Left Contact Info */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-4">
          {/* Phone */}
          <a
            href={`tel:${siteConfig.phone}`}
            className="flex items-center gap-1.5 hover:text-amber-200 transition"
          >
            <PhoneIcon className="w-3.5 h-3.5 text-amber-200" />
            <span className="font-medium">{siteConfig.phoneDisplay}</span>
          </a>

          <span className="hidden sm:inline text-white/40">|</span>

          {/* WhatsApp */}
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 hover:text-amber-200 transition"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 text-amber-200" />
            <span className="font-medium">{siteConfig.phoneDisplay}</span>
          </a>

          <span className="hidden md:inline text-white/40">|</span>

          {/* Location */}
          <div className="hidden md:flex items-center gap-1.5 text-white/90">
            <MapPinIcon className="w-3.5 h-3.5 text-amber-200" />
            <span>{siteConfig.city}, {siteConfig.state}</span>
          </div>
        </div>

        {/* Right Social Links */}
        <div className="flex items-center gap-2">
          <span className="text-white/80 hidden sm:inline text-[11px]">Follow Us :</span>
          <div className="flex items-center gap-1.5">
            <a
              href={siteConfig.socials.facebook}
              target="_blank"
              rel="noreferrer"
              className="w-5 h-5 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
              aria-label="Facebook"
            >
              <FacebookIcon className="w-3 h-3 text-white" />
            </a>
            <a
              href={siteConfig.socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="w-5 h-5 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-3 h-3 text-white" />
            </a>
            <a
              href={siteConfig.socials.youtube}
              target="_blank"
              rel="noreferrer"
              className="w-5 h-5 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
              aria-label="YouTube"
            >
              <YouTubeIcon className="w-3 h-3 text-white" />
            </a>
            <a
              href={siteConfig.socials.pinterest}
              target="_blank"
              rel="noreferrer"
              className="w-5 h-5 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
              aria-label="Pinterest"
            >
              <PinterestIcon className="w-3 h-3 text-white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
