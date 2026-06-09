import Link from 'next/link';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: '15 Spin the Wheel Game Ideas for Parties, Classrooms & Online',
  description:
    'Creative spin the wheel game ideas for every occasion — parties, classrooms, ice-breakers, and virtual team events.',
  url: 'https://spinthechoice.com/blog/spin-the-wheel-game-ideas',
  datePublished: '2025-06-01',
  dateModified: '2025-06-01',
  author: { '@type': 'Organization', name: 'Spin The Choice' },
  publisher: {
    '@type': 'Organization',
    name: 'Spin The Choice',
    url: 'https://spinthechoice.com',
  },
};

const GAMES = [
  {
    n: 1,
    emoji: '🎭',
    title: 'Truth or Dare Wheel',
    tag: 'Parties',
    body: 'Create two wheels — one with names, one with "Truth" and "Dare" entries. Spin the name wheel to pick a player, then spin the truth/dare wheel to choose their fate. Add a third "Double Dare" segment for extra stakes. Works brilliantly for teen parties, hen dos, and stag nights where the host wants to keep things moving without playing favourites.',
    setup: 'Wheel 1: player names. Wheel 2: Truth · Dare · Double Dare · Wild Card.',
  },
  {
    n: 2,
    emoji: '🧠',
    title: 'Classroom Quiz Spinner',
    tag: 'Classrooms',
    body: "Load your class register into the wheel and use it during a revision session. Ask a question, then spin the wheel to pick who answers. The tension of watching the wheel slow toward their name is far more engaging than the teacher pointing at someone. Bonus: you can add topics to a second wheel and spin that first to choose the question category.",
    setup: 'Wheel 1: student names. Wheel 2: topic categories (optional).',
  },
  {
    n: 3,
    emoji: '🍕',
    title: 'Dinner Decision Spinner',
    tag: 'Family & Friends',
    body: 'Add six to ten of your favourite restaurants or cuisines and let the wheel end the eternal "I don\'t mind, what do you want?" loop. For added fun, everyone adds one option they\'re secretly hoping lands — the resulting wheel reflects the group\'s actual tastes rather than whoever speaks first. Bookmark the link so the wheel is ready every Friday night.',
    setup: 'Add 6–10 restaurants or cuisines. Bookmark the share link.',
  },
  {
    n: 4,
    emoji: '🎁',
    title: 'Prize Wheel Giveaway',
    tag: 'Events & Streaming',
    body: "Streamers and event hosts use a prize wheel to run giveaways transparently. Add all entrants to the wheel, share the link so your audience can see the full list, then spin live. The loser entries are visible to everyone, which makes the win feel legitimate. After spinning, remove the winner and spin again for second place without having to rebuild anything.",
    setup: 'Add entrant names → share link with audience → spin live → remove winner → repeat.',
  },
  {
    n: 5,
    emoji: '🤔',
    title: 'Yes or No Spinner',
    tag: 'Quick Decisions',
    body: 'A two-entry wheel with "Yes" and "No" is surprisingly useful. Use it when you\'re genuinely torn and need an external nudge to commit. The trick is noticing your reaction in the half-second after the result: if you feel relieved, that\'s the answer you actually wanted. If you feel disappointed, you already knew the other choice was right. The wheel just makes your gut feeling visible.',
    setup: 'Entries: Yes · No · Maybe (optional). Or add weighted entries: 3× Yes + 1× No for a 75% yes bias.',
  },
  {
    n: 6,
    emoji: '🎬',
    title: 'Movie Night Picker',
    tag: 'Family & Friends',
    body: "Each person adds one or two films they want to watch and no one is allowed to veto the wheel's pick — those are the rules. It removes the paralysis of infinite choice and the social awkwardness of overruling someone's suggestion. Add a \"Rewatch a favourite\" entry for nights when inspiration fails.",
    setup: 'Each person adds 1–2 films. Include one wild card like "Pick from Top 10 on Netflix".',
  },
  {
    n: 7,
    emoji: '🧊',
    title: 'Ice-Breaker Question Wheel',
    tag: 'Meetings & Events',
    body: 'Pre-load a wheel with ice-breaker questions — "What\'s your unpopular opinion?", "If you could only eat one food forever?", "What\'s something surprising about you?" — and use it at the start of a meeting, workshop, or team event. Spin to pick the question, then spin the name wheel to pick who answers. Takes two minutes and breaks the silence far better than a round-robin.',
    setup: 'One wheel: 8–12 ice-breaker questions. Second wheel: attendee names.',
  },
  {
    n: 8,
    emoji: '🏋️',
    title: 'Workout Exercise Roulette',
    tag: 'Fitness',
    body: "Add exercises to the wheel — push-ups, squats, burpees, plank, jumping jacks, lunges — and spin before each round of a circuit. It removes the boredom of predictable workouts and introduces genuine variety. For a group class, spin to pick both the exercise and the person who demonstrates it. Add a \"Rest\" entry if you\'re feeling merciful.",
    setup: 'Entries: 8–12 exercises + 1× Rest. Optional second wheel: player names.',
  },
  {
    n: 9,
    emoji: '🌍',
    title: 'Travel Destination Spinner',
    tag: 'Travel',
    body: "Shortlist five to eight destinations you'd genuinely be happy visiting, then spin the wheel to pick where you're going. It sounds gimmicky but it works — when you've already pre-filtered the list to places you'd enjoy, the random pick removes the decision fatigue of comparing flights and hotels across too many options. The wheel commits you.",
    setup: 'Add 5–8 destinations you\'d actually be happy visiting. Spin once; commit to the result.',
  },
  {
    n: 10,
    emoji: '🎨',
    title: 'Creative Prompt Wheel',
    tag: 'Art & Writing',
    body: "Writers and artists use prompt wheels to break through creative blocks. Add ten to twenty prompts — genres, settings, characters, opening lines, colour palettes, art styles — and spin whenever you don't know where to start. The randomness forces you into territory you wouldn't have chosen deliberately, which is often exactly where the most interesting work happens.",
    setup: 'Entries: prompts, themes, or constraints. Spin at the start of each creative session.',
  },
  {
    n: 11,
    emoji: '🧹',
    title: 'Chore Assignment Wheel',
    tag: 'Home',
    body: "Add household chores and family member names to separate wheels — or combine them into one wheel with paired entries like \"Alex: vacuuming\" — then spin each week to assign jobs. No more negotiations about who does what. The perceived fairness of a random draw reduces friction significantly, especially with kids who are convinced they always get the worst jobs.",
    setup: 'Option A: one wheel with "Name: Chore" pairs. Option B: spin name wheel then chore wheel.',
  },
  {
    n: 12,
    emoji: '🕹️',
    title: 'Forfeit Wheel for Games',
    tag: 'Game Nights',
    body: 'Add a forfeit wheel to any game you play that already has winners and losers. The loser of each round spins for their consequence: "Sing a song", "Do 10 press-ups", "Tell an embarrassing story", "Miss next turn". It adds a second layer of stakes without requiring you to come up with forfeits on the spot, and makes losing almost as entertaining as winning.',
    setup: 'Entries: 8–12 forfeits, ranging from easy to ridiculous. Spin after each round.',
  },
  {
    n: 13,
    emoji: '💻',
    title: 'Virtual Team Meeting Icebreaker',
    tag: 'Remote Work',
    body: "Remote teams often struggle with the awkward silence at the start of a video call. Share the wheel link in your meeting chat before it begins — add everyone's name and a set of fun questions or mini-challenges — then spin at the top of the call. \"Ryan has to answer: what\'s your worst tech fail?\" It takes 90 seconds and sets a human tone for the rest of the meeting.",
    setup: 'Share the wheel link in chat pre-meeting. Add names + questions. Spin to open the call.',
  },
  {
    n: 14,
    emoji: '📚',
    title: 'Book Club Picker',
    tag: 'Reading Groups',
    body: 'Each member of the book club adds a nomination to the wheel — one title per person. Spin to pick next month\'s read. It\'s equitable (everyone gets a nomination), efficient (the decision takes ten seconds), and eliminates the social pressure of pushing your favourite when others aren\'t enthusiastic. Add a "Free choice" entry for months when the group wants to self-select.',
    setup: 'One entry per member. Spin to pick each month\'s book. Remove the winner until everyone has had a pick.',
  },
  {
    n: 15,
    emoji: '🎓',
    title: 'Presentation Order Randomiser',
    tag: 'Classrooms & Work',
    body: "Whether it's a student presenting a project or a team member demoing their work, spinning a wheel to determine the order removes the bias of volunteering first (easiest slot) versus going last (most pressure). Load the names, spin before the session starts, and announce the order. Everyone knows the result was fair, which reduces complaints about running order significantly.",
    setup: 'Load all presenter names. Spin once per name in sequence. Screenshot or note the order.',
  },
];

