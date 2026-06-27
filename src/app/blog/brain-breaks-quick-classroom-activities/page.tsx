import Link from 'next/link';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Brain Breaks: 10 Quick Activities to Reset a Restless Class',
  description:
    'Ten brain break activities that take under two minutes, why they work, and how a brain break wheel makes choosing one effortless.',
  url: 'https://spinthechoice.com/blog/brain-breaks-quick-classroom-activities',
  datePublished: '2025-06-27',
  dateModified: '2025-06-27',
  author: { '@type': 'Organization', name: 'Spin The Choice' },
  publisher: { '@type': 'Organization', name: 'Spin The Choice', url: 'https://spinthechoice.com' },
};

const activities = [
  { n: '1',  name: 'Ten star jumps',       body: 'The classic for a reason. Gets blood moving and shakes off the wriggles in under thirty seconds.' },
  { n: '2',  name: 'Dance party',           body: 'Thirty seconds of a familiar song and everyone moves how they like. High energy, big reset.' },
  { n: '3',  name: 'Stretch it out',        body: 'Reach for the ceiling, touch your toes, roll the shoulders. Calming, and good for classes that have been hunched over desks.' },
  { n: '4',  name: 'Simon Says',            body: 'Sneaks in listening and self-control while feeling like a game. No prep, endlessly repeatable.' },
  { n: '5',  name: 'Five deep breaths',     body: 'A calming break for an over-excited room. Breathe in for four counts, out for four. Surprisingly powerful for settling.' },
  { n: '6',  name: 'Shake it out',          body: 'Shake each limb in turn — right arm, left arm, right leg, left leg — counting down from ten. Silly, quick, effective.' },
  { n: '7',  name: 'Quick doodle',          body: 'Sixty seconds to draw whatever they like on scrap paper. A quiet, low-key reset for after something intense.' },
  { n: '8',  name: 'Desk drumming',         body: 'A simple rhythm everyone copies and builds on. Channels restless energy into something focused.' },
  { n: '9',  name: 'Silly walk on the spot', body: 'Marching, tiptoeing, robot legs — on the spot so no one leaves their space. Laughter guaranteed.' },
  { n: '10', name: 'Eye rest',              body: 'Look out the window or at the farthest point in the room for thirty seconds. Rests tired eyes and gives a genuine mental pause — lovely after screen work.' },
];

const tips = [
  {
    n: '1',
    title: 'Use them proactively',
    body: 'Build a break into long lessons before focus drops, rather than waiting for the class to lose it.',
  },
  {
    n: '2',
    title: 'Match the energy to the need',
    body: 'A wound-up class after lunch needs a calming break (deep breaths, eye rest); a sluggish post-assembly class needs movement (star jumps, dance party).',
  },
  {
    n: '3',
    title: 'Keep them short and clear',
    body: "One to two minutes, with an obvious start and finish, so the break doesn't become the new distraction.",
  },
  {
    n: '4',
    title: 'Make the return part of the routine',
    body: 'A simple signal — a countdown, a clap pattern — to bring everyone back tells students the break has a clear end.',
  },
];

const wheelFeatures = [
  {
    bold: "It's free, with no login or sign-up",
    rest: "— which matters on school devices and shared Chromebooks where you can't install anything or make accounts.",
  },
  {
    bold: 'Fullscreen mode',
    rest: 'lets you project the wheel big on the board so the whole class can watch the spin.',
  },
  {
    bold: 'You can edit the activities',
    rest: "to match your class — swap in your own favourites, your school's movement breaks, or calmer options for after lunch.",
  },
  {
    bold: 'Save your own list',
    rest: "so your customised set of brain breaks is waiting for you next time, no retyping.",
  },
];

