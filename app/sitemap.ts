import type { MetadataRoute } from "next";
import { navigation, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-11-12T00:00:00.000Z");
  return navigation.map((item) => ({
    url: item.href === "/" ? site.domain : `${site.domain}${item.href}`,
    lastModified,
    changeFrequency: item.href === "/" ? "weekly" : "monthly",
    priority: item.href === "/" ? 1 : 0.7,
  }));
}
