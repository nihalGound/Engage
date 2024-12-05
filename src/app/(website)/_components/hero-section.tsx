import Image from 'next/image'
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-background min-h-screen">
      <div className="absolute inset-0 z-0">
        <div className="absolute w-[120%] h-[120%] -top-[10%] -left-[10%] opacity-80">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,0,128,0.3),rgba(128,0,255,0)_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(128,0,255,0.3),rgba(255,0,128,0)_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(64,192,255,0.3),rgba(128,0,255,0)_50%)]" />
          <div className="blob-mask animate-blob-spin" />
        </div>
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-20 md:pt-24 lg:pt-32">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-text-shimmer text-foreground">
              Boost Instagram Engagement with <span className="text-gradient">Smart Automation!</span>
            </h1>
            <p className="text-xl  mb-8 dark:text-white text-black   text-muted-foreground">
              Automate replies, engage customers, and grow your business effortlessly with AI-powered chats.
            </p>
            <div className="mt-8 sm:mx-auto sm:max-w-lg sm:text-center lg:mx-0 lg:text-left">
              <Button size="lg" className="rounded-md px-8 py-3 text-lg font-semibold">Start now</Button> 
            </div>
          </div>
          <div className="relative mt-12 sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mx-0 lg:mt-0 lg:flex lg:max-w-none lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <div className="relative block w-full overflow-hidden rounded-lg bg-muted">
                <Image
                  src="/placeholder.svg"
                  alt="Placeholder image"
                  width={500}
                  height={300}
                  className="w-full"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg font-medium text-foreground/70">Placeholder Image</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

