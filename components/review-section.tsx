"use client"

import { useState, useEffect } from "react"
import { Star, CheckCircle, Calendar, MapPin, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface Review {
  id: number
  name: string
  avatar: string
  rating: number
  comment: string
  date: string
  verified: boolean
  location: string
}

interface ReviewSectionProps {
  title: string
  subtitle: string
  reviews: Review[]
  platform: string
  color: string
  delay: number
}

export default function ReviewSection({ title, subtitle, reviews, platform, color, delay }: ReviewSectionProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay * 1000)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById(`${platform}-section`)
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [platform, delay])

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`h-4 w-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
    ))
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  return (
    <div className="max-w-screen-xxl mx-auto px-4">
    <section id={`${platform}-section`} className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div
        className={`absolute top-20 left-20 w-72 h-72 bg-gradient-to-r ${color} opacity-5 rounded-full blur-3xl`}
      ></div>
      <div
        className={`absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r ${color} opacity-5 rounded-full blur-3xl`}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <div
              className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${color} rounded-3xl mb-6 shadow-xl`}
            >
              <Star className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{title}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
          </div>

          {/* Reviews Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {reviews.map((review, index) => (
              <Card
                key={review.id}
                className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white shadow-lg delay-${index * 200} ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <CardContent className="p-8 relative">
                  {/* Quote Icon */}
                  <div
                    className={`absolute top-6 right-6 w-8 h-8 bg-gradient-to-r ${color} rounded-full flex items-center justify-center opacity-20`}
                  >
                    <Quote className="h-4 w-4 text-white" />
                  </div>

                  {/* User Info */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="relative">
                      <img
                        src={review.avatar || "/placeholder.svg"}
                        alt={review.name}
                        className="w-14 h-14 rounded-full object-cover border-2 border-gray-100"
                      />
                      {review.verified && (
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                          <CheckCircle className="h-3 w-3 text-white" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 text-lg">{review.name}</h4>
                      <div className="flex items-center space-x-2 mb-1">
                        <div className="flex space-x-1">{renderStars(review.rating)}</div>
                        <span className="text-sm font-semibold text-gray-700">{review.rating}.0</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="h-3 w-3 mr-1" />
                        {review.location}
                      </div>
                    </div>
                  </div>

                  {/* Review Content */}
                  <blockquote className="text-gray-700 leading-relaxed mb-6 text-lg">"{review.comment}"</blockquote>

                  {/* Review Meta */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-2" />
                      {formatDate(review.date)}
                    </div>
                    {review.verified && (
                      <Badge variant="secondary" className={`bg-gradient-to-r ${color} text-white border-0`}>
                        Verified Purchase
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center">
            <Button
              size="lg"
              variant="outline"
              className={`px-8 py-4 text-lg border-2 hover:bg-gradient-to-r hover:${color} hover:text-white hover:border-transparent transition-all duration-300 rounded-full`}
            >
              View All {title}
            </Button>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}
