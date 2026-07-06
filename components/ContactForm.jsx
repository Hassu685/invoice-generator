"use client";

import { useState } from "react";

const CONTACT_EMAIL = "hello@example.com";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${name || "Ledger user"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-xs font-medium text-ink-faint mb-1">Your name</label>
        <input
          required
          className="input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Jane Doe"
        />
      </div>
      <div>
        <label className="block text-xs font-medium text-ink-faint mb-1">Your email</label>
        <input
          required
          type="email"
          className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="jane@example.com"
        />
      </div>
      <div>
        <label className="block text-xs font-medium text-ink-faint mb-1">Message</label>
        <textarea
          required
          className="input min-h-[120px]"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="How can we help?"
        />
      </div>
      <button
        type="submit"
        className="bg-stamp hover:bg-stamp-dark text-paper font-medium text-sm px-5 py-2.5 rounded-md transition-colors shadow-sm"
      >
        Send Message
      </button>

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
