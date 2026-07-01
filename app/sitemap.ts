import type { MetadataRoute } from "next";
import { postSlug, posts } from "@/lib/data";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sigurnost-borvin.co.rs";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/usluge",
    "/katalog",
    "/reference",
    "/blog",
    "/kontakt",
    "/politika-privatnosti",
    "/uslovi-koriscenja",
    "/en",
    "/en/services",
    "/en/catalog",
    "/en/references",
    "/en/blog",
    "/en/contact",
    "/en/privacy-policy",
    "/en/terms-and-conditions"
  ];

  const blogPages = posts.map((post) => `/blog/${postSlug(post.title)}`);

  return [...staticPages, ...blogPages].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" || path.startsWith("/blog") ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.startsWith("/blog/") ? 0.7 : 0.8
  }));
}
