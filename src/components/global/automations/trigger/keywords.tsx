import { Input } from '@/components/ui/input'
import { addKeywordKey } from '@/constants/react-query-variables'
import { useKeywords } from '@/hooks/use-automations'
import { useMutationDataState } from '@/hooks/use-mutation-data'
import { useQueryAutomation } from '@/hooks/user-queries'
import React from 'react'

type Props = {
  id: string
}

export const Keywords = ({ id }: Props) => {
  const { onValueChange, keyword, onKeyPress, deleteMutation } = useKeywords(id)
  const { latestVariable } = useMutationDataState([addKeywordKey])
  const { data } = useQueryAutomation(id)

  return (
    <div className="bg-gray-800/50 flex flex-col gap-y-3 p-4 rounded-xl backdrop-filter backdrop-blur-lg border border-indigo-500/30">
      <p className="text-sm text-indigo-200">
        Add words that trigger automations
      </p>
      <div className="flex flex-wrap justify-start gap-2 items-center">
        {data?.data?.keywords &&
          data?.data?.keywords.length > 0 &&
          data?.data?.keywords.map(
            (word) =>
              word.id !== latestVariable.variables.id && (
                <div
                  className="bg-indigo-900/50 flex items-center gap-x-2 capitalize text-indigo-200 py-1 px-3 rounded-full text-sm"
                  key={word.id}
                >
                  <p>{word.word}</p>
                </div>
              )
          )}
        {latestVariable && latestVariable.status === 'pending' && (
          <div className="bg-purple-900/50 flex items-center gap-x-2 capitalize text-purple-200 py-1 px-3 rounded-full text-sm">
            {latestVariable.variables.keyword}
          </div>
        )}
        <Input
          placeholder="Add keyword..."
          style={{
            width: Math.min(Math.max(keyword.length || 10, 2), 50) + 'ch',
          }}
          value={keyword}
          className="p-0 bg-transparent ring-0 border-none outline-none text-white placeholder-indigo-300"
          onChange={onValueChange}
          onKeyUp={onKeyPress}
        />
      </div>
    </div>
  )
}

export default Keywords

