import { articles } from "@/lib/blog";

export function GET() {
    const baseUrl = "https://invoicetoolshub.xyz";

    const staticRoutes = [
        "/",
        "/about",
        "/contact",
        "/privacy-policy",
        "/terms",
        "/blog",
    ];

    const articleRoutes = articles.map(
        (article) => `/blog/${article.slug}`
    );

    const urls = [...staticRoutes, ...articleRoutes]
        .map((path) => `${baseUrl}${path === "/" ? "" : path}`)
        .join("\n");

    return new Response(urls, {
        headers: {
            "Content-Type": "text/plain; charset=utf-8",
        },
    });
}