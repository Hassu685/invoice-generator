import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdUnit from "@/components/AdUnit";
import {
  articles,
  getArticleBySlug,
  getRelatedArticles,
  parseInline,
  buildFaqSchema,
  AUTHOR,
  SITE_NAME,
} from "@/lib/blog";
import { absoluteUrl, siteConfig } from "@/lib/siteConfig";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }) {
  const article = getArticleBySlug(params.slug);
  if (!article) return {};

  const url = absoluteUrl(`/blog/${article.slug}`);
  // Article titles no longer contain the brand, so it is added here once.
  // `absolute` prevents a double suffix if your layout has a title template.
  const fullTitle = `${article.title} | ${SITE_NAME}`;

  return {
    title: { absolute: fullTitle },
    description: article.description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description: article.description,
      url,
      type: "article",
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
    },
    twitter: {
      card: "summary",
      title: fullTitle,
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

// Renders text containing [anchor](/url) links.
function Inline({ text }) {
  return parseInline(text).map((part, i) => {
    if (!part.href) return <span key={i}>{part.text}</span>;
    const isInternal = part.href.startsWith("/");
    return isInternal ? (
      <Link
        key={i}
        href={part.href}
        className="text-stamp underline underline-offset-2 hover:text-stamp-dark"
      >
        {part.text}
      </Link>
    ) : (
      <a
        key={i}
        href={part.href}
        className="text-stamp underline underline-offset-2 hover:text-stamp-dark"
        rel="noopener noreferrer"
      >
        {part.text}
      </a>
    );
  });
}

function ArticleBlock({ block }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 className="font-display text-xl sm:text-2xl font-semibold text-ink mt-10 mb-3">
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 className="font-display text-lg font-semibold text-ink mt-6 mb-2">
          {block.text}
        </h3>
      );
    case "ul":
      return (
        <ul className="list-disc pl-5 space-y-1.5 my-4">
          {block.items.map((item, i) => (
            <li key={i} className="text-ink-light leading-relaxed">
              <Inline text={item} />
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="list-decimal pl-5 space-y-1.5 my-4">
          {block.items.map((item, i) => (
            <li key={i} className="text-ink-light leading-relaxed">
              <Inline text={item} />
            </li>
          ))}
        </ol>
      );
    case "quote":
      return (
        <blockquote className="border-l-2 border-stamp/50 pl-4 my-5 text-ink-light italic whitespace-pre-line">
          {block.text}
        </blockquote>
      );
    case "table":
      return (
        <div className="my-6 overflow-x-auto rounded-lg border border-ink/10 bg-white/60">
          <table className="w-full text-sm text-left">
            {block.caption && (
              <caption className="caption-top text-xs font-mono text-ink-faint px-4 py-2 text-left">
                {block.caption}
              </caption>
            )}
            <thead className="bg-ink/5 text-ink">
              <tr>
                {block.headers.map((h, i) => (
                  <th key={i} scope="col" className="px-4 py-2.5 font-semibold">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, r) => (
                <tr key={r} className="border-t border-ink/10">
                  {row.map((cell, c) => (
                    <td
                      key={c}
                      className={`px-4 py-2.5 text-ink-light ${c === 0 ? "font-medium text-ink" : ""
                        }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "cta":
      return (
        <aside className="my-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-lg border border-stamp/30 bg-stamp/5 p-5">
          <p className="text-ink font-medium leading-snug">{block.text}</p>
          <Link
            href={block.href || "/"}
            className="inline-flex shrink-0 items-center justify-center bg-stamp hover:bg-stamp-dark text-paper font-medium text-sm px-5 py-2.5 rounded-md transition-colors shadow-sm whitespace-nowrap"
          >
            {block.label || "Create a free invoice"} →
          </Link>
        </aside>
      );
    case "p":
    default:
      return (
        <p className="text-ink-light leading-relaxed my-4">
          <Inline text={block.text} />
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

  const faqJsonLd = buildFaqSchema(article); // null if the article has no FAQ

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
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

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
            <ArticleBlock block={block} key={i} />
          ))}
        </div>

        {/* The old hard-coded "Create a free invoice" button was removed:
            every article now ends with its own CTA block. */}

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