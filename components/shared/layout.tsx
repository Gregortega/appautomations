import Link from "next/link"
import { Workflow } from "lucide-react"

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center">
        <Link className="flex items-center justify-center" href="/">
          <Workflow className="h-6 w-6 text-pink-500" />
          <span className="ml-2 text-xl font-bold">appautomations.com.au</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Services
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/blog">
            Blog
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
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
              2024 appautomations.com.au. All rights reserved.
            </p>
            <nav className="flex gap-4">
              <Link className="text-sm hover:underline underline-offset-4" href="#">
                Privacy
              </Link>
              <Link className="text-sm hover:underline underline-offset-4" href="#">
                Terms
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}
