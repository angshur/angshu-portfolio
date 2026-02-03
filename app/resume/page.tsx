import { Container, Section, H1, Lead, Card, Badge } from '@/components/ui'

export const metadata = { title: 'Resume' }

export default function ResumePage() {
  return (
    <Section>
      <Container>
        <H1>Resume</H1>
        <Lead>
          A recruiter-friendly overview. Full case studies are linked from the portfolio section.
        </Lead>

        <div className="mt-10 grid gap-6">
          <Card>
            <p className="text-sm font-semibold">Summary</p>
            <ul className="mt-3 list-disc pl-5 text-sm text-slate-600 dark:text-slate-300">
              <li>Director of Product Management leading Data & Analytics Platform products at TapClicks.</li>
              <li>19+ years across product + engineering: data pipelines, embedded analytics, and AI workflows.</li>
              <li>Built and scaled B2B SaaS products powering reporting and optimization for agencies and media companies.</li>
            </ul>
          </Card>

          <Card>
            <p className="text-sm font-semibold">Core strengths</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                'ETL/ELT & data pipelines',
                'Embedded analytics & dashboards',
                'AI agent UX + orchestration',
                'Enterprise integrations / APIs',
                'GTM + pricing',
                'Exec communication',
              ].map((s) => (
                <Badge key={s}>{s}</Badge>
              ))}
            </div>
          </Card>

          <Card>
            <p className="text-sm font-semibold">Experience</p>
            <div className="mt-4 space-y-5 text-sm">
              <div>
                <p className="font-semibold">TapClicks — Director of Product Management (Data, Analytics & AI)</p>
                <p className="mt-1 text-slate-600 dark:text-slate-300">Own ETL/ELT, reporting, analytics, and AI initiatives. (Add dates + key wins.)</p>
              </div>
              <div>
                <p className="font-semibold">Earlier roles</p>
                <p className="mt-1 text-slate-600 dark:text-slate-300">Add: Adobe, Yahoo, AMD, consulting, etc.</p>
              </div>
            </div>
          </Card>

          <Card>
            <p className="text-sm font-semibold">Selected work</p>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Add 3–5 “headline” achievements here and link each to a portfolio case study.
            </p>
          </Card>
        </div>
      </Container>
    </Section>
  )
}
