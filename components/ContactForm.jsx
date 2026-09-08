"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/siteConfig";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const next = {};
    if (!name.trim()) next.name = "Please enter your name.";
    if (!email.trim()) {
      next.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      next.email = "Please enter a valid email address.";
    }
    if (!message.trim()) next.message = "Please enter a message.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    const subject = encodeURIComponent(`Message from ${name || "Ledger user"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${siteConfig.contactEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div>
        <label htmlFor="contact-name" className="block text-xs font-medium text-ink-faint mb-1">
          Your name
        </label>
        <input
          id="contact-name"
          name="name"
          autoComplete="name"
          className="input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Jane Doe"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "contact-name-error" : undefined}
        />
        {errors.name && (
          <p id="contact-name-error" role="alert" className="text-xs text-red-600 mt-1">
            {errors.name}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="contact-email" className="block text-xs font-medium text-ink-faint mb-1">
          Your email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="jane@example.com"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "contact-email-error" : undefined}
        />
        {errors.email && (
          <p id="contact-email-error" role="alert" className="text-xs text-red-600 mt-1">
            {errors.email}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="contact-message" className="block text-xs font-medium text-ink-faint mb-1">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          className="input min-h-[120px]"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="How can we help?"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
        />
        {errors.message && (
          <p id="contact-message-error" role="alert" className="text-xs text-red-600 mt-1">
            {errors.message}
          </p>
        )}
      </div>
      <button
        type="submit"
        className="bg-stamp hover:bg-stamp-dark text-paper font-medium text-sm px-5 py-2.5 rounded-md transition-colors shadow-sm"
      >
        Send Message
      </button>
      <p className="text-xs text-ink-faint">
        This opens your email app with the message pre-filled — it isn't
        submitted to a server or stored anywhere by this site.
      </p>

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
          outline: none;
          border-color: #2e7d6b;
        }
      `}</style>
    </form>
  );
}
