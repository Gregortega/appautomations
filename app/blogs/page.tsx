import fs from "fs"
import path from "path"
import matter from "gray-matter"

export default async function BlogsPage() {
  const posts = getBlogPosts()

  return (
    <div>
      <h1>Blogs</h1>
      {posts.map((post) => (
        <div key={post.slug}>
          <h2>{post.title}</h2>
          <p>{post.date}</p>
          <p>{post.excerpt}</p>
        </div>
      ))}
    </div>
  )
}

function getBlogPosts() {
  const blogDir = path.join(process.cwd(), "content/blogs")
  const filenames = fs.readdirSync(blogDir)

  return filenames.map((filename) => {
    const filePath = path.join(blogDir, filename)
    const fileContent = fs.readFileSync(filePath, "utf-8")
    const { data, content } = matter(fileContent)

    return {
      slug: filename.replace(".md", ""),
      title: data.title,
      date: data.date,
      excerpt: content.slice(0, 100) + "..."
    }
  })
}
