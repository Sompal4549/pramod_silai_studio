import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/siteConfig";

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: siteConfig.name,
    short_name: "Pramod Tailor",
    description:
      "Complete Ladies Tailoring Solutions in Chapra, Bihar by Master Tailor Parmod Sah.",
    start_url: "/",
    display: "standalone",
    background_color: "#FCF8F4",
    theme_color: "#6E0D25",
    categories: ["fashion", "shopping", "lifestyle"],
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
