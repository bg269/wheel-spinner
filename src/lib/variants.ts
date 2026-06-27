export interface VariantEntry {
  name: string;
  color: string;
}

export interface VariantConfig {
  slug: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string[];
  entries: VariantEntry[];
  howToUse: string[];
  faqs: { q: string; a: string }[];
  related: string[];
}

export const VARIANTS: VariantConfig[] = [
  {
    slug: 'yes-or-no-wheel',
    h1: 'Yes or No Wheel — Let the Wheel Decide',
    metaTitle: 'Yes or No Wheel Spinner — Spin to Decide | Spin The Choice',
    metaDescription:
      "Can't decide between yes and no? Spin the free yes or no wheel for an instant answer. Perfect for breaking decision paralysis in seconds.",
    intro: [
      "Sometimes the most useful question has exactly two answers, and the hard part isn't knowing what they are — it's committing to one. The yes or no wheel is the fastest way to snap out of the loop. Spin it, see the result, and notice how you feel. That reaction often tells you more than the answer itself.",
      'The wheel has six segments — three Yes and three No — so every spin is a genuine 50/50. The spinning animation builds a sliver of suspense before landing, which turns a mundane binary decision into a small moment. That small moment is often enough to make the outcome feel real and final rather than arbitrary.',
      "You can edit the segments too. Add a Maybe or a Try Again if you want a softer landing on the hard ones. Load it up in a group and use it as a quick tiebreaker — no arguing about who flipped the coin, no best of three.",
    ],
    entries: [
      { name: 'Yes', color: '#22C55E' },
      { name: 'No', color: '#EF4444' },
      { name: 'Yes', color: '#22C55E' },
      { name: 'No', color: '#EF4444' },
      { name: 'Yes', color: '#22C55E' },
      { name: 'No', color: '#EF4444' },
    ],
    howToUse: [
      'Click the wheel or hit SPIN to get an instant yes or no answer.',
      'Accept the result — your emotional reaction as the wheel slows down is valuable data.',
      'Edit the segments via the customiser to add extra options like Maybe or Ask Again.',
      'Share the wheel link so everyone in your group can see the same result live.',
    ],
    faqs: [
      {
        q: 'Is the yes or no wheel actually random?',
        a: 'Yes — each spin uses a random number generator to determine the stopping angle. Because there are three Yes and three No segments, the probability of each outcome is exactly 50%.',
      },
      {
        q: 'Can I change the ratio of Yes to No?',
        a: 'Absolutely. Open the editor and delete segments or add new ones. If you want a 2-to-1 bias toward Yes, simply add an extra Yes segment and remove one No.',
      },
      {
        q: "What's the point of a yes or no wheel vs flipping a coin?",
        a: "The spinning animation adds a moment of genuine suspense that a coin flip lacks. Watching the wheel slow down gives your brain time to surface your actual preference — the relief or disappointment you feel on landing is your gut reaction speaking.",
      },
      {
        q: 'Can I use this on my phone?',
        a: 'Yes — the wheel works on any device with a modern browser, no app download or account needed. Tap the wheel to spin on mobile.',
      },
      {
        q: 'How do I share the result with someone else?',
        a: "Click Share in the panel below the wheel. It saves your wheel and copies a short link you can send to anyone — they'll see the same wheel and can spin it themselves.",
      },
    ],
    related: ['heads-or-tails-wheel', 'random-number-wheel', 'what-to-eat-wheel'],
  },

  {
    slug: 'random-number-wheel',
    h1: 'Random Number Wheel — Spin for a Number 1 to 10',
    metaTitle: 'Random Number Wheel 1–10 | Free Spinner | Spin The Choice',
    metaDescription:
      'Spin the random number wheel to pick a number 1 to 10. Edit the entries to set any range. Great for games, classroom activities, and fair draws.',
    intro: [
      "A dice is a random number wheel with fixed sides. This one lets you set whatever range makes sense for what you're doing. The default is 1 to 10 — useful for a huge range of games, scoring rounds, picking question numbers from a list, or splitting a group into numbered teams.",
      "Games that ask 'pick a number between 1 and 100' are notoriously gameable when one person picks and another guesses. The wheel removes that entirely: the result is visible to everyone, determined in real time, and impossible to argue with. Load it up on a screen at the front of the room and let the whole class see.",
      "Changing the range is straightforward — edit the segments to whatever numbers you need, whether that's 1–6 to replace a standard die, 1–20 for a D&D-style roll, or a custom set of non-consecutive numbers. The wheel handles any combination you throw at it.",
    ],
    entries: [
      { name: '1', color: '#EF4444' },
      { name: '2', color: '#F97316' },
      { name: '3', color: '#EAB308' },
      { name: '4', color: '#84CC16' },
      { name: '5', color: '#22C55E' },
      { name: '6', color: '#14B8A6' },
      { name: '7', color: '#06B6D4' },
      { name: '8', color: '#3B82F6' },
      { name: '9', color: '#A855F7' },
      { name: '10', color: '#EC4899' },
    ],
    howToUse: [
      'Click SPIN or tap the wheel to get a random number between 1 and 10.',
      'To change the range, open the editor and update the number labels — add or remove segments as needed.',
      'For a classroom, connect your device to a projector so everyone sees the result together.',
      'Use the Share button to save a permanent link to your custom number wheel.',
    ],
    faqs: [
      {
        q: 'Can I make the wheel pick numbers outside 1–10?',
        a: 'Yes — open the editor, delete the existing numbers, and type whatever range or set you need. You could do 1–20, 1–100 (in steps), or any custom list of numbers.',
      },
      {
        q: 'Is this a fair random number generator?',
        a: 'Yes. Each segment has an equal chance of being selected. A 1–20 wheel gives each number a 5% chance, the same fairness as a physical die.',
      },
      {
        q: 'What games work well with a random number wheel?',
        a: 'Bingo-style number calling, quiz round scoring, deciding turn order, generating random coordinates, replacement for physical dice in board games, and classroom maths games.',
      },
      {
        q: 'Can I use it as a substitute for a dice?',
        a: 'Absolutely. Set up six segments numbered 1–6 and you have a virtual die. You can even colour each segment differently to match a colour-coded board game.',
      },
      {
        q: "Does it remember my number range if I come back later?",
        a: "Not by default — the wheel resets to 1–10 on a fresh visit. But you can save your custom range with the Save list button: give it a name and next time you visit in the same browser your saved numbers will be waiting to load back in with one click. No login or account needed.",
      },
    ],
    related: ['yes-or-no-wheel', 'random-letter-picker', 'team-picker-wheel'],
  },

  {
    slug: 'random-letter-picker',
    h1: 'Random Letter Picker — Spin the Alphabet Wheel',
    metaTitle: 'Random Letter Picker — A to Z Wheel Spinner | Spin The Choice',
    metaDescription:
      'Spin the random letter picker to land on a letter A–Z. Great for word games, classroom activities, Scrabble starting tiles, and creative writing prompts.',
    intro: [
      "Twenty-six segments, one spin, and the alphabet decides for you. The random letter picker earns its place in word games, creative writing warm-ups, school activities, and any game that needs a starting letter pulled from thin air. It's the kind of simple tool that gets used far more often than you'd expect.",
      "Teachers use it to kick off alphabet activities — spin the wheel, write five animals that start with that letter, go. Game nights use it for categories-round variations. Writers use it as a constraint: this scene's protagonist must have a name starting with whatever we spin. Constraints breed creativity, and a random letter is about as neutral a constraint as they come.",
      "You can pare the wheel down to just vowels, just consonants, or a custom subset of letters if certain letters would break your game. Edit the entries to remove the ones you don't need, add them back later, or save a custom version with the Share button.",
    ],
    entries: [
      { name: 'A', color: '#EF4444' },
      { name: 'B', color: '#F97316' },
      { name: 'C', color: '#EAB308' },
      { name: 'D', color: '#84CC16' },
      { name: 'E', color: '#22C55E' },
      { name: 'F', color: '#14B8A6' },
      { name: 'G', color: '#06B6D4' },
      { name: 'H', color: '#3B82F6' },
      { name: 'I', color: '#A855F7' },
      { name: 'J', color: '#EC4899' },
      { name: 'K', color: '#A16207' },
      { name: 'L', color: '#6B7280' },
      { name: 'M', color: '#EF4444' },
      { name: 'N', color: '#F97316' },
      { name: 'O', color: '#EAB308' },
      { name: 'P', color: '#84CC16' },
      { name: 'Q', color: '#22C55E' },
      { name: 'R', color: '#14B8A6' },
      { name: 'S', color: '#06B6D4' },
      { name: 'T', color: '#3B82F6' },
      { name: 'U', color: '#A855F7' },
      { name: 'V', color: '#EC4899' },
      { name: 'W', color: '#A16207' },
      { name: 'X', color: '#6B7280' },
      { name: 'Y', color: '#EF4444' },
      { name: 'Z', color: '#F97316' },
    ],
    howToUse: [
      'Hit SPIN or click the wheel to land on a random letter of the alphabet.',
      'Use the result as a category starting letter, word-game prompt, or creative writing constraint.',
      'Remove difficult letters (Q, X, Z) from the editor if your game needs it.',
      'Share your modified wheel with a link so everyone plays with the same custom letter set.',
    ],
    faqs: [
      {
        q: 'Are all 26 letters equally likely?',
        a: 'Yes — each letter occupies one segment of equal size, so every spin gives each letter a 1-in-26 chance (about 3.85%).',
      },
      {
        q: 'What word games work with a random letter wheel?',
        a: 'Categories (name something starting with the letter), Scrabble opening-tile substitute, alphabet game road-trip variant, boggle warm-up, storytelling with a letter constraint, and classroom vocabulary challenges.',
      },
      {
        q: 'Can I remove uncommon letters like Q, X, and Z?',
        a: "Yes — open the editor and delete any letters you want to exclude. Your custom version saves as a shareable link so everyone in your group uses the same modified wheel.",
      },
      {
        q: 'Can I use it for a name game?',
        a: "Great use case. Spin the wheel and everyone at the table has to say a name — real or fictional — starting with that letter. First person to hesitate or repeat a name is out.",
      },
      {
        q: "Is there a vowel-only version?",
        a: "Not pre-built, but easy to set up. Open the editor, delete all consonants, keep just A, E, I, O, U, and save the link. Done in under a minute.",
      },
    ],
    related: ['random-number-wheel', 'yes-or-no-wheel', 'random-name-picker'],
  },

  {
    slug: 'what-to-eat-wheel',
    h1: "What to Eat Wheel — Spin to Decide Tonight's Dinner",
    metaTitle: 'What to Eat Wheel — Spin for Dinner Ideas | Spin The Choice',
    metaDescription:
      "Stuck on what to eat tonight? Spin the what to eat wheel for an instant dinner decision. 12 options pre-loaded, fully editable to match your favourites.",
    intro: [
      "Decision fatigue is most acute at about 6 pm on a weeknight, when the person who spent all day making decisions is now standing in the kitchen being asked to make another one. The what to eat wheel doesn't pretend to solve this. It just takes the decision off your plate — so to speak — by turning it into a quick spin.",
      "Twelve options come pre-loaded: Pizza, Tacos, Sushi, Pasta, Burgers, Curry, Stir-fry, Salad, Ramen, Steak, Soup, and Sandwiches. The wheel works best when every entry is something you'd genuinely be happy eating — no decoy options, no sneaking in a salad you secretly hope won't land. If you'd be disappointed by a result, take it off the wheel.",
      "Make it yours: remove what you never order, add your local favourites, include specific restaurants rather than cuisine types if that's more useful. A family can each get one veto entry they lock in, then spin the rest. The wheel won't settle every argument, but it will settle most of them.",
    ],
    entries: [
      { name: 'Pizza', color: '#EF4444' },
      { name: 'Tacos', color: '#F97316' },
      { name: 'Sushi', color: '#EAB308' },
      { name: 'Pasta', color: '#84CC16' },
      { name: 'Burgers', color: '#22C55E' },
      { name: 'Curry', color: '#14B8A6' },
      { name: 'Stir-fry', color: '#06B6D4' },
      { name: 'Salad', color: '#3B82F6' },
      { name: 'Ramen', color: '#A855F7' },
      { name: 'Steak', color: '#EC4899' },
      { name: 'Soup', color: '#A16207' },
      { name: 'Sandwiches', color: '#6B7280' },
    ],
    howToUse: [
      'Click SPIN to get an instant dinner recommendation from the 12 pre-loaded options.',
      'Edit the entries to replace options with your actual go-to meals or favourite local restaurants.',
      "Remove anything you'd be unhappy with — only keep options you'd genuinely enjoy.",
      'Share the wheel link with your household so everyone can edit options and spin together.',
    ],
    faqs: [
      {
        q: 'What dinners come pre-loaded on the what to eat wheel?',
        a: 'Pizza, Tacos, Sushi, Pasta, Burgers, Curry, Stir-fry, Salad, Ramen, Steak, Soup, and Sandwiches — a deliberately broad mix of cuisines and effort levels.',
      },
      {
        q: 'Can I add specific restaurants instead of cuisines?',
        a: "Yes — and often more useful. Replace 'Pizza' with the name of your actual local pizzeria. That way the wheel picks where you're ordering from, not just what category.",
      },
      {
        q: "What if I spin and get something I don't want?",
        a: "That feeling is actually useful information. If you're disappointed by the result, that usually means you already had a preference. Either respin or ask yourself what you were hoping for.",
      },
      {
        q: "Can my partner and I share a customised dinner wheel?",
        a: "Yes — build the wheel together, then use the Share button to get a link you both bookmark. Load it up any time the nightly debate starts.",
      },
      {
        q: 'How many options should I put on the dinner wheel?',
        a: '6–12 works well. Too few and it becomes predictable; too many and some options never seem to land. 8 is a practical sweet spot for most households.',
      },
    ],
    related: ['yes-or-no-wheel', 'heads-or-tails-wheel', 'truth-or-dare-wheel'],
  },

  {
    slug: 'truth-or-dare-wheel',
    h1: 'Truth or Dare Wheel — Spin to Choose Your Challenge',
    metaTitle: 'Truth or Dare Wheel Spinner — Free Online | Spin The Choice',
    metaDescription:
      'Spin the truth or dare wheel to randomly choose between Truth and Dare. Free, instant, no download. Great for parties, game nights, and sleepovers.',
    intro: [
      "The problem with asking 'truth or dare?' at the start of every turn is that people always pick the same thing. The brave always choose dare; the cautious always choose truth. The wheel removes that choice entirely — everyone gets what the spin lands on, no negotiating.",
      "Six segments alternate between Truth and Dare, keeping the game at strict 50/50 odds. Pair this wheel with a list of actual questions and dares written on slips of paper, or come up with them on the fly. The wheel handles the allocation; you handle the content.",
      "Want to shake things up further? Edit the wheel to add Double Dare, Skip, or Wild Card segments. A few extra options can completely change the dynamic and give even familiar players something to be nervous about.",
    ],
    entries: [
      { name: 'Truth', color: '#3B82F6' },
      { name: 'Dare', color: '#EF4444' },
      { name: 'Truth', color: '#3B82F6' },
      { name: 'Dare', color: '#EF4444' },
      { name: 'Truth', color: '#3B82F6' },
      { name: 'Dare', color: '#EF4444' },
    ],
    howToUse: [
      "Spin the wheel at the start of each player's turn to decide whether they face a Truth or a Dare.",
      'Agree on the questions and dares in advance — or make them up as you go.',
      "Add extra segments like 'Double Dare' or 'Wild Card' in the editor if you want more variety.",
      'Share the wheel link so you can play on one screen without anyone arguing over the result.',
    ],
    faqs: [
      {
        q: 'How many Truth and Dare segments are there?',
        a: 'Three of each, giving exactly 50/50 odds. Edit the wheel to change this — add more Dare segments if your group wants a higher-stakes game.',
      },
      {
        q: 'Can I add custom categories to the wheel?',
        a: "Yes — open the editor and replace or add segments. 'Double Dare', 'Skip', 'Wild Card', or 'Most Likely To' are all popular additions.",
      },
      {
        q: 'Is this suitable for kids?',
        a: "The wheel itself just shows Truth or Dare labels — it's as appropriate as the questions and dares you choose. Keep the content age-appropriate and it works perfectly for sleepovers and school parties.",
      },
      {
        q: 'Can we use this at a party with a big group?',
        a: 'Yes — project the wheel on a screen so the whole room sees the spin. Each player takes a turn at the wheel.',
      },
      {
        q: 'Where can I find good truth or dare questions?',
        a: "Check out the Truth or Dare Wheel blog post on this site — it has questions and dares sorted by intensity, from easy icebreakers to deeper questions for close friends.",
      },
    ],
    related: ['yes-or-no-wheel', 'what-to-eat-wheel', 'heads-or-tails-wheel'],
  },

  {
    slug: 'team-picker-wheel',
    h1: 'Team Picker Wheel — Randomly Assign Players to Teams',
    metaTitle: 'Team Picker Wheel — Random Team Generator | Spin The Choice',
    metaDescription:
      'Use the team picker wheel to randomly assign players to teams 1–4. Fair, instant, and argument-free. Fully editable for any number of teams or custom names.',
    intro: [
      "Anyone who has watched two captains alternate picking teammates knows how that system goes: the last few people standing feel publicly ranked. The team picker wheel sidesteps all of that. Each player spins once, and wherever it lands, that's their team. The process is transparent, fast, and no one ends up last.",
      "The default wheel has four teams, which covers most casual sport and party game setups. One spin per participant and you're done. For smaller groups, delete down to two or three teams. For larger groups with specific team names — house colours, company departments, quiz team names — replace the labels in the editor.",
      "Teachers and PE instructors will find this especially useful for keeping classroom activities fair over time. Because the wheel is genuinely random on each spin, the same students won't end up on the same team week after week the way they would if you just counted off.",
    ],
    entries: [
      { name: 'Team 1', color: '#EF4444' },
      { name: 'Team 2', color: '#3B82F6' },
      { name: 'Team 3', color: '#22C55E' },
      { name: 'Team 4', color: '#F97316' },
    ],
    howToUse: [
      'Have each participant spin once — wherever it lands is their team.',
      'Edit the team names to match your activity: colours, house names, or custom labels.',
      'Delete segments to reduce the number of teams, or add new ones for larger groups.',
      'Share the wheel so remote participants or split groups can all spin the same one.',
    ],
    faqs: [
      {
        q: 'How many teams does the wheel support?',
        a: 'The default is four teams, but you can add or remove segments to support any number. Two teams for a simple split, six teams for a large tournament bracket — edit however you need.',
      },
      {
        q: 'Can I use custom team names instead of Team 1, 2, 3, 4?',
        a: "Yes — open the editor and replace the labels with whatever names suit your event. House colours, company names, pub quiz team names, or player handles all work.",
      },
      {
        q: 'What if one team ends up with more people than another?',
        a: "That can happen with a perfectly random wheel, especially with small groups. If exact balance matters, remove a team from the wheel once it's full so remaining players fill the other teams.",
      },
      {
        q: 'Is this fair for sports teams in PE class?',
        a: "Yes, and it's specifically useful in classrooms because it's visibly fair. Students see the result in real time and can't argue the process was rigged.",
      },
      {
        q: 'Can I save a version with my team names for future use?',
        a: "Yes — click 'Save list' to store your team names on this device under a name you choose. Next time you visit the same page in the same browser, your saved list will be waiting to load back in with one click. There's no login or account needed, and you can save as many lists as you like or delete ones you no longer need.",
      },
    ],
    related: ['random-name-picker', 'random-number-wheel', 'yes-or-no-wheel'],
  },

  {
    slug: 'heads-or-tails-wheel',
    h1: 'Heads or Tails Wheel — Your Digital Coin Flip',
    metaTitle: 'Heads or Tails Wheel — Digital Coin Flip | Spin The Choice',
    metaDescription:
      "No coin? Use the free heads or tails wheel for a fair digital coin flip. Instant, 50/50, works on any device. Perfect for quick decisions and game starts.",
    intro: [
      "You don't always have a coin, and even when you do, the 'my thumb slipped' argument starts approximately one flip in three. The heads or tails wheel gives you a digital coin flip that everyone can watch in real time, on whatever screen is handy.",
      "Two segments, equal size, genuinely random. The spinning animation makes the result feel more earned than a number appearing on a screen, which matters more than it sounds when the outcome determines something real — who picks first, who does the dishes, or which team kicks off.",
      "If a two-option spin feels too binary for your situation, edit the wheel. Add a third option — Flip Again, You Both Do It, or something specific to your context. The wheel handles whatever you throw at it.",
    ],
    entries: [
      { name: 'Heads', color: '#EAB308' },
      { name: 'Tails', color: '#6B7280' },
    ],
    howToUse: [
      'Tap or click SPIN to get an instant heads or tails result.',
      "Both parties should be looking at the screen when it spins — the visual is part of what makes it feel fair.",
      "Add a third option in the editor if you want an escape hatch like 'Flip Again' or 'Do It Together'.",
      "Share the link for remote decisions — call someone while they're watching the same wheel spinning.",
    ],
    faqs: [
      {
        q: 'Is the heads or tails wheel a fair coin flip?',
        a: 'Yes — the two segments are exactly equal in size and the stopping angle is determined by a random number generator, giving a true 50/50 probability.',
      },
      {
        q: 'Why use a wheel instead of just flipping a coin?',
        a: "No coin needed, works on any device, everyone can see the result at the same time, and there's no risk of a disputed physical flip.",
      },
      {
        q: 'Can I use this to settle bets?',
        a: "It's as fair as any coin flip — provided both parties agree to accept the result beforehand, which is the real trick with any coin toss.",
      },
      {
        q: 'What if I want three options instead of just two?',
        a: "Edit the wheel and add a third segment — 'Flip Again', 'Draw', or whatever makes sense for your situation.",
      },
      {
        q: 'Can I use this to decide who goes first in a board game?',
        a: "Absolutely — one spin per player, with heads meaning go first and tails meaning wait. Or spin once and apply the result to everyone who called heads before the spin.",
      },
    ],
    related: ['yes-or-no-wheel', 'random-number-wheel', 'what-to-eat-wheel'],
  },

  {
    slug: 'brain-break-wheel',
    h1: 'Brain Break Wheel — Spin for a Quick Classroom Activity',
    metaTitle: 'Brain Break Wheel — Free Classroom Activity Spinner',
    metaDescription:
      'Spin the brain break wheel to pick a fun classroom activity in seconds. 12 activities pre-loaded — star jumps, dance party, deep breaths, and more.',
    intro: [
      "Attention is not infinite. After twenty or thirty minutes of focused work, most students hit a wall where concentration drops sharply and the returns of sitting still are near zero. A brain break resets that — two minutes of movement, breathing, or a quick creative activity is enough to bring focus back and make the next stretch of learning land more effectively.",
      "The challenge is choosing an activity fast, without losing the momentum you've built. If you spend thirty seconds deciding what to do, the class has already started chatting. The brain break wheel solves that: spin it, see what lands, and go. The element of surprise also helps — students engage more when they didn't know what was coming.",
      "Use it whenever energy dips mid-lesson, as a transition between tasks, before a test to shake out nerves, or as a reward at the end of a focused work block. The twelve pre-loaded activities work in a standard classroom with no equipment needed. Swap in your own favourites using the editor, and save your list on the device so it's ready every time you open the page.",
    ],
    entries: [
      { name: '10 star jumps',         color: '#EF4444' },
      { name: 'Dance party (30 sec)',   color: '#F97316' },
      { name: 'Stretch it out',         color: '#EAB308' },
      { name: 'Simon Says',             color: '#84CC16' },
      { name: 'Deep breaths ×5',        color: '#22C55E' },
      { name: 'Shake it out',           color: '#14B8A6' },
      { name: 'Quick doodle',           color: '#06B6D4' },
      { name: 'Desk drumming',          color: '#3B82F6' },
      { name: 'Silly walk on the spot', color: '#A855F7' },
      { name: 'Eye rest (window)',       color: '#EC4899' },
      { name: 'Partner high-fives',     color: '#A16207' },
      { name: 'Freeze dance',           color: '#6B7280' },
    ],
    howToUse: [
      'Watch for the signs — glazed eyes, restlessness, or slumping posture — and spin when focus dips.',
      'Hit SPIN or click the wheel to land on a random brain break activity.',
      'Lead the class through it together. Most activities take 30–60 seconds; resist letting it drag longer.',
      'Use the Save list button to add your own favourite activities and build a list that suits your class.',
    ],
    faqs: [
      {
        q: 'How long should a brain break last?',
        a: "Thirty seconds to two minutes is the sweet spot. Short enough that you don't lose lesson time, long enough to actually shift the energy. Star jumps and deep breaths work in under a minute; Simon Says or freeze dance can stretch to two minutes if the class is into it. Set a timer so it doesn't creep.",
      },
      {
        q: 'How often should I use brain breaks?',
        a: "Research suggests sustained attention peaks at around 20–30 minutes for most school-aged students, so one brain break per 25–30 minutes of focused work is a sensible rule of thumb. You can also use them reactively — spin when you notice attention dropping rather than waiting for a fixed interval.",
      },
      {
        q: 'Can I save my own list of brain-break activities?',
        a: "Yes — click 'Save list' to store your custom activities on this device under a name you choose. Next time you open the page in the same browser, your saved list loads back in with one click. No login or account needed. You can save multiple lists — one for your Year 5 class, another for your Year 9s.",
      },
      {
        q: 'How do I project this on the classroom board?',
        a: "Open the page on your device, connect to the projector or interactive whiteboard, then press F11 on Windows (or use your browser's View menu to enter fullscreen) to fill the screen. The wheel is large enough to be clearly visible from the back of the room. On a tablet, use your device's screen-mirroring or cast feature.",
      },
      {
        q: 'Are these activities suitable for all year groups?',
        a: 'The pre-loaded activities suit most primary and lower secondary classes. Some, like partner high-fives or silly walk on the spot, land better with younger students. For older classes you might swap in desk stretches, a quick sketch, or a breathing exercise. Edit the list to match your cohort — it takes about thirty seconds.',
      },
      {
        q: 'What if my classroom has limited space?',
        a: "Several activities work at desks with no movement required: Quick doodle, Deep breaths ×5, Desk drumming, and Eye rest (window) all work seated. If space is tight, delete the standing activities from the editor and you'll have a desk-friendly brain break wheel.",
      },
    ],
    related: ['random-name-picker', 'team-picker-wheel', 'yes-or-no-wheel'],
  },

  {
    slug: 'random-name-picker',
    h1: 'Random Name Picker — Spin the Wheel to Pick a Name',
    metaTitle: 'Random Name Picker Wheel — Free for Teachers | Spin The Choice',
    metaDescription:
      'Spin the random name picker wheel to call on students fairly. Free for teachers, no login needed. Pre-load your class list and spin to pick a random name.',
    intro: [
      "Every teacher knows the handful of students whose hands go up for every question — and the much larger group who quietly hope they won't be called on. The random name picker levels that dynamic. When students see their name on the wheel and know anyone could be picked, they pay attention differently.",
      "Load your class names into the editor — it takes about two minutes for a class of thirty. From that point, every question gets a fair shot. The spinning animation plays out in front of the whole class, which means the result is public and uncontestable. No more 'you always pick the same people.'",
      "The wheel works just as well outside the classroom. Picking raffle winners, assigning chores among housemates, deciding who presents first in a meeting — anywhere you need a fair, visible, random selection, the name picker does the job.",
    ],
    entries: [
      { name: 'Alice', color: '#EF4444' },
      { name: 'Bob', color: '#F97316' },
      { name: 'Charlie', color: '#EAB308' },
      { name: 'Diana', color: '#84CC16' },
      { name: 'Ethan', color: '#22C55E' },
      { name: 'Fiona', color: '#14B8A6' },
      { name: 'George', color: '#06B6D4' },
      { name: 'Hannah', color: '#3B82F6' },
      { name: 'Ivan', color: '#A855F7' },
      { name: 'Jade', color: '#EC4899' },
    ],
    howToUse: [
      'Replace the sample names in the editor with your class list or group members.',
      'Hit SPIN or click the wheel — the selected name is highlighted when it stops.',
      "Remove a name after they've been called if you don't want repeat picks in the same session.",
      'Use the Save list button to store your class names on this device and reload them in one click next lesson.',
    ],
    faqs: [
      {
        q: 'How many names can I add to the wheel?',
        a: "There's no hard limit, though wheels with more than 30 names become harder to read. For large groups, 15–20 names works better visually.",
      },
      {
        q: "Can I remove a student's name after they've been picked?",
        a: "Yes — click the delete icon next to their name in the editor. This ensures every student gets a turn before anyone is called twice.",
      },
      {
        q: 'Can I save my class list for next time?',
        a: "Yes — click 'Save list' to store your entries on this device under a name you choose (like 'Year 9 Science'). Next time you visit the same page in the same browser, your saved list will be waiting to load back in with one click. There's no login or account needed, and you can save as many lists as you like or delete ones you no longer need.",
      },
      {
        q: "What's a good way to introduce this to students for the first time?",
        a: "Let them watch a few practice spins with placeholder names before going live. Once students see their own name on the wheel and understand it's random, they tend to stay more engaged — anyone could be picked at any moment.",
      },
      {
        q: 'Can I use this for a raffle or prize draw?',
        a: "Yes — add the entrant names, spin once, and whoever it lands on wins. The visible spin makes it feel transparent and exciting, which is exactly what a prize draw needs.",
      },
      {
        q: 'Is this the same as the classroom wheel spinner page?',
        a: "Very similar. The classroom wheel spinner page covers broader classroom strategies and ideas. This page focuses specifically on name picking, and works for any group — not just classrooms.",
      },
    ],
    related: ['team-picker-wheel', 'random-letter-picker', 'random-number-wheel'],
  },
];

export function getVariant(slug: string): VariantConfig | undefined {
  return VARIANTS.find((v) => v.slug === slug);
}
