"use client";

import { useRef, useState } from "react";
import InvoiceForm from "@/components/InvoiceForm";
import InvoicePreview from "@/components/InvoicePreview";
import InstallAppButton from "@/components/InstallAppButton";
import Header from "@/components/Header";
import { defaultInvoice } from "@/lib/types";

export default function InvoiceTool() {
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

      // Safety check: agar canvas 0-size bana, to yahin pakad lo
      // (pehle ye silently fail ho ke generic alert de deta tha)
      if (!canvas.width || !canvas.height) {
        throw new Error(
          `Invalid canvas size: ${canvas.width}x${canvas.height}. Preview element likely not visible/rendered.`
        );
      }

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "px",
        format: [canvas.width, canvas.height],
      });
      pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
      pdf.save(`${invoice.invoiceNumber || "invoice"}.pdf`);
    } catch (err) {
      console.error("PDF generation failed:", err);
      alert("Something went wrong while creating the PDF. Please try again.");
    } finally {
      setDownloading(false);
    }
  };

  // Download button ko alag se nikala taaki Header mobile par isse
  // hamburger ke barabar me render kar sake.
  const downloadButton = (
    <button
      onClick={handleDownload}
      disabled={downloading}
      className="flex items-center gap-1.5 bg-stamp hover:bg-stamp-dark disabled:opacity-60 text-paper font-medium text-sm px-3 sm:px-5 py-2.5 rounded-md transition-colors shadow-sm whitespace-nowrap shrink-0"
    >
      <span aria-hidden="true">⬇</span>
      <span>{downloading ? "Preparing…" : "Download PDF"}</span>
    </button>
  );

  return (
    <>
      <Header
        right={
          <>
            <InstallAppButton />
            {downloadButton}
          </>
        }
        downloadButton={downloadButton}
      />

      {/* Hero intro */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-10 pb-2">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-stamp mb-3">
          Free · No sign-up · Your invoice data stays in your browser
        </p>
        <h1 className="font-display text-3xl sm:text-4xl font-semibold text-ink max-w-2xl leading-tight">
          Free Invoice Generator — draft a professional invoice in minutes.
        </h1>
        <p className="text-ink-faint mt-3 max-w-xl">
          Create professional invoices online for free, customize them to
          match your brand, and download them as a PDF — no account needed.
          Fill in your details on the left and watch the invoice take shape
          on the right.
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
        {/* Form panel — ye kabhi capture nahi hota, isliye hidden/block toggle theek hai */}
        <section
          className={`${mobileTab === "form" ? "block" : "hidden"} sm:block`}
        >
          <div className="bg-white/60 rounded-xl border border-ink/10 p-6 sm:p-8">
            <InvoiceForm data={invoice} onChange={setInvoice} />
          </div>
        </section>

        {/*
          Preview panel — YE hi html2canvas se capture hota hai.
          IMPORTANT: yahan kabhi "hidden" (display:none) use mat karo,
          warna html2canvas ko 0x0 size milta hai aur PDF banna fail
          ho jata hai (yehi mobile wala bug tha).

          Fix: mobile pe jab tab "preview" active nahi hai, to element
          ko "fixed" karke screen se bahar (off-screen) bhej do —
          display:block hi rahega, bas visually hidden. sm+ (desktop)
          pe hamesha normal static position pe wapas aa jata hai.
        */}
        <section
          className={`sm:sticky sm:top-24 self-start sm:static sm:w-auto sm:block ${
            mobileTab === "preview"
              ? "block"
              : "fixed top-0 left-[-9999px] w-screen"
          }`}
        >
          <div className="overflow-x-auto no-print-scrollbar pb-4">
            <InvoicePreview data={invoice} previewRef={previewRef} />
          </div>
        </section>
      </div>
    </>
  );
}