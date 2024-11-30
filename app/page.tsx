"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Bot, Mail, FileText, FileSpreadsheet, Workflow, Zap, ArrowRight, Plus, Minus, Menu, X } from 'lucide-react'
import Link from "next/link"
import { useState } from "react"

const apps = [
  { name: "Notion", icon: "/app-logos/notion.png" },
  { name: "HubSpot", icon: "/app-logos/hubspot.png" },
  { name: "Google Sheets", icon: "/app-logos/google-sheets.png" },
  { name: "Gmail", icon: "/app-logos/gmail.png" },
  { name: "Canva", icon: "/app-logos/canva.png" },
  { name: "Webflow", icon: "/app-logos/webflow.png" },
  { name: "LinkedIn", icon: "/app-logos/linkedin.png" },
  { name: "Facebook", icon: "/app-logos/facebook.png" },
  { name: "ChatGPT", icon: "/app-logos/chatgpt.png" },
  { name: "Airtable", icon: "/app-logos/airtable.png" },
  { name: "Google Drive", icon: "/app-logos/google-drive.png" }
]

const faqs = [
  {
    question: "What is app automation?",
    answer: "App automation is the process of creating workflows that connect different applications and automate repetitive tasks, saving time and reducing errors in your business processes."
  },
  {
    question: "How can app automation benefit my business?",
    answer: "App automation can significantly improve efficiency, reduce manual errors, save time on repetitive tasks, and allow your team to focus on more strategic activities, ultimately leading to increased productivity and cost savings."
  },
  {
    question: "What types of processes can be automated?",
    answer: "Many business processes can be automated, including data entry, email responses, invoice generation, social media posting, customer support, and more. If a task is repetitive and rule-based, it's likely a good candidate for automation."
  },
  {
    question: "Do I need technical skills to use your automation services?",
    answer: "No, you don't need technical skills. Our team of experts will handle the technical aspects of setting up and maintaining your automation workflows. We'll work with you to understand your needs and implement the right solutions."
  },
  {
    question: "How long does it take to implement an automation solution?",
    answer: "The implementation time can vary depending on the complexity of the automation. Simple workflows can be set up in a few days, while more complex integrations might take a few weeks. We'll provide you with a timeline estimate after our initial consultation."
  }
]

