import IntegrationCard from '@/components/global/integration-card'
import { INTEGRATION_CARDS } from '@/constants/integrations'
import React from 'react'


const Page = () => {
  return (
    <div className="flex">
        <div className="flex flex-col w-full lg:w-8/12 gap-y-5">
            {INTEGRATION_CARDS.map((card,key) => (
                <IntegrationCard 
                    key={key}
                    {...card}
                />
            ))}
        </div>
    </div>
  )
}

export default Page