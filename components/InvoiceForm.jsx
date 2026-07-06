"use client";

import { emptyItem, emptyCustomer, currencySymbols } from "@/lib/types";

const accentOptions = [
  { key: "stamp", label: "Emerald Ink", swatch: "#2E7D6B" },
  { key: "gold", label: "Ledger Gold", swatch: "#C9A227" },
  { key: "ink", label: "Deep Navy", swatch: "#1C2541" },
];

export default function InvoiceForm({ data, onChange }) {
  const set = (key, value) => {
    onChange({ ...data, [key]: value });
  };

  const setMode = (mode) => {
    // switching mode never deletes data — customers[0] is always preserved
    set("mode", mode);
  };

  const updateCustomer = (id, patch) => {
    set(
      "customers",
      data.customers.map((c) => (c.id === id ? { ...c, ...patch } : c))
    );
  };

  const addCustomer = () =>
    set("customers", [...data.customers, emptyCustomer()]);

  const removeCustomer = (id) => {
    if (data.customers.length === 1) return;
    set("customers", data.customers.filter((c) => c.id !== id));
  };

  const updateItem = (customerId, itemId, patch) => {
    set(
      "customers",
      data.customers.map((c) =>
        c.id === customerId
          ? {
              ...c,
              items: c.items.map((it) =>
                it.id === itemId ? { ...it, ...patch } : it
              ),
            }
          : c
      )
    );
  };

  const addItem = (customerId) => {
    set(
      "customers",
      data.customers.map((c) =>
        c.id === customerId ? { ...c, items: [...c.items, emptyItem()] } : c
      )
    );
  };

  const removeItem = (customerId, itemId) => {
    set(
      "customers",
      data.customers.map((c) => {
        if (c.id !== customerId) return c;
        if (c.items.length === 1) return c;
        return { ...c, items: c.items.filter((it) => it.id !== itemId) };
      })
    );
  };

  // Single-customer mode only ever touches customers[0]
  const singleCustomer = data.customers[0];

  return (
    <div className="space-y-8">
      {/* Header eyebrow */}
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-stamp">
          New Entry
        </p>
        <h2 className="font-display text-2xl font-semibold text-ink mt-1">
          Invoice Details
        </h2>
      </div>

      {/* Mode switch */}
      <section>
        <p className="font-mono text-xs uppercase tracking-[0.15em] text-ink-faint mb-2">
          What kind of invoice do you want to create?
        </p>
        <div className="flex flex-wrap gap-2 p-1 bg-white/60 rounded-lg border border-ink/10 w-fit max-w-full">
          <button
            onClick={() => setMode("single")}
            className={`px-3 sm:px-4 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
              data.mode === "single"
                ? "bg-stamp text-paper shadow-sm"
                : "text-ink-faint hover:text-ink"
            }`}
          >
            Single Customer
          </button>
          <button
            onClick={() => setMode("multiple")}
            className={`px-3 sm:px-4 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
              data.mode === "multiple"
                ? "bg-stamp text-paper shadow-sm"
                : "text-ink-faint hover:text-ink"
            }`}
          >
            Multiple Customers
          </button>
        </div>
        <p className="text-xs text-ink-faint mt-2">
          {data.mode === "single"
            ? "A simple invoice for a single customer."
            : "Add each customer with their own items — they'll all combine into one invoice with a single grand total."}
        </p>
      </section>

      {/* Invoice meta */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Invoice Number">
          <input
            className="input"
            value={data.invoiceNumber}
            onChange={(e) => set("invoiceNumber", e.target.value)}
          />
        </Field>
        <Field label="Currency">
          <select
            className="input"
            value={data.currency}
            onChange={(e) => set("currency", e.target.value)}
          >
            {Object.keys(currencySymbols).map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Issue Date">
          <input
            type="date"
            className="input"
            value={data.issueDate}
            onChange={(e) => set("issueDate", e.target.value)}
          />
        </Field>
        <Field label="Due Date">
          <input
            type="date"
            className="input"
            value={data.dueDate}
            onChange={(e) => set("dueDate", e.target.value)}
          />
        </Field>
      </section>

      {/* From */}
      <section className="space-y-3">
        <p className="font-mono text-xs uppercase tracking-[0.15em] text-ink-faint">
          From
        </p>
        <input
          className="input"
          placeholder="Your name / business name"
          value={data.fromName}
          onChange={(e) => set("fromName", e.target.value)}
        />
        <input
          className="input"
          placeholder="Email"
          value={data.fromEmail}
          onChange={(e) => set("fromEmail", e.target.value)}
        />
        <textarea
          className="input min-h-[70px]"
          placeholder="Address"
          value={data.fromAddress}
          onChange={(e) => set("fromAddress", e.target.value)}
        />
      </section>

      {/* SINGLE CUSTOMER MODE */}
      {data.mode === "single" && singleCustomer && (
        <>
          <section className="space-y-3">
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-ink-faint">
              Bill To
            </p>
            <input
              className="input"
              placeholder="Client name"
              value={singleCustomer.name}
              onChange={(e) =>
                updateCustomer(singleCustomer.id, { name: e.target.value })
              }
            />
            <input
              className="input"
              placeholder="Email"
              value={singleCustomer.email}
              onChange={(e) =>
                updateCustomer(singleCustomer.id, { email: e.target.value })
              }
            />
            <textarea
              className="input min-h-[70px]"
              placeholder="Address"
              value={singleCustomer.address}
              onChange={(e) =>
                updateCustomer(singleCustomer.id, { address: e.target.value })
              }
            />
          </section>

          <ItemsEditor
            items={singleCustomer.items}
            onUpdateItem={(itemId, patch) =>
              updateItem(singleCustomer.id, itemId, patch)
            }
            onAddItem={() => addItem(singleCustomer.id)}
            onRemoveItem={(itemId) => removeItem(singleCustomer.id, itemId)}
          />
        </>
      )}

      {/* MULTIPLE CUSTOMERS MODE */}
      {data.mode === "multiple" && (
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-ink-faint">
              Customers
            </p>
            <button
              onClick={addCustomer}
              className="text-sm font-medium text-stamp hover:text-stamp-dark transition-colors"
            >
              + Add customer
            </button>
          </div>

          <div className="space-y-5">
            {data.customers.map((customer, idx) => (
              <div
                key={customer.id}
                className="rounded-lg border border-ink/10 bg-white/70 p-4 space-y-4"
              >
                <div className="flex items-center justify-between">
                  <p className="font-display text-sm font-semibold text-ink">
                    Customer #{idx + 1}
                  </p>
                  {data.customers.length > 1 && (
                    <button
                      onClick={() => removeCustomer(customer.id)}
                      className="text-xs text-ink-faint hover:text-red-500 transition-colors"
                    >
                      Remove customer ✕
                    </button>
                  )}
                </div>

                <div className="space-y-2">
                  <input
                    className="input"
                    placeholder="Client name"
                    value={customer.name}
                    onChange={(e) =>
                      updateCustomer(customer.id, { name: e.target.value })
                    }
                  />
                  <input
                    className="input"
                    placeholder="Email"
                    value={customer.email}
                    onChange={(e) =>
                      updateCustomer(customer.id, { email: e.target.value })
                    }
                  />
                  <textarea
                    className="input min-h-[60px]"
                    placeholder="Address"
                    value={customer.address}
                    onChange={(e) =>
                      updateCustomer(customer.id, { address: e.target.value })
                    }
                  />
                </div>

                <ItemsEditor
                  items={customer.items}
                  onUpdateItem={(itemId, patch) =>
                    updateItem(customer.id, itemId, patch)
                  }
                  onAddItem={() => addItem(customer.id)}
                  onRemoveItem={(itemId) => removeItem(customer.id, itemId)}
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Tax / Discount */}
      <section className="grid grid-cols-2 gap-4">
        <Field label="Discount %">
          <input
            type="number"
            className="input"
            value={data.discountPercent}
            onChange={(e) => set("discountPercent", Number(e.target.value))}
          />
        </Field>
        <Field label="Tax %">
          <input
            type="number"
            className="input"
            value={data.taxPercent}
            onChange={(e) => set("taxPercent", Number(e.target.value))}
          />
        </Field>
      </section>

      <Field label="Notes">
        <textarea
          className="input min-h-[80px]"
          value={data.notes}
          onChange={(e) => set("notes", e.target.value)}
        />
      </Field>

      {/* Accent picker */}
      <section>
        <p className="font-mono text-xs uppercase tracking-[0.15em] text-ink-faint mb-2">
          Theme accent
        </p>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {accentOptions.map((opt) => (
            <button
              key={opt.key}
              onClick={() => set("accent", opt.key)}
              className={`flex items-center gap-2 px-3 py-2 rounded-md border text-sm transition-all ${
                data.accent === opt.key
                  ? "border-ink shadow-sm bg-white"
                  : "border-transparent bg-white/50 hover:bg-white"
              }`}
            >
              <span
                className="w-3 h-3 rounded-full inline-block"
                style={{ backgroundColor: opt.swatch }}
              />
              {opt.label}
            </button>
          ))}
        </div>
      </section>

      <style jsx global>{`
        .input {
          width: 100%;
          background: white;
          border: 1px solid rgba(28, 37, 65, 0.15);
          border-radius: 6px;
          padding: 0.5rem 0.7rem;
          font-size: 0.9rem;
          color: #1c2541;
          transition: border-color 0.15s ease;
        }
        .input:focus {
          border-color: #2e7d6b;
        }
      `}</style>
    </div>
  );
}

function ItemsEditor({ items, onUpdateItem, onAddItem, onRemoveItem }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <p className="font-mono text-xs uppercase tracking-[0.15em] text-ink-faint">
          Items
        </p>
        <button
          onClick={onAddItem}
          className="text-sm font-medium text-stamp hover:text-stamp-dark transition-colors"
        >
          + Add item
        </button>
      </div>
      <div className="space-y-3">
        {items.map((item) => (
          <div key={item.id} className="flex flex-wrap sm:flex-nowrap gap-2 items-start">
            <input
              className="input flex-1 min-w-[140px]"
              placeholder="Description"
              value={item.description}
              onChange={(e) => onUpdateItem(item.id, { description: e.target.value })}
            />
            <input
              type="number"
              min={0}
              className="input w-20"
              placeholder="Qty"
              value={item.quantity}
              onChange={(e) => onUpdateItem(item.id, { quantity: Number(e.target.value) })}
            />
            <input
              type="number"
              min={0}
              className="input w-28"
              placeholder="Rate"
              value={item.rate}
              onChange={(e) => onUpdateItem(item.id, { rate: Number(e.target.value) })}
            />
            <button
              onClick={() => onRemoveItem(item.id)}
              className="px-2 py-2 text-ink-faint hover:text-red-500 transition-colors"
              aria-label="Remove item"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="block text-xs font-medium text-ink-faint mb-1">{label}</span>
      {children}
    </label>
  );
}
