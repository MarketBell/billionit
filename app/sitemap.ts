import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const routes = [
    "",
    "/contact",
    "/legal/terms",
    "/legal/privacy",
    "/legal/refund",
  ];

  const lastModified = new Date("2026-08-31");

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified,
    changeFrequency: route === "" ? "monthly" : "yearly",
    priority: route === "" ? 1 : route.startsWith("/legal") ? 0.5 : 0.8,
  }));
}
