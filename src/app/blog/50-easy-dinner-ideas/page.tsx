import Link from 'next/link';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: '50 Easy Dinner Ideas When You Can\'t Decide What to Cook',
  description:
    '50 easy dinner ideas organised by category — one-pot, 30-minute, budget, healthy, and comfort food — plus a free meal spinner wheel to pick for you.',
  url: 'https://spinthechoice.com/blog/50-easy-dinner-ideas',
  datePublished: '2025-08-19',
  dateModified: '2025-08-19',
  author: { '@type': 'Organization', name: 'Spin The Choice' },
  publisher: { '@type': 'Organization', name: 'Spin The Choice', url: 'https://spinthechoice.com' },
};

const ONE_POT = [
  { n: '1',  name: 'Chicken and rice soup',       body: 'Raw chicken thighs, rice, stock, and whatever veg is in the drawer — everything into one pot. 45 minutes, almost no washing up.' },
  { n: '2',  name: 'Beef and vegetable stew',      body: 'Brown the beef first, then add potato, carrot, onion, and stock and let it all braise low and slow. Better the second day.' },
  { n: '3',  name: 'Pasta e fagioli',              body: 'Italian pasta-and-bean soup built from white beans, small pasta, canned tomatoes, and a parmesan rind. Thick, filling, 30 minutes.' },
  { n: '4',  name: 'Shakshuka',                    body: 'Eggs poached in spiced tomato sauce, eaten straight from the pan with crusty bread. Five ingredients, done in 20 minutes.' },
  { n: '5',  name: 'Red lentil dal',               body: 'Lentils, canned tomatoes, coconut milk, cumin, turmeric — stir together, simmer 25 minutes, serve over rice.' },
  { n: '6',  name: 'Chicken tortilla soup',        body: 'Rotisserie chicken, black beans, corn, salsa, and chicken broth. Combine, heat, top with cheese and sour cream.' },
  { n: '7',  name: 'One-pot mac and cheese',       body: 'Cook the pasta directly in milk, whisk in cheese at the end. No draining, no separate sauce pan, just dinner.' },
  { n: '8',  name: 'Tuscan white bean soup',       body: 'Cannellini beans, kale, Italian sausage, garlic, chicken broth — everything simmers together into something that tastes like it cooked all day.' },
  { n: '9',  name: 'Jambalaya',                    body: 'Rice, smoked sausage, chicken, prawns, and Cajun spices all cooked in one pan. Bold flavour, one pot to wash.' },
  { n: '10', name: 'Lemon orzo with spinach',      body: 'Orzo cooked in chicken broth with lemon zest, baby spinach, and parmesan stirred through at the end. Done in 25 minutes.' },
];

const THIRTY_MIN = [
  { n: '11', name: 'Sheet pan salmon',             body: 'Fillets on a tray with tenderstem broccoli, olive oil, and lemon. Into a hot oven, out in 15 minutes.' },
  { n: '12', name: 'Chicken quesadillas',          body: 'Cooked chicken, cheese, and peppers in a tortilla. Pan-fry until crisp, serve with salsa and sour cream.' },
  { n: '13', name: 'Beef noodle stir-fry',         body: 'Thin strips of beef, noodles, stir-fry sauce, and whatever vegetables need using. 10 minutes in a very hot wok.' },
  { n: '14', name: 'Shrimp tacos with slaw',       body: 'Seasoned shrimp in a hot pan, into warm tortillas with quick cabbage slaw and chipotle mayo.' },
  { n: '15', name: 'Caprese pasta',                body: 'Penne tossed with cherry tomatoes, fresh mozzarella, basil, and good olive oil. About as simple as dinner gets.' },
  { n: '16', name: 'Greek chicken wraps',          body: 'Sliced chicken, cucumber, tomato, olives, and tzatziki rolled in flatbreads. Ready in the time it takes to warm the bread.' },
  { n: '17', name: 'Black bean burgers',           body: 'Canned black beans mashed with egg, breadcrumbs, and cumin, pan-fried until crisp. Top with avocado and sharp cheese.' },
  { n: '18', name: 'Turkey lettuce cups',          body: 'Minced turkey with ginger, garlic, soy sauce, and water chestnuts spooned into butter lettuce leaves. Light but satisfying.' },
  { n: '19', name: 'Garlic butter shrimp',         body: 'Shrimp tossed in butter, garlic, lemon, and parsley. Serve over rice with a green salad. Ten minutes start to finish.' },
  { n: '20', name: 'Pesto gnocchi',                body: 'Store-bought gnocchi pan-fried until golden, tossed with pesto and burst cherry tomatoes. Faster than boiling pasta.' },
];

