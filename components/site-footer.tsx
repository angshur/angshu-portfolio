import Link from 'next/link'

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200/50 py-10 dark:border-slate-900/60">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-slate-500 dark:text-slate-400">© {year} Angshu Rudra. Built with Next.js.</p>
          <div className="flex items-center gap-4 text-sm">
            <Link className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-50" href="https://www.linkedin.com/in/angshumanrudra/">LinkedIn</Link>
            <Link className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-50" href="https://thedigitaltag.com/">The Digital Tag</Link>
            <Link className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-50" href="/resume">Resume</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
