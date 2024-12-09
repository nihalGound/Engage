import { Button } from '@/components/ui/button'
import { PLANS } from '@/constants/pages'
import { cn } from '@/lib/utils'
import { CircleCheck } from 'lucide-react'
import React from 'react'

type Props = {
  label: string
  current: 'PRO' | 'FREE'
  landing?: boolean
}

const PaymentCard = ({ current, label, landing }: Props) => {
  const isPro = label === 'PRO'
  const isCurrentPlan = label === current

  return (
    <div
      className={cn(
        'p-[2px] rounded-2xl overflow-hidden',
        isCurrentPlan
          ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'
          : 'bg-gray-700'
      )}
    >
      <div
        className={cn(
          'flex flex-col rounded-2xl p-6 h-full shadow-xl',
          landing ? 'bg-gradient-to-b from-indigo-900/90 to-purple-900/90' : 'bg-gray-900/90',
          'backdrop-filter backdrop-blur-lg'
        )}
      >
        <h2 className="text-2xl font-bold text-white mb-2">
          {landing
            ? isPro ? 'Premium Plan' : 'Standard Plan'
            : isCurrentPlan
            ? 'Your Current Plan'
            : current === 'PRO'
            ? 'Downgrade'
            : 'Upgrade'}
        </h2>
        <p className="text-indigo-200 text-sm mb-4">
          This is what your plan covers for automations and AI features
        </p>
        {isPro ? (
          <span className="text-3xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
            Smart AI
          </span>
        ) : (
          <p className="font-bold text-2xl text-indigo-300 mb-2">Standard</p>
        )}
        <p className="text-xl font-bold text-white mb-4">
          {isPro ? '$9.99/month' : 'Free'}
        </p>

        {PLANS[isPro ? 1 : 0].features.map((feature) => (
          <p key={feature} className="flex items-center gap-2 text-indigo-200 mb-2">
            <CircleCheck className="text-indigo-400" size={18} />
            {feature}
          </p>
        ))}

        <Button
          className={cn(
            'rounded-full mt-6 px-6 py-2 font-medium transition-all duration-200',
            isPro
              ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600'
              : 'bg-gray-700 text-white hover:bg-gray-600',
            isCurrentPlan && !landing && 'opacity-50 cursor-not-allowed'
          )}
          disabled={isCurrentPlan && !landing}
        >
          {landing
            ? isCurrentPlan ? 'Get Started' : isPro ? 'Upgrade Now' : 'Try for Free'
            : isCurrentPlan
            ? 'Active'
            : current === 'PRO'
            ? 'Downgrade'
            : 'Upgrade'}
        </Button>
      </div>
    </div>
  )
}

export default PaymentCard

