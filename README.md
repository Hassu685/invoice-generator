# Ledger — Free Invoice Generator

Ledger is a browser-based invoice generator built with Next.js, React, and Tailwind CSS. Users can create an invoice, preview it live, and download a PDF without creating an account.

## AdSense-readiness

This project has been prepared for an AdSense review, but **approval can never be guaranteed by code alone**. Before submitting the site to Google, complete the production checklist below.

### Included in this build

- Original homepage copy explaining the tool and how it works
- FAQ section with visible answers and matching structured data
- About and Contact pages
- Privacy Policy and Terms of Service
- Eight original invoicing guides under `/blog`
- Article metadata, canonical URLs, Open Graph data, Article and BreadcrumbList structured data
- Dynamic `sitemap.xml` and `robots.txt`
- Centralized production URL/contact configuration
- Safe AdSense component that renders only when a real client ID and ad slot are configured
- `ads.txt` placeholder that deliberately does **not** publish a fake publisher ID
- Responsive navigation and accessible form labels/focus states
- Existing invoice/PDF functionality preserved

## Production setup

1. Copy `.env.example` to `.env.local`.
2. Set `NEXT_PUBLIC_SITE_URL` to the exact live HTTPS domain.
3. Set `NEXT_PUBLIC_CONTACT_EMAIL` to an inbox you actually monitor.
4. Run `npm install` and `npm run build` locally.
5. Deploy the production build.
6. Open and test `/`, `/about`, `/contact`, `/privacy-policy`, `/terms`, `/blog`, and every guide URL.
7. Verify `/sitemap.xml`, `/robots.txt`, and `/ads.txt` on the live domain.
8. Add the live site to Google Search Console and make sure important pages can be crawled/indexed.
9. Apply to Google AdSense from the AdSense dashboard and connect the site using Google's supplied code.
10. After Google provides your publisher ID, replace the placeholder in `public/ads.txt` with the exact line Google gives you.
11. Add real ad slot IDs through environment variables before displaying ads.

## AdSense configuration

The AdSense script is loaded only when `NEXT_PUBLIC_ADSENSE_CLIENT` is set. The article ad component also requires `NEXT_PUBLIC_ADSENSE_ARTICLE_SLOT`.

Example:

```env
NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-1234567890123456
NEXT_PUBLIC_ADSENSE_ARTICLE_SLOT=1234567890
```

Do not use example IDs in production. Do not place ads so they can be mistaken for navigation, download controls, form fields, or other interactive elements. Do not encourage visitors to click ads.

If you receive traffic from regions where Google requires consent-management configuration, configure the appropriate Google-supported consent solution in AdSense before serving personalized advertising there. Do not create a fake consent banner merely for appearance.

## Privacy accuracy

Ledger's invoice editor and PDF generation run in the browser. That does not mean the website collects no information at all: hosting, advertising, analytics, or other third-party services can process technical information depending on what is enabled. Keep the Privacy Policy synchronized with the actual production configuration.

The Contact form opens the visitor's email application; it does not submit contact data to a Ledger backend.

## Important review checklist

- Use a real domain and real contact email.
- Remove every placeholder such as `YOUR-DOMAIN.com` before applying.
- Make sure the site is publicly accessible and not password-protected.
- Keep the eight guides original, useful, readable, and free of copied/spun text.
- Do not add thin pages solely to increase page count.
- Keep legal pages easy to find from the footer.
- Test mobile navigation, invoice editing, PDF download, and contact email behavior.
- Keep the Privacy Policy truthful if analytics, ads, cookies, or other third-party services change.

## Scripts

```bash
npm run dev
npm run build
npm run start
```
