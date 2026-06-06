import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about Spin The Choice — the free online wheel spinner for classrooms, giveaways, game nights, and random decision making. Discover use cases, features, and FAQs.',
  robots: { index: true, follow: true },
};

const USE_CASES = [
  {
    emoji: '🎓',
    title: 'Classroom Name Picker',
    description:
      'Teachers love Spin The Choice for picking random students to answer questions, choosing who goes first in a presentation, or selecting reading partners. Add your class roster once, then spin every lesson. The colorful wheel keeps students engaged and makes being picked feel fun rather than intimidating.',
    keywords: 'classroom name picker, random student selector, teacher wheel spinner',
  },
  {
    emoji: '🎁',
    title: 'Giveaway & Contest Spinner',
    description:
      'Running a giveaway on social media or at an event? Add all the entrants to the wheel and spin live for a transparent, exciting result your audience can watch in real time. Share the link so anyone can verify the draw is fair. Perfect for Instagram giveaways, raffle draws, and prize competitions.',
    keywords: 'giveaway spinner, raffle picker, contest random selector',
  },
  {
    emoji: '🍕',
    title: 'Decision Maker',
    description:
      'Can\'t decide what to have for dinner? Where to go on the weekend? Which movie to watch? Add your options to the wheel and let fate decide. Our "Dinner Ideas" template comes pre-loaded with 20 popular meal options so you can start spinning immediately.',
    keywords: 'online decision maker, random choice picker, what to eat spinner',
  },
  {
    emoji: '🎲',
    title: 'Game Night Randomiser',
    description:
      'Add your game collection to the wheel and spin to decide what to play tonight. Or use it inside games — spin to pick teams, assign roles in a murder mystery, or choose dare topics. The Game Night template includes Charades, Codenames, Catan, and more.',
    keywords: 'game night wheel, random game picker, party activity selector',
  },
  {
    emoji: '💼',
    title: 'Team & Meeting Tools',
    description:
      'Meeting facilitators use Spin The Choice to randomly assign discussion topics, pick who takes notes, or choose which team presents first. Add your team members, spin, and keep every meeting fair and unpredictable.',
    keywords: 'team randomiser, meeting facilitator tool, random team picker',
  },
  {
    emoji: '🏋️',
    title: 'Workout & Challenge Picker',
    description:
      'Personal trainers and fitness enthusiasts add exercises to the wheel to randomise workout routines. Add burpees, push-ups, planks, and squats — then spin between sets to keep training varied and fun.',
    keywords: 'workout randomiser, exercise picker, fitness challenge wheel',
  },
];

const FEATURES = [
  { icon: '🎨', title: 'Fully customisable', body: 'Change the colour of every segment individually using the built-in colour picker. Make your wheel match your brand, classroom theme, or event colours.' },
  { icon: '🔊', title: 'Sound effects', body: 'Satisfying tick sounds build anticipation as the wheel slows, followed by a cheer when the winner is revealed. Adjust the volume or switch to silent mode.' },
  { icon: '🌙', title: 'Dark mode', body: 'Easy on the eyes for evening game nights or low-light classrooms. Automatically matches your system preference or toggle manually.' },
  { icon: '🔗', title: 'Shareable links', body: 'Every wheel generates a unique shareable URL. Send it to students, contestants, or friends so they can spin the same wheel from any device.' },
  { icon: '📋', title: 'Templates', body: 'Jump-start your wheel with built-in templates: Classroom (30 student names), Dinner Ideas, Movie Picker, and Game Night.' },
  { icon: '📱', title: 'Works on any device', body: 'Fully responsive — spin on your phone at an event, your tablet in the classroom, or your desktop at home. No app download needed.' },
];

