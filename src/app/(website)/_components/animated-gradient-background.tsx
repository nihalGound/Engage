'use client'

import { useEffect, useRef } from 'react'

export default function AnimatedGradientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createGradient = (t: number) => {
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, `hsl(${(t + 0) % 360}, 100%, 70%)`)
      gradient.addColorStop(0.33, `hsl(${(t + 60) % 360}, 100%, 70%)`)
      gradient.addColorStop(0.66, `hsl(${(t + 120) % 360}, 100%, 70%)`)
      gradient.addColorStop(1, `hsl(${(t + 180) % 360}, 100%, 70%)`)
      return gradient
    }

    const drawCurve = (t: number) => {
      ctx.beginPath()
      ctx.moveTo(0, canvas.height * 0.6 + Math.sin(t * 0.01) * 50)
      ctx.bezierCurveTo(
        canvas.width * 0.33, canvas.height * 0.6 + Math.sin((t + 1) * 0.01) * 50,
        canvas.width * 0.66, canvas.height * 0.6 + Math.sin((t + 2) * 0.01) * 50,
        canvas.width, canvas.height * 0.6 + Math.sin((t + 3) * 0.01) * 50
      )
      ctx.lineTo(canvas.width, canvas.height)
      ctx.lineTo(0, canvas.height)
      ctx.closePath()
    }

    const animate = (t: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      const gradient = createGradient(t * 0.1)
      ctx.fillStyle = gradient

      drawCurve(t)
      ctx.fill()

      animationFrameId = requestAnimationFrame(() => animate(t + 1))
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    animate(0)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ mixBlendMode: 'soft-light' }}
    />
  )
}

