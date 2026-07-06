import PageShell from "@/components/PageShell";

export const metadata = {
  title: "Terms of Service",
  description:
    "Read the terms and conditions for using Ledger, the free online invoice maker.",
};

export default function TermsPage() {
  return (
    <PageShell eyebrow="Legal" title="Terms of Service">
      <p className="text-sm text-ink-faint">Last updated: July 2026</p>

      <p>
        Welcome to Ledger. By accessing or using this website and invoice
        creation tool (the "Service"), you agree to be bound by these Terms
        of Service ("Terms"). If you do not agree with any part of these
        Terms, please do not use the Service.
      </p>

      <h2 className="font-display text-xl font-semibold text-ink mt-8 mb-2">
        1. Description of the Service
      </h2>
      <p>
        Ledger is a free, browser-based tool that lets you create and
        download invoices as PDF files. All invoice data is processed on
        your own device; the Service does not require an account and does
        not store your invoice content on any server.
      </p>

      <h2 className="font-display text-xl font-semibold text-ink mt-8 mb-2">
        2. Acceptable use
      </h2>
      <p>
        You agree to use the Service only for lawful purposes. You may not
        use Ledger to create fraudulent, deceptive, or misleading invoices,
        or to impersonate any person or business without authorization. You
        are solely responsible for the accuracy and legality of the content
        you enter into any invoice you create.
      </p>

      <h2 className="font-display text-xl font-semibold text-ink mt-8 mb-2">
        3. No professional advice
      </h2>
      <p>
        Ledger is a formatting and calculation tool. It does not provide
        legal, tax, or accounting advice, and we make no guarantee that
        invoices created with the Service satisfy the legal or tax
        requirements of your jurisdiction. Please consult a qualified
        professional for advice specific to your situation.
      </p>

      <h2 className="font-display text-xl font-semibold text-ink mt-8 mb-2">
        4. Availability and changes
      </h2>
      <p>
        We aim to keep the Service available and reliable, but we do not
        guarantee uninterrupted access. We may modify, suspend, or
        discontinue any part of the Service at any time, with or without
        notice.
      </p>

      <h2 className="font-display text-xl font-semibold text-ink mt-8 mb-2">
        5. Intellectual property
      </h2>
      <p>
        The Ledger name, logo, design, and underlying code are owned by us
        or our licensors and are protected by applicable intellectual
        property laws. You retain full ownership of the invoice content you
        create using the Service.
      </p>

      <h2 className="font-display text-xl font-semibold text-ink mt-8 mb-2">
        6. Third-party advertising
      </h2>
      <p>
        This Service may display advertisements served by third-party
        networks, including Google AdSense. We are not responsible for the
        content of these advertisements. Please see our{" "}
        <a href="/privacy-policy" className="text-stamp hover:text-stamp-dark underline">
          Privacy Policy
        </a>{" "}
        for more information about advertising cookies.
      </p>

      <h2 className="font-display text-xl font-semibold text-ink mt-8 mb-2">
        7. Disclaimer of warranties
      </h2>
      <p>
        The Service is provided "as is" and "as available" without
        warranties of any kind, whether express or implied, including but
        not limited to warranties of merchantability, fitness for a
        particular purpose, or non-infringement.
      </p>

      <h2 className="font-display text-xl font-semibold text-ink mt-8 mb-2">
        8. Limitation of liability
      </h2>
      <p>
        To the fullest extent permitted by law, we shall not be liable for
        any indirect, incidental, special, or consequential damages arising
        out of or related to your use of, or inability to use, the Service.
      </p>

      <h2 className="font-display text-xl font-semibold text-ink mt-8 mb-2">
        9. Changes to these Terms
      </h2>
      <p>
        We may revise these Terms from time to time. The updated version
        will be indicated by an updated "Last updated" date, and continued
        use of the Service after changes take effect constitutes acceptance
        of the revised Terms.
      </p>

      <h2 className="font-display text-xl font-semibold text-ink mt-8 mb-2">
        10. Contact us
      </h2>
      <p>
        If you have any questions about these Terms, please visit our{" "}
        <a href="/contact" className="text-stamp hover:text-stamp-dark underline">
          Contact page
        </a>
        .
      </p>
    </PageShell>
  );
}
