import fs from "fs"
import path from "path"

export default function AdminPage() {
  const html = fs.readFileSync(
    path.join(process.cwd(), "admin/index.html"),
    "utf-8"
  )
  return <div dangerouslySetInnerHTML={{ __html: html }} />
}
