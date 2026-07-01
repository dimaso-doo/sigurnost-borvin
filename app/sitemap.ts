import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sigurnost-borvin.co.rs";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/usluge",
    "/katalog",
    "/reference",
    "/blog",
    "/kontakt",
    "/en",
    "/en/services",
    "/en/catalog",
    "/en/references",
    "/en/blog",
    "/en/contact"
  ].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8
  }));
}
