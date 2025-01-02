import { AnimatedSection } from '../animated-section'
import { GradientText } from '../gradient-text'
import { Card } from '../ui/card'

export default function FeaturesSection() {
  return (
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
  )
}
