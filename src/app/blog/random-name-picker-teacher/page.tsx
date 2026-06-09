import Link from 'next/link';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Random Name Picker for Teachers – Complete Guide',
  description:
    'The complete teacher guide to using a random name picker for classroom engagement, fair participation, and stress-free lessons.',
  url: 'https://spinthechoice.com/blog/random-name-picker-teacher',
  datePublished: '2025-06-09',
  dateModified: '2025-06-09',
  author: { '@type': 'Organization', name: 'Spin The Choice' },
  publisher: { '@type': 'Organization', name: 'Spin The Choice', url: 'https://spinthechoice.com' },
};

export default function RandomNamePickerTeacherPost() {
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
            Random Name Picker for Teachers: The Complete Guide
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed max-w-2xl">
            Why the same hands go up every single lesson, why that matters more than you
            might think, and how a random name picker changes participation patterns
            across the whole class — starting from day one.
          </p>
          <div className="mt-4 flex items-center gap-3 text-xs text-gray-400 dark:text-gray-600">
            <span>June 2025</span>
            <span>·</span>
            <span>7 min read</span>
            <span>·</span>
            <span>Spin The Choice</span>
          </div>
        </div>
      </div>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 space-y-12 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">

        {/* The Problem */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            The Problem: The Same Students, Every Single Time
          </h2>
          <p className="mb-4">
            Most teachers can name them without thinking — the students whose hands go up
            for every question. They're engaged, they're confident, and calling on them
            keeps the lesson moving. But over time, a quiet pattern forms: the same five or
            six students answer most of the questions, while the rest of the class learns
            that participation is optional.
          </p>
          <p className="mb-4">
            It's not laziness on the students' part, and it's rarely a conscious choice by
            the teacher. It's the natural result of a hand-raising system that rewards
            confidence and penalises uncertainty. Students who aren't sure of the answer
            quickly learn that keeping their hand down is the safest strategy. After a few
            weeks, that default becomes a habit — and habits are hard to break.
          </p>
          <p className="mb-4">
            The consequences run deeper than participation rates. Research into classroom
            equity consistently shows that voluntary hand-raising correlates with gender,
            confidence, and socioeconomic background in ways that don't reflect actual
            knowledge or ability. The students whose hands stay down aren't necessarily
            less capable — they're often just less comfortable putting themselves forward
            in front of their peers.
          </p>
          <p>
            There are also subtler problems on the teacher's side. Without a system,
            teachers unconsciously develop patterns: calling on reliable students when they
            need the lesson to move forward, avoiding quieter students to spare them
            discomfort, inadvertently signalling through eye contact and body language
            who they expect to answer. Even experienced teachers with the best intentions
            find this hard to avoid.
          </p>
        </section>

        {/* The Solution */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            The Solution: Random Selection Done Right
          </h2>
          <p className="mb-4">
            The core idea is simple: take the choosing out of the teacher's hands entirely.
            When a student is selected by a visible, random process, the social dynamics
            around being called on change significantly. It's no longer "the teacher thinks
            I know this" or "the teacher is picking on me" — it's just the wheel, doing
            something visibly neutral.
          </p>
          <p className="mb-4">
            This framing matters more than it might seem. Students who feel targeted when
            a teacher calls on them directly often have much lower anxiety when a random
            picker selects them. The randomness provides cover: being chosen isn't a
            judgment, it's just chance. That makes it psychologically safer to not know
            the answer, because not knowing isn't a personal failing — it's just bad luck
            on the timing of the spin.
          </p>
          <p className="mb-4">
            The alertness effect is the other major benefit. When any student could be
            selected at any moment, the whole class has an incentive to follow the lesson
            rather than drifting off. Teachers who switch to a <strong>random name picker</strong>{' '}
            consistently report that background noise drops and on-task behaviour increases
            — even among students who are never actually selected in a given lesson.
          </p>
          <p>
            Crucially, random selection doesn't mean cold, high-stakes calling. The best
            implementations pair the random pick with a brief thinking pause (10–15 seconds
            after the student is named), a clear and specific question, and a classroom
            culture where "I'm not sure, but I think..." is a valid and welcomed answer.
            The randomness handles the equity; the teacher handles the warmth.
          </p>
        </section>

        {/* How to Use */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            How to Use a Random Name Picker in Your Classroom
          </h2>
          <p className="mb-4">
            Getting started with a digital random name picker takes about two minutes. Here
            is the full setup process with Spin The Choice:
          </p>
          <ol className="space-y-4 mb-6">
            {[
              {
                n: '1',
                title: 'Add your class list',
                body: 'Open spinthechoice.com and type your students\' names into the entry panel — one per line. You can also paste directly from a spreadsheet. The wheel rebuilds automatically as you type, so you can see it taking shape in real time.',
              },
              {
                n: '2',
                title: 'Save the link',
                body: 'Click Share to copy your wheel\'s unique URL. This link encodes your entire class list — bookmark it in your browser, pin it to your teacher dashboard, or save it in your lesson plan document. There is no account and no server storage; your data lives in the URL.',
              },
              {
                n: '3',
                title: 'Project it in class',
                body: 'Open the link on your classroom computer and display it on your interactive whiteboard or projector. The wheel is large and easy to read from the back of the room. Turn the volume up — the tick sounds that build as the wheel slows create real anticipation.',
              },
              {
                n: '4',
                title: 'Spin and wait',
                body: 'After the wheel lands, give the chosen student a named pause: "OK, Jamie — take ten seconds." This brief thinking time dramatically reduces anxiety and improves the quality of answers. It also signals to the class that you expect everyone to be thinking, not just the person picked.',
              },
              {
                n: '5',
                title: 'Remove and repeat (optional)',
                body: 'If you want every student to answer once before anyone is chosen again, delete names after each spin. The wheel resizes automatically. This ensures full coverage across the class in a single session.',
              },
            ].map((s) => (
              <li key={s.n} className="flex gap-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-5">
                <span className="flex-none w-8 h-8 rounded-full bg-violet-100 dark:bg-violet-900/40 text-violet-600 dark:text-violet-400 font-bold text-sm flex items-center justify-center">
                  {s.n}
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{s.title}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <p>
            For teachers with multiple classes, create a separate saved link for each one.
            Label them clearly in your bookmarks — "Year 9 English", "Year 10 History Set 2"
            — and switch between them instantly. The whole setup, once built, takes less than
            five seconds to open at the start of a lesson.
          </p>
        </section>

        {/* Tips and tricks */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Teacher Tips and Tricks
          </h2>
          <p className="mb-6">
            After working with teachers across different subjects and age groups, these
            are the techniques that consistently make random selection more effective —
            and less stressful for everyone in the room.
          </p>
          <div className="space-y-4">
            {[
              {
                emoji: '⏱️',
                title: 'Always give thinking time before the answer',
                body: "Announce the question first, let everyone think for 20–30 seconds, then spin to select who answers. This keeps the whole class engaged with the problem rather than just waiting to see if they're picked. It also means the chosen student has already been thinking about the answer, so the pressure of being selected arrives after, not during, the cognitive work.",
              },
              {
                emoji: '🛡️',
                title: 'Build a "not sure" culture first',
                body: 'Before introducing random selection, spend a few lessons explicitly celebrating partial answers. "I\'m not sure, but I think it might be X because..." is worth more than silence or a wrong answer with no reasoning. When students see that uncertainty is handled kindly, being randomly picked stops feeling like a threat.',
              },
              {
                emoji: '📊',
                title: 'Use two wheels for reviews',
                body: 'Create a second wheel with your topic or question categories and spin that first. Students now have to be ready on every topic because neither the topic nor the person is predictable. It\'s a significantly more effective revision structure than working through topics in sequence.',
              },
              {
                emoji: '🎯',
                title: 'Pair the pick with a specific question',
                body: 'Broad questions ("What do you know about the French Revolution?") are harder to answer under random-selection pressure than focused ones ("Can you name one cause of the French Revolution?"). Specific questions have clearer entry points, which makes the experience more positive for students who are less confident.',
              },
              {
                emoji: '🔄',
                title: 'Rotate through the full list before repeating',
                body: 'Remove each student after they\'ve been picked until the wheel is empty, then reload the full class list. This guarantees every student answers at least once per session. Students quickly notice that the system is fair over time — and that changes the social contract around participation.',
              },
              {
                emoji: '🎨',
                title: 'Colour-code by seating group or ability band',
                body: 'Use the colour picker in Spin The Choice to colour each segment by table group or reading level. A glance at where the wheel lands tells you whether you\'re drawing equally across the room. It also makes the wheel easier to read on a projected screen from a distance.',
              },
            ].map((tip) => (
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

        {/* Try Spin The Choice */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Try Spin The Choice — Free Random Name Picker for Teachers
          </h2>
          <p className="mb-4">
            Spin The Choice was built with exactly this kind of classroom use in mind.
            The wheel handles classes of up to 40 students, loads in any browser without
            installation, and saves your class list in a bookmarkable URL that persists
            between sessions.
          </p>
          <p className="mb-4">
            There is no premium tier, no subscription, and no account required. Load
            the Classroom template for a pre-filled starting point, replace the example
            names with your students, and your wheel is ready for the first lesson of
            the day.
          </p>
          <p className="mb-6">
            If you teach multiple classes or year groups, the Share link makes it easy
            to keep a separate wheel for each one. The whole system takes five minutes
            to set up once — and then it is just there, every lesson, one click away.
          </p>
          <div className="text-center">
            <Link
              href="/?template=classroom"
              className="inline-block bg-violet-600 hover:bg-violet-700 text-white font-bold px-8 py-3 rounded-full shadow transition-colors"
            >
              Open Your Free Name Picker →
            </Link>
          </div>
        </section>

        {/* Conclusion */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Wrapping Up
          </h2>
          <p className="mb-4">
            A random name picker is a small tool that solves a genuine problem. It
            doesn't replace good questioning technique or a warm classroom culture —
            but it removes a persistent source of inequity from the participation
            equation and replaces it with something students find visibly fair.
          </p>
          <p>
            The teachers who get the most from it pair random selection with deliberate
            thinking time, a culture that welcomes uncertainty, and specific questions
            rather than open-ended ones. Get those three things right and the wheel
            becomes less of a gimmick and more of a quiet infrastructure — always
            running in the background, keeping everyone honest and on their toes.
          </p>
        </section>

        {/* Related */}
        <section>
          <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-500 uppercase tracking-wide mb-4">
            Related articles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/blog/classroom-wheel-spinner" className="block bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-4 hover:border-violet-400 dark:hover:border-violet-600 transition-colors group">
              <div className="text-xl mb-1">🎓</div>
              <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                Classroom Wheel Spinner
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">5 activity ideas you can try this week.</p>
            </Link>
            <Link href="/blog/spin-the-wheel-game-ideas" className="block bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-4 hover:border-violet-400 dark:hover:border-violet-600 transition-colors group">
              <div className="text-xl mb-1">🎡</div>
              <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                Spin the Wheel Game Ideas
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">Party, classroom, and team uses.</p>
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
