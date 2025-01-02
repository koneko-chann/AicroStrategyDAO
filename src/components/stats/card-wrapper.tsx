import React from 'react'

import { cn } from '@/lib/utils'

import { Card, CardContent } from '../ui/card'

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
