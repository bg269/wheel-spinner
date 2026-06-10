import Link from 'next/link';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Birthday Party Wheel Games – 10 Ideas for Every Age',
  description: '10 birthday party wheel game ideas for kids, teens, and adults, with setup guides for each.',
  url: 'https://spinthechoice.com/blog/birthday-party-wheel-games',
  datePublished: '2025-06-09',
  author: { '@type': 'Organization', name: 'Spin The Choice' },
  publisher: { '@type': 'Organization', name: 'Spin The Choice', url: 'https://spinthechoice.com' },
};

const GAMES = {
  kids: [
    {
      emoji: '🎁',
      title: 'Prize Wheel',
      body: "Load small prizes as segments — stickers, sweets, a free go on a game, five minutes of screen time. Each child spins once to win their prize. No competition, no losers, just anticipation and reward. Works brilliantly for ages 4–10 where competitive games can end in tears.",
      setup: 'Entries: prize names. Every child spins once. Nobody leaves empty-handed.',
    },
    {
      emoji: '💃',
      title: 'Dance Challenge Wheel',
      body: "Add dance styles or moves to the wheel — robot, moonwalk, freeze, wiggle, jump around, spin in a circle. Press a song, spin the wheel, and every child has to do that move until the song changes. Adaptable to any ability level and guaranteed to produce great photos.",
      setup: 'Entries: 8–10 dance moves or styles. Spin every 30 seconds during a playlist.',
    },
    {
      emoji: '🎨',
      title: 'Craft Activity Spinner',
      body: "For craft-focused birthday parties, load the wheel with different creative tasks: paint a rainbow, make a friendship bracelet, decorate a cupcake, draw a self-portrait. Spin to assign each child their station. Rotates everyone fairly and prevents the race to the most popular activity.",
      setup: 'Entries: craft activities. Spin to assign stations. Rotate every 10 minutes.',
    },
  ],
  teens: [
    {
      emoji: '🎭',
      title: 'Challenge Wheel',
      body: "For 13–17 year olds, a challenge wheel hits the sweet spot between social dare and genuine entertainment. Load it with tasks like 'best lip sync', 'impressions battle', 'speed round of general knowledge questions', 'most convincing fake cry'. Points for style, voted by the group.",
      setup: 'Entries: 10–12 fun challenges. Spin to assign. Group votes on winner of each.',
    },
    {
      emoji: '❓',
      title: "Who's Most Likely To...",
      body: "Spin to select a player, then read a 'most likely to' statement. The group votes — thumbs up or down. Whoever gets the most votes for 'most likely to forget their own birthday' or 'most likely to become famous' has to answer a bonus question. Fast, opinionated, and perfect for groups who know each other well.",
      setup: 'Name wheel + pre-written list of "most likely to" statements. Spin to pick who answers.',
    },
    {
      emoji: '🎬',
      title: 'Movie or TV Show Picker',
      body: "For slumber parties and longer gatherings: each guest nominates one film or show, it goes on the wheel, and the birthday person spins to pick. No negotiations, no majority votes — the wheel picks, everyone watches. Add a 'birthday person chooses' entry as a wildcard.",
      setup: 'One nomination per guest. Spin once. Commit to the result.',
    },
  ],
  adults: [
    {
      emoji: '🍕',
      title: 'Food & Drink Spinner',
      body: "For adult birthday parties: add cocktail or mocktail names, food stations, or canape options to the wheel. Spin to decide what the birthday person has to eat or drink next. Alternatively, spin to assign who makes the next round of drinks — fair and removes the pressure of asking.",
      setup: 'Entries: drinks or food options. Spin every 20–30 minutes throughout the event.',
    },
    {
      emoji: '🎲',
      title: 'Forfeit Wheel',
      body: "A birthday party wheel game classic for adults: load forfeits of increasing embarrassment — tell a story from the last year, do an impression of someone in the room, call a contact and say a specific phrase. Spin to pick the forfeit, then spin the name wheel to assign it. Keeps energy high and no one plans their way out.",
      setup: 'Wheel 1: player names. Wheel 2: 10–15 forfeits. Spin both per round.',
    },
    {
      emoji: '🌍',
      title: 'Destination Wheel',
      body: "For a milestone birthday, build a wheel with potential trip destinations — cities, countries, or types of holiday — and spin to decide where the group is going. Works best when every entry is somewhere everyone would genuinely enjoy. The spin commits the group in a way that hours of messaging never can.",
      setup: 'Add 5–8 destinations all attendees have pre-agreed they would enjoy. Spin once. Book it.',
    },
  ],
};

