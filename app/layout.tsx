import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TradeQuo Global Review 2025: Pros, Cons & Real User Insights",
  description:
    "Curious if TradeQuo is the right broker for you in 2025? We’ve gathered real reviews, pros and cons, and firsthand experiences you won’t find on Trustpilot. Get the full picture here.",
  generator: "Tradequo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "TradeQuo Forex Broker",
    "image": "https://www.tradequoreviews.com/images/tradequo-logo.jpg",
    "description":
      "TradeQuo is a forex broker regulated in Seychelles offering MT5 trading, high leverage, and fast withdrawals. Our review covers pros, cons, and user experience.",
    "brand": {
      "@type": "Brand",
      "name": "TradeQuo",
    },
    "review": {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4.5",
        "bestRating": "5",
      },
      "author": {
        "@type": "Organization",
        "name": "TradeQuo Reviews",
      },
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.5",
      "reviewCount": "215",
    },
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Analytics />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
