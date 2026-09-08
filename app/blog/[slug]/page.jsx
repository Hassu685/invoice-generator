import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdUnit from "@/components/AdUnit";
import {
  articles,
  getArticleBySlug,
  getRelatedArticles,
  AUTHOR,
} from "@/lib/blog";
import { absoluteUrl, siteConfig } from "@/lib/siteConfig";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }) {
  const article = getArticleBySlug(params.slug);
  if (!article) return {};

  const url = absoluteUrl(`/blog/${article.slug}`);

  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: url },
    openGraph: {
      title: `${article.title} | Ledger`,
      description: article.description,
      url,
      type: "article",
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
    },
    twitter: {
      card: "summary",
      title: article.title,
      description: article.description,
    },
  };
}

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function ArticleBlock({ block, index }) {
  switch (block.type) {
    case "h2":
      return (
        <h2
          key={index}
          className="font-display text-xl sm:text-2xl font-semibold text-ink mt-10 mb-3"
        >
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3
          key={index}
          className="font-display text-lg font-semibold text-ink mt-6 mb-2"
        >
          {block.text}
        </h3>
      );
    case "ul":
      return (
        <ul key={index} className="list-disc pl-5 space-y-1.5 my-4">
          {block.items.map((item, i) => (
            <li key={i} className="text-ink-light leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol key={index} className="list-decimal pl-5 space-y-1.5 my-4">
          {block.items.map((item, i) => (
            <li key={i} className="text-ink-light leading-relaxed">
              {item}
            </li>
          ))}
        </ol>
      );
    case "quote":
      return (
        <blockquote
          key={index}
          className="border-l-2 border-stamp/50 pl-4 my-5 text-ink-light italic whitespace-pre-line"
        >
          {block.text}
        </blockquote>
      );
    case "p":
    default:
      return (
        <p key={index} className="text-ink-light leading-relaxed my-4">
          {block.text}
        </p>
      );
  }
}

export default function BlogArticlePage({ params }) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  const related = getRelatedArticles(article, 3);
  const url = absoluteUrl(`/blog/${article.slug}`);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    author: { "@type": "Organization", name: siteConfig.siteName },
    publisher: { "@type": "Organization", name: siteConfig.siteName },
    mainEntityOfPage: url,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Guides", item: absoluteUrl("/blog") },
      { "@type": "ListItem", position: 3, name: article.title, item: url },
    ],
  };

  return (
    <main className="min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <Header
        right={
          <Link
            href="/"
            className="bg-stamp hover:bg-stamp-dark text-paper font-medium text-sm px-3 sm:px-5 py-2.5 rounded-md transition-colors shadow-sm whitespace-nowrap shrink-0"
          >
            Open App
          </Link>
        }
      />

      <article className="flex-1 max-w-3xl mx-auto px-4 sm:px-8 py-12 sm:py-16 w-full">
        <nav aria-label="Breadcrumb" className="text-xs text-ink-faint font-mono mb-6">
          <Link href="/" className="hover:text-stamp">Home</Link>
          <span className="mx-1.5">/</span>
          <Link href="/blog" className="hover:text-stamp">Guides</Link>
          <span className="mx-1.5">/</span>
          <span className="text-ink">{article.title}</span>
        </nav>

        <p className="font-mono text-xs uppercase tracking-[0.2em] text-stamp mb-2">
          {article.category}
        </p>
        <h1 className="font-display text-3xl sm:text-4xl font-semibold text-ink mb-4 leading-tight">
          {article.title}
        </h1>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-ink-faint font-mono mb-10">
          <span>{AUTHOR}</span>
          <span aria-hidden="true">·</span>
          <time dateTime={article.publishedAt}>
            Published {formatDate(article.publishedAt)}
          </time>
          {article.updatedAt !== article.publishedAt && (
            <>
              <span aria-hidden="true">·</span>
              <time dateTime={article.updatedAt}>
                Updated {formatDate(article.updatedAt)}
              </time>
            </>
          )}
        </div>

        <div>
          {article.content.map((block, i) => (
            <ArticleBlock block={block} index={i} key={i} />
          ))}
        </div>

        <div className="mt-10 pt-8 border-t border-dashed border-ink/10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-stamp hover:bg-stamp-dark text-paper font-medium text-sm px-5 py-2.5 rounded-md transition-colors shadow-sm"
          >
            Create a free invoice →
          </Link>
        </div>

        <div className="mt-12">
          <AdUnit slot={process.env.NEXT_PUBLIC_ADSENSE_ARTICLE_SLOT} />
        </div>

        {related.length > 0 && (
          <div className="mt-14 pt-8 border-t border-ink/10">
            <h2 className="font-display text-lg font-semibold text-ink mb-4">
              Related Guides
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="block bg-white/60 border border-ink/10 rounded-lg p-4 hover:border-stamp/40 hover:bg-white transition-colors"
                >
                  <p className="text-sm font-medium text-ink leading-snug">
                    {r.title}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>

      <Footer />
    </main>
  );
}
