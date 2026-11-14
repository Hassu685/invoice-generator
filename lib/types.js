// Simple plain-JS data helpers (no TypeScript, no interfaces).

export const emptyItem = () => ({
  id: crypto.randomUUID(),
  description: "",
  quantity: 1,
  rate: 0,
});

export const emptyCustomer = () => ({
  id: crypto.randomUUID(),
  name: "",
  email: "",
  address: "",
  items: [emptyItem()],
});

// NOTE: issueDate / dueDate start empty on purpose. Using new Date() here made
// the server HTML differ from the browser HTML (React hydration errors
// #418 / #423 / #425). InvoiceForm fills them in with todayDates() once it is
// running in the browser.
export const defaultInvoice = () => ({
  invoiceNumber: "INV-0001",
  issueDate: "",
  dueDate: "",
  currency: "PKR",

  fromName: "",
  fromEmail: "",
  fromAddress: "",

  // "single"  -> ek hi customer ki invoice
  // "multiple" -> bohat se customers, sab ek invoice mein combine
  mode: "single",
  customers: [emptyCustomer()],

  taxPercent: 0,
  discountPercent: 0,
  notes: "Thank you! Please settle payment within 7 days.",

  accent: "stamp",
});

// Today's date and the due date, in the user's LOCAL timezone (browser only).
export function todayDates(daysUntilDue = 7) {
  const fmt = (d) =>
    `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(
      d.getDate()
    ).padStart(2, "0")}`;
  const today = new Date();
  const due = new Date(today);
  due.setDate(due.getDate() + daysUntilDue);
  return { issueDate: fmt(today), dueDate: fmt(due) };
}

export const currencySymbols = {
  PKR: "Rs",
  USD: "$",
  EUR: "€",
  GBP: "£",
  AED: "AED",
  SAR: "SAR",
  INR: "₹",
};

// Total for a single customer's line items
export function calcCustomerSubtotal(customer) {
  return customer.items.reduce((sum, it) => sum + it.quantity * it.rate, 0);
}

// Grand totals across ALL customers in the invoice
export function calcTotals(inv) {
  const subtotal = inv.customers.reduce(
    (sum, c) => sum + calcCustomerSubtotal(c),
    0
  );
  const discountAmt = (subtotal * inv.discountPercent) / 100;
  const taxable = subtotal - discountAmt;
  const taxAmt = (taxable * inv.taxPercent) / 100;
  const total = taxable + taxAmt;
  return { subtotal, discountAmt, taxAmt, total };
}