import Link from 'next/link'

import { AnimatedSection } from '../animated-section'
import { GradientText } from '../gradient-text'
import { Button } from '../ui/button'

export default function CTASection() {
  return (
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
  )
}
