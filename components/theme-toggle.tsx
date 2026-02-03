'use client'

import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const current = theme === 'system' ? systemTheme : theme
  const isDark = current === 'dark'

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      className={cn(
        'inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200/60 bg-white/70 shadow-sm backdrop-blur transition hover:bg-white dark:border-slate-800/60 dark:bg-slate-950/40 dark:hover:bg-slate-950',
        className
      )}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
    >
      {mounted ? (
        isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />
      ) : (
        <span className="h-4 w-4" />
      )}
    </button>
  )
}
