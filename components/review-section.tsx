"use client"

import { useState, useEffect, useRef } from "react"
import { Star, CheckCircle, Calendar, MapPin, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

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
    },
    {
      id: 11,
      name: "welile nelson",
      avatar: "",
      stars: 5,
      review_content: "Tradequipment is amazing.",
      date: "2023-12-27",
      badge_text: "Verified Customer",
      location: "Japan"
    },
    {
      id: 12,
      name: "Iyanne Chua Santos",
      avatar: "",
      stars: 5,
      review_content: "One of the best trading platforms right now.",
      date: "2023-12-26",
      badge_text: "Verified Customer",
      location: "Philippines"
    },
    {
      id: 13,
      name: "Jenniline Espiritu",
      avatar: "",
      stars: 5,
      review_content: "Preferred platform—reliable and efficient.",
      date: "2023-12-25",
      badge_text: "Verified Customer",
      location: "Philippines"
    },
    {
      id: 14,
      name: "Oyo Lab",
      avatar: "",
      stars: 5,
      review_content: "Simple, amazing interface—great for new users.",
      date: "2023-12-25",
      badge_text: "Verified Customer",
      location: "Philippines"
    },
    {
      id: 15,
      name: "Tarek Khattab",
      avatar: "",
      stars: 4,
      review_content: "Amazing and fantastic.",
      date: "2023-12-25",
      badge_text: "Verified Customer",
      location: "U.A.E."
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
    },
    {
      id: 8,
      name: "Aleksander K",
      avatar: "",
      stars: 5,
      review_content: "Amazing broker; zero spread, great support, instant withdrawals.",
      date: "2024-09-05",
      badge_text: "Verified Trader",
      location: "Thailand"
    },
    {
      id: 9,
      name: "Ren",
      avatar: "",
      stars: 5,
      review_content: "Legit broker! Started with limitless account for small capital and high leverage. After a month of smooth trading, I switched to standard account with 1:1000 leverage and still getting consistent profits.",
      date: "2025-04-15",
      badge_text: "Verified Trader",
      location: "Indonesia"
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
    },
    {
      id: 7,
      name: "Jutha Pr",
      avatar: "",
      stars: 5,
      review_content: "Intuitive and easy-to-use UI.",
      date: "2025-07-10",
      badge_text: "Verified Review",
      location: "Thailand"
    },
    {
      id: 8,
      name: "Ming",
      avatar: "",
      stars: 5,
      review_content: "Account setup smooth, professional, efficient.",
      date: "2025-07-10",
      badge_text: "Verified Review",
      location: "China"
    },
    {
      id: 9,
      name: "Maloney FX",
      avatar: "",
      stars: 5,
      review_content: "App UX makes sense immediately—rare ease.",
      date: "2025-07-10",
      badge_text: "Verified Review",
      location: "Australia"
    },
    {
      id: 10,
      name: "Fernand",
      avatar: "",
      stars: 5,
      review_content: "Speedy withdrawal system; seamless and professional.",
      date: "2025-07-10",
      badge_text: "Verified Review",
      location: "France"
    },
    {
      id: 11,
      name: "Non-Pa Money",
      avatar: "",
      stars: 5,
      review_content: "Fair, clearly communicated costs.",
      date: "2025-07-10",
      badge_text: "Verified Review",
      location: "Vietnam"
    },
    {
      id: 12,
      name: "ViiaShclepi",
      avatar: "",
      stars: 5,
      review_content: "Fast and effortless account creation.",
      date: "2025-07-10",
      badge_text: "Verified Review",
      location: "Estonia"
    },
    {
      id: 13,
      name: "Kyria",
      avatar: "",
      stars: 5,
      review_content: "Transparent charges; good service.",
      date: "2025-07-10",
      badge_text: "Verified Review",
      location: "Greece"
    },
    {
      id: 14,
      name: "Ng Nguyen",
      avatar: "",
      stars: 5,
      review_content: "Clean design; trustworthy user experience.",
      date: "2025-07-10",
      badge_text: "Verified Review",
      location: "Vietnam"
    },
    {
      id: 15,
      name: "Dimas",
      avatar: "",
      stars: 5,
      review_content: "Exceptional fast withdrawals; amazing experience.",
      date: "2025-07-10",
      badge_text: "Verified Review",
      location: "Indonesia"
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
    
    // Fallback to API if needed (keep original API logic as backup)
    if (platformReviews.length === 0) {
      async function fetchReviews() {
        try {
          const res = await fetch(`http://127.0.0.1:8000/api/reviews/?section=${platform}`)
          const data = await res.json()
          setReviews(data)
        } catch (error) {
          console.error("Failed to fetch reviews:", error)
        }
      }
      fetchReviews()
    }
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

  // Function to truncate text to a specific length
  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text
    return text.slice(0, maxLength) + "..."
  }

  return (
    <div className="max-w-screen-xxl mx-auto px-4">
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

            {/* Reviews Grid */}
            <div className="mb-12">
              {/* Scrollable Reviews */}
              <div
                ref={scrollRef}
                className="flex overflow-x-auto space-x-6 pb-4 -mx-4 px-4 snap-x snap-mandatory scroll-smooth no-scrollbar"
                style={{
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none',
                }}
              >
                {reviews.map((review, index) => (
                  <div
                    key={review.id}
                    className="min-w-[90%] sm:min-w-[460px] snap-start flex-shrink-0"
                  >
                    <Card 
                      className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white shadow-lg ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                      }`}
                      style={{
    width: '500px',
    minHeight: '300px',
    maxHeight: '350px',
    animationDelay: `${index * 200}ms`
  }}
                    >
                      <CardContent className="p-6 sm:p-8 relative h-full flex flex-col justify-between">
                        {/* Quote Icon */}
                        <div className={`absolute top-6 right-6 w-8 h-8 bg-gradient-to-r ${color} rounded-full flex items-center justify-center opacity-20`}>
                          <Quote className="h-4 w-4 text-white" />
                        </div>

                        {/* Top Section: User Info */}
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

                        {/* Middle Section: Review Content */}
                        <div className="flex-1 mb-4">
                          <blockquote className="text-gray-700 leading-relaxed text-sm line-clamp-4">
                            "{truncateText(review.review_content, 180)}"
                          </blockquote>
                        </div>

                        {/* Bottom Section: Meta */}
                        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                          <div className="flex items-center text-xs text-gray-500">
                            <Calendar className="h-3 w-3 mr-1" />
                            {formatDate(review.date)}
                          </div>
                          {review.badge_text && (
                            <Badge 
                              variant="secondary" 
                              className={`bg-gradient-to-r ${color} text-white border-0 text-xs px-2 py-1 rounded-full`}
                            >
                              {review.badge_text}
                            </Badge>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>

              {/* Hide scrollbar with CSS */}
              <style jsx>{`
                .no-scrollbar::-webkit-scrollbar {
                  display: none;
                }
              `}</style>

              {/* Prev/Next Buttons below the cards */}
              <div className="flex justify-center space-x-4 mt-6">
                <Button
                  variant="outline"
                  onClick={() => scrollRef.current?.scrollBy({ left: -500, behavior: "smooth" })}
                  className="rounded-full px-6 py-2 text-sm"
                >
                  ⬅ Previous
                </Button>
                <Button
                  variant="outline"
                  onClick={() => scrollRef.current?.scrollBy({ left: 500, behavior: "smooth" })}
                  className="rounded-full px-6 py-2 text-sm"
                >
                  Next ➡
                </Button>
              </div>
            </div>

            {/* View All Button */}
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