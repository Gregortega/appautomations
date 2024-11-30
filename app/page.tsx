"use client"
import Image from "next/image"

import { useEffect } from "react"
const netlifyIdentity = require("netlify-identity-widget")

export default function LandingPage() {
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
    <main style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>Welcome to App Automations</h1>
      <p>Your content management solution.</p>
      {/* Regular users won't see any login/signup widget here */}
    </main>
  )
}
