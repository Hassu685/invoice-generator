import { siteConfig, absoluteUrl } from "@/lib/siteConfig";
import { articles } from "@/lib/blog";

export default function sitemap() {
  const staticRoutes = [
    "",
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms",
    "/blog",
  ];

  const staticEntries = staticRoutes.map((route) => ({
    url: absoluteUrl(route),
    lastModified: new Date("2026-09-19"),
  }));

  const articleEntries = articles.map((article) => ({
    url: absoluteUrl(`/blog/${article.slug}`),
    lastModified: new Date(
      article.updatedAt || article.publishedAt
    ),
  }));

  return [...staticEntries, ...articleEntries];
}