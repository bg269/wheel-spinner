import Link from 'next/link';

const POSTS = [
  {
    slug: 'truth-or-dare-wheel',
    emoji: '🎭',
    tag: 'Games & Fun',
    title: 'Truth or Dare Wheel – The Ultimate Setup Guide',
    description:
      '50+ truth questions and dare ideas organised by intensity, plus five game variations and tips for running the best game night. Set up in seconds with a free wheel spinner.',
    date: 'June 2025',
    readTime: '9 min read',
  },
  {
    slug: 'birthday-party-wheel-games',
    emoji: '🎂',
    tag: 'Parties',
    title: 'Birthday Party Wheel Games – 10 Ideas for Every Age',
    description:
      'Ten birthday party wheel games for kids, teens, and adults — from prize spinners and dance challenges to forfeit wheels and destination pickers. Setup guide for each.',
    date: 'June 2025',
    readTime: '7 min read',
  },
  {
    slug: 'drinking-game-wheel',
    emoji: '🎰',
    tag: 'Adults (18+)',
    title: 'Drinking Game Wheel – Rules, Ideas & Setup Guide',
    description:
      '50+ drinking wheel rules, four game variations, a non-alcoholic version for mixed groups, and responsible play guidance. Everything you need for adult game night.',
    date: 'June 2025',
    readTime: '7 min read',
  },
  {
    slug: 'decision-wheel-maker',
    emoji: '🎯',
    tag: 'Decisions',
    title: 'Decision Wheel Maker – How to Build and Use One',
    description:
      'The psychology of why randomness helps decisions, when a decision wheel actually works, how to build one correctly, and eight real-world use cases with example entries.',
    date: 'June 2025',
    readTime: '6 min read',
  },
  {
    slug: 'best-wheel-spinner-comparison',
    emoji: '🏆',
    tag: 'Tools',
    title: 'Best Wheel Spinner Tools – Honest Comparison for 2025',
    description:
      'What actually matters in a free wheel spinner, a feature comparison table, and recommendations by use case — classrooms, parties, and business teams.',
    date: 'June 2025',
    readTime: '7 min read',
  },
  {
    slug: 'classroom-wheel-spinner',
    emoji: '🎓',
    tag: 'Classroom',
    title: 'Classroom Wheel Spinner – Engage Your Students Better',
    description:
      'How teachers use a classroom wheel spinner for random student selection. A practical guide covering setup, five activity ideas, and why random picking makes your whole class pay closer attention.',
    date: 'June 2025',
    readTime: '6 min read',
  },
  {
    slug: 'random-name-picker-teacher',
    emoji: '👤',
    tag: 'Teachers',
    title: 'Random Name Picker for Teachers – Complete Guide',
    description:
      'The complete teacher guide to random name picking: why the same hands go up every time, how a random picker fixes it, and practical tips for building it into your everyday lessons.',
    date: 'June 2025',
    readTime: '7 min read',
  },
  {
    slug: 'calling-on-students-fairly',
    emoji: '🙋',
    tag: 'Teachers',
    title: 'How to Call on Students Fairly (Without Anyone Saying "You Never Pick Me")',
    description:
      'Why fair participation is harder than it looks, the four most common approaches teachers use, and how no-repeat random selection puts an end to "you never pick me" for good.',
    date: 'June 2025',
    readTime: '5 min read',
  },
  {
    slug: 'brain-breaks-quick-classroom-activities',
    emoji: '🧠',
    tag: 'Teachers',
    title: 'Brain Breaks: 10 Quick Activities to Reset a Restless Class',
    description:
      'Ten brain break activities that work in under two minutes, why they prevent attention from sliding, and how a brain break wheel makes choosing one effortless.',
    date: 'June 2025',
    readTime: '5 min read',
  },
  {
    slug: 'spin-the-wheel-game-ideas',
    emoji: '🎡',
    tag: 'Games & Fun',
    title: 'How to Spin the Wheel – Game Ideas and Fun Uses',
    description:
      'History of the spinning wheel, modern uses across parties, classrooms, and business, plus game ideas with setup guides for every occasion.',
    date: 'June 2025',
    readTime: '8 min read',
  },
];

export default function BlogIndexPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">

      {/* Header */}
      <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-violet-600 dark:text-violet-400 hover:text-violet-700 transition-colors text-sm font-medium"
          >
            ← Spin The Choice
          </Link>
          <nav className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
            <Link href="/classroom" className="hover:text-violet-500 transition-colors">Classroom</Link>
            <Link href="/spin-the-wheel" className="hover:text-violet-500 transition-colors">Spin the Wheel</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Blog
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm max-w-xl">
            Guides, ideas, and tips for teachers and anyone who wants to make better decisions —
            one spin at a time.
          </p>
        </div>
      </div>

      {/* Post list */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="space-y-6">
          {POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex gap-5 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 hover:border-violet-400 dark:hover:border-violet-600 hover:shadow-sm transition-all"
            >
              <span className="flex-none text-4xl leading-none mt-1">{post.emoji}</span>
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-semibold text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-900/30 px-2 py-0.5 rounded-full">
                    {post.tag}
                  </span>
                  <span className="text-xs text-gray-400 dark:text-gray-600">{post.date}</span>
                  <span className="text-xs text-gray-400 dark:text-gray-600">·</span>
                  <span className="text-xs text-gray-400 dark:text-gray-600">{post.readTime}</span>
                </div>
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {post.description}
                </p>
                <span className="mt-3 inline-block text-xs font-medium text-violet-600 dark:text-violet-400 group-hover:underline">
                  Read article →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 bg-violet-50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-800 rounded-2xl p-8 text-center">
          <div className="text-4xl mb-3">🎡</div>
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
            Ready to try the wheel?
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-5 max-w-sm mx-auto">
            Free, instant, no account needed. Add your names or options and start spinning
            in under a minute.
          </p>
          <Link
            href="/"
            className="inline-block bg-violet-600 hover:bg-violet-700 text-white font-bold px-8 py-3 rounded-full shadow transition-colors"
          >
            Open Spin The Choice →
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 py-6 text-center text-xs text-gray-400 dark:text-gray-600 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 px-4">
        <Link href="/" className="hover:text-violet-500 transition-colors">Home</Link>
        <span aria-hidden="true">·</span>
        <Link href="/classroom" className="hover:text-violet-500 transition-colors">Classroom</Link>
        <span aria-hidden="true">·</span>
        <Link href="/spin-the-wheel" className="hover:text-violet-500 transition-colors">Spin the Wheel</Link>
        <span aria-hidden="true">·</span>
        <Link href="/gallery" className="hover:text-violet-500 transition-colors">Gallery</Link>
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
