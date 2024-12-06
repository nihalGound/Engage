import InfoBar from '@/components/global/infobar'
import Sidebar from '@/components/global/sidebar'
import { PrefetchUserAutomations, PrefetchUserProfile } from '@/react-query/prefetch'
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'
import React from 'react'

type Props = {
    children: React.ReactNode
    params: {slug: string}
}

const Layout = async ({children,params}: Props) => {
  const query = new QueryClient()
  await PrefetchUserProfile(query)
  await PrefetchUserAutomations(query)
  return (
    <HydrationBoundary state={dehydrate(query)}>
      <div className="p-3">
        <Sidebar slug={params.slug} />
        <div
        className="
        lg:ml-[250px] 
        lg:pl-10 
        lg:py-5 
        flex 
        flex-col 
        overflow-auto
        ">
            <InfoBar slug={params.slug} />
            <div className='mt-2'></div>
            {children}
        </div>
    </div>
    </HydrationBoundary>
    
  )
}

export default Layout