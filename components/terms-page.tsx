'use client'

import { useLocale } from '@/components/locale-provider'
import { withBasePath } from '@/lib/site-path'

const copy = {
  ja: {
    label: 'Terms of Service',
    heading: '利用規約',
    updatedAt: '最終更新日: 2026年5月31日',
    intro:
      '本規約は、合同会社Ailo（以下「当社」）が提供するサービス（ウェブサイト、提案、受託開発、保守運用、その他関連サービスを含みます）の利用条件を定めるものです。利用者は、本規約に同意のうえサービスを利用するものとします。',
    sections: [
      {
        title: '1. 適用範囲',
        body: '本規約は、当社と利用者との間のサービス利用に関する一切の関係に適用されます。個別契約、見積書、発注書、業務委託契約書その他の個別条件（以下「個別契約等」）がある場合、個別契約等が本規約に優先します。',
      },
      {
        title: '2. 契約の成立',
        body: '利用者による申込みに対し、当社が承諾した時点で契約が成立します。当社は、申込み内容に不備がある場合、過去の契約違反がある場合、または業務遂行上相当でないと判断した場合、申込みを承諾しないことがあります。',
      },
      {
        title: '3. 料金および支払',
        body: '料金、支払期日、支払方法は個別契約等で定めるとおりとします。利用者が支払を遅滞した場合、当社は法令または個別契約等に基づき遅延損害金の請求その他必要な措置を講じることができます。',
      },
      {
        title: '4. 利用者の義務',
        body: '利用者は、正確かつ最新の情報を提供し、ID・パスワード等の認証情報を自己の責任で管理するものとします。認証情報の管理不十分、使用上の過誤、第三者使用により生じた損害について、当社は責任を負いません。',
      },
      {
        title: '5. 禁止事項',
        body: '利用者は、法令または公序良俗に反する行為、第三者の権利侵害、当社サービスの不正利用、リバースエンジニアリング、過度な負荷を与える行為、虚偽情報の提供、反社会的勢力への利益供与その他当社が不適切と判断する行為を行ってはなりません。',
      },
      {
        title: '6. 知的財産権',
        body: '当社サービスおよび関連資料に関する著作権、商標権、ノウハウその他知的財産権は、当社または正当な権利者に帰属します。個別契約等で別段の定めがある場合を除き、利用者に権利移転は生じません。',
      },
      {
        title: '7. 秘密保持',
        body: '利用者および当社は、相手方から開示された技術上・営業上その他一切の非公知情報を秘密として取り扱い、相手方の事前承諾なく第三者に開示・漏えいしません。法令または裁判所等の命令に基づく開示はこの限りではありません。',
      },
      {
        title: '8. サービス変更・停止',
        body: '当社は、保守、障害対応、法令対応、天災地変その他やむを得ない事由がある場合、事前通知または緊急時の事後通知により、サービスの全部または一部を変更、停止または終了できるものとします。',
      },
      {
        title: '9. 保証の否認',
        body: '当社は、サービスが利用者の特定目的に適合すること、期待する機能・正確性・有用性・継続性を有すること、および第三者権利を侵害しないことについて、明示または黙示を問わず保証しません。',
      },
      {
        title: '10. 責任制限',
        body: '当社の債務不履行、不法行為その他請求原因のいかんを問わず、当社が負う損害賠償責任は、当該損害の直接かつ通常の範囲に限られ、特別損害、逸失利益、間接損害、データ喪失損害は含まれません。個別契約等がある場合、責任上限は当該契約で定める額に従います。',
      },
      {
        title: '11. 解除',
        body: '利用者が本規約または個別契約等に違反した場合、当社は催告なくサービス提供の停止、契約解除その他必要な措置を講じることができます。この場合に利用者に生じた損害について、当社は責任を負いません。',
      },
      {
        title: '12. 反社会的勢力の排除',
        body: '利用者は、自己または関係者が反社会的勢力に該当しないこと、かつ将来にわたり該当しないことを表明保証するものとします。違反が判明した場合、当社は何らの催告なく契約を解除できます。',
      },
      {
        title: '13. 規約の変更',
        body: '当社は、法令改正、社会情勢の変化、サービス内容の変更等に応じて本規約を変更できるものとします。変更後の規約は、当社ウェブサイトへの掲載その他当社が適切と判断する方法で周知した時点から効力を生じます。',
      },
      {
        title: '14. 準拠法・管轄および連絡先',
        body: '本規約は日本法に準拠し、本規約またはサービスに関連して紛争が生じた場合、当社本店所在地を管轄する裁判所を第一審の専属的合意管轄裁判所とします。本規約に関するお問い合わせは contact@ailo.co.jp までご連絡ください。',
      },
    ],
    backHome: 'トップページへ戻る',
  },
  en: {
    label: 'Terms of Service',
    heading: 'Terms of Service',
    updatedAt: 'Last updated: May 31, 2026',
    intro:
      'These Terms govern your use of services provided by Ailo LLC, including our website, consulting, development, maintenance, and related services. By using our services, you agree to these Terms.',
    sections: [
      {
        title: '1. Scope',
        body: 'These Terms apply to all legal relationships between us and users regarding our services. If separate documents such as order forms, statements of work, or individual agreements exist, those documents prevail to the extent of any conflict.',
      },
      {
        title: '2. Contract Formation',
        body: 'A contract is formed when we accept your application or order. We may decline an application where information is incomplete, prior breaches exist, or we reasonably determine that service provision is inappropriate.',
      },
      {
        title: '3. Fees and Payment',
        body: 'Fees, payment due dates, and payment methods are defined in applicable individual agreements. If payment is overdue, we may charge late fees and take other lawful actions as permitted by contract or law.',
      },
      {
        title: '4. User Responsibilities',
        body: 'Users must provide accurate and up-to-date information and must securely manage IDs, passwords, and other credentials. We are not responsible for losses resulting from inadequate credential management or unauthorized use.',
      },
      {
        title: '5. Prohibited Conduct',
        body: 'Users must not engage in unlawful conduct, infringement of third-party rights, misuse of services, reverse engineering, actions that overload systems, submission of false information, support of antisocial organizations, or other conduct we reasonably deem inappropriate.',
      },
      {
        title: '6. Intellectual Property',
        body: 'All copyrights, trademarks, know-how, and other intellectual property rights in our services and related materials belong to us or legitimate rights holders. No rights are transferred to users unless explicitly agreed in writing.',
      },
      {
        title: '7. Confidentiality',
        body: 'Each party must treat non-public technical, business, and operational information disclosed by the other party as confidential and must not disclose it to third parties without prior consent, except where disclosure is required by law or official order.',
      },
      {
        title: '8. Service Changes or Suspension',
        body: 'We may change, suspend, or terminate all or part of services for maintenance, incident response, legal compliance, force majeure, or other reasonable necessity, with prior notice where practicable.',
      },
      {
        title: '9. Disclaimer of Warranties',
        body: 'Services are provided on an "as is" basis. We make no express or implied warranties regarding fitness for a particular purpose, expected functionality, accuracy, availability, continuity, or non-infringement.',
      },
      {
        title: '10. Limitation of Liability',
        body: 'To the maximum extent permitted by law, our liability is limited to direct and ordinary damages only and excludes special, indirect, consequential, lost-profit, and data-loss damages. Where an individual agreement sets a liability cap, that cap applies.',
      },
      {
        title: '11. Termination',
        body: 'If a user breaches these Terms or applicable individual agreements, we may suspend services or terminate the contract without prior notice. We are not liable for damages caused by such measures where permitted by law.',
      },
      {
        title: '12. Exclusion of Antisocial Forces',
        body: 'Users represent and warrant that neither they nor their related parties are affiliated with antisocial forces. If this representation is breached, we may terminate the contract immediately without notice.',
      },
      {
        title: '13. Changes to Terms',
        body: 'We may revise these Terms due to legal changes, service updates, or operational needs. Revised Terms become effective when posted on our website or otherwise communicated by reasonable means.',
      },
      {
        title: '14. Governing Law, Jurisdiction, and Contact',
        body: 'These Terms are governed by Japanese law. Any dispute related to these Terms or services shall be subject to the exclusive jurisdiction of the court having jurisdiction over our head office location as the court of first instance. For inquiries, contact contact@ailo.co.jp.',
      },
    ],
    backHome: 'Back to Home',
  },
  zh: {
    label: 'Terms of Service',
    heading: '服务条款',
    updatedAt: '最后更新：2026年5月31日',
    intro:
      '本条款规定了Ailo合同会社（以下简称“本公司”）所提供服务（包括网站、咨询、开发、维护及相关服务）的使用条件。您使用本服务即表示同意本条款。',
    sections: [
      {
        title: '1. 适用范围',
        body: '本条款适用于用户与本公司之间因使用服务产生的一切法律关系。如另有订单、工作说明书、个别合同等文件，相关文件在冲突范围内优先适用。',
      },
      {
        title: '2. 合同成立',
        body: '当本公司接受用户申请或订单时，合同成立。若申请信息不完整、存在既往违约，或本公司合理判断不宜提供服务，本公司可拒绝受理。',
      },
      {
        title: '3. 费用与支付',
        body: '费用、支付期限及方式以个别合同或订单约定为准。用户逾期付款时，本公司可依法或依约采取催收、迟延损害金请求等措施。',
      },
      {
        title: '4. 用户义务',
        body: '用户应提供真实、准确、最新的信息，并妥善保管账号、密码及其他认证信息。因保管不当或第三方使用导致的损失，由用户自行承担。',
      },
      {
        title: '5. 禁止事项',
        body: '禁止实施违法行为、侵犯第三方权益、滥用服务、反向工程、对系统施加异常负载、提交虚假信息、向反社会势力提供利益或其他本公司合理认定的不当行为。',
      },
      {
        title: '6. 知识产权',
        body: '与本服务及相关资料有关的著作权、商标权、技术诀窍等知识产权归本公司或合法权利人所有。除非双方另有书面约定，用户不因此取得任何权利转让。',
      },
      {
        title: '7. 保密义务',
        body: '双方对从对方获知的非公开技术、商业及运营信息负有保密义务，未经对方事先书面同意不得向第三方披露。法律法规或有权机关要求披露的除外。',
      },
      {
        title: '8. 服务变更与中止',
        body: '基于维护、故障处置、合规要求、不可抗力或其他合理必要情形，本公司可在可行范围内提前通知后，变更、中止或终止全部或部分服务。',
      },
      {
        title: '9. 保证否认',
        body: '服务按“现状”提供。本公司不对特定目的适用性、预期功能、准确性、可用性、持续性及不侵权作任何明示或默示保证。',
      },
      {
        title: '10. 责任限制',
        body: '在法律允许的最大范围内，本公司仅对直接且通常损失承担责任，不承担间接损失、特别损失、利润损失或数据损失。若个别合同约定责任上限，则从其约定。',
      },
      {
        title: '11. 解除',
        body: '用户违反本条款或相关个别约定时，本公司可在不事先通知的情况下中止服务或解除合同。在法律允许范围内，本公司不对因此产生的损失承担责任。',
      },
      {
        title: '12. 排除反社会势力',
        body: '用户声明并保证其自身及相关方不属于反社会势力，且未来亦不属于。若违反该保证，本公司有权立即解除合同。',
      },
      {
        title: '13. 条款变更',
        body: '因法律法规变更、服务内容调整或运营需要，本公司可修改本条款。修改后的条款在网站公布或以合理方式通知后生效。',
      },
      {
        title: '14. 准据法、管辖与联系方式',
        body: '本条款适用日本法律。因本条款或服务产生的争议，以对本公司总部所在地有管辖权的法院作为第一审专属管辖法院。如有疑问，请联系 contact@ailo.co.jp。',
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
