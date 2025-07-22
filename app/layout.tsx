import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TradeQuo Review – Is This Forex Broker Legit?",
  description:
    "Unbiased TradeQuo review for 2025. Discover if this Seychelles-regulated broker is safe, fast, and worth your trust before opening an account.",
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
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
