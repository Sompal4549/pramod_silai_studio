"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/siteConfig";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav className="bg-[#FFFDF9] border-b border-[#EADAC9] sticky top-0 z-40 shadow-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-2 sm:py-2.5 flex items-center justify-between relative">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group">
          <div className="relative w-9 h-9 sm:w-11 sm:h-11 flex-shrink-0">
            <Image
              src="/assets/logo.jpg"
              alt={`${siteConfig.name} Logo`}
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif-display font-extrabold text-xl sm:text-2xl text-[#6E0D25] tracking-tight leading-none">
              {siteConfig.name}
            </span>
            <span className="text-[10px] sm:text-[11px] text-[#7A6458] font-medium tracking-wide mt-0.5">
              — {siteConfig.subtitle} —
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-2 lg:gap-4">
          {siteConfig.navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  active
                    ? "bg-[#6E0D25] text-white text-xs lg:text-sm font-semibold px-5 py-1.5 rounded-full shadow-xs"
                    : "text-[#3D302C] hover:text-[#6E0D25] text-xs lg:text-sm font-medium px-3 py-1.5 transition"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-[#6E0D25] hover:bg-[#F3E7DC] rounded-lg transition"
            aria-label="Toggle navigation menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FFFDF9] border-t border-[#EADAC9] px-4 py-3 space-y-1 shadow-md">
          {siteConfig.navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2 rounded-lg text-sm font-semibold transition ${
                  active
                    ? "bg-[#6E0D25] text-white"
                    : "text-[#3D302C] hover:bg-[#F5ECE3] hover:text-[#6E0D25]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
