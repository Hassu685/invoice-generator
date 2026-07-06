"use client";

import { useEffect } from "react";

// Registers the service worker so the app can be installed and used offline.
export default function RegisterServiceWorker() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").catch(() => {
        // Fail silently — the app still works fully online without it.
      });
    }
  }, []);

  return null;
}
