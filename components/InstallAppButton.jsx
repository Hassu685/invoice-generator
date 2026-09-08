"use client";

import { useEffect, useState } from "react";

// Shows a native "Install App" button on browsers that support the PWA
// install prompt (Chrome, Edge, Android, and desktop). On iOS Safari,
// which doesn't fire beforeinstallprompt, we show a short manual hint instead.
export default function InstallAppButton() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [installed, setInstalled] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [showIOSHint, setShowIOSHint] = useState(false);

  useEffect(() => {
    const standalone =
      window.matchMedia?.("(display-mode: standalone)").matches ||
      window.navigator.standalone === true;
    setInstalled(standalone);

    const ua = window.navigator.userAgent || "";
    setIsIOS(/iphone|ipad|ipod/i.test(ua) && !window.MSStream);

    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };
    const handleAppInstalled = () => {
      setInstalled(true);
      setDeferredPrompt(null);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", handleAppInstalled);
    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, []);

  if (installed) return null;

  const handleClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      await deferredPrompt.userChoice;
      setDeferredPrompt(null);
      return;
    }
    if (isIOS) {
      setShowIOSHint((v) => !v);
    }
  };

  if (!deferredPrompt && !isIOS) return null;

  return (
    <div className="relative">
      <button
        onClick={handleClick}
        className="flex items-center gap-1.5 border border-ink/15 hover:border-ink/30 bg-white/70 hover:bg-white text-ink text-sm font-medium px-2.5 sm:px-3.5 py-2.5 rounded-md transition-colors whitespace-nowrap shrink-0"
        aria-label="Install app"
      >
        <span aria-hidden="true">⭳</span>
        <span>Install App</span>
      </button>

      {showIOSHint && (
        <div className="absolute right-0 mt-2 w-56 sm:w-64 bg-white border border-ink/10 rounded-lg shadow-lg p-3 text-xs text-ink-faint z-30">
          Tap the Share icon in Safari, then choose{" "}
          <span className="font-medium text-ink">"Add to Home Screen"</span> to
          install this app.
        </div>
      )}
    </div>
  );
}