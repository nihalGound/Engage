import React from 'react'
import TriggerButton from '../trigger-button'
import { cn } from '@/lib/utils'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Loader from '../../loader'
import { Textarea } from '@/components/ui/textarea'
import SubscriptionPlan from '../../subscription-plan'
import { AUTOMATION_LISTENERS } from '@/constants/automation'
import { useListener } from '@/hooks/use-automations'

type Props = {
  id: string
}

const ThenAction = ({ id }: Props) => {
  const {
    onSetListener,
    listener: Listener,
    onFormSubmit,
    register,
    isPending,
  } = useListener(id)

  return (
    <TriggerButton label="Then">
      <div className="flex flex-col gap-y-3">
        {AUTOMATION_LISTENERS.map((listener) =>
          listener.type === 'SMARTAI' ? (
            <SubscriptionPlan
              key={listener.type}
              type="PRO"
            >
              <div
                onClick={() => onSetListener(listener.type)}
                className={cn(
                  Listener === listener.type
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600'
                    : 'bg-gray-800/50',
                  'p-4 rounded-xl flex flex-col gap-y-2 cursor-pointer hover:opacity-90 transition duration-300'
                )}
              >
                <div className="flex gap-x-2 items-center">
                  {listener.icon}
                  <p className="text-white font-semibold">{listener.label}</p>
                </div>
                <p className="text-indigo-200 text-sm">{listener.description}</p>
              </div>
            </SubscriptionPlan>
          ) : (
            <div
              onClick={() => onSetListener(listener.type)}
              key={listener.id}
              className={cn(
                Listener === listener.type
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600'
                  : 'bg-gray-800/50',
                'p-4 rounded-xl flex flex-col gap-y-2 cursor-pointer hover:opacity-90 transition duration-300'
              )}
            >
              <div className="flex gap-x-2 items-center">
                {listener.icon}
                <p className="text-white font-semibold">{listener.label}</p>
              </div>
              <p className="text-indigo-200 text-sm">{listener.description}</p>
            </div>
          )
        )}
        <form
          onSubmit={onFormSubmit}
          className="flex flex-col gap-y-3"
        >
          <Textarea
            placeholder={
              Listener === 'SMARTAI'
                ? 'Add a prompt that your smart AI can use...'
                : 'Add a message you want to send to your customers'
            }
            {...register('prompt')}
            className="bg-gray-800/50 outline-none border-none ring-0 focus:ring-0 text-white placeholder-indigo-300"
          />
          <Input
            {...register('reply')}
            placeholder="Add a reply for comments (Optional)"
            className="bg-gray-800/50 outline-none border-none ring-0 focus:ring-0 text-white placeholder-indigo-300"
          />
          <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 w-full text-white font-medium hover:from-indigo-700 hover:to-purple-700 transition-colors duration-300">
            <Loader state={isPending}>Add listener</Loader>
          </Button>
        </form>
      </div>
    </TriggerButton>
  )
}

export default ThenAction

