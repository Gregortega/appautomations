export const runtime = "nodejs" // Ensure Node.js runtime for fs operations

import fs from "fs"
import path from "path"
import matter from "gray-matter"

export async function generateStaticParams() {
  const blogDir = path.join(process.cwd(), "content/blogs")
  const filenames = fs.readdirSync(blogDir)

  return filenames.map((filename) => ({
    slug: filename.replace(".md", "") // Remove .md extension
  }))
}

export default async function BlogPost(props: any) {
  const { slug } = props.params
  
  if (!slug) {
    throw new Error("Slug is required to load the blog post.")
  }

  const blog = await getBlog(slug)

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold">Blog Not Found</h1>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white py-10 px-5">
      <article className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">{blog.title}</h1>
        <p className="text-gray-600 mb-4">{blog.date}</p>
        <div
          className="prose prose-lg"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        ></div>
      </article>
    </div>
  )
}

async function getBlog(slug: string) {
  try {
    const filePath = path.join(process.cwd(), "content/blogs", `${slug}.md`)
    const fileContent = fs.readFileSync(filePath, "utf-8")
    const { data, content } = matter(fileContent)

    return {
      title: data.title || "Untitled Blog",
      date: data.date || "Unknown Date",
      content
    }
  } catch (error) {
    return null // Handle cases where the file doesn't exist
  }
}
