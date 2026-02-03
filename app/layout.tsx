import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: {
    default: 'Angshu Rudra — Product + AI Portfolio',
    template: '%s | Angshu Rudra',
  },
  description: 'Portfolio showcasing the TapClicks products I manage, product teardowns, writing, and case studies.',
  metadataBase: new URL('https://example.com'),
  openGraph: {
    title: 'Angshu Rudra — Product + AI Portfolio',
    description: 'Products, teardowns, writing, and portfolio case studies.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-white text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-50">
        <ThemeProvider>
          <div className="noise min-h-screen">
            <div className="bg-hero">
              <SiteNav />
              <main>{children}</main>
              <SiteFooter />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
