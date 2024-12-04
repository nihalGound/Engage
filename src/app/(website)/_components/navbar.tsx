'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { ModeToggle } from './dark-mode-toggle'
import { FloatingDockDemo } from './floating-dock'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const user = false

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-black">Engage</Link>
          <div className="hidden md:flex">
            <FloatingDockDemo/>
          </div>
          <div className='md:flex items-center justify-between gap-x-5 hidden'>
           <ModeToggle />
            <aside className="flex items-center gap-4">
                <Link href="/dashboard"
                    className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                        {user ? "Dashboard" : "Get Started"}
                    </span>
                </Link>
            </aside>
           </div>
          <div className="md:hidden flex items-center space-x-2">
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}

