export const runtime = "nodejs" // Ensure Node.js runtime for fs operations

import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { marked } from 'marked'
import { Layout } from "@/components/shared/layout"

export async function generateStaticParams() {
  const blogDir = path.join(process.cwd(), "content/blogs")
  const filenames = fs.readdirSync(blogDir)

  return filenames.map((filename) => ({
    slug: filename.replace(".md", "") // Remove .md extension
  }))
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const { title, date, content } = getBlogPost(params.slug)
  
  return (
    <Layout>
      <article className="container mx-auto px-4 md:px-6 py-8 prose prose-pink lg:prose-xl">
        <h1>{title}</h1>
        <time className="text-gray-500" dateTime={date}>
          {new Date(date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <div dangerouslySetInnerHTML={{ __html: marked(content) }} />
      </article>
    </Layout>
  )
}

function getBlogPost(slug: string) {
  const markdownFile = fs.readFileSync(
    path.join(process.cwd(), "content", "blogs", `${slug}.md`),
    "utf-8"
  )

  const { data: frontmatter, content } = matter(markdownFile)
  return {
    title: frontmatter.title,
    date: frontmatter.date,
    content,
  }
}
