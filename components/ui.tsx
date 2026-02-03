import type React from "react";
import Link from 'next/link'
import { cn } from '@/lib/utils'

export function Container({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return <div className={cn('mx-auto max-w-6xl px-4', className)}>{children}</div>
}

export function Section({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return <section className={cn('py-14 md:py-20', className)}>{children}</section>
}

export function H1({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 md:text-5xl">
      {children}
    </h1>
  )
}

export function Lead({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-300 md:text-lg">
      {children}
    </p>
  )
}

export function Card({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        'group relative overflow-hidden rounded-2xl border border-slate-200/60 bg-white/70 p-6 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-glow dark:border-slate-900/60 dark:bg-slate-950/40',
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
        <div className="absolute -left-24 -top-24 h-48 w-48 rounded-full bg-blue-500/10 blur-2xl" />
        <div className="absolute -right-20 -bottom-20 h-44 w-44 rounded-full bg-violet-500/10 blur-2xl" />
      </div>
      <div className="relative">{children}</div>
    </div>
  )
}

export function Badge({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-slate-200/70 bg-white/50 px-2.5 py-1 text-xs font-medium text-slate-600 dark:border-slate-800/70 dark:bg-slate-950/30 dark:text-slate-300',
        className
      )}
    >
      {children}
    </span>
  )
}

export function Button({
  href,
  children,
  variant = 'primary',
  className,
}: {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  className?: string
}) {
  const base =
    'inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring-4 focus:ring-blue-500/15'
  const styles =
    variant === 'primary'
      ? 'bg-slate-900 text-white hover:opacity-90 dark:bg-white dark:text-slate-950'
      : 'border border-slate-200/70 bg-white/60 text-slate-900 hover:bg-white dark:border-slate-800/70 dark:bg-slate-950/30 dark:text-slate-50'

  return (
    <Link href={href} className={cn(base, styles, className)}>
      {children}
    </Link>
  )
}
