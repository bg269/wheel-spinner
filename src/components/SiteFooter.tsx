import Link from 'next/link';

const WHEELS = [
  { href: '/what-to-eat-wheel',  label: 'What to Eat Wheel' },
  { href: '/random-name-picker', label: 'Random Name Picker' },
  { href: '/yes-or-no-wheel',    label: 'Yes or No Wheel' },
  { href: '/brain-break-wheel',  label: 'Brain Break Wheel' },
  { href: '/game-night-wheel',   label: 'Game Night Wheel' },
  { href: '/team-picker-wheel',  label: 'Team Picker Wheel' },
  { href: '/gallery',            label: 'All Wheels' },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">

          <div>
            <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-3">Spin</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Home</Link></li>
              {WHEELS.map((w) => (
                <li key={w.href}>
                  <Link href={w.href} className="text-sm text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
                    {w.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-3">Learn</h3>
            <ul className="space-y-2">
              <li><Link href="/blog" className="text-sm text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Blog</Link></li>
              <li><Link href="/classroom" className="text-sm text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Classroom</Link></li>
              <li><Link href="/spin-the-wheel" className="text-sm text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Spin the Wheel</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-3">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Contact</Link></li>
              <li><Link href="/privacy" className="text-sm text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Terms</Link></li>
            </ul>
          </div>

        </div>
        <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800 text-center">
          <p className="text-xs text-gray-400 dark:text-gray-600">
            © {new Date().getFullYear()} Spin The Choice · Free wheel spinner for classrooms, game nights, and everyday decisions.
          </p>
        </div>
      </div>
    </footer>
  );
}
