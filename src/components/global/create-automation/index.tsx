'use client'

import { Button } from '@/components/ui/button'
import React, { useMemo } from 'react'
import Loader from '../loader'
import { AutomationDuoToneWhite } from '@/icons'
import { v4 } from 'uuid'
import { useCreateAutomation } from '@/hooks/use-automations'
import { useRouter } from 'next/navigation'

const CreateAutomation = () => {
  const router = useRouter()
  const mutationId =v4()
  const {isPending,mutate} = useCreateAutomation(router.refresh,mutationId)
  

  return (
    <Button
      className="lg:px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-full font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
      onClick={() => {
        mutate({
          name: "Untitled",
          id:mutationId,
          createdAt: new Date(),
          keywords:[]
        })
      }}
    >
      <Loader state={isPending}>
        <AutomationDuoToneWhite />
        <p className="lg:inline hidden">Create an Automation</p>
      </Loader>
    </Button>
  )
}

export default CreateAutomation

