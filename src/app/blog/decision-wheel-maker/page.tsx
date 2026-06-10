import Link from 'next/link';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Decision Wheel Maker – How to Build and Use One',
  description: 'How to build and use a decision wheel maker to end indecision. The psychology behind random decisions, real-world examples, and a free tool.',
  url: 'https://spinthechoice.com/blog/decision-wheel-maker',
  datePublished: '2025-06-09',
  author: { '@type': 'Organization', name: 'Spin The Choice' },
  publisher: { '@type': 'Organization', name: 'Spin The Choice', url: 'https://spinthechoice.com' },
};

export default function DecisionWheelMakerPost() {
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
            <Link href="/blog" className="hover:underline">Blog</Link><span>›</span><span>Decisions</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            Decision Wheel Maker: How to Build and Use One
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed max-w-2xl">
            A decision wheel maker turns the exhausting process of choosing between options into a three-second spin. Here is why it works psychologically, when to use one, and how to build a decision wheel that actually helps you commit.
          </p>
          <div className="mt-4 flex items-center gap-3 text-xs text-gray-400 dark:text-gray-600">
            <span>June 2025</span><span>·</span><span>6 min read</span><span>·</span><span>Spin The Choice</span>
          </div>
        </div>
      </div>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 space-y-12 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">

        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">What Is a Decision Wheel?</h2>
          <p className="mb-4">A decision wheel is a randomisation tool that selects one option from a list of choices you provide. You add your options as segments on a circular wheel, spin it, and the segment it stops on becomes your answer. The decision wheel maker itself does nothing more than generate a random outcome — but that randomness does something surprisingly useful: it removes the cognitive burden of choosing.</p>
          <p className="mb-4">Decision fatigue is real. Research by psychologists Roy Baumeister and others suggests that the quality of decisions degrades with volume — the more choices you make throughout a day, the worse the later ones become. A decision wheel offloads low-stakes choices to chance, preserving your better judgment for decisions that actually need it.</p>
          <p>The other function is social. When a group cannot agree — which restaurant, which film, which task to do first — the decision wheel breaks the deadlock without anyone having to win the argument. Everyone agreed to use the wheel; everyone accepts the result.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">When Should You Use a Decision Wheel?</h2>
          <p className="mb-4">Not every decision benefits from randomness. A decision wheel works best when:</p>
          <div className="space-y-3 mb-4">
            {[
              { title: 'All options are acceptable', body: "If you would genuinely be happy with any result on the wheel, the decision wheel is perfect. The classic example: you have five restaurants you would enjoy. You just cannot pick one. Spin the wheel — any result is fine by definition, and you stop spending decision energy on something that does not matter." },
              { title: 'The decision involves multiple equally valid options', body: "Choosing between ten films you want to watch, six holiday destinations you would enjoy, or eight tasks that all need doing this week are ideal decision wheel use cases. The wheel picks; you commit and move on." },
              { title: 'A group is deadlocked', body: "Groups regularly spend more time deciding what to do than actually doing it. A decision wheel moves the group forward without requiring consensus — everyone accepts the wheel as a neutral arbiter in a way they would not accept one person just declaring an answer." },
              { title: 'You want to check your gut instinct', body: "One underused application: spin the wheel and pay attention to your emotional reaction in the half-second after it lands. If you feel genuine relief, that option was probably right all along. If you feel disappointment, you have your answer without the wheel's help. The spin reveals your hidden preference." },
            ].map((w) => (
              <div key={w.title} className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-4">
                <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">{w.title}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{w.body}</p>
              </div>
            ))}
          </div>
          <p>The cases where a decision wheel is the wrong tool: high-stakes decisions where values and priorities genuinely matter (career moves, major purchases, relationship choices), or decisions where you have a clear preference but are second-guessing yourself. Randomness does not improve decisions that require deliberate reasoning — it just delays them.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">The Psychology: Why Randomness Helps You Decide</h2>
          <p className="mb-4">There are three psychological mechanisms that make a decision wheel effective, even for people who feel it is arbitrary:</p>
          <div className="space-y-4">
            {[
              { n: '1', title: 'It externalises the choice', body: "When you make a decision yourself, you remain responsible for it. If it goes wrong, you second-guess whether you chose correctly. When a wheel makes the decision, the cognitive ownership shifts. You can commit to the result with less anxiety because you did not 'choose' it — it was assigned. This is less rational than it sounds, but it reliably improves post-decision comfort." },
              { n: '2', title: 'It ends the search for perfect', body: "Indecision is often the result of searching for a provably correct answer where none exists. The decision wheel forces a result, which interrupts the infinite search loop. Once you have a result and you begin acting on it, the abstract question of 'was this the best choice' becomes irrelevant — you are already committed." },
              { n: '3', title: 'It removes social friction', body: "In group decisions, the wheel provides neutral ground. No one advocated for the result; no one wins. The social credit that comes with 'I was right' or the defensiveness of 'I picked this' is absent. Groups make peace with wheel results in a way they rarely do with someone else's personal choice." },
            ].map((p) => (
              <div key={p.n} className="flex gap-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-5">
                <span className="flex-none w-8 h-8 rounded-full bg-violet-100 dark:bg-violet-900/40 text-violet-600 dark:text-violet-400 font-bold text-sm flex items-center justify-center">{p.n}</span>
                <div><h3 className="font-semibold text-gray-900 dark:text-white mb-1">{p.title}</h3><p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{p.body}</p></div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How to Build a Decision Wheel That Actually Works</h2>
          <p className="mb-4">The quality of your decision wheel depends almost entirely on the quality of the entries you put on it. A few principles:</p>
          <div className="space-y-3">
            {[
              { emoji: '✅', title: 'Only include options you would genuinely accept', body: "This sounds obvious but is frequently violated. If you add an option you are secretly hoping will not land, remove it. A decision wheel only works if every segment is a genuine possibility. Loading it with decoys undermines the whole exercise." },
              { emoji: '⚖️', title: 'Make options equally specific', body: "Mixing very broad entries ('something healthy') with specific ones ('chicken stir-fry') produces a wheel where the broad entry is almost never satisfying because it requires another decision. Keep all entries at the same level of specificity." },
              { emoji: '🔢', title: 'Limit entries to what you can actually do', body: "A 40-option dinner wheel is theoretically thorough but practically useless if 30 of those restaurants are a 45-minute drive away. Shortlist to genuinely accessible options before building the wheel." },
              { emoji: '💾', title: 'Save it for reuse', body: "A good decision wheel for recurring choices — Friday dinner, weekend activity, work task to tackle first — is worth saving. Use the Share button to get a URL you can bookmark. The wheel you built last Friday will still be there next week." },
            ].map((t) => (
              <div key={t.title} className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-4">
                <div className="flex items-center gap-2 mb-1.5"><span className="text-lg">{t.emoji}</span><h3 className="font-semibold text-gray-900 dark:text-white text-sm">{t.title}</h3></div>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{t.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Real-World Decision Wheel Use Cases</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { emoji: '🍕', label: 'Dinner tonight', example: 'Pizza · Curry · Pasta · Stir-fry · Salad · Leftovers' },
              { emoji: '✈️', label: 'Next holiday destination', example: 'Lisbon · Kyoto · New York · Cape Town · Oslo' },
              { emoji: '🎬', label: 'Film or show', example: 'One nomination per person · commit to result' },
              { emoji: '✅', label: 'Yes or No', example: 'Yes · No · Ask again tomorrow · Does it matter?' },
              { emoji: '💼', label: 'Work task order', example: 'All tasks you are avoiding · spin for first one to tackle' },
              { emoji: '🏋️', label: 'Workout', example: 'Run · Cycle · Swim · Gym · Rest day · Yoga' },
              { emoji: '📚', label: 'What to read next', example: 'Every unread book on your shelf · one per entry' },
              { emoji: '🎮', label: 'Game to play', example: 'All the board games sitting unopened · spin to pick' },
            ].map((uc) => (
              <div key={uc.label} className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-4">
                <div className="flex items-center gap-2 mb-1"><span className="text-lg">{uc.emoji}</span><h3 className="font-semibold text-gray-900 dark:text-white text-xs">{uc.label}</h3></div>
                <p className="text-xs text-gray-400 dark:text-gray-600 italic">{uc.example}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-violet-50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-800 rounded-2xl p-8 text-center">
          <div className="text-4xl mb-3">🎯</div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Build Your Decision Wheel Now</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 max-w-sm mx-auto">Free decision wheel maker — add your options, spin, and commit. No account, no download, works instantly on any device.</p>
          <Link href="/" className="inline-block bg-violet-600 hover:bg-violet-700 text-white font-bold px-8 py-3 rounded-full shadow transition-colors">Open Decision Wheel →</Link>
        </section>

        <section>
          <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-500 uppercase tracking-wide mb-4">Related articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/spin-the-wheel" className="block bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-4 hover:border-violet-400 dark:hover:border-violet-600 transition-colors group">
              <div className="text-xl mb-1">🎡</div>
              <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">Spin the Wheel</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">Everything you can do with a wheel spinner.</p>
            </Link>
            <Link href="/blog/best-wheel-spinner-comparison" className="block bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-4 hover:border-violet-400 dark:hover:border-violet-600 transition-colors group">
              <div className="text-xl mb-1">🏆</div>
              <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">Best Wheel Spinner Tools</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">Honest comparison for 2025.</p>
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
