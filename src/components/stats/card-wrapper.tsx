import React from 'react'
import { Card, CardContent, CardDescription, CardHeader } from '../ui/card'
import { cn } from '@/lib/utils'

type CardWrapperProps = {
  wrapperClass?: string
  contentClass?: string
  children: React.ReactNode
}

export default function CardWrapper({ wrapperClass, contentClass, children }: CardWrapperProps) {
  return (
    <Card className={wrapperClass}>
      <CardContent className={cn('px-5 pt-3', contentClass)}>{children}</CardContent>
    </Card>
  )
}
