'use client'

import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { useLocale } from '@/components/locale-provider'
import { withBasePath } from '@/lib/site-path'

type SolutionItem = {
  tag: string
  name: string
  summary: string
  description: string
  points?: string[]
}

type EnterpriseBlock = {
  tag: string
  title: string
  lead: string
  description: string
  pillars: { number: string; title: string; body: string }[]
}

const copy: Record<
  'ja' | 'en' | 'zh',
  {
    label: string
    heading: string
    intro: string
    consultCta: string
    docsCta: string
    note: string
    tailoredTag: string
    tailoredHeading: string
    tailoredBody: string
    imageAlt: string
    solutions: SolutionItem[]
    enterpriseDxSolution: EnterpriseBlock
  }
> = {
  ja: {
    label: '主要ソリューション',
    heading: '主要事業・プロダクト',
    intro: 'お客様の事業特性に即した設計思想で、現場の業務変革と経営成果を同時に実現するソリューション群をご提供しています。',
    consultCta: '相談する',
    docsCta: '資料請求',
    note: '（※記載の客単価向上・コスト削減等の効果数値は、導入モデルに基づく当社シミュレーション値であり、実際の成果を完全に保証するものではありません）',
    tailoredTag: '個別実装支援',
    tailoredHeading: '個別要件に応じた、エンタープライズ向け実装プログラムにも対応しています。',
    tailoredBody:
      '基幹システム連携、運用設計、法務・税務観点を含めた全体最適化まで、経営・現場の双方に寄り添う形で伴走いたします。',
    imageAlt: '上質なホテルラウンジの内観',
    solutions: [
      {
        tag: '次世代型 LINEモバイルオーダー ＆ AI-CRMシステム',
        name: '「日々の注文」を「リピーター育成」へと直結させる飲食インフラ',
        summary: '慢性的な人手不足を解消し、持続可能な店舗運営と投資対効果（ROI）の最大化を支援する次世代オーダーシステムです。',
        description:
          'スマートフォンを起点としたフリクションレスな注文体験を提供し、ホール業務のオペレーション負荷を大幅に削減。取得したデータはCRMと自動連携し、一律の値引きに依存しない利益率の高い自律的なリピーター施策を実現します。',
        points: [
          '直感的な注文体験: お客様は卓上のQRコードをスキャンするだけ。使い慣れたLINEアプリ内で即座にメニューが起動し、追加注文を促進するUI設計により、客単価の向上とホール業務コストの大幅な削減を同時に推進します。',
          '注文導線に統合された顧客リスト化: 注文アクションを起点に公式LINEへの友だち追加を促し、「誰が・いつ・何を頼んだか」の購買データをシステムに正確に蓄積します。',
          'AIによるデータドリブンCRM（追客）: 蓄積されたデータに基づき、AIが最適なタイミングでパーソナライズされた販促を実行。一律の値引きに依存しない、利益率の高いリピーター施策を自動化します。',
        ],
      },
      {
        tag: 'SendThanks（センドサンクス）',
        name: 'ホスピタリティ業界向け デジタルチップ ＆ HR支援SaaS',
        summary: '感動を、現場スタッフへの感謝へ。',
        description:
          'インバウンド旅行者からの「感動」を、現場スタッフへの「感謝（チップ）」として届ける次世代プラットフォーム。専用アプリ不要・Apple Pay等により極めてスムーズな決済を実現します。既存のPOSレジに干渉しにくい設計を採用し、集まった資金を「法人の売上」と「適法な手当」へシステム上で自動集計・分配。従業員の離職防止と採用力強化に貢献する経済効果を生み出します。（※関連技術について特許出願中）',
      },
      {
        tag: 'TrustLoop & AI-DX Consulting',
        name: '士業・B2Bコンサルタント向け AI実装・レピュテーション管理',
        summary: '信頼性と生産性を同時に高める実装支援',
        description:
          '顧客満足度の高いフィードバックを適正に収集し、オンライン上のブランド信頼性（E-E-A-T）向上を支援するSaaS「TrustLoop」を展開。さらに、AIを活用したHP自動生成ツールや電話自動応答システムなど、士業・専門職向けの高度な業務改善ソリューションを開発。専門家による最終確認プロセスを前提とした安全設計により、非生産的なバックオフィス業務の圧倒的な効率化を実現します。',
      },
    ],
    enterpriseDxSolution: {
      tag: 'エンタープライズAI & DXソリューション',
      title: '経営課題を解決する包括的AIインテグレーション',
      lead: '「何から始めるべきか」の構想から、オーダーメイド開発、組織への定着まで',
      description:
        '「AIを導入したいが、自社のどの業務に適用できるかわからない」「既存のシステムが古く、非効率極まりない」──そのような抽象的な経営課題のレイヤーからご相談いただける、エンドツーエンドのDX支援サービスです。単なる既存ツールの導入（リセール）ではなく、最先端の開発技術を駆使し、御社にとっての「最適解」をゼロから構築・実装いたします。',
      pillars: [
        {
          number: '01',
          title: 'AI導入コンサルティング ＆ 業務プロセス診断',
          body: '「AIで自社のビジネスはどう変わるか？」という初期段階の疑問から伴走します。専門のコンサルタントとエンジニアが御社の既存の業務フロー（レガシーな運用）を解剖・分析。ROI最大化を阻害するボトルネックを特定し、AI活用による具体的な改善ロードマップと、セキュリティ要件を満たした導入プランを策定いたします。',
        },
        {
          number: '02',
          title: 'オーダーメイド・システム開発 ＆ 業務自動化（BPA）',
          body: '汎用ツールでは解決できない複雑な業務要件に対し、モダンなWebアーキテクチャと生成AIを融合させた専用システムをフルスクラッチ（オーダーメイド）で開発いたします。非生産的な入力作業を最小化するバックオフィス自動化ツールから、独自データを学習させた高度な社内用AIエージェント、顧客向けの自動応答インフラまで、規模を問わず極めて迅速に実装します。',
        },
        {
          number: '03',
          title: '実践的AI研修 ＆ 組織実装・ガバナンス支援',
          body: '「システムを作って終わり」ではありません。導入した最先端のAIツールを、現場の社員様が安全かつ効果的に使いこなせるようになるまで徹底的にサポートします。企業向けのプロンプトエンジニアリング研修や、機密情報漏洩を防ぐためのAI利用ガイドライン（ガバナンス）の策定支援など、組織全体が「AIネイティブ」へと生まれ変わるための教育・伴走支援を提供いたします。',
        },
      ],
    },
  },
  en: {
    label: 'Our Solutions',
    heading: 'Core Business Solutions',
    intro: 'We provide a suite of solutions designed to align with your business characteristics, simultaneously transforming frontline operations and achieving management results.',
    consultCta: 'Consultation',
    docsCta: 'Request Materials',
    note: '(*Projected improvements and cost reductions are simulated estimates and do not constitute a complete guarantee of actual outcomes.)',
    tailoredTag: 'Custom Implementation Support',
    tailoredHeading: 'We provide enterprise-grade implementation programs customized to specific requirements.',
    tailoredBody:
      'From core system integration and operational design to holistic optimization involving legal and tax considerations, we provide comprehensive support aligning with both management and frontline needs.',
    imageAlt: 'A refined luxury hotel lobby',
    solutions: [
      {
        tag: 'Next-Gen LINE Mobile Order & AI-CRM',
        name: 'F&B Infrastructure: Turning Daily Orders into Loyal Customers',
        summary: 'A next-generation ordering system that resolves chronic labor shortages and maximizes ROI.',
        description:
          'Delivering a frictionless, smartphone-based ordering experience that significantly reduces floor operational load. Captured data syncs automatically with the CRM, driving autonomous, highly profitable retention strategies without relying on uniform discounts.',
        points: [
          'Intuitive Ordering: Guests simply scan a QR code. The menu instantly launches within the familiar LINE app, featuring UI designed to promote additional orders, simultaneously boosting average spend and cutting labor costs.',
          'Integrated Customer Database: Prompting users to add the official LINE account during ordering accurately accumulates purchase data ("who, when, what").',
          'Data-Driven AI CRM: AI executes personalized promotions at optimal times based on accumulated data, automating high-margin retention strategies.',
        ],
      },
      {
        tag: 'SendThanks',
        name: 'Digital Tipping & HR Support SaaS for Hospitality',
        summary: 'Translating guest emotion into gratitude for frontline staff.',
        description:
          'A next-generation platform that delivers inbound travelers\' "emotion" directly to frontline staff as "gratitude (tips)." No dedicated app is required-smooth payments are processed via Apple Pay. Designed not to interfere with existing POS systems, it automatically calculates and distributes collected funds as corporate revenue and lawful allowances, contributing to staff retention and enhanced recruitment. (*Business model patent pending)',
      },
      {
        tag: 'TrustLoop & AI-DX Consulting',
        name: 'AI Implementation & Reputation Management for Professionals',
        summary: 'Implementation support boosting both credibility and productivity.',
        description:
          '"TrustLoop" ensures appropriate collection of high-satisfaction feedback to enhance online brand credibility (E-E-A-T). Furthermore, we develop advanced operational improvement solutions for professionals, such as AI-driven website generation and automated phone systems. Built on a secure design requiring final verification by human experts, it achieves drastic efficiency improvements in non-productive back-office tasks.',
      },
    ],
    enterpriseDxSolution: {
      tag: 'Enterprise AI & DX Solutions',
      title: 'Comprehensive AI Integration to Solve Business Challenges',
      lead: 'From initial conception to custom development and organizational adoption.',
      description:
        'An end-to-end DX support service for high-level management challenges such as, "We want to adopt AI but don\'t know where to apply it," or "Our legacy systems are inefficient." We don\'t just resell existing tools; we utilize cutting-edge technologies to build and implement the optimal solution from scratch.',
      pillars: [
        {
          number: '01',
          title: 'AI Consulting & Business Process Diagnosis',
          body: 'We partner with you from the initial question: "How will AI change our business?" Our consultants and engineers dissect your legacy workflows to identify bottlenecks hindering ROI maximization, formulating a concrete improvement roadmap and a secure deployment plan.',
        },
        {
          number: '02',
          title: 'Custom Enterprise Development & BPA',
          body: 'For complex requirements beyond generic tools, we build bespoke systems combining modern web architectures with generative AI. From back-office automation that minimizes manual entry to secure internal AI agents, we deploy agile solutions tailored to your scale.',
        },
        {
          number: '03',
          title: 'Practical AI Training & Governance',
          body: 'Implementation is not the end. We support your team until they can safely and effectively use the new tools. We provide prompt engineering training and draft AI governance guidelines to prevent data leaks, ensuring complete organizational adoption.',
        },
      ],
    },
  },
  zh: {
    label: '核心解决方案',
    heading: '主要业务与产品',
    intro: '我们提供契合您业务特性的解决方案，在实现一线业务变革的同时，助力达成卓越的经营成果。',
    consultCta: '咨询洽谈',
    docsCta: '索取资料',
    note: '（*注：所列客单价提升、成本削减等数据为基于特定导入模型的模拟预测值，不构成对实际结果的绝对保证。）',
    tailoredTag: '个性化部署支持',
    tailoredHeading: '我们可根据您的特定需求提供企业级的定制化实施方案。',
    tailoredBody:
      '从核心系统对接、运营设计，到包含法务与税务考量的全局优化，我们始终贴近管理层与业务一线，提供全方位陪伴支持。',
    imageAlt: '高端酒店大堂',
    solutions: [
      {
        tag: '新一代 LINE移动端点单与AI-CRM系统',
        name: '将“日常订单”转化为“常客培育”的餐饮基础设施',
        summary: '旨在解决长期人手不足问题，支持可持续店铺运营并最大化投资回报率（ROI）的新一代点单系统。',
        description:
          '提供基于智能手机的无缝点单体验，大幅减轻大堂运营负荷。获取的数据自动与CRM同步，实现不依赖统一打折的高利润率常客复购策略。',
        points: [
          '直观的点餐体验: 顾客仅需扫描桌面二维码，即可在熟悉的LINE应用内打开菜单。促进追加点单的UI设计在提升客单价的同时，大幅降低人工成本。',
          '融入点餐流程的客户沉淀: 以点餐操作为起点，引导用户添加官方LINE好友，精准积累“谁、何时、点了什么”的消费数据。',
          '基于AI的数据驱动CRM: AI根据积累的数据在最佳时机执行个性化促销，自动化高利润率的老客维护策略。',
        ],
      },
      {
        tag: 'SendThanks',
        name: '面向服务及酒店业的数字小费与HR赋能SaaS',
        summary: '将客人的感动转化为对一线员工的实际感谢。',
        description:
          '将入境游客的“感动”转化为“感谢（小费）”传递给一线员工的新一代平台。无需下载专用App，支持Apple Pay等极速支付。采用不干扰现有POS系统的设计，在系统上自动将筹集的资金精准分配为“企业营收”与“合法津贴”，有效防止员工流失并增强招聘吸引力。（※商业模式专利申请中）',
      },
      {
        tag: 'TrustLoop & AI-DX 咨询',
        name: '面向专业机构与B2B顾问的AI部署与声誉管理',
        summary: '同步提升品牌信誉与生产力的落地支持。',
        description:
          '推出SaaS产品“TrustLoop”，妥善收集高满意度反馈，助力提升在线品牌权威性（E-E-A-T）。此外，我们为专业人士开发基于AI的网站自动生成及电话自动回复等高级业务改善方案。以专家最终确认为前提的安全设计，大幅提升非生产性后台业务的效率。',
      },
    ],
    enterpriseDxSolution: {
      tag: '企业级 AI与DX 解决方案',
      title: '解决核心商业挑战的综合AI系统集成',
      lead: '从“如何着手”的初步构想到定制开发与组织内部落地',
      description:
        '针对“想导入AI却不知适用于哪些业务”或“现有系统陈旧低效”等高管层面的痛点，提供端到端的数字化转型（DX）支持。我们不只是转售现有工具，而是运用前沿技术从零开始为您构建并实施“最优解”。',
      pillars: [
        {
          number: '01',
          title: 'AI导入咨询与业务流程诊断',
          body: '从“AI将如何改变业务？”这一初期疑问开始陪伴您。专家深度剖析现有的传统业务流程，找出阻碍ROI最大化的瓶颈，并制定满足安全要求的具体改善路线图。',
        },
        {
          number: '02',
          title: '定制化系统开发与业务流程自动化（BPA）',
          body: '针对通用工具无法满足的复杂需求，融合现代Web架构与生成式AI为您量身定制专属系统。从最大限度减少人工录入的后台自动化系统，到基于专有数据训练的内部AI智能体，均能敏捷部署落地。',
        },
        {
          number: '03',
          title: '实战化AI培训与内部治理支持',
          body: '系统的交付并非终点。我们将确保一线员工能够安全、熟练地使用新系统。从实战化操作培训，到制定防止信息泄露的AI使用规范，我们将全程陪伴，直到技术真正在您的组织内扎根。',
        },
      ],
    },
  },
}

