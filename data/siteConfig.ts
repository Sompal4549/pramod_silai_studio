const getSiteUrl = () => {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "https://pramodsilaistudio.vercel.app");

  const withProtocol = raw.startsWith("http") ? raw : `https://${raw}`;
  return withProtocol.replace(/\/+$/, "");
};

export const siteConfig = {
  name: "Pramod Ladies Tailor",
  subtitle: "By Pramod Sah",
  founder: "Pramod Sah",
  experienceYears: "20+",
  siteUrl: getSiteUrl(),
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
  geo: {
    latitude: 25.7796,
    longitude: 84.7499,
  },
  hours: "Mon – Sat: 9:00 AM – 8:00 PM",
  mapsEmbedUrl:
    "https://maps.google.com/maps?q=Chapra,+Bihar+841301&t=&z=14&ie=UTF8&iwloc=&output=embed",
  mapsDirectionsUrl: "https://maps.google.com/?q=Chapra,+Bihar",
  socials: {
    whatsapp: "https://wa.me/919939996464",
    instagram: "https://instagram.com",
  },
  navLinks: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
