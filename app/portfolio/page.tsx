import Link from 'next/link'
import { Container, Section, H1, Lead, Card, Badge } from '@/components/ui'
import { getAll } from '@/lib/content'

export const metadata = { title: 'Portfolio' }

export default function PortfolioPage() {
  const items = getAll('portfolio')

  return (
    <Section>
      <Container>
        <H1>Portfolio case studies</H1>
        <Lead>
          A few projects written like a PM: context → tradeoffs → execution → impact.
        </Lead>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {items.map((item) => (
            <Link key={item.slug} href={`/portfolio/${item.slug}`} className="block">
              <Card>
                <p className="text-lg font-semibold">{item.meta.title}</p>
                {item.meta.description ? (
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{item.meta.description}</p>
                ) : null}
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  {item.meta.timeline ? <Badge>{item.meta.timeline}</Badge> : null}
                  {item.meta.tags?.slice(0, 4).map((t) => (
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
