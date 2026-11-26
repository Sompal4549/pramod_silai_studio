import React from "react";
import {
  PhoneIcon,
  WhatsAppIcon,
  MapPinIcon,
  MailIcon,
  InstagramIcon,
} from "@/components/ui/Icons";
import { siteConfig } from "@/data/siteConfig";

export function ContactDetailsCards() {
  const contactOptions = [
    {
      title: "Call Us",
      line1: siteConfig.phoneDisplay,
      line2: siteConfig.phone2Display,
      href: `tel:${siteConfig.phone}`,
      icon: <PhoneIcon className="w-5 h-5 text-[#6E0D25]" />,
    },
    {
      title: "WhatsApp Us",
      line1: siteConfig.phoneDisplay,
      line2: "Quick Response",
      href: siteConfig.whatsappUrl,
      icon: <WhatsAppIcon className="w-5 h-5 text-[#6E0D25]" />,
    },
    {
      title: "Our Location",
      line1: `${siteConfig.city}, ${siteConfig.state}`,
      line2: `(${siteConfig.state} – ${siteConfig.pincode})`,
      href: siteConfig.mapsDirectionsUrl,
      icon: <MapPinIcon className="w-5 h-5 text-[#6E0D25]" />,
    },
    {
      title: "Email Us",
      line1: siteConfig.email,
      line2: "We'll reply soon",
      href: `mailto:${siteConfig.email}`,
      icon: <MailIcon className="w-5 h-5 text-[#6E0D25]" />,
    },
  ];

  const socialLinks = [
    { name: "WhatsApp", href: siteConfig.whatsappUrl, icon: <WhatsAppIcon className="w-3.5 h-3.5" /> },
    { name: "Instagram", href: siteConfig.socials.instagram, icon: <InstagramIcon className="w-3.5 h-3.5" /> },
    { name: "Email", href: `mailto:${siteConfig.email}`, icon: <MailIcon className="w-3.5 h-3.5" /> },
  ];

  return (
    <div className="flex flex-col justify-between h-full">
      {/* 4 Contact Info Cards in 2x2 grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
        {contactOptions.map((item, idx) => (
          <a
            key={idx}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={item.href.startsWith("http") ? "noreferrer" : undefined}
            className="group bg-[#FFFDFB] border border-[#E9D9C9] rounded-xl sm:rounded-2xl p-3.5 sm:p-4 shadow-2xs hover:shadow-sm hover:border-[#D9BD9E] transition-all flex items-start gap-3 hover:-translate-y-0.5"
          >
            <div className="w-10 h-10 rounded-full bg-[#FAF3EC] border border-[#EADAC9] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
              {item.icon}
            </div>
            <div className="min-w-0">
              <h3 className="font-serif-display font-bold text-xs sm:text-sm text-[#2C2420] group-hover:text-[#6E0D25] transition-colors">
                {item.title}
              </h3>
              <p className="text-xs sm:text-[13px] font-semibold text-[#6E0D25] mt-0.5 truncate">
                {item.line1}
              </p>
              <p className="text-[11px] text-[#7A6458] mt-0.5 truncate">
                {item.line2}
              </p>
            </div>
          </a>
        ))}
      </div>

      {/* Follow Us on Social Media */}
      <div className="mt-5 pt-3 border-t border-[#EBDCCF]/60 text-center sm:text-left">
        <h3 className="font-serif-display font-semibold text-xs sm:text-sm text-[#4E3F3B] mb-2.5">
          Follow Us on Social Media
        </h3>
        <div className="flex items-center justify-center sm:justify-start gap-2.5">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel={social.href.startsWith("http") ? "noreferrer" : undefined}
              aria-label={social.name}
              className="w-8 h-8 rounded-full bg-[#6E0D25] text-white flex items-center justify-center hover:bg-[#52081B] hover:scale-110 transition shadow-2xs"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