import { useEffect } from "react"
const netlifyIdentity = require("netlify-identity-widget")

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex w-full items-center justify-between text-left"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="text-lg font-medium">{question}</span>
        {isOpen ? (
          <Minus className="h-5 w-5 text-gray-500" />
        ) : (
          <Plus className="h-5 w-5 text-gray-500" />
        )}
      </button>
      {isOpen && (
        <p className="mt-2 text-gray-600">{answer}</p>
      )}
    </div>
  )
}

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  useEffect(() => {
    // Initialize Netlify Identity
    netlifyIdentity.init()

    // Check for the invitation token in the URL
    const params = new URLSearchParams(window.location.hash.slice(1))
    const inviteToken = params.get("invite_token")

    if (inviteToken) {
      // Accept the invitation token
      interface NetlifyIdentity {
        init: () => void
        acceptInvite: (token: string) => Promise<void>
      }

      const netlifyIdentity: NetlifyIdentity = require("netlify-identity-widget")

      netlifyIdentity
        .acceptInvite(inviteToken as string)
        .then(() => {
          alert("Invitation accepted! Redirecting to the admin interface...")
          // Clear the token from the URL and redirect
          window.location.hash = ""
          window.location.href = "/admin"
        })
        .catch((error: Error) => {
          console.error("Error accepting invitation:", error)
          alert("Failed to accept the invitation. Please try again.")
        })
    }
  }, [])

  return (
    <div className="min-h-screen bg-white">
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

      {/* Hero Section */}
      <section className="px-4 py-12 md:py-24 lg:py-32 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Automate Your Business with
                <span className="text-pink-500"> make.com</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Transform your workflow with intelligent automation solutions that save time, reduce errors, and boost productivity.
              </p>
            </div>
            <div className="space-x-4">
              <Button className="bg-pink-500 hover:bg-pink-600">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline">Learn More</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="px-4 py-12 md:py-24 bg-purple-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
                Tired of Repetitive Tasks?
              </h2>
              <p className="text-purple-100 md:text-xl">
                Manual processes are eating up your valuable time. Your team is stuck doing repetitive tasks instead of focusing on what matters most - growing your business.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <Zap className="h-64 w-64 text-pink-400 opacity-80" />
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="px-4 py-12 md:py-24 bg-purple-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
              Why Choose Us?
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              We specialize in creating custom automation solutions using make.com that perfectly fit your business needs.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="p-6 space-y-2 border-2 border-purple-100 bg-white">
              <div className="p-2 bg-purple-50 w-fit rounded-lg">
                <Zap className="h-6 w-6 text-purple-500" />
              </div>
              <h3 className="font-bold">Expert Integration</h3>
              <p className="text-sm text-gray-500">Seamlessly connect all your favorite tools and platforms</p>
            </Card>
            <Card className="p-6 space-y-2 border-2 border-purple-100 bg-white">
              <div className="p-2 bg-purple-50 w-fit rounded-lg">
                <Bot className="h-6 w-6 text-purple-500" />
              </div>
              <h3 className="font-bold">AI-Powered</h3>
              <p className="text-sm text-gray-500">Leverage artificial intelligence to make smarter workflows</p>
            </Card>
            <Card className="p-6 space-y-2 border-2 border-purple-100 bg-white">
              <div className="p-2 bg-purple-50 w-fit rounded-lg">
                <Workflow className="h-6 w-6 text-purple-500" />
              </div>
              <h3 className="font-bold">Custom Solutions</h3>
              <p className="text-sm text-gray-500">Tailored automation workflows for your specific needs</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
              Our Automation Services
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              Discover how we can automate your business processes
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="p-6 space-y-2 hover:shadow-lg transition-shadow">
              <Mail className="h-12 w-12 text-pink-500 mb-4" />
              <h3 className="font-bold text-lg">Email Autoreply</h3>
              <p className="text-sm text-gray-500">Smart email responses that keep your inbox organized</p>
            </Card>
            <Card className="p-6 space-y-2 hover:shadow-lg transition-shadow">
              <FileText className="h-12 w-12 text-pink-500 mb-4" />
              <h3 className="font-bold text-lg">Proposal Automation</h3>
              <p className="text-sm text-gray-500">Generate and send proposals in minutes, not hours</p>
            </Card>
            <Card className="p-6 space-y-2 hover:shadow-lg transition-shadow">
              <FileSpreadsheet className="h-12 w-12 text-pink-500 mb-4" />
              <h3 className="font-bold text-lg">Invoice Automation</h3>
              <p className="text-sm text-gray-500">Streamline your billing process end-to-end</p>
            </Card>
            <Card className="p-6 space-y-2 hover:shadow-lg transition-shadow">
              <Bot className="h-12 w-12 text-pink-500 mb-4" />
              <h3 className="font-bold text-lg">Chatbots</h3>
              <p className="text-sm text-gray-500">24/7 customer support with intelligent chatbots</p>
            </Card>
          </div>
        </div>
      </section>

      {/* App Integration Section */}
      <section className="px-4 py-12 md:py-24 bg-purple-50 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
              Seamless Integration with Your Favorite Apps
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              We work with a wide range of popular applications to streamline your workflow
            </p>
          </div>
          <div className="relative w-full overflow-hidden">
            <div className="flex space-x-12 animate-marquee whitespace-nowrap hover:animate-marquee-pause">
              {[...apps, ...apps].map((app, index) => (
                <div 
                  key={`app-${index}`} 
                  className="flex flex-col items-center space-y-3 px-4 cursor-pointer"
                >
                  <Image 
                    src={app.icon} 
                    alt={app.name} 
                    width={50} 
                    height={50} 
                    className="rounded-lg hover:scale-110 transition-transform duration-300"
                  />
                  <span className="text-sm font-medium whitespace-nowrap">{app.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              Find answers to common questions about our automation services
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-12 md:py-24 bg-purple-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
              Ready to Automate Your Business?
            </h2>
            <p className="mx-auto max-w-[600px] text-purple-100 md:text-xl">
              Let's create powerful automation workflows that transform your business operations.
            </p>
            <Button className="bg-pink-500 hover:bg-pink-600 mt-4">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

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
