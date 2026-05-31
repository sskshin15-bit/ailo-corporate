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
    heading: 'Empowering business with AI, care, and connection.',
    paragraph1:
      'The name "Ailo" carries three ideas: "AI" for advanced intelligence, "Ai (Love)" for empathy that supports people, and "O" for a circle of lasting connection and value.',
    paragraph2:
      'We build infrastructure that automates non-productive work so people can maximize the time they spend caring for other people.',
  },
  zh: {
    label: 'Our Vision',
    heading: '以强大的AI之力，为商业注入「关爱」与「连接」。',
    paragraph1:
      'Ailo 这一名称承载三重含义：「AI（人工智能）」、「爱」以及代表循环与连接的「O（环）」。',
    paragraph2:
      '我们致力于用技术将非生产性工作最大限度自动化，让人把更多时间用于真正关怀他人的价值创造。',
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
              {locale === 'ja' ? (
                <>
                  迫り来る
                  <span className="text-amber-400">AI</span>
                  という「
                  <span className="text-amber-300">隘路</span>
                  」を制し、
                  <br className="hidden md:block" />
                  その先に「
                  <span className="text-amber-300">愛</span>
                  」と「
                  <span className="text-amber-200">繋がり</span>
                  」の循環を創る。
                </>
              ) : (
                t.heading
              )}
            </h2>
          </Reveal>

          <Reveal delay={180}>
            <p className="mt-10 text-base font-light leading-relaxed text-slate-300 text-pretty">
              {locale === 'ja' ? (
                t.intro
              ) : (
                t.paragraph1
              )}
            </p>
          </Reveal>

          <Reveal delay={260}>
            {locale === 'ja' ? (
              <div className="mt-8 space-y-7">
                <p className="text-base font-light leading-relaxed text-slate-300 text-pretty">
                  <span className="font-medium text-amber-400">{t.missionTitle}</span>
                  <br />
                  {t.missionBody}
                </p>
                <p className="text-base font-light leading-relaxed text-slate-300 text-pretty">
                  <span className="font-medium text-amber-400">{t.philosophyTitle}</span>
                  <br />
                  {t.philosophyBody}
                </p>
                <p className="text-base font-light leading-relaxed text-slate-200 text-pretty">
                  {t.closing}
                </p>
              </div>
            ) : (
              <p className="mt-7 text-base font-light leading-relaxed text-slate-400 text-pretty">
                {t.paragraph2}
              </p>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
