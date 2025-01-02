import Image from 'next/image'

import FooterLink from './footer-link'

export default function Footer() {
  return (
    <footer className="border-t bg-white py-12">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-8">
            <Image src="/aicrostrategy.png" alt="AicroStrategy Logo" width={140} height={28} />
            <div className="text-sm text-muted-foreground">© {new Date().getFullYear()} AicroStrategy</div>
          </div>

          <div className="flex items-center gap-6">
            <FooterLink href="https://t.me/aicrostrategy_dao" target="_blank">
              Telegram
            </FooterLink>

            <FooterLink href="https://x.com/AicroStrategy" target="_blank">
              Twitter
            </FooterLink>

            <FooterLink href="https://github.com/aicrostrategy" target="_blank">
              GitHub
            </FooterLink>
          </div>
        </div>
      </div>
    </footer>
  )
}
