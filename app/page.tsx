"use client"

import { useEffect } from "react"
const netlifyIdentity = require("netlify-identity-widget")

export default function LandingPage() {
  useEffect(() => {
    // Initialize Netlify Identity widget
    netlifyIdentity.init()

    // Optional: Automatically open the login/signup modal
    // netlifyIdentity.open();
  }, [])

  const handleLogin = () => {
    netlifyIdentity.open() // Open the Netlify Identity login/signup modal
  }

  return (
    <main style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>Welcome to My Site</h1>
      <p>Manage your content easily with DecapCMS!</p>
      <button
        onClick={handleLogin}
        style={{ padding: "1rem", fontSize: "1rem" }}
      >
        Log In / Sign Up
      </button>
    </main>
  )
}
