'use client'

export function GradientText({ children }: { children: React.ReactNode }) {
  return (
    <span className="animate-gradient bg-gradient-to-r from-primary via-red-500 to-primary bg-clip-text text-transparent">
      {children}
    </span>
  )
}
