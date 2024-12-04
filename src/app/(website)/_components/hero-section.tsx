'use client'

import { Button } from "@/components/ui/button"
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative py-20 overflow-hidden gradient-bg min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-x-4">
          <div 
            className={`md:w-1/2 mb-10 md:mb-0 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-text-shimmer">
              Boost Instagram Engagement with Smart Automation!
            </h1>
            <p className="text-xl text-white mb-8">
              Automate replies, engage customers, and grow your business effortlessly with AI-powered chats.
            </p>
            <div 
              className={`flex space-x-4 transition-all duration-1000 ease-out delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 hover:scale-105 transition-transform duration-300">
                Get Started for Free
              </Button>
            </div>
          </div>
          <div 
            className={`md:w-1/2 transition-all duration-1000 ease-out delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
          >
            <div className="relative w-9/12 h-[400px] rounded-lg shadow-2xl overflow-hidden">
              <Image
                src="/insta-logo.jpg"
                alt="Social Media Technology"
                layout="fill"
                objectFit="contain"
                className="animate-float rounded-xl "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

