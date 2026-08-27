import Link from 'next/link';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Brain Breaks for Teenagers – Keep High School Students Engaged',
  description:
    'Brain breaks built for high school students — movement, creative, social, and mindfulness activities that work with teen psychology, not against it.',
  url: 'https://spinthechoice.com/blog/brain-breaks-for-teenagers',
  datePublished: '2025-08-27',
  dateModified: '2025-08-27',
  author: { '@type': 'Organization', name: 'Spin The Choice' },
  publisher: { '@type': 'Organization', name: 'Spin The Choice', url: 'https://spinthechoice.com' },
};

const MOVEMENT = [
  { n: '1',  name: 'Four corners challenge', body: 'Label each corner of the room with a category (sports, music, food, travel). Call out a question and students walk to their corner. Combines movement, expression of preference, and mild social revelation.' },
  { n: '2',  name: 'Silent speed round', body: 'Students stand and answer rapid yes/no questions — sit down if yes, stay standing for no (or vice versa). Every round resets. Fast, competitive enough for teens, no verbal awkwardness.' },
  { n: '3',  name: 'Desk chair spin challenge', body: 'Students spin in their chair for five seconds, then must stand and balance on one foot. Ridiculous enough to break tension, physical enough to activate the vestibular system and restore alertness.' },
  { n: '4',  name: 'Two-minute hallway lap', body: 'A structured, timer-set hallway walk. Simple but effective — getting out of the classroom entirely, even briefly, changes the spatial context and triggers the attention refresh that follows a scene change.' },
  { n: '5',  name: 'Shoulder tap chain', body: 'Students stand, and the first person taps the shoulder of the person to their right, who taps the next, creating a wave around the room. Requires some coordination and generates laughter when the wave breaks down.' },
  { n: '6',  name: 'Rock-paper-scissors tournament', body: 'Everyone plays a rapid-fire RPS tournament — losers become the winner\'s cheerleader until one final winner emerges from the whole class. Takes 3–4 minutes, creates social energy, and involves everyone.' },
  { n: '7',  name: 'Stand-up fact check', body: 'Make statements related or unrelated to the lesson. Students stand if true, sit if false. Combines movement with recall — doubles as a low-stakes retrieval practice for lesson content.' },
];

const CREATIVE = [
  { n: '8',  name: '60-second playlist challenge', body: 'Students have 60 seconds to think of three songs for a hypothetical playlist themed around the lesson topic (or any topic). Share or not — the creative framing shifts cognitive mode effectively.' },
  { n: '9',  name: 'Emoji summary', body: 'Students summarise the last topic in three emojis, shown to the class simultaneously. Low-pressure, slightly competitive, reveals how well different framings of the same concept land.' },
  { n: '10', name: 'Would you rather — absurd edition', body: 'Would you rather have hands for feet or feet for hands? Would you rather speak only in rhyme or only in questions? The more absurd the options, the more teenagers engage. No wrong answers, genuine laughter.' },
  { n: '11', name: 'Collaborative sentence', body: 'Start a sentence and pass it around the room, each student adding one word. Goes in unexpected directions, requires listening to what came before, and is legitimately unpredictable enough to be entertaining.' },
  { n: '12', name: 'Two truths and a lie — speed round', body: 'Students write three statements, one false, and share with one neighbour only (not the class). The social intimacy of 1:1 version works better for self-conscious teenagers than a whole-class reveal.' },
  { n: '13', name: '30-second sketch', body: 'One concept from the lesson, sketched in 30 seconds on paper without thinking too hard. The constraint of the timer forces students to commit to their first visual instinct. A light retrieval practice disguised as a creative break.' },
];

const SOCIAL = [
  { n: '14', name: 'Appreciation pass', body: 'Students write one specific, genuine compliment about the person to their left and pass it over. Not generic ("you\'re nice") — specific ("the way you explained that earlier made it click for me"). Takes 2 minutes, has a lasting effect.' },
  { n: '15', name: 'Controversial opinion poll', body: 'Poll: pineapple on pizza — yes or no? Cereal before or after milk? Debate at low stakes. The act of defending a position — even a silly one — is socially engaging in a way that feels different from academic participation.' },
  { n: '16', name: 'Find someone who...', body: 'Give students 90 seconds to find someone who shares a specific preference or experience: "find someone who has read more than 10 books this year", "find someone who has visited another country". Moves bodies and builds connection.' },
  { n: '17', name: 'Meme the lesson', body: 'Students pair up for 2 minutes to create a verbal meme about the lesson topic — format: top text, bottom text, imagined image. Requires genuine comprehension to satirise effectively, wrapped in a social, creative format.' },
  { n: '18', name: 'Group decision wheel', body: 'Use a shared Spin The Choice wheel to make a class decision — which topic to discuss next, which question to tackle, who presents. Delegates the decision visibly and gives students a moment of genuine influence over what happens next.' },
];

