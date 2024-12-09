import { InstagramBlue, PlaneBlue } from '@/icons'
import React from 'react'

type Props = {
  type: string
  keywords: {
    id: string
    word: string
    automationId: string | null
  }[]
}

const ActiveTrigger = ({ keywords, type }: Props) => {
  return (
    <div className="bg-gray-800/50 p-4 rounded-xl w-full backdrop-filter backdrop-blur-lg border border-indigo-500/30">
      <div className="flex gap-x-2 items-center">
        {type === 'COMMENT' ? <InstagramBlue /> : <PlaneBlue />}
        <p className="text-lg text-white font-semibold">
          {type === 'COMMENT'
            ? 'User comments on my post.'
            : 'User sends me a direct message.'}
        </p>
      </div>
      <p className="text-indigo-200 mt-2">
        {type === 'COMMENT'
          ? 'If the user comments on a video that is set up to listen for keywords, this automation will fire'
          : 'If the user sends you a message that contains a keyword, this automation will fire'}
      </p>
      <div className="flex flex-wrap gap-2 mt-4">
        {keywords.map((word) => (
          <div
            key={word.id}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center gap-x-2 capitalize text-white font-light py-1 px-4 rounded-full text-sm"
          >
            <p>{word.word}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ActiveTrigger

