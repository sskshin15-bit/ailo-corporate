'use client'

import { Reveal } from '@/components/reveal'
import { ContactForm } from '@/components/contact-form'
import { useLocale } from '@/components/locale-provider'

const copy = {
  ja: {
    label: 'お問い合わせ',
    heading: 'ご相談はこちらから',
    body:
      'グローバル展開企業から国内大手企業まで、Ailoは顧客体験を事業資産へ転換するための最適な設計・実装をご提案いたします。',
    headquarters: '本社',
    address: '兵庫県神戸市中央区磯辺通1-1-18 カサベラ国際プラザビル707号室',
    inquiries: 'お問い合わせ窓口',
    summary: 'エンタープライズ向けAI、リーガルテック、SaaSを統合した実装支援を提供しています。',
    rights: 'All rights reserved.',
    tagline: '信頼を礎に。',
    footerNav: [
      {
        heading: '会社情報',
        links: ['Ailoについて', '経営陣', '採用情報', 'ニュース'],
      },
      {
        heading: 'ソリューション',
        links: ['SendThanks', 'LINEモバイルオーダー＆AI-CRM', 'TrustLoop', 'AI-DXコンサルティング'],
      },
      {
        heading: '法務・規約',
        links: ['プライバシーポリシー', '利用規約', 'セキュリティ', 'コンプライアンス'],
      },
    ],
    companyAria: '会社情報',
    homeAria: '合同会社Ailo トップページ',
    assuranceLabel: 'Enterprise Readiness',
    assuranceHeading: '法務・情シス部門に配慮した、導入前提の運用設計',
    assuranceItems: [
      '要件定義段階から、法務・税務観点を含めたリスク評価を実施します。',
      'セキュリティ要件、運用体制、権限設計を可視化し、稟議資料作成まで支援します。',
      '導入後の運用フロー・監査対応を見据えた、再現性の高い実装を行います。',
    ],
  },
  en: {
    label: 'Contact',
    heading: 'Begin a confidential conversation.',
    body:
      'From global hospitality groups to large enterprises, we help transform customer experience into durable business assets through tailored architecture and implementation.',
    headquarters: 'Headquarters',
    address: 'Room 707, Casabella International Plaza Building, 1-1-18 Isobedori, Chuo-ku, Kobe, Hyogo, Japan',
    inquiries: 'General Inquiries',
    summary: 'Enterprise-grade AI, Legal-Tech, and SaaS implementation support.',
    rights: 'All rights reserved.',
    tagline: 'Tokyo · Built on trust.',
    footerNav: [
      {
        heading: 'Company',
        links: ['About Ailo', 'Leadership', 'Careers', 'Newsroom'],
      },
      {
        heading: 'Solutions',
        links: ['SendThanks', 'LINE Order & AI-CRM', 'TrustLoop', 'DX Consulting'],
      },
      {
        heading: 'Legal',
        links: ['Privacy Policy', 'Terms of Service', 'Security', 'Compliance'],
      },
    ],
    companyAria: 'Company links',
    homeAria: 'Ailo LLC home',
    assuranceLabel: 'Enterprise Readiness',
    assuranceHeading: 'Implementation design aligned with legal and IT governance',
    assuranceItems: [
      'We evaluate risks from the planning stage, including legal and tax perspectives.',
      'We make security requirements, operational roles, and access control visible for internal approval.',
      'We deliver reproducible implementations designed for post-launch operations and audit readiness.',
    ],
  },
  zh: {
    label: '联系我们',
    heading: '欢迎开启一场严格保密的商务对话。',
    body:
      '无论是跨国集团还是大型企业，Ailo都可通过定制化架构与实施，助力客户体验沉淀为长期经营资产。',
    headquarters: '总部',
    address: '日本兵库县神户市中央区矶边通1-1-18 卡萨贝拉国际广场大厦707室',
    inquiries: '咨询邮箱',
    summary: '提供面向企业的AI、法律科技与SaaS一体化实施支持。',
    rights: '版权所有。',
    tagline: 'Tokyo · Built on trust.',
    footerNav: [
      {
        heading: '了解Ailo',
        links: ['关于Ailo'],
      },
      {
        heading: '核心解决方案',
        links: ['SendThanks', 'LINE点单与AI-CRM', 'TrustLoop', 'DX咨询'],
      },
      {
        heading: '法律与合规',
        links: ['隐私政策', '服务条款', '安全', '合规'],
      },
    ],
    companyAria: '公司导航',
    homeAria: 'Ailo 首页',
    assuranceLabel: 'Enterprise Readiness',
    assuranceHeading: '兼顾法务与信息系统治理的落地方案设计',
    assuranceItems: [
      '我们在需求定义阶段即纳入法务与税务视角开展风险评估。',
      '将安全要求、运维体制与权限设计可视化，支持企业内部审批。',
      '面向上线后的运营与审计场景，提供可复用、可持续的实施方案。',
    ],
  },
} as const

