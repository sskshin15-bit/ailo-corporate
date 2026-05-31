'use client'

import { Reveal } from '@/components/reveal'
import { useLocale } from '@/components/locale-provider'

const copy = {
  ja: {
    heading1: '圧倒的な知性が「余白」を生み、\n人を想う心が「繋がり」を創る。',
    heading2: '次世代テクノロジーと強固なコンプライアンス基盤が、ビジネスに新たな血流を創り出す。',
    paragraph:
      'Ailoは、AIアーキテクチャと行動経済学を融合させたクリエイティブ・テック・カンパニーです。法務・税務の知見を組み込んだ「コンプライアンス・ファースト」の設計で、御社の強力な外部CTOとして安全かつ確実な業務変革を牽引いたします。',
    primaryCta: '相談する',
    secondaryCta: '資料請求',
    viewSolutions: '主要ソリューションを見る',
  },
  en: {
    heading1: 'Transform Customer Experience into Enduring Business Assets.',
    heading2: 'Maximize time for human care through AI and rigorous compliance.',
    paragraph:
      'Ailo combines AI architecture with behavioral economics to deliver creative technology. With legal and tax insight embedded into our compliance-first design, we serve as a trusted external CTO partner to drive safe and reliable operational transformation.',
    primaryCta: 'Consultation',
    secondaryCta: 'Request Materials',
    viewSolutions: 'Explore Solutions',
  },
  zh: {
    heading1: '将客户体验沉淀为可持续的经营资产。',
    heading2: '以AI与高标准合规体系，最大化“以人为本”的服务时间。',
    paragraph:
      'Ailo融合AI架构与行为经济学方法论，打造兼具创造力与商业落地能力的技术服务。通过嵌入法务与税务知识的“合规优先”设计，我们以外部CTO伙伴的角色，推动安全、稳定且可持续的业务变革。',
    primaryCta: '咨询洽谈',
    secondaryCta: '索取资料',
    viewSolutions: '查看核心方案',
  },
} as const

export function HeroSection() {
  const { locale } = useLocale()
  const t = copy[locale]

  return (
    <section id="top" className="relative overflow-hidden bg-[#0a1428] py-32 lg:py-40">
      <div
        className="pointer-events-none absolute -left-28 top-[-12%] h-[440px] w-[440px] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.18) 0%, rgba(56,189,248,0) 72%)' }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-20 bottom-[-18%] h-[420px] w-[420px] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.14) 0%, rgba(245,158,11,0) 74%)' }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_35%_0%,rgba(59,130,246,0.11),transparent_45%),radial-gradient(circle_at_88%_95%,rgba(234,179,8,0.1),transparent_38%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-4xl text-left">
          <Reveal>
            <h1 className="whitespace-pre-line font-serif text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-6xl">
              {locale === 'ja' ? (
                <>
                  圧倒的な知性が「<span className="text-amber-300">余白</span>」を生み、
                  {'\n'}
                  人を想う心が「<span className="text-amber-200">繋がり</span>」を創る。
                </>
              ) : (
                t.heading1
              )}
            </h1>
          </Reveal>

          <Reveal delay={120}>
            <h2 className="mt-8 max-w-3xl text-lg font-normal leading-relaxed text-slate-300 lg:text-xl">
              {t.heading2}
            </h2>
          </Reveal>

          <Reveal delay={220}>
            <p className="mt-10 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
              {locale === 'ja' ? (
                <>
                  Ailoは、「<span className="text-amber-300">AIアーキテクチャ</span>」と行動経済学を融合させたクリエイティブ・テック・カンパニーです。法務・税務の知見を組み込んだ「
                  <span className="text-amber-200">コンプライアンス・ファースト</span>
                  」の設計で、御社の強力な外部CTOとして安全かつ確実な業務変革を牽引いたします。
                </>
              ) : (
                t.paragraph
              )}
            </p>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-14 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="?inquiry=consultation#contact"
                className="inline-flex items-center justify-center bg-primary px-9 py-4 text-sm font-medium tracking-wide text-primary-foreground shadow-[0_0_40px_rgba(245,158,11,0.15)] transition-all hover:opacity-95 hover:shadow-[0_0_56px_rgba(245,158,11,0.26)]"
              >
                {t.primaryCta}
              </a>
              <a
                href="?inquiry=materials#contact"
                className="inline-flex items-center justify-center border border-slate-500 bg-slate-900/25 px-9 py-4 text-sm font-light tracking-wide text-slate-100 transition-colors hover:border-slate-300 hover:text-white"
              >
                {t.secondaryCta}
              </a>
            </div>
            <a
              href="#solutions"
              className="mt-4 inline-flex items-center gap-2 text-sm font-light tracking-wide text-slate-400 transition-colors hover:text-slate-200"
            >
              {t.viewSolutions}
              <span className="h-px w-6 bg-current" aria-hidden="true" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
