"use client"

import Link from "next/link"
import { Workflow, Menu, X } from "lucide-react"
import { useState } from "react"

export function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="sticky top-0 w-full bg-white border-b z-50">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Link className="flex items-center" href="/">
                <Workflow className="h-6 w-6 text-pink-500 flex-shrink-0" />
                <span className="ml-2 text-xl font-bold">
                  appautomations.com.au
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden sm:flex items-center space-x-8">
              <Link 
                className="text-sm font-medium text-gray-700 hover:text-pink-500 transition-colors" 
                href="#"
              >
                Services
              </Link>
              <Link 
                className="text-sm font-medium text-gray-700 hover:text-pink-500 transition-colors" 
                href="#"
              >
                About
              </Link>
              <Link 
                className="text-sm font-medium text-gray-700 hover:text-pink-500 transition-colors" 
                href="/blog"
              >
                Blog
              </Link>
              <Link 
                className="text-sm font-medium text-gray-700 hover:text-pink-500 transition-colors" 
                href="#"
              >
                Contact
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="sm:hidden"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="sm:hidden border-t bg-white">
            <nav className="flex flex-col divide-y divide-gray-100">
              <Link
                className="px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-pink-500"
                href="#"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                className="px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-pink-500"
                href="#"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                className="px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-pink-500"
                href="/blog"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                className="px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-pink-500"
                href="#"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col items-center space-y-4 sm:flex-row sm:justify-between sm:space-y-0">
            <div className="flex items-center space-x-2">
              <Workflow className="h-6 w-6 text-pink-500" />
              <span className="text-sm font-medium">appautomations.com.au</span>
            </div>
            <p className="text-sm text-gray-500 text-center">
              2024 appautomations.com.au. All rights reserved.
            </p>
            <nav className="flex gap-4">
              <Link 
                className="text-sm text-gray-500 hover:text-pink-500 transition-colors" 
                href="#"
              >
                Privacy
              </Link>
              <Link 
                className="text-sm text-gray-500 hover:text-pink-500 transition-colors" 
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
