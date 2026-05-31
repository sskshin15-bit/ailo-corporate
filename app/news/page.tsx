import type { Metadata } from 'next'
import { LocaleProvider } from '@/components/locale-provider'
import { SiteHeader } from '@/components/site-header'
import { NewsPage } from '@/components/news-page'

export const metadata: Metadata = {
  title: 'ニュース | 合同会社Ailo',
  description: '合同会社Ailoのニュース・お知らせ一覧です。',
}

export default function Page() {
  return (
    <LocaleProvider>
      <SiteHeader />
      <NewsPage />
    </LocaleProvider>
  )
}
