import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-ink flex items-center justify-center">
              <span className="font-display text-paper text-sm font-semibold">L</span>
            </div>
            <div>
              <p className="font-display text-sm font-semibold leading-none">Ledger</p>
              <p className="font-mono text-[0.6rem] text-ink-faint uppercase tracking-[0.2em] mt-1">
                Invoice Maker
              </p>
            </div>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-faint">
            <Link href="/" className="hover:text-stamp transition-colors">
              Invoice Generator
            </Link>
            <Link href="/blog" className="hover:text-stamp transition-colors">
              Guides
            </Link>
            <Link href="/about" className="hover:text-stamp transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:text-stamp transition-colors">
              Contact
            </Link>
            <Link href="/privacy-policy" className="hover:text-stamp transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-stamp transition-colors">
              Terms of Service
            </Link>
          </nav>
        </div>

        <div className="mt-8 pt-6 border-t border-dashed border-ink/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-ink-faint font-mono">
          <p>© {new Date().getFullYear()} Ledger. All rights reserved.</p>
          <p>Your invoice details are processed in your browser and are not stored on our servers.</p>
        </div>
      </div>
    </footer>
  );
}
