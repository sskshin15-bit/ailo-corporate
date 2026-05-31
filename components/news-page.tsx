'use client'

import { useLocale } from '@/components/locale-provider'
import { newsItems } from '@/lib/news-content'
import { withBasePath } from '@/lib/site-path'

const copy = {
  ja: {
    label: 'News',
    heading: 'ニュース',
    intro: '合同会社Ailoの最新情報をお届けします。各ニュースから詳細ページをご覧いただけます。',
    featuredLabel: 'Featured',
    latestLabel: '最新のお知らせ',
    readMore: '詳細を見る',
    backHome: 'トップページへ戻る',
  },
  en: {
    label: 'News',
    heading: 'News',
    intro: 'Stay up to date with Ailo. Each post links to a full detail page.',
    featuredLabel: 'Featured',
    latestLabel: 'Latest Updates',
    readMore: 'Read details',
    backHome: 'Back to Home',
  },
  zh: {
    label: 'News',
    heading: '新闻动态',
    intro: '这里汇总Ailo的最新信息，并可点击进入每条新闻的详情页。',
    featuredLabel: 'Featured',
    latestLabel: '最新资讯',
    readMore: '查看详情',
    backHome: '返回首页',
  },
} as const

export function NewsPage() {
  const { locale } = useLocale()
  const t = copy[locale]
  const featured = newsItems[0]?.translations[locale]
  const updates = newsItems.slice(1)

  return (
    <main className="bg-[linear-gradient(180deg,#0b1c38_0%,#101f3a_55%,#14274a_100%)] pt-28 pb-20">
      <section className="mx-auto max-w-4xl px-6 lg:px-10">
        <p className="text-xs font-light tracking-[0.2em] text-primary">{t.label}</p>
        <h1 className="mt-5 font-serif text-4xl font-light text-foreground lg:text-5xl">{t.heading}</h1>
        <p className="mt-8 text-sm font-light leading-relaxed text-muted-foreground">{t.intro}</p>

        {featured ? (
          <article className="mt-10 rounded-sm border border-primary/30 bg-card/70 p-6">
            <p className="text-xs font-light tracking-wide text-primary">{t.featuredLabel}</p>
            <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
              <span>{featured.date}</span>
              <span className="h-1 w-1 rounded-full bg-primary/70" aria-hidden="true" />
              <span>{featured.category}</span>
            </div>
            <h2 className="mt-4 text-xl font-medium text-foreground">{featured.title}</h2>
            <p className="mt-3 text-sm font-light leading-relaxed text-muted-foreground">{featured.excerpt}</p>
            <a
              href={withBasePath(`/news/${newsItems[0].slug}`)}
              className="mt-5 inline-flex border border-primary/50 px-4 py-2 text-xs font-light text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              {t.readMore}
            </a>
          </article>
        ) : null}

        <div className="mt-10">
          <h2 className="text-lg font-medium text-foreground">{t.latestLabel}</h2>
          <div className="mt-5 space-y-4">
            {updates.map((item) => (
              <a
                key={item.slug}
                href={withBasePath(`/news/${item.slug}`)}
                className="block rounded-sm border border-border/60 bg-card/70 p-5 transition-colors hover:border-primary/40"
              >
                <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                  <span>{item.translations[locale].date}</span>
                  <span className="h-1 w-1 rounded-full bg-primary/70" aria-hidden="true" />
                  <span>{item.translations[locale].category}</span>
                </div>
                <h3 className="mt-3 text-base font-medium text-foreground">{item.translations[locale].title}</h3>
                <p className="mt-2 text-sm font-light leading-relaxed text-muted-foreground">
                  {item.translations[locale].excerpt}
                </p>
                <span className="mt-4 inline-flex text-xs font-light text-primary">{t.readMore}</span>
              </a>
            ))}
          </div>
        </div>

        <a
          href={withBasePath('/#top')}
          className="mt-12 inline-flex border border-primary/50 px-5 py-2.5 text-sm font-light text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          {t.backHome}
        </a>
      </section>
    </main>
  )
}
