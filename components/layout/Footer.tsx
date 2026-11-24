import React from "react";
import { FacebookIcon, InstagramIcon, YouTubeIcon, PinterestIcon } from "@/components/ui/Icons";
import { siteConfig } from "@/data/siteConfig";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#3D0512] text-amber-100/80 text-[11px] sm:text-xs py-3 px-4 sm:px-6 border-t border-[#54091A]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        {/* Copyright */}
        <div>
          © {currentYear} {siteConfig.name}. All Rights Reserved.
        </div>

        {/* Location */}
        <div className="hidden sm:inline text-amber-200/50">|</div>
        <div>
          {siteConfig.city}, {siteConfig.state}
        </div>

        {/* Tagline */}
        <div className="hidden md:inline text-amber-200/50">|</div>
        <div className="hidden md:block">
          Designed with <span className="text-red-400">❤</span> for our customers
        </div>

        {/* Social Links */}
        <div className="hidden sm:inline text-amber-200/50">|</div>
        <div className="flex items-center gap-2">
          <span>Follow Us:</span>
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
    </footer>
  );
}
