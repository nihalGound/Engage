'use client'

import { Button } from "@/components/ui/button"
import { useEffect, useState } from 'react'

export default function CTASection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    const section = document.getElementById('cta')
    if (section) observer.observe(section)

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [])

  return (
    <section id="cta" className="py-20 gradient-bg">
      <div className="container mx-auto px-4 text-center">
        <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold mb-4 text-white">Start Your Free Trial Today!</h2>
          <p className="text-xl mb-8 text-white">Experience the power of automated Instagram engagement risk-free.</p>
          <Button size="lg" variant="secondary" className="animate-button-pulse">Get Started Now</Button>
        </div>
      </div>
    </section>
  )
}

