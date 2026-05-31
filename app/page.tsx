import { SiteHeader } from '@/components/site-header'
import { HeroSection } from '@/components/hero-section'
import { StrengthsSection } from '@/components/strengths-section'
import { SolutionsSection } from '@/components/solutions-section'
import { VisionSection } from '@/components/vision-section'
import { EnterpriseReadinessSection } from '@/components/enterprise-readiness-section'
import { BoardSection } from '@/components/board-section'
import { ContactFooter } from '@/components/contact-footer'
import { LocaleProvider } from '@/components/locale-provider'

export default function Page() {
  return (
    <LocaleProvider>
      <SiteHeader />
      <main>
        <HeroSection />
        <StrengthsSection />
        <SolutionsSection />
        <EnterpriseReadinessSection />
        <BoardSection />
        <VisionSection />
        <ContactFooter />
      </main>
    </LocaleProvider>
  )
}
