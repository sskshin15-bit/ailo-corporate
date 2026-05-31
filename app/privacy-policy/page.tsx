import type { Metadata } from 'next'
import { LocaleProvider } from '@/components/locale-provider'
import { SiteHeader } from '@/components/site-header'
import { PrivacyPolicyPage } from '@/components/privacy-policy-page'

export const metadata: Metadata = {
  title: 'プライバシーポリシー | 合同会社Ailo',
  description: '合同会社Ailoのプライバシーポリシーです。',
}

export default function Page() {
  return (
    <LocaleProvider>
      <SiteHeader />
      <PrivacyPolicyPage />
    </LocaleProvider>
  )
}
