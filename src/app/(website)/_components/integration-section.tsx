import Image from 'next/image'

export default function IntegrationsSection() {
  const integrations = [
    { name: 'Instagram', logo: '/placeholder.svg?height=80&width=80' },
    { name: 'Zapier', logo: '/placeholder.svg?height=80&width=80' },
    { name: 'Shopify', logo: '/placeholder.svg?height=80&width=80' },
    { name: 'Slack', logo: '/placeholder.svg?height=80&width=80' },
    { name: 'HubSpot', logo: '/placeholder.svg?height=80&width=80' },
    { name: 'Mailchimp', logo: '/placeholder.svg?height=80&width=80' },
  ]

  return (
    <section id="integrations" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Works Seamlessly With Your Favorite Tools</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {integrations.map((integration, index) => (
            <div key={index} className="flex items-center justify-center">
              <Image
                src={integration.logo}
                alt={integration.name}
                width={80}
                height={80}
                className="grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

