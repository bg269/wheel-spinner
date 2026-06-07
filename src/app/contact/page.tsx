'use client';

import { useState } from 'react';
import Link from 'next/link';

const CONTACT_EMAIL = 'spinthechoice@outlook.com';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

const TOPICS = [
  'General enquiry',
  'Bug report',
  'Feature request',
  'Advertising / partnerships',
  'Privacy or data request',
  'Other',
];

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState(TOPICS[0]);
  const [message, setMessage] = useState('');
  const [formState, setFormState] = useState<FormState>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');

    // Opens the user's mail client with the form data pre-filled.
    // Replace with a real form endpoint (e.g. Formspree, Resend) when ready.
    const subject = encodeURIComponent(`[Spin The Choice] ${topic}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nTopic: ${topic}\n\n${message}`,
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

    // Show success state after a short delay
    setTimeout(() => setFormState('success'), 500);
  };

  const reset = () => {
    setName('');
    setEmail('');
    setTopic(TOPICS[0]);
    setMessage('');
    setFormState('idle');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">

      {/* ── Header ──────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-20 border-b border-gray-200/60 dark:border-gray-800/60 bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <span className="text-2xl leading-none">🎡</span>
            <span className="font-bold text-gray-900 dark:text-white tracking-tight text-lg group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
              Spin The Choice
            </span>
          </Link>
          <Link
            href="/"
            className="text-sm font-semibold text-violet-600 dark:text-violet-400 hover:underline"
          >
            ← Back to spinner
          </Link>
        </div>
      </header>

      {/* ── Main ────────────────────────────────────────────────────── */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12">

        {/* Page heading */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Contact Us</h1>
          <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
            Have a question, spotted a bug, or want to work with us? We&apos;d love to hear from you.
            Fill in the form below or email us directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* ── Sidebar info ──────────────────────────────────────── */}
          <aside className="flex flex-col gap-4 lg:order-last">

            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl bg-violet-100 dark:bg-violet-900/40 flex items-center justify-center text-lg">
                  ✉️
                </div>
                <h2 className="font-semibold text-gray-900 dark:text-white text-sm">Email us directly</h2>
              </div>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-sm text-violet-600 dark:text-violet-400 hover:underline break-all"
              >
                {CONTACT_EMAIL}
              </a>
              <p className="text-xs text-gray-400 dark:text-gray-600 mt-2">
                We aim to reply within 2 business days.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl bg-violet-100 dark:bg-violet-900/40 flex items-center justify-center text-lg">
                  ⚡
                </div>
                <h2 className="font-semibold text-gray-900 dark:text-white text-sm">Quick links</h2>
              </div>
              <ul className="flex flex-col gap-2 text-sm">
                <li>
                  <Link href="/about#faq" className="text-violet-600 dark:text-violet-400 hover:underline">
                    → Frequently asked questions
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-violet-600 dark:text-violet-400 hover:underline">
                    → Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-violet-600 dark:text-violet-400 hover:underline">
                    → About Spin The Choice
                  </Link>
                </li>
              </ul>
            </div>

          </aside>

          {/* ── Contact form ──────────────────────────────────────── */}
          <div className="lg:col-span-2">
            {formState === 'success' ? (
              /* Success state */
              <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-8 shadow-sm text-center">
                <div className="text-5xl mb-4">🎉</div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Message sent!
                </h2>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 leading-relaxed">
                  Your email client should have opened with your message pre-filled.
                  We&apos;ll get back to you at <strong>{email}</strong> within 2 business days.
                </p>
                <button
                  onClick={reset}
                  className="px-6 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              /* Form */
              <form
                onSubmit={handleSubmit}
                className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 sm:p-8 shadow-sm flex flex-col gap-5"
              >
                {/* Name + Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="name"
                      className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider"
                    >
                      Your name <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Jane Smith"
                      className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-4 py-2.5 text-sm text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-400 transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="email"
                      className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider"
                    >
                      Email address <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="jane@example.com"
                      className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-4 py-2.5 text-sm text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-400 transition-colors"
                    />
                  </div>
                </div>

                {/* Topic */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="topic"
                    className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider"
                  >
                    Topic
                  </label>
                  <select
                    id="topic"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-4 py-2.5 text-sm text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-400 transition-colors"
                  >
                    {TOPICS.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="message"
                    className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider"
                  >
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us how we can help…"
                    className="resize-none rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-4 py-3 text-[16px] sm:text-sm text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-400 transition-colors leading-relaxed"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={formState === 'submitting'}
                  className="w-full py-3 rounded-xl bg-violet-600 hover:bg-violet-500 active:scale-[0.99] disabled:bg-gray-300 dark:disabled:bg-gray-700 text-white font-semibold text-sm transition-all shadow-sm shadow-violet-500/20 disabled:shadow-none"
                >
                  {formState === 'submitting' ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                      </svg>
                      Sending…
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>

                <p className="text-xs text-gray-400 dark:text-gray-600 text-center">
                  By submitting this form you agree to our{' '}
                  <Link href="/privacy" className="underline hover:text-violet-500 transition-colors">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </form>
            )}
          </div>
        </div>
      </main>

      {/* ── Footer ──────────────────────────────────────────────────── */}
      <footer className="text-center py-6 text-xs text-gray-400 dark:text-gray-700 border-t border-gray-200 dark:border-gray-800 mt-10 flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
        <Link href="/" className="hover:text-violet-500 transition-colors">Spin The Choice</Link>
        <span aria-hidden="true">·</span>
        <Link href="/about" className="hover:text-violet-500 transition-colors">About</Link>
        <span aria-hidden="true">·</span>
        <Link href="/privacy" className="hover:text-violet-500 transition-colors">Privacy Policy</Link>
        <span aria-hidden="true">·</span>
        <Link href="/contact" className="hover:text-violet-500 transition-colors">Contact</Link>
      </footer>
    </div>
  );
}
