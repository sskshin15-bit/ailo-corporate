import type { Metadata } from 'next'
import { LocaleProvider } from '@/components/locale-provider'
import { SiteHeader } from '@/components/site-header'
import { LegalNoticePage } from '@/components/legal-notice-page'

export const metadata: Metadata = {
  title: '特定商取引法に基づく表記 | 合同会社Ailo',
  description: '合同会社Ailoの特定商取引法に基づく表記です。',
}

export default function Page() {
  return (
    <LocaleProvider>
      <SiteHeader />
      <LegalNoticePage />
    </LocaleProvider>
  )
}
