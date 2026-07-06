import PageShell from "@/components/PageShell";

export const metadata = {
  title: "About Us",
  description:
    "Learn about Ledger, a free browser-based invoice maker built to help freelancers and small businesses create professional invoices in minutes.",
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

      <p>
        We built Ledger around a simple idea: creating an invoice should take
        minutes, not an entire afternoon. Fill in your details, add your line
        items, pick a currency and an accent color, and download a clean PDF
        that you can send straight to your client.
      </p>

      <h2 className="font-display text-xl font-semibold text-ink mt-8 mb-2">
        Why we built it
      </h2>
      <p>
        Many independent workers and small teams don't need a full invoicing
        platform with logins, subscriptions, or recurring billing — they just
        need to bill a client quickly and get paid. Ledger focuses on doing
        that one job extremely well, with a design that looks as good as a
        printed paper ledger and works just as reliably.
      </p>

      <h2 className="font-display text-xl font-semibold text-ink mt-8 mb-2">
        How it works
      </h2>
      <p>
        Everything happens directly in your browser. When you type into the
        form, the invoice preview updates instantly. When you click{" "}
        <strong>Download PDF</strong>, your browser renders the invoice and
        saves it as a file on your own device — nothing is uploaded or stored
        on our servers. You can also install Ledger as an app on your phone
        or desktop for quick, offline-friendly access.
      </p>

      <h2 className="font-display text-xl font-semibold text-ink mt-8 mb-2">
        Who it's for
      </h2>
      <p>
        Freelance designers, developers, writers, and photographers.
        Consultants and agencies billing multiple clients. Small shops and
        service providers who want an invoice that looks trustworthy and
        organized. If that sounds like you, Ledger was made with you in mind.
      </p>

      <p>
        Have feedback or a feature you'd like to see? We'd love to hear from
        you — visit our{" "}
        <a href="/contact" className="text-stamp hover:text-stamp-dark underline">
          Contact page
        </a>{" "}
        to get in touch.
      </p>
    </PageShell>
  );
}
