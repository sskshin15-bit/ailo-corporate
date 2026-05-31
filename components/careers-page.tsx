'use client'

import { useLocale } from '@/components/locale-provider'
import { withBasePath } from '@/lib/site-path'

const copy = {
  ja: {
    label: 'Careers',
    heading: '採用情報',
    intro:
      'Ailoは、AI・リーガルテック・SaaSを横断して事業を一気に伸ばす、少数精鋭のスタートアップです。職種の境界を越えて、0→1と1→10を同時に動かせる仲間を募集しています。',
    roleGroupsLabel: '募集中の職種カテゴリ',
    roleGroups: [
      {
        category: 'セールス・事業開発職',
        hiring: '積極採用中',
        description: '顧客課題の解像度を上げ、提案から初期導入までを一気通貫で前進させるポジションです。',
        roles: ['営業 / アカウントエグゼクティブ（法人向け）', '事業開発 / BizDev'],
      },
      {
        category: 'グロース・顧客支援職',
        hiring: '注力採用中',
        description: '導入後の成果創出にコミットし、LTVを伸ばし続ける仕組みをつくるポジションです。',
        roles: ['カスタマーサクセス', 'マーケティング / グロース'],
      },
      {
        category: 'プロダクト・開発職',
        hiring: '継続採用中',
        description: '仮説設計から実装、改善までを高速に回し、プロダクトの成長曲線をつくるポジションです。',
        roles: [
          'フルスタックエンジニア',
          'AIソリューションエンジニア',
          'プロダクトマネージャー',
          'プロジェクトマネージャー',
        ],
      },
    ],
    compensation: {
      title: '報酬・インセンティブ',
      lead: '成果に対して、スタートアップ水準ではなく高水準で還元します。',
      items: [
        '想定年収レンジ: 700万円 - 1,500万円（スキル・実績に応じて個別提示）',
        '成果連動インセンティブ: 四半期ごとに評価し、上限なしで支給',
        'セールス職は受注実績に応じたコミッション制度あり',
      ],
    },
    sections: [
      {
        title: '求める人物像',
        items: [
          '顧客課題を自分ごと化し、解決までコミットできる方',
          '不確実性を楽しみながら、仮説検証を高速で回せる方',
          '肩書きに縛られず、必要な役割を自ら取りにいける方',
        ],
      },
      {
        title: '働き方',
        items: [
          'リモート中心で、成果に合わせて柔軟に働ける環境',
          '少数精鋭で、意思決定と実行の距離が短いチーム',
          '年齢・社歴ではなく、アウトプットで評価',
          '高いコミットメントを歓迎し、重要局面では短期集中的に取り組む文化',
          '勤務条件は法令および社内規程に基づいて設計・運用',
        ],
      },
    ],
    cta: '採用について問い合わせる',
    ctaHint: '履歴書・職務経歴書に加え、GitHubやポートフォリオなど実績が分かる情報があればぜひお送りください。',
    backHome: 'トップページへ戻る',
  },
  en: {
    label: 'Careers',
    heading: 'Careers',
    intro:
      'Ailo is a high-ownership startup accelerating growth across AI, Legal-Tech, and SaaS. We are hiring builders who can drive both 0-to-1 and 1-to-10 execution across business, growth, and product.',
    roleGroupsLabel: 'Open Role Categories',
    roleGroups: [
      {
        category: 'Sales & Business Development',
        hiring: 'Hiring actively',
        description: 'Own client discovery, solution design, and early rollout with high speed and accountability.',
        roles: ['Sales / Account Executive (B2B)', 'Business Development / BizDev'],
      },
      {
        category: 'Growth & Customer Success',
        hiring: 'Priority hiring',
        description: 'Drive retention, expansion, and measurable customer outcomes after launch.',
        roles: ['Customer Success', 'Marketing / Growth'],
      },
      {
        category: 'Product & Engineering',
        hiring: 'Hiring continuously',
        description: 'Run fast experimentation from concept to implementation and scale product impact.',
        roles: ['Full-Stack Engineer', 'AI Solutions Engineer', 'Product Manager', 'Project Manager'],
      },
    ],
    compensation: {
      title: 'Compensation & Incentives',
      lead: 'We offer top-tier packages with strong upside tied to impact.',
      items: [
        'Target annual compensation: JPY 7M - 15M (tailored by scope and track record)',
        'Quarterly performance incentives with uncapped upside',
        'Sales roles include deal-based commission plans',
      ],
    },
    sections: [
      {
        title: 'What We Value',
        items: [
          'Ownership mindset toward client challenges',
          'Ability to operate independently in ambiguous situations',
          'Decision-making from both technical and business perspectives',
        ],
      },
      {
        title: 'How We Work',
        items: [
          'Flexible work style depending on responsibilities',
          'Small high-trust team focused on outcomes',
          'Remote-first collaboration with fully online work available',
          'High commitment is valued, with focused sprints during critical phases',
          'Working conditions are operated in line with applicable laws and company policy',
        ],
      },
    ],
    cta: 'Contact About Careers',
    ctaHint: 'Please share your resume/CV and GitHub or portfolio URL.',
    backHome: 'Back to Home',
  },
  zh: {
    label: 'Careers',
    heading: '招聘信息',
    intro:
      'Ailo是一家高速成长的创业团队，横跨AI、法律科技与SaaS，专注把关键业务问题快速落地。我们正在寻找能够同时推动0到1与1到10的人才加入。',
    roleGroupsLabel: '在招岗位类别',
    roleGroups: [
      {
        category: '销售与业务开发',
        hiring: '重点招聘中',
        description: '负责客户洞察、方案设计与早期导入推进，强调速度与结果。',
        roles: ['销售 / 企业客户经理（B2B）', '业务开发 / BizDev'],
      },
      {
        category: '增长与客户成功',
        hiring: '优先招聘中',
        description: '围绕客户长期成果与续约增长，持续提升留存与扩张表现。',
        roles: ['客户成功', '市场增长 / Growth'],
      },
      {
        category: '产品与开发岗位',
        hiring: '持续招聘中',
        description: '从方案到上线再到迭代，以高频实验驱动产品增长。',
        roles: ['全栈工程师', 'AI解决方案工程师', '产品经理', '项目经理'],
      },
    ],
    compensation: {
      title: '薪酬与激励',
      lead: '提供高竞争力薪酬，并以结果为导向进行高比例激励。',
      items: [
        '参考年薪范围：700万 - 1,500万日元（根据能力与履历综合评估）',
        '按季度发放绩效激励，上不封顶',
        '销售岗位提供与签约业绩挂钩的佣金机制',
      ],
    },
    sections: [
      {
        title: '我们期待的人才',
        items: ['能以主人翁意识理解客户课题', '在高不确定性环境中仍可自主推进', '兼具技术与商业视角进行判断'],
      },
      {
        title: '工作方式',
        items: [
          '根据职责设计灵活工作方式',
          '以成果与信任为核心的小团队协作',
          '支持无需到岗的线上远程办公',
          '鼓励高投入，在关键阶段进行短周期高强度冲刺',
          '工作制度依据适用法律与公司制度执行',
        ],
      },
    ],
    cta: '咨询招聘事宜',
    ctaHint: '请附上简历、工作经历及 GitHub 或作品集链接。',
    backHome: '返回首页',
  },
} as const

