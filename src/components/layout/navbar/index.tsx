import Image from 'next/image'

import NavLink from './nav-link'

export default function Navbar() {
  return (
    <header className="fixed left-1/2 top-4 z-50 w-[95%] max-w-7xl -translate-x-1/2">
      <div className="rounded-full border bg-white/70 px-6 py-3 backdrop-blur-md">
        <div className="flex items-center justify-between">
          <NavLink href="/" linkType="image">
            <Image src="/aicrostrategy.png" alt="AicroStrategy Logo" width={160} height={32} />
          </NavLink>

          <nav className="flex items-center gap-8">
            <NavLink href="https://dexscreener.com/base/0x197ecb5c176ad4f6e77894913a94c5145416f148" target="_blank">
              DexScreener
            </NavLink>

            <NavLink
              href="https://app.uniswap.org/#/swap?inputCurrency=0x197ecb5c176ad4f6e77894913a94c5145416f148"
              target="_blank"
            >
              Telegram
            </NavLink>

            <NavLink href="https://x.com/AicroStrategy" target="_blank">
              Twitter
            </NavLink>

            <NavLink href="/stats">Stats</NavLink>
          </nav>
        </div>
      </div>
    </header>
  )
}
