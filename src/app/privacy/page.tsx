import React from "react";

export default function PrivacyPage() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-6 text-gray-600">
        Your privacy is important to us. This Privacy Policy explains how Xoder collects, uses, and protects your information when you use our online code editor.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
        <ul className="list-disc ml-6 text-gray-700">
          <li><strong>Account Information:</strong> Email address and username when you register.</li>
          <li><strong>Usage Data:</strong> Information about how you use the editor, such as code snippets, preferences, and activity logs.</li>
          <li><strong>Cookies:</strong> We use cookies to enhance your experience and remember your settings.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">2. How We Use Your Information</h2>
        <ul className="list-disc ml-6 text-gray-700">
          <li>To provide and improve our code editor services.</li>
          <li>To personalize your experience and remember your preferences.</li>
          <li>To communicate with you about updates, support, or important notices.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">3. Data Security</h2>
        <p className="text-gray-700">We implement industry-standard security measures to protect your data. However, no method of transmission over the Internet is 100% secure.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">4. Third-Party Services</h2>
        <p className="text-gray-700">We may use third-party services (such as authentication or analytics providers) that collect, monitor, and analyze information to improve our service. These providers have their own privacy policies.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">5. Your Rights</h2>
        <ul className="list-disc ml-6 text-gray-700">
          <li>You can access, update, or delete your personal information at any time.</li>
          <li>You may opt out of certain communications by following the unsubscribe link in our emails.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">6. Contact Us</h2>
        <p className="text-gray-700">If you have any questions or concerns about this Privacy Policy, please contact us at <a href="mailto:support@xoder.com" className="text-blue-600 underline">support@xoder.com</a>.</p>
      </section>

      <p className="text-xs text-gray-400">Last updated: {new Date().toLocaleDateString()}</p>
    </div>
  );
}
