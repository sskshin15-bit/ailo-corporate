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
  'solution-hp-creation',
  'solution-sns-management',
  'solution-meo-analysis',
  'solution-google-review',
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
        tag: 'LLMアンサンブル × RAG — HP制作',
        name: 'ブランドガイドラインをAIに内包させ、SEO最強サイトを最速制作・自動更新',
        summary: 'RAGでブランド知識を常時参照。複数LLMが競作し多数決で厳選した、唯一無二のブランドボイスを持つウェブサイトを高速納品します。',
        description:
          '社内ブランドガイドライン・トンマナ・禁止表現をベクトルDBに格納し、生成時にRAG（検索拡張生成）でリアルタイム参照。GPT-4o・Claude 4・Gemini 2.5など複数の最先端LLMが同時並行で原稿を生成し、品質スコアリングと多数決フィルタリングを通過した最高品質のコンテンツのみを採用します。ニュース・キャンペーンページ等の定常更新はAIが自動ドラフトし、担当者の承認ワンクリックで公開。Core Web Vitals・構造化データ・セマンティックSEOを標準実装し、初期制作から運用まで一気通貫でカバーします。',
        points: [
          'マルチLLM競作 & 多数決品質保証: 複数モデルの出力を意味的類似度・ブランドトーンスコア・SEOスコアの3軸で評価し、合議で最適解を選定。単一モデルの幻覚リスクをアンサンブルで構造的に排除します。',
          'RAGによるブランド知識の永続参照: ブランドガイドライン・過去の承認済みコンテンツ・競合分析レポートをベクトルDBに蓄積。生成のたびに自動参照され、ブランドイメージの一貫性を長期維持します。',
          'ヒューマン・イン・ザ・ループ承認フロー: AIが自動ドラフトした原稿を専用ダッシュボードに表示し、担当者が差分確認→ワンクリック公開。承認ログは全件監査証跡として保存されます。',
        ],
      },
      {
        tag: 'マルチLLMアンサンブル × トレンド解析 — SNS運用',
        name: '競作→多数決→スケジュール公開。炎上リスクをゼロへ近づけるSNS全自動運用',
        summary: '各プラットフォームのアルゴリズム変化をリアルタイム検知。複数LLMが競作した投稿を感情分析と多数決で厳選し、ブランドボイスを守りながらエンゲージメントを最大化します。',
        description:
          'X（旧Twitter）・Instagram・Facebook・TikTok・LinkedIn各プラットフォームのトレンドワードとエンゲージメントパターンをリアルタイム解析。プラットフォーム固有のアルゴリズム特性に最適化した投稿原稿を複数のLLMに同時生成させ、感情分析スコア・ブランドトーン適合度・炎上リスクスコアによる多段階フィルタリングで最終稿を決定。公開後のエンゲージメントデータをフィードバックループとして学習させ、投稿品質を継続的に改善します。',
        points: [
          '多段階炎上リスクフィルタリング: 投稿候補をセンチメント分析→禁止ワードチェック→ブランドガイドライン照合→業界コンプライアンス確認の4ステップで審査。高リスク判定の投稿は自動却下し、担当者へアラートを送信します。',
          'クロスプラットフォーム最適化: 同一コアメッセージから各SNSの文化・文字数・ハッシュタグ慣習・最適投稿時間に合わせた専用バージョンをAIが自動生成。一つの指示から最大5プラットフォーム分の投稿を同時制作します。',
          'パフォーマンス学習による継続改善: インプレッション・エンゲージメント率・フォロワー増減を投稿単位で記録し、高パフォーマンスパターンをLLMのプロンプトに自動フィードバック。運用期間が長いほど投稿精度が向上する仕組みです。',
        ],
      },
      {
        tag: 'リアルタイムBI × AI提案 — MEO対策分析ツール',
        name: 'Googleビジネスプロフィールを24時間監視。競合を凌駕するMEO戦略をAIが自動設計',
        summary: 'ローカル検索順位・クチコミ数・評価スコアを競合店舗と横並び比較。AIが次の一手を自動レコメンドし、地図検索での露出を最大化します。',
        description:
          'Google Business Profile APIとローカル検索シグナルをリアルタイム収集し、キーワード別順位・インプレッション数・方向案内リクエスト数・写真閲覧数など10以上の指標を自動集計。半径内の競合店舗と比較分析したBIダッシュボードをAIが週次・月次で自動生成。NAP情報の一貫性チェック・カテゴリ最適化提案・高反応キーワードの追加提案・写真投稿タイミングの推奨まで、MEO改善アクションをスコアリングして優先度付きで提示します。',
        points: [
          '競合インテリジェンス自動収集: 同エリア・同カテゴリの競合店舗のレビュー数推移・評価スコア・投稿頻度を自動追跡。差分が拡大した際にはアラートを発報し、対抗策の提案まで一気通貫で行います。',
          'NAP整合性 & カテゴリ最適化: 店名・住所・電話番号の表記ゆれをウェブ全体でスキャンし、Googleの評価に影響するNAP不整合を自動検出。SEOインパクトの大きいカテゴリ設定・属性追加もAIが優先度付きで提案します。',
          '施策効果の自動計測 & PDCA: 写真追加・投稿・Q&A更新などの施策前後で順位変動・インプレッション変化を自動比較。どの施策がMEOスコアに最も寄与したかをデータで可視化し、次サイクルの優先アクションを自動決定します。',
        ],
      },
      {
        tag: 'LLMアンサンブル × 感情分析 — Googleマップ レビュー返信',
        name: '低評価も瞬時に検知・経営者通知。ブランドを守る最高品質の返信を全自動生成',
        summary: '新着レビューをトリガーに複数LLMが返信文を競作。感情分析・ブランドトーン検証・リスクスコアリングを多数決で通過した文面のみを採用し、オーナー提案または自動返信します。',
        description:
          '新着Googleマップレビューをリアルタイム検知し、感情分析モデルで星評価・文章トーン・ネガティブキーワードを多次元解析。複数の最先端LLMが同時に返信文を生成し、ブランドトーン適合度スコア・法的リスクチェック・禁止表現スキャン・多言語品質評価（日英中）を経て最高品質の一文を選定。★1〜2の低評価レビューは即座にオーナーへエスカレーション通知を送信し、危機対応モードに切り替え。返信後の評価変化・クチコミ数推移を継続モニタリングし、返信戦略を自己改善します。',
        points: [
          'リアルタイム低評価エスカレーション: 星3以下・ネガティブキーワード検出時はオーナーのスマートフォンに即時プッシュ通知。返信すべき優先度・推奨アクション・類似事例の対応履歴をセットで提示し、初動対応を最速化します。',
          '多言語対応 & 文化的適切性チェック: 日本語・英語・中国語・韓国語の返信を各言語ネイティブ品質で自動生成。インバウンド旅行者からのレビューにも言語を自動判定して最適な返信を即座に提案します。',
          '返信ナレッジの継続蓄積: オーナーが修正・承認した返信文を学習データとして蓄積し、ブランド固有の返信スタイルをモデルに強化学習。導入期間が長いほど「そのお店らしい」返信精度が向上します。',
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
        tag: 'LLM Ensemble × RAG — Website Creation',
        name: 'Brand DNA embedded into AI. Fastest-to-launch, SEO-optimized websites with autonomous content updates.',
        summary: 'RAG keeps brand knowledge always on hand. Competing LLM drafts, majority-voted for quality, produce on-brand pages at machine speed.',
        description:
          'Brand guidelines, tone-of-voice rules, and prohibited expressions are stored in a vector database and retrieved in real time via RAG at every generation step. GPT-4o, Claude 4, Gemini 2.5, and other frontier LLMs generate competing drafts simultaneously; a quality-scoring and majority-voting layer selects the best output. News posts and campaign pages are auto-drafted by AI and published with a single approval click. Core Web Vitals, structured data, and semantic SEO are baked in from day one.',
        points: [
          'Multi-LLM competition & majority-vote quality guarantee: Candidate outputs are ranked across three axes — semantic similarity, brand-tone score, and SEO score — and the consensus pick is selected. Ensemble architecture structurally eliminates single-model hallucination risk.',
          'RAG-powered brand knowledge persistence: Guidelines, approved past content, and competitive analysis reports are continuously stored in a vector DB and auto-referenced at every generation, maintaining brand consistency long-term.',
          'Human-in-the-loop approval workflow: AI-drafted content surfaces in a review dashboard for diff-view approval with one click. Every approval is logged as a full audit trail.',
        ],
      },
      {
        tag: 'Multi-LLM Ensemble × Trend Analysis — SNS Management',
        name: 'Compete → Vote → Schedule. Fully automated social media that pushes engagement and eliminates brand risk.',
        summary: 'Real-time detection of platform algorithm shifts. LLMs compete on every draft; sentiment analysis and majority voting select the post that maximizes reach while protecting your brand.',
        description:
          'Trending keywords and engagement patterns across X, Instagram, Facebook, TikTok, and LinkedIn are ingested in real time. Multiple frontier LLMs simultaneously produce platform-specific drafts optimized for each algorithm. A multi-stage filter — sentiment score, brand-tone fit, risk score, and compliance check — selects the final post. Post-publish engagement data feeds back into the pipeline as continuous learning, improving output quality over time.',
        points: [
          'Multi-stage brand-risk filtering: Candidates pass through sentiment analysis → prohibited-term scan → brand guideline validation → industry compliance check. High-risk outputs are auto-rejected; alerts are sent to the responsible team member.',
          'Cross-platform content optimization: One core message generates platform-native versions for up to five channels simultaneously, each adapted for character limits, hashtag conventions, and optimal posting times.',
          'Performance feedback loop: Impressions, engagement rate, and follower trends are logged per post and fed back as prompt signals, so the longer you run, the better each post gets.',
        ],
      },
      {
        tag: 'Real-Time BI × AI Recommendations — MEO Analysis Tool',
        name: '24/7 Google Business Profile monitoring. AI-designed MEO strategy that outranks competitors.',
        summary: 'Local search rankings, review counts, and rating scores benchmarked against nearby competitors. AI recommends the next highest-impact action and tracks results automatically.',
        description:
          'The Google Business Profile API and local search signals are ingested in real time — keyword rankings, impressions, direction requests, and photo views across 10+ metrics. A BI dashboard comparing your profile against competitors in the same area and category is auto-generated weekly and monthly. NAP consistency checks, category optimization suggestions, high-value keyword additions, and photo-posting timing recommendations are all scored and presented as a prioritized action list.',
        points: [
          'Competitive intelligence, automated: Review volume trends, rating scores, and posting frequency of nearby competitors are tracked continuously. When a gap widens, an alert fires and a counter-strategy recommendation is generated automatically.',
          'NAP integrity & category optimization: Business name, address, and phone number inconsistencies are scanned across the web and flagged. High-impact category and attribute improvements are proposed with SEO impact estimates.',
          'Before/after impact measurement: Ranking and impression changes are automatically compared before and after each action — photo uploads, posts, Q&A updates — so you can see exactly which tactics move the needle.',
        ],
      },
      {
        tag: 'LLM Ensemble × Sentiment Analysis — Google Maps Review Replies',
        name: 'Instant low-rating detection and owner alerts. Highest-quality brand-safe replies generated automatically.',
        summary: 'Every new review triggers parallel multi-LLM drafting. Only responses passing sentiment analysis, brand-tone validation, and risk scoring are proposed to the owner or auto-published.',
        description:
          'New Google Maps reviews are detected in real time and analyzed across star rating, emotional tone, and negative-keyword density by a sentiment model. Multiple frontier LLMs generate reply candidates simultaneously; brand-tone fit, legal risk, prohibited-term scan, and multilingual quality assessment (JA / EN / ZH) determine the winning response. Reviews rated ★1–2 trigger an immediate owner push notification with escalation context. Post-reply rating changes and review volume trends are monitored continuously to self-improve reply strategy.',
        points: [
          'Real-time low-rating escalation: Reviews rated ★3 or below and negative-keyword hits trigger instant push notifications to the owner\'s device — including priority level, recommended action, and similar past cases — enabling the fastest possible first response.',
          'Multilingual quality generation: Japanese, English, Chinese, and Korean replies are auto-generated at native quality. For inbound tourist reviews, the source language is detected automatically and an optimized reply is proposed immediately.',
          'Continuous reply-knowledge accumulation: Owner-edited and approved replies feed back as training data, reinforcing your brand\'s unique response style. The longer the system runs, the more "yours" every reply sounds.',
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
        tag: 'LLM集成 × RAG — 网站制作',
        name: '将品牌DNA内嵌AI，以最快速度制作SEO顶级网站并实现内容自动更新',
        summary: 'RAG实时调取品牌知识库，多LLM竞稿经多数表决精选，以品牌专属语气量产最高品质页面。',
        description:
          '将品牌规范、语气风格及禁用表达存入向量数据库，每次生成时通过RAG（检索增强生成）实时参照。GPT-4o、Claude 4、Gemini 2.5等多个顶尖LLM同步生成竞争稿件，经质量评分与多数表决筛选最优输出。新闻与活动页面由AI自动起草，管理员一键审批即可发布。Core Web Vitals优化、结构化数据及语义SEO从初始构建起即标准内置，从制作到运维一体化覆盖。',
        points: [
          '多LLM竞稿 & 多数表决品质保障: 候选内容从语义相似度、品牌语气契合度、SEO得分三个维度综合评分，通过集体表决选出最优解，从结构上规避单一模型的幻觉风险。',
          'RAG驱动的品牌知识持续参照: 品牌规范、历史审批内容与竞品分析报告持续存入向量数据库，每次生成时自动调取，长期维护品牌形象一致性。',
          '人工审批闭环流程: AI起草内容呈现于专属仪表盘供差异对比审核，一键即可发布，所有审批记录作为完整审计日志留存备查。',
        ],
      },
      {
        tag: '多LLM集成 × 趋势解析 — SNS运营',
        name: '竞稿→表决→定时发布。将品牌风险降至最低的全自动SNS运营',
        summary: '实时感知各平台算法动态，多LLM同步竞稿，经情感分析与多数表决严格筛选，在守护品牌声誉的同时最大化互动率。',
        description:
          '实时采集X、Instagram、Facebook、TikTok、LinkedIn各平台的热词与互动模式，多个顶尖LLM同时生成针对各平台算法特性优化的帖子，经情感得分、品牌语气匹配度、风险评分、合规审查四道过滤后确定最终稿。发布后的互动数据持续作为反馈输入优化流程，投稿质量随运营周期不断提升。',
        points: [
          '多层品牌风险过滤: 候选内容依次经情感分析→禁用词扫描→品牌规范核验→行业合规审查四道关卡，高风险内容自动拦截并向责任人发送提醒。',
          '跨平台内容最优化: 一条核心信息可同步生成最多五个平台的专属版本，分别适配字数限制、话题标签惯例与最佳发布时段。',
          '效果反馈持续进化: 曝光量、互动率、粉丝增减均按帖子维度记录并反馈至提示词，运营时间越长，每条投稿的精准度越高。',
        ],
      },
      {
        tag: '实时BI × AI建议 — MEO优化分析工具',
        name: '全天候监控谷歌商家档案，AI自动设计超越竞争对手的MEO策略',
        summary: '本地搜索排名、评价数量与评分同竞店横向对比，AI推荐优先级最高的下一步行动并自动追踪执行效果。',
        description:
          '通过Google Business Profile API实时采集本地搜索信号，自动汇总关键词排名、曝光量、路线导航请求、图片浏览量等10余项指标。AI自动生成与同区域、同类别竞争对手的BI对比仪表盘（按周/月），并以优先级排序呈现NAP一致性检查、类别优化建议、高价值关键词添加及图片投稿时机推荐等MEO改善行动清单。',
        points: [
          '竞品情报自动收集: 持续追踪周边竞店的评价数增长趋势、评分及发帖频率，差距扩大时即时发出预警并自动生成应对策略建议。',
          'NAP一致性 & 类别优化: 全网扫描店名、地址、电话的表述差异，自动标记影响谷歌评分的不一致项，并按SEO影响力优先提议类别设置与属性补充。',
          '施策效果自动测量 & PDCA: 图片上传、发帖、Q&A更新等操作前后的排名与曝光变化自动比对，可视化呈现哪项举措最有成效，并自动确定下一周期的优先行动。',
        ],
      },
      {
        tag: 'LLM集成 × 情感分析 — 谷歌地图评价回复',
        name: '低分评价瞬时预警推送，全自动生成守护品牌的最高品质回复',
        summary: '新评价到来即触发多LLM并行起稿，仅通过情感分析、品牌语气校验与风险评分的文案才会提交审核或自动发布。',
        description:
          '实时检测谷歌地图新评价，通过情感模型对星级评分、情绪倾向、负面关键词密度进行多维解析。多个顶尖LLM同步生成回复候选，经品牌语气契合度、法律风险扫描、禁用词检测及多语言品质评估（日中英韩）确定最优回复。★1〜2低分评价即时触发经营者推送通知并附上升级处理建议，回复后持续追踪评分变化与评价数趋势以自我优化回复策略。',
        points: [
          '低分评价实时升级通知: ★3及以下或检测到负面关键词时，即刻向经营者手机推送通知，并附上优先级判断、推荐行动与相似案例处理记录，让初动响应速度最快化。',
          '多语种高质量生成: 自动以母语级水准生成日语、英语、中文、韩语回复。针对入境旅游者的评价，系统自动识别语言并即时提出最优回复建议。',
          '回复知识库持续积累: 经营者修改并审批的回复文本持续作为训练数据积累，强化模型对该品牌独特回复风格的学习。运营时间越长，回复越具"品牌专属感"。',
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
