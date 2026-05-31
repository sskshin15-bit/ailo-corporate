'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useLocale, type Locale } from '@/components/locale-provider'

const copy = {
  ja: {
    nav: [
      { label: '強み', href: '#strengths' },
      { label: 'ソリューション', href: '#solutions' },
      { label: '経営陣', href: '#leadership' },
      { label: 'お問い合わせ', href: '#contact' },
    ],
    consult: 'ご相談はこちら',
    openMenu: 'メニューを開く',
    closeMenu: 'メニューを閉じる',
    primaryNav: '主要ナビゲーション',
    mobileNav: 'モバイルナビゲーション',
    homeAria: '合同会社Ailo トップページ',
  },
  en: {
    nav: [
      { label: 'Strengths', href: '#strengths' },
      { label: 'Solutions', href: '#solutions' },
      { label: 'Leadership', href: '#leadership' },
      { label: 'Contact', href: '#contact' },
    ],
    consult: 'Request Consultation',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    primaryNav: 'Primary navigation',
    mobileNav: 'Mobile navigation',
    homeAria: 'Ailo LLC home',
  },
  zh: {
    nav: [
      { label: '核心优势', href: '#strengths' },
      { label: '解决方案', href: '#solutions' },
      { label: '管理团队', href: '#leadership' },
      { label: '联系我们', href: '#contact' },
    ],
    consult: '咨询洽谈',
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
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#top" className="flex items-baseline gap-2" aria-label={t.homeAria}>
          <span className="text-2xl font-medium tracking-[0.35em] text-foreground">AILO</span>
          <span className="h-1.5 w-1.5 translate-y-[-2px] rounded-full bg-primary" aria-hidden="true" />
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label={t.primaryNav}>
          {t.nav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-light tracking-wide text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <div className="flex items-center rounded-sm border border-border/70 p-1">
            {languageOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => setLocale(option.value)}
                className={cn(
                  'px-2.5 py-1 text-xs font-light transition-colors',
                  locale === option.value
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground',
                )}
              >
                {option.label}
              </button>
            ))}
          </div>
          <a
            href="#contact"
            className="border border-primary/60 px-6 py-2.5 text-sm font-light tracking-wide text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            {t.consult}
          </a>
        </div>

        <button
          type="button"
          className="text-foreground md:hidden"
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
            <div className="mb-3 flex items-center gap-2">
              {languageOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setLocale(option.value)}
                  className={cn(
                    'rounded-sm border border-border/70 px-3 py-1 text-xs font-light',
                    locale === option.value
                      ? 'border-primary bg-primary text-primary-foreground'
                      : 'text-muted-foreground',
                  )}
                >
                  {option.label}
                </button>
              ))}
            </div>
            {t.nav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/40 py-4 text-sm font-light tracking-wide text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-4 border border-primary/60 px-6 py-3 text-center text-sm font-light tracking-wide text-primary"
            >
              {t.consult}
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
