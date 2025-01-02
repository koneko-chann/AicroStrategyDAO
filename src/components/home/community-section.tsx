import Image from 'next/image'
import Link from 'next/link'

import { GradientText } from '../gradient-text'
import { Card } from '../ui/card'

import { AnimatedSection } from './animated-section'

export default function CommunitySection() {
  return (
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
                <Image src="/aistr3.jpeg" alt="GitHub" width={400} height={300} className="rounded-lg object-cover" />
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
                <p className="text-sm text-muted-foreground">Track our current assets and investment performance.</p>
              </div>
            </Link>
          </Card>
        </div>
      </div>
    </AnimatedSection>
  )
}
