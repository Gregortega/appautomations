import fs from "fs"
import path from "path"
import matter from "gray-matter"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Workflow, ArrowRight, Calendar, User } from "lucide-react"

export default function BlogPage() {
  const blogs = getBlogs()
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center">
        <Link className="flex items-center justify-center" href="/">
          <Workflow className="h-6 w-6 text-pink-500" />
          <span className="ml-2 text-xl font-bold">appautomations.com.au</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/blog"
          >
            Blog
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            About
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Contact
          </Link>
        </nav>
      </header>

      <main className="flex-grow container mx-auto px-4 md:px-6 py-8">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-8 text-center">
          Our Blog
        </h1>
        <p className="text-xl text-gray-600 mb-12 text-center max-w-2xl mx-auto">
          Stay updated with the latest insights, tips, and success stories in
          business automation.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((post) => (
            <Card key={post.slug} className="flex flex-col">
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{"exceprt"}</p>
                <div className="flex items-center text-sm text-gray-500 space-x-4"></div>
              </CardContent>
              <CardFooter className="mt-auto">
                <Button variant="outline" className="w-full">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="px-4 py-6 border-t">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center space-x-2">
              <Workflow className="h-6 w-6 text-pink-500" />
              <span className="text-sm font-medium">appautomations.com.au</span>
            </div>
            <p className="text-sm text-gray-500">
              © 2024 appautomations.com.au. All rights reserved.
            </p>
            <nav className="flex gap-4">
              <Link
                className="text-sm hover:underline underline-offset-4"
                href="#"
              >
                Privacy
              </Link>
              <Link
                className="text-sm hover:underline underline-offset-4"
                href="#"
              >
                Terms
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}

function getBlogs() {
  const blogDir = path.join(process.cwd(), "content/blogs")
  const filenames = fs.readdirSync(blogDir)

  return filenames.map((filename) => {
    const filePath = path.join(blogDir, filename)
    const fileContent = fs.readFileSync(filePath, "utf-8")
    const { data } = matter(fileContent)

    return {
      slug: filename.replace(".md", ""),
      title: data.title || "Untitled Blog",
      description: data.description || "",
      image: data.image || null // Add an image field in your markdown
    }
  })
}