const MINDFULNESS = [
  { n: '19', name: '4-7-8 breathing', body: 'Breathe in for 4 counts, hold for 7, breathe out for 8. One round takes 19 seconds. The extended exhale activates the parasympathetic nervous system, physically reducing heart rate within seconds. Effective for pre-assessment anxiety.' },
  { n: '20', name: 'Body scan check-in', body: 'Starting at the feet, mentally move attention up through the body, noting sensations without judgement. Takes 90 seconds. Works better for teenagers than it sounds — the scanning quality is focused enough to hold attention.' },
  { n: '21', name: 'Word association reset', body: 'Call out a word — students say (or write) the first word that comes to mind, not the "correct" answer. Removes evaluation pressure, activates associative thinking, and creates a light moment of shared non-academic response.' },
  { n: '22', name: 'Eyes closed, three things', body: 'Lights normal, students close eyes. Name three things you can hear right now. Then three things you can feel. Opens again in 60 seconds. Brief enough for teenagers who would resist longer mindfulness exercises.' },
];

const TIPS = [
  {
    emoji: '🎯',
    title: 'Design breaks that don\'t feel like primary school activities',
    body: 'The biggest obstacle to brain breaks in secondary classrooms is that the activities feel childish. Teenagers are acutely sensitive to anything that reads as condescending. Choose breaks with mild competitive or social elements — polls, challenges, debates — rather than movement games that feel too young for the room.',
  },
  {
    emoji: '🔄',
    title: 'Let students choose or design the next break',
    body: 'The adolescent brain is particularly responsive to autonomy — having genuine control over one\'s experience. A rotating schedule where a different student selects the break each session creates investment in the activity and normalises the habit more effectively than a teacher-led pattern.',
  },
  {
    emoji: '🎡',
    title: 'Use a random selector to remove the awkward volunteer moment',
    body: 'Asking "who wants to choose?" in a teen classroom often produces silence. A brain break wheel (spinthechoice.com/brain-break-wheel) picks without anyone having to volunteer. Spin the wheel, do what it lands on, move on. The randomness also reduces the perception that the teacher has an agenda behind the choice.',
  },
  {
    emoji: '📵',
    title: 'Be explicit that phones go down during the break',
    body: 'Without a clear instruction, a break will become a phone-check moment — which does nothing neurologically useful and makes re-engagement harder. Frame it: "Two minutes, phones down, everyone in the room for this one." The specificity helps more than a general "put phones away".',
  },
  {
    emoji: '⏱️',
    title: 'Keep it under three minutes or you\'ll lose the room',
    body: 'Teenagers\' social energy tends to amplify quickly in unstructured time. A break that runs past three minutes risks losing the classroom\'s re-engagement momentum. Use a visible timer. Be firm about the return. The brevity is part of what makes the break effective — not a compromise.',
  },
];

const FAQS = [
  {
    q: 'Do brain breaks work for high school students?',
    a: 'Yes, though the design has to match teen psychology. High schoolers respond poorly to activities that feel infantilising, but engage strongly with breaks that involve social comparison, mild competition, creative expression, or autonomy. The research on attention restoration applies across age groups — what changes is the format that delivers the break.',
  },
  {
    q: 'How long should brain breaks be for teenagers?',
    a: 'Two minutes is the effective sweet spot for secondary settings. Short enough to not disrupt lesson flow, long enough to produce a genuine state change. Breaks under 90 seconds often don\'t fully disengage the attention system; breaks over three minutes risk social energy becoming hard to redirect.',
  },
  {
    q: 'How often should high school students take brain breaks?',
    a: 'Every 25–35 minutes of focused instruction. The adolescent attention system is fully developed but not the sustained-focus tolerance that adults have built through years of practice. Secondary students fatigue from sustained lecture or independent work faster than they may appear to, especially in afternoon sessions.',
  },
  {
    q: 'What if teenagers refuse to participate in brain breaks?',
    a: 'Participation resistance usually comes from one of two places: the activity feels childish, or the social risk of being visibly engaged feels too high. Removing the performance element (breaks that are partly off-camera or private), choosing higher-autonomy formats like polls and written responses, and normalising participation through rotating student leadership all reduce opt-out rates over time.',
  },
  {
    q: 'Can a brain break wheel help with classroom management?',
    a: 'It genuinely can — for the specific reason that it removes the teacher as the decision-maker for the break and transfers some agency to the group. The spin is neutral in a way that a teacher\'s choice isn\'t. Students who would resist a teacher-directed activity will often participate in the same activity when a wheel landed on it.',
  },
];

