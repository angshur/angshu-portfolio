import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', 'SF Pro Display', 'Inter', 'Arial'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(255,255,255,.08), 0 12px 40px rgba(0,0,0,.35)',
      },
      backgroundImage: {
        'hero': 'radial-gradient(1200px 600px at 20% 10%, rgba(59,130,246,.22), transparent 60%), radial-gradient(900px 500px at 80% 30%, rgba(168,85,247,.18), transparent 55%), radial-gradient(700px 500px at 60% 90%, rgba(34,197,94,.12), transparent 55%)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

export default config
