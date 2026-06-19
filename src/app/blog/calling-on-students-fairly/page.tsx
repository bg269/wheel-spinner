import Link from 'next/link';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'How to Call on Students Fairly (Without Anyone Saying "You Never Pick Me")',
  description:
    'Why fair participation is harder than it looks, the most common methods teachers use, and how a name picker wheel solves the "you never pick me" problem for good.',
  url: 'https://spinthechoice.com/blog/calling-on-students-fairly',
  datePublished: '2025-06-19',
  dateModified: '2025-06-19',
  author: { '@type': 'Organization', name: 'Spin The Choice' },
  publisher: { '@type': 'Organization', name: 'Spin The Choice', url: 'https://spinthechoice.com' },
};

const methods = [
  {
    emoji: '🍭',
    title: 'The lolly-stick jar',
    body: "A classic for a reason: write each student's name on a craft stick, pull one at random. It's visible, it feels fair, and students can see it isn't rigged. The downside is the admin — making the sticks, remembering the jar, and the fact that a pulled name can simply go back in and get picked again two minutes later.",
  },
  {
    emoji: '🎯',
    title: 'Cold calling on purpose',
    body: "Some teachers deliberately call on students who haven't raised their hands, warming them up first with thinking time or a quick partner chat so no one is caught completely off guard. It's powerful for engagement but takes practice to do kindly, and it's easy to accidentally land on the same few students.",
  },
  {
    emoji: '🔄',
    title: 'Going round the room',
    body: "Predictable and tidy, but students quickly count ahead to \"their\" question and tune out until it's their turn — then tune out again afterwards.",
  },
  {
    emoji: '🎡',
    title: 'Randomising digitally',
    body: "This is where a name picker wheel comes in. You enter your class list once, give it a spin, and the wheel lands on a name. It's quick, it's visibly random, and because nobody can predict who's next, the whole class stays alert. For students, a spinning wheel also feels more like a game than an interrogation, which takes the sting out of being chosen.",
  },
];

const tips = [
  {
    emoji: '⏱️',
    title: 'Give thinking time first',
    body: "Pose the question, let everyone think (or talk to a partner) for a moment, then spin. That way the chosen student has something to say and the moment feels supportive rather than like a trap.",
  },
  {
    emoji: '✅',
    title: 'Use no-repeat mode for participation',
    body: "Turn on no-repeat mode so you can honestly tell the class that everyone will get a turn — and mean it. Students trust the system more when they know the wheel works its way through the whole list before cycling back.",
  },
  {
    emoji: '🎭',
    title: 'Keep it light',
    body: "Let the suspense of the spin do the work. The little pause as the wheel slows down naturally pulls everyone's attention back. You don't need to add drama — the wheel provides it.",
  },
  {
    emoji: '📣',
    title: 'Reset openly',
    body: "When you've been through the whole class and start again, say so. Students trust the system more when they can see how it works. Transparency turns the tool from a mystery into a shared classroom norm.",
  },
];

const features = [
  {
    title: 'No login and no install',
    body: "Runs in any browser, which matters on locked-down school devices and shared Chromebooks where you can't add accounts or download anything.",
  },
  {
    title: "It's free",
    body: "No trial, no \"premium\" wall hiding the useful features.",
  },
  {
    title: 'Save your class list',
    body: "Type your names once and save them — no retyping thirty names every morning.",
  },
  {
    title: 'Big enough to project',
    body: "The wheel is large enough to display on the board so the whole class can watch the spin.",
  },
];