export default function BrainBreaksPost() {
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
            Brain Breaks: 10 Quick Activities to Reset a Restless Class
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed max-w-2xl">
            You can feel it before you can name it. The fidgeting starts, eyes drift to the window,
            someone asks to go to the toilet for the third time, and the lesson you carefully planned
            is sliding away from you. The class isn't being naughty — they're full. Their attention
            tank has run dry, and no amount of "eyes to the front" is going to refill it.
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

        {/* Intro continuation */}
        <section>
          <p>
            That's where brain breaks come in. A brain break is a short, deliberate pause — usually one
            to five minutes — that lets students move, reset, and come back ready to focus. They're not
            a reward or a time-filler; they're a tool, backed by what we know about how attention works.
            Young brains simply can't concentrate indefinitely, and a quick break often recovers more
            learning time than it costs. Here are ten that work, plus an easy way to make choosing one
            effortless.
          </p>
        </section>

        {/* Why they work */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Why brain breaks actually work
          </h2>
          <p className="mb-4">
            Attention isn't a tap you can leave running. It comes in bursts, and the younger the student,
            the shorter the burst. When you push past that natural limit, you don't get more learning —
            you get restlessness, off-task behaviour, and information that doesn't stick. A brain break
            interrupts that slide. A burst of movement or a moment of calm gives the brain a chance to
            consolidate what it's just taken in and clears the way for what's next.
          </p>
          <p>
            The trick is to use them <em>before</em> the class falls apart, not after. Once a room has
            tipped into chaos, a brain break feels like a reward for losing focus. Used proactively —
            say, partway through a long task or at the transition between two demanding activities —
            they keep the class on the right side of that line.
          </p>
        </section>

        {/* 10 activities */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            10 brain breaks that take under two minutes
          </h2>
          <p className="mb-6 text-gray-600 dark:text-gray-400">
            You don't need equipment or a cleared space for most of these. Pick the energy level that
            suits the moment — some wind a class up, others bring them down.
          </p>
          <ol className="space-y-3">
            {activities.map((a) => (
              <li
                key={a.n}
                className="flex gap-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 px-4 py-3"
              >
                <span className="flex-none w-7 h-7 rounded-full bg-violet-100 dark:bg-violet-900/40 text-violet-600 dark:text-violet-400 font-bold text-xs flex items-center justify-center mt-0.5">
                  {a.n}
                </span>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  <strong className="font-semibold text-gray-800 dark:text-gray-200">{a.name}.</strong>{' '}
                  {a.body}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* The hard part */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            The hard part isn't the break — it's choosing one
          </h2>
          <p className="mb-4">
            Here's the catch every teacher knows: in the moment, when the class is fraying and you've
            got thirty pairs of eyes on you, the <em>last</em> thing you want is to stand there deciding
            which brain break to do. Decision fatigue is real, and it always strikes at the worst time.
          </p>
          <p className="mb-4">
            That's exactly what a brain break wheel solves. Instead of choosing, you spin — and the
            wheel picks for you. It takes the decision off your plate, and there's a bonus: students{' '}
            <em>love</em> the suspense of the spin, so the wheel itself becomes part of the fun. No
            groaning about which activity, no accusations of favourites — the wheel decided, fair and
            square.
          </p>
          <p className="mb-5">
            We've put together a ready-to-use{' '}
            <Link href="/brain-break-wheel" className="text-violet-600 dark:text-violet-400 hover:underline font-medium">
              brain break wheel
            </Link>{' '}
            preloaded with activities like the ones above. Spin it and go. A few things that make it
            practical for a real classroom:
          </p>
          <ul className="space-y-2">
            {wheelFeatures.map((item, i) => (
              <li
                key={i}
                className="flex gap-3 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 px-4 py-3"
              >
                <span className="flex-none mt-2 w-1.5 h-1.5 rounded-full bg-violet-500 dark:bg-violet-400" />
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  <strong className="font-semibold text-gray-800 dark:text-gray-200">{item.bold}</strong>{' '}
                  {item.rest}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* Tips */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            A few tips for using brain breaks well
          </h2>
          <ol className="space-y-4">
            {tips.map((tip) => (
              <li
                key={tip.n}
                className="flex gap-4 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5"
              >
                <span className="flex-none w-8 h-8 rounded-full bg-violet-100 dark:bg-violet-900/40 text-violet-600 dark:text-violet-400 font-bold text-sm flex items-center justify-center">
                  {tip.n}
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">{tip.title}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{tip.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Bottom line / CTA */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            The bottom line
          </h2>
          <p className="mb-4">
            Brain breaks aren't lost time — they're how you <em>get time back</em>. A restless class
            doesn't learn, and pushing through rarely works. A quick, deliberate reset brings students
            back sharper than they left, and taking the choice of <em>which</em> break out of your
            hands makes them effortless to actually use.
          </p>
          <p className="mb-8">
            If you'd like a ready-made one, the{' '}
            <Link href="/brain-break-wheel" className="text-violet-600 dark:text-violet-400 hover:underline font-medium">
              brain break wheel
            </Link>{' '}
            is free, works on school devices, projects to the board, and lets you save your own set of
            activities. Spin it the next time your class needs a reset and see how quickly the room
            comes back to you.
          </p>
          <div className="text-center">
            <Link
              href="/brain-break-wheel"
              className="inline-block bg-violet-600 hover:bg-violet-700 text-white font-bold px-8 py-3 rounded-full shadow transition-colors"
            >
              Try the Free Brain Break Wheel →
            </Link>
          </div>
        </section>

        {/* Related articles */}
        <section>
          <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-500 uppercase tracking-wide mb-4">
            Related articles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/blog/calling-on-students-fairly"
              className="block bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-4 hover:border-violet-400 dark:hover:border-violet-600 transition-colors group"
            >
              <div className="text-xl mb-1">🙋</div>
              <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                How to Call on Students Fairly
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">End "you never pick me" for good.</p>
            </Link>
            <Link
              href="/blog/classroom-wheel-spinner"
              className="block bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-4 hover:border-violet-400 dark:hover:border-violet-600 transition-colors group"
            >
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
