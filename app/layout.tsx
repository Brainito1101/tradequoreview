import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ReviewHub - Aggregate Reviews From Every Platform",
  description:
    "Discover authentic customer feedback from Trustpilot, Traders Union, Review.io, and Brokersview all in one comprehensive dashboard.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <meta name="google-site-verification" content="C0jbjhg5_3kiVe2We4v_QlyAvDudGKkmInMMv0zNCKA" />
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
