import { siteConfig, absoluteUrl } from "@/lib/siteConfig";
import { articles } from "@/lib/blog";

export default function sitemap() {
  const staticRoutes = [
    { url: "", priority: 1, changeFrequency: "weekly" },
    { url: "/about", priority: 0.6, changeFrequency: "monthly" },
    { url: "/contact", priority: 0.5, changeFrequency: "monthly" },
    { url: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
    { url: "/terms", priority: 0.3, changeFrequency: "yearly" },
    { url: "/blog", priority: 0.7, changeFrequency: "weekly" },
  ];

  const staticEntries = staticRoutes.map((route) => ({
    url: absoluteUrl(route.url),
    lastModified: new Date("2026-09-08"),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const articleEntries = articles.map((article) => ({
    url: absoluteUrl(`/blog/${article.slug}`),
    lastModified: new Date(article.updatedAt || article.publishedAt),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...articleEntries];
}