export default function SpinTheWheelGameIdeasPage() {
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
            className="text-violet-600 dark:text-violet-400 hover:text-violet-700 transition-colors text-sm font-medium"
          >
            ← Back to Spin The Choice
          </Link>
        </div>
      </header>

      {/* Hero */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
          <div className="flex items-center gap-2 text-xs text-violet-600 dark:text-violet-400 font-medium mb-3 uppercase tracking-wide">
            <Link href="/blog" className="hover:underline">Blog</Link>
            <span>›</span>
            <span>Game Ideas</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            15 Spin the Wheel Game Ideas for Parties, Classrooms &amp; Online
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed max-w-2xl">
            A wheel spinner isn't just for picking names — it's a full game engine. Here are
            fifteen creative ways to spin the wheel for parties, classrooms, team events, and
            quiet evenings in. Each idea includes a setup guide so you can build the wheel in
            under a minute.
          </p>
          <div className="mt-4 flex items-center gap-3 text-xs text-gray-400 dark:text-gray-600">
            <span>June 2025</span>
            <span>·</span>
            <span>8 min read</span>
            <span>·</span>
            <span>Spin The Choice</span>
          </div>
        </div>
      </div>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12">

        {/* Game list */}
        <div className="space-y-8">
          {GAMES.map((game) => (
            <article
              key={game.n}
              className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6"
            >
              <div className="flex items-start gap-4">
                <span className="flex-none text-3xl">{game.emoji}</span>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-semibold text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-900/30 px-2 py-0.5 rounded-full">
                      {game.tag}
                    </span>
                    <span className="text-xs text-gray-400 dark:text-gray-600">#{game.n}</span>
                  </div>
                  <h2 className="text-base font-bold text-gray-900 dark:text-white mb-2">
                    {game.title}
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                    {game.body}
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg px-4 py-2 text-xs text-gray-500 dark:text-gray-400">
                    <span className="font-semibold text-gray-700 dark:text-gray-300">Setup: </span>
                    {game.setup}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Closing thoughts */}
        <section className="mt-12 space-y-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            The secret to a good spin the wheel game
          </h2>
          <p>
            The best wheel games share one quality: the entries are curated just enough that
            any result is a good one. A truth or dare wheel with terrible dares stops being
            fun after the first spin. A dinner wheel where someone added a restaurant no one
            likes creates conflict rather than resolving it.
          </p>
          <p>
            Spend 60 seconds agreeing on the entries before you spin and the wheel becomes
            a genuine decision engine. Everyone who contributed an entry has already
            consented to any outcome — the spin is just the fun delivery mechanism.
          </p>
          <p>
            All fifteen games above work with{' '}
            <Link href="/" className="text-violet-600 dark:text-violet-400 underline hover:text-violet-700">
              Spin The Choice
            </Link>
            {' '}— free, no login, and shareable by link. If you come up with a new game idea
            worth adding to this list,{' '}
            <Link href="/contact" className="text-violet-600 dark:text-violet-400 underline hover:text-violet-700">
              let us know
            </Link>
            .
          </p>
        </section>

        {/* CTA */}
        <div className="mt-10 bg-violet-50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-800 rounded-2xl p-8 text-center">
          <div className="text-4xl mb-3">🎡</div>
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
            Try one of these ideas right now
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-5 max-w-sm mx-auto">
            Open the free wheel spinner, add your entries, and spin. No account needed.
          </p>
          <Link
            href="/"
            className="inline-block bg-violet-600 hover:bg-violet-700 text-white font-bold px-8 py-3 rounded-full shadow transition-colors"
          >
            Open Wheel Spinner →
          </Link>
        </div>

        {/* Related articles */}
        <section className="mt-10">
          <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-500 uppercase tracking-wide mb-4">
            Related
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/spin-the-wheel"
              className="block bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-4 hover:border-violet-400 dark:hover:border-violet-600 transition-colors group"
            >
              <div className="text-xl mb-1">🎡</div>
              <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                Spin the Wheel — everything you can do
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                From yes or no decisions to prize draws.
              </p>
            </Link>
            <Link
              href="/classroom"
              className="block bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-4 hover:border-violet-400 dark:hover:border-violet-600 transition-colors group"
            >
              <div className="text-xl mb-1">🎓</div>
              <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                Classroom Wheel Spinner for Teachers
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                10 ways teachers use a random name picker every day.
              </p>
            </Link>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="mt-12 border-t border-gray-200 dark:border-gray-800 py-6 text-center text-xs text-gray-400 dark:text-gray-600 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 px-4">
        <Link href="/" className="hover:text-violet-500 transition-colors">Home</Link>
        <span aria-hidden="true">·</span>
        <Link href="/spin-the-wheel" className="hover:text-violet-500 transition-colors">Spin the Wheel</Link>
        <span aria-hidden="true">·</span>
        <Link href="/classroom" className="hover:text-violet-500 transition-colors">Classroom</Link>
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
