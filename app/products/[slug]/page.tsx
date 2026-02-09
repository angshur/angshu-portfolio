export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  let item
  try {
    item = getBySlug('products', slug)
  } catch {
    notFound()
  }

  const links = item.meta.links ?? []

  return (
    <Section>
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm text-slate-500 dark:text-slate-400">Products</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">{item.meta.title}</h1>
          {item.meta.description ? (
            <p className="mt-4 text-base text-slate-600 dark:text-slate-300">{item.meta.description}</p>
          ) : null}

          <div className="mt-6 flex flex-wrap gap-2">
            {item.meta.tags?.map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>

          <div className="mt-8 grid gap-4 rounded-2xl border border-slate-200/60 bg-white/60 p-6 backdrop-blur dark:border-slate-900/60 dark:bg-slate-950/30 md:grid-cols-3">
            {item.meta.role ? (
              <div>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">Role</p>
                <p className="mt-1 text-sm">{item.meta.role}</p>
              </div>
            ) : null}
            {item.meta.timeline ? (
              <div>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">Timeline</p>
                <p className="mt-1 text-sm">{item.meta.timeline}</p>
              </div>
            ) : null}
            {item.meta.impact ? (
              <div>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">Impact</p>
                <p className="mt-1 text-sm">{item.meta.impact}</p>
              </div>
            ) : null}
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