export function CareersPage() {
  const { locale } = useLocale()
  const t = copy[locale]

  return (
    <main className="bg-[linear-gradient(180deg,#0b1c38_0%,#101f3a_55%,#14274a_100%)] pt-28 pb-20">
      <section className="mx-auto max-w-4xl px-6 lg:px-10">
        <p className="text-xs font-light tracking-[0.2em] text-primary">{t.label}</p>
        <h1 className="mt-5 font-serif text-4xl font-light text-foreground lg:text-5xl">{t.heading}</h1>
        <p className="mt-8 text-sm font-light leading-relaxed text-muted-foreground">{t.intro}</p>

        <div className="mt-10">
          <h2 className="text-lg font-medium text-foreground">{t.roleGroupsLabel}</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {t.roleGroups.map((group) => (
              <article key={group.category} className="rounded-sm border border-border/60 bg-card/70 p-5">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-sm font-medium text-foreground">{group.category}</h3>
                  <span className="text-xs font-light tracking-wide text-primary">{group.hiring}</span>
                </div>
                <p className="mt-3 text-sm font-light leading-relaxed text-muted-foreground">{group.description}</p>
                <ul className="mt-4 space-y-2">
                  {group.roles.map((role) => (
                    <li key={role} className="text-sm font-light leading-relaxed text-muted-foreground">
                      - {role}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        <article className="mt-10 rounded-sm border border-primary/30 bg-card/70 p-6">
          <h2 className="text-lg font-medium text-foreground">{t.compensation.title}</h2>
          <p className="mt-3 text-sm font-light leading-relaxed text-muted-foreground">{t.compensation.lead}</p>
          <ul className="mt-4 space-y-2">
            {t.compensation.items.map((item) => (
              <li key={item} className="text-sm font-light leading-relaxed text-muted-foreground">
                - {item}
              </li>
            ))}
          </ul>
        </article>

        <div className="mt-10 space-y-8">
          {t.sections.map((section) => (
            <article key={section.title} className="border-l border-primary/40 pl-5">
              <h2 className="text-lg font-medium text-foreground">{section.title}</h2>
              <ul className="mt-4 space-y-2">
                {section.items.map((item) => (
                  <li key={item} className="text-sm font-light leading-relaxed text-muted-foreground">
                    - {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-sm border border-border/60 bg-card/70 p-6">
          <a
            href={withBasePath('/?inquiry=careers#contact')}
            className="inline-flex border border-primary/50 px-5 py-2.5 text-sm font-light text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            {t.cta}
          </a>
          <p className="mt-4 text-sm font-light leading-relaxed text-muted-foreground">{t.ctaHint}</p>
        </div>

        <a
          href={withBasePath('/#top')}
          className="mt-12 inline-flex border border-border px-5 py-2.5 text-sm font-light text-foreground transition-colors hover:border-primary hover:text-primary"
        >
          {t.backHome}
        </a>
      </section>
    </main>
  )
}
