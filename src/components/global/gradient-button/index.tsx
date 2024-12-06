import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

type Props = {
  children: React.ReactNode
  type: 'BUTTON' | 'LINK'
  href?: string
  className?: string
}

const GradientButton = ({ children, type, className, href }: Props) => {
  const gradients =
    'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl p-[2px]'

  switch (type) {
    case 'BUTTON':
      return (
        <div className={gradients}>
          <Button className={cn('rounded-xl bg-gray-900 hover:bg-gray-800 transition-colors duration-300', className)}>{children}</Button>
        </div>
      )

    case 'LINK':
      return (
        <div className={gradients}>
          <Link
            href={href!}
            className={cn('block rounded-xl bg-gray-900 hover:bg-gray-800 transition-colors duration-300 px-4 py-2', className)}
          >
            {children}
          </Link>
        </div>
      )

    default:
      return null
  }
}

export default GradientButton

