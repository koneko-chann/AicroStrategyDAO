import CommunitySection from '@/components/home/community-section'
import CTASection from '@/components/home/cta-section'
import FeaturesSection from '@/components/home/features-section'
import HeroSection from '@/components/home/hero-section'
import StrategySection from '@/components/home/strategy-section'

export default function Home() {
  return (
    <main className="flex-1 pt-24">
      <HeroSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Strategy Section */}
      <StrategySection />

      {/* Community Section */}
      <CommunitySection />

      {/* CTA Section */}
      <CTASection />
    </main>
  )
}
