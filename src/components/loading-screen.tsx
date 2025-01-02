'use client'

import { useState, useEffect } from 'react'

import { GradientText } from '@/components/gradient-text'

export function LoadingScreen() {
  const [show, setShow] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(true)
      // Wait for fade out animation to complete before unmounting
      setTimeout(() => {
        setShow(false)
      }, 800) // Match this with the CSS transition duration
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  if (!show) return null

  return (
    <div
      className={`duration-800 fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-opacity ease-in-out dark:bg-black ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
    >
      <div className="relative flex flex-col items-center gap-8">
        {/* Animated lines with glow effect */}
        <div className="absolute inset-0 flex -rotate-12 justify-around opacity-20 blur-[0.5px]">
          {[...Array(7)].map((_, i) => (
            <div
              key={i}
              className="w-[1px] bg-gradient-to-b from-transparent via-[#df1f21] to-transparent"
              style={{
                height: '160%',
                transform: `translateY(${-50 + i * 15}%)`,
                animation: `slideUp ${4 + i * 0.3}s linear infinite`,
                opacity: 0.7 - i * 0.1
              }}
            />
          ))}
        </div>

        {/* Main content */}
        <div className="flex flex-col items-center gap-8">
          {/* Logo or text with subtle shadow */}
          <h1 className="typewriter relative z-10 text-3xl font-bold drop-shadow-sm md:text-5xl">
            <GradientText>Vires in Numeris</GradientText>
          </h1>

          {/* Enhanced rotating rings with loader */}
          <div className="rotating-text relative">
            <div className="absolute -inset-12 rounded-full border border-[#df1f21] opacity-20 blur-[0.3px]" />
            <div className="absolute -inset-16 rounded-full border border-[#df1f21] opacity-10 blur-[0.3px]" />
            <div className="absolute -inset-20 rounded-full border border-[#df1f21] opacity-5 blur-[0.3px]" />
            <div className="loader-enhanced" />
          </div>
        </div>
      </div>
    </div>
  )
}
