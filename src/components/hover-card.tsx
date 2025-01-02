'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export function HoverCard({ children }: { children: React.ReactNode }) {
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const newRotateX = (y - centerY) / 10
    const newRotateY = (centerX - x) / 10

    setRotateX(newRotateX)
    setRotateY(newRotateY)
  }

  return (
    <motion.div
      className="relative rounded-xl bg-white p-6 shadow-lg"
      animate={{
        rotateX,
        rotateY
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        setRotateX(0)
        setRotateY(0)
      }}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
    >
      {children}
    </motion.div>
  )
}
