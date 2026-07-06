import PageShell from "@/components/PageShell";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the Ledger team for support, feedback, or partnership questions.",
};

export default function ContactPage() {
  return (
    <PageShell eyebrow="Get In Touch" title="Contact Us">
      <p>
        Have a question, found a bug, or want to suggest a feature? We read
        every message. Fill out the form below and it will open your email
        client with your message ready to send — or email us directly at{" "}
        <a
          href="mailto:hello@example.com"
          className="text-stamp hover:text-stamp-dark underline"
        >
          hello@example.com
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
