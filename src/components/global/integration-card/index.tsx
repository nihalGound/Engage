"use client"

import { onUserInfo } from '@/actions/user'
import { Button } from '@/components/ui/button'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

type Props = {
    title: string
    description: string
    icon: React.ReactNode
    strategy: "INSTAGRAM" | "CRM"
}

const IntegrationCard = ({title, description, icon, strategy}: Props) => {
    const onInstaOAuth = () => {
        console.log('Implement Instagram OAuth')
    };

    const {data} = useQuery({
        queryKey: ["user-profile"],
        queryFn: onUserInfo,
    })

    const integrated = data?.data?.integrations.find(
        (integration) => integration.name === strategy
    )

    return (
        <div className="bg-gradient-to-r from-indigo-900/30 to-purple-900/30 backdrop-filter backdrop-blur-lg border border-indigo-500/30 rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all duration-300 hover:shadow-lg hover:border-indigo-500/50">
            <div className="flex items-center gap-4 w-full sm:w-auto">
                <div className="text-indigo-400 flex-shrink-0">
                    {icon}
                </div>
                <div className="flex flex-col flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2">{title}</h3>
                    <p className="text-indigo-200 text-xs sm:text-sm">{description}</p>
                </div>
            </div>
            <Button
                onClick={onInstaOAuth}
                disabled={integrated?.name === strategy}
                className="w-full sm:w-auto bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full px-4 sm:px-6 py-2 text-sm font-medium hover:from-indigo-700 hover:to-purple-700 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {integrated ? "Connected" : "Connect"}
            </Button>
        </div>
    )
}

export default IntegrationCard

