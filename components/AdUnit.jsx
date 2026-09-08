"use client";

import { useEffect, useRef } from "react";

// A safe, no-op-until-configured AdSense slot.
//
// This component renders nothing unless BOTH of the following are set:
//   - NEXT_PUBLIC_ADSENSE_CLIENT (e.g. "ca-pub-XXXXXXXXXXXXXXXX")
//   - a `slot` prop with a real ad slot ID from your AdSense account
//
// This means the site works normally, with no empty ad boxes or layout
// shift, until AdSense is actually approved and configured. Once both
// values are set, this component will request and render a real ad unit.
//
// Usage:
//   <AdUnit slot="1234567890" />
//
// Placement guidance: only use this component in supplemental positions
// (e.g. between content sections on the blog), never inside the invoice
// form/preview, never directly above a button, and never in a way that
// could be mistaken for navigation or a "Download" action.
export default function AdUnit({
  slot,
  format = "auto",
  responsive = true,
  className = "",
  label = "Advertisement",
}) {
  const insRef = useRef(null);
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;
  const enabled = Boolean(client && slot);

  useEffect(() => {
    if (!enabled) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      // Fail silently — a missing/blocked ad script should never break the page.
    }
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div className={`w-full ${className}`}>
      <p className="text-center text-[0.65rem] uppercase tracking-[0.2em] text-ink-faint font-mono mb-1">
        {label}
      </p>
      <ins
        ref={insRef}
        className="adsbygoogle block"
        style={{ display: "block" }}
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? "true" : "false"}
      />
    </div>
  );
}
