import Link from 'next/link'
import { Container, Section, H1, Lead, Card, Badge } from '@/components/ui'
import { getAll } from '@/lib/content'

export const metadata = {
  title: 'Products',
}

export default function ProductsPage() {
  const items = getAll('products')

  return (
    <Section>
      <Container>
        <H1>TapClicks products I manage</H1>
        <Lead>
          The products and platform initiatives I own — what they do, why they matter, and the outcomes.
        </Lead>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {items.map((item) => (
            <Link key={item.slug} href={`/products/${item.slug}`} className="block">
              <Card>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-lg font-semibold">{item.meta.title}</p>
                    {item.meta.description ? (
                      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{item.meta.description}</p>
                    ) : null}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.meta.tags?.slice(0, 4).map((t) => (
                        <Badge key={t}>{t}</Badge>
                      ))}
                    </div>
                  </div>
                  <span className="text-xs text-slate-500 dark:text-slate-400">→</span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  )
}