const BUDGET = [
  { n: '21', name: 'Egg fried rice',               body: 'Day-old rice, eggs, frozen peas, soy sauce, sesame oil. Uses up leftover rice and costs almost nothing per serving.' },
  { n: '22', name: 'Bean and cheese burritos',     body: 'Tinned beans, cheddar, salsa, sour cream, flour tortillas. Filling, fast, and well under a dollar per serving.' },
  { n: '23', name: 'Spaghetti aglio e olio',       body: 'Pasta, olive oil, garlic, chilli flakes, and parsley. One of Italy\'s greatest dishes made from the contents of any pantry.' },
  { n: '24', name: 'Potato and leek soup',         body: 'Cheap, filling, and genuinely comforting. Blend until silky, finish with cream, serve with bread.' },
  { n: '25', name: 'Lentil and sausage stew',      body: 'Puy lentils, sliced sausages, chopped tomatoes, and rosemary. One of the most economical filling dinners going.' },
  { n: '26', name: 'Tuna noodle casserole',        body: 'Canned tuna, egg noodles, cream of mushroom soup, peas, and a crispy breadcrumb topping baked until bubbling.' },
  { n: '27', name: 'Chickpea curry',               body: 'Two cans of chickpeas, one can of tomatoes, coconut milk, curry powder. Dinner for four for about three dollars.' },
  { n: '28', name: 'Peanut noodles',               body: 'Rice noodles tossed with peanut butter, soy sauce, lime, chilli, and whatever crunchy veg is in the fridge.' },
  { n: '29', name: 'Bean tacos',                   body: 'Refried or black beans in a corn tortilla with cheese, shredded lettuce, and hot sauce. Remarkably satisfying.' },
  { n: '30', name: 'Vegetable frittata',           body: 'Eggs, cheese, and whatever vegetables need using, baked in a frying pan. Dinner tonight, breakfast tomorrow.' },
];

const HEALTHY = [
  { n: '31', name: 'Baked salmon and roasted veg', body: 'Fish and vegetables on a sheet pan with olive oil and lemon. Naturally balanced, genuinely low effort.' },
  { n: '32', name: 'Turkey and vegetable stir-fry', body: 'Lean protein, a pile of veg, a light sauce. Faster than takeaway and far healthier.' },
  { n: '33', name: 'Grilled chicken and quinoa salad', body: 'Protein-rich quinoa with cucumber, tomatoes, feta, and lemon dressing alongside grilled chicken breast.' },
  { n: '34', name: 'Courgette noodles with turkey meatballs', body: 'Spiralised courgette instead of pasta, with homemade turkey meatballs in a simple tomato sauce.' },
  { n: '35', name: 'Buddha bowls',                 body: 'Roasted veg, a grain, a protein, greens, and tahini dressing. Endlessly customisable, always nutritious.' },
  { n: '36', name: 'Cauliflower fried rice',       body: 'Blitzed cauliflower instead of rice, with egg, soy sauce, peas, and spring onion. All the satisfaction, fewer carbs.' },
  { n: '37', name: 'Stuffed bell peppers',         body: 'Peppers filled with turkey or beef, rice, tomato sauce, and cheese, baked until soft and golden.' },
  { n: '38', name: 'Honey-mustard chicken with sweet potato', body: 'Low-fat protein and complex carbs on one pan, glazed with honey, mustard, and rosemary.' },
  { n: '39', name: 'Mediterranean tuna salad',     body: 'Tinned tuna, chickpeas, cucumber, olives, cherry tomatoes, and feta. Protein-packed, no cooking required.' },
  { n: '40', name: 'Tofu and broccoli stir-fry',  body: 'Crispy baked tofu and tender broccoli in sesame-ginger sauce over brown rice. Genuinely as good as a restaurant.' },
];

