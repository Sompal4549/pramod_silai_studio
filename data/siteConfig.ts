export const siteConfig = {
  name: "Pramod Ladies Tailor",
  subtitle: "By Pramod Sah",
  founder: "Pramod Sah",
  experienceYears: "20+",
  phone: "+919939996464",
  phoneDisplay: "+91 99399 96464",
  phone2: "+919570357272",
  phone2Display: "+91 95703 57272",
  whatsappNumber: "919939996464",
  whatsappUrl: "https://wa.me/919939996464",
  email: "psony6375@gmail.com",
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
