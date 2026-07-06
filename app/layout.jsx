import { Fraunces, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import RegisterServiceWorker from "@/components/RegisterServiceWorker";

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
  metadataBase: new URL("https://example.com"),
  title: {
    default: "Ledger — Free Online Invoice Maker",
    template: "%s | Ledger",
  },
  description:
    "Create clean, professional invoices for free and download them as a PDF — right from your browser. No sign-up, no data stored on any server.",
  keywords: [
    "invoice maker",
    "free invoice generator",
    "online invoice",
    "PDF invoice",
    "invoice template",
    "billing tool",
  ],
  applicationName: "Ledger",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Ledger",
  },
  icons: {
    icon: [
      { url: "/icons/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    title: "Ledger — Free Online Invoice Maker",
    description:
      "Create clean, professional invoices for free and download them as a PDF — right from your browser.",
    type: "website",
    siteName: "Ledger",
  },
  twitter: {
    card: "summary",
    title: "Ledger — Free Online Invoice Maker",
    description:
      "Create clean, professional invoices for free and download them as a PDF — right from your browser.",
  },
};

export const viewport = {
  themeColor: "#1C2541",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${plexSans.variable} ${plexMono.variable} font-body antialiased`}>
        <RegisterServiceWorker />
        {children}
      </body>
    </html>
  );
}
