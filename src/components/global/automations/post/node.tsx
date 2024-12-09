'use client'
import { Separator } from '@/components/ui/separator'
import { useQueryAutomation } from '@/hooks/user-queries'
import { InstagramBlue, Warning } from '@/icons'
import Image from 'next/image'
import React from 'react'

type Props = {
  id: string
}

const PostNode = ({ id }: Props) => {
  const { data } = useQueryAutomation(id)

  return (
    data?.data &&
    data.data.posts.length > 0 && (
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
          <span className="text-lg font-semibold">If they comment on...</span>
        </div>
        <div className="bg-gray-800/50 p-4 rounded-xl flex flex-col gap-y-3">
          <div className="flex gap-x-2 items-center">
            <InstagramBlue />
            <p className="font-bold text-lg text-white">These posts</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-3">
            {data.data.posts.map((post) => (
              <div
                key={post.id}
                className="relative aspect-square rounded-lg cursor-pointer overflow-hidden"
              >
                <Image
                  fill
                  sizes="(max-width: 640px) 50vw, 33vw"
                  src={post.media}
                  alt="post image"
                  className="hover:opacity-75 transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  )
}

export default PostNode

