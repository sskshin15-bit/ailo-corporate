'use client'

import { MapPin, AlertCircle, Video, Bot, Star, CheckCircle2 } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { useLocale } from '@/components/locale-provider'
import { withBasePath } from '@/lib/site-path'

const copy = {
  ja: {
    label: 'MEO / インバウンド集客',
    heading: '言葉の壁を越え、世界の富裕層を魅了する。',
    subheading: '次世代インバウンド特化型 Googleマップ集客',
    intro:
      '「文字と写真」だけの旧来型MEOから、AIと動画を駆使した「視覚とホスピタリティ」のMEOへ。既存の運用資産はそのままに、あなたの店舗の価値を世界基準に引き上げます。',
    heroCta: '無料の店舗デジタル監査を申し込む',
    problemLabel: '現状の課題',
    problemHeading: '現在、こんな「機会損失」を見逃していませんか？',
    problems: [
      '現場が頑張って集めた口コミの返信が放置されている',
      '外国人客が読めない日本語のレビューばかりが溜まっている',
      '最もアピールできる「最新情報」に動画がなく、静止画のみ',
      'マップ経由でどれだけ予約・売上に繋がったか効果測定できていない',
    ],
    featuresLabel: '3つのソリューション',
    featuresHeading: 'インバウンド集客を別次元へ引き上げる3つのソリューション',
    features: [
      {
        icon: 'video',
        tag: 'ソリューション 01',
        title: 'プロ品質 × AI多言語「ショート動画」配信',
        body: '外国人観光客はGoogleマップを「動画検索ツール」として利用しています。シズル感あふれる店舗の魅力をプロ品質のショート動画で制作し、AIで英語・中国語等にネイティブ翻訳して定期配信。視覚と聴覚から来店意欲を掻き立てます。',
      },
      {
        icon: 'bot',
        tag: 'ソリューション 02',
        title: '24時間稼働「AI多言語コンシェルジュ」',
        body: '寄せられた口コミの言語をAIが瞬時に判定し、24時間以内に自然な母国語で自動返信します。検索キーワードを自然に含めるSEO対策と、厳しいご意見へのアラート機能を備え、ハイブランドの品格を守り抜きます。',
      },
      {
        icon: 'star',
        tag: 'ソリューション 03',
        title: '感動を口コミに変える「チップ連携システム」',
        body: '高額なチップをお支払いいただいた「感動の絶頂」にあるお客様へ、スマートに口コミ投稿を促す独自導線をご用意。他店では真似できない、熱狂的で質の高い多言語レビューを自動的に蓄積します。',
      },
    ],
    stepsLabel: '導入ステップ',
    stepsHeading: '現場の負担はゼロ。既存の資産を活かしたスムーズな導入',
    steps: [
      { number: '01', title: '無料デジタル監査', body: 'アカウントのリスクチェック' },
      { number: '02', title: '既存データの無償引き継ぎ', body: 'インフラ再構築' },
      { number: '03', title: 'AIシステム連携・トラッキング', body: '効果測定設定' },
      { number: '04', title: '多言語ショート動画', body: '定期配信スタート' },
    ],
    ctaMessage:
      '現在のMEO業者様の基礎設定はそのままに、インバウンドの取りこぼしを当社がすべてカバーします。まずはお使いのアカウントの「無料デジタル監査」をご体験ください。',
    ctaButton: '今すぐ無料デジタル監査を依頼する',
  },
  en: {
    label: 'MEO / Inbound Marketing',
    heading: 'Beyond Language Barriers. Attracting the World\'s Affluent Travelers.',
    subheading: 'Next-Generation Inbound-Focused Google Maps Marketing',
    intro:
      'Move beyond the old era of "text and photos" MEO to a new dimension of "visual hospitality" powered by AI and video. Maximize the value of your existing assets and elevate your venue to a global standard.',
    heroCta: 'Request a Free Digital Store Audit',
    problemLabel: 'Current Challenges',
    problemHeading: 'Are you missing these revenue opportunities right now?',
    problems: [
      'Hard-earned reviews are left unresponded — eroding guest trust',
      'Foreign visitors can\'t read your Japanese reviews — lost credibility',
      'Your Google Posts lack video — competitors with video outrank you',
      'No way to measure how Google Maps is actually driving reservations',
    ],
    featuresLabel: 'Three Solutions',
    featuresHeading: 'Three Solutions to Elevate Your Inbound Marketing',
    features: [
      {
        icon: 'video',
        tag: 'Solution 01',
        title: 'Pro-Quality × AI Multilingual Short Video Distribution',
        body: 'International travelers use Google Maps as a video search engine. We produce sizzle-reel quality short videos of your venue and distribute them with AI-powered native translations in English, Chinese, and more — stimulating the desire to visit through sight and sound.',
      },
      {
        icon: 'bot',
        tag: 'Solution 02',
        title: '24/7 AI Multilingual Concierge',
        body: 'Our AI instantly identifies the language of each incoming review and responds in natural, fluent native-speaker prose within 24 hours. Responses are SEO-optimized with relevant keywords, and critical reviews trigger management alerts — preserving your high-brand standards around the clock.',
      },
      {
        icon: 'star',
        tag: 'Solution 03',
        title: 'Tip-Linked Review Generation System',
        body: 'We introduce a proprietary flow that subtly prompts guests to leave a review at the emotional peak of the tipping moment. The result is an organic accumulation of passionate, high-quality multilingual reviews that no competitor can replicate.',
      },
    ],
    stepsLabel: 'Onboarding Process',
    stepsHeading: 'Zero Burden on Your Team. Smooth Onboarding Built on Your Existing Assets.',
    steps: [
      { number: '01', title: 'Free Digital Audit', body: 'Account risk & opportunity assessment' },
      { number: '02', title: 'Data Migration', body: 'Seamless transfer & infrastructure rebuild' },
      { number: '03', title: 'AI System Integration', body: 'Analytics & conversion tracking setup' },
      { number: '04', title: 'Video Distribution Launch', body: 'Multilingual short video goes live' },
    ],
    ctaMessage:
      'Your current MEO setup stays intact. We layer our inbound expertise on top, capturing every opportunity your existing provider is missing. Experience our free Digital Audit first.',
    ctaButton: 'Request a Free Digital Audit Now',
  },
  zh: {
    label: 'MEO / 入境营销',
    heading: '突破语言壁垒，吸引全球富裕旅行者。',
    subheading: '新一代专注入境客源的 Google Maps 营销服务',
    intro:
      '从"文字加图片"的传统MEO，迈向以AI与视频驱动的"视觉款待"新时代。无需改变现有运营资产，即可将您的门店品质提升至国际标准。',
    heroCta: '申请免费门店数字诊断',
    problemLabel: '当前痛点',
    problemHeading: '您是否正在错失这些收益机会？',
    problems: [
      '好不容易积累的口碑评论，却无人回复，白白流失信任',
      '外国客人无法阅读日文评论，品牌可信度大打折扣',
      '最新动态栏目缺乏视频内容，仅靠静态图片难以脱颖而出',
      '无法追踪Google地图实际带来了多少预订和营收',
    ],
    featuresLabel: '三大解决方案',
    featuresHeading: '将入境客源获取提升至新维度的三大解决方案',
    features: [
      {
        icon: 'video',
        tag: '解决方案 01',
        title: '专业级 × AI多语言「短视频」定期发布',
        body: '海外游客正在将Google地图当作"视频搜索工具"使用。我们为您制作极具感染力的专业短视频，并通过AI翻译成英文、中文等多语言版本定期投放，用视觉与听觉全面激发到店意愿。',
      },
      {
        icon: 'bot',
        tag: '解决方案 02',
        title: '全天候「AI多语言礼宾」自动回复',
        body: 'AI即时识别评论语言，在24小时内以自然流畅的母语自动回复。回复内容自然植入搜索关键词进行SEO优化，同时对差评触发管理层预警，全方位守护高端品牌形象。',
      },
      {
        icon: 'star',
        tag: '解决方案 03',
        title: '将感动转化为口碑的「小费联动系统」',
        body: '在客人完成高额小费支付、感动情绪最为饱满的时刻，我们以专属导流设计自然引导评论提交。由此积累的，是竞争对手无法复制的高质量、高热情多语言评论。',
      },
    ],
    stepsLabel: '导入流程',
    stepsHeading: '前线零负担。充分沿用现有资产，平稳落地。',
    steps: [
      { number: '01', title: '免费数字诊断', body: '账户风险与机会评估' },
      { number: '02', title: '数据免费迁移', body: '基础架构重建' },
      { number: '03', title: 'AI系统对接与追踪', body: '效果测量配置' },
      { number: '04', title: '多语言短视频', body: '定期发布正式启动' },
    ],
    ctaMessage:
      '现有MEO运营商的基础设置保持不变，由我们全面补位入境客源的流失缺口。请先体验我们为您提供的免费「数字诊断」服务。',
    ctaButton: '立即申请免费数字诊断',
  },
} as const

