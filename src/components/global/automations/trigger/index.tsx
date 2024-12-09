'use client'
import { useQueryAutomation } from '@/hooks/user-queries'
import React from 'react'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import Loader from '../../loader'
import ActiveTrigger from './active'
import Keywords from './keywords'
import { AUTOMATION_TRIGGERS } from '@/constants/automation'
import TriggerButton from '../trigger-button'
import ThenAction from '../then/then-action'
import { useTriggers } from '@/hooks/use-automations'

type Props = {
  id: string
}

const Trigger = ({ id }: Props) => {
  const { types, onSetTrigger, onSaveTrigger, isPending } = useTriggers(id)
  const { data } = useQueryAutomation(id)

  if (data?.data && data?.data?.trigger.length > 0) {
    return (
      <div className="flex flex-col gap-y-6 items-center w-full">
        <ActiveTrigger
          type={data.data.trigger[0].type}
          keywords={data.data.keywords}
        />

        {data?.data?.trigger.length > 1 && (
          <>
            <div className="relative w-full sm:w-8/12 my-4">
              <p className="absolute transform px-2 -translate-y-1/2 top-1/2 left-1/2 -translate-x-1/2 bg-indigo-900/50 text-white rounded-full">
                or
              </p>
              <Separator
                orientation="horizontal"
                className="border-indigo-500/30 border-[1px]"
              />
            </div>
            <ActiveTrigger
              type={data.data.trigger[1].type}
              keywords={data.data.keywords}
            />
          </>
        )}

        {!data.data.listener && <ThenAction id={id} />}
      </div>
    )
  }
  return (
    <TriggerButton label="Add Trigger">
      <div className="flex flex-col gap-y-3">
        {AUTOMATION_TRIGGERS.map((trigger) => (
          <div
            key={trigger.id}
            onClick={() => onSetTrigger(trigger.type)}
            className={cn(
              'hover:opacity-80 text-white rounded-xl flex cursor-pointer flex-col p-3 gap-y-2 transition-colors duration-300',
              !types?.find((t) => t === trigger.type)
                ? 'bg-gray-800/50'
                : 'bg-gradient-to-r from-indigo-600 to-purple-600'
            )}
          >
            <div className="flex gap-x-2 items-center">
              {trigger.icon}
              <p className="font-semibold">{trigger.label}</p>
            </div>
            <p className="text-sm text-indigo-200">{trigger.description}</p>
          </div>
        ))}
        <Keywords id={id} />
        <Button
          onClick={onSaveTrigger}
          disabled={types?.length === 0}
          className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium hover:from-indigo-700 hover:to-purple-700 transition-colors duration-300"
        >
          <Loader state={isPending}>Create Trigger</Loader>
        </Button>
      </div>
    </TriggerButton>
  )
}

export default Trigger

