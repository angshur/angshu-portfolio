import { Container, Section, H1, Lead, Card, Badge, Button } from '@/components/ui'
import { getAll } from '@/lib/content'
import Link from 'next/link'

export default function HomePage() {
  const products = getAll('products').slice(0, 3)
  const writing = getAll('writing').slice(0, 3)

  return (
    <>
      <Section className="pt-14 md:pt-20">
        <Container>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/60 bg-white/60 px-3 py-1 text-sm text-slate-600 backdrop-blur dark:border-slate-900/60 dark:bg-slate-950/30 dark:text-slate-300">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Product leader • Data platforms • AI agents
            </div>

            <H1>
              Building data + AI products that turn messy marketing data into decisions teams can ship.
            </H1>
            <Lead>
              I lead analytics, ETL/ELT, reporting, and AI initiatives at TapClicks. Here’s a curated view of the products I manage, the decisions behind them, and how I think.
            </Lead>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href="/products">Explore products</Button>
              <Button href="/portfolio" variant="secondary">
                View case studies
              </Button>
              <Link
                href="/contact"
                className="text-sm text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-50"
              >
                Or get in touch →
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-2">
              <Badge>ETL/ELT + pipelines</Badge>
              <Badge>Embedded BI + dashboards</Badge>
              <Badge>AI Operator Agents</Badge>
              <Badge>B2B SaaS • $40M ARR scale</Badge>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">Products</p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                A breakdown of the TapClicks products and major initiatives I own — goals, scope, and impact.
              </p>
              <div className="mt-5">
                <Button href="/products" variant="secondary">Browse products</Button>
              </div>
            </Card>
            <Card>
              <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">Teardowns</p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                Honest product analyses: positioning, UX, data architecture, and where the leverage is.
              </p>
              <div className="mt-5">
                <Button href="/teardowns" variant="secondary">Read teardowns</Button>
              </div>
            </Card>
            <Card>
              <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">Writing</p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                Essays and practical notes on AI product leadership, data engineering, and MarTech.
              </p>
              <div className="mt-5">
                <Button href="/writing" variant="secondary">Read writing</Button>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-xl font-semibold tracking-tight">Latest products</h2>
              <div className="mt-4 grid gap-4">
                {products.map((p) => (
                  <Link key={p.slug} href={`/products/${p.slug}`} className="block">
                    <Card>
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-base font-semibold">{p.meta.title}</p>
                          {p.meta.description ? (
                            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                              {p.meta.description}
                            </p>
                          ) : null}
                        </div>
                        <span className="text-xs text-slate-500 dark:text-slate-400">→</span>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold tracking-tight">Latest writing</h2>
              <div className="mt-4 grid gap-4">
                {writing.map((w) => (
                  <Link key={w.slug} href={`/writing/${w.slug}`} className="block">
                    <Card>
                      <p className="text-base font-semibold">{w.meta.title}</p>
                      {w.meta.description ? (
                        <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{w.meta.description}</p>
                      ) : null}
                      {w.meta.date ? (
                        <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">{w.meta.date}</p>
                      ) : null}
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Card className="p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-semibold">Want the recruiter-friendly version?</p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  A clean, one-page resume view with links to case studies.
                </p>
              </div>
              <Button href="/resume">Open resume</Button>
            </div>
          </Card>
        </Container>
      </Section>
    </>
  )
}
