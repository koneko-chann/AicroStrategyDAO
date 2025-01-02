import { AnimatedSection } from '../animated-section'
import { GradientText } from '../gradient-text'
import { Card } from '../ui/card'

export default function StrategySection() {
  return (
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
  )
}
