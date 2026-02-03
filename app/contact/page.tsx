import Link from 'next/link'
import { Container, Section, H1, Lead, Card, Button } from '@/components/ui'

export const metadata = { title: 'Contact' }

export default function ContactPage() {
  return (
    <Section>
      <Container>
        <H1>Contact</H1>
        <Lead>
          Want to talk about AI product leadership, data platforms, or MarTech analytics?
        </Lead>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Card>
            <p className="text-sm font-semibold">Email</p>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Best for recruiter intros, speaking, and advisory work.</p>
            <div className="mt-5">
              <Button href="mailto:angshuman.rudra@gmail.com">angshuman.rudra@gmail.com</Button>
            </div>
          </Card>

          <Card>
            <p className="text-sm font-semibold">LinkedIn</p>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">If you DM me, include context + what you want to solve.</p>
            <div className="mt-5">
              <Button href="https://www.linkedin.com/in/angshumanrudra/" variant="secondary">Message me on LinkedIn</Button>
            </div>
          </Card>
        </div>

        <p className="mt-10 text-sm text-slate-500 dark:text-slate-400">
          Prefer a quick scan? Open the <Link href="/resume" className="underline">resume</Link>.
        </p>
      </Container>
    </Section>
  )
}
