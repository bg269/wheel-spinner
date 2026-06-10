import Link from 'next/link';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Truth or Dare Wheel – The Ultimate Setup Guide',
  description: 'How to set up a truth or dare wheel spinner, with 50+ questions, dare ideas, game variations, and tips.',
  url: 'https://spinthechoice.com/blog/truth-or-dare-wheel',
  datePublished: '2025-06-09',
  author: { '@type': 'Organization', name: 'Spin The Choice' },
  publisher: { '@type': 'Organization', name: 'Spin The Choice', url: 'https://spinthechoice.com' },
};

const TRUTHS = {
  easy: [
    "What is your most embarrassing childhood memory?",
    "Have you ever lied to get out of trouble? What did you say?",
    "What is the strangest dream you have ever had?",
    "What is one thing you own that you are secretly ashamed of?",
    "Have you ever cheated on a test or game?",
    "What is the worst gift you have ever received?",
    "What song do you secretly love but never admit to liking?",
    "Have you ever blamed someone else for something you did?",
  ],
  funny: [
    "What is the most ridiculous thing you have ever cried about?",
    "What is your go-to excuse when you want to cancel plans?",
    "Have you ever walked into a glass door or window?",
    "What is the longest you have gone without showering?",
    "Have you ever talked to yourself in public and been caught?",
    "What is the weirdest thing you have googled in the past week?",
    "Have you ever sent a message to the wrong person? What did it say?",
    "What is a completely irrational fear you have?",
  ],
  deep: [
    "What is one thing you wish you had told someone but never did?",
    "What is your biggest regret from the past year?",
    "What is something about yourself you are still working to accept?",
    "When did you last genuinely change your mind about something important?",
    "What achievement are you most proud of that nobody knows about?",
    "What is a belief you had five years ago that you have since abandoned?",
  ],
};

const DARES = {
  easy: [
    "Do your best impression of someone in the room.",
    "Speak in an accent for the next three rounds.",
    "Let someone else style your hair for two minutes.",
    "Send a voice note to a contact saying only 'I know what you did'.",
    "Do 15 press-ups right now.",
    "Eat a spoonful of something from the fridge without knowing what it is.",
    "Wear your clothes inside-out for the rest of the game.",
  ],
  social: [
    "Call a friend and sing them a full verse of Happy Birthday — regardless of whether it is their birthday.",
    "Post a photo taken right now to your Instagram story.",
    "Text your most recent contact and ask 'Are you still awake?' at whatever time it currently is.",
    "Change your phone wallpaper to a selfie taken by someone else in the group.",
    "Let the person to your left compose and send a text from your phone.",
    "Record a 10-second dance video and send it to a family member.",
  ],
  silly: [
    "Talk like a robot for the next five minutes.",
    "Do your best catwalk across the room.",
    "Say everything in a whisper for the next two rounds.",
    "Pretend to be a live sports commentator while someone pours a drink.",
    "Attempt to lick your elbow for 30 seconds.",
    "Do an interpretive dance of your morning routine.",
    "Make up a 30-second advertisement for a random household object.",
  ],
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{title}</h2>
      {children}
    </section>
  );
}

