"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const slides = [
  {
    title: "Experience Transparent Trading with a No-Markup, User-Backed Forex & CFD Broker",
    
    subtitle:
      "Trade Indices, Shares, Commodities, and Crypto with lightning-fast execution and deep liquidity across global markets.",
    cta: "Start Trading",
    link: "https://www.tradequo.com/",
    image: "/banner-2.png",
  },
  /*{{
    title: "Unlock Global Markets with",
    highlight: "Zero Commission Trading",
    subtitle:
      "Enjoy low spreads and fast execution speeds. Trade smarter with our trusted platform.",
    cta: "Get Started Now",
    link: "/get-started",
  },}
  {{
    title: "Lightning Fast Execution for",
    highlight: "Pro-Level Traders",
    subtitle:
      "Access institutional-grade technology and liquidity with our advanced trading infrastructure.",
    cta: "Join Now",
    link: "/join",
  },}*/
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center bg-black text-white overflow-hidden">
      {/* Background */}
      <div
  className="absolute inset-0 bg-cover bg-center z-0"
  style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl text-center px-6">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          {slides[currentSlide].title}{" "}
          
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          {slides[currentSlide].subtitle}
        </p>

        <Link href={slides[currentSlide].link}>
          <Button className="bg-red-500 hover:bg-light-600 text-black text-lg px-8 py-6 font-semibold rounded-lg shadow-lg">
            {slides[currentSlide].cta}
          </Button>
        </Link>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-10 space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-4 h-1 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-red-500 w-8" : "bg-white/30"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  )
}
