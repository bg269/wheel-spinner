import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy Policy for Spin The Choice. Learn how we collect, use, and protect your data, including information about analytics and advertising cookies.',
  robots: { index: true, follow: true },
};

const LAST_UPDATED = 'June 2025';
const SITE_NAME = 'Spin The Choice';
const SITE_URL = 'https://spinthechoice.vercel.app';
const CONTACT_EMAIL = 'privacy@spinthechoice.app';

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-20">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{title}</h2>
      <div className="text-gray-600 dark:text-gray-400 leading-relaxed space-y-3">{children}</div>
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">

      {/* Header */}
      <header className="sticky top-0 z-20 border-b border-gray-200/60 dark:border-gray-800/60 bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <span className="text-2xl leading-none">🎡</span>
            <span className="font-bold text-gray-900 dark:text-white tracking-tight text-lg group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
              {SITE_NAME}
            </span>
          </Link>
          <Link href="/" className="text-sm font-semibold text-violet-600 dark:text-violet-400 hover:underline">
            ← Back to spinner
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12">

        {/* Page title */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Privacy Policy</h1>
          <p className="text-sm text-gray-500 dark:text-gray-500">Last updated: {LAST_UPDATED}</p>
        </div>

        {/* Intro */}
        <div className="bg-violet-50 dark:bg-violet-950/30 border border-violet-200 dark:border-violet-800 rounded-2xl p-5 mb-10 text-sm text-violet-800 dark:text-violet-300 leading-relaxed">
          <strong>Summary:</strong> {SITE_NAME} is a free, browser-based tool. We do not require you to create an
          account, and we do not sell your personal data. We collect anonymous usage analytics to
          improve the service, and we may display interest-based advertisements in the future.
        </div>

        <div className="flex flex-col gap-10 divide-y divide-gray-200 dark:divide-gray-800">

          <Section id="who-we-are" title="1. Who We Are">
            <p>
              {SITE_NAME} ("{SITE_NAME}", "we", "us", "our") operates the website located at{' '}
              <a href={SITE_URL} className="text-violet-600 dark:text-violet-400 underline">{SITE_URL}</a>.
              We provide a free online wheel spinner tool for random name picking, decision making,
              and games.
            </p>
            <p>
              If you have questions about this Privacy Policy, please contact us at{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-violet-600 dark:text-violet-400 underline">{CONTACT_EMAIL}</a>.
            </p>
          </Section>

          <Section id="information-collected" title="2. Information We Collect">
            <p>
              We collect the minimum information necessary to operate and improve the service.
            </p>
            <div className="space-y-4 pt-1">
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">
                  a) Information you provide
                </h3>
                <p>
                  The names and items you enter into the wheel spinner are processed entirely in your
                  browser and are <strong>not sent to our servers</strong>. When you use the "Share"
                  feature, your wheel data is encoded directly into the shareable URL — no data is
                  stored in any database.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">
                  b) Analytics data (automatically collected)
                </h3>
                <p>
                  We use <strong>Vercel Analytics</strong> to collect anonymous, aggregated usage
                  data, including page views, the country or region of the visitor, browser type,
                  and device type. This data does not include your IP address in identifiable form
                  and cannot be used to identify you personally.
                </p>
                <p>
                  We also track anonymous events such as "wheel spun", "link shared", and "template
                  selected" to understand how the tool is used. No personal information is attached
                  to these events.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">
                  c) Advertising data (Google AdSense)
                </h3>
                <p>
                  We display advertisements served by <strong>Google AdSense</strong>. Google may
                  use cookies and similar technologies to serve ads based on your prior visits to
                  this site or other websites. Google's use of advertising cookies enables it and
                  its partners to serve ads based on your visit to our site and/or other sites on
                  the internet.
                </p>
                <p>
                  You may opt out of personalised advertising by visiting{' '}
                  <a
                    href="https://www.google.com/settings/ads"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-violet-600 dark:text-violet-400 underline"
                  >
                    Google Ads Settings
                  </a>
                  {' '}or{' '}
                  <a
                    href="https://www.aboutads.info"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-violet-600 dark:text-violet-400 underline"
                  >
                    www.aboutads.info
                  </a>
                  .
                </p>
              </div>
            </div>
          </Section>

          <Section id="cookies" title="3. Cookies">
            <p>
              Cookies are small text files stored on your device. We use the following types:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse mt-2">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <th className="text-left px-4 py-2 rounded-tl-lg font-semibold text-gray-700 dark:text-gray-300">Cookie type</th>
                    <th className="text-left px-4 py-2 font-semibold text-gray-700 dark:text-gray-300">Provider</th>
                    <th className="text-left px-4 py-2 rounded-tr-lg font-semibold text-gray-700 dark:text-gray-300">Purpose</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr>
                    <td className="px-4 py-2">Analytics</td>
                    <td className="px-4 py-2">Vercel</td>
                    <td className="px-4 py-2">Anonymous usage statistics</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">Advertising</td>
                    <td className="px-4 py-2">Google AdSense</td>
                    <td className="px-4 py-2">Personalised ad delivery</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="pt-2">
              You can control cookies through your browser settings. Disabling cookies may affect
              the functionality of advertisements but will not affect the wheel spinner tool itself.
            </p>
          </Section>

          <Section id="how-we-use-data" title="4. How We Use Your Data">
            <ul className="list-disc pl-5 space-y-1">
              <li>To provide, maintain, and improve the {SITE_NAME} service</li>
              <li>To understand how visitors use the site (analytics)</li>
              <li>To display relevant advertisements (Google AdSense)</li>
              <li>To detect and prevent technical issues or abuse</li>
            </ul>
            <p>We do <strong>not</strong> sell, rent, or trade your personal information to third parties.</p>
          </Section>

          <Section id="third-parties" title="5. Third-Party Services">
            <p>We use the following third-party services which have their own privacy policies:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Vercel</strong> — hosting and analytics.{' '}
                <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-violet-600 dark:text-violet-400 underline">
                  Vercel Privacy Policy
                </a>
              </li>
              <li>
                <strong>Google AdSense</strong> — advertising.{' '}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-violet-600 dark:text-violet-400 underline">
                  Google Privacy Policy
                </a>
              </li>
            </ul>
          </Section>

          <Section id="your-rights" title="6. Your Rights">
            <p>Depending on where you are located, you may have the following rights:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Access</strong> — request a copy of any personal data we hold about you</li>
              <li><strong>Deletion</strong> — request that we delete your data</li>
              <li><strong>Opt-out</strong> — opt out of personalised advertising at any time</li>
              <li><strong>Complaint</strong> — lodge a complaint with your local data protection authority</li>
            </ul>
            <p>
              Because {SITE_NAME} does not require an account or collect personally identifiable
              information directly, most requests can be resolved by clearing your browser's cookies
              and local storage. For any other requests, contact us at{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-violet-600 dark:text-violet-400 underline">{CONTACT_EMAIL}</a>.
            </p>
          </Section>

          <Section id="childrens-privacy" title="7. Children's Privacy">
            <p>
              {SITE_NAME} is suitable for classroom use and may be used by children under the
              supervision of a teacher or parent. We do not knowingly collect personal information
              from children under 13. The wheel spinner processes all input locally in the browser
              and transmits no data to our servers.
            </p>
          </Section>

          <Section id="changes" title="8. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. The "Last updated" date at the
              top of this page will reflect any changes. Continued use of the site after changes are
              posted constitutes your acceptance of the updated policy.
            </p>
          </Section>

          <Section id="contact" title="9. Contact Us">
            <p>
              If you have any questions or concerns about this Privacy Policy, please contact us:
            </p>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 text-sm">
              <p><strong>{SITE_NAME}</strong></p>
              <p>
                Email:{' '}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-violet-600 dark:text-violet-400 underline">{CONTACT_EMAIL}</a>
              </p>
              <p>Website: <a href={SITE_URL} className="text-violet-600 dark:text-violet-400 underline">{SITE_URL}</a></p>
            </div>
          </Section>

        </div>
      </main>

      <footer className="text-center py-6 text-xs text-gray-400 dark:text-gray-700 border-t border-gray-200 dark:border-gray-800 mt-10">
        <Link href="/" className="hover:text-violet-500 transition-colors">Spin The Choice</Link>
        {' · '}
        <Link href="/privacy" className="hover:text-violet-500 transition-colors">Privacy Policy</Link>
        {' · '}
        <Link href="/about" className="hover:text-violet-500 transition-colors">About</Link>
      </footer>
    </div>
  );
}
