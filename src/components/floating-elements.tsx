'use client'

import { motion } from 'framer-motion'

export function FloatingElements() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-2 w-2 rounded-full bg-primary/10"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight
          }}
          transition={{
            duration: Math.random() * 10 + 20,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
      ))}
    </div>
  )
}
