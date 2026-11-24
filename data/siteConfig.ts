export const siteConfig = {
  name: "Sajni Silai Studio",
  subtitle: "By Parmod Sah",
  founder: "Parmod Sah",
  experienceYears: "20+",
  phone: "+919876543210",
  phoneDisplay: "+91 98765 43210",
  whatsappNumber: "919876543210",
  whatsappUrl: "https://wa.me/919876543210",
  email: "info@sajnisilaistudio.in",
  city: "Chapra",
  state: "Bihar",
  pincode: "841301",
  address: "Chapra, Bihar – 841301",
  hours: "Mon – Sat: 9:00 AM – 8:00 PM",
  mapsEmbedUrl:
    "https://maps.google.com/maps?q=Chapra,+Bihar+841301&t=&z=14&ie=UTF8&iwloc=&output=embed",
  mapsDirectionsUrl: "https://maps.google.com/?q=Chapra,+Bihar",
  socials: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    youtube: "https://youtube.com",
    pinterest: "https://pinterest.com",
    linkedin: "https://linkedin.com",
  },
  navLinks: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
