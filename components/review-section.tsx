"use client"

import { useState, useEffect, useRef } from "react"
import { Star, CheckCircle, Calendar, MapPin, Quote } from "lucide-react"

interface Review {
  id: number
  name: string
  avatar: string
  stars: number
  review_content: string
  date: string
  badge_text: string
  location: string
}

interface ReviewSectionProps {
  title: string
  subtitle: string
  platform: string // e.g. "trustpilot", "brokers_view", "review_io"
  color: string
  delay: number
}

// Static reviews data organized by platform
const staticReviews = {
  trustpilot: [
    {
      id: 1,
      name: "Leonardo Cortés Zambrano",
      avatar: "",
      stars: 5,
      review_content: "Helped solve issue — a good experience.",
      date: "2025-07-16",
      badge_text: "Verified Customer",
      location: "Colombia"
    },
    {
      id: 2,
      name: "KAMIL WOCKO",
      avatar: "",
      stars: 5,
      review_content: "Super git super.",
      date: "2025-06-17",
      badge_text: "Verified Customer",
      location: "Poland"
    },
    {
      id: 3,
      name: "Pankrasius Arwiyadi Wiyadi",
      avatar: "",
      stars: 5,
      review_content: "New user—but good trading conditions on MT5.",
      date: "2024-10-01",
      badge_text: "Verified Customer",
      location: "Indonesia"
    },
    {
      id: 4,
      name: "Vincent",
      avatar: "",
      stars: 5,
      review_content: "Good interface and customer service; highly recommended; fast deposits, low spreads, user-friendly, safe environment.",
      date: "2024-09-08",
      badge_text: "Verified Customer",
      location: "Vietnam"
    },
    {
      id: 5,
      name: "Mai Nguyen",
      avatar: "",
      stars: 5,
      review_content: "Thank you Customer service, you are so useful. Processed my case so fast. I like the style you are working",
      date: "2024-09-06",
      badge_text: "Verified Customer",
      location: "Spain"
    },
    {
      id: 6,
      name: "CHAMARK",
      avatar: "",
      stars: 5,
      review_content: "Very happy to use this broker.",
      date: "2024-08-22",
      badge_text: "Verified Customer",
      location: "Thailand"
    },
    {
      id: 7,
      name: "Joey Pacawat",
      avatar: "",
      stars: 5,
      review_content: "Low spread, Great Platform, no problem 👍🏻👍🏻👍🏻",
      date: "2024-08-22",
      badge_text: "Verified Customer",
      location: "Thailand"
    },
    {
      id: 8,
      name: "Kevin Simon",
      avatar: "",
      stars: 5,
      review_content: "Great platform!, Easy to use, the platform is very stable and well-designed. I had good trading experiences.",
      date: "2024-03-19",
      badge_text: "Verified Customer",
      location: "Indonesia"
    },
    {
      id: 9,
      name: "Allan Bububa",
      avatar: "",
      stars: 5,
      review_content: "Recommended broker, deposit lancar, trusted broker, spreads rendah, high commission untuk IB, Bisa leverage 1:1000, fast deposit, easy withdrawal, user friendly, safe trading environment, great community, friendly staff.",
      date: "2024-01-29",
      badge_text: "Verified Customer",
      location: "Malaysia"
    },
    {
      id: 10,
      name: "Albert Caicedo",
      avatar: "",
      stars: 5,
      review_content: "Excellent broker; personalized attention; fast deposits and withdrawals.",
      date: "2024-01-10",
      badge_text: "Verified Customer",
      location: "Colombia"
    }
  ],
  brokersview: [
    {
      id: 1,
      name: "Peace Jack",
      avatar: "",
      stars: 5,
      review_content: "Their UI is user friendly.",
      date: "2025-07-11",
      badge_text: "Verified Trader",
      location: "Malaysia"
    },
    {
      id: 2,
      name: "Saif Ali Amri",
      avatar: "",
      stars: 4,
      review_content: "Decent broker, good to go.",
      date: "2025-07-08",
      badge_text: "Verified Trader",
      location: "Malaysia"
    },
    {
      id: 3,
      name: "Darren Lee",
      avatar: "",
      stars: 5,
      review_content: "No withdrawal failure in 1 year.",
      date: "2025-07-07",
      badge_text: "Verified Trader",
      location: "Singapore"
    },
    {
      id: 4,
      name: "Jimil Upadhyay",
      avatar: "",
      stars: 5,
      review_content: "No red flags—tested withdrawals & support.",
      date: "2025-06-19",
      badge_text: "Verified Trader",
      location: "India"
    },
    {
      id: 5,
      name: "Clarence",
      avatar: "",
      stars: 5,
      review_content: "Fast withdrawal, low spreads, friendly support.",
      date: "2025-06-03",
      badge_text: "Verified Trader",
      location: "South Korea"
    },
    {
      id: 6,
      name: "Alex Cruz",
      avatar: "",
      stars: 5,
      review_content: "Instant withdrawals, good trading conditions.",
      date: "2025-05-29",
      badge_text: "Verified Trader",
      location: "Panama"
    },
    {
      id: 7,
      name: "Dominik Kaczmarczyk",
      avatar: "",
      stars: 5,
      review_content: "Good spread and execution; instant profit withdrawal.",
      date: "2024-09-10",
      badge_text: "Verified Trader",
      location: "Thailand"
    }
  ],
  review_io: [
    {
      id: 1,
      name: "Kee Polazo",
      avatar: "",
      stars: 5,
      review_content: "Support team incredibly responsive and helpful.",
      date: "2025-07-10",
      badge_text: "Verified Review",
      location: "Philippines"
    },
    {
      id: 2,
      name: "Amir",
      avatar: "",
      stars: 5,
      review_content: "Educational features are a major value add for beginners.",
      date: "2025-07-10",
      badge_text: "Verified Review",
      location: "Malaysia"
    },
    {
      id: 3,
      name: "Tan Ji",
      avatar: "",
      stars: 5,
      review_content: "Transparent, reasonable fees; reliable platform.",
      date: "2025-07-10",
      badge_text: "Verified Review",
      location: "Singapore"
    },
    {
      id: 4,
      name: "Jiro",
      avatar: "",
      stars: 5,
      review_content: "Quick and impressive withdrawal system.",
      date: "2025-07-10",
      badge_text: "Verified Review",
      location: "Japan"
    },
    {
      id: 5,
      name: "Inli",
      avatar: "",
      stars: 5,
      review_content: "Mobile experience is smooth and stable.",
      date: "2025-07-10",
      badge_text: "Verified Review",
      location: "Thailand"
    },
    {
      id: 6,
      name: "Dil",
      avatar: "",
      stars: 5,
      review_content: "Responsive and helpful support over months.",
      date: "2025-07-10",
      badge_text: "Verified Review",
      location: "India"
    }
  ]
}

