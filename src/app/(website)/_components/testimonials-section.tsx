import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Social Media Manager',
      company: 'TechStart Inc.',
      quote: 'InstaEngage has revolutionized our Instagram strategy. The AI-powered responses feel incredibly natural, and our engagement rates have skyrocketed!',
      avatar: '/placeholder.svg?height=100&width=100'
    },
    {
      name: 'Michael Chen',
      role: 'E-commerce Owner',
      company: 'FashionFwd',
      quote: 'The automated replies have saved us countless hours. We can now focus on creating great content while InstaEngage handles customer inquiries 24/7.',
      avatar: '/placeholder.svg?height=100&width=100'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Director',
      company: 'GreenEats',
      quote: "The insights provided by InstaEngage have been invaluable. We've optimized our content strategy and seen a 200% increase in follower growth.",
      avatar: '/placeholder.svg?height=100&width=100'
    }
  ]

  return (
    <section className="py-20 bg-background" id="testimonial">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center space-x-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="italic">"{testimonial.quote}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

