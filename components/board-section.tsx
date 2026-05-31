'use client'

import Image from 'next/image'
import { Linkedin } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { useLocale } from '@/components/locale-provider'

const copy = {
  ja: {
    label: '経営陣',
    heading: '経営メンバー',
    profileAria: 'プロフィール',
    members: [
      {
        name: '佐々木 慎太朗',
        role: '代表 CEO',
        image: '/board-ceo.png',
        bio: 'デジタルマーケティング、UI/UX戦略、事業開発統括。リッチメディアを用いたエンゲージメント創出の専門家であり、ユーザーの心理を読み解き「自然な行動」を促すカスタマーエクスペリエンス（CX）設計を牽引。複雑なシステム要件を、誰もが使いやすい直感的なサービスへと落とし込むプロダクトマネジメントを主導する。',
      },
      {
        name: '小暮 陽',
        role: '共同創業者 / CTO',
        image: '/board-cto.png',
        bio: 'システムアーキテクチャ、AI開発、データアナリティクス統括。国内最大手総合広告代理店におけるデータサイエンス業務の知見を活用。算数オリンピック金メダル獲得、海外大学飛び級進学等の圧倒的な論理的思考力と、日・英・中のトリリンガルとしての語学力を有する。高度な数理モデルとアルゴリズムの設計により、グローバル水準のセキュアなインフラ構築を統括する。',
      },
    ],
  },
  en: {
    label: 'Board Members',
    heading: 'Leadership',
    profileAria: 'profile',
    members: [
      {
        name: 'Shintaro Sasaki',
        role: 'Chief Executive Officer',
        image: '/board-ceo.png',
        bio: 'Leads digital marketing, UI/UX strategy, and business development. A specialist in engagement design through rich media, he drives customer experience architecture that encourages natural user behavior and translates complex requirements into intuitive products.',
      },
      {
        name: 'Yo Kogure',
        role: 'Co-Founder / CTO',
        image: '/board-cto.png',
        bio: 'Oversees system architecture, AI development, and data analytics. He leverages experience from data science operations at a leading major advertising agency and leads globally aligned, secure infrastructure design with advanced mathematical models and algorithms.',
      },
    ],
  },
  zh: {
    label: '管理团队',
    heading: 'Board Members',
    profileAria: '个人资料',
    members: [
      {
        name: '佐佐木 慎太朗',
        role: '首席执行官 (CEO)',
        image: '/board-ceo.png',
        bio: '全面统筹数字营销、UI/UX战略及业务拓展。作为利用富媒体创造高用户参与度的专家，他擅长通过洞察用户心理来主导客户体验（CX）设计，致力于将复杂的商业愿景转化为直观、易用的产品服务。',
      },
      {
        name: '小暮 阳',
        role: '联合创始人 / CTO',
        image: '/board-cto.png',
        bio: '全面统筹系统架构、AI开发及数据分析。凭借在日本最大综合广告代理公司积累的数据科学经验，以及卓越的逻辑思考能力和精通中英日三语的优势，负责设计高级数理模型及安全的全球化基础设施。',
      },
    ],
  },
} as const

export function BoardSection() {
  const { locale } = useLocale()
  const t = copy[locale]

  return (
    <section id="leadership" className="border-t border-border/60 py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="mb-16 flex items-center gap-4">
            <span className="h-px w-12 bg-primary" aria-hidden="true" />
            <span className="text-xs font-light uppercase tracking-[0.4em] text-primary">
              {t.label}
            </span>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="mb-20 max-w-3xl font-serif text-3xl font-light leading-tight text-foreground text-balance lg:text-5xl">
            {t.heading}
          </h2>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2">
          {t.members.map((member, i) => (
            <Reveal key={member.name} delay={i * 140}>
              <article className="group flex h-full flex-col border border-border/60 bg-card transition-colors duration-500 hover:border-primary/50 sm:flex-row">
                <div className="relative h-64 w-full shrink-0 sm:h-auto sm:w-48">
                  <Image
                    src={member.image || '/placeholder.svg'}
                    alt={`Portrait of ${member.name}`}
                    fill
                    className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-center p-8">
                  <h3 className="text-xl font-medium tracking-tight text-foreground">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-xs font-light uppercase tracking-[0.2em] text-primary">
                    {member.role}
                  </p>
                  <p
                    className="mt-5 text-sm font-light leading-relaxed text-muted-foreground text-pretty"
                    dangerouslySetInnerHTML={{ __html: member.bio }}
                  />
                  <a
                    href="#"
                    aria-label={`${member.name} ${t.profileAria}`}
                    className="mt-6 inline-flex h-9 w-9 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    <Linkedin className="h-4 w-4" strokeWidth={1.5} />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
