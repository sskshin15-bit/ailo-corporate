import type { Metadata } from 'next'
import { LocaleProvider } from '@/components/locale-provider'
import { SiteHeader } from '@/components/site-header'
import { TermsPage } from '@/components/terms-page'

export const metadata: Metadata = {
  title: '利用規約 | 合同会社Ailo',
  description: '合同会社Ailoの利用規約です。',
}

export default function Page() {
  return (
    <LocaleProvider>
      <SiteHeader />
      <TermsPage />
    </LocaleProvider>
  )
}