const COMFORT = [
  { n: '41', name: 'Classic beef chili',           body: 'Chuck, kidney beans, crushed tomatoes, cumin, and chilli powder. Better the next day, freezes perfectly.' },
  { n: '42', name: 'Chicken pot pie',              body: 'Leftover chicken, frozen vegetables, cream sauce, puff pastry lid. Everything good about dinner in one dish.' },
  { n: '43', name: 'Loaded baked potato soup',     body: 'Silky potato soup with cheddar, sour cream, bacon, and chives. Every bowl tastes like a baked potato.' },
  { n: '44', name: 'Baked mac and cheese',         body: 'Proper béchamel with mature cheddar and gruyère, baked until the top is golden and bubbling.' },
  { n: '45', name: 'Chicken Alfredo',              body: 'Fettuccine in a cream and parmesan sauce with sliced chicken breast. Indulgent, but genuinely quick.' },
  { n: '46', name: 'Slow cooker pot roast',        body: 'Chuck roast, root vegetables, and beef broth in the slow cooker all day. Dinner is ready when you walk in the door.' },
  { n: '47', name: 'Meatloaf with mashed potato',  body: 'Beef and pork mince with a sticky tomato glaze, served with buttery mash and green beans.' },
  { n: '48', name: 'French onion soup',            body: 'Deeply caramelised onions, beef broth, a crouton, and melted gruyère grilled until it blisters. Worth the effort.' },
  { n: '49', name: 'Beef and broccoli',            body: 'The Chinese-American takeaway classic is cheaper and faster to make at home than ordering it in.' },
  { n: '50', name: 'Creamy tomato basil pasta',    body: 'Rigatoni in a blush sauce of crushed tomatoes, cream, basil, and parmesan. The simplest elegant dinner.' },
];

const TIPS = [
  {
    emoji: '🗓️',
    title: 'Plan three dinners, not seven',
    body: 'A full week of meal planning sounds organised but usually collapses by Wednesday. Plan three dinners you want to eat this week and let the other nights be flexible. You\'ll waste less food and feel less trapped by the plan.',
  },
  {
    emoji: '🧊',
    title: 'Keep a "dinner kit" in the freezer',
    body: 'A bag of frozen prawns, a pack of minced beef, and a bag of frozen stir-fry vegetables will cover three different quick dinners. The freezer is the original meal prep.',
  },
  {
    emoji: '🍳',
    title: 'Cook once, eat twice',
    body: 'Whenever you make something that reheats well — chili, curry, soup, stew — double the recipe and refrigerate or freeze half. You\'ve just handled a future weeknight without any extra effort.',
  },
  {
    emoji: '🥫',
    title: 'Build a pantry rotation',
    body: 'Tinned tomatoes, canned beans, dried pasta, rice, stock cubes, and coconut milk can produce a dozen different dinners with minimal fresh shopping. Rotate the cans so nothing expires at the back of the shelf.',
  },
  {
    emoji: '🎡',
    title: 'Use a spinner for the nights you genuinely can\'t decide',
    body: 'Add your favourite 8–10 dinner ideas to a free wheel spinner and let it pick. Decision fatigue is real — outsourcing the choice to a wheel takes the friction out of the question entirely and gets you cooking faster.',
  },
];

