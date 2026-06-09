import Link from 'next/link';
import type { Metadata } from 'next';

// JSON-LD for this article page
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Classroom Wheel Spinner – Free Random Name Picker for Teachers',
  description:
    'How to use a classroom wheel spinner to pick random student names fairly, keep lessons engaging, and save time on everyday classroom decisions.',
  url: 'https://spinthechoice.com/classroom',
  author: { '@type': 'Organization', name: 'Spin The Choice' },
  publisher: { '@type': 'Organization', name: 'Spin The Choice', url: 'https://spinthechoice.com' },
  mainEntityOfPage: 'https://spinthechoice.com/classroom',
};

export default function ClassroomPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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

      {/* Hero CTA */}
      <div className="bg-gradient-to-br from-violet-600 to-indigo-600 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 text-center">
          <div className="text-5xl mb-4">🎓</div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
            Classroom Wheel Spinner
          </h1>
          <p className="text-violet-100 text-lg mb-8 max-w-xl mx-auto">
            The free random name picker that teachers trust. Add your class list, spin the wheel,
            and pick students fairly — in seconds.
          </p>
          <Link
            href="/?template=classroom"
            className="inline-block bg-white text-violet-700 font-bold px-8 py-3 rounded-full shadow-lg hover:bg-violet-50 transition-colors text-base"
          >
            Open Classroom Spinner →
          </Link>
        </div>
      </div>

      {/* Main content */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 space-y-12 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">

        {/* Intro */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Why every teacher needs a classroom wheel spinner
          </h2>
          <p className="mb-4">
            Deciding which student to call on — fairly, quickly, and without the same hands
            shooting up every time — is one of the small but real daily challenges of teaching.
            A <strong>classroom wheel spinner</strong> solves it instantly. Type your class list
            once, press Spin, and the wheel does the rest.
          </p>
          <p className="mb-4">
            Unlike calling on volunteers (where confident students dominate) or working through
            a list in order (which students quickly game), a <strong>random name picker</strong>{' '}
            keeps every pupil alert and engaged because anyone could be next. Research on
            cold-calling consistently shows it raises attentiveness across the whole class, not
            just the student chosen.
          </p>
          <p>
            Spin The Choice is completely free, works instantly in any browser, and requires no
            app download or account. Your class list is saved in the URL so you can bookmark it
            or share it with a teaching assistant.
          </p>
        </section>

        {/* How to set up */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            How to set up your classroom wheel spinner in 60 seconds
          </h2>
          <ol className="space-y-4">
            {[
              {
                n: '1',
                title: 'Open the spinner',
                body: 'Go to spinthechoice.com or click the button above to load the Classroom template, which comes pre-filled with example names so you can see how it works right away.',
              },
              {
                n: '2',
                title: 'Enter your class list',
                body: 'Clear the example names and type your students\' names — one per line. Most teachers type them directly, but you can also copy-paste from a spreadsheet. There is no limit on entries.',
              },
              {
                n: '3',
                title: 'Customise if you like',
                body: 'Each segment gets a colour automatically, but you can click any colour dot to change it. Some teachers colour-code by table group or reading level.',
              },
              {
                n: '4',
                title: 'Bookmark the link',
                body: 'Click the Share button to copy the wheel URL. This link encodes your entire class list — bookmark it in your browser or pin it to your teacher dashboard so it\'s ready every lesson.',
              },
              {
                n: '5',
                title: 'Spin!',
                body: 'Click the big SPIN button or tap directly on the wheel. The tick sound builds tension and the cheer celebrates the chosen student. Turn the volume up for extra effect.',
              },
            ].map((step) => (
              <li key={step.n} className="flex gap-4 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5">
                <span className="flex-none w-8 h-8 rounded-full bg-violet-100 dark:bg-violet-900/40 text-violet-600 dark:text-violet-400 font-bold text-sm flex items-center justify-center">
                  {step.n}
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{step.title}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Use cases */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            10 ways teachers use a random name picker every day
          </h2>
          <p className="mb-4">
            A classroom wheel spinner is useful far beyond simply choosing who answers a question.
            Here are the most popular uses teachers have shared with us:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { icon: '🙋', title: 'Cold calling', body: 'Pick a student to answer a question without relying on raised hands.' },
              { icon: '📖', title: 'Reading aloud', body: 'Choose who reads the next paragraph or page during shared reading.' },
              { icon: '🧑‍🤝‍🧑', title: 'Group assignment', body: 'Spin multiple times to form random groups for pair or team activities.' },
              { icon: '🎤', title: 'Presentations', body: 'Determine the order of student presentations fairly and transparently.' },
              { icon: '🏅', title: 'Star of the week', body: 'Pick a student to be class helper, line leader, or star of the day.' },
              { icon: '🗳️', title: 'Class decisions', body: 'Let the class vote on options — add choices to the wheel and spin together.' },
              { icon: '🎮', title: 'Review games', body: 'Spin to select who answers a quiz question during a revision lesson.' },
              { icon: '🖼️', title: 'Show and tell order', body: 'Remove a name from the wheel after each child has presented.' },
              { icon: '🧹', title: 'Chore picker', body: 'Assign classroom jobs like board-cleaner or paper-collector randomly each week.' },
              { icon: '🎁', title: 'Prize draws', body: 'Reward participation or good behaviour with a spin-the-wheel prize draw.' },
            ].map((uc) => (
              <div key={uc.title} className="flex gap-3 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-4">
                <span className="text-xl flex-none">{uc.icon}</span>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white text-xs mb-0.5">{uc.title}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{uc.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tips */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Tips for getting the most out of your random name picker
          </h2>
          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Remove names after they&apos;ve been picked
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                If you want every student to answer once before anyone is picked again, simply
                delete a name from the list after their turn. The wheel resizes automatically.
                This gives you all the fairness of a cup-of-sticks system with none of the
                physical setup.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Project the wheel on your classroom screen
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                Open Spin The Choice on your interactive whiteboard or projector. Watching the
                wheel spin together creates a shared moment of anticipation — students are far
                more engaged when they can see the wheel slowing down. The sound effects work
                well through classroom speakers too.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Keep a separate wheel for different class groups
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                If you teach multiple classes or sets, use the Share button to save a unique URL
                for each one. Bookmark each link with a clear label — "Year 8 Set 1", "Year 9
                Set 2" — and switch between them instantly at the start of each lesson.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Use it for decisions, not just names
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                The same spinner works for any classroom decision. Create a wheel with options
                like "Silent reading", "Peer quiz", "Whiteboard activity", or "Exit ticket" and
                spin to pick the warm-up activity for the lesson. Students love the element of
                surprise and teachers appreciate the variety it brings to routine lesson starters.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently asked questions
          </h2>
          <div className="space-y-3">
            {[
              {
                q: 'Is the classroom wheel spinner really free?',
                a: 'Yes — completely free, forever. There is no premium plan and no trial period. You do not need to create an account or provide any personal information.',
              },
              {
                q: 'How many student names can I add?',
                a: 'There is no hard limit. Practically, wheels work best with up to about 40 entries — which covers even large class sizes. If a name becomes too small to read on the wheel, the result pop-up still shows it clearly.',
              },
              {
                q: 'Does it work on a smartboard or interactive whiteboard?',
                a: 'Yes. Spin The Choice runs in any modern browser, so it works on SMART Boards, Promethean Boards, and any projector-connected laptop. Just open the page and spin — no software installation needed.',
              },
              {
                q: 'Is the random selection truly fair?',
                a: 'Yes. The winning segment is determined by a random final rotation angle calculated before the spin begins, using the browser\'s built-in cryptographically seeded random number generator. Every segment has an exactly equal chance regardless of size.',
              },
              {
                q: 'Can I share the wheel with my teaching assistant?',
                a: 'Yes. Click the Share button to copy a URL that encodes your full class list. Anyone with the link can open and spin the exact same wheel from their own device, with no account required.',
              },
              {
                q: 'What if I want to exclude a student from a particular spin?',
                a: 'Simply click the × next to their name to remove them from the wheel. You can re-add them at any time by typing their name back into the list.',
              },
            ].map((faq) => (
              <details
                key={faq.q}
                className="group bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-4 cursor-pointer"
              >
                <summary className="font-semibold text-gray-900 dark:text-white text-sm list-none flex items-center justify-between gap-2">
                  {faq.q}
                  <span className="text-gray-400 group-open:rotate-180 transition-transform text-xs flex-none">▼</span>
                </summary>
                <p className="mt-3 text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-violet-50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-800 rounded-2xl p-8 text-center">
          <div className="text-4xl mb-3">🎡</div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            Ready to try it in your classroom?
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 max-w-sm mx-auto">
            Open the free classroom wheel spinner now. Add your class list in under a minute
            and start picking students fairly from your very next lesson.
          </p>
          <Link
            href="/?template=classroom"
            className="inline-block bg-violet-600 hover:bg-violet-700 text-white font-bold px-8 py-3 rounded-full shadow transition-colors"
          >
            Open Classroom Spinner →
          </Link>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 py-6 text-center text-xs text-gray-400 dark:text-gray-600 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 px-4">
        <Link href="/" className="hover:text-violet-500 transition-colors">Home</Link>
        <span aria-hidden="true">·</span>
        <Link href="/gallery" className="hover:text-violet-500 transition-colors">Gallery</Link>
        <span aria-hidden="true">·</span>
        <Link href="/about" className="hover:text-violet-500 transition-colors">About</Link>
        <span aria-hidden="true">·</span>
        <Link href="/privacy" className="hover:text-violet-500 transition-colors">Privacy Policy</Link>
        <span aria-hidden="true">·</span>
        <Link href="/contact" className="hover:text-violet-500 transition-colors">Contact</Link>
        <span aria-hidden="true">·</span>
        <Link href="/terms" className="hover:text-violet-500 transition-colors">Terms</Link>
      </footer>
    </div>
  );
}
