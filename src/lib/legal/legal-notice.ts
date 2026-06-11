import type { LegalNoticeDoc } from "@/components/legal/LegalDocumentLayout";

export const legalNoticeContent: LegalNoticeDoc = {
  ja: {
    label: 'Legal Notice',
    heading: '特定商取引法に基づく表記',
    updatedAt: '最終更新日: 2026年5月31日',
    intro:
      '当社が提供する有償サービスに関し、特定商取引法に基づき、以下のとおり表示します。個別契約で別段の定めがある場合は、当該契約が優先します。',
    items: [
      { term: '事業者名', desc: '合同会社Ailo' },
      { term: '代表責任者', desc: '代表社員（詳細は請求により遅滞なく開示）' },
      { term: '所在地', desc: '兵庫県神戸市中央区磯辺通1-1-18 カサベラ国際プラザビル707号室' },
      { term: 'お問い合わせ先', desc: 'contact@ailo.co.jp（受付時間: 平日10:00-18:00）' },
      { term: '販売価格', desc: '各サービスの見積書・提案書・申込書・個別契約書に表示します。' },
      { term: '商品代金以外の必要料金', desc: '振込手数料、通信費等はお客様負担となる場合があります。詳細は個別契約で定めます。' },
      { term: '代金の支払時期・方法', desc: '請求書払い（銀行振込）その他、個別契約で定める方法によります。' },
      { term: 'サービス提供時期', desc: '契約成立後、合意したスケジュールに従い提供します。' },
      { term: 'キャンセル・解約', desc: '契約成立後のキャンセルおよび中途解約条件は個別契約に従います。' },
      { term: '返品・返金', desc: 'サービスの性質上、提供開始後の返品・返金は原則としてお受けできません。ただし法令または契約上認められる場合を除きます。' },
      { term: '動作環境', desc: 'オンラインサービス利用時は、インターネット接続環境および推奨ブラウザが必要です。' },
    ],
    notesTitle: '補足事項',
    notes:
      '本ページの内容は、法令改正やサービス変更等に応じて改定される場合があります。最新の内容は本ページをご確認ください。',
    backHome: 'トップページへ戻る',
  },
  en: {
    label: 'Legal Notice',
    heading: 'Legal Notice (Specified Commercial Transactions Act)',
    updatedAt: 'Last updated: May 31, 2026',
    intro:
      'For paid services provided by Ailo LLC, the following disclosure is provided under the Act on Specified Commercial Transactions. If individual agreements contain different terms, those agreements prevail.',
    items: [
      { term: 'Business Name', desc: 'Ailo LLC' },
      { term: 'Responsible Representative', desc: 'Representative Member (details disclosed without delay upon valid request)' },
      { term: 'Address', desc: 'Room 707, Casabella International Plaza Building, 1-1-18 Isobedori, Chuo-ku, Kobe, Hyogo, Japan' },
      { term: 'Contact', desc: 'contact@ailo.co.jp (Business hours: Weekdays 10:00-18:00 JST)' },
      { term: 'Price', desc: 'Displayed in quotations, proposals, order forms, or individual agreements for each service.' },
      { term: 'Additional Charges', desc: 'Bank transfer fees and communication fees may be borne by customers as specified in individual agreements.' },
      { term: 'Payment Timing and Method', desc: 'Invoice-based bank transfer or other methods specified in individual agreements.' },
      { term: 'Service Delivery Timing', desc: 'Services are delivered according to the agreed schedule after contract formation.' },
      { term: 'Cancellation / Termination', desc: 'Cancellation and mid-term termination conditions are governed by individual agreements.' },
      { term: 'Return / Refund', desc: 'Due to the nature of services, returns or refunds are generally unavailable after service commencement unless required by law or contract.' },
      { term: 'System Requirements', desc: 'Internet access and a supported browser are required for online services.' },
    ],
    notesTitle: 'Additional Notes',
    notes:
      'This notice may be updated due to legal or service changes. Please refer to this page for the latest information.',
    backHome: 'Back to Home',
  },
  zh: {
    label: 'Legal Notice',
    heading: '基于特定商取引法的标示',
    updatedAt: '最后更新：2026年5月31日',
    intro:
      '针对本公司提供的有偿服务，依据《特定商取引法》公示如下。若个别合同另有约定，以个别合同为准。',
    items: [
      { term: '经营者名称', desc: 'Ailo合同会社' },
      { term: '负责人', desc: '代表社员（经合法请求将及时披露详细信息）' },
      { term: '地址', desc: '日本兵库县神户市中央区矶边通1-1-18 卡萨贝拉国际广场大厦707室' },
      { term: '联系方式', desc: 'contact@ailo.co.jp（受理时间：工作日10:00-18:00 JST）' },
      { term: '销售价格', desc: '按各服务的报价单、提案书、订单或个别合同记载。' },
      { term: '除价款外的必要费用', desc: '银行转账手续费、通信费用等可能由客户承担，详见个别合同。' },
      { term: '付款时间与方式', desc: '原则上采用发票结算（银行转账）或个别合同约定方式。' },
      { term: '服务提供时间', desc: '合同成立后，按双方约定进度提供服务。' },
      { term: '取消与解约', desc: '合同成立后的取消与中途解约条件，以个别合同约定为准。' },
      { term: '退货与退款', desc: '鉴于服务性质，服务开始后原则上不接受退货或退款；法律或合同另有规定的除外。' },
      { term: '使用环境', desc: '使用在线服务需具备互联网连接和受支持浏览器环境。' },
    ],
    notesTitle: '补充说明',
    notes: '本页面内容可能因法律或服务调整而更新，请以本页面最新公开内容为准。',
    backHome: '返回首页',
  },
};
