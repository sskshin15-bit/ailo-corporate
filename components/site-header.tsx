'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useLocale, type Locale } from '@/components/locale-provider'
import { withBasePath } from '@/lib/site-path'

const copy = {
  ja: {
    nav: [
      { label: 'ソリューション', href: '#solutions' },
      { label: 'MEO', href: '#meo' },
      { label: '会社情報', href: '#leadership' },
      { label: 'ニュース', href: 'news' },
      { label: 'お問い合わせ', href: '#contact' },
    ],
    consult: 'ご相談はこちら',
    requestDocs: '資料請求',
    openMenu: 'メニューを開く',
    closeMenu: 'メニューを閉じる',
    primaryNav: '主要ナビゲーション',
    mobileNav: 'モバイルナビゲーション',
    homeAria: '合同会社Ailo トップページ',
  },
  en: {
    nav: [
      { label: 'Solutions', href: '#solutions' },
      { label: 'MEO', href: '#meo' },
      { label: 'Company', href: '#leadership' },
      { label: 'News', href: 'news' },
      { label: 'Contact', href: '#contact' },
    ],
    consult: 'Request Consultation',
    requestDocs: 'Request Materials',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    primaryNav: 'Primary navigation',
    mobileNav: 'Mobile navigation',
    homeAria: 'Ailo LLC home',
  },
  zh: {
    nav: [
      { label: '解决方案', href: '#solutions' },
      { label: 'MEO', href: '#meo' },
      { label: '公司信息', href: '#leadership' },
      { label: '新闻动态', href: 'news' },
      { label: '联系我们', href: '#contact' },
    ],
    consult: '咨询洽谈',
    requestDocs: '索取资料',
    openMenu: '打开菜单',
    closeMenu: '关闭菜单',
    primaryNav: '主导航',
    mobileNav: '移动导航',
    homeAria: 'Ailo 公司首页',
  },
} as const

const languageOptions: { value: Locale; label: string }[] = [
  { value: 'ja', label: '日本語' },
  { value: 'en', label: 'EN' },
  { value: 'zh', label: '中文' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { locale, setLocale } = useLocale()
  const t = copy[locale]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled
          ? 'border-b border-border/60 bg-background/85 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-5 sm:h-20 sm:px-6 lg:px-10">
        <a href={withBasePath('/#top')} className="flex items-baseline gap-2" aria-label={t.homeAria}>
          <span className="text-xl font-medium tracking-[0.26em] text-foreground sm:text-2xl sm:tracking-[0.35em]">AILO</span>
          <span className="h-1.5 w-1.5 translate-y-[-2px] rounded-full bg-primary" aria-hidden="true" />
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label={t.primaryNav}>
          {t.nav.map((link) => (
            <a
              key={link.href}
              href={withBasePath(`/${link.href}`)}
              className="text-sm font-light tracking-wide text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <div className="inline-flex items-center rounded-full border border-border/70 bg-background/70 p-1 shadow-sm backdrop-blur-sm">
            {languageOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => setLocale(option.value)}
                className={cn(
                  'rounded-full px-3 py-1.5 text-xs font-medium transition-colors',
                  locale === option.value
                    ? 'bg-foreground text-background shadow-sm'
                    : 'text-muted-foreground hover:bg-muted/60 hover:text-foreground',
                )}
              >
                {option.label}
              </button>
            ))}
          </div>
          <a
            href={withBasePath('/?inquiry=consultation#contact')}
            className="border border-primary/60 px-6 py-2.5 text-sm font-light tracking-wide text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            {t.consult}
          </a>
          <a
            href={withBasePath('/?inquiry=materials#contact')}
            className="border border-border px-6 py-2.5 text-sm font-light tracking-wide text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            {t.requestDocs}
          </a>
        </div>

        <button
          type="button"
          className="rounded-sm p-1 text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? t.closeMenu : t.openMenu}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background/95 backdrop-blur-md md:hidden">
          <nav className="flex flex-col px-6 py-4" aria-label={t.mobileNav}>
            <div className="mb-3 inline-flex w-fit items-center rounded-full border border-border/70 bg-background/80 p-1">
              {languageOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setLocale(option.value)}
                  className={cn(
                    'rounded-full px-3 py-1.5 text-xs font-medium transition-colors',
                    locale === option.value
                      ? 'bg-foreground text-background shadow-sm'
                      : 'text-muted-foreground hover:bg-muted/60 hover:text-foreground',
                  )}
                >
                  {option.label}
                </button>
              ))}
            </div>
            {t.nav.map((link) => (
              <a
                key={link.href}
                href={withBasePath(`/${link.href}`)}
                onClick={() => setOpen(false)}
                className="border-b border-border/40 py-4 text-sm font-light tracking-wide text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href={withBasePath('/?inquiry=consultation#contact')}
              onClick={() => setOpen(false)}
              className="mt-4 border border-primary/60 px-6 py-3 text-center text-sm font-light tracking-wide text-primary"
            >
              {t.consult}
            </a>
            <a
              href={withBasePath('/?inquiry=materials#contact')}
              onClick={() => setOpen(false)}
              className="mt-3 border border-border px-6 py-3 text-center text-sm font-light tracking-wide text-foreground"
            >
              {t.requestDocs}
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
