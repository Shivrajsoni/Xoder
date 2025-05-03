"use client";
import React, { useState } from "react";

export default function SupportPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/support", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message }),
      });
      if (res.ok) {
        setSubmitted(true);
        setEmail("");
        setMessage("");
      } else {
        setError("There was an error submitting your complaint. Please try again.");
      }
    } catch {
      setError("There was an error submitting your complaint. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Support</h1>
      <p className="mb-6 text-white-600">
        Welcome to the Xoder Support Center. How can we help you?
      </p>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search for help..."
        className="w-full p-3 border border-gray-300 rounded mb-8 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {/* FAQ Section */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">Frequently Asked Questions</h2>
        <ul className="space-y-4">
          <li>
            <strong>How do I save my code?</strong>
            <p>Click the &quot;Save&quot; button in the editor toolbar or press <kbd>Ctrl+S</kbd>.</p>
          </li>
          <li>
            <strong>Can I collaborate with others?</strong>
            <p>Yes! Use the &quot;Share&quot; button to invite collaborators in real-time.</p>
          </li>
          <li>
            <strong>What languages are supported?</strong>
            <p>We support JavaScript, Python, C++, Rust, TypeScript, Go and more. See our <a href="/docs/languages" className="text-blue-600 underline">full list</a>.</p>
          </li>
        </ul>
      </section>

      {/* Contact Form */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
        {submitted && (
          <div className="mb-4 p-3 bg-green-100 text-green-800 rounded border border-green-300 animate-fade-in">
            <span className="font-medium">Thank you!</span> We have received your complaint.
          </div>
        )}
        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-800 rounded border border-red-300 animate-fade-in">
            {error}
          </div>
        )}
        <form className="space-y-6 bg-white p-6 rounded-lg shadow-md border border-gray-200" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-1 font-medium text-gray-700">Your Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full p-3 border border-gray-300 text-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              disabled={loading}
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">Describe your issue or question</label>
            <textarea
              placeholder="Describe your issue or question"
              className="w-full p-3 border border-gray-300 text-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows={4}
              required
              value={message}
              onChange={e => setMessage(e.target.value)}
              disabled={loading}
            />
          </div>
          <button
            type="submit"
            className={`w-full bg-blue-600 text-white px-4 py-3 rounded font-semibold hover:bg-blue-700 transition-colors duration-200 ${loading ? 'opacity-60 cursor-not-allowed' : ''}`}
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </section>
    </div>
  );
}