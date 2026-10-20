// Blog / guides content.
//
// Each article's `content` is an array of block objects so the article page
// can render consistent, accessible HTML without JSX inside a data file.
//
// Supported block types:
//   { type: "p", text }            text supports inline links: [anchor](/blog/slug)
//   { type: "h2", text }
//   { type: "h3", text }
//   { type: "ul", items: [text] }  items also support [anchor](url)
//   { type: "ol", items: [text] }
//   { type: "quote", text }
//   { type: "table", caption, headers: [..], rows: [[..], ..] }   (NEW)
//   { type: "cta", text, label, href }                            (NEW)
//
// FAQ: put an h2 with the exact text "Frequently Asked Questions" and then
// pairs of h3 (question) + p (answer). getFaqItems() reads them for FAQ schema.
import { siteConfig } from "./siteConfig";
export const AUTHOR = "The Ledger Team";
export const SITE_NAME = siteConfig.siteName;
export const SITE_URL = siteConfig.siteUrl;
export const TOOL_URL = "/";
export const FAQ_HEADING = "Frequently Asked Questions";

const CTA = (text) => ({
  type: "cta",
  text,
  label: "Create an invoice free",
  href: TOOL_URL,
});

export const articles = [
  // ---------------------------------------------------------------------
  {
    slug: "how-to-create-a-professional-invoice",
    title: "How to Create a Professional Invoice (Step-by-Step)",
    description:
      "Learn how to create a professional invoice with the right business details, client information, invoice number, items, prices, payment terms, and totals.",
    category: "Invoicing Basics",
    publishedAt: "2026-01-12",
    updatedAt: "2026-09-30",
    relatedSlugs: [
      "what-should-an-invoice-include",
      "how-to-number-invoices",
      "common-invoice-mistakes",
      "invoice-vs-receipt",
    ],
    content: [
      {
        type: "p",
        text: "How do you create a professional invoice? A professional invoice clearly shows who is billing, who is being billed, what was provided, how much is owed, and when payment is due. You do not need complicated accounting software or advanced design skills. You simply need the right information, a clear layout, and accurate totals.",
      },
      CTA("Skip the manual work: build this invoice in minutes with our free invoice generator."),

      { type: "h2", text: "1. Add Your Business Details" },
      {
        type: "p",
        text: "Start your invoice with your name or business name, address, email address, and phone number when relevant. If you operate under a registered business name or have a tax or VAT number that you are required to display, include it here as well. These details make it clear who issued the invoice and how the client can contact you.",
      },

      { type: "h2", text: "2. Add the Client's Details" },
      {
        type: "p",
        text: "Include the client's name or company name and the billing address or contact information needed for the invoice. If you are invoicing a company, use the business or legal name provided by the client so the invoice matches their accounting records. Invoicing a company for the first time? See our guide on [how to invoice a small business client](/blog/small-business-invoice-guide).",
      },

      { type: "h2", text: "3. Add an Invoice Number and Dates" },
      {
        type: "p",
        text: "Every professional invoice should have a unique invoice number, an invoice date, and a due date. A simple numbering system such as INV-0001, INV-0002, and INV-0003 makes invoices easier to track and gives you and your client a clear reference for payments, records, and follow-ups. Need help choosing a format? Read [how to number invoices](/blog/how-to-number-invoices).",
      },

      { type: "h2", text: "4. List Your Products or Services" },
      {
        type: "p",
        text: "Clearly describe every product or service being billed. Include the quantity and rate when applicable. For example, \"Website design — homepage and 3 subpages\" gives the client much more useful information than simply writing \"Design work.\" If you bill by the hour, show the number of hours and your hourly rate separately.",
      },

      { type: "h2", text: "5. Show the Subtotal, Taxes, Discounts, and Total" },
      {
        type: "p",
        text: "Show the subtotal after adding your line items, followed by any applicable discounts and taxes. The final total should be clearly displayed so the client can immediately see how much they need to pay. If you do not charge tax, there is usually no need to display a confusing zero-tax line.",
      },

      { type: "h2", text: "6. Include Payment Terms and Instructions" },
      {
        type: "p",
        text: "Tell the client when payment is due and how they can pay. Payment instructions might include bank transfer details, PayPal, a payment link, card payment instructions, or another accepted payment method. Clear terms such as \"Due within 14 days\" or a specific due date make the payment expectation easier to understand. See [invoice payment terms explained](/blog/invoice-payment-terms-explained) for the most common options.",
      },

      { type: "h2", text: "7. Keep the Invoice Design Clean" },
      {
        type: "p",
        text: "A professional invoice does not need an elaborate design. The most important information should be easy to find at a glance. Use clear headings, consistent fonts, enough spacing, and a simple layout. Keep the invoice focused on the business details, client information, items, amount due, and payment instructions.",
      },

      { type: "h2", text: "8. Check the Invoice Before Sending It" },
      {
        type: "p",
        text: "Review the invoice before sending it to the client. Check the client's name and contact information, invoice number, invoice date, due date, line items, quantities, rates, taxes, discounts, and final total. Also make sure your payment instructions are correct. A quick review can prevent [common invoice mistakes](/blog/common-invoice-mistakes) and payment delays.",
      },

      { type: "h2", text: "What Should a Professional Invoice Include?" },
      {
        type: "p",
        text: "A professional invoice should normally include your business details, client information, a unique invoice number, invoice date, due date, descriptions of products or services, quantities, rates, subtotal, applicable taxes, discounts, total amount due, and payment instructions. The exact requirements can vary depending on your country, business type, and tax obligations. For the full checklist, read [what should be included on an invoice](/blog/what-should-an-invoice-include).",
      },

      { type: "h2", text: FAQ_HEADING },
      { type: "h3", text: "How do I make an invoice for the first time?" },
      {
        type: "p",
        text: "Add your business details, the client's details, a unique invoice number, the date and due date, a clear list of what you provided with prices, the total, and payment instructions. An online invoice generator does the layout and calculations for you and exports a PDF.",
      },
      { type: "h3", text: "Do I need accounting software to create an invoice?" },
      {
        type: "p",
        text: "No. A free online invoice generator or a simple template is enough for most freelancers and small businesses. Accounting software becomes useful when you issue many invoices or need to track expenses and taxes.",
      },
      { type: "h3", text: "What file format should I send an invoice in?" },
      {
        type: "p",
        text: "PDF is the most practical format because the layout looks the same on every device and it is hard to change by accident. See [how to send an invoice](/blog/how-to-send-an-invoice) for the full process.",
      },

      { type: "h2", text: "Create a Professional Invoice Online" },
      {
        type: "p",
        text: "If you do not want to build an invoice layout manually, our free invoice generator can help. Enter your business details, client information, invoice number, items, prices, taxes, payment terms, and notes, then download a professional PDF invoice directly from your browser.",
      },
      CTA("Ready to make your invoice? It takes about two minutes."),
    ],
  },

  // ---------------------------------------------------------------------
  {
    slug: "what-should-an-invoice-include",
    title: "What Should Be Included on an Invoice? (Checklist)",
    description:
      "What should be on an invoice? Get the complete checklist: business details, invoice number, dates, items, taxes, total, and payment terms, plus a sample invoice.",
    category: "Invoicing Basics",
    publishedAt: "2026-01-14",
    updatedAt: "2026-09-30",
    relatedSlugs: [
      "how-to-create-a-professional-invoice",
      "common-invoice-mistakes",
      "how-to-number-invoices",
      "invoice-vs-receipt",
    ],
    content: [
      {
        type: "p",
        text: "What should be included on an invoice? A professional invoice should clearly show who is billing, who is being billed, what was provided, how much is owed, when payment is due, and how the client can pay. Including the right information makes an invoice easier to understand, process, and keep for future records.",
      },

      { type: "h2", text: "Invoice Checklist: What to Include on an Invoice" },
      {
        type: "ul",
        items: [
          "Your business name and contact details",
          "Client name and billing address",
          "A unique invoice number",
          "Invoice date and payment due date",
          "Description of each product or service",
          "Quantity, rate, and amount for each line item",
          "Subtotal, taxes, and discounts",
          "Total amount due (with currency)",
          "Payment terms and payment instructions",
          "Optional notes, such as a PO number or thank-you message",
        ],
      },
      CTA("Want all of this filled in automatically? Use our free invoice generator."),

      { type: "h2", text: "Business or Sender Information" },
      {
        type: "p",
        text: "Include your name or business name, address, email address, and phone number when relevant. If you have a registered business number or tax ID that is required in your country, include it as well. This information makes it clear who issued the invoice and how the client can contact you.",
      },

      { type: "h2", text: "Client or Customer Information" },
      {
        type: "p",
        text: "Add the client's name or company name and billing address. If you're invoicing a larger business with multiple departments, confirm which contact or department should receive the invoice so it reaches the right person for approval and payment. Our guide to [invoicing a small business client](/blog/small-business-invoice-guide) covers this in more detail.",
      },

      { type: "h2", text: "Invoice Number" },
      {
        type: "p",
        text: "Every invoice should have a unique invoice number. A simple sequential system such as INV-0001, INV-0002, and INV-0003 makes invoices easier to track. Both you and your client can use the invoice number when discussing payments, accounting records, or previous transactions. Learn more in [how to number invoices](/blog/how-to-number-invoices).",
      },

      { type: "h2", text: "Invoice Date and Due Date" },
      {
        type: "p",
        text: "The invoice date shows when the invoice was issued, while the due date tells the client when payment is expected. A specific payment deadline is much clearer than vague terms such as \"pay soon\" and gives you a clear date to use when following up on an unpaid invoice. See [invoice payment terms explained](/blog/invoice-payment-terms-explained) for options like Net 15 and Net 30.",
      },

      { type: "h2", text: "Description of Goods or Services" },
      {
        type: "p",
        text: "Clearly describe each product or service included on the invoice. The description should provide enough detail for the client to understand exactly what they are being charged for. For example, \"3 hours of website development\" is more useful than simply writing \"Development.\"",
      },

      { type: "h2", text: "Quantity and Rate" },
      {
        type: "p",
        text: "Show the quantity and rate separately whenever applicable. This could be hours, units, sessions, or other measurable quantities. Showing the rate per unit makes the calculation transparent and allows the client to verify the invoice without having to ask for an explanation.",
      },

      { type: "h2", text: "Subtotal" },
      {
        type: "p",
        text: "The subtotal is the total of all line items before taxes and discounts are applied. Showing the subtotal gives the client a clear checkpoint for understanding how the final invoice amount was calculated.",
      },

      { type: "h2", text: "Taxes" },
      {
        type: "p",
        text: "If you are required to charge sales tax, VAT, GST, or another applicable tax, show it separately on the invoice. Include the applicable percentage and amount when appropriate. Tax requirements vary by country, business type, and registration status, so check your local requirements or ask a qualified accountant if you're unsure whether you need to charge tax.",
      },

      { type: "h2", text: "Discounts" },
      {
        type: "p",
        text: "If you offer a percentage or fixed discount, display it as a separate line on the invoice. This keeps the original price visible and makes it clear to the client how the discount affected the final amount.",
      },

      { type: "h2", text: "Total Amount Due" },
      {
        type: "p",
        text: "The total amount due is the final amount the client needs to pay after discounts and applicable taxes. Display this amount prominently, with the currency, so the customer can quickly identify the balance owed.",
      },

      { type: "h2", text: "Payment Terms and Instructions" },
      {
        type: "p",
        text: "Explain when and how the client should pay. Depending on your business, this might include bank transfer details, a payment link, PayPal, card payment instructions, or other available payment methods. You can also include late-payment terms if they apply to your agreement with the client.",
      },

      { type: "h2", text: "Notes" },
      {
        type: "p",
        text: "Use the notes section for additional information that may help the client. You can include a short thank-you message, purchase order number, project reference, delivery information, or other instructions relevant to the invoice.",
      },

      { type: "h2", text: "Sample Invoice Example" },
      {
        type: "p",
        text: "Here is a simple example of how the information above fits together on a finished invoice:",
      },
      {
        type: "table",
        caption: "Sample invoice: INV-0032 issued 7 March, due 21 March (USD)",
        headers: ["Description", "Qty", "Rate", "Amount"],
        rows: [
          ["Homepage redesign, two rounds of revisions", "1", "$900.00", "$900.00"],
          ["Extra subpage design", "2", "$100.00", "$200.00"],
          ["Website copy editing (hours)", "2", "$50.00", "$100.00"],
          ["Subtotal", "", "", "$1,200.00"],
          ["Tax (0%)", "", "", "$0.00"],
          ["Total due by March 21", "", "", "$1,200.00"],
        ],
      },
      {
        type: "p",
        text: "Below the table, add the business and client details at the top, plus payment instructions such as bank transfer details or a payment link.",
      },

      { type: "h2", text: "What Should a Good Invoice Look Like?" },
      {
        type: "p",
        text: "A good invoice should be clear, accurate, easy to read, and organized. The client's details, invoice number, dates, descriptions, quantities, rates, subtotal, taxes, discounts, total amount, and payment instructions should be easy to find. Avoid unnecessary information that makes the invoice difficult to understand.",
      },

      { type: "h2", text: "Common Invoice Mistakes to Avoid" },
      {
        type: "p",
        text: "Common invoice mistakes include missing invoice numbers, incorrect client information, unclear descriptions, calculation errors, missing due dates, and incomplete payment instructions. Read our full list of [common invoice mistakes](/blog/common-invoice-mistakes) and review every invoice before sending it to prevent confusion and payment delays.",
      },

      { type: "h2", text: FAQ_HEADING },
      { type: "h3", text: "What should be on an invoice?" },
      {
        type: "p",
        text: "At minimum: your business details, the client's details, a unique invoice number, the invoice date and due date, a description of what you provided, the amounts and total due, and payment instructions. Taxes and discounts are added when they apply.",
      },
      { type: "h3", text: "What to include on an invoice for freelance work?" },
      {
        type: "p",
        text: "Freelance invoices should also state the currency, show hours or the project fee clearly, and list any deposit already paid. See our [freelance invoice guide](/blog/freelance-invoice-guide) for details.",
      },
      { type: "h3", text: "Is an invoice number required?" },
      {
        type: "p",
        text: "In practice, yes. A unique invoice number makes the invoice easy to track and reference, and many countries require sequential numbering for tax purposes. Check your local rules if you are unsure.",
      },
      { type: "h3", text: "Do I need to include tax on an invoice?" },
      {
        type: "p",
        text: "Only if you are required to charge tax. That depends on your country, business registration, and the type of sale. If tax applies, show it as a separate line with the rate and amount.",
      },
      { type: "h3", text: "What is the difference between an invoice and a receipt?" },
      {
        type: "p",
        text: "An invoice requests payment, while a receipt confirms payment was received. See [invoice vs receipt](/blog/invoice-vs-receipt) for a full comparison.",
      },

      { type: "h2", text: "Create an Invoice Online" },
      {
        type: "p",
        text: "Now that you know what should be included on an invoice, creating one is easy. Our free invoice generator lets you enter your business details, client information, invoice number, items, prices, taxes, payment terms, and notes, then download a professional invoice as a PDF. New to invoicing? Start with [how to create a professional invoice](/blog/how-to-create-a-professional-invoice).",
      },
      CTA("Create your invoice now with every required detail already laid out."),
    ],
  },

  // ---------------------------------------------------------------------
  {
    slug: "invoice-vs-receipt",
    title: "Invoice vs Receipt: What's the Difference?",
    description:
      "Learn the difference between an invoice and a receipt, when each document is used, what information they contain, and why businesses may need both.",
    category: "Invoicing Basics",
    publishedAt: "2026-01-16",
    updatedAt: "2026-09-30",
    relatedSlugs: [
      "what-should-an-invoice-include",
      "how-to-create-a-professional-invoice",
      "how-to-send-an-invoice",
      "common-invoice-mistakes",
    ],
    content: [
      {
        type: "p",
        text: "What is the difference between an invoice and a receipt? An invoice and a receipt are both important business documents, but they serve different purposes. An invoice is generally used to request payment for products or services, while a receipt confirms that payment has been received. Understanding the difference can help you keep clearer financial records and provide clients with the document they need.",
      },

      { type: "h2", text: "What Is an Invoice?" },
      {
        type: "p",
        text: "An invoice is a document that requests payment from a customer or client. It normally lists the products or services provided, the amount owed, the invoice number, the invoice date, the payment due date, and payment instructions. Invoices are commonly sent before payment is received.",
      },

      { type: "h2", text: "What Is a Receipt?" },
      {
        type: "p",
        text: "A receipt is a record or confirmation that payment has been received. It can show the amount paid, payment date, transaction details, and other information identifying the purchase or invoice. Customers may keep receipts as proof of payment for their own records.",
      },

      { type: "h2", text: "Invoice vs Receipt: What's the Difference?" },
      {
        type: "table",
        caption: "Invoice vs receipt at a glance",
        headers: ["", "Invoice", "Receipt"],
        rows: [
          ["Purpose", "Requests payment", "Confirms payment was received"],
          ["Timing", "Usually issued before payment", "Issued after payment"],
          ["Shows", "Amount the customer owes", "Amount the customer paid"],
          ["Key details", "Invoice number, due date, payment instructions", "Payment date, amount paid, payment method"],
        ],
      },
      {
        type: "ul",
        items: [
          "Timing: An invoice is generally issued before payment, while a receipt is issued after payment.",
          "Purpose: An invoice requests payment, while a receipt confirms that payment was received.",
          "Amount due: An invoice shows what the customer owes, while a receipt records what the customer has paid.",
          "Record keeping: Both documents can be useful for business and customer records.",
        ],
      },

      { type: "h2", text: "How an Invoice and Receipt Work Together" },
      {
        type: "ol",
        items: [
          "A business provides or agrees to provide a product or service.",
          "The business sends an invoice showing the amount owed and payment terms.",
          "The customer makes the payment using an accepted payment method.",
          "The business can provide a receipt or other payment confirmation.",
        ],
      },
      {
        type: "p",
        text: "For larger freelance or business transactions, there may be a clear gap between the invoice and the payment. For smaller purchases, the invoice and payment may happen almost immediately, which is one reason the two documents are sometimes confused.",
      },
      CTA("Need to request payment? Create your invoice in minutes."),

      { type: "h2", text: "When Should You Send an Invoice?" },
      {
        type: "p",
        text: "Send an invoice when you need to request payment for products or services. The invoice should clearly explain what the customer is being charged for, how much they owe, when payment is due, and how they can pay. Here is [how to send an invoice](/blog/how-to-send-an-invoice) the right way.",
      },

      { type: "h2", text: "When Should You Provide a Receipt?" },
      {
        type: "p",
        text: "A receipt is generally provided after payment has been received when the customer needs confirmation of the transaction. Some businesses automatically provide receipts, while others provide them when requested or when their normal billing process requires one.",
      },

      { type: "h2", text: "Do You Need Both an Invoice and a Receipt?" },
      {
        type: "p",
        text: "Not every transaction requires both documents separately. In some situations, a paid invoice or payment confirmation may be enough for record keeping. However, a client or customer may specifically request a receipt, so it is useful to understand how the two documents differ and when each one is appropriate.",
      },

      { type: "h2", text: "Can a Paid Invoice Act as a Receipt?" },
      {
        type: "p",
        text: "In some businesses, an invoice marked as \"Paid\" can serve as evidence that the invoice has been settled. Whether this is sufficient depends on the business process, customer requirements, and applicable local rules. If a customer specifically requests a receipt, providing a separate payment confirmation may be the clearer option.",
      },

      { type: "h2", text: "What Information Does an Invoice Include?" },
      {
        type: "p",
        text: "A professional invoice can include business and customer details, a unique invoice number, invoice date, due date, product or service descriptions, quantities, rates, subtotal, applicable taxes, discounts, total amount due, and payment instructions. See the full list in [what should be included on an invoice](/blog/what-should-an-invoice-include).",
      },

      { type: "h2", text: "Common Invoice and Receipt Mistakes" },
      {
        type: "ul",
        items: [
          "Confusing an invoice with proof of payment.",
          "Sending an invoice without a clear payment due date.",
          "Failing to keep a record of invoices and payments.",
          "Providing incorrect payment amounts or transaction details.",
          "Not keeping copies of important billing documents.",
        ],
      },
      {
        type: "p",
        text: "More examples are covered in [common invoice mistakes](/blog/common-invoice-mistakes).",
      },

      { type: "h2", text: "Create a Professional Invoice Online" },
      {
        type: "p",
        text: "Our free invoice generator lets you create a clean, itemized invoice with business details, client information, invoice numbers, products or services, prices, taxes, discounts, payment terms, and notes. You can then download the invoice as a PDF and send it to your client.",
      },
      CTA("Create a clean, itemized invoice and download it as a PDF."),
    ],
  },

  // ---------------------------------------------------------------------
  {
    slug: "how-to-number-invoices",
    title: "How to Number Invoices: Complete Guide",
    description:
      "Learn how to number invoices correctly with simple sequential, date-based, and client-based numbering systems, plus common invoice numbering mistakes to avoid.",
    category: "Invoicing Basics",
    publishedAt: "2026-01-19",
    updatedAt: "2026-09-30",
    relatedSlugs: [
      "how-to-create-a-professional-invoice",
      "common-invoice-mistakes",
      "small-business-invoice-guide",
      "what-should-an-invoice-include",
    ],
    content: [
      {
        type: "p",
        text: "How should you number invoices? A consistent invoice numbering system makes it easier to track payments, organize records, and find a specific invoice when you need it. Whether you are a freelancer, consultant, or small business owner, you can use a simple sequential, date-based, or client-based numbering system and keep it consistent over time.",
      },

      { type: "h2", text: "Why Invoice Numbers Matter" },
      {
        type: "p",
        text: "An invoice number gives you and your client a shared reference for a specific invoice. When a client asks about invoice 0047, you should be able to find it quickly. Unique and consistent invoice numbers also make bookkeeping and record keeping easier, especially when you have many invoices to manage.",
      },

      { type: "h2", text: "How to Number Invoices Correctly" },
      {
        type: "p",
        text: "The best invoice numbering system is one that is simple, unique, and easy for you to maintain. Each invoice should have its own number, and you should avoid reusing numbers. Before choosing a format, consider how many invoices you issue, how many clients you have, and whether you want the year or client name to appear in the number.",
      },

      { type: "h2", text: "1. Use Simple Sequential Invoice Numbers" },
      {
        type: "p",
        text: "Sequential numbering is the simplest option for most freelancers and small businesses. Start with a number such as INV-0001 and increase the number for every new invoice: INV-0001, INV-0002, INV-0003, and so on. You do not need a separate sequence for every client. This approach is easy to maintain and makes invoices straightforward to track.",
      },

      { type: "h2", text: "2. Use Date-Based Invoice Numbers" },
      {
        type: "p",
        text: "A date-based invoice numbering system includes the year or month in the invoice number. For example, you could use 2026-014 for the 14th invoice of 2026 or 202603-006 for the sixth invoice issued in March 2026. This format can be useful for businesses that issue a large number of invoices and want the approximate invoice date to be visible in the number.",
      },

      { type: "h2", text: "3. Use Client-Based Invoice Numbers" },
      {
        type: "p",
        text: "Client-based numbering uses a short client code together with a sequence, such as ACME-001 or ACME-002. This can work well for agencies, consultants, and businesses with a small number of long-term clients. However, managing several separate numbering sequences can become more difficult as your client list grows.",
      },

      { type: "h2", text: "Which Invoice Numbering System Should You Choose?" },
      {
        type: "table",
        caption: "Invoice numbering systems compared",
        headers: ["System", "Example", "Best for"],
        rows: [
          ["Sequential", "INV-0001", "Most freelancers and small businesses"],
          ["Date-based", "2026-014", "Businesses issuing many invoices"],
          ["Client-based", "ACME-001", "A few long-term clients"],
        ],
      },
      CTA("Set your own invoice number format and generate invoices with it."),

      { type: "h2", text: "Should Invoice Numbers Be Sequential?" },
      {
        type: "p",
        text: "For many freelancers and small businesses, sequential invoice numbers are the easiest option. The exact numbering format can vary depending on your business and local record-keeping requirements, but the important principle is consistency. Use unique numbers and maintain a clear record of the invoices you issue.",
      },

      { type: "h2", text: "Common Invoice Numbering Mistakes" },
      {
        type: "ul",
        items: [
          "Reusing an invoice number after voiding an invoice instead of assigning the next number.",
          "Restarting the numbering sequence without a clear reason or documented change.",
          "Mixing different formats, such as INV-01, Invoice_2, and #003.",
          "Leaving the invoice number off entirely.",
          "Accidentally assigning the same invoice number to two different invoices.",
          "Failing to keep a record of the invoice numbers you have already used.",
        ],
      },
      {
        type: "p",
        text: "For other errors that slow down payment, see [common invoice mistakes](/blog/common-invoice-mistakes).",
      },

      { type: "h2", text: "How to Keep Invoice Numbers Consistent" },
      {
        type: "p",
        text: "Once you choose an invoice numbering format, use the same system for every new invoice. Keep a record of issued invoices and check the previous invoice number before creating a new one. A consistent process prevents duplicate numbers and makes it easier to find invoices later.",
      },

      { type: "h2", text: FAQ_HEADING },
      { type: "h3", text: "Can I start my invoice numbers at 1?" },
      {
        type: "p",
        text: "Yes, but many people start at a higher number or use a prefix like INV-0001 so the invoice count is not obvious to clients and the format stays consistent as you grow.",
      },
      { type: "h3", text: "Do I need a separate numbering sequence for each client?" },
      {
        type: "p",
        text: "Usually not. One continuous sequence across all clients is simplest and makes it easy to check for gaps or duplicates.",
      },
      { type: "h3", text: "What should I do if I cancel an invoice?" },
      {
        type: "p",
        text: "Keep the cancelled invoice on record, mark it void, and issue a new invoice with the next number. Do not reuse the old number.",
      },

      { type: "h2", text: "Create Invoices With Consistent Numbers" },
      {
        type: "p",
        text: "Our free invoice generator includes an invoice number field that you can edit to match your preferred numbering system. Whether you use sequential, date-based, or client-based numbers, keeping the format consistent makes your invoices easier to organize and manage. For the full process, read [how to create a professional invoice](/blog/how-to-create-a-professional-invoice).",
      },
      CTA("Create your next invoice with the numbering format you prefer."),
    ],
  },

  // ---------------------------------------------------------------------
  {
    slug: "freelance-invoice-guide",
    title: "How to Invoice a Company for Freelance Work (Guide)",
    description:
      "How to invoice a company for freelance work: what to include, how to bill by hour or project, handle deposits, set payment terms, and get paid on time.",
    category: "For Freelancers",
    publishedAt: "2026-01-22",
    updatedAt: "2026-09-30",
    relatedSlugs: [
      "what-should-an-invoice-include",
      "how-to-send-an-invoice",
      "invoice-payment-terms-explained",
      "common-invoice-mistakes",
      "how-to-number-invoices",
    ],
    content: [
      {
        type: "p",
        text: "How do you invoice a company for freelance work? Send a clear invoice that explains what work you completed, how much the company owes, and when payment is due. Freelancers may bill by the hour, project, or retainer, and may also need to handle deposits, partial payments, and international clients. This guide explains the key details to include and how to create an invoice that is easy for a company to approve and pay.",
      },

      { type: "h2", text: "How to Invoice a Company for Freelance Work: Step by Step" },
      {
        type: "ol",
        items: [
          "Confirm the billing contact, the company's legal name, and whether a purchase order (PO) number is required.",
          "Create an invoice with a unique invoice number, invoice date, and due date.",
          "Describe the work clearly and show hours, units, or the agreed project fee.",
          "Subtract any deposit already paid and show the remaining balance.",
          "State the currency, payment terms, and how to pay.",
          "Send the invoice as a PDF to the correct billing email.",
          "Set a reminder to follow up if it is not paid by the due date.",
        ],
      },
      CTA("Follow these steps faster: create your freelance invoice with our free generator."),

      { type: "h2", text: "What Is a Freelance Invoice?" },
      {
        type: "p",
        text: "A freelance invoice is a billing document that a freelancer sends to a client to request payment for completed work or an agreed project milestone. It usually includes the freelancer's details, client information, invoice number, services provided, amount due, payment terms, and payment instructions.",
      },

      { type: "h2", text: "1. Choose How You Will Bill the Client" },
      {
        type: "p",
        text: "Freelancers commonly charge clients using a fixed project fee, hourly rate, or retainer. Your invoice should match the pricing arrangement you agreed to with the client. For hourly work, show the number of hours and hourly rate separately so the client can easily understand how the total was calculated.",
      },

      { type: "h2", text: "2. Clearly Describe Your Freelance Work" },
      {
        type: "p",
        text: "Be specific when describing the work on your invoice. Instead of writing only \"Design work — March,\" use a description such as \"Homepage redesign, two rounds of revisions, delivered March 4–18.\" Clear descriptions help the client understand exactly what they are paying for and can reduce questions before payment.",
      },

      { type: "h2", text: "3. Include Your Invoice Number and Date" },
      {
        type: "p",
        text: "Every freelance invoice should have a unique invoice number and invoice date. A simple numbering system such as INV-0001, INV-0002, and INV-0003 makes invoices easier to track. Read [how to number invoices](/blog/how-to-number-invoices) if you need help choosing a format.",
      },

      { type: "h2", text: "4. Show Deposits and Partial Payments Clearly" },
      {
        type: "p",
        text: "If the client has already paid a deposit, show it clearly on the invoice and subtract it from the total amount due. For example, you might list a $300 deposit already paid as a separate line so the client can see the original amount, the payment already received, and the remaining balance.",
      },

      { type: "h2", text: "5. Set Clear Freelance Payment Terms" },
      {
        type: "p",
        text: "State when payment is expected directly on the invoice. Depending on your agreement, you might use terms such as due on receipt, net 7, net 15, or net 30. Choose terms that match your client agreement and clearly communicate the payment deadline. It can also help to establish payment terms in your original project agreement before work begins. Compare the options in [invoice payment terms explained](/blog/invoice-payment-terms-explained).",
      },

      { type: "h2", text: "6. Clearly State the Currency" },
      {
        type: "p",
        text: "If you work with clients in different countries, clearly state the currency on your invoice. For example, specify USD, EUR, GBP, CAD, or another currency rather than writing only a number such as \"$500.\" Clear currency information helps prevent confusion about the amount the client is expected to pay.",
      },

      { type: "h2", text: "7. Include Payment Instructions" },
      {
        type: "p",
        text: "Tell the client how they can pay the invoice. Depending on your business and agreement, this could include bank transfer details, a payment link, PayPal, card payment instructions, or another accepted payment method. Make the payment instructions easy to find so the client does not have to contact you for basic payment information.",
      },

      { type: "h2", text: "8. Include Your Contact Information" },
      {
        type: "p",
        text: "Add your name or business name, email address, and other relevant contact information. The client should know who issued the invoice and how to contact you if they have a question about the work, amount, or payment.",
      },

      { type: "h2", text: "When the Client Is a Company" },
      {
        type: "p",
        text: "Companies often have an accounts-payable process. Use the company's legal name, send the invoice to the billing contact, and include a purchase order number if they gave you one. Some companies also pay only on set cycles, so check their payment schedule early. More tips are in our guide to [invoicing a small business client](/blog/small-business-invoice-guide).",
      },

      { type: "h2", text: "How to Handle Late Freelance Payments" },
      {
        type: "p",
        text: "If the payment due date passes without payment, send a short and professional follow-up. Reference the invoice number and original due date rather than sending a vague reminder. For example: \"Just checking in — invoice INV-0032 was due on the 14th. Please let me know if you need anything from me to process it.\" More examples are in [invoice email templates](/blog/invoice-email-templates).",
      },

      { type: "h2", text: "Freelance Invoice Checklist" },
      {
        type: "ul",
        items: [
          "Unique invoice number and invoice date",
          "Your name or business details and contact information",
          "Client name and billing information",
          "Clear description of the freelance work",
          "Hours, units, or project fee when applicable",
          "Rate or agreed project price",
          "Any deposit or partial payment already received",
          "Currency clearly stated",
          "Taxes or discounts when applicable",
          "Total amount due",
          "Payment terms and due date",
          "Accepted payment methods and instructions",
        ],
      },

      { type: "h2", text: "Common Freelance Invoice Mistakes" },
      {
        type: "p",
        text: "Freelancers can run into payment delays when invoices have vague work descriptions, missing due dates, incorrect totals, unclear currencies, duplicate invoice numbers, or incomplete payment instructions. See [common invoice mistakes](/blog/common-invoice-mistakes) and make sure your invoice matches the agreement you made with the client.",
      },

      { type: "h2", text: FAQ_HEADING },
      { type: "h3", text: "How do I invoice a company as a freelancer?" },
      {
        type: "p",
        text: "Ask for the billing contact and legal company name, create an invoice with your details, a unique number, a clear description of the work, the total, and payment terms, then send it as a PDF to the billing email.",
      },
      { type: "h3", text: "When should a freelancer send an invoice?" },
      {
        type: "p",
        text: "Send it as soon as the work or milestone is completed, or on the schedule you agreed with the client, such as monthly for retainers.",
      },
      { type: "h3", text: "Should I ask for a deposit before starting work?" },
      {
        type: "p",
        text: "Many freelancers do, especially for larger projects or new clients. If you take a deposit, show it as already paid on the final invoice.",
      },
      { type: "h3", text: "What payment terms should a freelancer use?" },
      {
        type: "p",
        text: "Net 7, Net 14, or Net 30 are common. Shorter terms help your cash flow, but companies may require longer terms. Agree on them before you start work.",
      },

      { type: "h2", text: "Create a Freelance Invoice Online" },
      {
        type: "p",
        text: "Our free invoice generator supports multiple line items, taxes, discounts, notes, invoice numbers, and multiple currencies. You can use it to create a professional freelance invoice, download it as a PDF, and send it directly to your client without needing a full accounting platform. For a complete overview of invoice requirements, read [what should be included on an invoice](/blog/what-should-an-invoice-include), then learn [how to send an invoice](/blog/how-to-send-an-invoice) to your client.",
      },
      CTA("Create your freelance invoice and download it as a PDF."),
    ],
  },

  // ---------------------------------------------------------------------
  {
    slug: "small-business-invoice-guide",
    title: "How to Invoice a Small Business Client",
    description:
      "Learn how to invoice a small business client, including purchase orders, billing contacts, itemized charges, tax details, payment terms, and invoice numbers.",
    category: "For Small Businesses",
    publishedAt: "2026-01-25",
    updatedAt: "2026-09-30",
    relatedSlugs: [
      "how-to-create-a-professional-invoice",
      "how-to-send-an-invoice",
      "how-to-number-invoices",
      "what-should-an-invoice-include",
    ],
    content: [
      {
        type: "p",
        text: "How do you invoice a small business client? Invoicing a small business can involve a few extra steps compared with invoicing an individual client. You may need to provide a purchase order number, use the company's legal name, send the invoice to a specific billing contact, and follow standard payment terms. Getting these details right can help prevent delays and unnecessary back-and-forth.",
      },
      CTA("Create a business-ready invoice with PO number, taxes, and payment terms."),

      { type: "h2", text: "1. Confirm Who Should Receive the Invoice" },
      {
        type: "p",
        text: "The person who hired you may not be the person who processes invoices. Before sending your first invoice, ask which person, department, or email address should receive it. Some small businesses have a dedicated billing or accounts-payable contact that handles invoices and payments.",
      },

      { type: "h2", text: "2. Use the Correct Business Name" },
      {
        type: "p",
        text: "Use the company's legal or registered business name when appropriate rather than an informal name or shortened version. If the client provides specific billing details, use the information they give you so the invoice matches their accounting records.",
      },

      { type: "h2", text: "3. Include the Purchase Order Number" },
      {
        type: "p",
        text: "Some small businesses use purchase orders, also called POs, for projects or purchases. If the client gives you a purchase order number, include it clearly on the invoice. Some accounts-payable processes require the invoice to match the purchase order before payment can be approved.",
      },

      { type: "h2", text: "4. Clearly Itemize Your Products or Services" },
      {
        type: "p",
        text: "A small business may need detailed invoice information for its own bookkeeping and expense records. Instead of combining everything into one total, list each product or service separately with useful descriptions, quantities, rates, and amounts. A clear itemized invoice makes it easier for the client to review and approve the charges.",
      },

      { type: "h2", text: "5. Include the Invoice Number and Dates" },
      {
        type: "p",
        text: "Every invoice should have a unique invoice number, invoice date, and due date. Use the same numbering system you use for your other invoices so your records remain organized. See [how to number invoices](/blog/how-to-number-invoices) for common formats. A clear due date also tells the business exactly when payment is expected.",
      },

      { type: "h2", text: "6. Confirm the Applicable Tax Requirements" },
      {
        type: "p",
        text: "Whether you need to charge sales tax, VAT, GST, or another tax depends on factors such as your location, registration status, the type of transaction, and sometimes the client's location. If you are unsure about your tax obligations, check the applicable local requirements or speak with a qualified accountant rather than guessing.",
      },

      { type: "h2", text: "7. Set Clear Payment Terms" },
      {
        type: "p",
        text: "State your payment terms clearly on the invoice. Small businesses may use terms such as net 15 or net 30, depending on the agreement. Whatever payment terms you and the client agreed to, include them directly on the invoice so the billing document is clear and self-contained. Learn more in [invoice payment terms explained](/blog/invoice-payment-terms-explained).",
      },

      { type: "h2", text: "8. Include Payment Instructions" },
      {
        type: "p",
        text: "Tell the client how they can pay. Depending on your business, this could include bank transfer details, a payment link, PayPal, card payment instructions, or another accepted payment method. Clear payment instructions reduce the need for additional emails before the client can make the payment.",
      },

      { type: "h2", text: "What Should a Small Business Invoice Include?" },
      {
        type: "p",
        text: "A small business invoice should generally include your business information, the client's business information, a unique invoice number, invoice date, due date, itemized products or services, quantities, rates, subtotal, applicable taxes, discounts when relevant, total amount due, payment terms, and payment instructions. A purchase order number or project reference should also be included when the client requires one.",
      },

      { type: "h2", text: "How to Avoid Small Business Invoice Delays" },
      {
        type: "ul",
        items: [
          "Confirm the correct billing contact before sending the invoice.",
          "Use the client's correct legal or registered business name.",
          "Include a purchase order number when one was provided.",
          "Itemize products or services clearly.",
          "Check the invoice number and dates.",
          "Make sure applicable taxes are handled correctly.",
          "Include the agreed payment terms and due date.",
          "Provide clear payment instructions.",
        ],
      },

      { type: "h2", text: "Small Business Invoice Pre-Send Checklist" },
      {
        type: "ul",
        items: [
          "Correct business name and billing contact",
          "Purchase order number included when applicable",
          "Clear and itemized line items",
          "Correct invoice number and invoice date",
          "Specific payment due date",
          "Applicable tax information",
          "Agreed payment terms",
          "Accepted payment method and instructions",
          "Correct subtotal and final total",
        ],
      },

      { type: "h2", text: FAQ_HEADING },
      { type: "h3", text: "Do I need a purchase order to invoice a small business?" },
      {
        type: "p",
        text: "Only if the client uses POs. If they give you a PO number, put it on the invoice, since their accounts-payable team may not pay without it.",
      },
      { type: "h3", text: "Who should I send the invoice to?" },
      {
        type: "p",
        text: "Send it to the billing or accounts-payable contact the client gave you. If none was given, ask before sending your first invoice.",
      },

      { type: "h2", text: "Create a Small Business Invoice Online" },
      {
        type: "p",
        text: "Our free invoice generator lets you add multiple line items, taxes, discounts, notes, invoice numbers, and payment information. You can use these fields to create a clear professional invoice for a small business client and download it as a PDF. For more guidance, read our complete guide on [how to create a professional invoice](/blog/how-to-create-a-professional-invoice) and learn [what information should be included on an invoice](/blog/what-should-an-invoice-include).",
      },
      CTA("Generate a professional invoice for your business client."),
    ],
  },

  // ---------------------------------------------------------------------
  {
    slug: "common-invoice-mistakes",
    title: "Common Invoice Mistakes and How to Avoid Them",
    description:
      "Discover common invoice mistakes that can cause payment delays, confusion, or errors, and learn how to create accurate professional invoices.",
    category: "Invoicing Basics",
    publishedAt: "2026-01-28",
    updatedAt: "2026-09-30",
    relatedSlugs: [
      "what-should-an-invoice-include",
      "how-to-number-invoices",
      "how-to-send-an-invoice",
      "how-to-create-a-professional-invoice",
    ],
    content: [
      {
        type: "p",
        text: "Common invoice mistakes can lead to payment delays, confusion, and unnecessary back-and-forth with clients. From incorrect calculations and missing due dates to vague descriptions and incomplete payment instructions, small invoice errors can create bigger problems. Here are the most common invoice mistakes and how to avoid them before sending an invoice.",
      },

      { type: "h2", text: "Missing or Unclear Due Dates" },
      {
        type: "p",
        text: "A missing or unclear due date makes it difficult for a client to know exactly when payment is expected. Always include a specific payment date instead of relying only on terms such as \"payment due in 14 days.\" A clear due date also gives you a specific point to reference when following up on an overdue invoice. See [invoice payment terms explained](/blog/invoice-payment-terms-explained).",
      },

      { type: "h2", text: "Vague Line Item Descriptions" },
      {
        type: "p",
        text: "Descriptions such as \"services rendered\" do not give the client enough information about what they are being charged for. Describe each product or service clearly and include useful details such as the type of work, quantity, or date when appropriate. Clear descriptions can reduce questions and prevent invoices from being delayed during approval.",
      },

      { type: "h2", text: "Math and Calculation Errors" },
      {
        type: "p",
        text: "Incorrect subtotals, taxes, discounts, or final totals are common invoice errors. Even a small calculation mistake can make an invoice look unreliable and may delay payment. Check that all line items add up correctly and that taxes and discounts are applied to the correct amounts. Using an invoice generator that calculates totals automatically can also reduce manual arithmetic errors.",
      },
      CTA("Avoid math errors: our invoice generator calculates totals for you."),

      { type: "h2", text: "Inconsistent or Missing Invoice Numbers" },
      {
        type: "p",
        text: "Every invoice should have a unique number that follows a consistent numbering system. Skipping numbers, accidentally reusing invoice numbers, or leaving the number off entirely can make invoices difficult to track. A simple sequence such as INV-0001, INV-0002, and INV-0003 makes record keeping easier for both you and your clients. Read [how to number invoices](/blog/how-to-number-invoices) for more.",
      },

      { type: "h2", text: "Forgetting Payment Instructions" },
      {
        type: "p",
        text: "An invoice should clearly explain how the client can pay. Include the payment method and relevant instructions, such as bank transfer details, a payment link, PayPal, or another accepted payment method. Without clear payment instructions, clients may need to contact you before they can complete the payment.",
      },

      { type: "h2", text: "Sending an Invoice Too Late" },
      {
        type: "p",
        text: "Waiting too long to send an invoice can delay the entire payment process. Send the invoice promptly after completing the work, delivering the product, or reaching an agreed project milestone. Sending invoices on time helps establish a predictable billing routine and gives clients more time to process payments.",
      },

      { type: "h2", text: "Incorrect Client or Business Information" },
      {
        type: "p",
        text: "Incorrect names, addresses, email addresses, business details, or billing information can cause an invoice to be rejected or sent to the wrong person. Before sending an invoice, check that both your business information and the client's billing details are accurate.",
      },

      { type: "h2", text: "No Record of Invoices Sent or Paid" },
      {
        type: "p",
        text: "Without a simple record of invoices that have been sent, paid, or become overdue, it is easy to lose track of outstanding payments. Keep a basic record containing the invoice number, client, amount, invoice date, due date, and payment status. Even a simple spreadsheet can help keep your billing organized.",
      },

      { type: "h2", text: "Inconsistent Branding or Formatting" },
      {
        type: "p",
        text: "Using a different layout, font, or format for every invoice can make your business look less consistent. A clean and professional invoice template helps create a recognizable billing experience. Use a consistent layout and make sure important information is easy to find.",
      },

      { type: "h2", text: "Not Including All Required Invoice Details" },
      {
        type: "p",
        text: "Missing basic information can make an invoice difficult to process. Depending on your situation, an invoice may need business and client information, an invoice number, invoice date, due date, item descriptions, quantities, rates, subtotal, taxes, discounts, total amount, payment terms, and payment instructions. Use our [invoice checklist](/blog/what-should-an-invoice-include) to make sure nothing is missing.",
      },

      { type: "h2", text: "How to Avoid Common Invoice Mistakes" },
      {
        type: "p",
        text: "The easiest way to avoid invoice mistakes is to use a consistent process before sending every invoice. Check the client information, invoice number, dates, line items, calculations, payment instructions, and final amount. Using an invoice generator can also help by calculating totals automatically and keeping important invoice fields organized.",
      },

      { type: "h2", text: "Quick Invoice Pre-Send Checklist" },
      {
        type: "ul",
        items: [
          "Invoice number is unique and follows your usual sequence",
          "Invoice date and due date are correct",
          "Business and client information is accurate",
          "Every line item clearly describes the product or service",
          "Quantity and rates are correct",
          "Subtotal, tax, discount, and total are calculated correctly",
          "Payment method and instructions are included",
          "The invoice has been reviewed for spelling and formatting errors",
        ],
      },

      { type: "h2", text: FAQ_HEADING },
      { type: "h3", text: "What is the most common invoice mistake?" },
      {
        type: "p",
        text: "Missing or vague due dates and payment instructions are among the most common, because they leave the client unsure when and how to pay.",
      },
      { type: "h3", text: "What should I do if I sent an invoice with an error?" },
      {
        type: "p",
        text: "Contact the client, explain the correction, and send a corrected invoice. Mark the original as void or cancelled and use the next invoice number for the replacement, so your records stay clear.",
      },

      { type: "h2", text: "Create an Accurate Professional Invoice" },
      {
        type: "p",
        text: "Avoiding common invoice errors starts with using accurate information and checking the invoice before sending it. Our free invoice generator calculates subtotals, taxes, and totals automatically while keeping important invoice fields organized, so you can create a professional invoice and download it as a PDF. Once it is ready, follow our steps for [sending an invoice](/blog/how-to-send-an-invoice).",
      },
      CTA("Build an accurate invoice with automatic calculations."),
    ],
  },

  // ---------------------------------------------------------------------
  {
    slug: "how-to-send-an-invoice",
    title: "How to Send an Invoice (With Email Examples)",
    description:
      "Learn how to send an invoice to a client, including the best PDF format, invoice email examples, delivery methods, record keeping, and overdue payment follow-ups.",
    category: "Invoicing Basics",
    publishedAt: "2026-01-30",
    updatedAt: "2026-09-30",
    relatedSlugs: [
      "how-to-create-a-professional-invoice",
      "common-invoice-mistakes",
      "freelance-invoice-guide",
      "invoice-email-templates",
      "how-to-number-invoices",
    ],
    content: [
      {
        type: "p",
        text: "How do you send an invoice to a client? Creating the invoice is only half the process. Sending it in the right format, using a clear email, delivering it to the correct contact, and keeping a copy can make invoicing easier and help avoid unnecessary payment delays. Here is a simple process for sending a professional invoice to a client.",
      },

      { type: "h2", text: "1. Create and Check Your Invoice" },
      {
        type: "p",
        text: "Before sending an invoice, check that all important information is correct. Review your business details, the client's name and contact information, invoice number, invoice date, due date, line items, quantities, rates, taxes, discounts, total amount, and payment instructions. Correcting an error before sending is easier than fixing it after the client receives the invoice. Not sure what to check? See [common invoice mistakes](/blog/common-invoice-mistakes).",
      },
      CTA("Don't have an invoice yet? Create one and export it as a PDF."),

      { type: "h2", text: "2. Send the Invoice as a PDF" },
      {
        type: "p",
        text: "PDF is a practical format for sending invoices because the layout remains consistent across devices and the document is easy for the client to save and organize. Avoid sending an editable document when a finished PDF is available. A self-contained PDF invoice also gives the client a clear record of the amount being requested.",
      },

      { type: "h2", text: "3. Send the Invoice to the Right Person" },
      {
        type: "p",
        text: "Make sure you send the invoice to the correct client, billing contact, or accounts-payable email address. For individual clients, this is usually straightforward. For businesses, ask whether invoices should go to your main contact, a dedicated billing email, or multiple recipients. Sending an invoice to the wrong inbox can delay processing.",
      },

      { type: "h2", text: "4. Write a Clear Invoice Email" },
      {
        type: "p",
        text: "Your invoice email does not need to be complicated. Mention the invoice number, what the invoice is for, the total amount, and the payment due date. Attach the PDF invoice and let the client know they can contact you if they have any questions.",
      },
      { type: "h3", text: "Simple Invoice Email Example" },
      {
        type: "quote",
        text: "Subject: Invoice INV-0032 — Due March 21\n\nHi Sam, please find invoice INV-0032 attached for the homepage redesign. The total is $1,200 and payment is due March 21. Let me know if you have any questions. Thanks!",
      },
      {
        type: "p",
        text: "A short message like this gives the client the key information without requiring them to open the attachment just to understand what the invoice is about. More copy-paste versions are in [invoice email templates](/blog/invoice-email-templates).",
      },

      { type: "h2", text: "5. Keep a Copy of Every Invoice You Send" },
      {
        type: "p",
        text: "Keep a copy of the exact invoice you sent and record when it was delivered. You can save the PDF in a dedicated folder, keep a record in a spreadsheet, or use your invoicing system. Having a clear record helps if you need to check whether an invoice was sent, resend it, or resolve a payment question later.",
      },

      { type: "h2", text: "6. Set a Reminder for the Due Date" },
      {
        type: "p",
        text: "After sending the invoice, make a note of the payment due date. A calendar reminder can help you remember to check the payment status and follow up if the invoice becomes overdue.",
      },

      { type: "h2", text: "How to Follow Up on an Overdue Invoice" },
      {
        type: "p",
        text: "If the payment due date has passed, send a short and polite follow-up. Start by assuming the invoice may have been missed or delayed during normal processing rather than making an accusation.",
      },
      { type: "h3", text: "Overdue Invoice Email Example" },
      {
        type: "quote",
        text: "Hi Sam, just following up on invoice INV-0032, which was due March 21. Please let me know if you need anything from me to get it processed. Thanks!",
      },
      {
        type: "p",
        text: "If payment still has not arrived after a reasonable period, you can send another follow-up that clearly references the original due date and asks when payment is expected.",
      },

      { type: "h2", text: "How Should You Send an Invoice?" },
      {
        type: "p",
        text: "For most clients, sending a professional PDF invoice by email is a simple and practical option. Some businesses may require invoices through accounting software, a supplier portal, or another billing system. Always follow the client's stated invoicing process when one is provided.",
      },

      { type: "h2", text: "Invoice Sending Checklist" },
      {
        type: "ul",
        items: [
          "Invoice details have been checked for errors",
          "Invoice is saved or exported as a PDF",
          "Correct client or billing contact is selected",
          "Email includes the invoice number and amount due",
          "Payment due date is clearly stated",
          "Payment instructions are included on the invoice",
          "A copy of the invoice is saved",
          "A reminder is set for the payment due date",
        ],
      },

      { type: "h2", text: FAQ_HEADING },
      { type: "h3", text: "Can I send an invoice by email?" },
      {
        type: "p",
        text: "Yes. Email with a PDF attachment is the most common way to send an invoice, unless the client requires a portal or accounting system.",
      },
      { type: "h3", text: "How soon should I send an invoice?" },
      {
        type: "p",
        text: "As soon as the work is completed or the agreed milestone is reached. Prompt invoices usually get paid sooner.",
      },
      { type: "h3", text: "What should the invoice email say?" },
      {
        type: "p",
        text: "Keep it short: the invoice number, what it is for, the total, the due date, and a note to reach out with questions.",
      },

      { type: "h2", text: "Create and Send a Professional Invoice" },
      {
        type: "p",
        text: "Our free invoice generator lets you create a professional invoice with your business details, client information, line items, taxes, discounts, payment terms, and invoice number. Once your invoice is complete, you can download it as a PDF and attach it to your client email. Before sending your first invoice, you can also read our guide on [how to create a professional invoice](/blog/how-to-create-a-professional-invoice) for a complete step-by-step process.",
      },
      CTA("Create your invoice, download the PDF, and send it today."),
    ],
  },

  // =====================================================================
  // NEW ARTICLES
  // =====================================================================
  {
    slug: "invoice-payment-terms-explained",
    title: "Invoice Payment Terms Explained (Net 15, Net 30)",
    description:
      "Invoice payment terms explained: what Net 15, Net 30, and due on receipt mean, how to choose the right terms, and how to write them on your invoice.",
    category: "Invoicing Basics",
    publishedAt: "2026-09-30",
    updatedAt: "2026-09-30",
    relatedSlugs: [
      "what-should-an-invoice-include",
      "freelance-invoice-guide",
      "how-to-send-an-invoice",
      "common-invoice-mistakes",
    ],
    content: [
      {
        type: "p",
        text: "What are invoice payment terms? Payment terms tell your client when payment is due and sometimes what happens if it is late. Terms such as Net 15, Net 30, or due on receipt appear on the invoice so both sides know the deadline. Choosing clear terms helps you get paid on time and avoids disputes.",
      },

      { type: "h2", text: "Common Invoice Payment Terms" },
      {
        type: "table",
        caption: "Common invoice payment terms",
        headers: ["Term", "Meaning", "Typical use"],
        rows: [
          ["Due on receipt", "Payment is due as soon as the invoice is received", "Small jobs, new clients, one-off work"],
          ["Net 7", "Payment due within 7 days of the invoice date", "Freelancers who want fast payment"],
          ["Net 15", "Payment due within 15 days", "Small projects and regular clients"],
          ["Net 30", "Payment due within 30 days", "Companies and larger clients"],
          ["Net 60", "Payment due within 60 days", "Large organizations with long approval cycles"],
        ],
      },
      CTA("Add payment terms and a due date to your invoice in seconds."),

      { type: "h2", text: "What Does Net 30 Mean on an Invoice?" },
      {
        type: "p",
        text: "Net 30 means the full invoice amount is due within 30 days of the invoice date. If you issue an invoice on 1 March with Net 30 terms, payment is due by 31 March. The same logic applies to Net 15 or Net 60.",
      },

      { type: "h2", text: "How to Choose the Right Payment Terms" },
      {
        type: "ul",
        items: [
          "Consider your cash flow: shorter terms mean faster payment.",
          "Check the client's process: larger companies often pay on Net 30 or longer.",
          "Use shorter terms or deposits for new clients.",
          "Agree on the terms before work starts, ideally in writing.",
        ],
      },

      { type: "h2", text: "How to Write Payment Terms on an Invoice" },
      {
        type: "p",
        text: "Put the terms and the exact due date near the total, for example: \"Payment terms: Net 14. Due date: 21 March 2026.\" Adding the specific date removes any doubt about when the 14 days end. Add your payment methods below it.",
      },

      { type: "h2", text: "Late Payment Fees and Early Payment Discounts" },
      {
        type: "p",
        text: "Some businesses add a late fee, such as a percentage per month, or offer a small discount for early payment. If you use either, state it clearly on the invoice and in your agreement, and check local rules on late fees. Keep it simple if you are just starting out.",
      },

      { type: "h2", text: FAQ_HEADING },
      { type: "h3", text: "What are the most common invoice payment terms?" },
      {
        type: "p",
        text: "Due on receipt, Net 7, Net 15, and Net 30 are the most common, with Net 30 being especially standard when invoicing companies.",
      },
      { type: "h3", text: "Should I put the due date as well as the terms?" },
      {
        type: "p",
        text: "Yes. Showing both the term and the exact due date is clearest, and it gives you a firm date to reference in follow-ups.",
      },
      { type: "h3", text: "Can I change payment terms for one client?" },
      {
        type: "p",
        text: "Yes, as long as both sides agree. Update the terms on that client's invoices and record the agreement.",
      },

      { type: "h2", text: "Add Payment Terms to Your Invoice" },
      {
        type: "p",
        text: "Our free invoice generator lets you set the invoice date, due date, and payment terms in the notes, then download a PDF. For everything else an invoice needs, read [what should be included on an invoice](/blog/what-should-an-invoice-include), and see how terms fit into the [freelance invoicing process](/blog/freelance-invoice-guide).",
      },
      CTA("Create an invoice with clear payment terms."),
    ],
  },

  // ---------------------------------------------------------------------
  {
    slug: "invoice-email-templates",
    title: "Invoice Email Templates You Can Copy and Paste",
    description:
      "Copy-and-paste invoice email templates: sending a new invoice, a friendly reminder, an overdue follow-up, and a final notice, with subject line examples.",
    category: "Invoicing Basics",
    publishedAt: "2026-09-30",
    updatedAt: "2026-09-30",
    relatedSlugs: [
      "how-to-send-an-invoice",
      "freelance-invoice-guide",
      "invoice-payment-terms-explained",
      "common-invoice-mistakes",
    ],
    content: [
      {
        type: "p",
        text: "What should an invoice email say? A good invoice email is short and specific: it names the invoice number, what it is for, the amount, and the due date. Below are copy-and-paste invoice email templates for sending an invoice, reminding a client, and following up on late payment. Replace the details in brackets and attach your PDF invoice.",
      },
      CTA("Need the invoice itself? Create a PDF invoice free, then attach it."),

      { type: "h2", text: "Template 1: Sending a New Invoice" },
      {
        type: "quote",
        text: "Subject: Invoice [INV-0001] for [project name] — due [date]\n\nHi [Name],\n\nPlease find attached invoice [INV-0001] for [project or service]. The total is [amount] and payment is due on [date].\n\nPayment details are included on the invoice. Let me know if you have any questions.\n\nThank you,\n[Your name]",
      },

      { type: "h2", text: "Template 2: Friendly Payment Reminder" },
      {
        type: "p",
        text: "Send this a few days before the due date or on the due date itself.",
      },
      {
        type: "quote",
        text: "Subject: Reminder: Invoice [INV-0001] due [date]\n\nHi [Name],\n\nA quick reminder that invoice [INV-0001] for [amount] is due on [date]. I've attached a copy for convenience. Please let me know if you need anything from me.\n\nThanks,\n[Your name]",
      },

      { type: "h2", text: "Template 3: Overdue Invoice Follow-Up" },
      {
        type: "quote",
        text: "Subject: Follow-up: Invoice [INV-0001] was due [date]\n\nHi [Name],\n\nI'm following up on invoice [INV-0001] for [amount], which was due on [date]. It may have been missed, so I've attached it again. Could you let me know when I can expect payment?\n\nThank you,\n[Your name]",
      },

      { type: "h2", text: "Template 4: Second or Final Notice" },
      {
        type: "quote",
        text: "Subject: Second notice: Invoice [INV-0001] is [X] days overdue\n\nHi [Name],\n\nInvoice [INV-0001] for [amount] is now [X] days past its due date of [date]. Please arrange payment by [new date], or let me know if there is an issue I can help resolve.\n\nRegards,\n[Your name]",
      },

      { type: "h2", text: "Tips for Better Invoice Emails" },
      {
        type: "ul",
        items: [
          "Put the invoice number and due date in the subject line.",
          "Keep the tone polite and assume the delay is an oversight.",
          "Attach the invoice as a PDF and mention the amount in the email body.",
          "Reference the original due date in every follow-up.",
          "Send to the correct billing contact.",
        ],
      },

      { type: "h2", text: FAQ_HEADING },
      { type: "h3", text: "When should I send a payment reminder?" },
      {
        type: "p",
        text: "A few days before the due date, on the due date, or shortly after it passes. Pick a routine and use it consistently.",
      },
      { type: "h3", text: "How do I ask for payment politely?" },
      {
        type: "p",
        text: "Reference the invoice number and due date, assume good faith, and ask if they need anything to process it.",
      },

      { type: "h2", text: "Create and Send Your Invoice" },
      {
        type: "p",
        text: "Create your invoice with our free generator, then use these templates. For the full sending process, see [how to send an invoice](/blog/how-to-send-an-invoice), and choose your due dates with [invoice payment terms explained](/blog/invoice-payment-terms-explained).",
      },
      CTA("Create your invoice and download it as a PDF."),
    ],
  },

  // ---------------------------------------------------------------------
  {
    slug: "how-to-write-an-invoice-for-services",
    title: "How to Write an Invoice for Services (With Example)",
    description:
      "Learn how to write an invoice for services step by step, with a simple example. Includes what to list, how to bill hourly or by project, and what to avoid.",
    category: "Invoicing Basics",
    publishedAt: "2026-09-30",
    updatedAt: "2026-09-30",
    relatedSlugs: [
      "how-to-create-a-professional-invoice",
      "what-should-an-invoice-include",
      "freelance-invoice-guide",
      "common-invoice-mistakes",
    ],
    content: [
      {
        type: "p",
        text: "How do you write an invoice for services? List your details and the client's details, add a unique invoice number and dates, describe each service with hours or a fixed price, show the total, and add payment instructions. You do not need experience or special software: the steps below and the example will get you there.",
      },

      { type: "h2", text: "Step-by-Step: Write an Invoice for Services" },
      {
        type: "ol",
        items: [
          "Write \"Invoice\" at the top with your business name and contact details.",
          "Add the client's name, company, and billing address.",
          "Give the invoice a unique number and add the invoice date and due date.",
          "List each service with a clear description, hours or quantity, and rate.",
          "Add the subtotal, any tax or discount, and the total due.",
          "Add payment terms and how the client can pay.",
          "Check every detail, save as a PDF, and send it.",
        ],
      },
      CTA("Skip the formatting: fill in a form and download your invoice."),

      { type: "h2", text: "Invoice for Services Example" },
      {
        type: "table",
        caption: "Example: services invoice INV-0007, due in 14 days (USD)",
        headers: ["Service", "Hours", "Rate", "Amount"],
        rows: [
          ["Logo design, 2 concepts", "6", "$60.00", "$360.00"],
          ["Brand colour palette and font guide", "3", "$60.00", "$180.00"],
          ["Revisions (2 rounds)", "2", "$60.00", "$120.00"],
          ["Total due", "", "", "$660.00"],
        ],
      },

      { type: "h2", text: "Hourly Rate or Fixed Price?" },
      {
        type: "p",
        text: "For hourly work, show hours and rate on separate lines so the client can check the math. For a fixed price, describe what is included, such as \"Website design, up to 5 pages, 2 revision rounds, $1,500.\" Choose whichever matches what you agreed with the client.",
      },

      { type: "h2", text: "What to Avoid" },
      {
        type: "ul",
        items: [
          "Vague descriptions like \"services rendered.\"",
          "Missing due dates or payment instructions.",
          "Reusing invoice numbers.",
          "Leaving out the currency for international clients.",
        ],
      },
      {
        type: "p",
        text: "See [common invoice mistakes](/blog/common-invoice-mistakes) for the full list.",
      },

      { type: "h2", text: FAQ_HEADING },
      { type: "h3", text: "Do I need a business to write an invoice for services?" },
      {
        type: "p",
        text: "No. Freelancers and sole traders can invoice under their own name. Whether you need to register or charge tax depends on where you live, so check local rules.",
      },
      { type: "h3", text: "What should I write in the description column?" },
      {
        type: "p",
        text: "What you did, for whom, and when, briefly. For example: \"Homepage redesign, delivered March 4–18.\"",
      },

      { type: "h2", text: "Write Your Invoice Online" },
      {
        type: "p",
        text: "Use our free invoice generator to add your services, rates, and totals, then download a PDF. For the complete checklist, read [what should be included on an invoice](/blog/what-should-an-invoice-include), or follow the full process in [how to create a professional invoice](/blog/how-to-create-a-professional-invoice).",
      },
      CTA("Create your services invoice now."),
    ],
  },

  // ---------------------------------------------------------------------
  {
    slug: "proforma-invoice-vs-invoice",
    title: "Proforma Invoice vs Invoice: What's the Difference?",
    description:
      "Proforma invoice vs invoice: learn what each one is, when to use a proforma invoice, and how it differs from a final invoice, with a quick comparison table.",
    category: "Invoicing Basics",
    publishedAt: "2026-09-30",
    updatedAt: "2026-09-30",
    relatedSlugs: [
      "invoice-vs-receipt",
      "what-should-an-invoice-include",
      "how-to-create-a-professional-invoice",
      "common-invoice-mistakes",
    ],
    content: [
      {
        type: "p",
        text: "What is the difference between a proforma invoice and an invoice? A proforma invoice is a preliminary document that estimates what a customer will be charged before the work is done or goods are delivered. A regular (final) invoice is a formal request for payment issued after the sale or work. A proforma is not usually treated as a final bill.",
      },

      { type: "h2", text: "What Is a Proforma Invoice?" },
      {
        type: "p",
        text: "A proforma invoice lists the expected goods or services, prices, and terms so the customer can approve them, arrange payment, or use it for things like customs or a purchase approval. It acts like a quote with invoice-style formatting. It normally states that it is a proforma so it is not mistaken for a final invoice.",
      },

      { type: "h2", text: "Proforma Invoice vs Invoice" },
      {
        type: "table",
        caption: "Proforma invoice vs final invoice",
        headers: ["", "Proforma invoice", "Final invoice"],
        rows: [
          ["Purpose", "Estimate or preliminary bill before the sale", "Formal request for payment"],
          ["Timing", "Before work or delivery", "After work or delivery"],
          ["Legally a bill?", "Usually no; it is a preview", "Yes, used for accounting and payment"],
          ["Common uses", "Approvals, prepayment, international shipping", "Everyday billing and bookkeeping"],
        ],
      },
      CTA("Need the final bill? Create a professional invoice in minutes."),

      { type: "h2", text: "When Should You Use a Proforma Invoice?" },
      {
        type: "ul",
        items: [
          "When a customer needs written pricing to approve a purchase.",
          "When you require prepayment or a deposit before starting.",
          "When shipping internationally and paperwork requires a value statement.",
          "When the final price may change slightly after delivery.",
        ],
      },
      {
        type: "p",
        text: "Rules and customs requirements differ by country, so check what applies to your situation.",
      },

      { type: "h2", text: "What to Include on a Proforma Invoice" },
      {
        type: "p",
        text: "Include the same details as a normal invoice: your and the customer's details, a reference number, date, item descriptions, quantities, prices, taxes, total, and payment terms, plus the word \"Proforma\" clearly at the top. See [what should be included on an invoice](/blog/what-should-an-invoice-include) for the full list.",
      },

      { type: "h2", text: FAQ_HEADING },
      { type: "h3", text: "Is a proforma invoice the same as a quote?" },
      {
        type: "p",
        text: "They are similar. Both estimate costs before the work is done, but a proforma invoice is formatted like an invoice and is often used for prepayment, approvals, or shipping documents.",
      },
      { type: "h3", text: "Can I ask for payment with a proforma invoice?" },
      {
        type: "p",
        text: "Yes, many businesses ask for prepayment against a proforma invoice. After the sale is completed, issue a final invoice and, if needed, a receipt. See [invoice vs receipt](/blog/invoice-vs-receipt).",
      },

      { type: "h2", text: "Create Your Invoice Online" },
      {
        type: "p",
        text: "Once the work is done, create your final invoice with our free generator. If you are new to invoicing, start with [how to create a professional invoice](/blog/how-to-create-a-professional-invoice).",
      },
      CTA("Create your final invoice and download it as a PDF."),
    ],
  },
  // ---------------------------------------------------------------------
  // SOUTH ASIA ARTICLES (Pakistan, India, Bangladesh)
  //
  // HOW TO USE: paste everything below (from the first `{` to the last `},`)
  // INSIDE the `articles` array in your blog file, just before the closing `];`
  // (after the "proforma-invoice-vs-invoice" article). It uses the existing
  // CTA() helper and FAQ_HEADING constant from that file.
  //
  // IMPORTANT: tax rules, rates and thresholds change. Before publishing,
  // verify the tax details against the official FBR / GST / NBR websites.
  // ---------------------------------------------------------------------

  {
    slug: "invoice-format-in-pakistan",
    title: "Invoice Format in Pakistan (Free Template and Guide)",
    description:
      "Learn the standard invoice format in Pakistan: what to include, NTN and tax details, PKR amounts, payment terms, and a simple sample you can copy.",
    category: "Pakistan",
    publishedAt: "2026-10-20",
    updatedAt: "2026-10-20",
    relatedSlugs: [
      "sales-tax-invoice-pakistan",
      "freelancer-invoice-pakistan",
      "what-should-an-invoice-include",
      "how-to-number-invoices",
    ],
    content: [
      {
        type: "p",
        text: "What is the correct invoice format in Pakistan? A Pakistani invoice should show your business details, the customer's details, a unique invoice number, dates, a clear list of goods or services, amounts in PKR, any applicable tax, and payment instructions. If you are registered for tax, your NTN and, where applicable, sales tax registration details should also appear on it.",
      },
      CTA("Create a Pakistan-ready invoice in PKR with our free generator."),

      { type: "h2", text: "What to Include on an Invoice in Pakistan" },
      {
        type: "ul",
        items: [
          "Your name or business name, address, phone, and email",
          "Your NTN (and sales tax registration number if you are registered)",
          "Customer name, address, and NTN if they are a registered business",
          "A unique invoice number, invoice date, and due date",
          "Description, quantity, rate, and amount for each item",
          "Subtotal, sales tax (if applicable), discounts, and total in PKR",
          "Payment terms and bank account, Raast, or other payment details",
        ],
      },

      { type: "h2", text: "Simple Invoice Format Example (PKR)" },
      {
        type: "table",
        caption: "Sample invoice INV-0012, due in 15 days (PKR)",
        headers: ["Description", "Qty", "Rate", "Amount"],
        rows: [
          ["Company website design (5 pages)", "1", "PKR 60,000", "PKR 60,000"],
          ["Logo design", "1", "PKR 15,000", "PKR 15,000"],
          ["Subtotal", "", "", "PKR 75,000"],
          ["Total due", "", "", "PKR 75,000"],
        ],
      },
      {
        type: "p",
        text: "Add your bank name, account title, and IBAN below the table so the customer can pay without asking. Also read [what should be included on an invoice](/blog/what-should-an-invoice-include) for the full checklist.",
      },

      { type: "h2", text: "Do You Need an NTN on Your Invoice?" },
      {
        type: "p",
        text: "If you are registered with the FBR, you should show your NTN. Many business customers will ask for it because they need it for their own tax and accounting records. Whether you must register depends on your income and business type, so confirm with the FBR or a qualified tax advisor.",
      },

      { type: "h2", text: "Tips for Pakistani Businesses and Freelancers" },
      {
        type: "ul",
        items: [
          "Write amounts clearly as PKR or Rs. so there is no currency confusion.",
          "Give the exact due date, not just \"Net 15\". See [invoice payment terms explained](/blog/invoice-payment-terms-explained).",
          "Keep invoice numbers consistent: [how to number invoices](/blog/how-to-number-invoices).",
          "Save every invoice as a PDF and keep a record of what was paid.",
        ],
      },

      { type: "h2", text: FAQ_HEADING },
      { type: "h3", text: "What is the standard invoice format in Pakistan?" },
      {
        type: "p",
        text: "There is no single design, but every invoice should show seller and buyer details, a unique number, date, itemised charges in PKR, tax if applicable, the total, and payment instructions.",
      },
      { type: "h3", text: "Can I make an invoice in Pakistan without an NTN?" },
      {
        type: "p",
        text: "You can issue an invoice with your name and contact details, but registered businesses must show their NTN. Check FBR rules for your situation.",
      },
      { type: "h3", text: "Should I write the invoice in Urdu or English?" },
      {
        type: "p",
        text: "English is standard for business and international clients. Use whichever language your customer and your accountant can work with.",
      },

      { type: "h2", text: "Create Your Invoice Online" },
      {
        type: "p",
        text: "Our free invoice generator lets you add your details, items, prices, and notes, then download a PDF. Learn more about tax invoices in our [Pakistan sales tax invoice guide](/blog/sales-tax-invoice-pakistan).",
      },
      CTA("Create your invoice and download it as a PDF."),
    ],
  },

  // ---------------------------------------------------------------------
  {
    slug: "sales-tax-invoice-pakistan",
    title: "Sales Tax Invoice in Pakistan: What to Include (FBR Guide)",
    description:
      "What should a sales tax invoice in Pakistan include? NTN, STRN, tax amount, buyer details, and tips to keep your invoices FBR-ready.",
    category: "Pakistan",
    publishedAt: "2026-10-20",
    updatedAt: "2026-10-20",
    relatedSlugs: [
      "invoice-format-in-pakistan",
      "freelancer-invoice-pakistan",
      "what-should-an-invoice-include",
      "common-invoice-mistakes",
    ],
    content: [
      {
        type: "p",
        text: "What is a sales tax invoice in Pakistan? It is an invoice issued by a sales tax registered person that shows the value of the supply and the sales tax charged. Registered businesses must follow FBR requirements, so the invoice usually needs more detail than a simple bill. This guide covers the common fields, but always confirm the current rules with the FBR or a tax professional.",
      },
      CTA("Add tax lines and totals automatically with our invoice generator."),

      { type: "h2", text: "Key Details on a Sales Tax Invoice" },
      {
        type: "ul",
        items: [
          "The words \"Sales Tax Invoice\" or \"Tax Invoice\" clearly shown",
          "Your name, address, NTN, and sales tax registration number (STRN)",
          "The buyer's name, address, and NTN or STRN where applicable",
          "A unique, serial invoice number and the date of issue",
          "Description, quantity, and value of goods or services",
          "The rate and amount of sales tax, shown separately",
          "The total amount payable including tax",
        ],
      },

      { type: "h2", text: "Showing Tax Separately" },
      {
        type: "p",
        text: "Show the value before tax, the tax rate, the tax amount, and the total as separate lines. This makes it easy for a registered buyer to claim input tax adjustment where allowed. Tax rates and special rules differ by sector and change over time, so check the current rate that applies to you.",
      },
      {
        type: "table",
        caption: "Example tax invoice layout (PKR, illustrative rate)",
        headers: ["Description", "Value", "Tax rate", "Tax", "Total"],
        rows: [
          ["Consulting services", "PKR 100,000", "Example rate", "Tax amount", "Total"],
        ],
      },
      {
        type: "p",
        text: "Replace the example row with your own figures and the correct rate from the FBR.",
      },

      { type: "h2", text: "Common Mistakes" },
      {
        type: "ul",
        items: [
          "Missing NTN or STRN on a registered business invoice",
          "Tax mixed into the price with no separate line",
          "Skipped or duplicated invoice numbers",
          "Wrong buyer name, so the buyer cannot use the invoice",
        ],
      },
      {
        type: "p",
        text: "See [common invoice mistakes](/blog/common-invoice-mistakes) for more.",
      },

      { type: "h2", text: FAQ_HEADING },
      { type: "h3", text: "What is the difference between NTN and STRN?" },
      {
        type: "p",
        text: "The NTN is a National Tax Number used for income tax identification. The STRN is the sales tax registration number issued to businesses registered for sales tax. Some businesses have both.",
      },
      { type: "h3", text: "Do all Pakistani businesses need to charge sales tax?" },
      {
        type: "p",
        text: "No. It depends on whether you are required to register and on what you sell. Confirm with the FBR or an accountant.",
      },

      { type: "h2", text: "Create a Tax Invoice Online" },
      {
        type: "p",
        text: "Use our free generator to add your tax details and download a PDF. For a simpler invoice, read the [Pakistan invoice format guide](/blog/invoice-format-in-pakistan).",
      },
      CTA("Create your invoice now."),
    ],
  },

  // ---------------------------------------------------------------------
  {
    slug: "freelancer-invoice-pakistan",
    title: "How Pakistani Freelancers Invoice International Clients",
    description:
      "A practical guide for Pakistani freelancers: how to invoice foreign clients, choose currency, add payment details for Payoneer, Wise, or bank transfer, and get paid on time.",
    category: "Pakistan",
    publishedAt: "2026-10-20",
    updatedAt: "2026-10-20",
    relatedSlugs: [
      "freelance-invoice-guide",
      "invoice-foreign-client-south-asia",
      "invoice-payment-terms-explained",
      "invoice-email-templates",
    ],
    content: [
      {
        type: "p",
        text: "How should a Pakistani freelancer invoice a foreign client? Send a clear PDF invoice in the client's currency (usually USD, GBP, or EUR), with your details, a unique invoice number, a clear description of the work, payment terms, and payment instructions for the method you use, such as Payoneer, Wise, or a bank wire.",
      },
      CTA("Create a USD or PKR freelance invoice in minutes."),

      { type: "h2", text: "1. Invoice in the Client's Currency" },
      {
        type: "p",
        text: "State the currency clearly, for example USD 500, not just 500. Most international clients prefer to pay in their own currency, and you can convert to PKR when you withdraw.",
      },

      { type: "h2", text: "2. Choose a Payment Method and Add the Details" },
      {
        type: "ul",
        items: [
          "Payoneer: add the email or payment request link the client should use.",
          "Wise: add the account details or your payment link.",
          "Bank wire: add account title, IBAN, bank name, and SWIFT/BIC code.",
          "Freelance platforms: invoice through the platform if the contract requires it.",
        ],
      },
      {
        type: "p",
        text: "Mention who pays transfer fees, since international fees can reduce what you receive.",
      },

      { type: "h2", text: "3. Describe the Work Clearly" },
      {
        type: "p",
        text: "Write a specific description such as \"WordPress website, 5 pages, 2 revision rounds, delivered 10 to 24 October\". Clear descriptions help foreign clients approve invoices faster. See our [freelance invoice guide](/blog/freelance-invoice-guide) for the full process.",
      },

      { type: "h2", text: "4. Set Payment Terms and a Due Date" },
      {
        type: "p",
        text: "Net 7 or Net 14 works well for freelancers. Agree on terms before starting and add the exact due date on the invoice. Compare options in [invoice payment terms explained](/blog/invoice-payment-terms-explained).",
      },

      { type: "h2", text: "5. Follow Up Politely" },
      {
        type: "p",
        text: "If payment is late, send a short reminder with the invoice number and due date. Copy-paste examples are in [invoice email templates](/blog/invoice-email-templates).",
      },

      { type: "h2", text: "Tax and Registration" },
      {
        type: "p",
        text: "Tax treatment of freelance income in Pakistan, including income from exports of services, has its own rules and incentives that change over time. Speak to a qualified tax advisor or check the FBR site rather than relying on general guides.",
      },

      { type: "h2", text: FAQ_HEADING },
      { type: "h3", text: "Which currency should a Pakistani freelancer invoice in?" },
      {
        type: "p",
        text: "Use the currency agreed in your contract, usually USD for international clients. State it clearly on the invoice.",
      },
      { type: "h3", text: "What details do I need for an international bank transfer?" },
      {
        type: "p",
        text: "Typically account title, IBAN or account number, bank name and address, and the SWIFT/BIC code.",
      },
      { type: "h3", text: "Should I ask for an advance payment?" },
      {
        type: "p",
        text: "Many freelancers take a deposit, especially with new clients. Show the deposit as already paid on the final invoice.",
      },

      { type: "h2", text: "Create Your Freelance Invoice" },
      {
        type: "p",
        text: "Use our free generator to build a professional PDF invoice with your currency, items, and payment notes. For the international side, see [invoicing a foreign client from South Asia](/blog/invoice-foreign-client-south-asia).",
      },
      CTA("Create your freelance invoice and download the PDF."),
    ],
  },

  // ---------------------------------------------------------------------
  {
    slug: "gst-invoice-format-india",
    title: "GST Invoice Format in India: What to Include (With Example)",
    description:
      "Learn the GST invoice format in India: GSTIN, HSN or SAC code, place of supply, CGST, SGST, IGST, and a simple example you can follow.",
    category: "India",
    publishedAt: "2026-10-20",
    updatedAt: "2026-10-20",
    relatedSlugs: [
      "freelancer-invoice-india",
      "what-should-an-invoice-include",
      "how-to-number-invoices",
      "common-invoice-mistakes",
    ],
    content: [
      {
        type: "p",
        text: "What should a GST invoice in India include? A GST invoice must show the supplier's GSTIN, the recipient's details where required, a unique invoice number and date, a description of goods or services with an HSN or SAC code, the taxable value, the GST rate and amount (CGST and SGST, or IGST), the place of supply, and the total. Exact requirements depend on the type of supply and your registration, so verify them on the official GST portal.",
      },
      CTA("Build a clean, itemised invoice with automatic totals."),

      { type: "h2", text: "Key Fields on a GST Invoice" },
      {
        type: "ul",
        items: [
          "The heading \"Tax Invoice\" for registered taxable supplies",
          "Supplier name, address, and GSTIN",
          "Recipient name, address, and GSTIN if they are registered",
          "A unique invoice number (letters, numbers, and certain symbols) and date",
          "HSN code for goods or SAC code for services",
          "Description, quantity, unit, and taxable value",
          "GST rate and the amount of CGST, SGST, or IGST",
          "Place of supply and the total invoice value",
        ],
      },

      { type: "h2", text: "CGST, SGST, or IGST?" },
      {
        type: "p",
        text: "For a supply within the same state, tax is split into CGST and SGST. For a supply between states, IGST applies. Your invoice should show whichever applies, with the rate and amount on separate lines.",
      },

      { type: "h2", text: "GST Invoice Example (INR)" },
      {
        type: "table",
        caption: "Simplified intra-state example. Use the correct rate for your item.",
        headers: ["Description", "SAC", "Taxable value", "CGST", "SGST", "Total"],
        rows: [
          ["Website development", "Your SAC", "INR 50,000", "Rate", "Rate", "Total"],
        ],
      },
      {
        type: "p",
        text: "Replace the placeholders with your real SAC or HSN code and the rate set by the GST authorities. Large businesses may also need e-invoicing above a turnover threshold, so check current rules.",
      },

      { type: "h2", text: "Invoice Numbers Under GST" },
      {
        type: "p",
        text: "Invoice numbers must be unique for a financial year. A simple sequence such as INV/2026-27/0001 works well. See [how to number invoices](/blog/how-to-number-invoices).",
      },

      { type: "h2", text: FAQ_HEADING },
      { type: "h3", text: "What is the difference between HSN and SAC?" },
      {
        type: "p",
        text: "HSN codes classify goods and SAC codes classify services. Use the one that matches what you sell.",
      },
      { type: "h3", text: "Do I need a GSTIN to issue an invoice?" },
      {
        type: "p",
        text: "Only if you are registered for GST. Unregistered businesses issue a simpler bill of supply or invoice without charging GST. Confirm your obligations with a chartered accountant.",
      },
      { type: "h3", text: "What is the place of supply?" },
      {
        type: "p",
        text: "It determines whether the sale is intra-state or inter-state, and therefore whether CGST and SGST or IGST applies.",
      },

      { type: "h2", text: "Create Your Invoice Online" },
      {
        type: "p",
        text: "Our free invoice generator helps you create a clear invoice and download a PDF. If you freelance, read the [India freelancer invoice guide](/blog/freelancer-invoice-india).",
      },
      CTA("Create your invoice and download the PDF."),
    ],
  },

  // ---------------------------------------------------------------------
  {
    slug: "freelancer-invoice-india",
    title: "How Indian Freelancers Invoice Clients (Domestic and Overseas)",
    description:
      "A guide for Indian freelancers: how to invoice Indian and foreign clients, when GST matters, what to add for international payments, and how to get paid on time.",
    category: "India",
    publishedAt: "2026-10-20",
    updatedAt: "2026-10-20",
    relatedSlugs: [
      "gst-invoice-format-india",
      "freelance-invoice-guide",
      "invoice-foreign-client-south-asia",
      "invoice-payment-terms-explained",
    ],
    content: [
      {
        type: "p",
        text: "How does an Indian freelancer invoice a client? For Indian clients, issue a clear invoice in INR and add GST details if you are registered. For overseas clients, invoice in the agreed foreign currency with payment instructions for your bank, Wise, Payoneer, or another method. Either way, include a unique invoice number, dates, a clear description of work, and payment terms.",
      },
      CTA("Create a freelance invoice in INR or USD."),

      { type: "h2", text: "Invoicing Indian Clients" },
      {
        type: "ul",
        items: [
          "Invoice in INR and show your name, address, and PAN if appropriate.",
          "If registered for GST, issue a tax invoice with your GSTIN, SAC code, and tax lines. See the [GST invoice format guide](/blog/gst-invoice-format-india).",
          "Mention TDS if the client deducts it, so both sides can reconcile the payment.",
          "Add bank details or a UPI ID for payment.",
        ],
      },

      { type: "h2", text: "Invoicing Overseas Clients" },
      {
        type: "p",
        text: "State the currency clearly, describe the work, and add the payment method. Exports of services have specific GST treatment, which may involve a Letter of Undertaking, so confirm the current rules with a chartered accountant. Details for bank wires are in [invoicing a foreign client from South Asia](/blog/invoice-foreign-client-south-asia).",
      },

      { type: "h2", text: "Describe the Work Clearly" },
      {
        type: "p",
        text: "Write specific descriptions, for example \"Mobile app UI design, 12 screens, 2 revision rounds, delivered 5 to 20 October\". The [freelance invoice guide](/blog/freelance-invoice-guide) covers hourly, project, and retainer billing.",
      },

      { type: "h2", text: "Payment Terms" },
      {
        type: "p",
        text: "Use Net 7, Net 15, or Net 30 depending on the client and agree on them before you begin. See [invoice payment terms explained](/blog/invoice-payment-terms-explained).",
      },

      { type: "h2", text: FAQ_HEADING },
      { type: "h3", text: "Does a freelancer in India need to charge GST?" },
      {
        type: "p",
        text: "It depends on your turnover and the nature of your services. If you are above the registration threshold, you generally must register and charge GST. Confirm with a chartered accountant.",
      },
      { type: "h3", text: "What is TDS on a freelancer invoice?" },
      {
        type: "p",
        text: "Some clients deduct tax at source before paying. Showing the TDS clearly helps you reconcile payments and claim credit later.",
      },
      { type: "h3", text: "Can I accept UPI payment on an invoice?" },
      {
        type: "p",
        text: "Yes for domestic clients. Add your UPI ID or payment link on the invoice.",
      },

      { type: "h2", text: "Create Your Invoice" },
      {
        type: "p",
        text: "Our free invoice generator lets you add items, taxes, and notes, then download a PDF to send to your client.",
      },
      CTA("Create your freelance invoice now."),
    ],
  },

  // ---------------------------------------------------------------------
  {
    slug: "vat-invoice-bangladesh",
    title: "VAT Invoice in Bangladesh: What to Include (Mushak Guide)",
    description:
      "What should a VAT invoice in Bangladesh include? BIN, Mushak challan details, VAT amount, buyer details, and tips for accurate invoices.",
    category: "Bangladesh",
    publishedAt: "2026-10-20",
    updatedAt: "2026-10-20",
    relatedSlugs: [
      "freelancer-invoice-bangladesh",
      "what-should-an-invoice-include",
      "how-to-number-invoices",
      "common-invoice-mistakes",
    ],
    content: [
      {
        type: "p",
        text: "What is a VAT invoice in Bangladesh? VAT-registered businesses issue a tax invoice, often called a Mushak challan, showing the seller's BIN, the buyer's details, the goods or services, the value, and the VAT charged. Specific forms and requirements are set by the National Board of Revenue (NBR) and can change, so check the NBR website or a tax advisor before you issue VAT invoices.",
      },
      CTA("Create a clear, itemised invoice with automatic totals."),

      { type: "h2", text: "Key Details on a VAT Invoice" },
      {
        type: "ul",
        items: [
          "Seller name, address, and BIN (Business Identification Number)",
          "Buyer name, address, and BIN if the buyer is registered",
          "A unique serial invoice or challan number and date",
          "Description, quantity, and unit price of goods or services",
          "Value before VAT, the VAT rate and amount, and the total in BDT",
          "Payment terms and bank or mobile payment details",
        ],
      },

      { type: "h2", text: "Showing VAT Separately" },
      {
        type: "p",
        text: "Show the value before VAT, the VAT rate, the VAT amount, and the total as separate lines. Rates and exemptions differ by product and service, so confirm the correct rate for what you sell.",
      },

      { type: "h2", text: "Simple Invoice Example (BDT)" },
      {
        type: "table",
        caption: "Sample invoice INV-0005 (BDT, VAT example only)",
        headers: ["Description", "Qty", "Rate", "Amount"],
        rows: [
          ["Graphic design package", "1", "BDT 20,000", "BDT 20,000"],
          ["VAT (if applicable)", "", "Rate", "Amount"],
          ["Total due", "", "", "Total"],
        ],
      },
      {
        type: "p",
        text: "Replace the placeholders with your real VAT rate. A unique numbering system helps too, see [how to number invoices](/blog/how-to-number-invoices).",
      },

      { type: "h2", text: FAQ_HEADING },
      { type: "h3", text: "What is a BIN in Bangladesh?" },
      {
        type: "p",
        text: "A BIN is the Business Identification Number issued to VAT-registered businesses. It should appear on your VAT invoices.",
      },
      { type: "h3", text: "Do all businesses in Bangladesh charge VAT?" },
      {
        type: "p",
        text: "No. It depends on your turnover, sector, and registration status. Check NBR rules or ask a tax advisor.",
      },

      { type: "h2", text: "Create Your Invoice Online" },
      {
        type: "p",
        text: "Use our free generator to build a clean invoice and download a PDF. Freelancers can also read the [Bangladesh freelancer invoice guide](/blog/freelancer-invoice-bangladesh).",
      },
      CTA("Create your invoice and download the PDF."),
    ],
  },

  // ---------------------------------------------------------------------
  {
    slug: "freelancer-invoice-bangladesh",
    title: "How Bangladeshi Freelancers Invoice Foreign Clients",
    description:
      "Guide for Bangladeshi freelancers: how to invoice international clients, choose currency, add payment details, and follow up on late payments.",
    category: "Bangladesh",
    publishedAt: "2026-10-20",
    updatedAt: "2026-10-20",
    relatedSlugs: [
      "freelance-invoice-guide",
      "invoice-foreign-client-south-asia",
      "invoice-payment-terms-explained",
      "invoice-email-templates",
    ],
    content: [
      {
        type: "p",
        text: "How should a Bangladeshi freelancer invoice an international client? Send a clear PDF invoice in the agreed currency (often USD), with your details, a unique number, a clear description of the work, payment terms, and payment instructions for your bank, Payoneer, Wise, or the marketplace you use.",
      },
      CTA("Create a USD or BDT invoice in minutes."),

      { type: "h2", text: "1. State the Currency and Amount Clearly" },
      {
        type: "p",
        text: "Write USD 400, not only 400. For local clients, use BDT and say so on the invoice.",
      },

      { type: "h2", text: "2. Add Payment Details" },
      {
        type: "ul",
        items: [
          "Payoneer or Wise: add your payment link or account email.",
          "Bank transfer: add account name, account number, bank and branch, and SWIFT/BIC.",
          "Local clients: bank details or a mobile payment number such as bKash or Nagad.",
        ],
      },
      {
        type: "p",
        text: "Say who covers transfer fees so you are not surprised by deductions.",
      },

      { type: "h2", text: "3. Describe the Work and Set a Due Date" },
      {
        type: "p",
        text: "Give a specific description, for example \"Shopify store setup, 10 products, 2 revision rounds\", and an exact due date. Choose terms using [invoice payment terms explained](/blog/invoice-payment-terms-explained).",
      },

      { type: "h2", text: "4. Follow Up Professionally" },
      {
        type: "p",
        text: "If a payment is late, send a polite reminder that references the invoice number and due date. Use the [invoice email templates](/blog/invoice-email-templates).",
      },

      { type: "h2", text: "Tax and Regulations" },
      {
        type: "p",
        text: "Rules for freelance income, foreign remittances, and tax in Bangladesh are specific and can change. Check with a qualified tax advisor or the relevant authorities rather than relying on general guides.",
      },

      { type: "h2", text: FAQ_HEADING },
      { type: "h3", text: "Which currency should I invoice in?" },
      {
        type: "p",
        text: "Use the currency agreed with the client, commonly USD, and write it clearly on the invoice.",
      },
      { type: "h3", text: "Can I send a PDF invoice instead of using the marketplace invoice?" },
      {
        type: "p",
        text: "If you work through a marketplace, follow its billing process. For direct clients, a PDF invoice by email is standard.",
      },

      { type: "h2", text: "Create Your Freelance Invoice" },
      {
        type: "p",
        text: "Use our free invoice generator to create a professional PDF. For more on international billing, read [invoicing a foreign client from South Asia](/blog/invoice-foreign-client-south-asia) and the general [freelance invoice guide](/blog/freelance-invoice-guide).",
      },
      CTA("Create your invoice now."),
    ],
  },

  // ---------------------------------------------------------------------
  {
    slug: "quotation-vs-invoice",
    title: "Quotation vs Invoice: What's the Difference?",
    description:
      "Quotation vs invoice: learn what each one is, when to send a quotation, when to send an invoice, and how they fit together in a sale.",
    category: "Invoicing Basics",
    publishedAt: "2026-10-20",
    updatedAt: "2026-10-20",
    relatedSlugs: [
      "proforma-invoice-vs-invoice",
      "invoice-vs-receipt",
      "what-should-an-invoice-include",
      "how-to-create-a-professional-invoice",
    ],
    content: [
      {
        type: "p",
        text: "What is the difference between a quotation and an invoice? A quotation (or quote) tells a customer what you would charge for a job before it starts. An invoice asks for payment after the work is done or the goods are delivered. The quote is an offer; the invoice is a bill.",
      },

      { type: "h2", text: "Quotation vs Invoice at a Glance" },
      {
        type: "table",
        caption: "Quotation vs invoice",
        headers: ["", "Quotation", "Invoice"],
        rows: [
          ["Purpose", "Offers a price for future work", "Requests payment for completed work"],
          ["Timing", "Before the job", "After the job or delivery"],
          ["Binding?", "Usually valid for a set period", "A formal request for payment"],
          ["Key details", "Scope, price, validity date", "Invoice number, due date, payment details"],
        ],
      },
      CTA("Ready to bill? Create your invoice in minutes."),

      { type: "h2", text: "What a Quotation Should Include" },
      {
        type: "ul",
        items: [
          "Your details and the customer's details",
          "A quote number and the date",
          "A clear scope: what is and is not included",
          "Prices, taxes, and the total",
          "How long the quote is valid",
          "Payment terms and any deposit required",
        ],
      },

      { type: "h2", text: "How They Work Together" },
      {
        type: "ol",
        items: [
          "You send a quotation with scope and price.",
          "The customer accepts it, in writing if possible.",
          "You do the work, or take a deposit first.",
          "You send an invoice that matches the accepted quote.",
          "The customer pays and you can issue a receipt.",
        ],
      },
      {
        type: "p",
        text: "Keep the invoice consistent with the quote. If the scope changed, explain the difference on the invoice. For the final bill, see [what should be included on an invoice](/blog/what-should-an-invoice-include). A related document is the [proforma invoice](/blog/proforma-invoice-vs-invoice).",
      },

      { type: "h2", text: FAQ_HEADING },
      { type: "h3", text: "Is a quotation legally binding?" },
      {
        type: "p",
        text: "It depends on the wording and local law. A quote with a clear price and validity period usually becomes binding once the customer accepts it. Check local rules if you are unsure.",
      },
      { type: "h3", text: "Can I turn a quotation into an invoice?" },
      {
        type: "p",
        text: "Yes. After the work is complete, copy the accepted items and prices into an invoice with a new invoice number and a due date.",
      },

      { type: "h2", text: "Create Your Invoice Online" },
      {
        type: "p",
        text: "Our free invoice generator lets you add your items and download a PDF. New to invoicing? Start with [how to create a professional invoice](/blog/how-to-create-a-professional-invoice).",
      },
      CTA("Create your invoice and download the PDF."),
    ],
  },

  // ---------------------------------------------------------------------
  {
    slug: "invoice-foreign-client-south-asia",
    title: "How to Invoice a Foreign Client from Pakistan, India, or Bangladesh",
    description:
      "How to invoice an international client from South Asia: currency, SWIFT and IBAN details, Payoneer and Wise, fees, payment terms, and avoiding delays.",
    category: "For Freelancers",
    publishedAt: "2026-10-20",
    updatedAt: "2026-10-20",
    relatedSlugs: [
      "freelance-invoice-guide",
      "freelancer-invoice-pakistan",
      "freelancer-invoice-india",
      "freelancer-invoice-bangladesh",
    ],
    content: [
      {
        type: "p",
        text: "How do you invoice a foreign client from South Asia? Use a professional PDF invoice that states the currency, lists the work clearly, shows an exact due date, and gives the client everything they need to pay you: bank details with SWIFT/BIC, or a Payoneer or Wise link. Clear details prevent the most common cause of international payment delays.",
      },
      CTA("Create an international invoice with the currency you need."),

      { type: "h2", text: "What an International Invoice Should Include" },
      {
        type: "ul",
        items: [
          "Your full name or business name, address, and email",
          "The client's company name, billing address, and any VAT or tax number they need",
          "A unique invoice number, issue date, and due date",
          "A clear description of the work, hours or fixed fee",
          "The currency (USD, GBP, EUR) stated next to every amount",
          "Payment instructions and who pays transfer fees",
        ],
      },

      { type: "h2", text: "Payment Methods Compared" },
      {
        type: "table",
        caption: "Common ways to receive international payments",
        headers: ["Method", "What to add on the invoice", "Good to know"],
        rows: [
          ["Bank wire", "Account name, number or IBAN, bank, SWIFT/BIC", "Familiar to companies, but fees and intermediary charges can apply"],
          ["Payoneer", "Payment request link or account email", "Popular with freelancers; check fees and withdrawal rates"],
          ["Wise", "Account details or payment link", "Often lower fees; availability depends on your country"],
          ["Marketplace", "Follow the platform's process", "Fees are deducted by the platform"],
        ],
      },

      { type: "h2", text: "Avoiding Payment Delays" },
      {
        type: "ul",
        items: [
          "Confirm the billing contact and any purchase order number before you start.",
          "Agree payment terms in writing. See [invoice payment terms explained](/blog/invoice-payment-terms-explained).",
          "Send the invoice as soon as the work is done.",
          "Double check bank details; one wrong digit can delay a transfer for days.",
          "Follow up politely using [invoice email templates](/blog/invoice-email-templates).",
        ],
      },

      { type: "h2", text: "Taxes and Regulations" },
      {
        type: "p",
        text: "Rules for foreign income, tax, and remittances differ between Pakistan, India, and Bangladesh and change over time. Ask a qualified accountant about what applies to you.",
      },

      { type: "h2", text: FAQ_HEADING },
      { type: "h3", text: "Should I invoice in USD or my local currency?" },
      {
        type: "p",
        text: "Invoice in the currency in your contract, usually USD. It protects you from exchange rate confusion and international clients expect it.",
      },
      { type: "h3", text: "What is a SWIFT code?" },
      {
        type: "p",
        text: "A SWIFT/BIC code identifies your bank for international transfers. Your bank can give it to you.",
      },
      { type: "h3", text: "Who should pay the transfer fees?" },
      {
        type: "p",
        text: "Agree this upfront. Many freelancers state on the invoice that the client covers sending fees so the full amount arrives.",
      },

      { type: "h2", text: "Create Your International Invoice" },
      {
        type: "p",
        text: "Use our free generator to build the invoice and download a PDF. Country-specific guides: [Pakistan](/blog/freelancer-invoice-pakistan), [India](/blog/freelancer-invoice-india), and [Bangladesh](/blog/freelancer-invoice-bangladesh). Or read the general [freelance invoice guide](/blog/freelance-invoice-guide).",
      },
      CTA("Create your invoice and download the PDF."),
    ],
  },

  // ---------------------------------------------------------------------
  {
    slug: "invoice-for-web-developers-and-designers",
    title: "Invoice Template for Web Developers and Designers (With Example)",
    description:
      "How web developers and designers should write an invoice: milestones, hourly or fixed pricing, deposits, revisions, and a copyable example.",
    category: "For Freelancers",
    publishedAt: "2026-10-20",
    updatedAt: "2026-10-20",
    relatedSlugs: [
      "how-to-write-an-invoice-for-services",
      "freelance-invoice-guide",
      "invoice-foreign-client-south-asia",
      "common-invoice-mistakes",
    ],
    content: [
      {
        type: "p",
        text: "How should a web developer or designer write an invoice? Break the project into clear line items (design, development, revisions, hosting setup), show hours or fixed fees, subtract any deposit already paid, and add a due date and payment details. Clear milestones make clients more comfortable paying quickly.",
      },
      CTA("Use our free generator to make this invoice in minutes."),

      { type: "h2", text: "Invoice Example for a Website Project" },
      {
        type: "table",
        caption: "Example: INV-0021, due in 14 days (USD)",
        headers: ["Description", "Qty", "Rate", "Amount"],
        rows: [
          ["Homepage and 4 inner pages, responsive design", "1", "$800.00", "$800.00"],
          ["Contact form and basic SEO setup", "1", "$150.00", "$150.00"],
          ["Extra revision round", "2", "$40.00", "$80.00"],
          ["Subtotal", "", "", "$1,030.00"],
          ["Deposit already paid", "", "", "-$400.00"],
          ["Balance due", "", "", "$630.00"],
        ],
      },

      { type: "h2", text: "Tips for Developers and Designers" },
      {
        type: "ul",
        items: [
          "Invoice by milestone: deposit, design approval, launch.",
          "List revisions beyond the agreed number as separate lines.",
          "Say what is included, such as source files or hosting setup.",
          "Show hosting, domain, or plugin costs separately from your fee.",
          "State the currency and payment details clearly.",
        ],
      },

      { type: "h2", text: "Hourly or Fixed Price?" },
      {
        type: "p",
        text: "Hourly suits unclear scopes and maintenance. Fixed price suits well-defined projects. Whichever you choose, describe it clearly. More guidance is in [how to write an invoice for services](/blog/how-to-write-an-invoice-for-services).",
      },

      { type: "h2", text: FAQ_HEADING },
      { type: "h3", text: "Should I invoice before or after the website goes live?" },
      {
        type: "p",
        text: "Many freelancers take a deposit up front and invoice the balance at launch. Agree the schedule in your contract.",
      },
      { type: "h3", text: "How do I bill for extra changes?" },
      {
        type: "p",
        text: "Add them as separate line items with hours and rate, and mention the change request so the client can match it to the conversation.",
      },

      { type: "h2", text: "Create Your Invoice" },
      {
        type: "p",
        text: "Our free generator lets you add line items, deposits, and notes, then download a PDF. Check your invoice against [common invoice mistakes](/blog/common-invoice-mistakes) before sending. If your client is abroad, read [invoicing a foreign client from South Asia](/blog/invoice-foreign-client-south-asia).",
      },
      CTA("Create your invoice and download the PDF."),
    ],
  },
];

