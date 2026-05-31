import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { LocaleProvider } from '@/components/locale-provider'
import { NewsDetailPage } from '@/components/news-detail-page'
import { SiteHeader } from '@/components/site-header'
import { getNewsItem, newsItems } from '@/lib/news-content'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return newsItems.map((item) => ({ slug: item.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const item = getNewsItem(slug)
  if (!item) {
    return {
      title: 'ニュース | 合同会社Ailo',
      description: '合同会社Ailoのニュース詳細ページです。',
    }
  }

  return {
    title: `${item.translations.ja.title} | 合同会社Ailo`,
    description: item.translations.ja.excerpt,
  }
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  const item = getNewsItem(slug)

  if (!item) {
    notFound()
  }

  return (
    <LocaleProvider>
      <SiteHeader />
      <NewsDetailPage item={item} />
    </LocaleProvider>
  )
}
