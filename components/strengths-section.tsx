'use client'

import { Brain, ShieldCheck, MousePointerClick } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { useLocale } from '@/components/locale-provider'

const copy = {
  ja: {
    label: '私たちの強み',
    heading: '私たちが選ばれる3つの理由',
    pillars: [
      {
        icon: MousePointerClick,
        number: '01',
        title: '行動設計UX',
        subtitle: '行動経済学に基づくシームレスな顧客体験',
        description:
          'B2Cのデジタルマーケティング市場で培った、ユーザーの心理的負荷を軽減し、自然な行動を促すノウハウをシステムに実装しています。アプリのダウンロードや煩雑な会員登録といった心理的ハードル（摩擦）を最小限に抑え、誰もが直感的に操作できる洗練されたUI/UXを設計することで、顧客満足度の向上と高いサービス利用率の実現に寄与します。',
      },
      {
        icon: Brain,
        number: '02',
        title: '先端AI・データサイエンス',
        subtitle: '高度な数理モデルによる業務の自律化',
        description:
          '第一線で活躍するデータサイエンティストがアーキテクチャ設計を統括。最新の生成AIを活用したアジャイル開発体制により、市場の変化に即座に適応するプロダクトを構築します。単なる業務効率化に留まらず、取得したデータをAIが解析し、CRMやHRアナリティクスへと昇華。日々のオペレーションを、持続可能なデータ資産へと変換します。',
      },
      {
        icon: ShieldCheck,
        number: '03',
        title: 'リーガルテック・セキュリティ',
        subtitle: '専門家ネットワーク連携による強固な運用基盤',
        description:
          '大企業様が求める厳格なセキュリティ要件を満たすため、公的支援ネットワーク等を通じた弁護士への適法性確認や、顧問税理士による税務スキームの監修など、外部専門家と強固に連携。複雑な法的課題をシステム設計の段階から考慮し、導入企業様がコンプライアンスリスクを極小化して運用できる安全な基盤を構築しています。',
      },
    ],
  },
  en: {
    label: 'Our Strengths',
    heading: 'Three Reasons Organizations Choose Ailo',
    pillars: [
      {
        icon: MousePointerClick,
        number: '01',
        title: 'Behavioral UX Design',
        subtitle: 'Seamless experiences powered by behavioral economics',
        description:
          'We implement know-how developed in competitive B2C digital marketing to reduce user friction and encourage natural action. By minimizing psychological hurdles such as app downloads and complicated registrations, we design intuitive UI/UX that improves satisfaction and increases service adoption.',
      },
      {
        icon: Brain,
        number: '02',
        title: 'Advanced AI & Data Science',
        subtitle: 'Autonomous operations driven by advanced models',
        description:
          'Leading data scientists oversee our architecture design. With agile development powered by generative AI, we build products that adapt quickly to market changes. Beyond efficiency gains, AI analyzes operational data and elevates it into strategic assets for CRM and HR analytics.',
      },
      {
        icon: ShieldCheck,
        number: '03',
        title: 'Legal-Tech & Security',
        subtitle: 'Resilient operations through expert collaboration',
        description:
          'To meet enterprise-level security requirements, we collaborate closely with external legal and tax experts. We address complex legal considerations from the system design stage, helping clients operate on a secure foundation with minimized compliance risk.',
      },
    ],
  },
  zh: {
    label: '我们的核心优势',
    heading: '客户选择Ailo的三大理由',
    pillars: [
      {
        icon: MousePointerClick,
        number: '01',
        title: 'Behavioral UX Design',
        subtitle: '基于行为经济学的无缝客户体验',
        description:
          '我们将B2C数字营销中积累的方法沉淀为系统能力，降低用户心理负担并促进自然行动。通过最大限度减少下载App、复杂注册等心理“摩擦”，打造直观易用的UI/UX，助力提升满意度与服务使用率。',
      },
      {
        icon: Brain,
        number: '02',
        title: 'Advanced AI & Data Science',
        subtitle: '以高级数理模型实现业务自治',
        description:
          '由资深数据科学家主导架构设计，结合生成式AI的敏捷开发体系，快速构建适应市场变化的产品。不止于效率提升，我们让AI深度解析业务数据，并将其沉淀为服务于CRM与HR分析的可持续数据资产。',
      },
      {
        icon: ShieldCheck,
        number: '03',
        title: 'Legal-Tech & Security',
        subtitle: '专家网络协同打造稳健运营底座',
        description:
          '为满足大型企业的严苛安全要求，我们与外部法律与税务专家紧密协作。在系统设计阶段即纳入复杂法律议题，帮助导入企业在稳健基础上将合规风险降至最低。',
      },
    ],
  },
} as const

export function StrengthsSection() {
  const { locale } = useLocale()
  const t = copy[locale]

  return (
    <section
      id="strengths"
      className="border-t border-border/60 bg-[linear-gradient(180deg,#0f1b33_0%,#10203a_100%)] py-20 md:py-28 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <Reveal>
          <div className="mb-12 flex items-center gap-3 sm:mb-16 sm:gap-4">
            <span className="h-px w-12 bg-primary" aria-hidden="true" />
            <span className="text-[11px] font-light uppercase tracking-[0.24em] text-primary sm:text-xs sm:tracking-[0.4em]">
              {t.label}
            </span>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="mb-12 max-w-3xl font-serif text-3xl font-light leading-tight text-foreground text-balance sm:mb-20 lg:text-5xl">
            {t.heading}
          </h2>
        </Reveal>

        <div className="grid gap-px overflow-hidden border border-border/60 bg-border/60 md:grid-cols-3">
          {t.pillars.map((pillar, i) => (
            <Reveal key={pillar.number} delay={i * 120} className="bg-background">
              <article className="group flex h-full flex-col p-6 transition-colors duration-500 hover:bg-card sm:p-8 lg:p-12">
                <div className="mb-8 flex items-center justify-between sm:mb-10">
                  <span
                    className="flex h-14 w-14 items-center justify-center border border-primary/40 text-primary transition-colors duration-500 group-hover:bg-primary group-hover:text-primary-foreground"
                    aria-hidden="true"
                  >
                    <pillar.icon className="h-6 w-6" strokeWidth={1.4} />
                  </span>
                  <span className="font-serif text-4xl font-light text-muted-foreground/40">
                    {pillar.number}
                  </span>
                </div>
                <h3 className="mb-4 text-xl font-medium tracking-tight text-foreground">
                  {pillar.title}
                </h3>
                <p className="mb-4 text-sm font-light leading-relaxed text-primary text-pretty">
                  {pillar.subtitle}
                </p>
                <p className="text-sm font-light leading-relaxed text-slate-400 text-pretty">
                  {pillar.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
