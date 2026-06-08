'use client';

import Link from 'next/link';

const EFFECTIVE_DATE = 'June 2025';
const CONTACT_EMAIL = 'spinthechoice@outlook.com';
const SITE_NAME = 'Spin The Choice';
const SITE_URL = 'https://spinthechoice.com';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Header */}
      <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-4 flex items-center gap-4">
          <Link
            href="/"
            className="text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 transition-colors text-sm font-medium"
          >
            ← Back to Spin The Choice
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Terms &amp; Conditions
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
          Effective date: {EFFECTIVE_DATE} &nbsp;·&nbsp; Last updated: {EFFECTIVE_DATE}
        </p>

        <div className="prose prose-gray dark:prose-invert max-w-none space-y-8 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">

          {/* 1 */}
          <section>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using {SITE_NAME} at{' '}
              <a href={SITE_URL} className="text-violet-600 dark:text-violet-400 underline">
                {SITE_URL}
              </a>{' '}
              (the "Service"), you agree to be bound by these Terms &amp; Conditions ("Terms").
              If you do not agree to these Terms, please stop using the Service immediately.
            </p>
            <p className="mt-3">
              We may update these Terms at any time. Continued use of the Service after changes
              are posted constitutes your acceptance of the revised Terms. It is your responsibility
              to review these Terms periodically.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              2. Description of Service
            </h2>
            <p>
              {SITE_NAME} is a free browser-based wheel spinner application. The Service allows
              users to:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 ml-2">
              <li>Create custom spinning wheels with user-supplied entries</li>
              <li>Randomise selections using the wheel mechanism</li>
              <li>Customise wheel appearance (colours, labels)</li>
              <li>Share wheel configurations via URL</li>
              <li>Use pre-built templates for common use cases</li>
            </ul>
            <p className="mt-3">
              The Service is provided "as is" and is free to use without registration. We reserve
              the right to modify, suspend, or discontinue the Service at any time without notice.
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              3. Acceptable Use
            </h2>
            <p>You agree to use the Service only for lawful purposes. You must not:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 ml-2">
              <li>Use the Service for any illegal or fraudulent activity</li>
              <li>
                Input content that is defamatory, harassing, threatening, obscene, or otherwise
                objectionable
              </li>
              <li>
                Attempt to interfere with, disrupt, or gain unauthorised access to the Service or
                its underlying infrastructure
              </li>
              <li>
                Use automated scripts, bots, or scraping tools to access the Service in a manner
                that exceeds normal human usage
              </li>
              <li>
                Reproduce, distribute, or create derivative works of the Service without our
                express written permission
              </li>
              <li>
                Use the Service in any way that could damage the reputation of {SITE_NAME} or
                third parties
              </li>
            </ul>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              4. User Content
            </h2>
            <p>
              You may enter text (names, items, choices) into the Service to create your wheel.
              This content is processed locally in your browser and, when sharing is used, encoded
              into a URL. We do not store your wheel content on our servers.
            </p>
            <p className="mt-3">
              You retain all ownership and responsibility for content you input. By using the
              Service, you confirm that your content does not violate any third-party rights,
              applicable laws, or these Terms.
            </p>
            <p className="mt-3">
              Because wheel data is embedded in shareable URLs and we have no server-side storage,
              we have no ability to review, moderate, or remove shared wheel configurations. You
              are solely responsible for the content you share.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              5. Intellectual Property
            </h2>
            <p>
              The {SITE_NAME} name, logo, design, source code, and all content we have created
              are our intellectual property and are protected by applicable copyright and trademark
              laws. Nothing in these Terms grants you any right to use our intellectual property
              for commercial purposes without our express written consent.
            </p>
            <p className="mt-3">
              The "Spin The Choice" name and branding may not be used in a way that implies
              endorsement, affiliation, or sponsorship without prior written permission.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              6. Third-Party Services &amp; Advertising
            </h2>
            <p>
              The Service may display advertisements provided by Google AdSense and other
              third-party ad networks. These services may use cookies and similar technologies to
              serve relevant ads. We are not responsible for the content of third-party
              advertisements.
            </p>
            <p className="mt-3">
              We use Vercel Analytics to collect anonymised, aggregated usage data (no personally
              identifiable information). Please review our{' '}
              <Link href="/privacy" className="text-violet-600 dark:text-violet-400 underline">
                Privacy Policy
              </Link>{' '}
              for full details on data collection.
            </p>
            <p className="mt-3">
              The Service may contain links to third-party websites. We are not responsible for
              the content, accuracy, or privacy practices of those sites.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              7. Disclaimer of Warranties
            </h2>
            <p>
              THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES
              OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF
              MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
            <p className="mt-3">
              We do not warrant that the Service will be uninterrupted, error-free, or free of
              viruses or other harmful components. We do not warrant the accuracy, completeness,
              or usefulness of any information provided by the Service.
            </p>
            <p className="mt-3">
              The randomisation mechanism in the Service is intended for entertainment and informal
              decision-making purposes only. Results should not be relied upon for high-stakes
              decisions. We make no guarantees regarding the statistical properties of the
              randomisation algorithm.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              8. Limitation of Liability
            </h2>
            <p>
              TO THE FULLEST EXTENT PERMITTED BY LAW, {SITE_NAME.toUpperCase()} AND ITS OPERATORS
              SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
              PUNITIVE DAMAGES ARISING OUT OF OR RELATED TO YOUR USE OF THE SERVICE, EVEN IF WE
              HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </p>
            <p className="mt-3">
              In any case, our total liability to you for any claim arising out of or relating to
              these Terms or the Service shall not exceed the greater of (a) the amount you paid
              us in the twelve months preceding the claim, or (b) £10 / $10 USD. Because the
              Service is free, this typically means our liability is zero.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              9. Children&apos;s Use
            </h2>
            <p>
              The Service is designed to be suitable for use by people of all ages, including in
              educational settings. However, children under the age of 13 should use the Service
              only with parental supervision. We do not knowingly collect personal information from
              children under 13. If you believe a child has provided personal information through
              our contact form, please contact us and we will delete it promptly.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              10. Governing Law
            </h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of England
              and Wales, without regard to conflict of law principles. Any disputes arising under
              these Terms shall be subject to the exclusive jurisdiction of the courts of England
              and Wales.
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              11. Changes to These Terms
            </h2>
            <p>
              We reserve the right to update or modify these Terms at any time. When we make
              changes, we will update the "Last updated" date at the top of this page. We encourage
              you to review these Terms periodically. Your continued use of the Service following
              any changes constitutes your acceptance of those changes.
            </p>
          </section>

          {/* 12 */}
          <section>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              12. Contact Us
            </h2>
            <p>
              If you have any questions or concerns about these Terms, please contact us:
            </p>
            <ul className="mt-2 space-y-1 ml-2">
              <li>
                <strong>Email:</strong>{' '}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-violet-600 dark:text-violet-400 underline"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <strong>Contact form:</strong>{' '}
                <Link href="/contact" className="text-violet-600 dark:text-violet-400 underline">
                  spinthechoice.com/contact
                </Link>
              </li>
            </ul>
          </section>

        </div>
      </main>

      {/* Footer */}
      <footer className="mt-12 border-t border-gray-200 dark:border-gray-800 py-6 text-center text-xs text-gray-400 dark:text-gray-600 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 px-4">
        <Link href="/" className="hover:text-violet-500 transition-colors">
          Home
        </Link>
        <span aria-hidden="true">·</span>
        <Link href="/about" className="hover:text-violet-500 transition-colors">
          About
        </Link>
        <span aria-hidden="true">·</span>
        <Link href="/privacy" className="hover:text-violet-500 transition-colors">
          Privacy Policy
        </Link>
        <span aria-hidden="true">·</span>
        <Link href="/contact" className="hover:text-violet-500 transition-colors">
          Contact
        </Link>
        <span aria-hidden="true">·</span>
        <span>Terms</span>
      </footer>
    </div>
  );
}
