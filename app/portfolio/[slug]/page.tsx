import { notFound } from 'next/navigation'
import { Container, Section, Badge, Button } from '@/components/ui'
import { getAll, getBySlug } from '@/lib/content'
import { Mdx } from '@/lib/mdx'

export async function generateStaticParams() {
  return getAll('portfolio').map((p) => ({ slug: p.slug }))
}

export default function PortfolioCaseStudy({ params }: { params: { slug: string } }) {
  let item
  try {
    item = getBySlug('portfolio', params.slug)
  } catch {
    notFound()
  }

  const links = item.meta.links ?? []

  return (
    <Section>
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm text-slate-500 dark:text-slate-400">Portfolio</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">{item.meta.title}</h1>
          {item.meta.description ? (
            <p className="mt-4 text-base text-slate-600 dark:text-slate-300">{item.meta.description}</p>
          ) : null}

          <div className="mt-6 flex flex-wrap gap-2">
            {item.meta.timeline ? <Badge>{item.meta.timeline}</Badge> : null}
            {item.meta.tags?.map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>

          {links.length ? (
            <div className="mt-6 flex flex-wrap gap-2">
              {links.map((l) => (
                <Button key={l.url} href={l.url} variant="secondary">
                  {l.label}
                </Button>
              ))}
            </div>
          ) : null}

          <article className="prose prose-slate mt-10 max-w-none dark:prose-invert">
            <Mdx source={item.content} />
          </article>
        </div>
      </Container>
    </Section>
  )
}