export function ContactFooter() {
  const { locale } = useLocale()
  const t = copy[locale]

  return (
    <footer
      id="contact"
      className="border-t border-border/60 bg-[linear-gradient(180deg,#101f3a_0%,#14274a_100%)]"
    >
      <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
        <Reveal>
          <div className="mb-12 border border-border/60 bg-card p-8 lg:mb-14 lg:p-10">
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-12 bg-primary" aria-hidden="true" />
              <span className="text-xs font-light uppercase tracking-[0.3em] text-primary">{t.assuranceLabel}</span>
            </div>
            <h3 className="font-serif text-2xl font-light leading-snug text-foreground lg:text-3xl">
              {t.assuranceHeading}
            </h3>
            <div className="mt-6 space-y-4">
              {t.assuranceItems.map((item) => (
                <p
                  key={item}
                  className="border-l border-primary/40 pl-4 text-sm font-light leading-relaxed text-muted-foreground text-pretty"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal>
              <div className="mb-8 flex items-center gap-4">
                <span className="h-px w-12 bg-primary" aria-hidden="true" />
                <span className="text-xs font-light uppercase tracking-[0.4em] text-primary">
                  {t.label}
                </span>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="font-serif text-3xl font-light leading-tight text-foreground text-balance lg:text-5xl">
                {t.heading}
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-md text-sm font-light leading-relaxed text-muted-foreground text-pretty">
                {t.body}
              </p>
            </Reveal>

            <Reveal delay={240}>
              <dl className="mt-12 space-y-6">
                <div>
                  <dt className="text-xs font-light uppercase tracking-[0.2em] text-muted-foreground">
                    {t.headquarters}
                  </dt>
                  <dd className="mt-2 text-sm font-light text-foreground">{t.address}</dd>
                </div>
                <div>
                  <dt className="text-xs font-light uppercase tracking-[0.2em] text-muted-foreground">
                    {t.inquiries}
                  </dt>
                  <dd className="mt-2 text-sm font-light text-foreground">contact@ailo.co.jp</dd>
                </div>
              </dl>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <ContactForm />
          </Reveal>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <div className="grid gap-12 md:grid-cols-4">
            <div>
              <a href="#top" className="flex items-baseline gap-2" aria-label={t.homeAria}>
                <span className="text-2xl font-medium tracking-[0.35em] text-foreground">AILO</span>
                <span className="h-1.5 w-1.5 translate-y-[-2px] rounded-full bg-primary" aria-hidden="true" />
              </a>
              <p className="mt-5 max-w-xs text-xs font-light leading-relaxed text-muted-foreground">
                {t.summary}
              </p>
            </div>

            {t.footerNav.map((col) => (
              <nav key={col.heading} aria-label={t.companyAria}>
                <h3 className="text-xs font-light uppercase tracking-[0.2em] text-foreground">
                  {col.heading}
                </h3>
                <ul className="mt-5 space-y-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm font-light text-muted-foreground transition-colors hover:text-primary"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-xs font-light text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <p>
            &copy; {new Date().getFullYear()} Ailo LLC. {t.rights}
          </p>
          <p className="tracking-wide">{t.tagline}</p>
        </div>
      </div>
    </footer>
  )
}
