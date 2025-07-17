"use client"

import { useState, useEffect } from "react"
import { TrendingUp, Users, Star, Award, Globe, Zap } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "50,000+",
    label: "Active Users",
    description: "Businesses trust our platform",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Star,
    value: "2.5M+",
    label: "Reviews Processed",
    description: "Authentic feedback analyzed",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: TrendingUp,
    value: "99.9%",
    label: "Uptime",
    description: "Reliable service guarantee",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Globe,
    value: "150+",
    label: "Countries",
    description: "Global reach and impact",
    color: "from-purple-500 to-violet-500",
  },
  {
    icon: Award,
    value: "4.9/5",
    label: "Customer Rating",
    description: "Consistently high satisfaction",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Zap,
    value: "<1min",
    label: "Response Time",
    description: "Lightning-fast support",
    color: "from-indigo-500 to-blue-500",
  },
]

export default function StatsSection() {
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

    const element = document.getElementById("stats-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="stats-section" className="py-32 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,0,0,0.15) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-screen-xxl mx-auto px-4">
        <div
          className={`text-center mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Trusted by Industry
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Leaders Worldwide
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our platform delivers exceptional results for businesses of all sizes across the globe
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`group text-center p-8 rounded-3xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 delay-${index * 100} ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div
                className={`w-20 h-20 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
              >
                <stat.icon className="h-10 w-10 text-white" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-xl font-semibold text-gray-700 mb-2">{stat.label}</div>
              <div className="text-gray-500">{stat.description}</div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  )
}
