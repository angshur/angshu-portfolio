# Angshu Portfolio (Next.js + Tailwind + MDX)

A clean, modern portfolio site with:
- Products (TapClicks initiatives)
- Portfolio case studies
- Teardowns
- Writing
- Dark mode
- MDX content with frontmatter

## 1) Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Next.

## 2) Add your content

All content lives in `content/`:
- `content/products/*.mdx`
- `content/portfolio/*.mdx`
- `content/teardowns/*.mdx`
- `content/writing/*.mdx`

Each file supports frontmatter fields like:

```yaml
title:
description:
date:
tags:
role:
timeline:
impact:
links:
  - label:
    url:
```

## 3) Change site metadata

Update `metadataBase` in `app/layout.tsx` to your real domain.

## 4) Deploy to Vercel

1. Push this repo to GitHub
2. Import into Vercel
3. Framework: Next.js
4. Build command: `npm run build`
5. Output: default

That’s it.

---

If you want, tell me:
- your preferred name header (Angshuman vs Angshu)
- the 8–12 TapClicks products/features you want highlighted
- 3 “signature” wins (with metrics)

…and I’ll convert your real content into MDX and make the homepage feel *custom* (not templated).
