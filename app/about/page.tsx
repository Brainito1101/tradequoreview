"use client"

import { useState, useEffect } from "react"
import { Users, Award, Heart, Globe } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Passionate about creating transparent review platforms that help consumers make informed decisions.",
  },
  {
    name: "Michael Chen",
    role: "CTO",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Tech enthusiast with 10+ years of experience in building scalable web applications.",
  },
  {
    name: "Emma Wilson",
    role: "Head of Operations",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Operations expert focused on streamlining processes and ensuring exceptional user experience.",
  },
]

const values = [
  {
    icon: Heart,
    title: "Transparency",
    description: "We believe in honest, unbiased reviews that help users make informed decisions.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Building a trusted community where authentic feedback drives continuous improvement.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Committed to delivering the highest quality platform and user experience.",
  },
  {
    icon: Globe,
    title: "Accessibility",
    description: "Making review aggregation accessible to businesses and consumers worldwide.",
  },
]

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4 text-center">
            <div
              className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <h1 className="text-5xl font-bold text-white mb-6">About Our Mission</h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                We're dedicated to creating the most comprehensive and trustworthy review aggregation platform, helping
                businesses and consumers connect through authentic feedback.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div
                className={`transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              >
                <h2 className="text-4xl font-bold text-center mb-12">Our Story</h2>
                <div className="prose prose-lg mx-auto text-gray-600">
                  <p className="text-xl leading-relaxed mb-6">
                    Founded in 2023, our platform emerged from a simple yet powerful idea: to create a centralized hub
                    where authentic reviews from multiple platforms could be accessed, analyzed, and trusted.
                  </p>
                  <p className="text-lg leading-relaxed mb-6">
                    We recognized that consumers were struggling to navigate the fragmented landscape of review
                    platforms, often missing valuable insights scattered across different sites. Our solution aggregates
                    reviews from trusted sources like Trustpilot, Traders Union, Review.io, and Brokersview, providing a
                    comprehensive view of customer experiences.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Today, we serve thousands of businesses and millions of consumers, facilitating transparent
                    communication and helping drive better products and services through authentic feedback.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div
              className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <h2 className="text-4xl font-bold text-center mb-12">Our Values</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => (
                  <Card
                    key={index}
                    className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <CardHeader>
                      <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                        <value.icon className="h-8 w-8 text-blue-600" />
                      </div>
                      <CardTitle className="text-xl">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{value.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div
              className={`transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <h2 className="text-4xl font-bold text-center mb-12">Meet Our Team</h2>
              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {teamMembers.map((member, index) => (
                  <Card
                    key={index}
                    className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <CardHeader>
                      <div className="mx-auto w-32 h-32 rounded-full overflow-hidden mb-4">
                        <img
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardTitle className="text-xl">{member.name}</CardTitle>
                      <p className="text-blue-600 font-medium">{member.role}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{member.bio}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4">
            <div
              className={`transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="grid md:grid-cols-4 gap-8 text-center text-white">
                <div>
                  <div className="text-4xl font-bold mb-2">50K+</div>
                  <div className="text-blue-100">Reviews Aggregated</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">1K+</div>
                  <div className="text-blue-100">Businesses Served</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">4.8</div>
                  <div className="text-blue-100">Average Rating</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">24/7</div>
                  <div className="text-blue-100">Support Available</div>
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
