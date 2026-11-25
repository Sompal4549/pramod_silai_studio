import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { allServices, getServiceBySlug } from "@/data/servicesData";
import { siteConfig } from "@/data/siteConfig";
import { ServiceDetailHero } from "@/components/services/ServiceDetailHero";
import { ServiceDetailContent } from "@/components/services/ServiceDetailContent";

export function generateStaticParams() {
  return allServices.map((s) => ({ slug: s.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  const pageUrl = `${siteConfig.siteUrl}/services/${service.id}`;

  return {
    title: `${service.title} in ${siteConfig.city}`,
    description: service.seoDescription,
    keywords: [
      `${service.title} in ${siteConfig.city}`,
      `${service.title} ${siteConfig.state}`,
      siteConfig.name,
      "Ladies tailor Chapra",
    ],
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      type: "website",
      locale: "en_IN",
      siteName: siteConfig.name,
      title: `${service.title} | ${siteConfig.name}`,
      description: service.seoDescription,
      url: pageUrl,
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          type: "image/jpeg",
          alt: `${service.title} - ${siteConfig.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | ${siteConfig.name}`,
      description: service.seoDescription,
      images: ["/og-image.jpg"],
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: service.title,
        description: service.aboutDescription,
        provider: {
          "@id": `${siteConfig.siteUrl}/#business`,
        },
        areaServed: {
          "@type": "City",
          name: siteConfig.city,
        },
        serviceType: "Ladies Tailoring Service",
        url: `${siteConfig.siteUrl}/services/${service.id}`,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteConfig.siteUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: `${siteConfig.siteUrl}/services`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: service.title,
            item: `${siteConfig.siteUrl}/services/${service.id}`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServiceDetailHero service={service} />
      <ServiceDetailContent service={service} />
    </>
  );
}
