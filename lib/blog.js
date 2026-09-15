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

    title: "Invoice vs Receipt: What's the Difference? | Ledger",

    description:
      "Learn the difference between an invoice and a receipt, when each document is used, what information they contain, and why businesses may need both.",

    category: "Invoicing Basics",

    publishedAt: "2026-01-16",
    updatedAt: "2026-09-15",

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

      {
        type: "h2",
        text: "What Is an Invoice?",
      },

      {
        type: "p",
        text: "An invoice is a document that requests payment from a customer or client. It normally lists the products or services provided, the amount owed, the invoice number, the invoice date, the payment due date, and payment instructions. Invoices are commonly sent before payment is received.",
      },

      {
        type: "h2",
        text: "What Is a Receipt?",
      },

      {
        type: "p",
        text: "A receipt is a record or confirmation that payment has been received. It can show the amount paid, payment date, transaction details, and other information identifying the purchase or invoice. Customers may keep receipts as proof of payment for their own records.",
      },

      {
        type: "h2",
        text: "Invoice vs Receipt: What's the Difference?",
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

      {
        type: "h2",
        text: "How an Invoice and Receipt Work Together",
      },

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

      {
        type: "h2",
        text: "When Should You Send an Invoice?",
      },

      {
        type: "p",
        text: "Send an invoice when you need to request payment for products or services. The invoice should clearly explain what the customer is being charged for, how much they owe, when payment is due, and how they can pay.",
      },

      {
        type: "h2",
        text: "When Should You Provide a Receipt?",
      },

      {
        type: "p",
        text: "A receipt is generally provided after payment has been received when the customer needs confirmation of the transaction. Some businesses automatically provide receipts, while others provide them when requested or when their normal billing process requires one.",
      },

      {
        type: "h2",
        text: "Do You Need Both an Invoice and a Receipt?",
      },

      {
        type: "p",
        text: "Not every transaction requires both documents separately. In some situations, a paid invoice or payment confirmation may be enough for record keeping. However, a client or customer may specifically request a receipt, so it is useful to understand how the two documents differ and when each one is appropriate.",
      },

      {
        type: "h2",
        text: "Can a Paid Invoice Act as a Receipt?",
      },

      {
        type: "p",
        text: "In some businesses, an invoice marked as \"Paid\" can serve as evidence that the invoice has been settled. Whether this is sufficient depends on the business process, customer requirements, and applicable local rules. If a customer specifically requests a receipt, providing a separate payment confirmation may be the clearer option.",
      },

      {
        type: "h2",
        text: "What Information Does an Invoice Include?",
      },

      {
        type: "p",
        text: "A professional invoice can include business and customer details, a unique invoice number, invoice date, due date, product or service descriptions, quantities, rates, subtotal, applicable taxes, discounts, total amount due, and payment instructions.",
      },

      {
        type: "h2",
        text: "Common Invoice and Receipt Mistakes",
      },

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
        type: "h2",
        text: "Create a Professional Invoice Online",
      },

      {
        type: "p",
        text: "Our free invoice generator lets you create a clean, itemized invoice with business details, client information, invoice numbers, products or services, prices, taxes, discounts, payment terms, and notes. You can then download the invoice as a PDF and send it to your client.",
      },

      {
        type: "p",
        text: "For a complete breakdown of the information an invoice should contain, read our guide on what should be included on an invoice.",
      },
    ],
  },

  {
    slug: "how-to-number-invoices",

    title: "How to Number Invoices: Complete Guide | Ledger",

    description:
      "Learn how to number invoices correctly with simple sequential, date-based, and client-based numbering systems, plus common invoice numbering mistakes to avoid.",

    category: "Invoicing Basics",

    publishedAt: "2026-01-19",
    updatedAt: "2026-09-15",

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

      {
        type: "h2",
        text: "Why Invoice Numbers Matter",
      },

      {
        type: "p",
        text: "An invoice number gives you and your client a shared reference for a specific invoice. When a client asks about invoice 0047, you should be able to find it quickly. Unique and consistent invoice numbers also make bookkeeping and record keeping easier, especially when you have many invoices to manage.",
      },

      {
        type: "h2",
        text: "How to Number Invoices Correctly",
      },

      {
        type: "p",
        text: "The best invoice numbering system is one that is simple, unique, and easy for you to maintain. Each invoice should have its own number, and you should avoid reusing numbers. Before choosing a format, consider how many invoices you issue, how many clients you have, and whether you want the year or client name to appear in the number.",
      },

      {
        type: "h2",
        text: "1. Use Simple Sequential Invoice Numbers",
      },

      {
        type: "p",
        text: "Sequential numbering is the simplest option for most freelancers and small businesses. Start with a number such as INV-0001 and increase the number for every new invoice: INV-0001, INV-0002, INV-0003, and so on. You do not need a separate sequence for every client. This approach is easy to maintain and makes invoices straightforward to track.",
      },

      {
        type: "h2",
        text: "2. Use Date-Based Invoice Numbers",
      },

      {
        type: "p",
        text: "A date-based invoice numbering system includes the year or month in the invoice number. For example, you could use 2026-014 for the 14th invoice of 2026 or 202603-006 for the sixth invoice issued in March 2026. This format can be useful for businesses that issue a large number of invoices and want the approximate invoice date to be visible in the number.",
      },

      {
        type: "h2",
        text: "3. Use Client-Based Invoice Numbers",
      },

      {
        type: "p",
        text: "Client-based numbering uses a short client code together with a sequence, such as ACME-001 or ACME-002. This can work well for agencies, consultants, and businesses with a small number of long-term clients. However, managing several separate numbering sequences can become more difficult as your client list grows.",
      },

      {
        type: "h2",
        text: "Which Invoice Numbering System Should You Choose?",
      },

      {
        type: "ul",
        items: [
          "Sequential (INV-0001): simple to maintain and a good choice for most freelancers and small businesses.",
          "Date-based (2026-014): useful when you issue many invoices and want the year or month visible.",
          "Client-based (ACME-001): useful when you work with a small number of long-term clients and want to identify them from the invoice number.",
        ],
      },

      {
        type: "h2",
        text: "Should Invoice Numbers Be Sequential?",
      },

      {
        type: "p",
        text: "For many freelancers and small businesses, sequential invoice numbers are the easiest option. The exact numbering format can vary depending on your business and local record-keeping requirements, but the important principle is consistency. Use unique numbers and maintain a clear record of the invoices you issue.",
      },

      {
        type: "h2",
        text: "Common Invoice Numbering Mistakes",
      },

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
        type: "h2",
        text: "How to Keep Invoice Numbers Consistent",
      },

      {
        type: "p",
        text: "Once you choose an invoice numbering format, use the same system for every new invoice. Keep a record of issued invoices and check the previous invoice number before creating a new one. A consistent process prevents duplicate numbers and makes it easier to find invoices later.",
      },

      {
        type: "h2",
        text: "Create Invoices With Consistent Numbers",
      },

      {
        type: "p",
        text: "Our free invoice generator includes an invoice number field that you can edit to match your preferred numbering system. Whether you use sequential, date-based, or client-based numbers, keeping the format consistent makes your invoices easier to organize and manage.",
      },

      {
        type: "p",
        text: "For more guidance on creating a complete professional invoice, read our guide on how to create a professional invoice.",
      },
    ],
  },

  {
    slug: "freelance-invoice-guide",

    title: "Freelance Invoice Guide: How to Invoice Clients | Ledger",

    description:
      "Learn how freelancers can create professional invoices, include the right client and payment details, handle deposits and partial payments, and get paid on time.",

    category: "For Freelancers",

    publishedAt: "2026-01-22",
    updatedAt: "2026-09-15",

    relatedSlugs: [
      "what-should-an-invoice-include",
      "how-to-send-an-invoice",
      "common-invoice-mistakes",
      "how-to-create-a-professional-invoice",
      "how-to-number-invoices",
    ],

    content: [
      {
        type: "p",
        text: "A freelance invoice should clearly explain what work you completed, how much the client owes, and when payment is due. Freelancers may bill by the hour, project, or retainer, and may also need to handle deposits, partial payments, and international clients. This freelance invoice guide explains the key details to include and how to create an invoice that is easy for clients to understand.",
      },

      {
        type: "h2",
        text: "What Is a Freelance Invoice?",
      },

      {
        type: "p",
        text: "A freelance invoice is a billing document that a freelancer sends to a client to request payment for completed work or an agreed project milestone. It usually includes the freelancer's details, client information, invoice number, services provided, amount due, payment terms, and payment instructions.",
      },

      {
        type: "h2",
        text: "1. Choose How You Will Bill the Client",
      },

      {
        type: "p",
        text: "Freelancers commonly charge clients using a fixed project fee, hourly rate, or retainer. Your invoice should match the pricing arrangement you agreed to with the client. For hourly work, show the number of hours and hourly rate separately so the client can easily understand how the total was calculated.",
      },

      {
        type: "h2",
        text: "2. Clearly Describe Your Freelance Work",
      },

      {
        type: "p",
        text: "Be specific when describing the work on your invoice. Instead of writing only \"Design work — March,\" use a description such as \"Homepage redesign, two rounds of revisions, delivered March 4–18.\" Clear descriptions help the client understand exactly what they are paying for and can reduce questions before payment.",
      },

      {
        type: "h2",
        text: "3. Include Your Invoice Number and Date",
      },

      {
        type: "p",
        text: "Every freelance invoice should have a unique invoice number and invoice date. A simple numbering system such as INV-0001, INV-0002, and INV-0003 makes invoices easier to track. Include the invoice date so both you and your client have a clear record of when the invoice was issued.",
      },

      {
        type: "h2",
        text: "4. Show Deposits and Partial Payments Clearly",
      },

      {
        type: "p",
        text: "If the client has already paid a deposit, show it clearly on the invoice and subtract it from the total amount due. For example, you might list a $300 deposit already paid as a separate line so the client can see the original amount, the payment already received, and the remaining balance.",
      },

      {
        type: "h2",
        text: "5. Set Clear Freelance Payment Terms",
      },

      {
        type: "p",
        text: "State when payment is expected directly on the invoice. Depending on your agreement, you might use terms such as due on receipt, net 7, net 15, or net 30. Choose terms that match your client agreement and clearly communicate the payment deadline. It can also help to establish payment terms in your original project agreement before work begins.",
      },

      {
        type: "h2",
        text: "6. Clearly State the Currency",
      },

      {
        type: "p",
        text: "If you work with clients in different countries, clearly state the currency on your invoice. For example, specify USD, EUR, GBP, CAD, or another currency rather than writing only a number such as \"$500.\" Clear currency information helps prevent confusion about the amount the client is expected to pay.",
      },

      {
        type: "h2",
        text: "7. Include Payment Instructions",
      },

      {
        type: "p",
        text: "Tell the client how they can pay the invoice. Depending on your business and agreement, this could include bank transfer details, a payment link, PayPal, card payment instructions, or another accepted payment method. Make the payment instructions easy to find so the client does not have to contact you for basic payment information.",
      },

      {
        type: "h2",
        text: "8. Include Your Contact Information",
      },

      {
        type: "p",
        text: "Add your name or business name, email address, and other relevant contact information. The client should know who issued the invoice and how to contact you if they have a question about the work, amount, or payment.",
      },

      {
        type: "h2",
        text: "How to Handle Late Freelance Payments",
      },

      {
        type: "p",
        text: "If the payment due date passes without payment, send a short and professional follow-up. Reference the invoice number and original due date rather than sending a vague reminder. For example: \"Just checking in — invoice INV-0032 was due on the 14th. Please let me know if you need anything from me to process it.\"",
      },

      {
        type: "h2",
        text: "Freelance Invoice Checklist",
      },

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

      {
        type: "h2",
        text: "Common Freelance Invoice Mistakes",
      },

      {
        type: "p",
        text: "Freelancers can run into payment delays when invoices have vague work descriptions, missing due dates, incorrect totals, unclear currencies, duplicate invoice numbers, or incomplete payment instructions. Review the invoice carefully before sending it and make sure it matches the agreement you made with the client.",
      },

      {
        type: "h2",
        text: "Create a Freelance Invoice Online",
      },

      {
        type: "p",
        text: "Our free invoice generator supports multiple line items, taxes, discounts, notes, invoice numbers, and multiple currencies. You can use it to create a professional freelance invoice, download it as a PDF, and send it directly to your client without needing a full accounting platform.",
      },

      {
        type: "p",
        text: "For a complete overview of invoice requirements, read our guide on what should be included on an invoice. You can also learn how to send an invoice to a client after creating it.",
      },
    ],
  },

  {
    slug: "small-business-invoice-guide",

    title: "How to Invoice a Small Business Client | Ledger",

    description:
      "Learn how to invoice a small business client, including purchase orders, billing contacts, itemized charges, tax details, payment terms, and invoice numbers.",

    category: "For Small Businesses",

    publishedAt: "2026-01-25",
    updatedAt: "2026-09-15",

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

      {
        type: "h2",
        text: "1. Confirm Who Should Receive the Invoice",
      },

      {
        type: "p",
        text: "The person who hired you may not be the person who processes invoices. Before sending your first invoice, ask which person, department, or email address should receive it. Some small businesses have a dedicated billing or accounts-payable contact that handles invoices and payments.",
      },

      {
        type: "h2",
        text: "2. Use the Correct Business Name",
      },

      {
        type: "p",
        text: "Use the company's legal or registered business name when appropriate rather than an informal name or shortened version. If the client provides specific billing details, use the information they give you so the invoice matches their accounting records.",
      },

      {
        type: "h2",
        text: "3. Include the Purchase Order Number",
      },

      {
        type: "p",
        text: "Some small businesses use purchase orders, also called POs, for projects or purchases. If the client gives you a purchase order number, include it clearly on the invoice. Some accounts-payable processes require the invoice to match the purchase order before payment can be approved.",
      },

      {
        type: "h2",
        text: "4. Clearly Itemize Your Products or Services",
      },

      {
        type: "p",
        text: "A small business may need detailed invoice information for its own bookkeeping and expense records. Instead of combining everything into one total, list each product or service separately with useful descriptions, quantities, rates, and amounts. A clear itemized invoice makes it easier for the client to review and approve the charges.",
      },

      {
        type: "h2",
        text: "5. Include the Invoice Number and Dates",
      },

      {
        type: "p",
        text: "Every invoice should have a unique invoice number, invoice date, and due date. Use the same numbering system you use for your other invoices so your records remain organized. A clear due date also tells the business exactly when payment is expected.",
      },

      {
        type: "h2",
        text: "6. Confirm the Applicable Tax Requirements",
      },

      {
        type: "p",
        text: "Whether you need to charge sales tax, VAT, GST, or another tax depends on factors such as your location, registration status, the type of transaction, and sometimes the client's location. If you are unsure about your tax obligations, check the applicable local requirements or speak with a qualified accountant rather than guessing.",
      },

      {
        type: "h2",
        text: "7. Set Clear Payment Terms",
      },

      {
        type: "p",
        text: "State your payment terms clearly on the invoice. Small businesses may use terms such as net 15 or net 30, depending on the agreement. Whatever payment terms you and the client agreed to, include them directly on the invoice so the billing document is clear and self-contained.",
      },

      {
        type: "h2",
        text: "8. Include Payment Instructions",
      },

      {
        type: "p",
        text: "Tell the client how they can pay. Depending on your business, this could include bank transfer details, a payment link, PayPal, card payment instructions, or another accepted payment method. Clear payment instructions reduce the need for additional emails before the client can make the payment.",
      },

      {
        type: "h2",
        text: "What Should a Small Business Invoice Include?",
      },

      {
        type: "p",
        text: "A small business invoice should generally include your business information, the client's business information, a unique invoice number, invoice date, due date, itemized products or services, quantities, rates, subtotal, applicable taxes, discounts when relevant, total amount due, payment terms, and payment instructions. A purchase order number or project reference should also be included when the client requires one.",
      },

      {
        type: "h2",
        text: "How to Avoid Small Business Invoice Delays",
      },

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

      {
        type: "h2",
        text: "Small Business Invoice Pre-Send Checklist",
      },

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

      {
        type: "h2",
        text: "Create a Small Business Invoice Online",
      },

      {
        type: "p",
        text: "Our free invoice generator lets you add multiple line items, taxes, discounts, notes, invoice numbers, and payment information. You can use these fields to create a clear professional invoice for a small business client and download it as a PDF.",
      },

      {
        type: "p",
        text: "For more guidance, read our complete guide on how to create a professional invoice and learn what information should be included on an invoice.",
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

    title: "How to Send an Invoice to a Client | Ledger",

    description:
      "Learn how to send an invoice to a client, including the best PDF format, invoice email tips, delivery methods, record keeping, and overdue payment follow-ups.",

    category: "Invoicing Basics",

    publishedAt: "2026-01-30",
    updatedAt: "2026-09-15",

    relatedSlugs: [
      "how-to-create-a-professional-invoice",
      "common-invoice-mistakes",
      "freelance-invoice-guide",
      "small-business-invoice-guide",
      "how-to-number-invoices",
    ],

    content: [
      {
        type: "p",
        text: "How do you send an invoice to a client? Creating the invoice is only half the process. Sending it in the right format, using a clear email, delivering it to the correct contact, and keeping a copy can make invoicing easier and help avoid unnecessary payment delays. Here is a simple process for sending a professional invoice to a client.",
      },

      {
        type: "h2",
        text: "1. Create and Check Your Invoice",
      },

      {
        type: "p",
        text: "Before sending an invoice, check that all important information is correct. Review your business details, the client's name and contact information, invoice number, invoice date, due date, line items, quantities, rates, taxes, discounts, total amount, and payment instructions. Correcting an error before sending is easier than fixing it after the client receives the invoice.",
      },

      {
        type: "h2",
        text: "2. Send the Invoice as a PDF",
      },

      {
        type: "p",
        text: "PDF is a practical format for sending invoices because the layout remains consistent across devices and the document is easy for the client to save and organize. Avoid sending an editable document when a finished PDF is available. A self-contained PDF invoice also gives the client a clear record of the amount being requested.",
      },

      {
        type: "h2",
        text: "3. Send the Invoice to the Right Person",
      },

      {
        type: "p",
        text: "Make sure you send the invoice to the correct client, billing contact, or accounts-payable email address. For individual clients, this is usually straightforward. For businesses, ask whether invoices should go to your main contact, a dedicated billing email, or multiple recipients. Sending an invoice to the wrong inbox can delay processing.",
      },

      {
        type: "h2",
        text: "4. Write a Clear Invoice Email",
      },

      {
        type: "p",
        text: "Your invoice email does not need to be complicated. Mention the invoice number, what the invoice is for, the total amount, and the payment due date. Attach the PDF invoice and let the client know they can contact you if they have any questions.",
      },

      {
        type: "h3",
        text: "Simple Invoice Email Example",
      },

      {
        type: "quote",
        text: "Subject: Invoice INV-0032 — Due March 21\n\nHi Sam, please find invoice INV-0032 attached for the homepage redesign. The total is $1,200 and payment is due March 21. Let me know if you have any questions. Thanks!",
      },

      {
        type: "p",
        text: "A short message like this gives the client the key information without requiring them to open the attachment just to understand what the invoice is about.",
      },

      {
        type: "h2",
        text: "5. Keep a Copy of Every Invoice You Send",
      },

      {
        type: "p",
        text: "Keep a copy of the exact invoice you sent and record when it was delivered. You can save the PDF in a dedicated folder, keep a record in a spreadsheet, or use your invoicing system. Having a clear record helps if you need to check whether an invoice was sent, resend it, or resolve a payment question later.",
      },

      {
        type: "h2",
        text: "6. Set a Reminder for the Due Date",
      },

      {
        type: "p",
        text: "After sending the invoice, make a note of the payment due date. A calendar reminder can help you remember to check the payment status and follow up if the invoice becomes overdue.",
      },

      {
        type: "h2",
        text: "How to Follow Up on an Overdue Invoice",
      },

      {
        type: "p",
        text: "If the payment due date has passed, send a short and polite follow-up. Start by assuming the invoice may have been missed or delayed during normal processing rather than making an accusation.",
      },

      {
        type: "h3",
        text: "Overdue Invoice Email Example",
      },

      {
        type: "quote",
        text: "Hi Sam, just following up on invoice INV-0032, which was due March 21. Please let me know if you need anything from me to get it processed. Thanks!",
      },

      {
        type: "p",
        text: "If payment still has not arrived after a reasonable period, you can send another follow-up that clearly references the original due date and asks when payment is expected.",
      },

      {
        type: "h2",
        text: "How Should You Send an Invoice?",
      },

      {
        type: "p",
        text: "For most clients, sending a professional PDF invoice by email is a simple and practical option. Some businesses may require invoices through accounting software, a supplier portal, or another billing system. Always follow the client's stated invoicing process when one is provided.",
      },

      {
        type: "h2",
        text: "Invoice Sending Checklist",
      },

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

      {
        type: "h2",
        text: "Create and Send a Professional Invoice",
      },

      {
        type: "p",
        text: "Our free invoice generator lets you create a professional invoice with your business details, client information, line items, taxes, discounts, payment terms, and invoice number. Once your invoice is complete, you can download it as a PDF and attach it to your client email.",
      },

      {
        type: "p",
        text: "Before sending your first invoice, you can also read our guide on how to create a professional invoice for a complete step-by-step process.",
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
