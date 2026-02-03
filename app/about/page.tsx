import { Container, Section, H1, Lead, Card, Badge } from '@/components/ui'

export const metadata = { title: 'About' }

export default function AboutPage() {
  return (
    <Section>
      <Container>
        <H1>About</H1>
        <Lead>
          I’m Angshu — a product and engineering leader focused on data platforms, analytics, and AI.
        </Lead>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Card>
            <p className="text-sm font-semibold">What I build</p>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Data ingest + normalization, ETL/ELT, embedded analytics, and “insight-to-action” agentic workflows.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Badge>ETL/ELT</Badge>
              <Badge>Embedded BI</Badge>
              <Badge>APIs</Badge>
              <Badge>AI agents</Badge>
            </div>
          </Card>

          <Card>
            <p className="text-sm font-semibold">How I work</p>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Fast iteration with crisp docs: problem → constraints → decision log → measurable outcomes.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Badge>Customer discovery</Badge>
              <Badge>Systems thinking</Badge>
              <Badge>Execution</Badge>
            </div>
          </Card>
        </div>

        <Card className="mt-6">
          <p className="text-sm font-semibold">Now</p>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Leading Data & Analytics Platform products at TapClicks (ETL/ELT, reporting, analytics, AI). Building a public-facing portfolio of product work and writing.
          </p>
        </Card>
      </Container>
    </Section>
  )
}
