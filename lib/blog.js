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
    title: "How to Create a Professional Invoice",
    description:
      "A practical, step-by-step walkthrough of what goes into a professional invoice and how to put one together quickly, even if you've never made one before.",
    category: "Invoicing Basics",
    publishedAt: "2026-01-12",
    updatedAt: "2026-01-12",
    relatedSlugs: [
      "what-should-an-invoice-include",
      "how-to-number-invoices",
      "common-invoice-mistakes",
    ],
    content: [
      {
        type: "p",
        text: "An invoice does one job: it tells your client exactly what they owe, for what, and by when. A professional invoice does that job clearly enough that there's no back-and-forth, no confusion about the total, and no excuse for a late payment. None of this requires design skill or accounting software — it just requires including the right information in a layout that's easy to scan.",
      },
      {
        type: "h2",
        text: "1. Start with your business details",
      },
      {
        type: "p",
        text: "At the top of the invoice, include your name or business name, your address, and a way for the client to reach you (email, and phone if you use it for business). If you operate under a registered business name or have a tax/VAT number you're required to display, put it here too. This section establishes who is asking to be paid.",
      },
      {
        type: "h2",
        text: "2. Add the client's details",
      },
      {
        type: "p",
        text: "Right below or beside your own details, list who the invoice is billed to — the client's name or company name, and the address or contact you'd use for billing correspondence. If you're invoicing a company, use the legal or registered name they gave you, not a nickname, since some businesses need this to match their accounting records exactly.",
      },
      {
        type: "h2",
        text: "3. Give the invoice a number and dates",
      },
      {
        type: "p",
        text: "Every invoice needs a unique invoice number, an issue date, and a due date. The number matters more than people expect — it's how you and your client refer to this specific invoice in emails, payment records, and if it ever comes up, disputes. Keep numbers sequential and never reuse one.",
      },
      {
        type: "h2",
        text: "4. List your line items clearly",
      },
      {
        type: "p",
        text: "Each line item should describe the product or service, the quantity, and the rate. Be specific: \"Website design — homepage and 3 subpages\" is far more useful on both sides than \"Design work.\" If you're billing hourly, list the hours and your rate separately so the math is visible rather than just showing a lump sum.",
      },
      {
        type: "h2",
        text: "5. Show subtotal, tax, discount, and total",
      },
      {
        type: "p",
        text: "Add a subtotal that sums the line items, then apply any discount and tax as separate lines so the client can see exactly how you arrived at the final number. Burying tax or a discount inside the total invites questions — and questions delay payment. If you don't charge tax, it's fine to leave that line out entirely rather than showing a confusing zero.",
      },
      {
        type: "h2",
        text: "6. State your payment terms",
      },
      {
        type: "p",
        text: "Somewhere near the total or in a notes section, say how you'd like to be paid (bank transfer, PayPal, a payment link, etc.) and by when. \"Due within 14 days\" or a specific due date is far more effective than leaving it unstated, because it gives you something concrete to reference if payment doesn't arrive on time.",
      },
      {
        type: "h2",
        text: "7. Keep the design clean and consistent",
      },
      {
        type: "p",
        text: "A professional invoice doesn't need to be elaborate. What it needs is a clear hierarchy: your details, the client's details, the line items, and the total should each be easy to find at a glance. Consistent fonts, enough spacing, and one accent color used sparingly go a long way toward making an invoice look trustworthy.",
      },
      {
        type: "h2",
        text: "Putting it together",
      },
      {
        type: "p",
        text: "If you'd rather not lay all of this out by hand, our free invoice generator already follows this structure — you fill in the fields, and the layout, spacing, and totals are handled for you. It works entirely in your browser, so you can create and download a PDF invoice in a couple of minutes.",
      },
      {
        type: "p",
        text: "For a closer look at exactly which fields matter and why, read our companion guide, What Should an Invoice Include?",
      },
    ],
  },

  {
    slug: "what-should-an-invoice-include",
    title: "What Should an Invoice Include?",
    description:
      "Every field a solid invoice needs — and why each one matters — from your business details to payment terms and notes.",
    category: "Invoicing Basics",
    publishedAt: "2026-01-14",
    updatedAt: "2026-01-14",
    relatedSlugs: [
      "how-to-create-a-professional-invoice",
      "invoice-vs-receipt",
      "common-invoice-mistakes",
    ],
    content: [
      {
        type: "p",
        text: "It's easy to assume an invoice just needs \"the amount owed,\" but a good invoice is really a small piece of documentation — it needs to hold up if a client's bookkeeper asks a question six months from now, or if you need to reference it during tax season. Here's a full rundown of what to include and why each part earns its place.",
      },
      {
        type: "h2",
        text: "Sender (your) information",
      },
      {
        type: "p",
        text: "Your name or business name, address, email, and phone number if relevant. If you have a registered business number or tax ID that's required in your country, add it here as well. This is the section that answers \"who is this invoice from.\"",
      },
      {
        type: "h2",
        text: "Client information",
      },
      {
        type: "p",
        text: "The client's name or company name and billing address. For businesses with multiple departments, it's worth asking which contact or department should be listed so the invoice reaches the right person for approval.",
      },
      {
        type: "h2",
        text: "Invoice number",
      },
      {
        type: "p",
        text: "A unique identifier for this specific invoice, ideally sequential (INV-0001, INV-0002, and so on). It's how both sides reference the invoice in payment records, emails, or accounting software.",
      },
      {
        type: "h2",
        text: "Invoice date and due date",
      },
      {
        type: "p",
        text: "The issue date marks when the invoice was created. The due date tells the client exactly when payment is expected — vague terms like \"soon\" lead to slow payments, while a specific date gives you a clear point to follow up from.",
      },
      {
        type: "h2",
        text: "Description of goods or services",
      },
      {
        type: "p",
        text: "Each line item should describe what was delivered in enough detail that anyone reading it later — including you — understands what was billed. \"3 hours of consulting on March 4\" is more useful than \"Consulting.\"",
      },
      {
        type: "h2",
        text: "Quantity and rate",
      },
      {
        type: "p",
        text: "Show the quantity (hours, units, or sessions) and the rate per unit separately, rather than just a total. This transparency is what lets a client verify the math themselves instead of having to ask you to explain it.",
      },
      {
        type: "h2",
        text: "Subtotal",
      },
      {
        type: "p",
        text: "The sum of all line items before tax or discounts. It's a useful checkpoint that makes the rest of the math easy to follow.",
      },
      {
        type: "h2",
        text: "Taxes",
      },
      {
        type: "p",
        text: "If you're required to charge sales tax, VAT, or GST, show it as its own line with the percentage applied, calculated from the subtotal (or the discounted subtotal, if a discount applies first). Requirements vary by country and by your registration status, so if you're unsure whether you should be charging tax, that's worth checking with a local accountant rather than guessing.",
      },
      {
        type: "h2",
        text: "Discounts",
      },
      {
        type: "p",
        text: "If you're offering a percentage or flat discount, show it as a separate line rather than adjusting the rate directly. This keeps your original rate visible for your own records and makes the discount obvious to the client.",
      },
      {
        type: "h2",
        text: "Total due",
      },
      {
        type: "p",
        text: "The final amount owed after tax and discounts, shown prominently — this is the number the client actually needs to act on.",
      },
      {
        type: "h2",
        text: "Payment terms",
      },
      {
        type: "p",
        text: "How you'd like to be paid (bank transfer details, a payment link, PayPal, etc.) and any late-payment terms you apply. Stating this clearly avoids a second email asking \"how do I pay this?\"",
      },
      {
        type: "h2",
        text: "Notes",
      },
      {
        type: "p",
        text: "A short line for anything else relevant — a thank-you note, a reference to a signed agreement or purchase order number, or specific instructions for larger clients that require one.",
      },
      {
        type: "p",
        text: "Once you know what belongs on an invoice, actually building one is the easy part — our free invoice generator has all of these fields ready to fill in, with a live preview so you can see the finished invoice as you go.",
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
    title: "Common Invoice Mistakes to Avoid",
    description:
      "The small errors that slow down payment or make an invoice look unprofessional — and how to catch them before you hit send.",
    category: "Invoicing Basics",
    publishedAt: "2026-01-28",
    updatedAt: "2026-01-28",
    relatedSlugs: [
      "what-should-an-invoice-include",
      "how-to-number-invoices",
      "how-to-send-an-invoice",
    ],
    content: [
      {
        type: "p",
        text: "Most late payments aren't caused by difficult clients — they're caused by invoices that leave room for confusion. Here are the mistakes that come up most often, and the quick fixes for each.",
      },
      {
        type: "h2",
        text: "Missing or unclear due dates",
      },
      {
        type: "p",
        text: "If a due date isn't printed clearly on the invoice, a client has no concrete deadline to work against — and no benchmark for you to follow up on once it passes. Always include a specific date, not just \"payment terms: 14 days,\" which forces the client to do the math themselves from an unclear starting point.",
      },
      {
        type: "h2",
        text: "Vague line item descriptions",
      },
      {
        type: "p",
        text: "\"Services rendered\" tells a client (or their bookkeeper) nothing. Be specific about what was delivered and when. This isn't just about clarity — vague descriptions are one of the most common reasons an invoice gets sent back with questions before it's approved for payment.",
      },
      {
        type: "h2",
        text: "Math errors",
      },
      {
        type: "p",
        text: "A subtotal that doesn't match the line items, or a total that doesn't reflect the tax and discount applied, undermines trust in the whole document — even if it's an honest typo. Double-check the numbers before sending, or use a tool that calculates totals automatically so there's no manual arithmetic to get wrong.",
      },
      {
        type: "h2",
        text: "Inconsistent or missing invoice numbers",
      },
      {
        type: "p",
        text: "Skipping numbers, reusing them, or leaving them off entirely makes it hard for either side to reference the invoice later, and it looks disorganized to clients who deal with multiple vendors. See our guide on numbering invoices for a simple system that avoids this.",
      },
      {
        type: "h2",
        text: "Forgetting payment instructions",
      },
      {
        type: "p",
        text: "An invoice that states the amount owed but not how to pay it just generates a follow-up email. Include your preferred payment method (bank details, a payment link, PayPal, etc.) directly on the invoice.",
      },
      {
        type: "h2",
        text: "Sending it too late",
      },
      {
        type: "p",
        text: "The longer you wait after completing work to send an invoice, the longer the natural delay before payment. Send invoices promptly — ideally the same day work is completed or a milestone is reached — rather than batching them up.",
      },
      {
        type: "h2",
        text: "No record of what's been sent or paid",
      },
      {
        type: "p",
        text: "Without a simple log of which invoices have gone out, which are paid, and which are overdue, it's easy to lose track — especially with several clients at once. Even a basic spreadsheet with invoice number, client, amount, and status prevents invoices from quietly falling through the cracks.",
      },
      {
        type: "h2",
        text: "Inconsistent branding or formatting",
      },
      {
        type: "p",
        text: "Switching layouts or fonts between invoices makes a business look less established, even if the work itself is consistent. Using the same template every time — one clear layout, one accent color — builds a small but real sense of professionalism over repeat invoices.",
      },
      {
        type: "h2",
        text: "A quick pre-send checklist",
      },
      {
        type: "ul",
        items: [
          "Invoice number is unique and follows your usual sequence",
          "Due date is a specific date, not a vague term",
          "Every line item is specific enough to stand on its own",
          "Subtotal, tax, discount, and total all add up correctly",
          "Payment method and instructions are included",
          "Client's name and billing details are correct",
        ],
      },
      {
        type: "p",
        text: "Our invoice generator calculates subtotals, tax, and totals automatically, so arithmetic mistakes aren't something you need to check for by hand — you can focus on getting the details right instead.",
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
