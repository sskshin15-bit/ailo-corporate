'use client'

import { Reveal } from '@/components/reveal'
import { ContactForm } from '@/components/contact-form'
import { useLocale } from '@/components/locale-provider'

const copy = {
  ja: {
    label: 'お問い合わせ',
    heading: 'まずは、機密性を担保したご相談から。',
    body:
      'グローバル展開企業から国内大手企業まで、Ailoは顧客体験を事業資産へ転換するための最適な設計・実装をご提案いたします。',
    headquarters: '本社',
    address: '兵庫県神戸市中央区磯辺通1-1-18 カサベラ国際プラザビル707号室',
    inquiries: 'お問い合わせ窓口',
    summary: 'エンタープライズ向けAI、リーガルテック、SaaSを統合した実装支援を提供しています。',
    rights: 'All rights reserved.',
    tagline: 'Built on trust.',
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
  },
} as const

export function ContactFooter() {
  const { locale } = useLocale()
  const t = copy[locale]

  return (
    <footer id="contact" className="border-t border-border/60">
      <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
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
