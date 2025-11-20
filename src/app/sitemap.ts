import type { MetadataRoute } from "next";
import { siteMeta } from "@/data/site";
import { services } from "@/data/services";
import { standTypes } from "@/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteMeta.canonical || "https://nessfuarcilik.com.tr";

  const staticPages = [
    "",
    "/hakkimizda",
    "/hizmetlerimiz",
    "/hizmetlerimiz/stand-tasarimi",
    "/hizmetlerimiz/malzeme-kiralama",
    "/hizmetlerimiz/ic-mekan-tasarimi",
    "/hizmetlerimiz/magaza-ofis-dekorasyonu",
    "/tasarimlar",
    "/uygulamalar",
    "/referanslar",
    "/basinda-biz",
    "/iletisim",
  ];

  const standTypePages = standTypes.map((type) => ({
    url: `${baseUrl}/hizmetlerimiz/stand-tasarimi/${type.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...staticPages.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    })),
    ...standTypePages,
  ];
}

