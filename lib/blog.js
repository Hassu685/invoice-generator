// Blog / guides content.
//
// Each article's `content` is a simple array of block objects so the
// article page can render consistent, accessible HTML without storing
// JSX inside a data file. Supported block types:
//   { type: "p", text }
//   { type: "h2", text }
//   { type: "h3", text }
//   { type: "ul", items: [text, ...] }
//   { type: "ol", items: [text, ...] }
//   { type: "quote", text }

export const AUTHOR = "The Ledger Team";

export const articles = [
  {
    slug: "how-to-create-a-professional-invoice",

    title: "How to Create a Professional Invoice | Ledger",

    description:
      "Learn how to create a professional invoice with the right business details, customer information, invoice number, items, prices, payment terms, and totals.",

    category: "Invoicing Basics",

    publishedAt: "2026-01-12",
    updatedAt: "2026-09-15",

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

      {
        type: "h2",
        text: "1. Add Your Business Details",
      },

      {
        type: "p",
        text: "Start your invoice with your name or business name, address, email address, and phone number when relevant. If you operate under a registered business name or have a tax or VAT number that you are required to display, include it here as well. These details make it clear who issued the invoice and how the client can contact you.",
      },

      {
        type: "h2",
        text: "2. Add the Client's Details",
      },

      {
        type: "p",
        text: "Include the client's name or company name and the billing address or contact information needed for the invoice. If you are invoicing a company, use the business or legal name provided by the client so the invoice matches their accounting records.",
      },

      {
        type: "h2",
        text: "3. Add an Invoice Number and Dates",
      },

      {
        type: "p",
        text: "Every professional invoice should have a unique invoice number, an invoice date, and a due date. A simple numbering system such as INV-0001, INV-0002, and INV-0003 makes invoices easier to track and gives you and your client a clear reference for payments, records, and follow-ups.",
      },

      {
        type: "h2",
        text: "4. List Your Products or Services",
      },

      {
        type: "p",
        text: "Clearly describe every product or service being billed. Include the quantity and rate when applicable. For example, \"Website design — homepage and 3 subpages\" gives the client much more useful information than simply writing \"Design work.\" If you bill by the hour, show the number of hours and your hourly rate separately.",
      },

      {
        type: "h2",
        text: "5. Show the Subtotal, Taxes, Discounts, and Total",
      },

      {
        type: "p",
        text: "Show the subtotal after adding your line items, followed by any applicable discounts and taxes. The final total should be clearly displayed so the client can immediately see how much they need to pay. If you do not charge tax, there is usually no need to display a confusing zero-tax line.",
      },

      {
        type: "h2",
        text: "6. Include Payment Terms and Instructions",
      },

      {
        type: "p",
        text: "Tell the client when payment is due and how they can pay. Payment instructions might include bank transfer details, PayPal, a payment link, card payment instructions, or another accepted payment method. Clear terms such as \"Due within 14 days\" or a specific due date make the payment expectation easier to understand.",
      },

      {
        type: "h2",
        text: "7. Keep the Invoice Design Clean",
      },

      {
        type: "p",
        text: "A professional invoice does not need an elaborate design. The most important information should be easy to find at a glance. Use clear headings, consistent fonts, enough spacing, and a simple layout. Keep the invoice focused on the business details, client information, items, amount due, and payment instructions.",
      },

      {
        type: "h2",
        text: "8. Check the Invoice Before Sending It",
      },

      {
        type: "p",
        text: "Review the invoice before sending it to the client. Check the client's name and contact information, invoice number, invoice date, due date, line items, quantities, rates, taxes, discounts, and final total. Also make sure your payment instructions are correct. A quick review can prevent common invoice errors and payment delays.",
      },

      {
        type: "h2",
        text: "What Should a Professional Invoice Include?",
      },

      {
        type: "p",
        text: "A professional invoice should normally include your business details, client information, a unique invoice number, invoice date, due date, descriptions of products or services, quantities, rates, subtotal, applicable taxes, discounts, total amount due, and payment instructions. The exact requirements can vary depending on your country, business type, and tax obligations.",
      },

      {
        type: "h2",
        text: "Common Invoice Mistakes to Avoid",
      },

      {
        type: "p",
        text: "Common mistakes include using duplicate invoice numbers, entering incorrect client information, leaving out the due date, using vague descriptions, making calculation errors, or forgetting payment instructions. Reviewing every invoice before sending it can help avoid unnecessary confusion and payment delays.",
      },

      {
        type: "h2",
        text: "Create a Professional Invoice Online",
      },

      {
        type: "p",
        text: "If you do not want to create an invoice layout manually, our free invoice generator can help. Enter your business details, client information, invoice number, items, prices, taxes, payment terms, and notes, then create and download a professional PDF invoice directly from your browser.",
      },

      {
        type: "p",
        text: "For a detailed breakdown of the information an invoice should contain, read our guide: What Should Be Included on an Invoice?",
      },
    ],
  },

  {
    slug: "what-should-an-invoice-include",

    title: "What Should Be Included on an Invoice?",

    description:
      "Learn what should be included on an invoice, including business details, client information, invoice numbers, dates, items, prices, taxes, totals, and payment terms.",

    category: "Invoicing Basics",

    publishedAt: "2026-01-14",
    updatedAt: "2026-09-15",

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

      {
        type: "h2",
        text: "Business or Sender Information",
      },

      {
        type: "p",
        text: "Include your name or business name, address, email address, and phone number when relevant. If you have a registered business number or tax ID that is required in your country, include it as well. This information makes it clear who issued the invoice and how the client can contact you.",
      },

      {
        type: "h2",
        text: "Client or Customer Information",
      },

      {
        type: "p",
        text: "Add the client's name or company name and billing address. If you're invoicing a larger business with multiple departments, confirm which contact or department should receive the invoice so it reaches the right person for approval and payment.",
      },

      {
        type: "h2",
        text: "Invoice Number",
      },

      {
        type: "p",
        text: "Every invoice should have a unique invoice number. A simple sequential system such as INV-0001, INV-0002, and INV-0003 makes invoices easier to track. Both you and your client can use the invoice number when discussing payments, accounting records, or previous transactions.",
      },

      {
        type: "h2",
        text: "Invoice Date and Due Date",
      },

      {
        type: "p",
        text: "The invoice date shows when the invoice was issued, while the due date tells the client when payment is expected. A specific payment deadline is much clearer than vague terms such as \"pay soon\" and gives you a clear date to use when following up on an unpaid invoice.",
      },

      {
        type: "h2",
        text: "Description of Goods or Services",
      },

      {
        type: "p",
        text: "Clearly describe each product or service included on the invoice. The description should provide enough detail for the client to understand exactly what they are being charged for. For example, \"3 hours of website development\" is more useful than simply writing \"Development.\"",
      },

      {
        type: "h2",
        text: "Quantity and Rate",
      },

      {
        type: "p",
        text: "Show the quantity and rate separately whenever applicable. This could be hours, units, sessions, or other measurable quantities. Showing the rate per unit makes the calculation transparent and allows the client to verify the invoice without having to ask for an explanation.",
      },

      {
        type: "h2",
        text: "Subtotal",
      },

      {
        type: "p",
        text: "The subtotal is the total of all line items before taxes and discounts are applied. Showing the subtotal gives the client a clear checkpoint for understanding how the final invoice amount was calculated.",
      },

      {
        type: "h2",
        text: "Taxes",
      },

      {
        type: "p",
        text: "If you are required to charge sales tax, VAT, GST, or another applicable tax, show it separately on the invoice. Include the applicable percentage and amount when appropriate. Tax requirements vary by country, business type, and registration status, so check your local requirements if you're unsure whether you need to charge tax.",
      },

      {
        type: "h2",
        text: "Discounts",
      },

      {
        type: "p",
        text: "If you offer a percentage or fixed discount, display it as a separate line on the invoice. This keeps the original price visible and makes it clear to the client how the discount affected the final amount.",
      },

      {
        type: "h2",
        text: "Total Amount Due",
      },

      {
        type: "p",
        text: "The total amount due is the final amount the client needs to pay after discounts and applicable taxes. Display this amount prominently so the customer can quickly identify the balance owed.",
      },

      {
        type: "h2",
        text: "Payment Terms and Instructions",
      },

      {
        type: "p",
        text: "Explain when and how the client should pay. Depending on your business, this might include bank transfer details, a payment link, PayPal, card payment instructions, or other available payment methods. You can also include late-payment terms if they apply to your agreement with the client.",
      },

      {
        type: "h2",
        text: "Notes",
      },

      {
        type: "p",
        text: "Use the notes section for additional information that may help the client. You can include a short thank-you message, purchase order number, project reference, delivery information, or other instructions relevant to the invoice.",
      },

      {
        type: "h2",
        text: "What Should a Good Invoice Look Like?",
      },

      {
        type: "p",
        text: "A good invoice should be clear, accurate, easy to read, and organized. The client's details, invoice number, dates, descriptions, quantities, rates, subtotal, taxes, discounts, total amount, and payment instructions should be easy to find. Avoid unnecessary information that makes the invoice difficult to understand.",
      },

      {
        type: "h2",
        text: "Common Invoice Mistakes to Avoid",
      },

      {
        type: "p",
        text: "Common invoice mistakes include missing invoice numbers, incorrect client information, unclear descriptions, calculation errors, missing due dates, and incomplete payment instructions. Reviewing an invoice before sending it can help prevent confusion and payment delays.",
      },

      {
        type: "h2",
        text: "Create an Invoice Online",
      },

      {
        type: "p",
        text: "Now that you know what should be included on an invoice, creating one is easy. Our free invoice generator lets you enter your business details, client information, invoice number, items, prices, taxes, payment terms, and notes, then download a professional invoice as a PDF.",
      },
    ],
  },

  {
    slug: "invoice-vs-receipt",
    title: "Invoice vs Receipt: What's the Difference?",
    description:
      "Invoices and receipts get confused constantly. Here's the plain-language difference, when to use each one, and how they relate to each other.",
    category: "Invoicing Basics",
    publishedAt: "2026-01-16",
    updatedAt: "2026-01-16",
    relatedSlugs: [
      "what-should-an-invoice-include",
      "how-to-create-a-professional-invoice",
      "how-to-send-an-invoice",
    ],
    content: [
      {
        type: "p",
        text: "\"Invoice\" and \"receipt\" get used interchangeably in everyday conversation, but they serve different purposes and are usually issued at different points in a transaction. Mixing them up isn't a huge deal casually, but it matters for bookkeeping, and clients sometimes need one specifically and won't accept the other.",
      },
      {
        type: "h2",
        text: "An invoice is a request for payment",
      },
      {
        type: "p",
        text: "You send an invoice before you've been paid. It lists what was (or will be) provided, the amount owed, and when payment is due. Think of it as the bill — it's asking the client to pay, not confirming that they already have.",
      },
      {
        type: "h2",
        text: "A receipt is proof of payment",
      },
      {
        type: "p",
        text: "You issue a receipt after payment has been received. It confirms that a specific amount was paid, on a specific date, usually referencing the invoice it corresponds to. A receipt is the client's proof that the transaction is complete, which they may need for expense reports, warranty claims, or their own bookkeeping.",
      },
      {
        type: "h2",
        text: "How they typically flow together",
      },
      {
        type: "ol",
        items: [
          "You complete or agree to provide a product or service.",
          "You send an invoice listing what's owed and by when.",
          "The client pays, using the method described on the invoice.",
          "You send (or the client requests) a receipt confirming the payment.",
        ],
      },
      {
        type: "p",
        text: "In smaller transactions — a coffee shop, a retail purchase — steps 2 through 4 often happen in the same instant, which is part of why people conflate the two terms. In freelance or B2B work, there's usually a real gap between sending the invoice and receiving payment, which is where the distinction becomes practically important.",
      },
      {
        type: "h2",
        text: "Key differences at a glance",
      },
      {
        type: "ul",
        items: [
          "Timing: invoices come before payment, receipts come after.",
          "Purpose: an invoice requests money, a receipt confirms money was received.",
          "Who needs it: clients need invoices to know what and when to pay; both sides may want a receipt for their records.",
          "Legal weight: a receipt is proof a transaction occurred; an invoice is a request that hasn't been fulfilled yet.",
        ],
      },
      {
        type: "h2",
        text: "Do you need both?",
      },
      {
        type: "p",
        text: "Not always. Many freelancers and small businesses only send invoices and treat a marked \"Paid\" invoice, or a bank/payment platform confirmation, as sufficient proof of payment. If a client specifically asks for a receipt, it's usually simplest to reissue the invoice with a note that it's been paid, along with the payment date.",
      },
      {
        type: "p",
        text: "Whichever document you need, our invoice generator makes it easy to produce a clean, itemized PDF — you can also reuse an invoice as a paid receipt by adding a short note in the notes field once payment comes in.",
      },
    ],
  },

  {
    slug: "how-to-number-invoices",
    title: "How to Number Invoices Correctly",
    description:
      "A simple, sustainable system for numbering your invoices — including formats to consider and mistakes that cause problems down the line.",
    category: "Invoicing Basics",
    publishedAt: "2026-01-19",
    updatedAt: "2026-01-19",
    relatedSlugs: [
      "how-to-create-a-professional-invoice",
      "common-invoice-mistakes",
      "small-business-invoice-guide",
    ],
    content: [
      {
        type: "p",
        text: "Invoice numbering feels like a minor detail until you're six months in, staring at a folder of PDFs named \"invoice-final-v2.pdf,\" trying to figure out which client paid what. A consistent numbering system prevents that, and it takes about thirty seconds to set up.",
      },
      {
        type: "h2",
        text: "Why it matters",
      },
      {
        type: "p",
        text: "Invoice numbers give you and your client a shared reference point. When a client says \"I paid invoice 0047,\" you should be able to find it instantly. Sequential, unique numbers also matter for basic bookkeeping hygiene — gaps or duplicates in your sequence are exactly what raise questions during a tax review or audit.",
      },
      {
        type: "h2",
        text: "Simple sequential numbering",
      },
      {
        type: "p",
        text: "The easiest approach for most freelancers and small businesses: start at 0001 and increase by one for every invoice you send, regardless of client. INV-0001, INV-0002, INV-0003. No gaps, no resets, no branching logic. If you're just getting started, this is the system we'd recommend.",
      },
      {
        type: "h2",
        text: "Date-based numbering",
      },
      {
        type: "p",
        text: "Some businesses prefer to embed the year (and sometimes month) in the number, like 2026-014 for the 14th invoice of 2026, or 202603-006 for the 6th invoice of March 2026. This makes it easy to tell roughly when an invoice was issued just by glancing at the number, and it's common in businesses that issue a high volume of invoices.",
      },
      {
        type: "h2",
        text: "Client-based numbering",
      },
      {
        type: "p",
        text: "If you work with a small number of recurring clients and want to track their invoice history separately, you can prefix the number with a client code: ACME-001, ACME-002. This works well for agencies or consultants with a handful of long-term accounts, but it gets harder to manage once you have many clients, since you're tracking multiple sequences at once instead of one.",
      },
      {
        type: "h3",
        text: "A quick comparison",
      },
      {
        type: "ul",
        items: [
          "Sequential (INV-0001): simplest to maintain, best for most freelancers and small teams.",
          "Date-based (2026-014): useful when volume is high and you want the date visible at a glance.",
          "Client-based (ACME-001): useful for a small number of long-term accounts, harder to scale.",
        ],
      },
      {
        type: "h2",
        text: "Mistakes to avoid",
      },
      {
        type: "ul",
        items: [
          "Reusing a number after voiding an invoice — mark it void instead and move on to the next number.",
          "Restarting the sequence mid-year without a clear reason (like a new date-based format) — it makes your records harder to audit.",
          "Using inconsistent formats across invoices, like mixing INV-01 with Invoice_1 with #001.",
          "Leaving the number off entirely, which makes an invoice much harder to reference later.",
        ],
      },
      {
        type: "h2",
        text: "Keeping it consistent",
      },
      {
        type: "p",
        text: "Whichever format you choose, the important part is sticking with it. Our invoice generator pre-fills a sequential invoice number field you can edit freely, so you can adopt whichever system fits how you work and keep every invoice consistent from there.",
      },
    ],
  },

  {
    slug: "freelance-invoice-guide",
    title: "How to Create an Invoice for Freelance Work",
    description:
      "What freelancers specifically need to get right on an invoice — from rate transparency to handling partial payments and late clients.",
    category: "For Freelancers",
    publishedAt: "2026-01-22",
    updatedAt: "2026-01-22",
    relatedSlugs: [
      "what-should-an-invoice-include",
      "how-to-send-an-invoice",
      "common-invoice-mistakes",
    ],
    content: [
      {
        type: "p",
        text: "Freelance invoicing has a few wrinkles that don't come up as often in traditional business billing: irregular project scopes, hourly versus fixed-price work, deposits, and clients who are themselves individuals rather than accounts-payable departments. Here's how to handle the details that matter most.",
      },
      {
        type: "h2",
        text: "Decide how you're billing before you invoice",
      },
      {
        type: "p",
        text: "Freelance work is usually billed one of three ways: a fixed project fee, an hourly rate, or a retainer. Your invoice should match whichever you agreed to. For hourly work, list the hours and rate as separate line items rather than a single lump total — it's the fastest way to prevent a client from asking \"how did you get to this number?\"",
      },
      {
        type: "h2",
        text: "Be specific about scope",
      },
      {
        type: "p",
        text: "\"Design work — March\" invites questions. \"Homepage redesign, 2 rounds of revisions, delivered March 4–18\" doesn't. The more clearly your line items map to what was actually agreed and delivered, the fewer emails you'll get asking for clarification before payment goes out.",
      },
      {
        type: "h2",
        text: "Handling deposits and partial payments",
      },
      {
        type: "p",
        text: "If you collected a deposit upfront, show it as a negative line item or a clear note (\"Deposit paid on Feb 1: −$300\") so the final invoice reflects only the remaining balance. This keeps your records accurate and makes clear to the client exactly what they still owe.",
      },
      {
        type: "h2",
        text: "Set payment terms that actually work for you",
      },
      {
        type: "p",
        text: "\"Net 30\" is standard in some industries but can be a long wait for an independent freelancer. It's common — and reasonable — for freelancers to use shorter terms like \"due on receipt\" or \"net 7,\" especially for smaller projects or new clients. State your terms clearly on every invoice so there's no ambiguity, and consider putting them in your original agreement too, so the invoice terms don't come as a surprise.",
      },
      {
        type: "h2",
        text: "Currency and international clients",
      },
      {
        type: "p",
        text: "If you work with clients in other countries, pick a currency you're comfortable being paid in and state it clearly on the invoice — don't leave the client to guess whether $500 means USD, CAD, or AUD. If you invoice in a currency different from your own, factor in that exchange rates fluctuate between when you invoice and when you're paid.",
      },
      {
        type: "h2",
        text: "Following up without being awkward about it",
      },
      {
        type: "p",
        text: "Because the due date is printed on the invoice, following up is just a matter of referencing it: \"Just checking in — invoice INV-0032 was due on the 14th, let me know if you need anything from me to process it.\" Having a clear number and due date up front is what makes this kind of message easy to send instead of uncomfortable.",
      },
      {
        type: "h2",
        text: "A quick freelance invoicing checklist",
      },
      {
        type: "ul",
        items: [
          "Invoice number and issue date",
          "Clear description of the work and dates covered",
          "Hours/units and rate shown separately, if applicable",
          "Any deposit already paid, subtracted from the total",
          "Currency clearly stated",
          "Payment terms and accepted payment methods",
          "Your contact details for questions",
        ],
      },
      {
        type: "p",
        text: "Our invoice generator supports multiple currencies, tax and discount fields, and notes for exactly this kind of context — it's built to handle freelance invoicing without needing a full accounting platform.",
      },
    ],
  },

  {
    slug: "small-business-invoice-guide",
    title: "How to Invoice a Small Business Client",
    description:
      "What changes when your client is a small business rather than an individual — purchase orders, approval chains, and getting paid on time.",
    category: "For Small Businesses",
    publishedAt: "2026-01-25",
    updatedAt: "2026-01-25",
    relatedSlugs: [
      "how-to-create-a-professional-invoice",
      "how-to-send-an-invoice",
      "how-to-number-invoices",
    ],
    content: [
      {
        type: "p",
        text: "Invoicing a small business is a little different from invoicing an individual client. There's often a bookkeeper or accounts-payable process involved, sometimes a purchase order, and expectations around formatting and detail tend to be a bit stricter. None of this is complicated, but getting it right the first time avoids a round of \"can you resend this with X\" emails.",
      },
      {
        type: "h2",
        text: "Ask who the invoice should go to",
      },
      {
        type: "p",
        text: "In a small business, the person who agreed to hire you (a manager, an owner) isn't always the person who processes payments. Before sending your first invoice, ask who should receive it — often there's a dedicated billing or accounts email separate from your day-to-day contact.",
      },
      {
        type: "h2",
        text: "Match the business's legal name",
      },
      {
        type: "p",
        text: "Use the business's registered or legal name on the invoice, not a shortened version or the brand name if they differ. If you're not sure, it's a quick question to ask — it matters for their bookkeeping and, in some places, for tax documentation.",
      },
      {
        type: "h2",
        text: "Reference a purchase order number, if one exists",
      },
      {
        type: "p",
        text: "Some small businesses issue a purchase order (PO) number before work begins, especially for larger projects. If you were given one, include it clearly on the invoice — many accounts-payable processes won't approve an invoice without a matching PO number, and its absence is a common reason payment gets delayed.",
      },
      {
        type: "h2",
        text: "Itemize more than you think you need to",
      },
      {
        type: "p",
        text: "Small businesses often need to categorize expenses for their own books, so a detailed line-item breakdown (rather than one combined total) makes their bookkeeper's job easier — and a smoother internal process on their end usually means a faster payment on yours.",
      },
      {
        type: "h2",
        text: "Confirm tax requirements",
      },
      {
        type: "p",
        text: "Whether you need to charge sales tax, VAT, or GST depends on your location, your registration status, and sometimes the client's location too. This is genuinely a case-by-case question, so if you're not sure, it's worth a quick conversation with a local accountant rather than guessing on an invoice that's going into someone else's official records.",
      },
      {
        type: "h2",
        text: "Set clear, written payment terms",
      },
      {
        type: "p",
        text: "Small businesses often work on standard terms like net 15 or net 30. Whatever you agree to, state it on the invoice itself, not just in an earlier email — the invoice is the document that ends up in their accounting system, and it should be self-contained.",
      },
      {
        type: "h2",
        text: "A short pre-send checklist",
      },
      {
        type: "ul",
        items: [
          "Correct legal business name and billing contact",
          "Purchase order number, if applicable",
          "Itemized line items rather than a single lump sum",
          "Tax handled correctly for your situation",
          "Clear due date and accepted payment methods",
          "Invoice number that fits your existing sequence",
        ],
      },
      {
        type: "p",
        text: "Our invoice generator lets you add multiple line items, a tax and discount field, and notes for a PO number or reference — everything a small-business client's bookkeeping process typically expects.",
      },
    ],
  },

  {
    slug: "common-invoice-mistakes",

    title: "Common Invoice Mistakes and How to Avoid Them | Ledger",

    description:
      "Discover common invoice mistakes that can cause payment delays, confusion, or errors, and learn how to create accurate professional invoices.",

    category: "Invoicing Basics",

    publishedAt: "2026-01-28",
    updatedAt: "2026-09-15",

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

      {
        type: "h2",
        text: "Missing or Unclear Due Dates",
      },

      {
        type: "p",
        text: "A missing or unclear due date makes it difficult for a client to know exactly when payment is expected. Always include a specific payment date instead of relying only on terms such as \"payment due in 14 days.\" A clear due date also gives you a specific point to reference when following up on an overdue invoice.",
      },

      {
        type: "h2",
        text: "Vague Line Item Descriptions",
      },

      {
        type: "p",
        text: "Descriptions such as \"services rendered\" do not give the client enough information about what they are being charged for. Describe each product or service clearly and include useful details such as the type of work, quantity, or date when appropriate. Clear descriptions can reduce questions and prevent invoices from being delayed during approval.",
      },

      {
        type: "h2",
        text: "Math and Calculation Errors",
      },

      {
        type: "p",
        text: "Incorrect subtotals, taxes, discounts, or final totals are common invoice errors. Even a small calculation mistake can make an invoice look unreliable and may delay payment. Check that all line items add up correctly and that taxes and discounts are applied to the correct amounts. Using an invoice generator that calculates totals automatically can also reduce manual arithmetic errors.",
      },

      {
        type: "h2",
        text: "Inconsistent or Missing Invoice Numbers",
      },

      {
        type: "p",
        text: "Every invoice should have a unique number that follows a consistent numbering system. Skipping numbers, accidentally reusing invoice numbers, or leaving the number off entirely can make invoices difficult to track. A simple sequence such as INV-0001, INV-0002, and INV-0003 makes record keeping easier for both you and your clients.",
      },

      {
        type: "h2",
        text: "Forgetting Payment Instructions",
      },

      {
        type: "p",
        text: "An invoice should clearly explain how the client can pay. Include the payment method and relevant instructions, such as bank transfer details, a payment link, PayPal, or another accepted payment method. Without clear payment instructions, clients may need to contact you before they can complete the payment.",
      },

      {
        type: "h2",
        text: "Sending an Invoice Too Late",
      },

      {
        type: "p",
        text: "Waiting too long to send an invoice can delay the entire payment process. Send the invoice promptly after completing the work, delivering the product, or reaching an agreed project milestone. Sending invoices on time helps establish a predictable billing routine and gives clients more time to process payments.",
      },

      {
        type: "h2",
        text: "Incorrect Client or Business Information",
      },

      {
        type: "p",
        text: "Incorrect names, addresses, email addresses, business details, or billing information can cause an invoice to be rejected or sent to the wrong person. Before sending an invoice, check that both your business information and the client's billing details are accurate.",
      },

      {
        type: "h2",
        text: "No Record of Invoices Sent or Paid",
      },

      {
        type: "p",
        text: "Without a simple record of invoices that have been sent, paid, or become overdue, it is easy to lose track of outstanding payments. Keep a basic record containing the invoice number, client, amount, invoice date, due date, and payment status. Even a simple spreadsheet can help keep your billing organized.",
      },

      {
        type: "h2",
        text: "Inconsistent Branding or Formatting",
      },

      {
        type: "p",
        text: "Using a different layout, font, or format for every invoice can make your business look less consistent. A clean and professional invoice template helps create a recognizable billing experience. Use a consistent layout and make sure important information is easy to find.",
      },

      {
        type: "h2",
        text: "Not Including All Required Invoice Details",
      },

      {
        type: "p",
        text: "Missing basic information can make an invoice difficult to process. Depending on your situation, an invoice may need business and client information, an invoice number, invoice date, due date, item descriptions, quantities, rates, subtotal, taxes, discounts, total amount, payment terms, and payment instructions.",
      },

      {
        type: "h2",
        text: "How to Avoid Common Invoice Mistakes",
      },

      {
        type: "p",
        text: "The easiest way to avoid invoice mistakes is to use a consistent process before sending every invoice. Check the client information, invoice number, dates, line items, calculations, payment instructions, and final amount. Using an invoice generator can also help by calculating totals automatically and keeping important invoice fields organized.",
      },

      {
        type: "h2",
        text: "Quick Invoice Pre-Send Checklist",
      },

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

      {
        type: "h2",
        text: "Create an Accurate Professional Invoice",
      },

      {
        type: "p",
        text: "Avoiding common invoice errors starts with using accurate information and checking the invoice before sending it. Our free invoice generator calculates subtotals, taxes, and totals automatically while keeping important invoice fields organized, so you can create a professional invoice and download it as a PDF.",
      },
    ],
  },

  {
    slug: "how-to-send-an-invoice",
    title: "How to Send an Invoice to a Client",
    description:
      "The practical side of invoicing: the best format to send, how to write the email that goes with it, and how to follow up when payment is late.",
    category: "Invoicing Basics",
    publishedAt: "2026-01-30",
    updatedAt: "2026-01-30",
    relatedSlugs: [
      "how-to-create-a-professional-invoice",
      "common-invoice-mistakes",
      "freelance-invoice-guide",
    ],
    content: [
      {
        type: "p",
        text: "Creating the invoice is only half the job — how you send it affects how quickly it gets paid. Here's a practical approach to sending invoices and following up when they're overdue.",
      },
      {
        type: "h2",
        text: "Send it as a PDF",
      },
      {
        type: "p",
        text: "PDF is the standard format for invoices because it looks the same on every device, can't be accidentally edited by the recipient, and is easy for accounting software to file. Avoid sending an invoice as an editable Word or spreadsheet file, and avoid pasting the details directly into an email body — a client's finance team generally expects an attached, self-contained document.",
      },
      {
        type: "h2",
        text: "Write a short, direct email",
      },
      {
        type: "p",
        text: "The email that carries the invoice doesn't need to be long. State the invoice number, the amount, the due date, and attach the PDF. For example:",
      },
      {
        type: "quote",
        text: "Subject: Invoice INV-0032 — due March 21\n\nHi Sam, please find invoice INV-0032 attached for the homepage redesign, total $1,200, due March 21. Let me know if you have any questions. Thanks!",
      },
      {
        type: "p",
        text: "This gives the recipient everything they need without making them open the attachment just to know what it's about.",
      },
      {
        type: "h2",
        text: "Send to the right person",
      },
      {
        type: "p",
        text: "For individual clients, this is usually straightforward. For businesses, confirm whether invoices should go to your main contact, a dedicated billing address, or both. Sending it to the wrong inbox is one of the most common, avoidable reasons an invoice sits unpaid.",
      },
      {
        type: "h2",
        text: "CC yourself, or keep a copy",
      },
      {
        type: "p",
        text: "Keep a record of every invoice you send — either by CC'ing yourself, saving a copy to a dedicated folder, or both. If a payment dispute comes up later, having the exact PDF and send date on hand saves a lot of back-and-forth.",
      },
      {
        type: "h2",
        text: "Following up on overdue invoices",
      },
      {
        type: "p",
        text: "If a due date passes without payment, a short, polite follow-up is usually enough:",
      },
      {
        type: "quote",
        text: "Hi Sam, just following up on invoice INV-0032, which was due March 21. Let me know if there's anything you need from me to get it processed. Thanks!",
      },
      {
        type: "p",
        text: "Keep the tone neutral and assume there's a simple explanation (an invoice missed in a busy inbox is common) rather than opening with an accusation. If a second follow-up is needed a week or two later, it's reasonable to be a bit more direct about the original due date and ask for a specific payment timeline.",
      },
      {
        type: "h2",
        text: "A simple sending checklist",
      },
      {
        type: "ul",
        items: [
          "Invoice exported as a PDF, not an editable file",
          "Sent to the correct contact or billing email",
          "Email states the amount and due date up front",
          "A copy kept for your own records",
          "A calendar reminder set for the due date, in case a follow-up is needed",
        ],
      },
      {
        type: "p",
        text: "Once you've built your invoice with our free generator, downloading it as a PDF takes one click — ready to attach and send straight away.",
      },
    ],
  },
];

export function getArticleBySlug(slug) {
  return articles.find((a) => a.slug === slug) || null;
}

export function getRelatedArticles(article, limit = 3) {
  if (!article) return [];
  const bySlug = (slug) => articles.find((a) => a.slug === slug);
  const explicit = (article.relatedSlugs || [])
    .map(bySlug)
    .filter(Boolean);
  if (explicit.length >= limit) return explicit.slice(0, limit);
  const fallback = articles.filter(
    (a) => a.slug !== article.slug && !explicit.includes(a)
  );
  return [...explicit, ...fallback].slice(0, limit);
}
