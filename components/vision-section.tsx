'use client'

import { Reveal } from '@/components/reveal'
import { useLocale } from '@/components/locale-provider'

const copy = {
  ja: {
    label: 'Our Vision',
    heading: '迫り来るAIという「隘路」を制し、その先に「愛」と「繋がり」の循環を創る。',
    intro:
      '合同会社Ailo（アイロ）の社名には、私たちが果たすべき「使命」と、大切にする「哲学」という、2つの深い意味が込められています。',
    missionTitle: '使命としての「隘路（アイロ）」',
    missionBody:
      'これからのビジネスにおいて、AIは単なる便利なツールではなく、企業の生存を左右する最大の「隘路（戦術的な要衝）」となります。この強力なテクノロジーをどう制御し、どう自社に取り込むか。私たちは、御社の強力な外部CTOとしてこの時代最大のボトルネックに切り込み、AIという難所を共に突破する確かな道筋を切り拓きます。',
    philosophyTitle: '哲学としての「AI・愛・O」',
    philosophyBody:
      'テクノロジーの要衝を制した先に描くのは、3つの理想の融合です。自律的で高度に洗練された「AI（人工知能）」。AIの力で余白を生み、人を思いやる「愛」。その温もりが、永続的な価値として連なる「O（輪・繋がり）」。',
    closing:
      '私たちは、時代の「隘路」をテクノロジーで打ち破り、人が「人を想う時間（ホスピタリティ）」を最大化するための次世代インフラを創造します。',
  },
  en: {
    label: 'Our Vision',
    heading: 'Conquer the coming AI bottleneck and create a cycle of care and connection beyond it.',
    intro:
      'The name Ailo carries two layers of meaning: the mission we must fulfill and the philosophy we choose to uphold.',
    missionTitle: 'Mission: AI as a Strategic Bottleneck',
    missionBody:
      'In the years ahead, AI will be more than a convenient tool. It will become a strategic bottleneck that shapes corporate survival. The real question is how to govern it and embed it into your business with confidence. As your external CTO partner, we tackle this defining challenge and open a practical path through AI complexity.',
    philosophyTitle: 'Philosophy: AI, Love, and O',
    philosophyBody:
      'Beyond technical execution, we pursue the integration of three ideals: refined AI capability, human care enabled by regained time, and a lasting circle of value and connection.',
    closing:
      'By breaking through this era\'s bottlenecks with technology, we build next-generation infrastructure that maximizes time for people to care for people.',
  },
  zh: {
    label: 'Our Vision',
    heading: '穿越AI时代的关键“隘路”，在其后构建“关爱”与“连接”的价值循环。',
    intro:
      'Ailo 这一名称承载两层核心含义：我们必须完成的使命，以及始终坚持的哲学。',
    missionTitle: '使命：作为“隘路”的AI',
    missionBody:
      '在未来商业竞争中，AI不只是提升效率的工具，更是影响企业生存的关键要冲。如何驾驭这项强大技术，并将其稳健融入自身业务。我们将以外部CTO伙伴身份，帮助企业穿越这一时代级瓶颈。',
    philosophyTitle: '哲学：AI・爱・O',
    philosophyBody:
      '在技术要冲被攻克之后，我们追求三种理想的融合：高度进化的AI能力、由技术释放出来的人文关怀，以及可持续流动的价值与连接。',
    closing:
      '我们以技术突破时代“隘路”，构建下一代基础设施，让“人关怀人”的时间被最大化释放。',
  },
} as const

export function VisionSection() {
  const { locale } = useLocale()
  const t = copy[locale]

  return (
    <section id="vision" className="bg-[#0A192F] py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <div className="mb-8 flex items-center justify-center gap-4">
              <span className="h-px w-12 bg-primary/80" aria-hidden="true" />
              <span className="text-xs font-light tracking-[0.35em] text-primary">{t.label}</span>
              <span className="h-px w-12 bg-primary/80" aria-hidden="true" />
            </div>
          </Reveal>

          <Reveal delay={90}>
            <h2 className="font-serif text-3xl font-light leading-tight text-white text-balance lg:text-5xl">
              {t.heading}
            </h2>
          </Reveal>

          <Reveal delay={180}>
            <p className="mt-10 text-base font-light leading-relaxed text-slate-400 text-pretty">
              {t.intro}
            </p>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-8 space-y-7">
              <p className="text-base font-light leading-relaxed text-slate-300 text-pretty">
                <span className="font-medium text-primary">{t.missionTitle}</span>
                <br />
                {t.missionBody}
              </p>
              <p className="text-base font-light leading-relaxed text-slate-400 text-pretty">
                <span className="font-medium text-primary">{t.philosophyTitle}</span>
                <br />
                {t.philosophyBody}
              </p>
              <p className="text-base font-light leading-relaxed text-slate-300 text-pretty">{t.closing}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
