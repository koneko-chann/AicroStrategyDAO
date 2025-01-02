import Image from 'next/image'
import CardWrapper from './card-wrapper'
import React from 'react'
import { Check, Copy } from 'lucide-react'
import CoinDataItem from './coin-data-item'

export default function CoinData() {
  return (
    <CardWrapper wrapperClass="h-min basis-1/3">
      <div>
        <h3 className="flex items-center justify-between text-lg font-bold tracking-tight">
          <span>AicroStrategy</span>

          <Image src="/aistr.jpeg" alt="AI Trading" width={75} height={75} className="rounded-md" />
        </h3>
      </div>

      <div className="mt-6 space-y-4">
        <CoinDataItem label="Created" value="12/31/2024" />

        <CoinDataItem label="DAO owner" value="0xeE...114f" copyText="0xeEa4b70c003D3ccE9069B2EC34F4d1d7205F114f" />

        <CoinDataItem
          label="Treasury address"
          value="0xdd...ed6d"
          copyText="0xddc23d34ea2f6920d15995607d00def9478ded6d"
        />

        <CoinDataItem label="DAO token" value="0x20...82CD" copyText="0x20ef84969f6d81Ff74AE4591c331858b20AD82CD" />

        <CoinDataItem label="Trading ends" value="6/22/2025, 6:26:18 AM" />

        <CoinDataItem label="ETH raised" value="40 ETH" />
      </div>
    </CardWrapper>
  )
}
