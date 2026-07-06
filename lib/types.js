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

export const defaultInvoice = () => ({
  invoiceNumber: "INV-0001",
  issueDate: new Date().toISOString().slice(0, 10),
  dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10),
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
