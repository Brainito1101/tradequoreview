"use client"

import { useState, useEffect } from "react"
import { BarChart3, Zap, Shield, Globe, Users, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Deep insights into customer sentiment with AI-powered analysis and trend detection.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Zap,
    title: "Real-time Sync",
    description: "Instant updates across all platforms with lightning-fast synchronization.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Shield,
    title: "Verified Reviews",
    description: "Advanced verification system ensures authentic feedback from real customers.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Globe,
    title: "Multi-Platform",
    description: "Seamlessly integrate with Trustpilot, Review.io, and 20+ other platforms.",
    color: "from-purple-500 to-violet-500",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Built-in tools for team management and collaborative review responses.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: TrendingUp,
    title: "Growth Insights",
    description: "Actionable recommendations to improve ratings and customer satisfaction.",
    color: "from-indigo-500 to-blue-500",
  },
]

export default function FeaturesSection() {
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

    const element = document.getElementById("features-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="features-section" className="py-32 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      <div className="max-w-screen-xxl mx-auto px-4">
      {/* Background Elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`text-center mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Powerful Features for
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Modern Businesses
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Everything you need to manage, analyze, and leverage customer reviews across all platforms
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white/70 backdrop-blur-sm delay-${index * 100} ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <CardContent className="p-8">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
    </section>
  )
}
