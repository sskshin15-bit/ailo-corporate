'use client'

import { Reveal } from '@/components/reveal'
import { useLocale } from '@/components/locale-provider'
import { withBasePath } from '@/lib/site-path'

const copy = {
  ja: {
    heading1: 'ビジネスの「隘路」を切り拓き、\n人を想う「繋がり」を創り出す。',
    heading2:
      'AIという最大の難所を共に越え、テクノロジーと人間性が高度に調和する次世代インフラへ。',
    paragraph:
      'Ailoは、最先端のAIアーキテクチャと行動経済学を融合させたクリエイティブ・テック・カンパニーです。法務・税務の専門知見を組み込んだ「コンプライアンス・ファースト」の設計により、企業が直面するDXの壁を打破。御社の強力な外部CTOとして安全かつ確実にAIを実装し、人が「本来の価値創造」に集中できる環境を構築いたします。',
    primaryCta: '相談する',
    secondaryCta: '資料請求',
    viewSolutions: '主要ソリューションを見る',
  },
  en: {
    heading1: 'Transform Customer Experience into Enduring Business Assets.',
    heading2: 'Build next-generation infrastructure where advanced AI and human-centered operations work in harmony.',
    paragraph:
      'Ailo combines AI architecture with behavioral economics to deliver practical transformation. By embedding legal and tax perspectives into implementation design, we act as a trusted external CTO partner for secure and reliable execution.',
    primaryCta: 'Consultation',
    secondaryCta: 'Request Materials',
    viewSolutions: 'Explore Solutions',
  },
  zh: {
    heading1: '将客户体验沉淀为可持续的经营资产。',
    heading2: '以先进AI与人本运营深度融合，构建下一代企业基础设施。',
    paragraph:
      'Ailo融合AI架构与行为经济学方法论，提供兼具创造力与落地性的技术实施。通过在实施设计中纳入法务与税务视角，我们以外部CTO伙伴身份，推动安全、稳定、可持续的业务升级。',
    primaryCta: '咨询洽谈',
    secondaryCta: '索取资料',
    viewSolutions: '查看核心方案',
  },
} as const

export function HeroSection() {
  const { locale } = useLocale()
  const t = copy[locale]
  const heroPhotoUrl = withBasePath('/hero-luxury-corridor.png')

  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden py-32 lg:py-40">
      <div
        className="absolute inset-0 scale-95 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url("${heroPhotoUrl}")` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[#0A192F]/85" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <div className="relative z-10 max-w-4xl text-left">
          <Reveal>
            <h1 className="whitespace-pre-line font-serif text-5xl font-extrabold tracking-tight text-white drop-shadow-[0_3px_18px_rgba(2,8,23,0.65)] sm:text-6xl lg:text-6xl">
              {locale === 'ja' ? (
                <>
                  ビジネスの「
                  <span className="relative inline-block px-1 text-amber-300">
                    <span className="absolute -top-5 left-1/2 -translate-x-1/2 whitespace-nowrap text-[0.28em] font-sans tracking-[0.2em] text-amber-200">
                      AILO
                    </span>
                    隘路
                  </span>
                  」を切り拓き、
                  <br />
                  人を想う「<span className="text-amber-200">繋がり</span>」を創り出す。
                </>
              ) : (
                t.heading1
              )}
            </h1>
          </Reveal>

          <Reveal delay={120}>
            <h2 className="mt-10 max-w-3xl text-lg font-normal leading-relaxed text-slate-300 lg:text-xl">
              {t.heading2}
            </h2>
          </Reveal>

          <Reveal delay={220}>
            <p className="mt-10 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
              {t.paragraph}
            </p>
          </Reveal>

          <Reveal delay={320}>
            <div className="relative z-10 mt-16 flex flex-col gap-5 sm:flex-row sm:items-center">
              <a
                href={withBasePath('/?inquiry=consultation#contact')}
                className="inline-flex items-center justify-center bg-gradient-to-r from-amber-300 via-amber-200 to-yellow-200 px-9 py-4 text-sm font-semibold tracking-wide text-slate-900 shadow-[0_10px_38px_rgba(251,191,36,0.24)] transition-all hover:translate-y-[-1px] hover:shadow-[0_14px_50px_rgba(251,191,36,0.34)]"
              >
                {t.primaryCta}
              </a>
              <a
                href={withBasePath('/?inquiry=materials#contact')}
                className="inline-flex items-center justify-center border border-slate-300/35 bg-slate-900/35 px-9 py-4 text-sm font-medium tracking-wide text-slate-100 backdrop-blur-sm transition-colors hover:border-amber-200/60 hover:text-amber-50"
              >
                {t.secondaryCta}
              </a>
            </div>
            <a
              href={withBasePath('/#solutions')}
              className="relative z-10 mt-7 inline-flex items-center gap-2 text-sm font-normal tracking-wide text-slate-300/80 transition-colors hover:text-amber-100"
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
