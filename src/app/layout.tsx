import type { Metadata } from 'next'
import { Noto_Serif_KR, Cormorant_Garamond } from 'next/font/google'
import './globals.css'

const notoSerifKR = Noto_Serif_KR({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-noto-serif',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

export const metadata: Metadata = {
  title: '웨이필그림 · WayPilgrim',
  description: '당신의 영적 여정을 함께하는 크리스천 영성 플랫폼',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className={`${notoSerifKR.variable} ${cormorant.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}