const iconMap = {
  video: Video,
  bot: Bot,
  star: Star,
}

export function MeoSection() {
  const { locale } = useLocale()
  const t = copy[locale]

  return (
    <section
      id="meo"
      className="relative scroll-mt-28 border-t border-border/60 bg-[linear-gradient(180deg,#0d1a30_0%,#0f2040_50%,#101f3a_100%)] py-20 md:py-28 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">

        {/* ── Hero ── */}
        <div className="mb-20 md:mb-28">
          <Reveal>
            <div className="mb-6 flex items-center gap-3">
              <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
              <span className="h-px w-8 bg-primary" aria-hidden="true" />
              <span className="text-[11px] font-light tracking-[0.2em] text-primary sm:text-xs">
                {t.label}
              </span>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="max-w-3xl font-serif text-3xl font-light leading-tight text-foreground text-balance lg:text-5xl">
              {t.heading}
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-3 text-base font-light tracking-wide text-primary sm:text-lg">
              {t.subheading}
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 max-w-2xl text-sm font-light leading-relaxed text-slate-400 text-pretty">
              {t.intro}
            </p>
          </Reveal>
          <Reveal delay={260}>
            <a
              href={withBasePath('/?inquiry=consultation#contact')}
              className="mt-8 inline-flex items-center justify-center border border-primary/70 bg-primary/10 px-8 py-3.5 text-sm font-light tracking-wide text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
            >
              {t.heroCta}
            </a>
          </Reveal>
        </div>

        {/* ── Problem ── */}
        <div className="mb-20 md:mb-28">
          <Reveal>
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-12 bg-primary" aria-hidden="true" />
              <span className="text-[11px] font-light tracking-[0.2em] text-primary sm:text-xs">
                {t.problemLabel}
              </span>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h3 className="mb-10 max-w-2xl font-serif text-2xl font-light leading-tight text-foreground text-balance lg:text-3xl">
              {t.problemHeading}
            </h3>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {t.problems.map((problem, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="flex items-start gap-4 border border-border/50 bg-card/60 p-5 transition-colors duration-300 hover:border-primary/30 sm:p-6">
                  <AlertCircle
                    className="mt-0.5 h-4 w-4 shrink-0 text-amber-400/70"
                    aria-hidden="true"
                  />
                  <p className="text-sm font-light leading-relaxed text-slate-300">{problem}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ── Features ── */}
        <div className="mb-20 md:mb-28">
          <Reveal>
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-12 bg-primary" aria-hidden="true" />
              <span className="text-[11px] font-light tracking-[0.2em] text-primary sm:text-xs">
                {t.featuresLabel}
              </span>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h3 className="mb-10 max-w-2xl font-serif text-2xl font-light leading-tight text-foreground text-balance lg:text-3xl">
              {t.featuresHeading}
            </h3>
          </Reveal>
          <div className="grid gap-6 lg:grid-cols-3">
            {t.features.map((feature, i) => {
              const Icon = iconMap[feature.icon as keyof typeof iconMap]
              return (
                <Reveal key={i} delay={i * 100}>
                  <article className="group flex h-full flex-col border border-border/60 bg-card transition-colors duration-500 hover:border-primary/50">
                    <div className="flex items-center justify-between border-b border-border/60 px-5 py-5 sm:px-6 sm:py-5">
                      <span className="text-xs font-light tracking-[0.15em] text-primary">
                        {feature.tag}
                      </span>
                      <Icon
                        className="h-4 w-4 text-primary/60 transition-colors duration-500 group-hover:text-primary"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-5 sm:p-6">
                      <h4 className="text-base font-medium tracking-tight text-foreground sm:text-lg">
                        {feature.title}
                      </h4>
                      <p className="mt-4 text-sm font-light leading-relaxed text-slate-400 text-pretty">
                        {feature.body}
                      </p>
                    </div>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>

        {/* ── Steps ── */}
        <div className="mb-20 md:mb-28">
          <Reveal>
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-12 bg-primary" aria-hidden="true" />
              <span className="text-[11px] font-light tracking-[0.2em] text-primary sm:text-xs">
                {t.stepsLabel}
              </span>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h3 className="mb-10 max-w-2xl font-serif text-2xl font-light leading-tight text-foreground text-balance lg:text-3xl">
              {t.stepsHeading}
            </h3>
          </Reveal>
          <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-4">
            {t.steps.map((step, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="relative flex flex-col border border-border/60 bg-card/40 p-6 sm:p-7">
                  {i < t.steps.length - 1 && (
                    <span
                      className="absolute right-0 top-1/2 hidden h-px w-px translate-x-[1px] -translate-y-1/2 bg-primary/30 lg:block lg:w-4"
                      aria-hidden="true"
                    />
                  )}
                  <div className="mb-4 flex items-center gap-3">
                    <CheckCircle2 className="h-4 w-4 text-primary/70" aria-hidden="true" />
                    <span className="font-serif text-3xl font-light text-primary/40">
                      {step.number}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-foreground">{step.title}</p>
                  <p className="mt-1 text-xs font-light text-slate-400">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <Reveal delay={80}>
          <div className="border border-primary/20 bg-primary/5 p-8 sm:p-10 md:p-12">
            <p className="mb-8 max-w-2xl text-sm font-light leading-relaxed text-slate-300 text-pretty">
              {t.ctaMessage}
            </p>
            <a
              href={withBasePath('/?inquiry=consultation#contact')}
              className="inline-flex items-center justify-center border border-primary bg-primary/10 px-8 py-4 text-sm font-light tracking-wide text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
            >
              {t.ctaButton}
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  )
}
