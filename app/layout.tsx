import type { Metadata } from 'next'
import { Inter, Noto_Sans_JP } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-noto-jp',
  display: 'swap',
})

export const metadata: Metadata = {
  title: '合同会社Ailo | エンタープライズ向けAI・リーガルテック・SaaS',
  description:
    '合同会社Ailoは、エンタープライズ企業向けにAI・リーガルテック・SaaSを統合した実装支援を提供します。顧客体験を、確かな事業資産へ。',
  generator: 'v0.app',
}

export const viewport = {
  themeColor: '#0A192F',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" className={`${inter.variable} ${notoSansJP.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
