"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import Header from "@/components/header"
import Footer from "@/components/footer"

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    details: "support@reviewhub.com",
    description: "Send us an email anytime",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: "+1 (555) 123-4567",
    description: "Mon-Fri from 8am to 6pm",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: "123 Business Ave, Suite 100",
    description: "New York, NY 10001",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: "Mon-Fri: 8am-6pm",
    description: "Weekend: 10am-4pm",
  },
]

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

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
              <h1 className="text-5xl font-bold text-white mb-6">Get In Touch</h1>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                Have questions or need support? We're here to help. Reach out to us through any of the channels below.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div
              className={`transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <CardHeader>
                      <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                        <info.icon className="h-8 w-8 text-blue-600" />
                      </div>
                      <CardTitle className="text-lg">{info.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="font-semibold text-gray-900 mb-1">{info.details}</p>
                      <p className="text-gray-600 text-sm">{info.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <div
                className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Send us a Message</CardTitle>
                    <p className="text-gray-600">
                      Fill out the form below and we'll get back to you as soon as possible.
                    </p>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Full Name</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Your full name"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email Address</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="your.email@example.com"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="subject">Subject</Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="What is this regarding?"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell us more about your inquiry..."
                          rows={6}
                          required
                        />
                      </div>
                      <Button type="submit" size="lg" className="w-full">
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Map/Additional Info */}
              <div
                className={`transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-2xl">Visit Our Office</CardTitle>
                    <p className="text-gray-600">We'd love to meet you in person. Here's where you can find us.</p>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
                      <div className="text-center text-gray-500">
                        <MapPin className="h-12 w-12 mx-auto mb-2" />
                        <p>Interactive Map</p>
                        <p className="text-sm">123 Business Ave, Suite 100</p>
                        <p className="text-sm">New York, NY 10001</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Office Hours</h4>
                        <div className="text-sm text-gray-600 space-y-1">
                          <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                          <p>Saturday: 10:00 AM - 4:00 PM</p>
                          <p>Sunday: Closed</p>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Parking</h4>
                        <p className="text-sm text-gray-600">
                          Free parking is available in our building's garage. Enter through the main entrance and take
                          the elevator to the 10th floor.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Public Transport</h4>
                        <p className="text-sm text-gray-600">
                          Conveniently located near subway stations and bus stops. The building is wheelchair
                          accessible.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div
              className={`transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
              <div className="max-w-3xl mx-auto space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">How quickly do you respond to inquiries?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      We typically respond to all inquiries within 24 hours during business days. For urgent matters,
                      please call us directly.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Do you offer technical support?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Yes, we provide comprehensive technical support for all our platform features. Our support team is
                      available during business hours.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Can I schedule a demo?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Contact us to schedule a personalized demo of our platform. We'll show you how our review
                      aggregation system can benefit your business.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
