"use client"

import { useState, useEffect } from "react"
import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    id: 1,
    name: "Jennifer Walsh",
    role: "Marketing Director",
    company: "TechFlow Solutions",
    avatar: "/placeholder.svg?height=80&width=80",
    content:
      "TradeQuo Review has completely transformed how we manage customer feedback. The insights we get are incredible and have directly contributed to a 40% increase in our customer satisfaction scores.",
    rating: 5,
  },
  {
    id: 2,
    name: "Marcus Thompson",
    role: "CEO",
    company: "Digital Dynamics",
    avatar: "/placeholder.svg?height=80&width=80",
    content:
      "The platform's ability to aggregate reviews from multiple sources gives us a comprehensive view of our reputation. It's become an essential tool for our business strategy.",
    rating: 5,
  },
  {
    id: 3,
    name: "Sarah Kim",
    role: "Customer Success Manager",
    company: "InnovateCorp",
    avatar: "/placeholder.svg?height=80&width=80",
    content:
      "What impressed me most is the real-time notifications and the AI-powered sentiment analysis. We can now respond to issues before they become problems.",
    rating: 5,
  },
]

export default function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("testimonials-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />)
  }

  return (
    <section
      id="testimonials-section"
      className="py-32 bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-20 left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-screen-xxl mx-auto px-4">
        <div
          className={`text-center mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              What Our Customers
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Are Saying
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what industry leaders have to say about TradeQuo Review.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm delay-${index * 200} ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <CardContent className="p-8 relative">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center opacity-10">
                  <Quote className="h-6 w-6 text-white" />
                </div>

                {/* Rating */}
                <div className="flex space-x-1 mb-6">{renderStars(testimonial.rating)}</div>

                {/* Content */}
                <blockquote className="text-gray-700 text-lg leading-relaxed mb-8">"{testimonial.content}"</blockquote>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-gray-100"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        </div>
      </div>
    </section>
  )
}
