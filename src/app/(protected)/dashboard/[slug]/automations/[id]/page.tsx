import { getAutomationInfo } from '@/actions/automations'
import PostNode from '@/components/global/automations/post/node'
import AutomationsBreadCrumb from '@/components/global/bread-crumbs/main-bread-crumb/automation-bread-crumbs/page'
import { Warning } from '@/icons'
import { PrefetchUserAutomation } from '@/react-query/prefetch'
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'
import React from 'react'
import Trigger from '@/components/global/automations/trigger'
import ThenNode from '@/components/global/automations/then/node'

type Props = {
    params: {id: string,slug: string}
}

export async function generateMetadata({ params }: { params: { id: string } }) {
    const info = await getAutomationInfo(params.id)
    return {
      title: info.data?.name,
    }
}

const Page = async({params}: Props) => {
  const name = await generateMetadata({params})

  if(!name.title) {
    return (
      <div className="text-xl text-center text-white">
        No Automation found with id : {params.id}
      </div>
    )
  }
  const query = new QueryClient()
  await PrefetchUserAutomation(query,params.id)
  return (
    <HydrationBoundary state={dehydrate(query)}>
       <div className="flex flex-col items-center gap-y-8 sm:gap-y-12 lg:gap-y-20">
        <AutomationsBreadCrumb id={params.id} slug = {params.slug}/>
        
        <div className="w-full lg:w-10/12 xl:w-8/12 p-4 sm:p-5 rounded-xl flex flex-col bg-gradient-to-r from-indigo-900/30 to-purple-900/30 backdrop-filter backdrop-blur-lg border border-indigo-500/30 gap-y-3">
          <div className="flex gap-x-2 items-center text-white">
            <Warning/>
            <span className="text-lg font-semibold">When...</span>
          </div>
          <Trigger id={params.id} />
        </div>
        <ThenNode id={params.id} />
        <PostNode id={params.id} />
      </div>
    </HydrationBoundary>
  )
}

export default Page

