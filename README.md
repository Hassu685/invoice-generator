# Ledger — Invoice Maker (Next.js)

A responsive invoice generator where users fill in their details, see a live
preview, and download a ready-to-send PDF — all directly in the browser.
No data is ever saved on a server.

## Theme
"Ledger & Ink" — paper-cream background, deep navy ink, and an emerald/gold
stamp accent (switchable from the form).

## Setup (on your own computer)

```bash
npm install
npm run dev
```

Then open `http://localhost:3000` in your browser.

## Production build

```bash
npm run build
npm run start
```

## Features
- From / To details, multiple line items (add/remove)
- Automatic Tax % and Discount % calculation
- Currency selector (PKR, USD, EUR, GBP, AED, SAR, INR)
- 3 accent themes (Emerald Ink, Ledger Gold, Deep Navy)
- Fully responsive — form/preview switch into tabs on mobile
- One-click PDF download (html2canvas + jsPDF)
- Installable as a Progressive Web App (PWA) on desktop and mobile,
  with offline support via a service worker
- About, Contact, Privacy Policy, and Terms of Service pages
- SEO metadata, `robots.txt`, and an auto-generated `sitemap.xml`

## Folder structure
```
app/              -> Next.js App Router pages (page.jsx, layout.jsx, globals.css)
app/about/        -> About page
app/contact/      -> Contact page
app/privacy-policy/ -> Privacy Policy page
app/terms/        -> Terms of Service page
app/sitemap.js    -> Auto-generated sitemap
components/       -> InvoiceForm, InvoicePreview, Footer, PageShell,
                     InstallAppButton, RegisterServiceWorker, ContactForm
lib/types.js      -> Invoice data helpers and totals calculation
public/           -> manifest.json, service worker (sw.js), icons, robots.txt
```

## Before you deploy
- Replace `hello@example.com` in `components/ContactForm.jsx` and the
  Contact page with your real support email address.
- Replace `https://example.com` in `app/layout.jsx` (`metadataBase`),
  `app/sitemap.js`, and `public/robots.txt` with your actual domain.
- Add your Google AdSense verification snippet / `ads.txt` file once your
  AdSense account is approved.

## Customize
- To change colors, edit the `stamp`, `gold`, `ink`, and `paper` colors in
  `tailwind.config.js`.
- Fonts are loaded in `app/layout.jsx` (Fraunces + IBM Plex Sans/Mono).
- App icons live in `public/icons/` — regenerate them if you change the logo.
