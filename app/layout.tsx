import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "LunoKit - Web3 Account Connection Infrastructure",
  description:
    "Open-source Web3 account connection infrastructure for the Polkadot ecosystem. Build better DApps with less complexity.",
  generator: 'v0.dev',
  icons: {
    icon: '/images/luno-logo-dark.svg',
    shortcut: '/images/luno-logo-dark.svg',
    apple: '/images/luno-logo-dark.svg',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
