import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/siteConfig";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "Sajni Silai",
    description: "Complete Ladies Tailoring Solutions in Chapra, Bihar by Parmod Sah",
    start_url: "/",
    display: "standalone",
    background_color: "#FCF8F4",
    theme_color: "#6E0D25",
    icons: [
      {
        src: "/assets/logo.jpg",
        sizes: "192x192",
        type: "image/jpeg",
      },
      {
        src: "/assets/logo.jpg",
        sizes: "512x512",
        type: "image/jpeg",
      },
    ],
  };
}
