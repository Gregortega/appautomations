"use client"

import { useEffect } from "react"
const netlifyIdentity = require("netlify-identity-widget")

export default function AdminPage() {
  useEffect(() => {
    // Initialize the Netlify Identity widget
    netlifyIdentity.init()

    // Check for an invite token in the URL
    const params = new URLSearchParams(window.location.hash.slice(1))
    const inviteToken = params.get("invite_token")

    if (inviteToken) {
      // Accept the invite token
      netlifyIdentity.acceptInvite(inviteToken).then(() => {
        // Redirect after invite is accepted
        window.location.hash = "" // Clear the hash
        window.location.reload() // Reload to initialize the CMS
      })
    }
  }, [])

  return (
    <iframe
      src="/admin/index.html"
      style={{ width: "100%", height: "100vh", border: "none" }}
      title="DecapCMS Admin"
    />
  )
}
