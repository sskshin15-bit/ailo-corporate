'use client'

import Image from 'next/image'
import { Reveal } from '@/components/reveal'
import { useLocale } from '@/components/locale-provider'

const copy = {
  ja: {
    badge: 'AI・リーガルテック・SaaS',
    headingLine1: '顧客体験を、確かな事業資産へ。',
    headingLine2: '次世代のテクノロジーと高度なコンプライアンス設計が、ビジネスの新たな血流を創り出す。',
    paragraph1:
      '合同会社Ailo（アイロ）は、最先端の人工知能（AI）アーキテクチャと、行動経済学に基づく卓越したUI/UXデザインを融合させたクリエイティブ・テック・カンパニーです。',
    paragraph2:
      '私たちは単なるシステムの提供に留まらず、法務・税務の専門家知見を取り入れた「コンプライアンス・ファースト」な設計思想により、エンタープライズ企業様や専門士業様へ、安全かつシームレスなデジタルトランスフォーメーション（DX）の実現を強力に支援いたします。',
    primaryCta: 'ご相談・お問い合わせ',
    secondaryCta: '主要ソリューションを見る',
    scroll: 'スクロール',
  },
  en: {
    badge: 'AI · Legal-Tech · SaaS',
    headingLine1: 'Transform Customer Experience into Enduring Business Assets.',
    headingLine2:
      'Next-generation technology and compliance-first architecture create new momentum for your business.',
    paragraph1:
      'Ailo LLC is a creative technology company that integrates cutting-edge AI architecture with exceptional UI/UX design grounded in behavioral economics.',
    paragraph2:
      'Beyond delivering systems, we champion a compliance-first design philosophy informed by legal and tax professionals, helping enterprises and professional firms realize safe and seamless digital transformation (DX).',
    primaryCta: 'Contact Us',
    secondaryCta: 'Explore Solutions',
    scroll: 'Scroll',
  },
  zh: {
    badge: 'AI · 法律科技 · SaaS',
    headingLine1: '将客户体验沉淀为可持续的经营资产。',
    headingLine2: '以前沿技术与高标准合规设计，为业务打造全新增长动能。',
    paragraph1:
      'Ailo合同会社是一家创意科技公司，将前沿人工智能（AI）架构与基于行为经济学的卓越UI/UX设计深度融合。',
    paragraph2:
      '我们不仅提供系统，更以“合规优先”的设计理念，结合法律与税务专家知识，助力大型企业与专业机构安全、顺畅地实现数字化转型（DX）。',
    primaryCta: '咨询与联系',
    secondaryCta: '查看核心方案',
    scroll: '滚动查看',
  },
} as const

export function HeroSection() {
  const { locale } = useLocale()
  const t = copy[locale]

  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
      <Image
        src="/hero-abstract.png"
        alt=""
        fill
        priority
        aria-hidden="true"
        className="object-cover"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-7xl px-6 pt-32 lg:px-10">
        <div className="max-w-3xl">
          <Reveal>
            <div className="mb-8 flex items-center gap-4">
              <span className="h-px w-12 bg-primary" aria-hidden="true" />
              <span className="text-xs font-light tracking-[0.2em] text-primary">{t.badge}</span>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="font-serif text-5xl font-light leading-[1.18] tracking-tight text-foreground text-balance sm:text-6xl lg:text-7xl">
              {t.headingLine1}
              <br />
              {t.headingLine2}
            </h1>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 max-w-3xl space-y-5 text-lg font-light leading-relaxed text-muted-foreground text-pretty">
              <p>{t.paragraph1}</p>
              <p>{t.paragraph2}</p>
            </div>
          </Reveal>

          <Reveal delay={360}>
            <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-primary px-8 py-4 text-sm font-medium tracking-wide text-primary-foreground transition-opacity hover:opacity-90"
              >
                {t.primaryCta}
              </a>
              <a
                href="#solutions"
                className="inline-flex items-center justify-center border border-border px-8 py-4 text-sm font-light tracking-wide text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                {t.secondaryCta}
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      <div
        className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex"
        aria-hidden="true"
      >
        <span className="text-[10px] font-light uppercase tracking-[0.3em] text-muted-foreground">
          {t.scroll}
        </span>
        <span className="h-12 w-px bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  )
}
