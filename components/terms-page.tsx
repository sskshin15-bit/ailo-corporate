'use client'

import { useLocale } from '@/components/locale-provider'
import { withBasePath } from '@/lib/site-path'

const copy = {
  ja: {
    label: 'Terms of Service',
    heading: '利用規約',
    updatedAt: '最終更新日: 2026年5月31日',
    intro:
      '本規約は、合同会社Ailo（以下「当社」）が提供するサービスの利用条件を定めるものです。ご利用にあたっては本規約に同意いただいたものとみなします。',
    sections: [
      {
        title: '1. 適用範囲',
        body: '本規約は、当社サービスの利用に関する当社と利用者との一切の関係に適用されます。',
      },
      {
        title: '2. 禁止事項',
        body: '法令違反、公序良俗違反、第三者の権利侵害、サービス運営を妨害する行為を禁止します。',
      },
      {
        title: '3. 知的財産権',
        body: '当社サービスに関する著作権、商標権その他の知的財産権は、当社または正当な権利者に帰属します。',
      },
      {
        title: '4. 免責事項',
        body: '当社は、サービスの完全性・有用性等を保証するものではなく、利用により生じた損害について法令上許容される範囲で責任を負いません。',
      },
      {
        title: '5. 規約の変更',
        body: '当社は必要に応じて本規約を変更できるものとし、変更後の規約は当社ウェブサイトに掲載した時点で効力を生じます。',
      },
      {
        title: '6. 準拠法・管轄',
        body: '本規約は日本法に準拠し、本規約に関して紛争が生じた場合は当社本店所在地を管轄する裁判所を専属的合意管轄とします。',
      },
    ],
    backHome: 'トップページへ戻る',
  },
  en: {
    label: 'Terms of Service',
    heading: 'Terms of Service',
    updatedAt: 'Last updated: May 31, 2026',
    intro:
      'These Terms define the conditions for using services provided by Ailo LLC. By using our services, you agree to these Terms.',
    sections: [
      {
        title: '1. Scope',
        body: 'These Terms apply to all relationships between us and users regarding the use of our services.',
      },
      {
        title: '2. Prohibited Conduct',
        body: 'Users must not violate laws, public order, third-party rights, or interfere with service operations.',
      },
      {
        title: '3. Intellectual Property',
        body: 'All copyrights, trademarks, and other intellectual property rights related to our services belong to us or legitimate right holders.',
      },
      {
        title: '4. Disclaimer',
        body: 'We do not guarantee completeness or fitness of the services and are not liable for damages to the extent permitted by law.',
      },
      {
        title: '5. Changes to Terms',
        body: 'We may revise these Terms as needed. Revised Terms become effective once posted on our website.',
      },
      {
        title: '6. Governing Law and Jurisdiction',
        body: 'These Terms are governed by Japanese law. Any disputes shall be subject to the exclusive jurisdiction of the court with jurisdiction over our head office location.',
      },
    ],
    backHome: 'Back to Home',
  },
  zh: {
    label: 'Terms of Service',
    heading: '服务条款',
    updatedAt: '最后更新：2026年5月31日',
    intro:
      '本条款规定了Ailo合同会社（以下简称“本公司”）所提供服务的使用条件。使用本服务即视为同意本条款。',
    sections: [
      {
        title: '1. 适用范围',
        body: '本条款适用于用户与本公司之间关于本服务使用的一切关系。',
      },
      {
        title: '2. 禁止事项',
        body: '禁止实施违法行为、违反公序良俗、侵害第三方权益或妨碍服务运营的行为。',
      },
      {
        title: '3. 知识产权',
        body: '与本服务相关的著作权、商标权及其他知识产权归本公司或合法权利人所有。',
      },
      {
        title: '4. 免责声明',
        body: '本公司不对服务的完整性或适用性作保证，并在法律允许范围内不对因使用服务产生的损害承担责任。',
      },
      {
        title: '5. 条款变更',
        body: '本公司可在必要时修改本条款，修改后的条款在网站公布时生效。',
      },
      {
        title: '6. 准据法与管辖',
        body: '本条款适用日本法律。若发生争议，由对本公司总部所在地有管辖权的法院专属管辖。',
      },
    ],
    backHome: '返回首页',
  },
} as const

export function TermsPage() {
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
