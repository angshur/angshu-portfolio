import type React from 'react'
import Link from 'next/link'
import { MDXRemote, type MDXRemoteProps } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

const components: MDXRemoteProps['components'] = {
  a: (props: any) => {
    const href = props.href as string
    const isExternal = href?.startsWith('http')
    if (isExternal) {
      return (
        <a {...props} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline dark:text-blue-400" />
      )
    }
    return <Link {...props} href={href} className="text-blue-600 hover:underline dark:text-blue-400" />
  },
}

export function Mdx({ source }: { source: string }) {
  return (
    <MDXRemote
      source={source}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'wrap' }]],
        },
      }}
      components={components}
    />
  )
}