export default function BrainBreaksForTeenagersPost() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
          <div className="flex items-center gap-2 text-xs text-violet-600 dark:text-violet-400 font-medium mb-3 uppercase tracking-wide">
            <Link href="/blog" className="hover:underline">Blog</Link>
            <span>›</span>
            <span>Teachers</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            Brain Breaks for Teenagers – Keep High School Students Engaged
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed max-w-2xl">
            Brain breaks in secondary classrooms fail when they feel like something for younger children.
            The breaks here are built for teen psychology: social, mildly competitive, creative, and
            short enough to not derail a lesson. No circle time, no talking balls.
          </p>
          <div className="mt-4 flex items-center gap-3 text-xs text-gray-400 dark:text-gray-600">
            <span>August 2025</span>
            <span>·</span>
            <span>8 min read</span>
            <span>·</span>
            <span>Spin The Choice</span>
          </div>
        </div>
      </div>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 space-y-14 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">

        <section>
          <p className="mb-4">
            The argument for brain breaks is well-established for younger students — but the
            secondary classroom presents a specific problem: teenagers are socially hyperaware,
            quickly bored, and acutely sensitive to anything that reads as condescending. An
            activity that works brilliantly in Year 5 can produce eye-rolls and detachment in Year 10.
          </p>
          <p className="mb-4">
            The activities below are designed to work with teen psychology. They share a few
            characteristics: they offer mild social engagement without forcing vulnerability, they
            don't require buying into something with high earnestness, and they're short enough to
            feel like a genuine break rather than a lesson in disguise. Use the free{' '}
            <Link href="/brain-break-wheel" className="text-violet-600 dark:text-violet-400 hover:underline font-medium">
              brain break wheel
            </Link>{' '}
            to let the choice happen without the awkward "who wants to pick" moment.
          </p>
          <div className="text-center">
            <Link
              href="/brain-break-wheel"
              className="inline-block bg-violet-600 hover:bg-violet-700 text-white font-bold px-7 py-3 rounded-full shadow transition-colors text-sm"
            >
              Open the Brain Break Wheel →
            </Link>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Movement Breaks</h2>
          <p className="mb-5 text-gray-600 dark:text-gray-400">
            Movement breaks for teenagers work best when they're framed as a game or challenge
            rather than as "stretching" or "energising". The physical benefit is the same; the
            framing determines buy-in.
          </p>
          <ol className="space-y-3">
            {MOVEMENT.map(item => (
              <li key={item.n} className="flex gap-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 px-4 py-3">
                <span className="flex-none w-7 h-7 rounded-full bg-violet-100 dark:bg-violet-900/40 text-violet-600 dark:text-violet-400 font-bold text-xs flex items-center justify-center mt-0.5">{item.n}</span>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  <strong className="font-semibold text-gray-800 dark:text-gray-200">{item.name}.</strong>{' '}{item.body}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Creative Breaks</h2>
          <p className="mb-5 text-gray-600 dark:text-gray-400">
            Creative breaks switch processing mode from analytical to generative — the cognitive
            equivalent of using a different muscle group. They're especially effective before
            discussion-based or essay tasks where the generative mode is needed for quality work.
          </p>
          <ol className="space-y-3">
            {CREATIVE.map(item => (
              <li key={item.n} className="flex gap-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 px-4 py-3">
                <span className="flex-none w-7 h-7 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 font-bold text-xs flex items-center justify-center mt-0.5">{item.n}</span>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  <strong className="font-semibold text-gray-800 dark:text-gray-200">{item.name}.</strong>{' '}{item.body}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section className="bg-violet-50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-800 rounded-2xl p-7 text-center">
          <div className="text-3xl mb-2">🎡</div>
          <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1">Spin to pick the break — no awkward volunteer moment</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 max-w-xs mx-auto">
            Load the wheel with teen-friendly breaks. The class watches the spin together. Free, no login needed.
          </p>
          <Link href="/brain-break-wheel" className="inline-block bg-violet-600 hover:bg-violet-700 text-white font-bold px-6 py-2.5 rounded-full shadow transition-colors text-sm">
            Try the Brain Break Wheel →
          </Link>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Social Breaks</h2>
          <p className="mb-5 text-gray-600 dark:text-gray-400">
            Peer relationships are developmentally central for teenagers in a way that isn't true
            at any other life stage. Short social breaks that offer low-risk connection — without
            forced emotional disclosure — rebuild the social energy that sustained individual work
            depletes.
          </p>
          <ol className="space-y-3">
            {SOCIAL.map(item => (
              <li key={item.n} className="flex gap-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 px-4 py-3">
                <span className="flex-none w-7 h-7 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold text-xs flex items-center justify-center mt-0.5">{item.n}</span>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  <strong className="font-semibold text-gray-800 dark:text-gray-200">{item.name}.</strong>{' '}{item.body}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Mindfulness Breaks That Don't Feel Cringe</h2>
          <p className="mb-5 text-gray-600 dark:text-gray-400">
            Mindfulness has a perception problem with teenagers — it reads as earnest in a way that
            teen social self-presentation doesn't accommodate easily. These versions keep the
            physiological benefit while removing the format that generates eye-rolls.
          </p>
          <ol className="space-y-3">
            {MINDFULNESS.map(item => (
              <li key={item.n} className="flex gap-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 px-4 py-3">
                <span className="flex-none w-7 h-7 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 font-bold text-xs flex items-center justify-center mt-0.5">{item.n}</span>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  <strong className="font-semibold text-gray-800 dark:text-gray-200">{item.name}.</strong>{' '}{item.body}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How to Use a Brain Break Wheel with Teenagers</h2>
          <p className="mb-4">
            The logistical problem of secondary brain breaks isn't activity selection — it's getting
            teenager buy-in for the format. A spinner addresses the key objection (teacher
            imposing something) by making the choice visibly neutral and random.
          </p>
          <ol className="space-y-3 mb-5">
            {[
              { n: '1', title: 'Customise the wheel with teen-appropriate activities', body: 'Remove anything from the default list that reads young and add activities from this article. The visible customisation signals that you\'ve thought about what works for this specific class.' },
              { n: '2', title: 'Project the wheel on the board', body: 'Spinning it on the teacher\'s screen and projecting it turns the spin into a 10-second group moment of anticipation. The class watches together — small, but it\'s a shared experience.' },
              { n: '3', title: 'Let a student spin', body: 'The student whose name came up in the previous lesson\'s random name pick (if you use one) can spin the break wheel. Chaining these decisions through students builds a sense of class ownership.' },
              { n: '4', title: 'Keep the same wheel URL across the year', body: 'Spin The Choice preserves your custom wheel in the URL. Save it or bookmark it. Stability in the tool normalises the routine — the wheel becomes a known, expected part of the lesson rhythm.' },
            ].map(s => (
              <li key={s.n} className="flex gap-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-4">
                <span className="flex-none w-7 h-7 rounded-full bg-violet-100 dark:bg-violet-900/40 text-violet-600 dark:text-violet-400 font-bold text-xs flex items-center justify-center mt-0.5">{s.n}</span>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  <strong className="font-semibold text-gray-800 dark:text-gray-200">{s.title}.</strong>{' '}{s.body}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">5 Tips for Brain Breaks That Work With Teen Psychology</h2>
          <div className="space-y-4">
            {TIPS.map(tip => (
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

        <section className="bg-violet-50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-800 rounded-2xl p-8 text-center">
          <div className="text-4xl mb-3">🎓</div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Build Your High School Brain Break Wheel</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 max-w-sm mx-auto">
            Customise it for your class. Project it during the spin. Free, no account, no download.
          </p>
          <Link href="/brain-break-wheel" className="inline-block bg-violet-600 hover:bg-violet-700 text-white font-bold px-8 py-3 rounded-full shadow transition-colors">
            Open the Brain Break Wheel →
          </Link>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {FAQS.map(faq => (
              <div key={faq.q} className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5">
                <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-2">{faq.q}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-500 uppercase tracking-wide mb-4">Related articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/blog/brain-breaks-quick-classroom-activities" className="block bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-4 hover:border-violet-400 dark:hover:border-violet-600 transition-colors group">
              <div className="text-xl mb-1">🧠</div>
              <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">Brain Breaks: 10 Quick Activities</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">Reset attention in under two minutes.</p>
            </Link>
            <Link href="/blog/classroom-wheel-spinner" className="block bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-4 hover:border-violet-400 dark:hover:border-violet-600 transition-colors group">
              <div className="text-xl mb-1">🎓</div>
              <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">Classroom Wheel Spinner Guide</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">Use spinners for fair student selection and classroom activities.</p>
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
}
