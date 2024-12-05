import React from 'react'

type Props = {
    type: "FREE" | "PRO"
    children: React.ReactNode
}

const SubscriptionPlan = ({children,type}: Props) => {
    // WIP: call api to check if correct plan 
  return (
    children
  )
}

export default SubscriptionPlan