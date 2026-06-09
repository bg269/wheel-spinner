import Link from 'next/link';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Classroom Wheel Spinner – Engage Your Students',
  description:
    'Learn how teachers use wheel spinners for random student selection. Free guide and classroom activity ideas.',
  url: 'https://spinthechoice.com/blog/classroom-wheel-spinner',
  datePublished: '2025-06-09',
  dateModified: '2025-06-09',
  author: { '@type': 'Organization', name: 'Spin The Choice' },
  publisher: {
    '@type': 'Organization',
    name: 'Spin The Choice',
    url: 'https://spinthechoice.com',
  },
};

export default function ClassroomWheelSpinnerPost() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-4">
          <Link
            href="/"
            className="text-violet-600 dark:text-violet-400 hover:text-violet-700 transition-colors text-sm font-medium"
          >
            ← Back to Spin The Choice
          </Link>
        </div>
      </header>

      {/* Article header */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
          <div className="flex items-center gap-2 text-xs text-violet-600 dark:text-violet-400 font-medium mb-3 uppercase tracking-wide">
            <Link href="/blog" className="hover:underline">Blog</Link>
            <span>›</span>
            <span>Classroom</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            Classroom Wheel Spinner: Engage Your Students with Random Selection
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed max-w-2xl">
            A practical guide for teachers on using a classroom wheel spinner to make lessons
            more interactive, participation more equitable, and your days a little less
            repetitive.
          </p>
          <div className="mt-4 flex items-center gap-3 text-xs text-gray-400 dark:text-gray-600">
            <span>June 2025</span>
            <span>·</span>
            <span>6 min read</span>
            <span>·</span>
            <span>Spin The Choice</span>
          </div>
        </div>
      </div>

      {/* Article body */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 space-y-12 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">

        {/* Introduction */}
        <section>
          <p className="mb-4">
            You've just asked a genuinely interesting question. You look up from your
            whiteboard — and see the same six hands in the air. Again. The students in the
            back row are quietly doodling. The ones in the middle are waiting to see if
            someone else answers. And the eager few at the front are already straining
            forward, desperate to be chosen.
          </p>
          <p className="mb-4">
            Sound familiar? It's one of the most persistent challenges in teaching: getting
            the whole class to engage, not just the students who are already confident. You
            can call names from memory, but that brings its own social dynamics — perceived
            favourites, kids who feel targeted, and the constant mental overhead of trying to
            remember who you last spoke to.
          </p>
          <p>
            There's a surprisingly simple fix that thousands of teachers have quietly adopted:
            a <strong>classroom wheel spinner</strong>. It takes thirty seconds to set up,
            costs nothing, and changes the energy in the room from the first spin. This guide
            explains exactly how it works, why it's effective, and five specific ways you can
            use it starting tomorrow.
          </p>
        </section>

        {/* H2: What is a Classroom Wheel Spinner */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            What is a Classroom Wheel Spinner?
          </h2>
          <p className="mb-4">
            A classroom wheel spinner is a digital version of the old name-on-a-lolly-stick
            trick — but faster, more visual, and genuinely exciting to watch. You add your
            students' names to a coloured wheel, press spin, and it randomly lands on one
            student. The whole process takes about three seconds.
          </p>
          <p className="mb-4">
            Unlike drawing names from a hat or working through a list, a spinning wheel
            happens in full view of the class. Everyone can see it slowing down. Everyone
            experiences that brief moment of suspense before it stops. That shared tension is
            what makes it effective — it turns a routine classroom admin task into a small
            event.
          </p>
          <p>
            Modern tools like Spin The Choice run entirely in the browser. There's nothing
            to install, no account to create, and no subscription fee. You type your class
            list once, bookmark the link, and that wheel is waiting for you every lesson.
            The same <strong>random name picker</strong> that works on your laptop works
            equally well on an interactive whiteboard, a tablet, or your phone.
          </p>
        </section>

        {/* H2: Why Random Selection Matters */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Why Random Selection Matters in the Classroom
          </h2>
          <p className="mb-4">
            Research into classroom participation consistently shows that voluntary hand-raising
            skews toward students who are already confident, already engaged, and — in many
            classrooms — already advantaged. The students who need the most practice answering
            questions are often the ones raising their hands the least.
          </p>
          <p className="mb-4">
            Cold-calling without a random system creates its own problems. Teachers
            unconsciously develop patterns — calling on the same reliable students when they
            need the right answer, or avoiding quieter students to spare them discomfort.
            These habits, however well-intentioned, can quietly reinforce the participation
            gaps they're trying to close.
          </p>
          <p className="mb-4">
            A classroom wheel spinner sidesteps both of these issues. Because the selection is
            visibly random, it carries a social neutrality that teacher-directed calling
            doesn't have. Students don't feel singled out — the wheel picked them, not the
            teacher. That small shift in framing genuinely reduces anxiety for many students
            who would otherwise never volunteer.
          </p>
          <p>
            There's also an alertness effect. When students know anyone could be chosen at
            any moment, they're more likely to follow the lesson closely rather than tuning
            out while waiting to see if they'll be called. Teachers who use a random name
            picker regularly report that the overall attentiveness of the class improves —
            even the students who aren't chosen on any given spin stay more focused because
            they know they might be next.
          </p>
        </section>

        {/* H2: How to Use a Classroom Spinner */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            How to Use a Classroom Spinner (Step by Step)
          </h2>
          <p className="mb-4">
            Setting up your classroom wheel takes less time than calling the register. Here's
            exactly how to do it with Spin The Choice:
          </p>
          <ol className="space-y-4 mb-4">
            {[
              {
                n: '1',
                title: 'Open Spin The Choice',
                body: "Go to spinthechoice.com — no download, no login. The wheel loads instantly with a default set of names so you can see how it works straight away.",
              },
              {
                n: '2',
                title: "Enter your students' names",
                body: "Clear the default entries and type your students' names, one per line. You can also copy and paste from a spreadsheet if your class list is already digital. The wheel rebuilds automatically as you type.",
              },
              {
                n: '3',
                title: 'Bookmark your wheel',
                body: "Click the Share button to copy your wheel's unique URL. Bookmark it in your browser or paste it into your lesson planning document. The link saves your entire class list — open it next lesson and your wheel is exactly as you left it.",
              },
              {
                n: '4',
                title: 'Project it on your screen',
                body: "Open the link on your classroom computer and mirror it to your projector or interactive whiteboard. The wheel is large enough to read clearly from the back of a typical classroom.",
              },
              {
                n: '5',
                title: 'Spin and follow up',
                body: "Click SPIN or tap the wheel. After it lands, give the chosen student a moment to think before answering. If you're removing names after each pick, click the × next to their name before spinning again.",
              },
            ].map((step) => (
              <li key={step.n} className="flex gap-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-5">
                <span className="flex-none w-8 h-8 rounded-full bg-violet-100 dark:bg-violet-900/40 text-violet-600 dark:text-violet-400 font-bold text-sm flex items-center justify-center">
                  {step.n}
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{step.title}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <p>
            One practical tip: turn the volume on. The tick sounds that build as the wheel
            slows down create genuine anticipation in the room. Students go quiet to listen
            to the wheel decelerating — it's a small thing, but it gets the class's attention
            far more effectively than asking them to settle down.
          </p>
        </section>

        {/* H2: 5 Classroom Spinner Ideas */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            5 Classroom Wheel Spinner Ideas to Try This Week
          </h2>
          <p className="mb-6">
            Once you have your class list in the wheel, you'll find uses for it beyond simple
            question-and-answer. Here are five ideas teachers use regularly — all of them
            working with the same classroom wheel spinner, just with slightly different setups.
          </p>
          <div className="space-y-5">
            {[
              {
                n: '1',
                emoji: '💬',
                title: 'Discussion starter — "cold call with warmth"',
                body: "Spin the wheel to choose a student, then give them a specific and manageable prompt rather than a cold open question. \"The wheel has chosen Jamie — Jamie, can you tell us one thing you remember from yesterday's lesson?\" This removes the anxiety of the unexpected question while keeping everyone on their toes. Pair it with a short thinking time (10–15 seconds) after the spin and before the student answers.",
              },
              {
                n: '2',
                emoji: '📖',
                title: 'Reading aloud roster',
                body: "Rather than choosing who reads next yourself (which feels like a judgment call) or asking for volunteers (which favours confident readers), spin the wheel for each new paragraph or page. Students who might otherwise avoid reading aloud get the practice they need in a format where the selection is visibly fair. After a student reads, remove their name so everyone gets a turn before anyone repeats.",
              },
              {
                n: '3',
                emoji: '🧑‍🤝‍🧑',
                title: 'Random group formation',
                body: "Spin the wheel several times in a row and note the names in sequence — first spin is Group A, second spin is Group B, and so on. Groups formed this way tend to work better than friendship groups for mixing learning levels, and the random nature removes the social awkwardness of the picking process. Students accept random assignments more readily when they can see the wheel choosing rather than feeling like the teacher is engineering the groups.",
              },
              {
                n: '4',
                emoji: '🏅',
                title: 'Classroom job rotation',
                body: "Create a second wheel — separate from your name wheel — with classroom jobs on it: board monitor, register collector, equipment distributor, paper recycler. Spin both wheels together at the start of the week: first the job wheel, then the name wheel, to assign who does what. It takes two minutes on a Monday morning and means no arguments about whose turn it is for the rest of the week.",
              },
              {
                n: '5',
                emoji: '🎯',
                title: 'Topic and person review combo',
                body: "Build two wheels: one with student names, one with revision topics. Spin the topic wheel first to choose the subject, then spin the name wheel to choose who answers. This works particularly well for end-of-unit reviews, where you want to cover multiple topics across the whole class. Because neither the topic nor the person is predictable, every student has to be ready on every topic — which is exactly the revision behaviour you're trying to encourage.",
              },
            ].map((idea) => (
              <div key={idea.n} className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{idea.emoji}</span>
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                    {idea.n}. {idea.title}
                  </h3>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                  {idea.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* H2: Try Spin The Choice */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Try Spin The Choice in Your Classroom
          </h2>
          <p className="mb-4">
            Spin The Choice is a free classroom wheel spinner built specifically for the kind
            of everyday use cases described in this guide. It loads instantly, works on any
            device or screen, and saves your class list in a shareable link so you never have
            to rebuild it.
          </p>
          <p className="mb-4">
            The wheel supports up to 40 entries — more than enough for any class size — and
            each segment is customisable with colours if you want to group students by table
            or ability band. There's a built-in Classroom template if you want a pre-filled
            starting point to edit rather than starting from a blank wheel.
          </p>
          <p className="mb-6">
            If you teach multiple classes, create a separate wheel for each one using the
            Share link, then bookmark them with clear labels. Switching between classes takes
            a single click. No ads between spins, no premium tier to unlock features, no
            personal data collected — just an honest, reliable random name picker that does
            exactly what it says.
          </p>
          {/* CTA button */}
          <div className="text-center">
            <Link
              href="/?template=classroom"
              className="inline-block bg-violet-600 hover:bg-violet-700 text-white font-bold px-8 py-3 rounded-full shadow transition-colors"
            >
              Open Your Free Classroom Wheel →
            </Link>
          </div>
        </section>

        {/* Conclusion */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Final Thoughts
          </h2>
          <p className="mb-4">
            The classroom wheel spinner won't solve every engagement challenge — no single
            tool does. But it removes one specific, daily friction point: deciding who to call
            on, fairly and quickly, in a way that the whole class can see is genuine.
          </p>
          <p>
            Give it one week. Load your class list, project it on your board, and let the
            wheel do the choosing for every question-and-answer session. Pay attention to
            which students start paying closer attention because they know they might be next.
            That shift — quiet but real — is worth more than any number of participation
            strategies.
          </p>
        </section>

        {/* Related articles */}
        <section>
          <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-500 uppercase tracking-wide mb-4">
            Related
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/classroom"
              className="block bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-4 hover:border-violet-400 dark:hover:border-violet-600 transition-colors group"
            >
              <div className="text-xl mb-1">🎓</div>
              <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                Classroom Wheel Spinner Guide
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                10 ways teachers use a random name picker every day.
              </p>
            </Link>
            <Link
              href="/blog/spin-the-wheel-game-ideas"
              className="block bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-4 hover:border-violet-400 dark:hover:border-violet-600 transition-colors group"
            >
              <div className="text-xl mb-1">🎲</div>
              <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                15 Spin the Wheel Game Ideas
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Party games, ice-breakers, and virtual team activities.
              </p>
            </Link>
          </div>
        </section>

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
