// Single source of truth for production URLs and contact details.
// Set these values in .env.local / your hosting environment before launch.

export const siteConfig = {
  siteName: "Ledger",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://YOUR-DOMAIN.com",
  siteDescription:
    "Create clean, professional invoices for free and download them as a PDF right from your browser. No sign-up required.",
  contactEmail:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@YOUR-DOMAIN.com",
  twitterHandle: process.env.NEXT_PUBLIC_TWITTER_HANDLE || "",
};

export function absoluteUrl(path = "") {
  const base = siteConfig.siteUrl.replace(/\/$/, "");
  const suffix = path.startsWith("/") ? path : `/${path}`;
  return `${base}${suffix === "/" ? "" : suffix}`;
}
