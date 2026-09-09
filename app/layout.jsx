
import { Fraunces, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import RegisterServiceWorker from "@/components/RegisterServiceWorker";
import { siteConfig, absoluteUrl } from "@/lib/siteConfig";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-plex",
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  weight: ["400", "500", "600"],
});

export const metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "Free Invoice Generator — Create PDF Invoices Online | Ledger",
    template: "%s | Ledger",
  },
  description: siteConfig.siteDescription,
  keywords: [
    "invoice generator",
    "free invoice generator",
    "online invoice generator",
    "free invoice maker",
    "invoice maker",
    "PDF invoice generator",
    "create invoice online",
    "professional invoice generator",
    "invoice generator for freelancers",
    "invoice maker for small business",
  ],
  applicationName: siteConfig.siteName,
  manifest: "/manifest.json",
  alternates: {
    canonical: absoluteUrl("/"),
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: siteConfig.siteName,
  },
  icons: {
    icon: [
      { url: "/icons/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    title: "Free Invoice Generator — Create PDF Invoices Online | Ledger",
    description: siteConfig.siteDescription,
    url: absoluteUrl("/"),
    type: "website",
    siteName: siteConfig.siteName,
  },
  twitter: {
    card: "summary",
    title: "Free Invoice Generator — Create PDF Invoices Online | Ledger",
    description: siteConfig.siteDescription,
  },
};

export const viewport = {
  themeColor: "#1C2541",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  const adsenseClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: siteConfig.siteName,
    url: absoluteUrl("/"),
    applicationCategory: "BusinessApplication",
    operatingSystem: "Any (web browser)",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description: siteConfig.siteDescription,
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {adsenseClient && (
          <Script
            id="adsbygoogle-init"
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClient}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        )}
      </head>
      <body className={`${fraunces.variable} ${plexSans.variable} ${plexMono.variable} font-body antialiased`}>
        <RegisterServiceWorker />
        {children}
      </body>
    </html>
  );
}
