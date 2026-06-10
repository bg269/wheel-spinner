import Link from 'next/link';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Drinking Game Wheel – Rules, Ideas & Setup Guide (18+)',
  description: 'How to set up a drinking game wheel for adult parties. Rules, forfeit ideas, game variations, and responsible play guidance.',
  url: 'https://spinthechoice.com/blog/drinking-game-wheel',
  datePublished: '2025-06-09',
  author: { '@type': 'Organization', name: 'Spin The Choice' },
  publisher: { '@type': 'Organization', name: 'Spin The Choice', url: 'https://spinthechoice.com' },
};

export default function DrinkingGameWheelPost() {
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
            <Link href="/blog" className="hover:underline">Blog</Link><span>›</span><span>Adults (18+)</span>
          </div>
          <div className="inline-block bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            🔞 Adults only — 18+ (or 21+ depending on your country)
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            Drinking Game Wheel: Rules, Ideas &amp; Setup Guide
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed max-w-2xl">
            A drinking game wheel turns any adult gathering into a structured, fair, and genuinely entertaining event. This guide covers how to build one, what to put on it, and how to run several popular variations — including a non-alcoholic version for mixed groups.
          </p>
          <div className="mt-4 flex items-center gap-3 text-xs text-gray-400 dark:text-gray-600">
            <span>June 2025</span><span>·</span><span>7 min read</span><span>·</span><span>Spin The Choice</span>
          </div>
        </div>
      </div>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 space-y-12 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">

        {/* Responsibility notice */}
        <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-xl px-5 py-4 text-xs text-amber-800 dark:text-amber-300 leading-relaxed">
          <strong>Drink responsibly.</strong> This guide is intended for adults of legal drinking age. Always know your limits, never drink and drive, ensure everyone has a safe way home, and keep non-alcoholic options available for anyone who wants them. The non-alcoholic version in this guide works equally well for groups that prefer it.
        </div>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">What Is a Drinking Game Wheel?</h2>
          <p className="mb-4">A drinking game wheel is a spinning wheel loaded with rules, forfeits, and challenges where the consequence of each segment involves taking a sip, assigning drinks to others, or completing a task to avoid drinking. The wheel replaces the card draws, dice rolls, or arbitrary player decisions that traditional drinking games rely on.</p>
          <p className="mb-4">The advantages over other formats are fairness and variety. Nobody controls what anyone else has to do — the wheel decides. And because you can load as many or as few rules as you like, the game never gets repetitive. Add a new rule mid-game if something is not working; remove one if it keeps landing on the same result.</p>
          <p>A well-built drinking game wheel also has a natural moderating effect: because some segments are mild and some are strong, not every spin results in drinking. Players who prefer lighter participation naturally get an easier ride, without the awkwardness of asking for special treatment.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How to Set Up Your Drinking Game Wheel</h2>
          <ol className="space-y-4 mb-4">
            {[
              { n: '1', title: 'Agree the rules before you start', body: 'The best drinking game wheels are built collaboratively. Go around the group and have each person suggest one or two rules. This way, everyone has contributed something and nobody can complain the game is unfair or targets them specifically.' },
              { n: '2', title: 'Balance the wheel', body: 'Aim for roughly equal numbers of "give drinks", "take drinks", "social" (whole group drinks), and "forfeit or challenge" entries. A wheel that is all "take a drink" escalates too fast; one with too many social entries burns through drinks. Variety keeps the game going longer.' },
              { n: '3', title: 'Set maximums upfront', body: 'Agree that "take X drinks" means sips, not full drinks, and cap the maximum at something reasonable (two or three sips per segment, for example). State this before the game starts, not when someone lands on the hardest segment.' },
              { n: '4', title: 'Build a player wheel too', body: 'Keep a separate wheel with player names on it. Some rules work better when directed at a specific person — "give your drinks to [player wheel spin]" adds a social targeting element while keeping the selection random and fair.' },
              { n: '5', title: 'Save your wheel', body: 'Click Share to save the wheel link. If you have a regular group, you can refine and update the same wheel before each game night rather than rebuilding from scratch.' },
            ].map((s) => (
              <li key={s.n} className="flex gap-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-5">
                <span className="flex-none w-8 h-8 rounded-full bg-violet-100 dark:bg-violet-900/40 text-violet-600 dark:text-violet-400 font-bold text-sm flex items-center justify-center">{s.n}</span>
                <div><h3 className="font-semibold text-gray-900 dark:text-white mb-1">{s.title}</h3><p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{s.body}</p></div>
              </li>
            ))}
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Classic Drinking Wheel Rules (50+ Ideas)</h2>
          <p className="mb-5">These are the most popular entry types for a drinking game wheel. Mix and match to create a balanced wheel for your group.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { cat: 'Take drinks', items: ['Take 1 sip', 'Take 2 sips', 'Finish your drink', 'Down to the last finger', 'Take what you give (mirror rule)'] },
              { cat: 'Give drinks', items: ['Give 2 sips to anyone', 'Give 1 sip to everyone', 'Give 3 sips split between two people', 'Give to the person who last laughed'] },
              { cat: 'Social (everyone)', items: ['Everyone drinks', 'Left of spinner drinks', 'Right of spinner drinks', 'Tallest person drinks', 'Last one to raise their hand drinks'] },
              { cat: 'Challenges', items: ['Complete dare or drink', 'Answer truth or drink double', 'Name 5 (category) or drink', '30-second challenge or drink', 'Impression or drink'] },
              { cat: 'Rules', items: ['New rule: no first names (lasts 3 rounds)', 'Toilet break requires permission from the group', 'Must speak in an accent for next 2 rounds', 'No phones (lasts until next spin on this segment)'] },
              { cat: 'Wild cards', items: ['Waterfall: everyone drinks until you stop', 'Spin again (double result)', 'Reverse spin direction', 'Free pass (no drink, bank for later)', 'Pick any rule from the list'] },
            ].map((group) => (
              <div key={group.cat} className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-4">
                <h3 className="font-semibold text-gray-900 dark:text-white text-xs mb-2 uppercase tracking-wide">{group.cat}</h3>
                <ul className="space-y-1">
                  {group.items.map((item) => (
                    <li key={item} className="text-xs text-gray-500 dark:text-gray-400 flex gap-1.5"><span className="text-violet-400 flex-none">›</span>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Drinking Wheel Game Variations</h2>
          <div className="space-y-4">
            {[
              { emoji: '🎡', title: 'Classic Spin', body: "One wheel, player spins when it's their turn, follows the instruction. Simple, fast, works for any group size from 3 to 15. Best with a 10-15 entry wheel that mixes all categories roughly evenly." },
              { emoji: '⚡', title: 'Speed Wheel', body: "Set a 5-minute timer. Players take turns spinning as fast as possible — no gaps between turns. Rules only last for one round. First person to refuse a fair spin takes a double forfeit. Chaotic but genuinely entertaining for groups who know each other well." },
              { emoji: '🎯', title: 'Team Wheel', body: "Split into two teams. Each team has a wheel. Teams spin simultaneously — whichever team lands on the higher number (by counting sips) has to carry out the instruction. Adds a competitive layer without targeting individuals." },
              { emoji: '🃏', title: 'Wheel + Cards Hybrid', body: "Deal a card to each player at the start of each round. Highest card spins. Lowest card must follow the instruction regardless of who spins. The wheel picks the rule; the cards determine who it applies to. More complex but keeps everyone engaged even off their turn." },
            ].map((v) => (
              <div key={v.title} className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-4">
                <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{v.emoji}</span><h3 className="font-semibold text-gray-900 dark:text-white text-sm">{v.title}</h3></div>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Non-Alcoholic Version (For Mixed Groups)</h2>
          <p className="mb-4">A drinking game wheel works just as well without alcohol. Replace "take a drink" with "take a sip of your drink" (water, juice, mocktail), and replace "finish your drink" with a small forfeit like "do 10 jumping jacks" or "say something nice about everyone in the room".</p>
          <p className="mb-4">The challenge-and-dare entries work identically regardless of whether alcohol is involved. Many groups find the non-alcoholic version actually produces better games because people stay sharper for longer and the challenges become more inventive when drinks are not the default consequence.</p>
          <p>Building a mixed wheel — where some entries are drink-based and others are purely challenge-based — is the best approach for groups where some people are drinking and others are not. Everyone uses the same wheel; the drink entries apply to whoever is drinking, and non-drinkers do the forfeit version of those segments instead.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Safe and Responsible Play</h2>
          <div className="space-y-3">
            {[
              { title: 'Set a pace, not a target', body: 'Drinking game wheels work best when they are about entertainment, not consumption. There is no winning condition that involves drinking the most. Keep the focus on the challenges, forfeits, and social moments rather than the volume.' },
              { title: 'Nobody is obligated to drink', body: "Agree at the start that anyone can substitute a drink for a forfeit at any time, no questions asked. This removes the pressure that makes some people uncomfortable and keeps the game enjoyable for everyone." },
              { title: 'Keep food and water available', body: 'Always have non-alcoholic drinks and food accessible throughout the game. Eating while drinking slows absorption and keeping water available prevents dehydration, which is the main cause of next-morning suffering.' },
              { title: 'Sort transport before the game starts', body: "Agree how everyone is getting home before the first spin. Once the game is running is the wrong time to be making decisions about designated drivers or booking taxis." },
            ].map((t) => (
              <div key={t.title} className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-4">
                <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">{t.title}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{t.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-violet-50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-800 rounded-2xl p-8 text-center">
          <div className="text-4xl mb-3">🎡</div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Build Your Drinking Game Wheel</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 max-w-sm mx-auto">Free, no login. Add your rules, spin, and play. Takes two minutes to set up — lasts all night.</p>
          <Link href="/" className="inline-block bg-violet-600 hover:bg-violet-700 text-white font-bold px-8 py-3 rounded-full shadow transition-colors">Open Spin The Choice →</Link>
        </section>

        <section>
          <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-500 uppercase tracking-wide mb-4">Related articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/blog/truth-or-dare-wheel" className="block bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-4 hover:border-violet-400 dark:hover:border-violet-600 transition-colors group">
              <div className="text-xl mb-1">🎭</div>
              <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">Truth or Dare Wheel</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">50+ questions and dares for game night.</p>
            </Link>
            <Link href="/blog/birthday-party-wheel-games" className="block bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-4 hover:border-violet-400 dark:hover:border-violet-600 transition-colors group">
              <div className="text-xl mb-1">🎂</div>
              <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">Birthday Party Wheel Games</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">10 wheel games for every age group.</p>
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
