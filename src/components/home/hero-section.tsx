import { ArrowRight, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { AnimatedSection } from '../animated-section'
import { GradientText } from '../gradient-text'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'

export default function HeroSection() {
  return (
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
            <Badge variant="outline" className="flex w-fit items-center gap-2 rounded-full border-gray-100 px-4 py-1">
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
  )
}
