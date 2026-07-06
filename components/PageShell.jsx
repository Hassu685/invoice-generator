import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function PageShell({ eyebrow, title, children }) {
  return (
    <main className="min-h-screen flex flex-col">
      <Header
        right={
          <a
            href="/"
            className="bg-stamp hover:bg-stamp-dark text-paper font-medium text-sm px-3 sm:px-5 py-2.5 rounded-md transition-colors shadow-sm whitespace-nowrap shrink-0"
          >
            Open App
          </a>
        }
      />

      <div className="flex-1 max-w-3xl mx-auto px-4 sm:px-8 py-12 sm:py-16 w-full">
        {eyebrow && (
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-stamp mb-2">
            {eyebrow}
          </p>
        )}
        <h1 className="font-display text-3xl sm:text-4xl font-semibold text-ink mb-8">
          {title}
        </h1>
        <div className="space-y-6 text-ink-light leading-relaxed">
          {children}
        </div>
      </div>

      <Footer />
    </main>
  );
}
