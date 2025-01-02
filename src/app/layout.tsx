import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import './globals.css'
import Footer from '@/components/layout/footer'
import Navbar from '@/components/layout/navbar'
import Pointer from '@/components/pointer'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'AicroStrategy DAO',
  description: 'AicroStrategy DAO'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex min-h-screen flex-col">
          {/* <LoadingScreen /> */}

          <Pointer />

          <Navbar />

          <div className="flex-1 pt-24">{children}</div>

          <Footer />
        </div>
      </body>
    </html>
  )
}
