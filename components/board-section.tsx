'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Reveal } from '@/components/reveal'
import { useLocale, type Locale } from '@/components/locale-provider'
import { withBasePath } from '@/lib/site-path'

type BoardMember = {
  name: string
  role: string
  image: string
  nameImage?: string
  portraitClass?: string
  bio: string
}

type BoardCopy = {
  label: string
  heading: string
  portraitAria: string
  members: BoardMember[]
}

const copy: Record<Locale, BoardCopy> = {
  ja: {
    label: '経営陣',
    heading: '経営メンバー',
    portraitAria: 'の写真',
    members: [
      {
        name: '',
        role: '代表 / CEO',
        image: '/board-ceo.png',
        portraitClass: 'object-top scale-[1.03] lg:scale-[1.06] lg:translate-y-[0.2rem]',
        nameImage: '/board-member-s1-name.png',
        bio: 'デジタルマーケティング、UI/UX戦略、事業開発統括。リッチメディアを用いたエンゲージメント創出の専門家であり、ユーザーの心理を読み解き「自然な行動」を促すカスタマーエクスペリエンス（CX）設計を牽引。複雑なシステム要件を、誰もが使いやすい直感的なサービスへと落とし込むプロダクトマネジメントを主導する。',
      },
      {
        name: '',
        role: '共同創業者 / CTO',
        image: '/board-cto-20260601.png',
        portraitClass: 'object-top scale-[1.3] origin-top -translate-y-[6.25rem] lg:scale-[1.34] lg:-translate-y-[4.35rem]',
        nameImage: '/board-member-k2-name.png',
        bio: 'システムアーキテクチャ、AI開発、データアナリティクス統括。国内最大手総合広告代理店におけるデータサイエンス業務の知見を活用。American Mathematical Olympiad金メダル獲得、海外大学飛び級進学等の圧倒的な論理的思考力と、日・英・中のトリリンガルとしての語学力を有する。高度な数理モデルとアルゴリズムの設計により、グローバル水準のセキュアなインフラ構築を統括する。',
      },
    ],
  },
  en: {
    label: 'Board Members',
    heading: 'Board Members',
    portraitAria: 'portrait',
    members: [
      {
        name: '',
        role: 'Representative / CEO',
        image: '/board-ceo.png',
        portraitClass: 'object-top scale-[1.03] lg:scale-[1.06] lg:translate-y-[0.2rem]',
        nameImage: '/board-member-s1-name.png',
        bio: 'Leads digital marketing, UI/UX strategy, and business development. As a specialist in rich-media engagement design, he drives customer experience architecture that encourages natural user behavior and translates complex requirements into intuitive products.',
      },
      {
        name: '',
        role: 'Co-Founder / CTO',
        image: '/board-cto-20260601.png',
        portraitClass: 'object-top scale-[1.3] origin-top -translate-y-[6.25rem] lg:scale-[1.34] lg:-translate-y-[4.35rem]',
        nameImage: '/board-member-k2-name.png',
        bio: 'Oversees system architecture, AI development, and data analytics. Drawing on data science experience from one of Japan\'s leading advertising groups, he leads globally aligned secure infrastructure design through advanced mathematical models and algorithms.',
      },
    ],
  },
  zh: {
    label: '经营团队',
    heading: '经营成员',
    portraitAria: '的照片',
    members: [
      {
        name: '',
        role: '首席执行官 (CEO)',
        image: '/board-ceo.png',
        portraitClass: 'object-top scale-[1.03] lg:scale-[1.06] lg:translate-y-[0.2rem]',
        nameImage: '/board-member-s1-name.png',
        bio: '全面统筹数字营销、UI/UX战略及业务拓展。作为利用富媒体创造高用户参与度的专家，他擅长通过洞察用户心理来主导客户体验（CX）设计，致力于将复杂的商业愿景转化为直观、易用的产品服务。',
      },
      {
        name: '',
        role: '联合创始人 / CTO',
        image: '/board-cto-20260601.png',
        portraitClass: 'object-top scale-[1.3] origin-top -translate-y-[6.25rem] lg:scale-[1.34] lg:-translate-y-[4.35rem]',
        nameImage: '/board-member-k2-name.png',
        bio: '全面统筹系统架构、AI开发及数据分析。凭借在日本最大综合广告代理公司积累的数据科学经验，以及卓越的逻辑思考能力和精通中英日三语的优势，负责设计高级数理模型及安全的全球化基础设施。',
      },
    ],
  },
}

export function BoardSection() {
  const { locale } = useLocale()
  const t = copy[locale]
  const [activeMemberIndex, setActiveMemberIndex] = useState<number | null>(null)

  return (
    <section
      id="leadership"
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

        <div className="grid gap-8 md:grid-cols-2">
          {t.members.map((member, i) => (
            <Reveal key={`${member.role}-${i}`} delay={i * 140}>
              <article className="group flex h-full flex-col border border-border/60 bg-card transition-colors duration-500 hover:border-primary/50 sm:flex-row">
                <button
                  type="button"
                  className="relative block h-64 w-full shrink-0 overflow-hidden text-left sm:h-auto sm:w-48"
                  onClick={() => setActiveMemberIndex((current) => (current === i ? null : i))}
                  aria-pressed={activeMemberIndex === i}
                  aria-label={`${member.role}${t.portraitAria}`}
                >
                  <Image
                    src={withBasePath(member.image || '/placeholder.svg')}
                    alt={member.role}
                    fill
                    className={`object-cover transition-all duration-700 group-hover:grayscale-0 ${activeMemberIndex === i ? 'grayscale-0' : 'grayscale'} ${member.portraitClass ?? ''}`}
                  />
                </button>
                <div className="flex flex-1 flex-col justify-center p-6 sm:p-8">
                  <h3 className="text-xl font-medium tracking-tight text-foreground">
                    {member.nameImage ? (
                      <span className="block">
                        <Image
                          src={withBasePath(member.nameImage)}
                          alt={member.role}
                          width={840}
                          height={170}
                          className="h-11 w-auto max-w-full object-contain"
                        />
                      </span>
                    ) : (
                      member.name || member.role
                    )}
                  </h3>
                  <p className="mt-1 text-xs font-light uppercase tracking-[0.2em] text-primary">
                    {member.role}
                  </p>
                  <p className="mt-5 text-sm font-light leading-relaxed text-slate-400 text-pretty">
                    {member.bio}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
