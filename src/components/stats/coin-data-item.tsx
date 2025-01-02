'use client'

import { Check, Copy } from 'lucide-react'
import { useState } from 'react'

type CoinDataItemProps = {
  label: string
  value: React.ReactNode
  copyText?: string
}

export default function CoinDataItem({ label, value, copyText }: CoinDataItemProps) {
  const [isCopied, setIsCopied] = useState(false)

  const handleClick = async () => {
    if (!copyText) return

    setIsCopied(true)
    await global.navigator.clipboard.writeText(copyText)
    setTimeout(() => {
      console.log('==> end copyText')
      setIsCopied(false)
    }, 2000)
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      <p className="text-sm font-medium text-muted-foreground">{label}</p>

      <div className="col-span-2 flex items-center justify-end font-medium">
        <span className="mr-1">{value}</span>

        {copyText &&
          (isCopied ? <Check className="w-6 text-green-600" /> : <Copy onClick={handleClick} className="w-6" />)}
      </div>
    </div>
  )
}
