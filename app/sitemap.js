export default function sitemap() {
  const baseUrl = "https://example.com";
  const routes = ["", "/about", "/contact", "/privacy-policy", "/terms"];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.6,
  }));
}