// ---------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------

export function getArticleBySlug(slug) {
  return articles.find((a) => a.slug === slug) || null;
}

export function getRelatedArticles(article, limit = 3) {
  if (!article) return [];
  const bySlug = (slug) => articles.find((a) => a.slug === slug);
  const explicit = (article.relatedSlugs || []).map(bySlug).filter(Boolean);
  if (explicit.length >= limit) return explicit.slice(0, limit);
  const fallback = articles.filter(
    (a) => a.slug !== article.slug && !explicit.includes(a)
  );
  return [...explicit, ...fallback].slice(0, limit);
}

// Splits "text with [anchor](/url) links" into
// [{ text: "text with " }, { text: "anchor", href: "/url" }, ...]
export function parseInline(str) {
  const parts = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let m;
  while ((m = re.exec(str)) !== null) {
    if (m.index > last) parts.push({ text: str.slice(last, m.index) });
    parts.push({ text: m[1], href: m[2] });
    last = m.index + m[0].length;
  }
  if (last < str.length) parts.push({ text: str.slice(last) });
  return parts;
}

// Strips inline link syntax (for JSON-LD / plain text).
export function stripInline(str) {
  return str.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
}

// Reads FAQ pairs (h3 + p) that follow the FAQ_HEADING h2.
export function getFaqItems(article) {
  const blocks = article.content;
  const start = blocks.findIndex((b) => b.type === "h2" && b.text === FAQ_HEADING);
  if (start === -1) return [];
  const items = [];
  for (let i = start + 1; i < blocks.length; i++) {
    const b = blocks[i];
    if (b.type === "h2") break;
    if (b.type === "h3" && blocks[i + 1] && blocks[i + 1].type === "p") {
      items.push({ q: b.text, a: stripInline(blocks[i + 1].text) });
    }
  }
  return items;
}

export function buildFaqSchema(article) {
  const items = getFaqItems(article);
  if (!items.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}

export function buildArticleSchema(article) {
  const url = `${SITE_URL}/blog/${article.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    author: { "@type": "Organization", name: AUTHOR },
    publisher: { "@type": "Organization", name: SITE_NAME },
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    mainEntityOfPage: url,
  };
}

export function buildBreadcrumbSchema(article) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: `${SITE_URL}/blog/${article.slug}`,
      },
    ],
  };
}