const FAQS = [
  {
    q: 'What are the easiest dinners to make?',
    a: 'The easiest dinner ideas are ones that need little prep and few ingredients: shakshuka, egg fried rice, pasta aglio e olio, quesadillas, and pesto gnocchi are all on the table in under 20 minutes with a near-empty fridge. One-pot recipes come a close second because the oven or hob does most of the work.',
  },
  {
    q: 'What should I cook when I have nothing in the fridge?',
    a: 'Pantry staples are your friend here. Pasta aglio e olio needs only pasta, olive oil, garlic, and chilli. Egg fried rice works if you have eggs and rice. Chickpea curry can be made entirely from cans. Keeping a small set of tins and dried goods in the cupboard means a decent dinner is almost always possible.',
  },
  {
    q: 'How do I decide what to cook for dinner?',
    a: 'The simplest approach is to narrow the choice before you ask. Pick a category first — "I want something quick" or "I want something comforting" — and then choose from that shortlist. If you still can\'t decide, a free meal spinner wheel like the one at Spin The Choice can pick for you in seconds.',
  },
  {
    q: 'What are cheap dinner ideas for a family?',
    a: 'Budget-friendly family dinners lean on cheap proteins (eggs, canned beans, lentils, mince), carbs that stretch (rice, pasta, potatoes), and canned vegetables and pulses. Chickpea curry, bean burritos, vegetable frittata, potato and leek soup, and tuna noodle casserole are all satisfying for four people for a few dollars.',
  },
  {
    q: 'What are healthy quick dinner ideas?',
    a: 'Sheet pan salmon with vegetables, turkey stir-fry, grilled chicken with quinoa salad, and Buddha bowls are all genuinely nutritious and ready in 30 minutes or less. The key is a lean protein, a vegetable, and a grain or pulse — most combinations that hit those three are both healthy and fast.',
  },
];

