'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardDescription, CardFooter, CardTitle } from "@/components/ui/card"
import { useEffect, useState } from 'react'

export default function PricingSection() {
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

    const section = document.getElementById('pricing')
    if (section) observer.observe(section)

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [])

  const plans = [
    {
      name: 'Free',
      price: '$0',
      description: 'Perfect for getting started',
      features: [
        'Boost engagement with target responses',
        'Automate comment replies to enhance audience interaction',
        'Turn followers into customers with targeted messaging'
    ],
    },
    {
      name: 'Pro',
      price: '$29',
      description: 'Best for growing businesses',
      features: [
        'All features from Free Plan',
        'AI-powered response generation',
        'Advanced analytics and insights',
        'Priority customer support',
        'Custom branding options'
    ],
    },
  ]

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12 animate-text-shimmer bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">Simple, Transparent Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <Card className={`h-full ${index === 1 ? 'border-primary' : ''} hover:shadow-xl transition-all duration-300 hover:scale-105 bg-background/80 backdrop-blur-sm`}>
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">{plan.name}</CardTitle>
                  <CardDescription className="text-lg">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-5xl font-bold mb-6 animate-price-pop text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
                    {plan.price}{plan.name === 'Pro' && '/month'}
                  </p>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className={`flex items-center transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}`}
                        style={{ transitionDelay: `${(index * 5 + featureIndex) * 100}ms` }}
                      >
                        <svg className="w-5 h-5 mr-3 text-green-500 animate-check-mark" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full animate-button-pulse text-lg py-6" variant={index === 1 ? 'default' : 'outline'}>Choose {plan.name} Plan</Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

