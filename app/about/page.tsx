"use client"

import { useState, useEffect } from "react"
import { Users, Award, Heart, Globe } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"


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
              <h1 className="text-5xl font-bold text-white mb-6">About Us</h1>
              
                
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
                
                <div className="prose prose-lg mx-auto text-gray-600">
                  <p className="text-xl leading-relaxed mb-6">
                    At TradeQuo, we genuinely care about our trader community. Everything we do is built around transparency, trust, and the long-term success of our users. We're not here to just provide a platform — we're here to be your trading partner.
We understand there’s a lot of misinformation out there. That’s exactly why this page exists — to clear the air and offer a space where you can truly understand who we are and what we stand for.
              
                    TradeQuo is not involved in any scam activity, nor do we endorse or tolerate any unethical behavior. We believe in integrity, regulated trading practices, and real human support. In fact, many of our traders have shared their honest experiences — and we encourage you to read them to see for yourself.
                  </p>
                  <p className="text-lg leading-relaxed mb-6">
  If you have questions or concerns, we're here. Reach out directly at{" "}
  <a href="mailto:support@tradequo.com" className="text-blue-600 underline hover:text-blue-800">
    support@tradequo.com
  </a>{" "}
  — our team is always ready to listen and help.
  <br />
  Let’s grow together, the right way.
</p>
                  
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
