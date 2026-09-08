"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/", label: "Invoice Generator" },
  { href: "/blog", label: "Guides" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header({ right }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-paper/90 backdrop-blur border-b border-ink/10">
      <div className="max-w-7xl mx-auto px-3 sm:px-8 h-16 flex items-center justify-between gap-2 sm:gap-4">
        <Link href="/" className="flex items-center gap-2 shrink-0 min-w-0" onClick={() => setOpen(false)}>
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-ink flex items-center justify-center shrink-0">
            <span className="font-display text-paper text-base sm:text-lg font-semibold">L</span>
          </div>
          <div className="min-w-0">
            <p className="font-display text-base sm:text-lg font-semibold leading-tight truncate">Ledger</p>
            <p className="hidden sm:block font-mono text-[0.62rem] text-ink-faint uppercase tracking-[0.2em]">
              Invoice Maker
            </p>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1 mx-auto">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3 py-2 text-sm font-medium rounded-md transition-colors ${isActive ? "text-ink" : "text-ink-faint hover:text-ink"
                  }`}
              >
                {link.label}
                {isActive && (
                  <span
                    className="absolute left-3 right-3 -bottom-[1px] h-[2px] rounded-full"
                    style={{ backgroundColor: "#2E7D6B" }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          {/* Desktop/tablet: right content stays in top bar */}
          <div className="hidden lg:flex items-center gap-1.5 sm:gap-3">
            {right}
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-md border border-ink/15 bg-white/70 hover:bg-white text-ink transition-colors shrink-0"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? (
              <span className="text-lg leading-none">✕</span>
            ) : (
              <span className="flex flex-col gap-[3px]" aria-hidden="true">
                <span className="w-4 h-[2px] bg-ink rounded-full" />
                <span className="w-4 h-[2px] bg-ink rounded-full" />
                <span className="w-4 h-[2px] bg-ink rounded-full" />
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile nav panel */}
      {open && (
        <nav className="lg:hidden border-t border-ink/10 bg-paper">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 flex flex-col">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`py-2.5 text-sm font-medium border-b border-dashed border-ink/10 last:border-b-0 transition-colors ${isActive ? "text-stamp" : "text-ink-faint hover:text-ink"
                    }`}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Right content (install/download) below the links on mobile */}
            {right && (
              <div className="pt-3 flex items-center gap-2">
                {right}
              </div>
            )}
          </div>
        </nav>
      )}
    </header>
  );
}