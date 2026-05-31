export type NewsLocale = 'ja' | 'en' | 'zh'

export type NewsTranslation = {
  date: string
  category: string
  title: string
  excerpt: string
  content: string[]
}

export type NewsItem = {
  slug: string
  publishedAt: string
  translations: Record<NewsLocale, NewsTranslation>
}

export const newsItems: NewsItem[] = [
  {
    slug: 'company-name-changed-to-ailo',
    publishedAt: '2026-05-29',
    translations: {
      ja: {
        date: '2026年5月29日',
        category: 'プレスリリース',
        title: '社名変更のお知らせ',
        excerpt: '当社は2日前に、会社名をCyberFreeks合同会社から合同会社Ailoへ変更いたしました。',
        content: [
          '当社は2026年5月29日付で、会社名をCyberFreeks合同会社から合同会社Ailoへ変更いたしました。',
          '今回の社名変更は、AI・DX・業務実装支援を中核とする当社の事業方針をより明確に示すためのものです。今後も、顧客企業の本番運用で成果を出すサービス提供に注力してまいります。',
        ],
      },
      en: {
        date: 'May 29, 2026',
        category: 'Press Release',
        title: 'Company Name Change Announcement',
        excerpt: 'Two days ago, we changed our company name from CyberFreeks LLC to Ailo LLC.',
        content: [
          'Effective May 29, 2026, we changed our company name from CyberFreeks LLC to Ailo LLC.',
          'This change reflects our focus on AI, DX, and production-ready implementation support. We will continue to deliver services that create measurable outcomes in real operations.',
        ],
      },
      zh: {
        date: '2026年5月29日',
        category: '新闻发布',
        title: '公司更名公告',
        excerpt: '两天前，本公司已将公司名称由CyberFreeks合同会社变更为合同会社Ailo。',
        content: [
          '本公司已于2026年5月29日将公司名称由CyberFreeks合同会社变更为合同会社Ailo。',
          '此次更名旨在更清晰地体现我们以AI、DX与业务落地实施为核心的发展方向。未来我们将继续专注于为客户提供可在本番环境稳定运行并产生实效的服务。',
        ],
      },
    },
  },
  {
    slug: 'sendthanks-production-launch',
    publishedAt: '2026-05-22',
    translations: {
      ja: {
        date: '2026年5月22日',
        category: '本番運用開始',
        title: 'SendThanksの本番運用を開始しました',
        excerpt: 'ホスピタリティ業界向けデジタルチップ&HR支援SaaS「SendThanks」の本番運用を開始しました。',
        content: [
          'ホスピタリティ業界向けデジタルチップ&HR支援SaaS「SendThanks」の本番運用を開始しました。',
          '専用アプリ不要での決済導線や、集まった資金の自動集計・分配機能を含む主要機能を提供し、現場スタッフへの還元強化と運用負荷削減を支援します。',
        ],
      },
      en: {
        date: 'May 22, 2026',
        category: 'Production Launch',
        title: 'SendThanks is now live in production',
        excerpt: 'We have started production operations for SendThanks, our digital tipping and HR support SaaS.',
        content: [
          'SendThanks, our digital tipping and HR support SaaS for hospitality teams, is now live in production.',
          'Core capabilities include app-free payment flows and automated fund aggregation/distribution, helping operators reduce workload while improving frontline recognition.',
        ],
      },
      zh: {
        date: '2026年5月22日',
        category: '正式上线',
        title: 'SendThanks已开始本番运用',
        excerpt: '面向服务业的数字小费与HR支援SaaS「SendThanks」已开始正式上线运用。',
        content: [
          '面向服务业的数字小费与HR支援SaaS「SendThanks」已开始本番运用。',
          '已提供无需专用App的支付流程，以及资金自动汇总与分配等核心能力，帮助门店降低运营负担并强化对一线员工的激励。',
        ],
      },
    },
  },
  {
    slug: 'trustloop-production-launch',
    publishedAt: '2026-05-10',
    translations: {
      ja: {
        date: '2026年5月10日',
        category: '本番運用開始',
        title: 'TrustLoopの本番運用を開始しました',
        excerpt: 'レピュテーション管理SaaS「TrustLoop」の本番運用を開始し、顧客フィードバック運用を標準化しました。',
        content: [
          '士業・B2Bコンサルタント向けレピュテーション管理SaaS「TrustLoop」の本番運用を開始しました。',
          '高満足度フィードバックの収集から運用定着までを一気通貫で支援し、オンライン上の信頼性向上と業務効率化の両立を実現します。',
        ],
      },
      en: {
        date: 'May 10, 2026',
        category: 'Production Launch',
        title: 'TrustLoop is now live in production',
        excerpt: 'TrustLoop is now live, standardizing customer feedback operations and reputation workflows.',
        content: [
          'TrustLoop, our reputation management SaaS for professional firms and B2B consultants, is now running in production.',
          'The launch supports end-to-end workflows from collecting high-satisfaction feedback to daily operational adoption, improving both online trust and team productivity.',
        ],
      },
      zh: {
        date: '2026年5月10日',
        category: '正式上线',
        title: 'TrustLoop已开始本番运用',
        excerpt: '声誉管理SaaS「TrustLoop」已正式上线，并推动客户反馈流程标准化。',
        content: [
          '面向专业机构与B2B顾问的声誉管理SaaS「TrustLoop」已进入本番运用。',
          '系统覆盖高满意反馈的收集到日常运营落地的完整流程，帮助客户同时提升线上信任度与团队效率。',
        ],
      },
    },
  },
  {
    slug: 'line-order-ai-crm-production-launch',
    publishedAt: '2026-04-28',
    translations: {
      ja: {
        date: '2026年4月28日',
        category: '本番運用開始',
        title: 'LINEモバイルオーダー&AI-CRMの本番運用を開始しました',
        excerpt: '飲食業向けLINEモバイルオーダー&AI-CRMシステムの本番運用を開始しました。',
        content: [
          '飲食業向け「LINEモバイルオーダー&AI-CRMシステム」の本番運用を開始しました。',
          '注文データとCRMを連携し、追加注文の促進とリピーター施策の自動化を一体で運用できる仕組みを提供しています。',
        ],
      },
      en: {
        date: 'Apr 28, 2026',
        category: 'Production Launch',
        title: 'LINE Mobile Order & AI-CRM is now live',
        excerpt: 'Our LINE Mobile Order & AI-CRM system for restaurants has entered production operations.',
        content: [
          'Our LINE Mobile Order & AI-CRM system for food and beverage operators is now running in production.',
          'By connecting order data with CRM workflows, the platform supports both upsell opportunities and automated repeat-customer campaigns in a single operational flow.',
        ],
      },
      zh: {
        date: '2026年4月28日',
        category: '正式上线',
        title: 'LINE移动点单&AI-CRM系统已开始本番运用',
        excerpt: '面向餐饮行业的LINE移动点单&AI-CRM系统已进入正式上线阶段。',
        content: [
          '面向餐饮行业的「LINE移动点单&AI-CRM系统」已开始本番运用。',
          '系统将订单数据与CRM流程联动，支持追加点单与复购触达策略的一体化运营。',
        ],
      },
    },
  },
]

export function getNewsItem(slug: string) {
  return newsItems.find((item) => item.slug === slug)
}
