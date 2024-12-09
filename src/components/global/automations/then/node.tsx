'use client'
import { Separator } from '@/components/ui/separator'
import { useQueryAutomation } from '@/hooks/user-queries'
import { PlaneBlue, SmartAi, Warning } from '@/icons'
import React from 'react'
import PostButton from '../post'

type Props = {
  id: string
}

const ThenNode = ({ id }: Props) => {
  const { data } = useQueryAutomation(id)
  const commentTrigger = data?.data?.trigger.find((t) => t.type === 'COMMENT')

  if (!data?.data?.listener) {
    return null
  }

  return (
    <div className="w-full sm:w-10/12 lg:w-8/12 xl:w-6/12 relative p-4 sm:p-5 rounded-xl flex flex-col bg-gradient-to-r from-indigo-900/30 to-purple-900/30 backdrop-filter backdrop-blur-lg border border-indigo-500/30 gap-y-3">
      <div className="absolute h-20 left-1/2 -top-20 flex flex-col items-center z-10">
        <span className="h-[9px] w-[9px] bg-indigo-500/50 rounded-full" />
        <Separator
          orientation="vertical"
          className="h-full border-[1px] border-indigo-500/30"
        />
        <span className="h-[9px] w-[9px] bg-indigo-500/50 rounded-full" />
      </div>
      <div className="flex gap-x-2 items-center text-white">
        <Warning />
        <span className="text-lg font-semibold">Then...</span>
      </div>
      <div className="bg-gray-800/50 p-4 rounded-xl flex flex-col gap-y-2">
        <div className="flex gap-x-2 items-center">
          {data.data.listener.listener === 'MESSAGE' ? (
            <PlaneBlue/>
          ) : (
            <SmartAi />
          )}
          <p className="text-lg font-semibold text-white">
            {data.data.listener.listener === 'MESSAGE'
              ? 'Send the user a message.'
              : 'Let Smart AI take over'}
          </p>
        </div>
        <p className="text-indigo-200">{data.data.listener.prompt}</p>
      </div>
      {data.data.posts.length === 0 && commentTrigger && (
        <PostButton id={id} />
      )}
    </div>
  )
}

export default ThenNode

