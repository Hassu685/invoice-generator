import Link from "next/link";
import PageShell from "@/components/PageShell";
import { siteConfig, absoluteUrl } from "@/lib/siteConfig";

export const metadata = {
  title: "About Us",
  description:
    "Learn about Ledger, a free browser-based invoice maker built to help freelancers and small businesses create professional invoices in minutes.",
  alternates: { canonical: absoluteUrl("/about") },
  openGraph: {
    title: "About Ledger",
    description:
      "Learn about Ledger, a free browser-based invoice maker built to help freelancers and small businesses create professional invoices in minutes.",
    url: absoluteUrl("/about"),
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <PageShell eyebrow="Our Story" title="About Ledger">
      <p>
        Ledger is a free, browser-based invoice maker built for freelancers,
        consultants, small business owners, and anyone who needs to send a
        professional-looking invoice without wrestling with spreadsheets or
        expensive accounting software.
      </p>

      <h2 className="font-display text-xl font-semibold text-ink mt-8 mb-2">
        Why we built it
      </h2>
      <p>
        Many independent workers and small teams don't need a full invoicing
        platform with logins, subscriptions, or recurring billing — they just
        need to bill a client quickly and get paid. Ledger focuses on doing
        that one job well, with a design that looks as good as a printed
        paper ledger and works just as reliably.
      </p>

      <h2 className="font-display text-xl font-semibold text-ink mt-8 mb-2">
        Who Ledger is for
      </h2>
      <p>
        Freelance designers, developers, writers, and photographers.
        Consultants and agencies billing multiple clients. Small shops and
        service providers who want an invoice that looks organized and
        trustworthy. If that sounds like you, Ledger was made with you in
        mind.
      </p>

      <h2 className="font-display text-xl font-semibold text-ink mt-8 mb-2">
        How the invoice generator works
      </h2>
      <p>
        Everything happens directly in your browser. As you type into the
        form, the invoice preview updates instantly. When you click{" "}
        <strong>Download PDF</strong>, your browser renders the invoice and
        saves it as a file on your own device. You can also install Ledger as
        an app on your phone or desktop for quick, offline-friendly access to
        the tool itself.
      </p>

      <h2 className="font-display text-xl font-semibold text-ink mt-8 mb-2">
        Our approach to privacy
      </h2>
      <p>
        The details you type into an invoice — client names, amounts, notes —
        are processed on your device and are not sent to or stored on our
        servers. Like most websites, this site may still use standard
        analytics or, in the future, third-party advertising (such as Google
        AdSense) to help keep it free to use; those systems work
        independently of your invoice data. Full details are in our{" "}
        <Link href="/privacy-policy" className="text-stamp hover:text-stamp-dark underline">
          Privacy Policy
        </Link>
        .
      </p>

      <h2 className="font-display text-xl font-semibold text-ink mt-8 mb-2">
        Product philosophy
      </h2>
      <p>
        We'd rather do one thing — invoicing — well than bolt on features
        that turn a simple tool into something that needs a manual. If
        there's a change that would make invoicing faster or clearer without
        adding unnecessary complexity, that's the kind of feedback we want to
        hear.
      </p>

      <p>
        Have feedback or a feature you'd like to see? We'd love to hear from
        you — visit our{" "}
        <Link href="/contact" className="text-stamp hover:text-stamp-dark underline">
          Contact page
        </Link>{" "}
        to get in touch, or reach us directly at{" "}
        <a
          href={`mailto:${siteConfig.contactEmail}`}
          className="text-stamp hover:text-stamp-dark underline"
        >
          {siteConfig.contactEmail}
        </a>
        .
      </p>
    </PageShell>
  );
}
