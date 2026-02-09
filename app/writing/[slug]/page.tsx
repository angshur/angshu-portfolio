import { notFound } from 'next/navigation'
import { Container, Section, Badge } from '@/components/ui'
import { getAll, getBySlug } from '@/lib/content'
import { Mdx } from '@/lib/mdx'

export async function generateStaticParams() {
  return getAll('writing').map((p) => ({ slug: p.slug }))
}

export default async function WritingPost({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  let item
  try {
    item = getBySlug('writing', slug)
  } catch {
    notFound()
  }

  return (
    <Section>
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm text-slate-500 dark:text-slate-400">Writing</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">{item.meta.title}</h1>
          {item.meta.description ? (
            <p className="mt-4 text-base text-slate-600 dark:text-slate-300">{item.meta.description}</p>
          ) : null}

          <div className="mt-6 flex flex-wrap gap-2">
            {item.meta.date ? <Badge>{String(item.meta.date)}</Badge> : null}
            {item.meta.tags?.map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>

          <article className="prose prose-slate mt-10 max-w-none dark:prose-invert">
            <Mdx source={item.content} />
          </article>
        </div>
      </Container>
    </Section>
  )
}

