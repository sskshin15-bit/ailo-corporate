'use client'

import { useLocale } from '@/components/locale-provider'
import { type NewsItem } from '@/lib/news-content'
import { withBasePath } from '@/lib/site-path'

const copy = {
  ja: {
    label: 'News',
    backNews: 'ニュース一覧へ戻る',
    backHome: 'トップページへ戻る',
  },
  en: {
    label: 'News',
    backNews: 'Back to News',
    backHome: 'Back to Home',
  },
  zh: {
    label: 'News',
    backNews: '返回新闻列表',
    backHome: '返回首页',
  },
} as const

export function NewsDetailPage({ item }: { item: NewsItem }) {
  const { locale } = useLocale()
  const t = copy[locale]
  const article = item.translations[locale]

  return (
    <main className="bg-[linear-gradient(180deg,#0b1c38_0%,#101f3a_55%,#14274a_100%)] pt-28 pb-20">
      <section className="mx-auto max-w-4xl px-6 lg:px-10">
        <p className="text-xs font-light tracking-[0.2em] text-primary">{t.label}</p>
        <div className="mt-5 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
          <span>{article.date}</span>
          <span className="h-1 w-1 rounded-full bg-primary/70" aria-hidden="true" />
          <span>{article.category}</span>
        </div>
        <h1 className="mt-4 font-serif text-4xl font-light text-foreground lg:text-5xl">{article.title}</h1>

        <article className="mt-10 rounded-sm border border-border/60 bg-card/70 p-6">
          <div className="space-y-4">
            {article.content.map((paragraph) => (
              <p key={paragraph} className="text-sm font-light leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </div>
        </article>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={withBasePath('/news')}
            className="inline-flex border border-border px-5 py-2.5 text-sm font-light text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            {t.backNews}
          </a>
          <a
            href={withBasePath('/#top')}
            className="inline-flex border border-primary/50 px-5 py-2.5 text-sm font-light text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            {t.backHome}
          </a>
        </div>
      </section>
    </main>
  )
}
