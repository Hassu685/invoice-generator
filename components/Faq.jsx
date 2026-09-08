const FAQS = [
  {
    q: "Is this invoice generator free?",
    a: "Yes. Creating invoices and downloading them as a PDF is completely free, with no sign-up and no hidden paywall.",
  },
  {
    q: "Do I need to create an account?",
    a: "No account is needed. Open the tool, fill in your details, and download your invoice — that's the whole process.",
  },
  {
    q: "Can I download my invoice as a PDF?",
    a: "Yes. Click \"Download PDF\" and your browser will generate and save a PDF version of your invoice to your device.",
  },
  {
    q: "Can I add taxes?",
    a: "Yes. There's a tax percentage field that applies to your subtotal and shows the tax amount as its own line before the total.",
  },
  {
    q: "Can I add discounts?",
    a: "Yes. You can apply a percentage discount, which is calculated and shown separately from your subtotal and tax.",
  },
  {
    q: "Can I change the invoice color?",
    a: "Yes. You can choose an accent color for your invoice so it better matches your personal or business branding.",
  },
  {
    q: "Can freelancers use this invoice generator?",
    a: "Yes — it's built with freelancers in mind, supporting line items, hourly or fixed rates, multiple currencies, and custom notes.",
  },
  {
    q: "Can small businesses use it?",
    a: "Yes. It supports multiple line items, multiple clients per invoice, tax, discounts, and notes for purchase order numbers or payment instructions.",
  },
  {
    q: "Is my invoice data stored?",
    a: "The information you type into the form is processed in your browser to build the live preview and PDF. It is not sent to or stored on our servers, and it's cleared when you close or refresh the page.",
  },
  {
    q: "Can I use the invoice internationally?",
    a: "Yes. You can select from several currencies, and the layout works for both individual and business clients in most countries. Tax requirements vary by country, so check local rules for what your invoices legally need to include.",
  },
];

export default function Faq() {
  return (
    <section aria-labelledby="faq-heading">
      <h2 id="faq-heading" className="font-display text-2xl font-semibold text-ink mb-4">
        Frequently Asked Questions
      </h2>
      <div className="divide-y divide-ink/10 border-t border-b border-ink/10">
        {FAQS.map((item, i) => (
          <details key={i} className="group py-4">
            <summary className="flex items-center justify-between cursor-pointer list-none font-medium text-ink text-sm sm:text-base">
              <span>{item.q}</span>
              <span
                aria-hidden="true"
                className="ml-4 shrink-0 text-ink-faint transition-transform group-open:rotate-45 text-lg"
              >
                +
              </span>
            </summary>
            <p className="mt-2 text-sm text-ink-light leading-relaxed">
              {item.a}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}