export default function ReviewSection({ title, subtitle, platform, color, delay }: ReviewSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [reviews, setReviews] = useState<Review[]>([])
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay * 1000)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById(`${platform}-section`)
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [platform, delay])

  useEffect(() => {
    // Set static reviews based on platform
    const platformReviews = staticReviews[platform as keyof typeof staticReviews] || []
    setReviews(platformReviews)
  }, [platform])

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

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text
    return text.slice(0, maxLength) + "..."
  }

  const scrollLeft = () => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.children[0]?.clientWidth || 300
      scrollRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.children[0]?.clientWidth || 300
      scrollRef.current.scrollBy({ left: cardWidth, behavior: "smooth" })
    }
  }

  return (
    <div className="w-full">
      <section id={`${platform}-section`} className="py-20 relative overflow-hidden">
        {/* Background Blobs */}
        <div className={`absolute top-20 left-20 w-72 h-72 bg-gradient-to-r ${color} opacity-5 rounded-full blur-3xl`} />
        <div className={`absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r ${color} opacity-5 rounded-full blur-3xl`} />

        <div className="container mx-auto px-4 relative z-10">
          <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            {/* Header */}
            <div className="text-center mb-16">
              <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${color} rounded-3xl mb-6 shadow-xl`}>
                <Star className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{title}</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
            </div>

            {/* Reviews Container */}
            <div className="mb-12">
              <div className="relative">
                {/* Reviews Scroll Container */}
                <div
                  ref={scrollRef}
                  className="flex gap-6 overflow-x-auto pb-4 scroll-smooth hide-scrollbar"
                >
                  {reviews.map((review, index) => (
                    <div
                      key={review.id}
                      className="flex-none w-72 sm:w-80"
                      style={{
                        animationDelay: `${index * 200}ms`
                      }}
                    >
                      <div 
                        className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white shadow-lg rounded-xl h-80 ${
                          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                      >
                        <div className="p-6 relative h-full flex flex-col justify-between">
                          {/* Quote Icon */}
                          <div className={`absolute top-6 right-6 w-8 h-8 bg-gradient-to-r ${color} rounded-full flex items-center justify-center opacity-20`}>
                            <Quote className="h-4 w-4 text-white" />
                          </div>

                          {/* User Info */}
                          <div className="flex items-center space-x-4 mb-4">
                            <div className="relative flex-shrink-0">
                              {review.avatar ? (
                                <img
                                  src={review.avatar}
                                  alt={review.name}
                                  className="w-12 h-12 rounded-full object-cover border-2 border-gray-100"
                                />
                              ) : (
                                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center border-2 border-gray-100">
                                  <span className="text-sm font-semibold text-gray-700">
                                    {review.name?.charAt(0).toUpperCase()}
                                  </span>
                                </div>
                              )}
                              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                                <CheckCircle className="h-3 w-3 text-white" />
                              </div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-bold text-gray-900 text-base truncate">{review.name}</h4>
                              <div className="flex items-center space-x-2 mb-1">
                                <div className="flex space-x-1">{renderStars(review.stars)}</div>
                                <span className="text-sm font-semibold text-gray-700">{review.stars}.0</span>
                              </div>
                              <div className="flex items-center text-sm text-gray-500">
                                <MapPin className="h-3 w-3 mr-1 flex-shrink-0" />
                                <span className="truncate">{review.location}</span>
                              </div>
                            </div>
                          </div>

                          {/* Review Content */}
                          <div className="flex-1 mb-4">
                            <blockquote className="text-gray-700 leading-relaxed text-sm">
                              "{truncateText(review.review_content, 120)}"
                            </blockquote>
                          </div>

                          {/* Bottom Meta */}
                          <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                            <div className="flex items-center text-xs text-gray-500">
                              <Calendar className="h-3 w-3 mr-1" />
                              {formatDate(review.date)}
                            </div>
                            {review.badge_text && (
                              <span className={`bg-gradient-to-r ${color} text-white text-xs px-2 py-1 rounded-full`}>
                                {review.badge_text}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-center space-x-4 mt-8">
                <button
                  onClick={scrollLeft}
                  className="px-6 py-2 border border-gray-300 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                >
                  ⬅ Previous
                </button>
                <button
                  onClick={scrollRight}
                  className="px-6 py-2 border border-gray-300 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                >
                  Next ➡
                </button>
              </div>
            </div>

            {/* View All Button */}
            <div className="text-center">
              <button
                className={`px-8 py-4 text-lg border-2 border-gray-300 rounded-full font-medium text-gray-700 hover:bg-gradient-to-r hover:${color} hover:text-white hover:border-transparent transition-all duration-300`}
              >
                View All {title}
              </button>
            </div>
          </div>
        </div>

        {/* CSS for hiding scrollbar */}
        <style jsx>{`
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </section>
    </div>
  )
}