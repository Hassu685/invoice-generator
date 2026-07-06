"use client";

import { useRef, useState } from "react";
import InvoiceForm from "@/components/InvoiceForm";
import InvoicePreview from "@/components/InvoicePreview";
import InstallAppButton from "@/components/InstallAppButton";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { defaultInvoice } from "@/lib/types";

export default function HomePage() {
  const [invoice, setInvoice] = useState(defaultInvoice());
  const [downloading, setDownloading] = useState(false);
  const previewRef = useRef(null);
  const [mobileTab, setMobileTab] = useState("form");

  const handleDownload = async () => {
    if (!previewRef.current) return;
    setDownloading(true);
    try {
      const html2canvas = (await import("html2canvas")).default;
      const { jsPDF } = await import("jspdf");

      const canvas = await html2canvas(previewRef.current, {
        scale: 2,
        backgroundColor: "#ffffff",
        useCORS: true,
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "px",
        format: [canvas.width, canvas.height],
      });
      pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
      pdf.save(`${invoice.invoiceNumber || "invoice"}.pdf`);
    } catch (err) {
      console.error(err);
      alert("Something went wrong while creating the PDF. Please try again.");
    } finally {
      setDownloading(false);
    }
  };

  return (
    <main className="min-h-screen">
      <Header
        right={
          <>
            <InstallAppButton />
            <button
              onClick={handleDownload}
              disabled={downloading}
              className="flex items-center gap-1.5 bg-stamp hover:bg-stamp-dark disabled:opacity-60 text-paper font-medium text-sm px-3 sm:px-5 py-2.5 rounded-md transition-colors shadow-sm whitespace-nowrap shrink-0"
            >
              <span aria-hidden="true">⬇</span>
              <span className="hidden sm:inline">
                {downloading ? "Preparing…" : "Download PDF"}
              </span>
            </button>
          </>
        }
      />

      {/* Hero intro */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-10 pb-2">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-stamp mb-3">
          Free · No sign-up · Nothing leaves your browser
        </p>
        <h1 className="font-display text-3xl sm:text-4xl font-semibold text-ink max-w-2xl leading-tight">
          Draft a professional invoice in minutes.
        </h1>
        <p className="text-ink-faint mt-3 max-w-xl">
          Fill in your details on the left, watch the invoice take shape on
          the right, then download it as a clean PDF — ready to send.
        </p>
      </div>

      {/* Mobile tab switch */}
      <div className="sm:hidden flex border-b border-ink/10 bg-paper">
        {["form", "preview"].map((tab) => (
          <button
            key={tab}
            onClick={() => setMobileTab(tab)}
            className={`flex-1 py-3 text-sm font-medium capitalize transition-colors ${
              mobileTab === tab
                ? "text-stamp border-b-2 border-stamp"
                : "text-ink-faint"
            }`}
          >
            {tab === "form" ? "Fill Details" : "Preview"}
          </button>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 grid grid-cols-1 sm:grid-cols-2 gap-10">
        {/* Form panel */}
        <section className={`${mobileTab === "form" ? "block" : "hidden"} sm:block`}>
          <div className="bg-white/60 rounded-xl border border-ink/10 p-6 sm:p-8">
            <InvoiceForm data={invoice} onChange={setInvoice} />
          </div>
        </section>

        {/* Preview panel */}
        <section
          className={`${mobileTab === "preview" ? "block" : "hidden"} sm:block sm:sticky sm:top-24 self-start`}
        >
          <div className="overflow-x-auto no-print-scrollbar pb-4">
            <InvoicePreview data={invoice} previewRef={previewRef} />
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
