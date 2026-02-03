import Link from 'next/link'
import { Container, Section, H1, Lead, Card, Badge } from '@/components/ui'
import { getAll } from '@/lib/content'

export const metadata = { title: 'Teardowns' }

export default function TeardownsPage() {
  const items = getAll('teardowns')

  return (
    <Section>
      <Container>
        <H1>Teardowns</H1>
        <Lead>
          Deep dives on products I admire (or... worry about): positioning, UX, data architecture, and moats.
        </Lead>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {items.map((item) => (
            <Link key={item.slug} href={`/teardowns/${item.slug}`} className="block">
              <Card>
                <p className="text-lg font-semibold">{item.meta.title}</p>
                {item.meta.description ? (
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{item.meta.description}</p>
                ) : null}
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  {item.meta.date ? <Badge>{item.meta.date}</Badge> : null}
                  {item.meta.tags?.slice(0, 3).map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  )
}
