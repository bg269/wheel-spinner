import Link from 'next/link';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Spin the Wheel – Free Online Wheel Spinner for Any Decision',
  description:
    'Everything you can do when you spin the wheel online — from yes or no decisions to classroom name picks, giveaways, and game nights.',
  url: 'https://spinthechoice.com/spin-the-wheel',
  author: { '@type': 'Organization', name: 'Spin The Choice' },
  publisher: {
    '@type': 'Organization',
    name: 'Spin The Choice',
    url: 'https://spinthechoice.com',
  },
};

export default function SpinTheWheelPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-4">
          <Link
            href="/"
            className="text-violet-600 dark:text-violet-400 hover:text-violet-700 transition-colors text-sm font-medium"
          >
            ← Back to Spin The Choice
          </Link>
        </div>
      </header>

      {/* Hero */}
      <div className="bg-gradient-to-br from-violet-600 to-indigo-600 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 text-center">
          <div className="text-5xl mb-4">🎡</div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
            Spin the Wheel
          </h1>
          <p className="text-violet-100 text-lg mb-8 max-w-xl mx-auto">
            The free online wheel spinner that makes any decision fun. Add your options,
            spin the wheel, and let chance do the rest — in seconds.
          </p>
          <Link
            href="/"
            className="inline-block bg-white text-violet-700 font-bold px-8 py-3 rounded-full shadow-lg hover:bg-violet-50 transition-colors"
          >
            Spin the Wheel Now →
          </Link>
        </div>
      </div>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 space-y-12 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">

        {/* Intro */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Why spin the wheel instead of flipping a coin?
          </h2>
          <p className="mb-4">
            Flipping a coin gives you two options. A wheel gives you as many as you need.
            Whether you're choosing between three restaurants, picking one of thirty students,
            or settling a five-way debate on what to watch tonight, spinning a wheel is the
            fairest and most satisfying way to reach a decision.
          </p>
          <p className="mb-4">
            There's also something genuinely exciting about watching the wheel slow down.
            The moment of anticipation — that half-second where it could still land anywhere —
            makes the outcome feel earned. That's why teachers love projecting the wheel on
            their classroom screen, streamers use it for live giveaways, and families settle
            dinner debates by letting the wheel decide.
          </p>
          <p>
            Spin The Choice is a completely free online wheel spinner. No ads blocking your
            spin, no sign-up wall, no timer countdown to unlock features — just open the page
            and spin. Your entries are saved in the link, so you can bookmark a wheel and come
            back to it any time.
          </p>
        </section>

        {/* What can you put on the wheel */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            What can you put on the wheel?
          </h2>
          <p className="mb-6">
            Anything. Each entry is a plain text label — a name, a word, a question, a number,
            an emoji. Here are some of the most popular things people spin for:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              {
                icon: '✅',
                title: 'Yes or No wheel spinner',
                body: 'Add "Yes" and "No" (and maybe "Ask again later") for a digital Magic 8-Ball. Great for settling arguments or making a quick call when you genuinely can\'t decide.',
              },
              {
                icon: '👤',
                title: 'Names & people',
                body: 'Pick a random person from a group — a student to answer a question, a winner for a raffle, or who buys the next round.',
              },
              {
                icon: '🍕',
                title: 'Food & restaurants',
                body: 'End the "what should we eat?" loop. Load your go-to restaurants or meal options and spin to pick tonight\'s dinner.',
              },
              {
                icon: '🎲',
                title: 'Games & activities',
                body: 'Choose which board game to play, which sport to watch, or which dare someone has to do. Perfect for game nights.',
              },
              {
                icon: '🎬',
                title: 'Movies & TV shows',
                body: 'Add everything on your watchlist and let the wheel choose. No more 20-minute scroll through Netflix.',
              },
              {
                icon: '🏆',
                title: 'Prizes & rewards',
                body: 'Create a prize wheel for giveaways, classroom rewards, or party activities. Each segment is a different prize.',
              },
              {
                icon: '💼',
                title: 'Work & tasks',
                body: 'Assign tasks fairly across a team, choose who leads the next meeting, or pick a topic for a brainstorm session.',
              },
              {
                icon: '🌍',
                title: 'Travel & destinations',
                body: 'Can\'t agree on where to go? Add your shortlisted destinations and spin the wheel to pick your next trip.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-3 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-4"
              >
                <span className="text-xl flex-none">{item.icon}</span>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white text-xs mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Yes or No deep-dive */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            The yes or no wheel spinner — when you need a straight answer
          </h2>
          <p className="mb-4">
            One of the most searched uses for a wheel spinner is the yes or no decision. It
            sounds simple — and it is — but there's a reason people reach for it: sometimes
            you've weighed the options for so long that an external nudge is exactly what you
            need to commit.
          </p>
          <p className="mb-4">
            To set up a yes or no wheel on Spin The Choice, clear the default entries and type
            "Yes" and "No" as your two items. You can also add "Maybe", "Ask tomorrow", or
            "Do both" as extra segments to make things more interesting. The wheel gives each
            segment an equal slice, so the odds are always fair.
          </p>
          <p>
            Some people add weighted options — for example three "Yes" entries and one "No" —
            when they already lean toward one answer but want a push. Since every entry gets
            its own equal slice, three "Yes" entries means a 75% chance of yes. It's a honest
            way to check your gut instinct.
          </p>
        </section>

        {/* How it works */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            How the wheel spinner works
          </h2>
          <div className="space-y-3">
            {[
              {
                n: '1',
                title: 'Type your options',
                body: 'Enter each item in the list on the left — one per line. Use the templates for a quick start, or type anything you like.',
              },
              {
                n: '2',
                title: 'Click Spin (or tap the wheel)',
                body: 'Hit the SPIN button or click directly on the wheel. A random stopping angle is chosen the moment you press — the spin itself is just the dramatic reveal.',
              },
              {
                n: '3',
                title: 'See the result',
                body: 'The wheel decelerates with tick sounds building tension, then stops with a cheer on the winning segment. The result pops up in a card.',
              },
              {
                n: '4',
                title: 'Remove and spin again (optional)',
                body: 'After a result you can remove that entry and spin again — useful for picking a ranked order, or working through a full class list one by one.',
              },
              {
                n: '5',
                title: 'Share your wheel',
                body: 'The Share button copies a URL with your entire wheel encoded in it. Anyone with the link can spin the same wheel, on any device.',
              },
            ].map((step) => (
              <div
                key={step.n}
                className="flex gap-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-5"
              >
                <span className="flex-none w-8 h-8 rounded-full bg-violet-100 dark:bg-violet-900/40 text-violet-600 dark:text-violet-400 font-bold text-sm flex items-center justify-center">
                  {step.n}
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{step.title}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
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
                q: 'Is Spin The Choice really free?',
                a: 'Yes — no hidden fees, no premium tier, no account required. Open the site and start spinning immediately.',
              },
              {
                q: 'Is the spin genuinely random?',
                a: "Yes. The winning segment is determined the instant you press Spin, using the browser's built-in random number generator. The animation is just for the drama. Every segment always has an equal chance.",
              },
              {
                q: 'How many options can I add to the wheel?',
                a: "There's no hard cap. Wheels with up to 40 entries work well visually. If you need more, the result pop-up always shows the winner clearly regardless of how small the segments are.",
              },
              {
                q: 'Can I save my wheel and use it again?',
                a: "Yes. Press Share to copy a URL that encodes your full wheel. Bookmark that URL and your wheel is always one click away — no account or cloud storage needed.",
              },
              {
                q: 'Does it work on mobile?',
                a: 'Yes. The wheel spinner is fully responsive and touch-friendly. Tap the wheel directly to spin, swipe the entry list to scroll, and use it in portrait or landscape.',
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

        {/* Related */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            More ways to use the wheel
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/classroom"
              className="block bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5 hover:border-violet-400 dark:hover:border-violet-600 transition-colors group"
            >
              <div className="text-2xl mb-2">🎓</div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                Classroom wheel spinner
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                How teachers use a wheel spinner to pick students, assign tasks, and keep lessons engaging.
              </p>
            </Link>
            <Link
              href="/blog/spin-the-wheel-game-ideas"
              className="block bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5 hover:border-violet-400 dark:hover:border-violet-600 transition-colors group"
            >
              <div className="text-2xl mb-2">🎲</div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                Spin the wheel game ideas
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                15 creative games and activities you can run with a wheel spinner — for parties, classrooms, and online.
              </p>
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-violet-50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-800 rounded-2xl p-8 text-center">
          <div className="text-4xl mb-3">🎡</div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            Ready to spin the wheel?
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 max-w-sm mx-auto">
            Free, instant, no login. Add your options and spin — it takes less than thirty
            seconds to set up your first wheel.
          </p>
          <Link
            href="/"
            className="inline-block bg-violet-600 hover:bg-violet-700 text-white font-bold px-8 py-3 rounded-full shadow transition-colors"
          >
            Spin the Wheel Free →
          </Link>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 py-6 text-center text-xs text-gray-400 dark:text-gray-600 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 px-4">
        <Link href="/" className="hover:text-violet-500 transition-colors">Home</Link>
        <span aria-hidden="true">·</span>
        <Link href="/classroom" className="hover:text-violet-500 transition-colors">Classroom</Link>
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
