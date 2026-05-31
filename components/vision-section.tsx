'use client'

import { Reveal } from '@/components/reveal'
import { useLocale } from '@/components/locale-provider'

const copy = {
  ja: {
    label: 'Our Vision',
    heading: '圧倒的なAIの力で、ビジネスに「愛」と「繋がり」を。',
    paragraph1:
      '社名である「Ailo（アイロ）」には、3つの意味が込められています。最先端のテクノロジーを駆使する「AI（人工知能）」。人々の生活や仕事を楽にし、思いやりを持つ「愛」。そして、それらが循環し、永続的な価値を生み出す「O（輪・繋がり）」。',
    paragraph2:
      '私たちは、圧倒的なテクノロジーの力で非生産的な業務を極限まで自動化し、人が「人を想う時間（ホスピタリティ）」を最大化するためのインフラを創造します。',
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
    <section id="vision" className="bg-[#0A192F] py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
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
                  圧倒的な
                  <span className="text-amber-400">AI</span>
                  の力で、ビジネスに「
                  <span className="text-amber-300">愛</span>
                  」と「
                  <span className="text-amber-200">繋がり</span>
                  」を。
                </>
              ) : (
                t.heading
              )}
            </h2>
          </Reveal>

          <Reveal delay={180}>
            <p className="mt-10 text-base font-light leading-relaxed text-slate-300 text-pretty">
              {locale === 'ja' ? (
                <>
                  社名である「Ailo（アイロ）」には、3つの意味が込められています。最先端のテクノロジーを駆使する「
                  <span className="text-amber-400">AI（人工知能）</span>
                  」。人々の生活や仕事を楽にし、思いやりを持つ「
                  <span className="text-amber-300">愛</span>
                  」。そして、それらが循環し、永続的な価値を生み出す「
                  <span className="text-amber-200">O（輪・繋がり）</span>
                  」。
                </>
              ) : (
                t.paragraph1
              )}
            </p>
          </Reveal>

          <Reveal delay={260}>
            <p className="mt-7 text-base font-light leading-relaxed text-slate-400 text-pretty">
              {t.paragraph2}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
