'use client'

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

const SOLUTION_ANCHORS = [
  'solution-line-order-ai-crm',
  'solution-sendthanks-tip',
  'solution-sendthanks-feedback',
  'solution-trustloop',
  'solution-ai-web-digital-marketing',
] as const

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
    intro:
      '現場の負担を減らし、経営の数字を動かす。お客様の事業特性に寄り添った最適な設計で、確実な成果へ導くソリューションをご提供します。',
    consultCta: '相談する',
    docsCta: '資料請求',
    note: '（※記載の客単価向上・コスト削減等の効果数値は、導入モデルに基づく当社シミュレーション値であり、実際の成果を完全に保証するものではありません）',
    tailoredTag: '個別実装支援',
    tailoredHeading: 'エンタープライズ水準の個別要件にも対応',
    tailoredBody:
      '複雑な基幹システムとの連携や厳格な運用設計が求められる大企業様向けの個別実装も承ります。法務・税務リスクを踏まえ、経営陣と現場の双方が安心できる全体最適化を実現します。',
    imageAlt: '企業向けシステム連携を示すネットワーク図',
    solutions: [
      {
        tag: '次世代型 LINEモバイルオーダー ＆ AI-CRMシステム',
        name: '「日々の注文」を「リピーター育成」へと直結させる飲食インフラ',
        summary: '慢性的な人手不足を解消しながら、店舗の投資対効果（ROI）最大化を支援します。',
        description:
          'お客様のスマートフォンを起点としたストレスのない注文体験が、現場のオペレーション負荷を劇的に引き下げます。さらに、注文と同時に蓄積されるデータをAIが解析。「一律の値引き」から脱却し、利益率の高いリピーター育成を自律的に回す仕組みを構築します。',
        points: [
          '売上と効率を両立するUI: QRコードを読み込むだけでLINEアプリが起動。追加注文を自然に促す設計が、客単価の向上と省人化を叶えます。',
          '意識させない顧客リスト化: 注文アクションの導線上で公式LINEへの登録を促し、貴重な購買データをシステムへ精緻に蓄積します。',
          'AIが最適な追客を自動化: 取得データに基づき、AIが一人ひとりに最適なタイミングで販促を実行。効率的なリピーター獲得を実現します。',
        ],
      },
      {
        tag: 'SendThanks（センドサンクス）— チップ機能',
        name: 'ホスピタリティ業界向け デジタルチップ基盤',
        summary: '専用アプリ不要。既存のPOSレジに変更なしで導入できる、インバウンド対応チップインフラ。',
        description:
          'インバウンド旅行者からのチップを、専用アプリ不要でスムーズに受け取れる次世代インフラです。既存のPOSレジ環境を変えずに導入でき、集まった資金はシステム上で「法人の売上」と「適法な手当」へ自動集計・分配。税務面のリスクをクリアした設計で、サービス業の離職防止と採用力強化という経済効果を生み出します。（※関連技術について特許出願中）',
        points: [
          '受取動線の設計 ＆ 社員マニュアル制作支援: QRコードの配置計画からスタッフへの案内フローまで、チップを自然に受け取れる現場環境を構築。運用開始をスムーズにするオリジナルマニュアルの制作もサポートします。',
          'ニーズに応じたオーダーメイドカスタマイズ: 店舗規模・業態・運用体制に合わせ、必要な機能だけを組み合わせて導入可能。スモールスタートから本格展開まで柔軟に対応します。',
        ],
      },
      {
        tag: 'SendThanks（センドサンクス）— HR機能',
        name: 'スタッフモチベーション ＆ フィードバック管理',
        summary: '感動を可視化し、現場のやりがいを高め、離職を防ぐ従業員配慮型HR機能。',
        description:
          'ゲストからの感謝コメントをリアルタイムで担当スタッフへ届け、「認められている」実感が現場の活力を生み出します。批判的な声はAIが攻撃的な表現を穏やかな業務改善の示唆へ言い換えてから届けるか、経営者のみへルーティングするかを選択可能。心象を守りながら、チームの成長と定着を同時に実現します。',
        points: [
          'お客様の声をリアルタイムで届け、モチベーションを高める: ゲストから寄せられた感謝のコメントは、担当スタッフへ即時通知。「認められている」という実感が現場の活力を生み出し、離職防止に直結します。',
          'ネガティブフィードバックの知的フィルタリング: 批判的なコメントは経営者のみへ転送するルートと、AIが攻撃的な表現を穏やかな業務改善の示唆に言い換えてスタッフへ届けるルートを選択可能。心象を損なわずに改善サイクルを回します。',
        ],
      },
      {
        tag: 'TrustLoop & AI-DX Consulting',
        name: '士業・B2Bコンサルタント向け AI実装・レピュテーション管理',
        summary: '「選ばれるための信頼構築」と「非コア業務のAI自動化」を両立。',
        description:
          '顧客満足度の高いフィードバックを収集し、オンライン上のブランド信頼性（E-E-A-T）を底上げするSaaS「TrustLoop」を展開。あわせて、AIを活用したHP自動生成や電話自動応答など、士業・B2B領域に特化したDXソリューションを提供します。専門家による最終確認プロセスを組み込んだ安全設計により、リスクを抑えながら生産性を飛躍的に高めます。',
      },
      {
        tag: 'AI Web制作 & デジタルマーケティング支援',
        name: 'HP制作・SNS運用・MEO対策・Googleマップレビュー返信 — LLMアンサンブルでブランドを守る',
        summary: '複数のトップLLMが多数決で最高品質を担保。一貫したブランドイメージを保ちながら、あらゆるデジタル接点を自動最適化します。',
        description:
          '単一AIに依存せず、複数の最先端LLMへ同時に生成指示を出し、出力を多数決・品質スコアリングでフィルタリングする「アンサンブル生成フロー」を採用。どの出力もブランドトーン・禁止表現・法令ガイドラインに照合してから公開・返信するため、一貫したブランドイメージを損なうことなく最高品質のコンテンツを量産できます。',
        points: [
          'HP制作 & コンテンツ自動更新: 貴社のブランドガイドラインをLLMに学習させ、SEOに強い高品質なウェブサイトをスピーディに制作。ニュースやキャンペーンページなど定常更新もAIが自動ドラフトし、担当者の承認ワンクリックで公開。',
          'SNS運用 & ブランドボイス統一: 各SNSプラットフォームの最新トレンドを分析しながら、複数LLMが原稿を競作。多数決スコアリングで選ばれた投稿のみをスケジュール公開するため、炎上リスクを抑えながらエンゲージメントを最大化します。',
          'MEO対策 分析ツール: Googleビジネスプロフィールの順位・クチコミ数・評価スコアをリアルタイム追跡。競合店舗との比較レポートを自動生成し、次の一手（キーワード追加・写真投稿 etc.）をAIがレコメンドします。',
          'Googleマップ レビュー自動返信: 新着レビューをトリガーに複数LLMが返信文を生成。感情分析・ブランドトーン検証・禁止ワードチェックを多数決で通過した最高品質の文面のみをオーナーへ提案または自動返信。低評価レビューはエスカレーション通知で経営者が即時把握できます。',
        ],
      },
    ],
    enterpriseDxSolution: {
      tag: 'エンタープライズAI & DXソリューション',
      title: '経営課題を解決する包括的AIインテグレーション',
      lead: '「何から始めるべきか」の戦略策定から、専用システムの開発、組織への定着まで。',
      description:
        '「AIを活用したいが適用範囲が不明確」「レガシーシステムから脱却したい」といった経営層の悩みに対し、構想段階から伴走するエンドツーエンドのDX支援です。ツールの代理販売（リセール）ではなく、最先端のアーキテクチャを用いて御社にとっての「最適解」をゼロから設計・実装します。',
      pillars: [
        {
          number: '01',
          title: 'AI導入コンサルティング ＆ 業務プロセス診断',
          body: '「AIで自社のビジネスはどう変わるか」という問いから伴走。専門チームが業務プロセスを解剖し、ROIを最大化する確実な導入ロードマップとセキュリティ基準を描き出します。',
        },
        {
          number: '02',
          title: 'オーダーメイド・システム開発 ＆ 業務自動化（BPA）',
          body: '既存のSaaSでは解決できない独自の業務要件に対し、生成AIを融合させた専用システムをフルスクラッチで開発。データ学習済みの社内AIや顧客向け自動応答など、高度な要件を迅速に形にします。',
        },
        {
          number: '03',
          title: '実践的AI研修 ＆ 組織実装・ガバナンス支援',
          body: 'システムは「現場が使いこなして」初めて価値を生みます。実践的な研修に加え、機密情報漏洩を防ぐガバナンス（利用ガイドライン）策定まで伴走し、組織全体をAIネイティブへと変革します。',
        },
      ],
    },
  },
  en: {
    label: 'Our Solutions',
    heading: 'Core Business Solutions',
    intro:
      'Reduce frontline workload while improving core business metrics. We deliver tailored solutions aligned with your operating model to produce reliable outcomes.',
    consultCta: 'Consultation',
    docsCta: 'Request Materials',
    note:
      '(*Projected increases in average spend and cost reductions are simulation-based estimates and do not guarantee actual outcomes.)',
    tailoredTag: 'Custom Implementation Support',
    tailoredHeading: 'We support enterprise-grade custom implementation requirements.',
    tailoredBody:
      'We also support enterprise projects that require complex core-system integration and strict operational design. Incorporating legal and tax considerations, we optimize implementation so both executives and frontline teams can proceed with confidence.',
    imageAlt: 'Network diagram representing enterprise system integration',
    solutions: [
      {
        tag: 'Next-Gen LINE Mobile Order & AI-CRM',
        name: 'F&B Infrastructure: Turning Daily Orders into Loyal Customers',
        summary: 'Resolve chronic labor shortages while maximizing store-level ROI.',
        description:
          'A low-friction smartphone ordering experience significantly reduces frontline workload. At the same time, AI analyzes order data in real time, replacing one-size-fits-all discounting with autonomous, high-margin retention programs.',
        points: [
          'UI designed for both growth and efficiency: A quick QR scan launches LINE instantly. An upsell-friendly flow increases average order value while reducing staffing pressure.',
          'Seamless customer capture: The ordering journey naturally prompts official LINE registration, building precise, high-value purchase data over time.',
          'AI-powered follow-up automation: Using behavioral data, AI executes personalized outreach at the right moment to improve repeat conversion.',
        ],
      },
      {
        tag: 'SendThanks — Digital Tipping',
        name: 'Digital Tipping Infrastructure for Hospitality',
        summary: 'No dedicated app required. Deploy alongside your existing POS with zero disruption.',
        description:
          'A next-generation infrastructure that lets inbound travelers tip smoothly without a dedicated app. It works with existing POS environments and automatically allocates funds as corporate revenue and lawful allowances. Built with tax and compliance considerations in mind, it helps hospitality operators reduce turnover and strengthen hiring competitiveness. (*Related technology patent pending)',
        points: [
          'Tipping flow design & staff manual creation: We design the complete guest-facing tipping journey — from QR placement to staff briefing scripts — and produce ready-to-use operational manuals to get your team up and running with confidence.',
          'Fully customizable to your operation: Combine only the features you need, sized to your venue, team structure, and rollout pace. From a single-location pilot to full-scale deployment, the platform adapts to you.',
        ],
      },
      {
        tag: 'SendThanks — Staff Feedback',
        name: 'Staff Motivation & Feedback Management',
        summary: 'Turn guest appreciation into daily recognition — and negative comments into growth, not morale damage.',
        description:
          'Guest thank-you messages are delivered in real time to the staff who served them, building a culture of genuine recognition that keeps people engaged. Critical comments can be routed exclusively to management, or an AI layer rewrites harsh language into constructive improvement suggestions before delivery — protecting team morale while driving meaningful change.',
        points: [
          'Deliver guest appreciation to staff in real time: Thank-you messages from guests are pushed instantly to the staff who served them. Feeling genuinely recognized fuels daily motivation and reduces turnover at the source.',
          'Intelligent filtering of negative feedback: Critical comments can be routed exclusively to management, or an AI layer rewrites harsh language into constructive improvement suggestions before delivery — keeping morale intact while driving meaningful change.',
        ],
      },
      {
        tag: 'TrustLoop & AI-DX Consulting',
        name: 'AI Implementation & Reputation Management for Professionals',
        summary: 'Build trust to win business while automating non-core work with AI.',
        description:
          'TrustLoop helps capture high-quality customer feedback to strengthen online credibility (E-E-A-T). In parallel, we provide domain-specific DX solutions for professional firms, including AI website generation and automated call response. A safety-first workflow with expert final review improves productivity while keeping risk under control.',
      },
      {
        tag: 'AI Web Creation & Digital Marketing',
        name: 'Website, SNS, MEO & Google Maps Review Replies — Brand-Safe LLM Ensemble',
        summary: 'Multiple top-tier LLMs compete and vote on every output, ensuring the highest quality while preserving a consistent brand voice across all digital touchpoints.',
        description:
          'Rather than relying on a single AI model, our ensemble pipeline simultaneously queries multiple state-of-the-art LLMs and selects the best output through majority voting and quality scoring. Every result is validated against your brand tone, prohibited terms, and compliance guidelines before going live — delivering premium content at scale without compromising brand integrity.',
        points: [
          'Website creation & automated content updates: Brand guidelines are embedded into the LLM workflow, producing SEO-optimized websites rapidly. News posts and campaign pages are AI-drafted and published with a single approval click.',
          'SNS management & unified brand voice: Multiple LLMs draft competing posts for each platform, analyzed against current trends. Only majority-approved content is scheduled for publishing, maximizing engagement while minimizing brand risk.',
          'MEO analysis tool: Real-time tracking of Google Business Profile rankings, review counts, and rating scores. AI-generated competitive analysis reports surface actionable next steps — keyword additions, photo updates, and more.',
          'Google Maps review auto-reply: New reviews trigger multi-LLM response generation. Only outputs passing sentiment analysis, brand-tone validation, and prohibited-word checks are proposed to owners or auto-published. Low-rating reviews trigger instant management escalation.',
        ],
      },
    ],
    enterpriseDxSolution: {
      tag: 'Enterprise AI & DX Solutions',
      title: 'Comprehensive AI Integration to Solve Business Challenges',
      lead: 'From strategic planning to bespoke system development and organizational adoption.',
      description:
        'For executive-level challenges such as "We want to apply AI but are unsure where it delivers value" or "We need to move beyond legacy systems," we provide end-to-end DX support from strategy through execution. We are not a reseller of generic tools; we design and implement the right architecture for your business from the ground up.',
      pillars: [
        {
          number: '01',
          title: 'AI Consulting & Business Process Diagnosis',
          body: 'We start with the core question: "How can AI transform our business?" Our specialist team maps current workflows, identifies ROI bottlenecks, and defines a concrete roadmap with clear security standards.',
        },
        {
          number: '02',
          title: 'Custom Enterprise Development & BPA',
          body: 'For unique requirements that off-the-shelf SaaS cannot solve, we build fully custom systems that combine modern architecture and generative AI. From trained internal AI agents to customer-facing automation, we deliver advanced capabilities at speed.',
        },
        {
          number: '03',
          title: 'Practical AI Training & Governance',
          body: 'Systems create value only when teams can use them effectively in daily operations. We provide hands-on enablement and governance design, including AI usage guidelines to prevent sensitive data leakage and accelerate organization-wide adoption.',
        },
      ],
    },
  },
  zh: {
    label: '核心解决方案',
    heading: '主要业务与产品',
    intro:
      '降低一线负担，推动经营指标增长。我们基于您的业务特性提供最优设计，帮助企业稳健达成可验证成果。',
    consultCta: '咨询洽谈',
    docsCta: '索取资料',
    note: '（*注：所列客单价提升、成本削减等数据为基于特定导入模型的模拟预测值，不构成对实际结果的绝对保证。）',
    tailoredTag: '个性化部署支持',
    tailoredHeading: '我们可根据您的特定需求提供企业级的定制化实施方案。',
    tailoredBody:
      '从核心系统对接、运营设计，到包含法务与税务考量的全局优化，我们始终贴近管理层与业务一线，提供全方位陪伴支持。',
    imageAlt: '展示企业系统集成的网络示意图',
    solutions: [
      {
        tag: '新一代 LINE移动端点单与AI-CRM系统',
        name: '将“日常订单”转化为“常客培育”的餐饮基础设施',
        summary: '在缓解长期人手不足的同时，持续提升门店投资回报率（ROI）。',
        description:
          '以顾客手机为起点的低阻力点单体验，可显著降低前线运营压力。与此同时，订单数据被AI实时解析，帮助企业摆脱“一刀切打折”，建立高利润率的常客增长机制。',
        points: [
          '兼顾增长与效率的UI: 扫码即可唤起LINE点单。自然的加购引导在提升客单价的同时推动省人化运营。',
          '无感化客户沉淀: 在点单流程中自然引导关注官方LINE，持续沉淀高价值消费数据。',
          'AI自动执行精准追客: 基于用户行为数据，AI在最佳时机触发个性化触达，提升复购效率。',
        ],
      },
      {
        tag: 'SendThanks — 数字小费',
        name: '面向服务业的数字小费收取基础设施',
        summary: '无需专用App，保持现有POS环境不变，快速部署的入境旅客小费收取系统。',
        description:
          '面向入境旅客的小费收取基础设施，无需下载专用App即可顺畅支付。保持现有POS环境不变即可导入，系统自动将资金归集为"企业营收"与"合法津贴"。在兼顾税务合规的前提下，帮助服务业降低流失、提升招聘竞争力。（※相关技术专利申请中）',
        points: [
          '收小费动线设计与员工手册制作支持: 从二维码摆放到员工引导话术，从零规划顺畅的小费接收流程，并提供配套现场运营手册的制作支持，助您快速落地。',
          '按需定制，灵活组合: 根据门店规模、业态与运营模式自由组合所需功能，从小规模试点到全面推广，均可灵活适配。',
        ],
      },
      {
        tag: 'SendThanks — 员工激励',
        name: '员工激励与客户反馈管理',
        summary: '将客人好评转化为员工动力，将批评性内容转化为建设性成长——守护团队士气。',
        description:
          '客人留下的感谢评价即时推送给对应员工，切实感受到被认可的价值，不断增强心理认同感。批评性内容可仅转发给管理层，也可由AI将措辞激烈的表达润色为建设性改善建议后再传达给员工。在不伤害心情的前提下，持续推动业务改善。',
        points: [
          '实时传递客人好评，激发员工内驱力: 客人留下的感谢评价即时推送给对应员工，切实感受到被认可的价值，从而提升积极性、降低离职率。',
          '负面反馈的智能分流处理: 批评性内容可仅转发给管理层，也可由AI将措辞激烈的表达润色为建设性改善建议后再传达给员工——在不伤害心情的前提下推动业务改善。',
        ],      },
      {
        tag: 'TrustLoop & AI-DX 咨询',
        name: '面向专业机构与B2B顾问的AI部署与声誉管理',
        summary: '同时实现“被选择的信任构建”与“非核心业务AI自动化”。',
        description:
          '通过SaaS产品“TrustLoop”收集高满意度反馈，持续强化线上品牌可信度（E-E-A-T）。同时，我们提供面向士业与B2B场景的AI网站生成、电话自动应答等DX方案。以“专家最终确认”为前提的安全流程，在控制风险的同时显著提升生产效率。',
      },
      {
        tag: 'AI网站制作 & 数字营销支持',
        name: '网站制作・SNS运营・MEO优化・谷歌地图评价回复 — LLM集成守护品牌形象',
        summary: '多个顶级LLM同步生成、多数表决遴选最优输出，在保持一致品牌形象的同时，实现所有数字接触点的最高品质自动化。',
        description:
          '我们采用"集成生成流程"：不依赖单一AI模型，而是同时调用多个顶尖LLM并行生成，通过多数表决与质量评分筛选最优结果。每条输出在发布前均经品牌语气、禁用词汇及合规条款的自动校验，确保在大规模输出的同时绝不损害品牌一致性。',
        points: [
          '网站制作 & 内容自动更新: 将贵司品牌规范内嵌入LLM工作流，快速制作SEO强化型网站。新闻及活动页面由AI自动起草，一键审批即可发布。',
          'SNS运营 & 品牌声音统一: 多个LLM针对各平台趋势同步起草竞争稿件，仅有通过多数表决的内容才能排期发布，在最大化互动率的同时将品牌风险降至最低。',
          'MEO分析工具: 实时追踪谷歌商家档案的排名、评价数量及评分。AI自动生成竞品对比报告，并推荐下一步行动（关键词补充、图片上传等）。',
          '谷歌地图评价自动回复: 新评价触发多LLM回复生成，仅通过情感分析、品牌语气校验及禁用词检测的最优文案才会提交审核或自动发布。低分评价即时触发管理层升级通知。',
        ],
      },
    ],
    enterpriseDxSolution: {
      tag: '企业级 AI与DX 解决方案',
      title: '解决核心商业挑战的综合AI系统集成',
      lead: '从战略起步到专属系统开发，再到组织内落地',
      description:
        '针对“希望应用AI但不清楚最佳切入点”或“希望摆脱低效旧系统”等管理层难题，我们提供从构想到落地的端到端DX支持。我们不是工具转售方，而是以前沿架构从零设计并实现最适合您的方案。',
      pillars: [
        {
          number: '01',
          title: 'AI导入咨询与业务流程诊断',
          body: '从“AI将如何改变业务”这一核心问题出发，专家团队拆解现有流程，识别ROI关键瓶颈，并制定具备安全标准的落地路线图。',
        },
        {
          number: '02',
          title: '定制化系统开发与业务流程自动化（BPA）',
          body: '针对通用SaaS无法覆盖的复杂场景，我们以现代架构结合生成式AI进行全定制开发。无论是数据训练型内部AI，还是面向客户的自动应答，都能快速交付。',
        },
        {
          number: '03',
          title: '实战化AI培训与内部治理支持',
          body: '系统价值取决于一线是否真正会用。我们提供实战培训与治理规范共建，包括防止敏感信息泄露的AI使用准则，推动组织级AI落地。',
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
      className="relative scroll-mt-28 border-t border-border/60 bg-[linear-gradient(180deg,#101f3a_0%,#122445_100%)] py-20 md:py-28 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <div className="mb-12 flex flex-col gap-8 sm:mb-16 sm:gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Reveal>
              <div className="mb-6 flex items-center gap-3 sm:mb-8 sm:gap-4">
                <span className="h-px w-12 bg-primary" aria-hidden="true" />
                <span className="text-[11px] font-light tracking-[0.14em] text-primary sm:text-xs sm:tracking-[0.2em]">
                  {t.label}
                </span>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="max-w-2xl font-serif text-3xl font-light leading-tight text-foreground text-balance lg:text-5xl">
                {t.heading}
              </h2>
            </Reveal>
          </div>
          <Reveal delay={160}>
            <p className="max-w-sm text-sm font-light leading-relaxed text-slate-400 text-pretty">
              {t.intro}
            </p>
          </Reveal>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {t.solutions.map((solution, i) => (
            <Reveal key={solution.name} delay={i * 120}>
              <article
                id={SOLUTION_ANCHORS[i] ?? `solution-${i}`}
                className="group scroll-mt-28 flex h-full flex-col border border-border/60 bg-card transition-colors duration-500 hover:border-primary/50"
              >
                <div className="flex items-center justify-between border-b border-border/60 px-5 py-5 sm:px-8 sm:py-6">
                  <span className="text-xs font-light tracking-[0.15em] text-primary">{solution.tag}</span>
                  <ArrowUpRight
                    className="h-5 w-5 text-muted-foreground transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                    aria-hidden="true"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-8">
                  <h3 className="text-xl font-medium tracking-tight text-foreground sm:text-2xl">{solution.name}</h3>
                  <p className="mt-1 text-sm font-light text-slate-300">{solution.summary}</p>
                  {solution.points ? null : (
                    <p className="mt-6 text-sm font-light leading-relaxed text-slate-400 text-pretty">
                      {solution.description}
                    </p>
                  )}
                  {solution.points ? (
                    <div className="mt-6 space-y-4">
                      <p className="text-sm font-light leading-relaxed text-slate-400 text-pretty">
                        {solution.description}
                      </p>
                      {solution.points.map((point) => (
                        <p
                          key={point}
                          className="border-l border-primary/40 pl-4 text-sm font-light leading-relaxed text-slate-400 text-pretty"
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
          <article
            id="solution-enterprise-dx"
            className="mt-10 group scroll-mt-28 flex h-full flex-col border border-border/60 bg-card transition-colors duration-500 hover:border-primary/50"
          >
            <div className="flex items-center justify-between border-b border-border/60 px-5 py-5 sm:px-8 sm:py-6">
              <span className="text-xs font-light tracking-[0.15em] text-primary">
                {t.enterpriseDxSolution.tag}
              </span>
              <ArrowUpRight
                className="h-5 w-5 text-muted-foreground transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                aria-hidden="true"
              />
            </div>
            <div className="flex flex-1 flex-col p-5 sm:p-8">
              <h3 className="text-xl font-medium tracking-tight text-foreground sm:text-2xl">
                {t.enterpriseDxSolution.title}
              </h3>
              <p className="mt-2 text-sm font-light leading-relaxed text-slate-300 text-pretty">
                {t.enterpriseDxSolution.lead}
              </p>
              <p className="mt-6 text-sm font-light leading-relaxed text-slate-400 text-pretty">
                {t.enterpriseDxSolution.description}
              </p>

              <div className="mt-6 space-y-4">
                {t.enterpriseDxSolution.pillars.map((pillar) => (
                  <p
                    key={pillar.number}
                    className="border-l border-primary/40 pl-4 text-sm font-light leading-relaxed text-slate-400 text-pretty"
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
          <p className="mt-8 text-xs font-light leading-relaxed text-slate-400/80">{t.note}</p>
        </Reveal>

        <Reveal delay={140}>
          <article className="mt-10 group scroll-mt-28 flex h-full flex-col border border-border/60 bg-card transition-colors duration-500 hover:border-primary/50">
            <div className="flex items-center justify-between border-b border-border/60 px-5 py-5 sm:px-8 sm:py-6">
              <span className="text-xs font-light tracking-[0.15em] text-primary">{t.tailoredTag}</span>
              <ArrowUpRight
                className="h-5 w-5 text-muted-foreground transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                aria-hidden="true"
              />
            </div>
            <div className="flex flex-1 flex-col p-5 sm:p-8">
              <h3 className="text-xl font-medium tracking-tight text-foreground sm:text-2xl">{t.tailoredHeading}</h3>
              <p className="mt-6 max-w-3xl text-sm font-light leading-relaxed text-slate-400 text-pretty">
                {t.tailoredBody}
              </p>
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
      </div>
    </section>
  )
}