export default function BirthdayPartyWheelGamesPost() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-violet-600 dark:text-violet-400 hover:text-violet-700 transition-colors text-sm font-medium">← Spin The Choice</Link>
          <Link href="/blog" className="text-sm text-gray-500 dark:text-gray-400 hover:text-violet-500 transition-colors">All posts</Link>
        </div>
      </header>

      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
          <div className="flex items-center gap-2 text-xs text-violet-600 dark:text-violet-400 font-medium mb-3 uppercase tracking-wide">
            <Link href="/blog" className="hover:underline">Blog</Link><span>›</span><span>Games &amp; Fun</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            Birthday Party Wheel Games: 10 Ideas for Every Age
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed max-w-2xl">
            A birthday party wheel game is one of the easiest ways to add structure and excitement to any celebration — from a kids&apos; prize spinner to an adults&apos; forfeit wheel. Here are ten ideas across every age group, each with a quick setup guide.
          </p>
          <div className="mt-4 flex items-center gap-3 text-xs text-gray-400 dark:text-gray-600">
            <span>June 2025</span><span>·</span><span>7 min read</span><span>·</span><span>Spin The Choice</span>
          </div>
        </div>
      </div>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 space-y-12 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">

        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Why a Wheel Makes Birthday Parties Better</h2>
          <p className="mb-4">Birthday parties have a recurring problem: decisions. What game do we play next? Who goes first? Who wins the prize? Left to the group, these decisions eat time and create friction. The host ends up mediating while guests drift onto their phones.</p>
          <p className="mb-4">A birthday party wheel game solves all three at once. The wheel picks the game, decides who goes first, and awards the prize — all with visible randomness that everyone accepts as fair. More importantly, the spin itself becomes a shared moment of anticipation that brings the group back into the room.</p>
          <p>Unlike most party games that require preparation, a wheel spinner is ready in under two minutes. Type your options, spin, play. The same tool works for a six-year-old&apos;s prize draw and a 40th birthday forfeit game — just change the entries.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">🧒 Birthday Party Wheel Games for Kids (Ages 4–12)</h2>
          <p className="text-gray-500 dark:text-gray-400 text-xs mb-6">Low stakes, high energy, everyone wins something.</p>
          <div className="space-y-5">
            {GAMES.kids.map((g) => (
              <div key={g.title} className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5">
                <div className="flex items-center gap-3 mb-2"><span className="text-2xl">{g.emoji}</span><h3 className="font-semibold text-gray-900 dark:text-white">{g.title}</h3></div>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-3">{g.body}</p>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg px-3 py-2 text-xs text-gray-500 dark:text-gray-400"><span className="font-semibold text-gray-700 dark:text-gray-300">Setup: </span>{g.setup}</div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">🧑 Birthday Party Wheel Games for Teens (Ages 13–17)</h2>
          <p className="text-gray-500 dark:text-gray-400 text-xs mb-6">Social, competitive, and actually cool enough to use.</p>
          <div className="space-y-5">
            {GAMES.teens.map((g) => (
              <div key={g.title} className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5">
                <div className="flex items-center gap-3 mb-2"><span className="text-2xl">{g.emoji}</span><h3 className="font-semibold text-gray-900 dark:text-white">{g.title}</h3></div>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-3">{g.body}</p>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg px-3 py-2 text-xs text-gray-500 dark:text-gray-400"><span className="font-semibold text-gray-700 dark:text-gray-300">Setup: </span>{g.setup}</div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">🥂 Birthday Party Wheel Games for Adults (18+)</h2>
          <p className="text-gray-500 dark:text-gray-400 text-xs mb-6">Less structure, more fun — runs on its own once you set it up.</p>
          <div className="space-y-5">
            {GAMES.adults.map((g) => (
              <div key={g.title} className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5">
                <div className="flex items-center gap-3 mb-2"><span className="text-2xl">{g.emoji}</span><h3 className="font-semibold text-gray-900 dark:text-white">{g.title}</h3></div>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-3">{g.body}</p>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg px-3 py-2 text-xs text-gray-500 dark:text-gray-400"><span className="font-semibold text-gray-700 dark:text-gray-300">Setup: </span>{g.setup}</div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Setting Up Your Birthday Party Wheel</h2>
          <p className="mb-4">The simplest setup for any birthday party wheel game is to build it on the day in under five minutes:</p>
          <ol className="space-y-3 mb-4">
            {[
              "Open Spin The Choice on any device — phone, tablet, or laptop.",
              "Type your entries for the first game (prizes, names, challenges, or forfeits).",
              "Click Share and save the link in your notes — one link per wheel.",
              "When the party is ready, open the link, turn up the volume, and spin.",
              "Build the next wheel between games — each one takes about a minute.",
            ].map((step, i) => (
              <li key={i} className="flex gap-3 text-xs text-gray-600 dark:text-gray-400">
                <span className="flex-none w-6 h-6 rounded-full bg-violet-100 dark:bg-violet-900/40 text-violet-600 dark:text-violet-400 font-bold text-xs flex items-center justify-center">{i + 1}</span>
                {step}
              </li>
            ))}
          </ol>
          <p>For a birthday party with multiple games, create all your wheels in advance and bookmark each link. On the night, you switch between wheels with one tap — no rebuilding mid-party while guests wait.</p>
        </section>

        <section className="bg-violet-50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-800 rounded-2xl p-8 text-center">
          <div className="text-4xl mb-3">🎂</div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Build Your Birthday Party Wheel Now</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 max-w-sm mx-auto">Free, no account required. Set up your first birthday party wheel game in under two minutes.</p>
          <Link href="/" className="inline-block bg-violet-600 hover:bg-violet-700 text-white font-bold px-8 py-3 rounded-full shadow transition-colors">Open Wheel Spinner →</Link>
        </section>

        <section>
          <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-500 uppercase tracking-wide mb-4">Related articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/blog/truth-or-dare-wheel" className="block bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-4 hover:border-violet-400 dark:hover:border-violet-600 transition-colors group">
              <div className="text-xl mb-1">🎭</div>
              <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">Truth or Dare Wheel</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">50+ questions and dares with setup guide.</p>
            </Link>
            <Link href="/blog/spin-the-wheel-game-ideas" className="block bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-4 hover:border-violet-400 dark:hover:border-violet-600 transition-colors group">
              <div className="text-xl mb-1">🎡</div>
              <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">Spin the Wheel Game Ideas</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">More games for every occasion.</p>
            </Link>
          </div>
        </section>

      </main>

      <footer className="border-t border-gray-200 dark:border-gray-800 py-6 text-center text-xs text-gray-400 dark:text-gray-600 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 px-4">
        <Link href="/" className="hover:text-violet-500 transition-colors">Home</Link><span aria-hidden="true">·</span>
        <Link href="/blog" className="hover:text-violet-500 transition-colors">Blog</Link><span aria-hidden="true">·</span>
        <Link href="/spin-the-wheel" className="hover:text-violet-500 transition-colors">Spin the Wheel</Link><span aria-hidden="true">·</span>
        <Link href="/about" className="hover:text-violet-500 transition-colors">About</Link><span aria-hidden="true">·</span>
        <Link href="/privacy" className="hover:text-violet-500 transition-colors">Privacy Policy</Link><span aria-hidden="true">·</span>
        <Link href="/terms" className="hover:text-violet-500 transition-colors">Terms</Link>
      </footer>
    </div>
  );
}
