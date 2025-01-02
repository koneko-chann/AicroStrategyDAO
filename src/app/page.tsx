'use client'

import { ChevronRight, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

import { AnimatedSection } from '@/components/animated-section'
import { GradientText } from '@/components/gradient-text'
import { LoadingScreen } from '@/components/loading-screen'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', updateMousePosition)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
    }
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <LoadingScreen />
      <div
        className="pointer-events-none fixed z-[999] h-3 w-3 rounded-full transition-transform duration-200 ease-out"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#df1f21'
        }}
      />
      <div
        className="pointer-events-none fixed z-[998] h-8 w-8 rounded-full border transition-transform duration-300 ease-out"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
          borderColor: '#df1f21'
        }}
      />

      {/* Header - Floating style */}
      <header className="fixed left-1/2 top-4 z-50 w-[95%] max-w-7xl -translate-x-1/2">
        <div className="rounded-full border bg-white/70 px-6 py-3 backdrop-blur-md">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/aicrostrategy.png" alt="AicroStrategy Logo" width={160} height={32} />
            </Link>
            <nav className="flex items-center gap-8">
              <Link
                href="https://dexscreener.com/base/0x197ecb5c176ad4f6e77894913a94c5145416f148"
                className="text-sm font-medium transition-colors hover:text-primary"
                target="_blank"
              >
                DexScreener
              </Link>
              <Link
                href="https://t.me/aicrostrategy_dao"
                className="text-sm font-medium transition-colors hover:text-primary"
                target="_blank"
              >
                Telegram
              </Link>

              <Link
                href="https://x.com/AicroStrategy"
                className="text-sm font-medium transition-colors hover:text-primary"
                target="_blank"
              >
                Twitter
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1 pt-24">
        {/* Hero Section */}
        <AnimatedSection className="relative flex min-h-[90vh] items-center bg-white">
          <div className="container relative z-10 mx-auto max-w-7xl px-4">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              <div className="relative">
                <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary/30 to-secondary/30 opacity-20 blur-3xl" />
                <Image
                  src="/aistr.jpeg"
                  alt="AI Trading"
                  width={530}
                  height={530}
                  className="relative rounded-3xl"
                  priority
                />
              </div>
              <div className="space-y-6">
                <Badge
                  variant="outline"
                  className="flex w-fit items-center gap-2 rounded-full border-gray-100 px-4 py-1"
                >
                  <Image src="/daos.png" alt="DAOS" width={14} height={14} />
                  Built on daos.world
                </Badge>
                <h1 className="mt-8 text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl">
                  <GradientText>AI-Powered Investment Strategy</GradientText>
                </h1>
                <p className="mt-6 max-w-[90%] text-lg text-muted-foreground">
                  AicroStrategy ($AiSTR) revolutionizes investment through autonomous AI agents, delivering unparalleled
                  trading strategies on Base.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <Button size="lg" className="rounded-full" asChild>
                    <Link href="https://daos.world/fund/0xddc23d34ea2f6920d15995607d00def9478ded6d" target="_blank">
                      Buy $AiSTR
                      <ArrowRight className="ml-2" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-full" asChild>
                    <Link href="https://debank.com/profile/0xddc23d34ea2f6920d15995607d00def9478ded6d" target="_blank">
                      Portfolio
                      <ChevronRight className="ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Features Section */}
        <AnimatedSection className="bg-white py-24">
          <div className="container mx-auto max-w-7xl px-4">
            <h2 className="mb-12 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              <GradientText>Core Features</GradientText>
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="p-6">
                <h3 className="text-xl font-bold">AI-Powered Strategies</h3>
                <p className="mt-2 text-muted-foreground">
                  Advanced AI algorithms to analyze market conditions and determine the optimal strategy.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold">Strategic Accumulation</h3>
                <p className="mt-2 text-muted-foreground">Systematic approach to growing our treasury with cbBTC.</p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold">Risk Management</h3>
                <p className="mt-2 text-muted-foreground">
                  Multi-layered security protocols and dynamic position sizing to protect our holdings.
                </p>
              </Card>
            </div>
          </div>
        </AnimatedSection>

        {/* Strategy Section */}
        <AnimatedSection className="border-t py-24">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              <GradientText>Our Strategy</GradientText>
            </h2>
            <p className="mt-4 text-muted-foreground md:text-xl">
              Leveraging advanced AI technology to maximize cbBTC accumulation and optimize Bitcoin yields
            </p>

            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              <Card className="p-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold">Technical Infrastructure</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold">Leveraged Bitcoin Strategy</h4>
                      <p className="text-muted-foreground">
                        Utilizing cbBTC on Base for optimized Bitcoin exposure and strategic accumulation
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Accumulation Strategy</h4>
                      <p className="text-muted-foreground">
                        Systematic approach to growing our cbBTC holdings through market-aware positioning
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold">AI Infrastructure</h4>
                      <p className="text-muted-foreground">
                        Built on cutting-edge AI infrastructure to optimize trading strategies and market analysis in
                        real-time
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold">Key Benefits</h3>
                  <div className="grid gap-4">
                    <div className="flex items-start space-x-4">
                      <div className="rounded-full bg-primary/10 p-3">
                        <svg
                          className="h-6 w-6 text-primary"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold">Strategic Accumulation</h4>
                        <p className="text-muted-foreground">
                          Focused approach to maximize cbBTC holdings through market opportunities
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="rounded-full bg-primary/10 p-3">
                        <svg
                          className="h-6 w-6 text-primary"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold">High Treasury Yield</h4>
                        <p className="text-muted-foreground">
                          High RFV supports consistent and attractive yield for holders
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="rounded-full bg-primary/10 p-3">
                        <svg
                          className="h-6 w-6 text-primary"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold">Future-Proof Design</h4>
                        <p className="text-muted-foreground">
                          Streamlined codebase enables seamless AI integration and minimizes vulnerabilities
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </AnimatedSection>

        {/* Community Section */}
        <AnimatedSection className="bg-white py-24">
          <div className="container mx-auto max-w-7xl px-4">
            <h2 className="mb-12 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              <GradientText>Community Made</GradientText>
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <Card className="group relative overflow-hidden p-6">
                <Link href="https://t.me/aicrostrategy_dao" target="_blank" className="block">
                  <div className="flex flex-col space-y-4">
                    <Image
                      src="/aistr2.jpeg"
                      alt="Community Chat"
                      width={400}
                      height={300}
                      className="rounded-lg object-cover"
                    />
                    <h3 className="text-xl font-bold">Community Chat</h3>
                    <p className="text-sm text-muted-foreground">
                      Join our Telegram community to discuss strategies and updates.
                    </p>
                  </div>
                </Link>
              </Card>

              <Card className="group relative overflow-hidden p-6">
                <Link href="https://github.com/aicrostrategy" target="_blank" className="block">
                  <div className="flex flex-col space-y-4">
                    <Image
                      src="/aistr3.jpeg"
                      alt="GitHub"
                      width={400}
                      height={300}
                      className="rounded-lg object-cover"
                    />
                    <h3 className="text-xl font-bold">GitHub</h3>
                    <p className="text-sm text-muted-foreground">
                      Explore our open-source code and contribute to development.
                    </p>
                  </div>
                </Link>
              </Card>

              <Card className="group relative overflow-hidden p-6">
                <Link href="https://x.com/AicroStrategy" target="_blank" className="block">
                  <div className="flex flex-col space-y-4">
                    <Image
                      src="/aistr4.jpeg"
                      alt="X (Twitter)"
                      width={400}
                      height={300}
                      className="rounded-lg object-cover"
                    />
                    <h3 className="text-xl font-bold">X (Twitter)</h3>
                    <p className="text-sm text-muted-foreground">Follow us for the latest updates and announcements.</p>
                  </div>
                </Link>
              </Card>

              <Card className="group relative overflow-hidden p-6">
                <Link
                  href="https://debank.com/profile/0xddc23d34ea2f6920d15995607d00def9478ded6d"
                  target="_blank"
                  className="block"
                >
                  <div className="flex flex-col space-y-4">
                    <Image
                      src="/aistr5.jpeg"
                      alt="Portfolio Assets"
                      width={400}
                      height={300}
                      className="rounded-lg object-cover"
                    />
                    <h3 className="text-xl font-bold">Portfolio</h3>
                    <p className="text-sm text-muted-foreground">
                      Track our current assets and investment performance.
                    </p>
                  </div>
                </Link>
              </Card>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection className="bg-white py-24 pb-36">
          <div className="container relative mx-auto max-w-7xl px-4 text-center">
            <div className="mx-auto max-w-2xl">
              <h2 className="mb-4 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                <GradientText>Ready to Join?</GradientText>
              </h2>
              <p className="mb-8 text-muted-foreground md:text-xl">
                Join our mission to accumulate cbBTC through the power of AI.
              </p>
              <div className="flex justify-center gap-4">
                <Button size="lg" className="rounded-full" asChild>
                  <Link href="https://daos.world/fund/0xddc23d34ea2f6920d15995607d00def9478ded6d" target="_blank">
                    Buy $AiSTR
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full" asChild>
                  <Link href="https://debank.com/profile/0xddc23d34ea2f6920d15995607d00def9478ded6d" target="_blank">
                    View Strategy
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white py-12">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-8">
              <Image src="/aicrostrategy.png" alt="AicroStrategy Logo" width={140} height={28} />
              <div className="text-sm text-muted-foreground">© {new Date().getFullYear()} AicroStrategy</div>
            </div>
            <div className="flex items-center gap-6">
              <Link
                href="https://t.me/aicrostrategy_dao"
                className="text-muted-foreground hover:text-primary"
                target="_blank"
              >
                Telegram
              </Link>
              <Link
                href="https://x.com/AicroStrategy"
                className="text-muted-foreground hover:text-primary"
                target="_blank"
              >
                Twitter
              </Link>
              <Link
                href="https://github.com/aicrostrategy"
                className="text-muted-foreground hover:text-primary"
                target="_blank"
              >
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
