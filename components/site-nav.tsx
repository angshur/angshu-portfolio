import Link from 'next/link'
import { ThemeToggle } from '@/components/theme-toggle'

const links = [
  { href: '/products', label: 'Products' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/teardowns', label: 'Teardowns' },
  { href: '/writing', label: 'Writing' },
  { href: '/about', label: 'About' },
]

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/50 bg-white/65 backdrop-blur dark:border-slate-900/60 dark:bg-slate-950/40">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="group inline-flex items-center gap-2">
          <span className="h-8 w-8 rounded-xl bg-gradient-to-br from-blue-500/80 via-violet-500/70 to-emerald-500/60 shadow-sm" />
          <span className="text-sm font-semibold tracking-tight text-slate-900 dark:text-slate-50">
            Angshu Rudra
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-50"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            href="/contact"
            className="hidden rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:opacity-90 dark:bg-white dark:text-slate-950 md:inline-flex"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  )
}
