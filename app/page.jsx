import Link from "next/link";
import InvoiceTool from "@/components/InvoiceTool";
import Footer from "@/components/Footer";
import Faq, { faqJsonLd } from "@/components/Faq";
import { articles } from "@/lib/blog";
import { absoluteUrl, siteConfig } from "@/lib/siteConfig";

export const metadata = {
  title: "Free Invoice Generator — Create PDF Invoices Online | Ledger",
  description:
    "Create professional invoices online for free, customize your invoice, and download it as a PDF without creating an account.",
  alternates: { canonical: absoluteUrl("/") },
  openGraph: {
    title: "Free Invoice Generator — Create PDF Invoices Online | Ledger",
    description:
      "Create professional invoices online for free, customize your invoice, and download it as a PDF without creating an account.",
    url: absoluteUrl("/"),
    type: "website",
  },
};

const GUIDE_SLUGS = [
  "how-to-create-a-professional-invoice",
  "what-should-an-invoice-include",
  "invoice-vs-receipt",
  "freelance-invoice-guide",
];

export default function HomePage() {
  const featuredGuides = GUIDE_SLUGS.map((slug) =>
    articles.find((a) => a.slug === slug)
  ).filter(Boolean);

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd()) }}
      />

      <InvoiceTool />

      {/* SEO / educational content below the tool */}
      <div className="max-w-3xl mx-auto px-4 sm:px-8 py-14 sm:py-20 space-y-16">
        <section>
          <h2 className="font-display text-2xl font-semibold text-ink mb-4">
            How to Create an Invoice
          </h2>
          <ol className="list-decimal pl-5 space-y-2 text-ink-light leading-relaxed">
            <li>
              Enter your business details and your client's details at the
              top of the form.
            </li>
            <li>
              Set an invoice number, issue date, and due date so the invoice
              is easy to track and reference later.
            </li>
            <li>
              Add each line item with a description, quantity, and rate — the
              subtotal is calculated automatically.
            </li>
            <li>
              Apply tax or a discount if they apply, and add any notes about
              payment terms or instructions.
            </li>
            <li>
              Preview the result on the right, then click{" "}
              <strong>Download PDF</strong> to save it to your device.
            </li>
          </ol>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-ink mb-4">
            What Should an Invoice Include?
          </h2>
          <p className="text-ink-light leading-relaxed mb-4">
            A complete invoice should include your business or sender
            information, your client's information, an invoice number, the
            issue and due dates, a description of each item or service
            provided, quantity and rate for each line item, a subtotal, any
            taxes or discounts, the total amount due, your payment terms, and
            any relevant notes.
          </p>
          <p className="text-ink-light leading-relaxed">
            For a closer look at each field and why it matters, read our
            guide on{" "}
            <Link
              href="/blog/what-should-an-invoice-include"
              className="text-stamp hover:text-stamp-dark underline"
            >
              what an invoice should include
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-ink mb-4">
            Who Can Use This Invoice Generator?
          </h2>
          <p className="text-ink-light leading-relaxed">
            This tool works for anyone who bills clients directly —
            freelancers, consultants, developers, designers, photographers,
            and writers, as well as agencies, contractors, and small
            businesses billing one or several clients. If you need to send a
            clear, itemized invoice without setting up an accounting system,
            it's built for that.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-ink mb-4">
            Why Use a Free Online Invoice Generator?
          </h2>
          <p className="text-ink-light leading-relaxed">
            Building an invoice from scratch in a word processor or
            spreadsheet takes time and often produces inconsistent results
            between invoices. This tool handles the layout, math, and
            formatting for you — you fill in the details, see the result
            update live, and download a clean PDF in a couple of minutes,
            without paying for software or creating an account.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-ink mb-4">
            Is My Invoice Data Stored?
          </h2>
          <p className="text-ink-light leading-relaxed">
            No. The details you type into the invoice form — client
            information, line items, amounts, notes — are processed entirely
            in your browser to build the live preview and the downloaded
            PDF. That data is not transmitted to or stored on our servers,
            and it's cleared if you close or refresh the page. Like most
            websites, this site may use standard analytics, and may in the
            future display advertising (such as Google AdSense); those
            systems operate independently of the invoice tool and are
            described in full in our{" "}
            <Link
              href="/privacy-policy"
              className="text-stamp hover:text-stamp-dark underline"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </section>

        <Faq />

        <section>
          <h2 className="font-display text-2xl font-semibold text-ink mb-4">
            Invoice Guides
          </h2>
          <p className="text-ink-light leading-relaxed mb-6">
            A few practical guides if you want more detail on getting
            invoices right.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {featuredGuides.map((g) => (
              <Link
                key={g.slug}
                href={`/blog/${g.slug}`}
                className="block bg-white/60 border border-ink/10 rounded-lg p-4 hover:border-stamp/40 hover:bg-white transition-colors"
              >
                <p className="text-sm font-medium text-ink leading-snug mb-1">
                  {g.title}
                </p>
                <p className="text-xs text-ink-faint leading-relaxed">
                  {g.description}
                </p>
              </Link>
            ))}
          </div>
          <Link
            href="/blog"
            className="inline-block mt-4 text-sm text-stamp hover:text-stamp-dark underline"
          >
            View all guides →
          </Link>
        </section>
      </div>

      <Footer />
    </main>
  );
}