export default function CallingOnStudentsFairlyPost() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-violet-600 dark:text-violet-400 hover:text-violet-700 transition-colors text-sm font-medium">
            ← Spin The Choice
          </Link>
          <Link href="/blog" className="text-sm text-gray-500 dark:text-gray-400 hover:text-violet-500 transition-colors">
            All posts
          </Link>
        </div>
      </header>

      {/* Article header */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
          <div className="flex items-center gap-2 text-xs text-violet-600 dark:text-violet-400 font-medium mb-3 uppercase tracking-wide">
            <Link href="/blog" className="hover:underline">Blog</Link>
            <span>›</span>
            <span>Teachers</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            How to Call on Students Fairly (Without Anyone Saying "You Never Pick Me")
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed max-w-2xl">
            Every classroom has the same quiet problem. A handful of confident hands shoot up for every
            question, a few students sink lower hoping to disappear, and somewhere in the middle sits a
            child who has mentally checked out — because they've learned they probably won't be called
            on anyway.
          </p>
          <div className="mt-4 flex items-center gap-3 text-xs text-gray-400 dark:text-gray-600">
            <span>June 2025</span>
            <span>·</span>
            <span>5 min read</span>
            <span>·</span>
            <span>Spin The Choice</span>
          </div>
        </div>
      </div>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 space-y-12 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">

        {/* Why it's hard */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Why "just pick someone" is harder than it sounds
          </h2>
          <p className="mb-4">
            Calling on students fairly sounds simple. In practice, it's one of the trickiest balancing
            acts in teaching: you want to keep everyone engaged, give quieter students a real chance
            to contribute, and avoid the dreaded accusation of "you always pick the same people."
          </p>
          <p className="mb-4">
            When you call on students by hand, you're making a fast decision under pressure, and your
            brain takes shortcuts whether you want it to or not. You tend to call on the students who
            look ready, the ones near the front, or simply the ones whose names come to mind quickest.
            None of this is a failing on your part — it's just how attention works when you're juggling
            a lesson, the clock, and thirty different personalities.
          </p>
          <p>
            The trouble is that students notice the pattern long before you do. The eager ones learn
            they'll always get a turn, so they stay switched on. The quiet ones learn they can fly under
            the radar, so they switch off. And once a student believes they won't be called on,
            engagement quietly drains away — which is the opposite of what calling on students is meant
            to achieve.
          </p>
        </section>

        {/* Methods */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            A few ways teachers tackle it
          </h2>
          <p className="mb-6">
            There's no single right answer, and most teachers end up mixing a few of these depending
            on the day and the class.
          </p>
          <div className="space-y-4">
            {methods.map((m) => (
              <div key={m.title} className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{m.emoji}</span>
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm">{m.title}</h3>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{m.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Repeats problem */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            The catch most random pickers miss: repeats
          </h2>
          <p className="mb-4">
            Here's the problem with most digital pickers, and even with the lolly-stick jar if you drop
            the names back in. A purely random pick can land on the same student twice in a row — or
            call on three students while skipping a quarter of the class entirely. To a child keeping
            score (and they always keep score), that doesn't feel random. It feels like favouritism,
            and you're right back to "you never pick me."
          </p>
          <p className="mb-4">
            What you actually want isn't pure randomness. It's <strong>fair randomness</strong> — a
            system that makes sure everyone gets a turn before anyone gets a second one.
          </p>
          <p className="mb-6">
            That's exactly the gap our{' '}
            <Link href="/random-name-picker" className="text-violet-600 dark:text-violet-400 hover:underline font-medium">
              name picker wheel
            </Link>{' '}
            is built to fill. You can turn on a mode that removes each student after they're picked,
            so the wheel works its way through your whole class without repeats. Every child gets
            called on once before the cycle starts again — which means no one can claim they were
            skipped, and no one gets put on the spot twice while a classmate sits untouched. When
            you've been right through the list, you reset and go again.
          </p>

          {/* Feature list */}
          <p className="mb-4 font-medium text-gray-800 dark:text-gray-200">
            A few things that make it practical for real classrooms:
          </p>
          <ul className="space-y-3 mb-4">
            {features.map((f) => (
              <li key={f.title} className="flex gap-3 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 px-4 py-3">
                <span className="flex-none mt-0.5 w-4 h-4 rounded-full bg-violet-100 dark:bg-violet-900/40 flex items-center justify-center">
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <path d="M1.5 4L3 5.5L6.5 2" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                  <strong className="text-gray-800 dark:text-gray-200 font-semibold">{f.title}.</strong>{' '}
                  {f.body}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* How to use it */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            How to use it without it feeling gimmicky
          </h2>
          <p className="mb-6">
            A spinning wheel is fun, but like any classroom tool it works best with a little intention
            behind it.
          </p>
          <div className="space-y-4">
            {tips.map((tip) => (
              <div key={tip.title} className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{tip.emoji}</span>
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm">{tip.title}</h3>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{tip.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            The bottom line
          </h2>
          <p className="mb-4">
            Calling on students fairly isn't about having perfect willpower to track who you've picked
            — it's about taking that mental load off yourself so you can focus on teaching. A name
            picker that genuinely spreads turns evenly does the remembering for you, keeps the whole
            class engaged because nobody can predict who's next, and quietly puts an end to "you never
            pick me."
          </p>
          <p className="mb-8">
            The{' '}
            <Link href="/random-name-picker" className="text-violet-600 dark:text-violet-400 hover:underline font-medium">
              random name picker wheel
            </Link>{' '}
            is free, works on school devices, and lets you turn on no-repeat mode so every student gets
            a fair turn. Spin it once and you'll see why a little visible randomness goes a long way in
            a classroom.
          </p>
          <div className="text-center">
            <Link
              href="/random-name-picker"
              className="inline-block bg-violet-600 hover:bg-violet-700 text-white font-bold px-8 py-3 rounded-full shadow transition-colors"
            >
              Try the Free Name Picker →
            </Link>
          </div>
        </section>

        {/* Related */}
        <section>
          <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-500 uppercase tracking-wide mb-4">
            Related articles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/blog/random-name-picker-teacher" className="block bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-4 hover:border-violet-400 dark:hover:border-violet-600 transition-colors group">
              <div className="text-xl mb-1">🎓</div>
              <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                Random Name Picker for Teachers
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">The complete classroom guide.</p>
            </Link>
            <Link href="/blog/classroom-wheel-spinner" className="block bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-4 hover:border-violet-400 dark:hover:border-violet-600 transition-colors group">
              <div className="text-xl mb-1">🏫</div>
              <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                Classroom Wheel Spinner
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">5 activity ideas you can try this week.</p>
            </Link>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 py-6 text-center text-xs text-gray-400 dark:text-gray-600 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 px-4">
        <Link href="/" className="hover:text-violet-500 transition-colors">Home</Link>
        <span aria-hidden="true">·</span>
        <Link href="/blog" className="hover:text-violet-500 transition-colors">Blog</Link>
        <span aria-hidden="true">·</span>
        <Link href="/classroom" className="hover:text-violet-500 transition-colors">Classroom</Link>
        <span aria-hidden="true">·</span>
        <Link href="/spin-the-wheel" className="hover:text-violet-500 transition-colors">Spin the Wheel</Link>
        <span aria-hidden="true">·</span>
        <Link href="/about" className="hover:text-violet-500 transition-colors">About</Link>
        <span aria-hidden="true">·</span>
        <Link href="/privacy" className="hover:text-violet-500 transition-colors">Privacy Policy</Link>
        <span aria-hidden="true">·</span>
        <Link href="/terms" className="hover:text-violet-500 transition-colors">Terms</Link>
      </footer>
    </div>
  );
}
