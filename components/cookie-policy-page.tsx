'use client'

import { useLocale } from '@/components/locale-provider'
import { withBasePath } from '@/lib/site-path'

const copy = {
  ja: {
    label: 'Cookie Policy',
    heading: 'Cookieポリシー',
    updatedAt: '最終更新日: 2026年5月31日',
    intro:
      '合同会社Ailo（以下「当社」）は、当社ウェブサイトの利便性向上、利用状況分析、セキュリティ確保のためにCookieおよび類似技術を利用します。',
    sections: [
      {
        title: '1. Cookieとは',
        body: 'Cookieとは、ウェブサイトの閲覧時に利用者の端末へ保存される小さなテキストファイルです。Cookieにより、サイトの利用状況や設定情報を記録できます。',
      },
      {
        title: '2. 利用目的',
        body: '当社はCookieを、(1) サイト表示・操作の最適化、(2) 利用状況の把握と改善、(3) セキュリティ異常の検知、(4) 問い合わせ導線やコンテンツ品質の改善のために利用します。',
      },
      {
        title: '3. Cookieの種類',
        body: '当社では、サイト運営に必要な必須Cookie、アクセス解析等に利用する分析Cookie、利便性向上のための機能Cookieを利用する場合があります。',
      },
      {
        title: '4. 第三者サービス',
        body: '当社は、分析・配信・保守等の目的で第三者サービスを利用する場合があります。これに伴い、当該第三者がCookie等を通じて情報を取得することがあります。',
      },
      {
        title: '5. 無効化方法',
        body: '利用者はブラウザ設定によりCookieを拒否・削除できます。ただし、Cookieを無効化した場合、当社サイトの一部機能が正常に動作しないことがあります。',
      },
      {
        title: '6. ポリシー変更',
        body: '法令改正やサービス変更等に応じて本ポリシーを改定することがあります。改定後の内容は当社ウェブサイトへの掲載時に効力を生じます。',
      },
      {
        title: '7. お問い合わせ',
        body: '本ポリシーに関するお問い合わせは contact@ailo.co.jp までご連絡ください。',
      },
    ],
    backHome: 'トップページへ戻る',
  },
  en: {
    label: 'Cookie Policy',
    heading: 'Cookie Policy',
    updatedAt: 'Last updated: May 31, 2026',
    intro:
      'Ailo LLC ("we", "our", or "us") uses cookies and similar technologies to improve website usability, analyze usage, and maintain security.',
    sections: [
      {
        title: '1. What Are Cookies',
        body: 'Cookies are small text files stored on your device when you visit a website. They help remember settings and understand usage patterns.',
      },
      {
        title: '2. Purposes of Use',
        body: 'We use cookies to (1) optimize website display and operation, (2) analyze and improve usage, (3) detect security anomalies, and (4) improve inquiry paths and content quality.',
      },
      {
        title: '3. Types of Cookies',
        body: 'We may use strictly necessary cookies, analytics cookies, and functional cookies to provide and improve our website experience.',
      },
      {
        title: '4. Third-Party Services',
        body: 'We may use third-party services for analytics, delivery, and operations. Such providers may collect information through cookies or similar technologies.',
      },
      {
        title: '5. Managing Cookies',
        body: 'You can reject or delete cookies through your browser settings. If cookies are disabled, some website functions may not work properly.',
      },
      {
        title: '6. Policy Updates',
        body: 'We may revise this policy in response to legal or service changes. Updates become effective once posted on our website unless otherwise specified.',
      },
      {
        title: '7. Contact',
        body: 'For questions about this policy, contact us at contact@ailo.co.jp.',
      },
    ],
    backHome: 'Back to Home',
  },
  zh: {
    label: 'Cookie Policy',
    heading: 'Cookie政策',
    updatedAt: '最后更新：2026年5月31日',
    intro:
      'Ailo合同会社（以下简称“本公司”）使用Cookie及类似技术，以提升网站体验、分析使用情况并保障安全。',
    sections: [
      {
        title: '1. 什么是Cookie',
        body: 'Cookie是您访问网站时保存在设备中的小型文本文件，可用于记录偏好设置和使用状态。',
      },
      {
        title: '2. 使用目的',
        body: '我们使用Cookie以实现：(1) 网站展示与操作优化，(2) 使用分析与改进，(3) 安全异常检测，(4) 咨询路径和内容质量优化。',
      },
      {
        title: '3. Cookie类型',
        body: '我们可能使用网站运行所需的必要Cookie、用于统计分析的分析Cookie，以及提升使用体验的功能Cookie。',
      },
      {
        title: '4. 第三方服务',
        body: '我们可能为分析、分发和运维目的使用第三方服务。该等服务提供方可能通过Cookie等技术获取相关信息。',
      },
      {
        title: '5. 管理与停用',
        body: '您可在浏览器设置中拒绝或删除Cookie。停用后，网站部分功能可能无法正常使用。',
      },
      {
        title: '6. 政策更新',
        body: '我们可能因法律法规或服务调整更新本政策。更新内容发布于本公司网站后生效（另有说明除外）。',
      },
      {
        title: '7. 联系方式',
        body: '如对本政策有疑问，请联系 contact@ailo.co.jp。',
      },
    ],
    backHome: '返回首页',
  },
} as const

export function CookiePolicyPage() {
  const { locale } = useLocale()
  const t = copy[locale]

  return (
    <main className="bg-[linear-gradient(180deg,#0b1c38_0%,#101f3a_55%,#14274a_100%)] pt-28 pb-20">
      <section className="mx-auto max-w-4xl px-6 lg:px-10">
        <p className="text-xs font-light tracking-[0.2em] text-primary">{t.label}</p>
        <h1 className="mt-5 font-serif text-4xl font-light text-foreground lg:text-5xl">{t.heading}</h1>
        <p className="mt-4 text-sm font-light text-muted-foreground">{t.updatedAt}</p>
        <p className="mt-8 text-sm font-light leading-relaxed text-muted-foreground">{t.intro}</p>

        <div className="mt-10 space-y-8">
          {t.sections.map((section) => (
            <article key={section.title} className="border-l border-primary/40 pl-5">
              <h2 className="text-lg font-medium text-foreground">{section.title}</h2>
              <p className="mt-3 text-sm font-light leading-relaxed text-muted-foreground">{section.body}</p>
            </article>
          ))}
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