export default function DinnerIdeasPost() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Article header */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
          <div className="flex items-center gap-2 text-xs text-violet-600 dark:text-violet-400 font-medium mb-3 uppercase tracking-wide">
            <Link href="/blog" className="hover:underline">Blog</Link>
            <span>›</span>
            <span>Food & Decisions</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            50 Easy Dinner Ideas When You Can't Decide What to Cook
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed max-w-2xl">
            It's 5 pm. Everyone is hungry. You're standing in the kitchen staring into the fridge
            wondering what on earth to make. Sound familiar? Here are 50 easy dinner ideas — organised
            by mood, time, and budget — so you never have to answer that question from scratch again.
          </p>
          <div className="mt-4 flex items-center gap-3 text-xs text-gray-400 dark:text-gray-600">
            <span>August 2025</span>
            <span>·</span>
            <span>9 min read</span>
            <span>·</span>
            <span>Spin The Choice</span>
          </div>
        </div>
      </div>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 space-y-14 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">

        {/* Intro */}
        <section>
          <p className="mb-4">
            Decision fatigue around dinner is a genuine problem. By the time evening comes, most
            people have already made hundreds of small decisions throughout the day — and choosing
            what to cook is the last thing a tired brain wants to tackle. The result is defaulting
            to the same four meals on rotation, ordering takeaway more than you planned, or spending
            20 minutes in debate with a partner who also has no idea.
          </p>
          <p className="mb-5">
            This list is designed to fix that. Fifty dinner ideas, grouped into five categories,
            so you can quickly filter by what you need tonight: fast, cheap, healthy, comforting,
            or minimal washing up. At the end, there's a free{' '}
            <Link href="/what-to-eat-wheel" className="text-violet-600 dark:text-violet-400 hover:underline font-medium">
              meal spinner wheel
            </Link>{' '}
            that will just pick for you, if reading a list still feels like too many decisions.
          </p>
          <div className="text-center">
            <Link
              href="/what-to-eat-wheel"
              className="inline-block bg-violet-600 hover:bg-violet-700 text-white font-bold px-7 py-3 rounded-full shadow transition-colors text-sm"
            >
              Skip the list — spin the wheel →
            </Link>
          </div>
        </section>

        {/* One-Pot */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            One-Pot Dinner Ideas
          </h2>
          <p className="mb-5 text-gray-600 dark:text-gray-400">
            One pot in, one pot out. These dinner ideas keep the washing up minimal and let
            the heat do the work. Most are also even better reheated the next day.
          </p>
          <ol className="space-y-3">
            {ONE_POT.map((item) => (
              <li
                key={item.n}
                className="flex gap-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 px-4 py-3"
              >
                <span className="flex-none w-7 h-7 rounded-full bg-violet-100 dark:bg-violet-900/40 text-violet-600 dark:text-violet-400 font-bold text-xs flex items-center justify-center mt-0.5">
                  {item.n}
                </span>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  <strong className="font-semibold text-gray-800 dark:text-gray-200">{item.name}.</strong>{' '}
                  {item.body}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* 30-Min */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            30-Minute Dinner Ideas
          </h2>
          <p className="mb-5 text-gray-600 dark:text-gray-400">
            Fast dinner ideas that don't feel like a compromise. All of these are on the table
            in half an hour or less — most in closer to 20 minutes.
          </p>
          <ol className="space-y-3">
            {THIRTY_MIN.map((item) => (
              <li
                key={item.n}
                className="flex gap-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 px-4 py-3"
              >
                <span className="flex-none w-7 h-7 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 font-bold text-xs flex items-center justify-center mt-0.5">
                  {item.n}
                </span>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  <strong className="font-semibold text-gray-800 dark:text-gray-200">{item.name}.</strong>{' '}
                  {item.body}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* Budget */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Budget Dinner Ideas
          </h2>
          <p className="mb-5 text-gray-600 dark:text-gray-400">
            Great dinner ideas don't require expensive ingredients. These meals are built from
            the cheap, long-life staples most households already have — pulses, eggs, pasta,
            tinned tomatoes, and root vegetables.
          </p>
          <ol className="space-y-3">
            {BUDGET.map((item) => (
              <li
                key={item.n}
                className="flex gap-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 px-4 py-3"
              >
                <span className="flex-none w-7 h-7 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 font-bold text-xs flex items-center justify-center mt-0.5">
                  {item.n}
                </span>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  <strong className="font-semibold text-gray-800 dark:text-gray-200">{item.name}.</strong>{' '}
                  {item.body}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* Mid-article CTA */}
        <section className="bg-violet-50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-800 rounded-2xl p-7 text-center">
          <div className="text-3xl mb-2">🎡</div>
          <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1">
            Still can't decide?
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 max-w-xs mx-auto">
            Add your favourite dinner ideas to a free spinner wheel and let it pick in seconds.
            No account needed.
          </p>
          <Link
            href="/what-to-eat-wheel"
            className="inline-block bg-violet-600 hover:bg-violet-700 text-white font-bold px-6 py-2.5 rounded-full shadow transition-colors text-sm"
          >
            Try the What to Eat Wheel →
          </Link>
        </section>

        {/* Healthy */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Healthy Dinner Ideas
          </h2>
          <p className="mb-5 text-gray-600 dark:text-gray-400">
            Healthy dinner ideas don't have to mean boring or time-consuming. These hit the
            nutritional marks — lean protein, plenty of vegetables, complex carbs — without
            asking much in return.
          </p>
          <ol className="space-y-3">
            {HEALTHY.map((item) => (
              <li
                key={item.n}
                className="flex gap-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 px-4 py-3"
              >
                <span className="flex-none w-7 h-7 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-400 font-bold text-xs flex items-center justify-center mt-0.5">
                  {item.n}
                </span>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  <strong className="font-semibold text-gray-800 dark:text-gray-200">{item.name}.</strong>{' '}
                  {item.body}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* Comfort */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Comfort Food Dinner Ideas
          </h2>
          <p className="mb-5 text-gray-600 dark:text-gray-400">
            Sometimes what you need from dinner isn't speed or nutrition — it's a bowl of
            something warm that makes the evening feel better. These are the dinner ideas
            for exactly those nights.
          </p>
          <ol className="space-y-3">
            {COMFORT.map((item) => (
              <li
                key={item.n}
                className="flex gap-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 px-4 py-3"
              >
                <span className="flex-none w-7 h-7 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 font-bold text-xs flex items-center justify-center mt-0.5">
                  {item.n}
                </span>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  <strong className="font-semibold text-gray-800 dark:text-gray-200">{item.name}.</strong>{' '}
                  {item.body}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* Spinner section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            How to Use a Meal Spinner Wheel to Decide
          </h2>
          <p className="mb-4">
            A list of 50 dinner ideas is useful. But if you're already suffering from decision
            fatigue, being handed 50 options doesn't always help — you've just moved the problem
            rather than solved it. That's where a meal spinner wheel earns its place.
          </p>
          <p className="mb-4">
            The{' '}
            <Link href="/what-to-eat-wheel" className="text-violet-600 dark:text-violet-400 hover:underline font-medium">
              What to Eat Wheel at Spin The Choice
            </Link>{' '}
            comes pre-loaded with popular dinner options and takes seconds to spin. But the
            real power is in customising it: add only the meals you actually like, the ones
            you have ingredients for, or the ones that fit your week's budget. Then spin, and
            the decision is made for you.
          </p>
          <ol className="space-y-3 mb-5">
            {[
              { n: '1', title: 'Open the wheel', body: 'Go to spinthechoice.com/what-to-eat-wheel. The wheel loads instantly — no account, no download.' },
              { n: '2', title: 'Add your dinner ideas', body: 'Type in 6–10 meals you\'re happy to cook this week. You can edit, add, or remove entries any time.' },
              { n: '3', title: 'Save the link', body: 'Click Share to get a URL that preserves your list. Bookmark it so your custom dinner wheel is one click away every evening.' },
              { n: '4', title: 'Spin', body: 'Hit spin when you can\'t decide. Whatever the wheel lands on is tonight\'s dinner. The decision is outsourced — the debate is over.' },
            ].map((s) => (
              <li key={s.n} className="flex gap-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-4">
                <span className="flex-none w-7 h-7 rounded-full bg-violet-100 dark:bg-violet-900/40 text-violet-600 dark:text-violet-400 font-bold text-xs flex items-center justify-center mt-0.5">
                  {s.n}
                </span>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  <strong className="font-semibold text-gray-800 dark:text-gray-200">{s.title}.</strong>{' '}
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
          <p>
            A household dinner wheel with 8–10 options covers every mood and changes what
            "what's for dinner?" feels like. Instead of a blank, stressful question, it becomes
            a single spin with an immediate answer.
          </p>
        </section>

        {/* 5 Tips */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            5 Tips for Making Dinner Decisions Easier
          </h2>
          <div className="space-y-4">
            {TIPS.map((tip) => (
              <div
                key={tip.title}
                className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{tip.emoji}</span>
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm">{tip.title}</h3>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{tip.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-violet-50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-800 rounded-2xl p-8 text-center">
          <div className="text-4xl mb-3">🍽️</div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            Build Your Personal Dinner Wheel
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 max-w-sm mx-auto">
            Add the dinner ideas from this list that you actually want to cook. Spin every time
            the question comes up. Free, no account needed, works on any device.
          </p>
          <Link
            href="/what-to-eat-wheel"
            className="inline-block bg-violet-600 hover:bg-violet-700 text-white font-bold px-8 py-3 rounded-full shadow transition-colors"
          >
            Create Your Free Dinner Wheel →
          </Link>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {FAQS.map((faq) => (
              <div
                key={faq.q}
                className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-2">{faq.q}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related */}
        <section>
          <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-500 uppercase tracking-wide mb-4">
            Related articles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/blog/decision-wheel-maker"
              className="block bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-4 hover:border-violet-400 dark:hover:border-violet-600 transition-colors group"
            >
              <div className="text-xl mb-1">🎯</div>
              <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                Decision Wheel Maker
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">How to build and use one for any choice.</p>
            </Link>
            <Link
              href="/what-to-eat-wheel"
              className="block bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-4 hover:border-violet-400 dark:hover:border-violet-600 transition-colors group"
            >
              <div className="text-xl mb-1">🍽️</div>
              <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                What to Eat Wheel
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">Spin to decide your next meal in seconds.</p>
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
}
