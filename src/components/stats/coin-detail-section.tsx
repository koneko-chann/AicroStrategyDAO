import { SendIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { cn } from '@/lib/utils'

import CardWrapper from './card-wrapper'

type DetailItemProps = {
  label: string
  value: React.ReactNode
  valueClass?: string
  description?: string
}

const DetailItem = ({ label, value, valueClass, description }: DetailItemProps) => (
  <div>
    <span className="text-md pl-1 font-medium text-muted-foreground">{label}</span>
    <div className={cn('text-4xl font-bold tracking-tight', valueClass)}>{value}</div>
    <span className="mt-1 text-lg font-medium text-primary">{description}</span>
  </div>
)

export default function CoinDetailSection() {
  return (
    <CardWrapper wrapperClass="basis-1/2" contentClass="grid grid-cols-1 md:grid-cols-3 gap-6 ">
      {/* Header */}
      <div className="col-span-1 md:col-span-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/aistr.jpeg" alt="AI Trading" width={48} height={48} className="rounded-full" />

            <h5 className="text-2xl font-bold">$AiSTR (AicroStrategy)</h5>
          </div>

          <div>
            <Link href="https://twitter.com/AicroStrategy" className="group flex items-center gap-2" target="_blank">
              <div className="flex items-center gap-0.5">
                <Image
                  src="/aistr.jpeg"
                  alt="AI Trading"
                  width={48}
                  height={48}
                  className="aspect-square w-5 rounded-full"
                />

                <span className="text-sm text-red-500 group-hover:underline">AicroStrategy</span>
              </div>
            </Link>

            <Link
              href="https://t.me/aicrostrategy_dao"
              className="flex items-center gap-0.5 text-sm text-blue-600 transition-colors hover:text-blue-800"
              target="_blank"
            >
              <SendIcon className="w-4" />
              <span>aicrostrategy_dao</span>
            </Link>
          </div>
        </div>

        <p className="text-sm text-muted-foreground">
          We are bringing MicroStrategy onchain, to the new hub of Ethereum defi - Base. AicroStrategy is an AI first
          hedge fund that will leverage cbBTC holdings to maximize exposure to Bitcoin. Raised funds will be used to buy
          cbBTC and those Bitcoin will be deployed to carefully chosen defi protocols to maximize safety and leverage.
          Our initial plan is to deposit to Aave, borrow USDC, buy more cbBTC and repeat the process. Our AI powered
          algorithms will determine the optimal leverage ratios to execute our plan.
        </p>
      </div>

      {/* Detail content */}
      <div className="col-span-1 space-y-2 md:col-span-2">
        <DetailItem label="Market Cap" value="$8,407,289.00" description="+$8,273,242 (5942%)" />

        <DetailItem
          label="Your Holdings"
          valueClass="text-2xl font-semibold"
          value={
            <>
              0 AiSTR
              <span className="ml-2 text-sm">(0%)</span>
            </>
          }
        />

        <DetailItem label="Your Market Value" valueClass="text-2xl font-semibold" value="$8,407,289.00" />
      </div>

      {/* Sponsor content */}
      <div className="col-span-1 flex flex-col justify-end md:col-span-1"></div>
    </CardWrapper>
  )
}
