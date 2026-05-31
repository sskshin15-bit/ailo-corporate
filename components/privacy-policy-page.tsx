'use client'

import { useLocale } from '@/components/locale-provider'
import { withBasePath } from '@/lib/site-path'

const copy = {
  ja: {
    label: 'Privacy Policy',
    heading: 'プライバシーポリシー',
    updatedAt: '最終更新日: 2026年5月31日',
    intro:
      '合同会社Ailo（以下「当社」）は、個人情報の保護を重要な責務と認識し、個人情報の保護に関する法律その他関連法令を遵守するとともに、以下の方針に基づいて適切な取得・利用・管理を行います。',
    sections: [
      {
        title: '1. 適用範囲',
        body: '本ポリシーは、当社が提供するウェブサイト、お問い合わせ対応、提案活動、契約締結および関連する業務において取り扱う個人情報に適用されます。個別サービスに追加規定がある場合は、当該規定が本ポリシーに優先します。',
      },
      {
        title: '2. 取得する情報',
        body: '当社は、氏名、会社名、部署・役職、メールアドレス、電話番号、住所、請求情報、お問い合わせ内容、商談・打ち合わせ記録、当社サイトの利用履歴、Cookie等の識別子、端末情報、IPアドレス、アクセス日時などを取得することがあります。',
      },
      {
        title: '3. 取得方法',
        body: '当社は、(1) お問い合わせフォーム・メール・電話等でお客様からご提供いただく方法、(2) 商談・契約手続に伴い取得する方法、(3) ウェブサイト利用時に自動的に取得する方法により、適法かつ公正な手段で情報を取得します。',
      },
      {
        title: '4. 利用目的',
        body: '取得した情報は、(1) お問い合わせへの回答、(2) サービス提供・運用・保守、(3) 見積・契約・請求その他取引管理、(4) セキュリティ確保および不正利用防止、(5) サービス改善・品質向上・分析、(6) 法令対応および権利行使のために利用します。利用目的を変更する場合は、関連性を有する範囲で行います。',
      },
      {
        title: '5. 第三者提供',
        body: '当社は、次の場合を除き、本人の同意なく個人情報を第三者に提供しません。(1) 法令に基づく場合、(2) 人の生命・身体・財産の保護のために必要がある場合、(3) 公衆衛生の向上または児童の健全育成推進に特に必要がある場合、(4) 国の機関等への協力が必要な場合。',
      },
      {
        title: '6. 委託・共同利用',
        body: '当社は、利用目的達成に必要な範囲で、クラウド事業者、決済・会計、保守運用等の委託先に個人情報の取扱いを委託することがあります。この場合、当社は委託先を適切に選定し、契約締結および監督を行います。共同利用を行う場合は、法令に従い事前に公表します。',
      },
      {
        title: '7. Cookie等の利用',
        body: '当社ウェブサイトでは、利便性向上、利用状況分析、セキュリティ確保のためCookie等を利用することがあります。ブラウザ設定によりCookieの受入れを拒否できますが、その場合、一部機能が利用できないことがあります。',
      },
      {
        title: '8. 安全管理措置',
        body: '当社は、組織的・人的・物理的・技術的安全管理措置を講じ、漏えい、滅失、毀損の防止および是正に努めます。主な措置として、アクセス権限管理、認証基盤の利用、通信の暗号化、ログ監査、従業者教育、委託先管理等を実施します。',
      },
      {
        title: '9. 保有期間',
        body: '当社は、利用目的の達成に必要な期間に限って個人情報を保有し、法令上保存義務を負う場合を除き、不要となった情報は合理的な方法で削除または匿名化します。',
      },
      {
        title: '10. 開示・訂正・利用停止等',
        body: '本人または代理人から、保有個人データの開示、訂正、追加、削除、利用停止、第三者提供停止等の請求があった場合、本人確認のうえ、法令に従って合理的な期間・範囲で対応します。法令に基づき対応できない場合は、その理由を通知します。',
      },
      {
        title: '11. 未成年者の情報',
        body: '未成年者が個人情報を提供する場合は、必要に応じて保護者等の同意を得たうえで行ってください。当社が未成年者の情報を不適切に取得したと判断した場合は、速やかに必要な措置を講じます。',
      },
      {
        title: '12. 改定・お問い合わせ窓口',
        body: '当社は、法令改正や事業内容の変更等に応じて本ポリシーを改定することがあります。改定後の内容は当社ウェブサイトへの掲載時に効力を生じます。本ポリシーに関するお問い合わせは contact@ailo.co.jp までご連絡ください。',
      },
    ],
    backHome: 'トップページへ戻る',
  },
  en: {
    label: 'Privacy Policy',
    heading: 'Privacy Policy',
    updatedAt: 'Last updated: May 31, 2026',
    intro:
      'Ailo LLC ("we", "our", or "us") recognizes the protection of personal information as a core responsibility. We process personal information in accordance with applicable laws and this Policy.',
    sections: [
      {
        title: '1. Scope',
        body: 'This Policy applies to personal information we handle in connection with our website, inquiry handling, proposal activities, contracts, and related operations. If a specific service notice provides additional rules, that notice prevails for the relevant service.',
      },
      {
        title: '2. Information We Collect',
        body: 'We may collect name, company name, department/title, email address, phone number, address, billing information, inquiry details, meeting records, website usage logs, cookie identifiers, device information, IP address, and access timestamps.',
      },
      {
        title: '3. Collection Methods',
        body: 'We collect information through (1) direct submissions via forms, email, or phone, (2) business discussions and contract procedures, and (3) automatic collection when you use our website.',
      },
      {
        title: '4. Purposes of Use',
        body: 'We use personal information to (1) respond to inquiries, (2) provide, operate, and maintain services, (3) process quotations, contracts, billing, and related transactions, (4) maintain security and prevent misuse, (5) improve services and conduct analytics, and (6) comply with legal obligations and exercise rights.',
      },
      {
        title: '5. Third-Party Disclosure',
        body: 'We do not disclose personal information to third parties without consent except where permitted by law, including legal obligations, protection of life/body/property, public health needs, or cooperation with governmental authorities.',
      },
      {
        title: '6. Outsourcing and Joint Use',
        body: 'We may outsource handling to vendors such as cloud providers, accounting/payment providers, and operations contractors within necessary scope. We select and supervise vendors appropriately through contracts and operational controls. Where joint use is conducted, we will disclose required details in accordance with law.',
      },
      {
        title: '7. Cookies and Similar Technologies',
        body: 'We may use cookies and similar technologies for usability, analytics, and security. You may disable cookies via browser settings, but some website functions may become unavailable.',
      },
      {
        title: '8. Security Controls',
        body: 'We implement organizational, human, physical, and technical safeguards to prevent leakage, loss, or damage. Measures include access control, authentication systems, encrypted communications, log monitoring, employee training, and vendor management.',
      },
      {
        title: '9. Retention Period',
        body: 'We retain personal information only for as long as necessary to fulfill the stated purposes, unless longer retention is required by law. Information no longer needed is deleted or anonymized by reasonable methods.',
      },
      {
        title: '10. Data Subject Rights',
        body: 'Upon valid request from you or your authorized agent, we will respond in accordance with applicable law regarding disclosure, correction, addition, deletion, restriction of use, or suspension of third-party disclosure. We may request identity verification before processing requests.',
      },
      {
        title: '11. Children\'s Information',
        body: 'If a minor provides personal information, consent from a parent or legal guardian may be required. If we determine that information from a minor was collected inappropriately, we will take prompt corrective action.',
      },
      {
        title: '12. Changes and Contact',
        body: 'We may revise this Policy due to legal updates or operational changes. Revised terms become effective upon posting on our website unless otherwise specified. For inquiries, contact us at contact@ailo.co.jp.',
      },
    ],
    backHome: 'Back to Home',
  },
  zh: {
    label: 'Privacy Policy',
    heading: '隐私政策',
    updatedAt: '最后更新：2026年5月31日',
    intro:
      'Ailo合同会社（以下简称“本公司”）将个人信息保护视为重要责任，并依据适用法律法规及本政策对个人信息进行合法、正当、必要的处理与管理。',
    sections: [
      {
        title: '1. 适用范围',
        body: '本政策适用于本公司在网站运营、咨询回复、方案沟通、合同签署及相关业务活动中处理的个人信息。若特定服务另有补充说明，则该说明在对应范围内优先适用。',
      },
      {
        title: '2. 我们收集的信息',
        body: '我们可能收集姓名、公司名称、部门/职务、电子邮箱、电话号码、地址、结算信息、咨询内容、会议记录、网站访问记录、Cookie标识符、设备信息、IP地址及访问时间等。',
      },
      {
        title: '3. 收集方式',
        body: '我们通过以下方式收集信息：(1) 您主动通过表单、邮件、电话提交；(2) 商务洽谈与合同流程中获取；(3) 您访问网站时自动采集。',
      },
      {
        title: '4. 使用目的',
        body: '所收集信息用于：(1) 回复咨询，(2) 提供、运营和维护服务，(3) 报价、合同、结算及交易管理，(4) 安全保障与防止滥用，(5) 服务优化与数据分析，(6) 履行法定义务及行使权利。',
      },
      {
        title: '5. 向第三方提供',
        body: '除法律法规允许或要求的情形外，未经本人同意我们不会向第三方提供个人信息。法律允许情形包括履行法定义务、保护生命财产安全、公共卫生需要及配合国家机关依法履职等。',
      },
      {
        title: '6. 委托处理与共同使用',
        body: '在实现使用目的所必需范围内，我们可能将信息处理委托给云服务商、会计/支付服务商及运维合作方。我们会通过合同与管理机制对受托方进行适当监督。若进行共同使用，我们将依法公示相关事项。',
      },
      {
        title: '7. Cookie及类似技术',
        body: '我们可能使用Cookie等技术以提升体验、开展分析和保障安全。您可在浏览器中管理或拒绝Cookie，但这可能导致部分功能无法正常使用。',
      },
      {
        title: '8. 安全管理措施',
        body: '我们采取组织、人员、物理与技术层面的安全措施，防止信息泄露、丢失或损坏。主要措施包括权限控制、身份认证、传输加密、日志监控、员工培训和供应商管理。',
      },
      {
        title: '9. 保存期限',
        body: '我们仅在实现上述目的所需期间内保存个人信息；如法律法规另有要求，将按规定期限保存。超过保存期限后，我们将以合理方式删除或匿名化处理。',
      },
      {
        title: '10. 个人权利',
        body: '您或依法授权代理人可依据适用法律提出查询、复制、更正、补充、删除、限制处理或停止向第三方提供等请求。为保护信息安全，我们可能要求进行身份验证。',
      },
      {
        title: '11. 未成年人信息',
        body: '未成年人提供个人信息时，必要情况下应事先取得监护人同意。若我们认为未成年人信息的收集不当，将及时采取纠正措施。',
      },
      {
        title: '12. 政策更新与联系方式',
        body: '因法律变更或业务调整，本政策可能适时更新。更新内容发布于本公司网站后生效（另有说明除外）。如有疑问，请联系 contact@ailo.co.jp。',
      },
    ],
    backHome: '返回首页',
  },
} as const

export function PrivacyPolicyPage() {
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
