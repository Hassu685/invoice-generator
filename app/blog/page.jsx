import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { articles } from "@/lib/blog";
import { absoluteUrl, siteConfig } from "@/lib/siteConfig";

export const metadata = {
  title: "Invoicing Guides",
  description:
    "Practical guides on invoicing — what to include, how to number invoices, freelance and small-business billing, and how to avoid common mistakes.",
  alternates: {
    canonical: absoluteUrl("/blog"),
  },
  openGraph: {
    title: "Invoicing Guides | Ledger",
    description:
      "Practical guides on invoicing — what to include, how to number invoices, freelance and small-business billing, and how to avoid common mistakes.",
    url: absoluteUrl("/blog"),
    type: "website",
  },
};

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogIndexPage() {
  const sorted = [...articles].sort(
    (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
  );

  return (
    <main className="min-h-screen flex flex-col">
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

      <div className="flex-1 max-w-5xl mx-auto px-4 sm:px-8 py-12 sm:py-16 w-full">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-stamp mb-2">
          Guides
        </p>
        <h1 className="font-display text-3xl sm:text-4xl font-semibold text-ink mb-4">
          Invoicing Guides
        </h1>
        <p className="text-ink-light max-w-2xl leading-relaxed mb-10">
          Practical, no-nonsense guides on getting invoices right — what to
          include, how to number them, and how to handle freelance and
          small-business billing. Written to actually be useful, not to pad
          out a word count.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {sorted.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group block bg-white/60 border border-ink/10 rounded-xl p-6 hover:border-stamp/40 hover:bg-white transition-colors"
            >
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-stamp mb-3">
                {article.category}
              </p>
              <h2 className="font-display text-lg font-semibold text-ink mb-2 leading-snug group-hover:text-stamp-dark transition-colors">
                {article.title}
              </h2>
              <p className="text-sm text-ink-faint leading-relaxed mb-4">
                {article.description}
              </p>
              <div className="flex items-center justify-between text-xs text-ink-faint font-mono">
                <time dateTime={article.publishedAt}>
                  {formatDate(article.publishedAt)}
                </time>
                <span className="text-stamp group-hover:underline">
                  Read article →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
