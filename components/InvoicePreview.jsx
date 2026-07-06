import {
  currencySymbols,
  calcTotals,
  calcCustomerSubtotal,
} from "@/lib/types";

const accentMap = {
  stamp: { text: "#2E7D6B", bg: "#DCEDE8", border: "#2E7D6B" },
  gold: { text: "#9C7E1B", bg: "#F4E9C1", border: "#C9A227" },
  ink: { text: "#1C2541", bg: "#E7E9F0", border: "#1C2541" },
};

export default function InvoicePreview({ data, previewRef }) {
  const { subtotal, discountAmt, taxAmt, total } = calcTotals(data);
  const sym = currencySymbols[data.currency] ?? data.currency;
  const accent = accentMap[data.accent] ?? accentMap.stamp;
  const isMultiple = data.mode === "multiple" && data.customers.length > 1;

  return (
    <div
      ref={previewRef}
      className="bg-white text-ink w-full max-w-[720px] mx-auto shadow-xl relative"
      style={{ fontFamily: "var(--font-plex)" }}
    >
      {/* stamp corner */}
      <div
        className="absolute top-6 right-6 rounded-full border-2 flex items-center justify-center text-center px-3 py-3 rotate-6 select-none"
        style={{
          borderColor: accent.border,
          color: accent.text,
          width: 92,
          height: 92,
        }}
      >
        <span className="font-display text-[0.65rem] font-semibold uppercase tracking-widest leading-tight">
          {data.currency}
          <br />
          Ledger
        </span>
      </div>

      <div className="p-10">
        <div className="flex items-baseline justify-between border-b border-ink/10 pb-6">
          <div>
            <p
              className="font-mono text-xs uppercase tracking-[0.25em]"
              style={{ color: accent.text }}
            >
              Invoice
            </p>
            <h1 className="font-display text-4xl font-semibold mt-1">
              {data.invoiceNumber || "INV-0000"}
            </h1>
          </div>
          <div className="text-right text-sm text-ink-faint font-mono">
            <p>Issued: {data.issueDate}</p>
            <p>Due: {data.dueDate}</p>
          </div>
        </div>

        {/* From + (single) Bill To */}
        <div className="grid grid-cols-2 gap-8 py-6 border-b border-ink/10">
          <div>
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-ink-faint mb-1">
              From
            </p>
            <p className="font-semibold">{data.fromName || "Your Business Name"}</p>
            <p className="text-sm text-ink-faint whitespace-pre-line">{data.fromEmail}</p>
            <p className="text-sm text-ink-faint whitespace-pre-line">{data.fromAddress}</p>
          </div>
          <div>
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-ink-faint mb-1">
              Bill To
            </p>
            {isMultiple ? (
              <p className="font-semibold">
                {data.customers.length} Customers
              </p>
            ) : (
              <>
                <p className="font-semibold">{data.customers[0]?.name || "Client Name"}</p>
                <p className="text-sm text-ink-faint whitespace-pre-line">{data.customers[0]?.email}</p>
                <p className="text-sm text-ink-faint whitespace-pre-line">{data.customers[0]?.address}</p>
              </>
            )}
          </div>
        </div>

        {/* SINGLE CUSTOMER: one items table */}
        {!isMultiple && (
          <ItemsTable items={data.customers[0]?.items ?? []} sym={sym} accent={accent} />
        )}

        {/* MULTIPLE CUSTOMERS: a section per customer */}
        {isMultiple &&
          data.customers.map((customer, idx) => (
            <div key={customer.id} className="mt-6 pt-6 border-t border-ink/10 first:mt-4 first:pt-0 first:border-t-0">
              <div className="flex items-baseline justify-between mb-2">
                <p className="font-display text-base font-semibold">
                  {idx + 1}. {customer.name || `Customer #${idx + 1}`}
                </p>
                <p className="text-xs text-ink-faint">{customer.email}</p>
              </div>
              {customer.address && (
                <p className="text-xs text-ink-faint whitespace-pre-line mb-2">{customer.address}</p>
              )}
              <ItemsTable items={customer.items} sym={sym} accent={accent} compact />
              <div className="flex justify-end mt-1">
                <p className="text-sm font-medium">
                  Subtotal: {sym} {calcCustomerSubtotal(customer).toFixed(2)}
                </p>
              </div>
            </div>
          ))}

        {/* totals */}
        <div className="mt-6 ml-auto w-full sm:w-64 space-y-1 text-sm">
          <Row label="Subtotal" value={`${sym} ${subtotal.toFixed(2)}`} />
          {data.discountPercent > 0 && (
            <Row label={`Discount (${data.discountPercent}%)`} value={`- ${sym} ${discountAmt.toFixed(2)}`} />
          )}
          {data.taxPercent > 0 && (
            <Row label={`Tax (${data.taxPercent}%)`} value={`+ ${sym} ${taxAmt.toFixed(2)}`} />
          )}
          <div
            className="flex justify-between pt-2 mt-2 border-t-2 font-display text-lg font-semibold"
            style={{ borderColor: accent.border, color: accent.text }}
          >
            <span>Total</span>
            <span>
              {sym} {total.toFixed(2)}
            </span>
          </div>
        </div>

        {data.notes && (
          <div className="mt-8 pt-4 border-t border-dashed border-ink/15 text-sm text-ink-faint whitespace-pre-line">
            {data.notes}
          </div>
        )}
      </div>

      {/* perforation footer */}
      <div className="h-3 w-full" style={{ backgroundColor: accent.bg }} />
    </div>
  );
}

function ItemsTable({ items, sym, accent, compact }) {
  return (
    <table className={`w-full ${compact ? "mt-2" : "mt-6"} text-sm`}>
      <thead>
        <tr
          className="text-left font-mono text-[0.65rem] uppercase tracking-[0.15em]"
          style={{ color: accent.text }}
        >
          <th className="pb-2 font-medium">Description</th>
          <th className="pb-2 font-medium text-right w-16">Qty</th>
          <th className="pb-2 font-medium text-right w-24">Rate</th>
          <th className="pb-2 font-medium text-right w-28">Amount</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id} className="border-t border-ink/10">
            <td className="py-2 pr-2">{item.description || "—"}</td>
            <td className="py-2 text-right">{item.quantity}</td>
            <td className="py-2 text-right">
              {sym} {item.rate.toFixed(2)}
            </td>
            <td className="py-2 text-right font-medium">
              {sym} {(item.quantity * item.rate).toFixed(2)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function Row({ label, value }) {
  return (
    <div className="flex justify-between text-ink-faint">
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}
