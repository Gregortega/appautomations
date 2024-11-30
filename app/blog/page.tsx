import fs from "fs"
import path from "path"
import matter from "gray-matter"
import Link from "next/link"
import { Layout } from "@/components/shared/layout"

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function BlogPage() {
  const blogs = getBlogs()
  return (
    <Layout>
      <div className="container mx-auto px-4 md:px-6 py-8">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-8 text-center">
          Our Blog
        </h1>
        <p className="text-xl text-gray-600 mb-12 text-center max-w-2xl mx-auto">
          Stay updated with the latest insights, tips, and success stories in
          business automation.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
              <Card className="flex flex-col h-full transition-transform duration-200 ease-in-out group-hover:scale-[1.02]">
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{post.excerpt}</p>
                </CardContent>
                <CardFooter className="mt-auto">
                  <p className="text-sm text-pink-500 group-hover:underline">Read full article</p>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  )
}

function getBlogs() {
  const blogsDirectory = path.join(process.cwd(), "content", "blogs")
  const files = fs.readdirSync(blogsDirectory)
  
  return files.map((filename) => {
    const slug = filename.replace(".md", "")
    const fullPath = path.join(blogsDirectory, filename)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data: frontmatter, excerpt } = matter(fileContents, { excerpt: true })

    return {
      slug,
      title: frontmatter.title,
      date: frontmatter.date,
      excerpt: frontmatter.excerpt || excerpt || "",
    }
  })
}