const FAQS = [
  {
    q: 'Is Spin The Choice really free?',
    a: 'Yes, completely free. There are no hidden fees, no sign-up required, and no limits on the number of spins. We display advertisements to keep the service free.',
  },
  {
    q: 'How many items can I add to the wheel?',
    a: 'There is no hard limit. The wheel works well with up to around 30 items and remains readable. Beyond that, text labels become very small, but the wheel continues to work correctly.',
  },
  {
    q: 'Is the spin result truly random?',
    a: 'Yes. Each spin uses the browser\'s built-in Math.random() function and then adds a random number of additional full rotations (6–9 extra full spins) so the outcome cannot be predicted or gamed.',
  },
  {
    q: 'Does my wheel data get saved anywhere?',
    a: 'No. Your wheel data lives entirely in your browser. When you use the Share feature, the entries are encoded directly into the URL — nothing is stored in a database. Closing the tab will clear your wheel.',
  },
  {
    q: 'Can I use this in my classroom?',
    a: 'Absolutely — it was designed with teachers in mind. The Classroom template includes 30 common student names to get you started. Because no data is sent to any server, it is safe to use with student names in compliance with most school data policies.',
  },
  {
    q: 'Can I remove the winner after spinning?',
    a: 'Yes. After the winner is revealed, click "Remove & Spin Again" to eliminate that entry from the wheel and spin immediately with the remaining items. Great for elimination rounds and sequential draws.',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">

      {/* Header */}
      <header className="sticky top-0 z-20 border-b border-gray-200/60 dark:border-gray-800/60 bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <span className="text-2xl leading-none">🎡</span>
            <span className="font-bold text-gray-900 dark:text-white tracking-tight text-lg group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
              Spin The Choice
            </span>
          </Link>
          <Link href="/" className="text-sm font-semibold text-violet-600 dark:text-violet-400 hover:underline">
            ← Back to spinner
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 flex flex-col gap-16">

        {/* Hero */}
        <section className="text-center">
          <div className="text-6xl mb-6">🎡</div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
            About Spin The Choice
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Spin The Choice is a free, beautiful online wheel spinner for random decisions, classroom
            name picking, giveaways, game nights, and anything else where you need a fair, random result.
            No sign-up. No download. Just spin.
          </p>
          <div className="mt-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-2xl bg-violet-600 hover:bg-violet-500 text-white font-bold text-lg transition-colors shadow-lg shadow-violet-500/25"
            >
              🎡 Try it now — it's free
            </Link>
          </div>
        </section>

        {/* Use cases */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            How people use Spin The Choice
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-8">
            From classrooms to boardrooms, here are the most popular ways our wheel spinner gets used every day.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {USE_CASES.map((uc) => (
              <article
                key={uc.title}
                className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm"
              >
                <div className="text-3xl mb-3">{uc.emoji}</div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{uc.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{uc.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Features */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Features</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-8">
            Everything you need for a fair, fun, and flexible spin.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5 shadow-sm"
              >
                <div className="text-2xl mb-2">{f.icon}</div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">{f.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-8">
            Everything you need to know about Spin The Choice.
          </p>
          <div className="flex flex-col gap-4">
            {FAQS.map((faq) => (
              <div
                key={faq.q}
                className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm"
              >
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{faq.q}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-violet-50 dark:bg-violet-950/30 rounded-3xl border border-violet-200 dark:border-violet-800 p-10">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
            Ready to spin?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Add your names or options and get a random result in seconds. Free, forever.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-2xl bg-violet-600 hover:bg-violet-500 text-white font-bold text-lg transition-colors"
          >
            Start spinning →
          </Link>
        </section>

      </main>

      <footer className="text-center py-6 text-xs text-gray-400 dark:text-gray-700 border-t border-gray-200 dark:border-gray-800 mt-4">
        <Link href="/" className="hover:text-violet-500 transition-colors">Spin The Choice</Link>
        {' · '}
        <Link href="/privacy" className="hover:text-violet-500 transition-colors">Privacy Policy</Link>
        {' · '}
        <Link href="/about" className="hover:text-violet-500 transition-colors">About</Link>
      </footer>
    </div>
  );
}
