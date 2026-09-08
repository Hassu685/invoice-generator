import PageShell from "@/components/PageShell";
import ContactForm from "@/components/ContactForm";
import { siteConfig, absoluteUrl } from "@/lib/siteConfig";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the Ledger team for support, feedback, or questions about the free invoice generator.",
  alternates: { canonical: absoluteUrl("/contact") },
  openGraph: {
    title: "Contact Us | Ledger",
    description:
      "Get in touch with the Ledger team for support, feedback, or questions about the free invoice generator.",
    url: absoluteUrl("/contact"),
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <PageShell eyebrow="Get In Touch" title="Contact Us">
      <p>
        Have a question, found a bug, or want to suggest a feature? We read
        every message. Fill out the form below — it opens your email app
        with your message ready to send — or email us directly at{" "}
        <a
          href={`mailto:${siteConfig.contactEmail}`}
          className="text-stamp hover:text-stamp-dark underline"
        >
          {siteConfig.contactEmail}
        </a>
        .
      </p>

      <div className="bg-white/60 rounded-xl border border-ink/10 p-6 sm:p-8 mt-6">
        <ContactForm />
      </div>

      <p className="text-sm text-ink-faint mt-8">
        We typically reply within 1–2 business days. For fastest results,
        please describe your browser and device if you're reporting a
        technical issue.
      </p>
    </PageShell>
  );
}
