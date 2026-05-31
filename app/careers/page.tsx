import type { Metadata } from 'next'
import { LocaleProvider } from '@/components/locale-provider'
import { SiteHeader } from '@/components/site-header'
import { CareersPage } from '@/components/careers-page'

export const metadata: Metadata = {
  title: '採用情報 | 合同会社Ailo',
  description: '合同会社Ailoの採用情報ページです。',
}

export default function Page() {
  return (
    <LocaleProvider>
      <SiteHeader />
      <CareersPage />
    </LocaleProvider>
  )
}
