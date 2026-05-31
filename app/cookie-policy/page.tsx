import type { Metadata } from 'next'
import { LocaleProvider } from '@/components/locale-provider'
import { SiteHeader } from '@/components/site-header'
import { CookiePolicyPage } from '@/components/cookie-policy-page'

export const metadata: Metadata = {
  title: 'Cookieポリシー | 合同会社Ailo',
  description: '合同会社AiloのCookieポリシーです。',
}

export default function Page() {
  return (
    <LocaleProvider>
      <SiteHeader />
      <CookiePolicyPage />
    </LocaleProvider>
  )
}
