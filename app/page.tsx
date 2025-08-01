"use client"
import {fetchReviews} from "@/lib/fetchReviews"
import { useState, useEffect } from "react"
import { ChevronRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ReviewSection from "@/components/review-section"
import HeroSection from "@/components/hero-section"
import TestimonialsSection from "@/components/testimonials-section"


export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)
  const [trustpilotReviews, setTrustpilotReviews] = useState([]);

//const [tradersUnionReviews, setTradersUnionReviews] = useState([]);

const [reviewIoReviews, setReviewIoReviews] = useState([]);

const [brokersviewReviews, setBrokersviewReviews] = useState([]);

//const [forexpeacearmyReviews, setForexpeacearmyReviews] = useState([]);

useEffect(() => {
  setIsVisible(true);

  async function loadReviews() {
    const trustpilot = await fetchReviews("trustpilot");
    
    const reviewIo = await fetchReviews("review_io");
    const brokersview = await fetchReviews("brokersview");
    //const forexpeacearmy = await fetchReviews("forexpeacearmy");

    setTrustpilotReviews(trustpilot);
    
    setReviewIoReviews(reviewIo);
    setBrokersviewReviews(brokersview);
    //setBrokersviewReviews(forexpeacearmy);
  }

  loadReviews();
}, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="overflow-hidden">
        
        <HeroSection />
        
        

        <div className="space-y-32 py-20">
          <ReviewSection
            title="Trustpilot Reviews"
            subtitle="Authentic customer experiences from Trustpilot"
            
            platform="trustpilot"
            color="from-green-500 to-emerald-600"
            delay={0.1}
          />

          <ReviewSection
            title="Review.io Feedback"
            subtitle="Comprehensive customer feedback platform"
            
            platform="review_io"
            color="from-purple-500 to-violet-600"
            delay={0.3}
          />

          <ReviewSection
            title="Brokersview Ratings"
            subtitle="Expert broker analysis and ratings"
            
            platform="brokersview"
            color="from-orange-500 to-red-500"
            delay={0.4}
          />

          {/*<ReviewSection
            title="Forex Peace Army Ratings"
            subtitle="Expert broker analysis and ratings"
            
            platform="forex_peace_army"
            color="from-orange-500 to-red-500"
            delay={0.4}
          />*/}
        </div>

        <TestimonialsSection />

        
      </main>

      <Footer />
    </div>
  )
}