export function SolutionsSection() {
  const { locale } = useLocale()
  const t = copy[locale]

  return (
    <section
      id="solutions"
      className="relative border-t border-border/60 bg-[linear-gradient(180deg,#101f3a_0%,#122445_100%)] py-28 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-16 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Reveal>
              <div className="mb-8 flex items-center gap-4">
                <span className="h-px w-12 bg-primary" aria-hidden="true" />
                <span className="text-xs font-light tracking-[0.2em] text-primary">{t.label}</span>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="max-w-2xl font-serif text-3xl font-light leading-tight text-foreground text-balance lg:text-5xl">
                {t.heading}
              </h2>
            </Reveal>
          </div>
          <Reveal delay={160}>
            <p className="max-w-sm text-sm font-light leading-relaxed text-muted-foreground text-pretty">
              {t.intro}
            </p>
          </Reveal>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {t.solutions.map((solution, i) => (
            <Reveal key={solution.name} delay={i * 120}>
              <article className="group flex h-full flex-col border border-border/60 bg-card transition-colors duration-500 hover:border-primary/50">
                <div className="flex items-center justify-between border-b border-border/60 px-8 py-6">
                  <span className="text-xs font-light tracking-[0.15em] text-primary">{solution.tag}</span>
                  <ArrowUpRight
                    className="h-5 w-5 text-muted-foreground transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                    aria-hidden="true"
                  />
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <h3 className="text-2xl font-medium tracking-tight text-foreground">{solution.name}</h3>
                  <p className="mt-1 text-sm font-light text-muted-foreground">{solution.summary}</p>
                  {solution.points ? null : (
                    <p className="mt-6 text-sm font-light leading-relaxed text-muted-foreground text-pretty">
                      {solution.description}
                    </p>
                  )}
                  {solution.points ? (
                    <div className="mt-6 space-y-4">
                      <p className="text-sm font-light leading-relaxed text-muted-foreground text-pretty">
                        {solution.description}
                      </p>
                      {solution.points.map((point) => (
                        <p
                          key={point}
                          className="border-l border-primary/40 pl-4 text-sm font-light leading-relaxed text-muted-foreground text-pretty"
                        >
                          {point}
                        </p>
                      ))}
                    </div>
                  ) : null}
                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href={withBasePath('/?inquiry=consultation#contact')}
                      className="inline-flex items-center justify-center border border-primary/50 px-4 py-2 text-xs font-light tracking-wide text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                    >
                      {t.consultCta}
                    </a>
                    <a
                      href={withBasePath('/?inquiry=materials#contact')}
                      className="inline-flex items-center justify-center border border-border px-4 py-2 text-xs font-light tracking-wide text-foreground transition-colors hover:border-primary hover:text-primary"
                    >
                      {t.docsCta}
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={80}>
          <article className="mt-10 group flex h-full flex-col border border-border/60 bg-card transition-colors duration-500 hover:border-primary/50">
            <div className="flex items-center justify-between border-b border-border/60 px-8 py-6">
              <span className="text-xs font-light tracking-[0.15em] text-primary">
                {t.enterpriseDxSolution.tag}
              </span>
              <ArrowUpRight
                className="h-5 w-5 text-muted-foreground transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                aria-hidden="true"
              />
            </div>
            <div className="flex flex-1 flex-col p-8">
              <h3 className="text-2xl font-medium tracking-tight text-foreground">
                {t.enterpriseDxSolution.title}
              </h3>
              <p className="mt-2 text-sm font-light leading-relaxed text-muted-foreground text-pretty">
                〜 {t.enterpriseDxSolution.lead} 〜
              </p>
              <p className="mt-6 text-sm font-light leading-relaxed text-muted-foreground text-pretty">
                {t.enterpriseDxSolution.description}
              </p>

              <div className="mt-6 space-y-4">
                {t.enterpriseDxSolution.pillars.map((pillar) => (
                  <p
                    key={pillar.number}
                    className="border-l border-primary/40 pl-4 text-sm font-light leading-relaxed text-muted-foreground text-pretty"
                  >
                    {pillar.number}. {pillar.title}: {pillar.body}
                  </p>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={withBasePath('/?inquiry=consultation#contact')}
                  className="inline-flex items-center justify-center border border-primary/50 px-4 py-2 text-xs font-light tracking-wide text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  {t.consultCta}
                </a>
                <a
                  href={withBasePath('/?inquiry=materials#contact')}
                  className="inline-flex items-center justify-center border border-border px-4 py-2 text-xs font-light tracking-wide text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  {t.docsCta}
                </a>
              </div>
            </div>
          </article>
        </Reveal>

        <Reveal delay={120}>
          <p className="mt-8 text-xs font-light leading-relaxed text-muted-foreground/80">{t.note}</p>
        </Reveal>

        <Reveal delay={140}>
          <div className="mt-8 grid overflow-hidden border border-border/60 lg:grid-cols-2">
            <div className="relative min-h-[260px] lg:min-h-full">
              <Image
                src={withBasePath('/luxury-hospitality.png')}
                alt={t.imageAlt}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center bg-card p-10 lg:p-14">
              <span className="text-xs font-light tracking-[0.2em] text-primary">{t.tailoredTag}</span>
              <h3 className="mt-6 font-serif text-2xl font-light leading-snug text-foreground text-balance lg:text-3xl">
                {t.tailoredHeading}
              </h3>
              <p className="mt-6 max-w-md text-sm font-light leading-relaxed text-muted-foreground text-pretty">
                {t.tailoredBody}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
