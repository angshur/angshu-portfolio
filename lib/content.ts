import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

export type ContentType = 'products' | 'writing' | 'teardowns' | 'portfolio'

export type ContentMeta = {
  title: string
  description?: string
  date?: string
  tags?: string[]
  role?: string
  company?: string
  timeline?: string
  impact?: string
  links?: { label: string; url: string }[]
}

export type ContentItem = {
  slug: string
  meta: ContentMeta
  content: string
}

function dirFor(type: ContentType) {
  return path.join(process.cwd(), 'content', type)
}

function sortByDateDesc(a: ContentItem, b: ContentItem) {
  const ad = a.meta.date ? new Date(a.meta.date).getTime() : 0
  const bd = b.meta.date ? new Date(b.meta.date).getTime() : 0
  return bd - ad
}

export function getAll(type: ContentType): ContentItem[] {
  const dir = dirFor(type)
  const files = fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.mdx') || f.endsWith('.md'))

  const items = files.map((file) => {
    const slug = file.replace(/\.(mdx|md)$/, '').toLowerCase()
    const raw = fs.readFileSync(path.join(dir, file), 'utf8')
    const parsed = matter(raw)
    const data: any = parsed.data

    if (data?.date instanceof Date) {
    // convert Date object to YYYY-MM-DD
     data.date = data.date.toISOString().slice(0, 10)
    }
	

    return {
      slug,
      meta: (parsed.data || {}) as ContentMeta,
      content: parsed.content,
    }
  })

  return items.sort(sortByDateDesc)
}

export function getBySlug(type: ContentType, slug: string): ContentItem {
  const dir = dirFor(type)
  const full = path.join(dir, `${slug}.mdx`)
  const fallback = path.join(dir, `${slug}.md`)
  const file = fs.existsSync(full) ? full : fallback

  const raw = fs.readFileSync(file, 'utf8')
  const parsed = matter(raw)

  return {
    slug,
    meta: (parsed.data || {}) as ContentMeta,
    content: parsed.content,
  }
}
