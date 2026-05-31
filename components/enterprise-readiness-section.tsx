'use client'

import { Reveal } from '@/components/reveal'
import { useLocale } from '@/components/locale-provider'

const copy = {
  ja: {
    label: 'Enterprise Readiness',
    heading: '法務・情報システム部門にも配慮した、導入を見据えた運用設計',
    items: [
      '要件定義の初期段階から、法務・税務の観点を含めたリスク評価を丁寧に実施いたします。',
      'セキュリティ要件、運用体制、権限設計を可視化し、社内稟議資料の作成までご支援いたします。',
      '導入後の運用フローや監査対応も見据え、再現性の高い実装をご提供いたします。',
    ],
  },
  en: {
    label: 'Enterprise Readiness',
    heading: 'Implementation design aligned with legal and IT governance',
    items: [
      'We evaluate risks from the planning stage, including legal and tax perspectives.',
      'We make security requirements, operational roles, and access control visible for internal approval.',
      'We deliver reproducible implementations designed for post-launch operations and audit readiness.',
    ],
  },
  zh: {
    label: 'Enterprise Readiness',
    heading: '兼顾法务与信息系统治理的落地方案设计',
    items: [
      '我们在需求定义阶段即纳入法务与税务视角开展风险评估。',
      '将安全要求、运维体制与权限设计可视化，支持企业内部审批。',
      '面向上线后的运营与审计场景，提供可复用、可持续的实施方案。',
    ],
  },
} as const

export function EnterpriseReadinessSection() {
  const { locale } = useLocale()
  const t = copy[locale]

  return (
    <section
      id="enterprise-readiness"
      className="border-t border-border/60 bg-[linear-gradient(180deg,#0f1b33_0%,#10203a_100%)] py-28 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-12 bg-primary" aria-hidden="true" />
            <span className="text-xs font-light uppercase tracking-[0.3em] text-primary">{t.label}</span>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="max-w-4xl font-serif text-3xl font-light leading-snug text-foreground text-balance lg:text-5xl">
            {t.heading}
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <div className="mt-8 space-y-4">
            {t.items.map((item) => (
              <p
                key={item}
                className="border-l border-primary/40 pl-4 text-sm font-light leading-relaxed text-muted-foreground text-pretty"
              >
                {item}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
