"use client"

import { useState, useEffect } from "react"
import { ChevronRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ReviewSection from "@/components/review-section"
import HeroSection from "@/components/hero-section"
import StatsSection from "@/components/stats-section"
import FeaturesSection from "@/components/features-section"
import TestimonialsSection from "@/components/testimonials-section"

const trustpilotReviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "/placeholder.svg?height=50&width=50",
    rating: 5,
    comment:
      "Absolutely fantastic platform! The user interface is incredibly intuitive and the customer support team goes above and beyond. I've been using this for 6 months and it has transformed how we handle customer feedback.",
    date: "2024-01-15",
    verified: true,
    location: "New York, USA",
  },
  {
    id: 2,
    name: "Michael Chen",
    avatar: "/placeholder.svg?height=50&width=50",
    rating: 5,
    comment:
      "Game-changer for our business! The analytics dashboard provides incredible insights and the real-time notifications keep us on top of every review. Highly recommend to any serious business owner.",
    date: "2024-01-12",
    verified: true,
    location: "San Francisco, USA",
  },
  {
    id: 3,
    name: "Emma Wilson",
    avatar: "/placeholder.svg?height=50&width=50",
    rating: 4,
    comment:
      "Excellent service with room for minor improvements. The platform aggregates reviews seamlessly and the reporting features are comprehensive. Great value for money!",
    date: "2024-01-10",
    verified: true,
    location: "London, UK",
  },
]

const tradersUnionReviews = [
  {
    id: 1,
    name: "David Rodriguez",
    avatar: "/placeholder.svg?height=50&width=50",
    rating: 5,
    comment:
      "Professional trading insights that actually work! The analysis tools are sophisticated yet easy to use. My trading performance has improved significantly since joining.",
    date: "2024-01-14",
    verified: true,
    location: "Miami, USA",
  },
  {
    id: 2,
    name: "Lisa Thompson",
    avatar: "/placeholder.svg?height=50&width=50",
    rating: 5,
    comment:
      "Outstanding platform with exceptional community support. The real-time market analysis and expert recommendations have been invaluable for my trading strategy.",
    date: "2024-01-11",
    verified: true,
    location: "Toronto, Canada",
  },
  {
    id: 3,
    name: "James Miller",
    avatar: "/placeholder.svg?height=50&width=50",
    rating: 4,
    comment:
      "Solid platform with comprehensive features. The educational resources are top-notch and the community is very supportive. Great for both beginners and experienced traders.",
    date: "2024-01-09",
    verified: true,
    location: "Sydney, Australia",
  },
]

const reviewIoReviews = [
  {
    id: 1,
    name: "Anna Martinez",
    avatar: "/placeholder.svg?height=50&width=50",
    rating: 5,
    comment:
      "Revolutionary review management system! The automation features save us hours every week and the customer insights are incredibly detailed. Best investment we've made this year.",
    date: "2024-01-13",
    verified: true,
    location: "Barcelona, Spain",
  },
  {
    id: 2,
    name: "Robert Taylor",
    avatar: "/placeholder.svg?height=50&width=50",
    rating: 5,
    comment:
      "Impressed beyond expectations! The integration process was seamless and the support team was incredibly helpful throughout. The analytics dashboard is a work of art.",
    date: "2024-01-08",
    verified: true,
    location: "Manchester, UK",
  },
  {
    id: 3,
    name: "Sophie Brown",
    avatar: "/placeholder.svg?height=50&width=50",
    rating: 4,
    comment:
      "Excellent tool for managing customer feedback efficiently. The customization options are extensive and the mobile app works flawlessly. Highly recommended!",
    date: "2024-01-07",
    verified: true,
    location: "Melbourne, Australia",
  },
]

const brokersviewReviews = [
  {
    id: 1,
    name: "Alex Turner",
    avatar: "/placeholder.svg?height=50&width=50",
    rating: 5,
    comment:
      "Comprehensive broker analysis that saved me from making costly mistakes! The detailed reviews and comparison tools are incredibly thorough. Essential for any serious trader.",
    date: "2024-01-16",
    verified: true,
    location: "Chicago, USA",
  },
  {
    id: 2,
    name: "Maria Garcia",
    avatar: "/placeholder.svg?height=50&width=50",
    rating: 5,
    comment:
      "Invaluable resource for broker selection! The transparency and depth of analysis is unmatched. Helped me find the perfect broker for my trading style and needs.",
    date: "2024-01-06",
    verified: true,
    location: "Madrid, Spain",
  },
  {
    id: 3,
    name: "Thomas Anderson",
    avatar: "/placeholder.svg?height=50&width=50",
    rating: 4,
    comment:
      "Detailed and honest broker reviews that you can trust. The rating system is fair and the community feedback adds valuable insights. Great platform overall!",
    date: "2024-01-05",
    verified: true,
    location: "Berlin, Germany",
  },
]

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="overflow-hidden">
        
        <HeroSection />
        <FeaturesSection />
        <StatsSection />

        <div className="space-y-32 py-20">
          <ReviewSection
            title="Trustpilot Reviews"
            subtitle="Authentic customer experiences from Trustpilot"
            reviews={trustpilotReviews}
            platform="trustpilot"
            color="from-green-500 to-emerald-600"
            delay={0.1}
          />

          <ReviewSection
            title="Traders Union Reviews"
            subtitle="Professional trading community insights"
            reviews={tradersUnionReviews}
            platform="traders-union"
            color="from-blue-500 to-cyan-600"
            delay={0.2}
          />

          <ReviewSection
            title="Review.io Feedback"
            subtitle="Comprehensive customer feedback platform"
            reviews={reviewIoReviews}
            platform="review-io"
            color="from-purple-500 to-violet-600"
            delay={0.3}
          />

          <ReviewSection
            title="Brokersview Ratings"
            subtitle="Expert broker analysis and ratings"
            reviews={brokersviewReviews}
            platform="brokersview"
            color="from-orange-500 to-red-500"
            delay={0.4}
          />
        </div>

        <TestimonialsSection />

        {/* Enhanced CTA Section */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900"></div>
          <div className="absolute inset-0 bg-black/20"></div>

          {/* Animated background elements */}
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <div
              className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="max-w-4xl mx-auto">
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
                  Ready to Transform Your
                  <span className="block bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                    Review Management?
                  </span>
                </h2>
                <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
                  Join thousands of businesses that trust our platform for comprehensive review aggregation and
                  insights.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <Button
                    size="lg"
                    className="text-lg px-10 py-6 bg-white text-gray-900 hover:bg-gray-100 rounded-full shadow-2xl"
                  >
                    Start Your Free Trial
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg px-10 py-6 text-white border-2 border-white/30 hover:bg-white/10 rounded-full backdrop-blur-sm bg-transparent"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    Watch Demo
                  </Button>
                </div>

                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">14-Day</div>
                    <div className="text-gray-300 text-sm">Free Trial</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">No</div>
                    <div className="text-gray-300 text-sm">Setup Fees</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">24/7</div>
                    <div className="text-gray-300 text-sm">Support</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">Cancel</div>
                    <div className="text-gray-300 text-sm">Anytime</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
