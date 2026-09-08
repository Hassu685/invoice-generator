import Link from "next/link";
import PageShell from "@/components/PageShell";
import { absoluteUrl } from "@/lib/siteConfig";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Read Ledger's privacy policy to understand what data we collect, how cookies and advertising work on this site, and your choices.",
  alternates: { canonical: absoluteUrl("/privacy-policy") },
};

export default function PrivacyPolicyPage() {
  return (
    <PageShell eyebrow="Legal" title="Privacy Policy">
      <p className="text-sm text-ink-faint">Last updated: September 8, 2026</p>

      <p>
        This Privacy Policy explains how Ledger ("we", "our", "us") handles
        information when you use this website and invoice-making tool (the
        "Service"). We built Ledger to work entirely in your browser, so we
        collect far less data than most web apps — but we still want to be
        completely transparent about what happens when you visit.
      </p>

      <h2 className="font-display text-xl font-semibold text-ink mt-8 mb-2">
        1. Invoice data you enter
      </h2>
      <p>
        The information you type into the invoice form — business names,
        client details, line items, amounts, and notes — is processed
        entirely on your own device. It is never transmitted to, or stored
        on, our servers. When you click "Download PDF," the file is
        generated locally in your browser and saved directly to your device.
        If you close or refresh the page, this information is cleared.
      </p>

      <h2 className="font-display text-xl font-semibold text-ink mt-8 mb-2">
        2. Automatically collected information
      </h2>
      <p>
        Like most websites, our hosting provider and any analytics tools we
        use may automatically log standard technical information, such as
        your browser type, device type, approximate location (based on IP
        address), pages visited, and the date and time of your visit. This
        information is used only in aggregate to understand how the Service
        is used and to keep it running reliably.
      </p>

      <h2 className="font-display text-xl font-semibold text-ink mt-8 mb-2">
        3. Cookies and advertising
      </h2>
      <p>
        We may work with third-party advertising partners, including Google
        AdSense, to display ads on this site. These partners may use cookies,
        web beacons, or similar technologies to collect information about
        your visits to this and other websites in order to provide
        advertisements about goods and services that may interest you.
      </p>
      <p>
        Google's use of advertising cookies enables it and its partners to
        serve ads based on your visits to this site and/or other sites on the
        internet. You may opt out of personalized advertising by visiting{" "}
        <a
          href="https://adssettings.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-stamp hover:text-stamp-dark underline"
        >
          Google Ads Settings
        </a>
        , or by visiting{" "}
        <a
          href="https://www.aboutads.info/choices"
          target="_blank"
          rel="noopener noreferrer"
          className="text-stamp hover:text-stamp-dark underline"
        >
          www.aboutads.info/choices
        </a>{" "}
        to opt out of participating vendors' use of cookies for personalized
        advertising.
      </p>

      <h2 className="font-display text-xl font-semibold text-ink mt-8 mb-2">
        4. Third-party links
      </h2>
      <p>
        Our Service may contain links to third-party websites. We are not
        responsible for the privacy practices or content of those sites. We
        encourage you to review the privacy policy of any site you visit.
      </p>

      <h2 className="font-display text-xl font-semibold text-ink mt-8 mb-2">
        5. Children's privacy
      </h2>
      <p>
        This Service is not directed at children under 13, and we do not
        knowingly collect personal information from children under 13.
      </p>

      <h2 className="font-display text-xl font-semibold text-ink mt-8 mb-2">
        6. Your choices
      </h2>
      <p>
        Because invoice data never leaves your browser, there is no account
        data to request or delete. You can control cookies through your
        browser settings, and you can manage ad personalization through the
        links above.
      </p>

      <h2 className="font-display text-xl font-semibold text-ink mt-8 mb-2">
        7. Changes to this policy
      </h2>
      <p>
        We may update this Privacy Policy from time to time. Any changes will
        be posted on this page with an updated "Last updated" date.
      </p>

      <h2 className="font-display text-xl font-semibold text-ink mt-8 mb-2">
        8. Contact us
      </h2>
      <p>
        If you have questions about this Privacy Policy, please visit our{" "}
        <a href="/contact" className="text-stamp hover:text-stamp-dark underline">
          Contact page
        </a>
        .
      </p>
    </PageShell>
  );
}
