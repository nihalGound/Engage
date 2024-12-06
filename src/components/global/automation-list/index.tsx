"use client"
import { usePath } from '@/hooks/user-nav'
import { cn, getMonth } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import GradientButton from '../gradient-button'
import { Button } from '@/components/ui/button'
import CreateAutomation from '../create-automation'

const AutomationList = () => {
    // WIP: wired up to fetch data and create optimistic ui with react query
    const data = {
        status: 200,
        data: [";asf;laskdjflk"]
    }
    const {pathname} = usePath()
    const optimisticUiData = {
        data : [
            {
                id: 1,
                name: "test",
                keywords:[{word:"coding",id:2},{word:"dm",id:3},{word:"course",id:4},{word:"welcome",id:5}],
                createdAt: new Date("4/11/24"),
                listener: {
                    listener : "SMARTAI"
                }
            },
        ]
    }
    if (data?.status !== 200 || data?.data.length <= 0) {
        return (
          <div className="h-[70vh] flex justify-center items-center flex-col gap-y-3">
            <h3 className="text-lg text-indigo-200">No Automations</h3>
            <CreateAutomation />
          </div>
        )
    }
    return (
        <div className="flex flex-col gap-y-4">
        {optimisticUiData.data!.map((automation) => (
            <Link
            href={`${pathname}/${automation.id}`}
            key={automation.id}
            className="bg-gradient-to-r from-indigo-900/30 to-purple-900/30 hover:from-indigo-800/40 hover:to-purple-800/40 transition duration-300 rounded-xl p-5 border border-indigo-500/30 backdrop-filter backdrop-blur-lg flex flex-col sm:flex-row gap-4"
            >
            <div className="flex flex-col flex-1 items-start">
                <h2 className="text-xl font-semibold text-white">{automation.name}</h2>
                <p className="text-indigo-200 text-sm font-light mb-2">
                This is from the comment
                </p>

                {automation.keywords.length > 0 ? (
                <div className="flex gap-2 flex-wrap mt-3">
                    {automation.keywords.map((keyword, index) => (
                    <div
                        key={keyword.id}
                        className={cn(
                        'rounded-full px-3 py-1 text-xs capitalize',
                        index % 4 === 0 && 'bg-green-500/20 border border-green-500/50 text-green-300',
                        index % 4 === 1 && 'bg-purple-500/20 border border-purple-500/50 text-purple-300',
                        index % 4 === 2 && 'bg-yellow-500/20 border border-yellow-500/50 text-yellow-300',
                        index % 4 === 3 && 'bg-red-500/20 border border-red-500/50 text-red-300'
                        )}
                    >
                        {keyword.word}
                    </div>
                    ))}
                </div>
                ) : (
                <div className="rounded-full border border-dashed border-indigo-500/50 mt-3 px-3 py-1">
                    <p className="text-xs text-indigo-300">No Keywords</p>
                </div>
                )}
            </div>
            <div className="flex flex-col justify-between items-end gap-2">
                <p className="capitalize text-xs font-light text-indigo-200">
                {getMonth(automation.createdAt.getUTCMonth() + 1)}{' '}
                {automation.createdAt.getUTCDate() === 1
                    ? `${automation.createdAt.getUTCDate()}st`
                    : `${automation.createdAt.getUTCDate()}th`}{' '}
                {automation.createdAt.getUTCFullYear()}
                </p>

                {automation.listener?.listener === 'SMARTAI' ? (
                <GradientButton
                    type="BUTTON"
                    className="w-full sm:w-auto bg-indigo-900/50 text-white hover:bg-indigo-800/50"
                >
                    Smart AI
                </GradientButton>
                ) : (
                <Button className="w-full sm:w-auto bg-gray-700 hover:bg-gray-600 text-white">
                    Standard
                </Button>
                )}
            </div>
            </Link>
        ))}
        </div>
    )
}

export default AutomationList