function QuestionList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="mb-5">
      <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-3">{title}</h3>
      <ul className="space-y-2">
        {items.map((q) => (
          <li key={q} className="flex gap-2 text-xs text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 px-4 py-2.5 leading-relaxed">
            <span className="text-violet-400 flex-none">›</span>
            {q}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function TruthOrDareWheelPost() {
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
            <Link href="/blog" className="hover:underline">Blog</Link>
            <span>›</span><span>Games &amp; Fun</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            Truth or Dare Wheel: The Ultimate Setup Guide
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed max-w-2xl">
            Everything you need to run a truth or dare wheel game — from setting it up in seconds to 50+ questions and dares organised by mood, plus tips for keeping the energy right all night.
          </p>
          <div className="mt-4 flex items-center gap-3 text-xs text-gray-400 dark:text-gray-600">
            <span>June 2025</span><span>·</span><span>9 min read</span><span>·</span><span>Spin The Choice</span>
          </div>
        </div>
      </div>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 space-y-12 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">

        <Section title="What Is a Truth or Dare Wheel?">
          <p className="mb-4">A truth or dare wheel combines the classic party game with a spinning wheel to add two layers of randomness: first, the wheel picks whether a player faces a truth or a dare, and second, the wheel picks who goes next. The result is a faster, fairer, and more exciting version of a game that has been generating awkward confessions and chaotic challenges since at least the 18th century.</p>
          <p className="mb-4">The traditional game has one structural weakness: it relies on one player choosing truth or dare for another, which immediately introduces social dynamics — targeting, collusion, easy rides for friends. A truth or dare wheel removes that variable entirely. Nobody decides; the wheel decides. That neutrality changes the atmosphere in the room, making even difficult questions feel like fate rather than attack.</p>
          <p>You can set up a basic truth or dare wheel with two entries — "Truth" and "Dare" — and a separate wheel for player names. For a richer game, load specific questions and challenges onto the wheel itself so the content is as random as the selection.</p>
        </Section>

        <Section title="How to Set Up Your Truth or Dare Wheel in 3 Steps">
          <ol className="space-y-4 mb-4">
            {[
              { n: '1', title: 'Build your player wheel', body: 'Go to Spin The Choice and add all player names to the wheel. This is your name-picker — spin it at the start of each round to choose whose turn it is.' },
              { n: '2', title: 'Build your truth or dare wheel', body: 'Open a second browser tab and create a new wheel. Add "Truth" and "Dare" as entries for a basic split. For a more advanced setup, add actual truth questions and dare descriptions directly as entries — the wheel then picks both the type and the specific challenge in one spin.' },
              { n: '3', title: 'Save both wheels with Share links', body: 'Click Share on each wheel to get a URL. Bookmark both links before the game starts — or paste them into a notes app so you can switch between them instantly on the night.' },
            ].map((s) => (
              <li key={s.n} className="flex gap-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-5">
                <span className="flex-none w-8 h-8 rounded-full bg-violet-100 dark:bg-violet-900/40 text-violet-600 dark:text-violet-400 font-bold text-sm flex items-center justify-center">{s.n}</span>
                <div><h3 className="font-semibold text-gray-900 dark:text-white mb-1">{s.title}</h3><p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{s.body}</p></div>
              </li>
            ))}
          </ol>
          <p>One practical tip: run a test spin before guests arrive so you know both wheels are working and the sound is at a good level. The tick sound builds tension during slow-downs — keep it audible.</p>
        </Section>

        <Section title="50+ Truth Questions for Your Truth or Dare Wheel">
          <p className="mb-5">Organised by intensity so you can load the right questions for your group and occasion. Start with Easy for warming up, move to Funny once people are comfortable, and save Deep for later in the night when the game has found its rhythm.</p>
          <QuestionList title="Easy — Warm-Up Questions" items={TRUTHS.easy} />
          <QuestionList title="Funny &amp; Embarrassing" items={TRUTHS.funny} />
          <QuestionList title="Deep &amp; Personal (Late Night)" items={TRUTHS.deep} />
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 bg-violet-50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-800 rounded-lg px-4 py-3">
            <strong className="text-gray-700 dark:text-gray-300">Tip:</strong> Add the questions you want directly to your truth or dare wheel rather than reading from a list — the spin reveals the question, which adds a beat of suspense before anyone knows what they are dealing with.
          </p>
        </Section>

        <Section title="50+ Dare Ideas for Your Wheel">
          <p className="mb-5">Organised from low-stakes to socially entertaining. The best dare wheels mix all three types so the difficulty is unpredictable — easy dares right after a brutal one keep the energy varied.</p>
          <QuestionList title="Easy Dares" items={DARES.easy} />
          <QuestionList title="Social Dares (Phone Required)" items={DARES.social} />
          <QuestionList title="Silly Dares (No Phone Needed)" items={DARES.silly} />
        </Section>

        <Section title="Truth or Dare Wheel Variations">
          <p className="mb-5">Once you have the basic format running, these variations keep repeat game nights fresh:</p>
          <div className="space-y-4">
            {[
              { emoji: '🎯', title: 'Triple Wheel', body: 'Three wheels: player name, truth/dare type, and a specific question/challenge. Three spins per turn — each one narrowing in on the result. Slower but more theatrical for small groups.' },
              { emoji: '⚡', title: 'Speed Round', body: 'Set a 20-second timer. If the player does not start their truth answer or dare within 20 seconds of the wheel landing, they get a forfeit (their choice from a forfeit wheel). Keeps the game moving and prevents stalling.' },
              { emoji: '🔄', title: 'Swap Round', body: 'After the truth or dare wheel lands, the chosen player can spend one "swap token" to redirect the challenge to someone else. Each player gets one swap per game. Introduces strategy without breaking the random format.' },
              { emoji: '📊', title: 'Category Wheel', body: 'Build a wheel with categories instead of individual questions: "Relationship", "School/Work", "Childhood", "This group", "Hypothetical". Spin the category first, then ask any question within that category. More flexible for the host and keeps questions relevant to the group.' },
              { emoji: '🏆', title: 'Points Version', body: 'Award points for completing truths and dares: 1 point for truth, 2 for dare, 3 for double dare. Track scores on a shared notes app. First to 10 points wins a prize (or nominates someone for a forfeit). Adds a competitive layer that works well for bigger groups.' },
            ].map((v) => (
              <div key={v.title} className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-4">
                <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{v.emoji}</span><h3 className="font-semibold text-gray-900 dark:text-white text-sm">{v.title}</h3></div>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Tips for Running a Great Truth or Dare Wheel Game">
          <div className="space-y-3">
            {[
              { tip: 'Set boundaries before you start', body: "Spend two minutes at the beginning agreeing on what is off-limits. Nobody has to answer anything that makes them genuinely uncomfortable — having that said out loud at the start makes it easier to skip without awkwardness when it happens." },
              { tip: 'Mix question difficulty across the wheel', body: "If your truth wheel has 20 questions loaded, split them roughly into thirds: easy, medium, and intense. A balanced wheel keeps all players comfortable and prevents the game from escalating too fast for the group." },
              { tip: 'Use the remove feature for names', body: "If you want each player to get exactly one turn per round, delete names from the name wheel after each spin. Once the wheel is empty, reload all names for the next round. This prevents the same person being chosen repeatedly." },
              { tip: 'Have a forfeit ready for refusals', body: "Agree on a standard forfeit before the game — one that is embarrassing but not humiliating. Knowing there is a consequence for refusing keeps the game honest without requiring anyone to do something they are truly uncomfortable with." },
              { tip: 'Project it on a screen', body: "If you are playing in a living room with space, open the truth or dare wheel on a TV or large monitor. Watching the wheel spin together on a shared screen amplifies the anticipation and makes the reveal a group moment." },
            ].map((t) => (
              <div key={t.tip} className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-4">
                <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1.5">{t.tip}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{t.body}</p>
              </div>
            ))}
          </div>
        </Section>

        <section className="bg-violet-50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-800 rounded-2xl p-8 text-center">
          <div className="text-4xl mb-3">🎡</div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Set Up Your Truth or Dare Wheel Now</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 max-w-sm mx-auto">Free, no login, works on any device. Add your players, load your questions, and spin — takes under two minutes to set up.</p>
          <Link href="/" className="inline-block bg-violet-600 hover:bg-violet-700 text-white font-bold px-8 py-3 rounded-full shadow transition-colors">Open Spin The Choice →</Link>
        </section>

        <section>
          <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-500 uppercase tracking-wide mb-4">Related articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/blog/spin-the-wheel-game-ideas" className="block bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-4 hover:border-violet-400 dark:hover:border-violet-600 transition-colors group">
              <div className="text-xl mb-1">🎡</div>
              <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">Spin the Wheel Game Ideas</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">15 more games for parties, classrooms, and teams.</p>
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
