import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";

const items = [
  {
    title: "行動設計UX",
    body: "行動経済学に基づくシームレスな顧客体験。B2Cデジタルマーケティングで培った、心理的負荷を軽減し自然な行動を促すノウハウをシステムに実装。アプリDLや会員登録の摩擦を最小化する直感的UI/UXで、顧客満足度と利用率を引き上げる。",
  },
  {
    title: "先端AI・データサイエンス",
    body: "高度な数理モデルによる業務の自律化。第一線のデータサイエンティストがアーキテクチャ設計を統括。生成AI活用のアジャイル開発で市場変化に即応し、取得データをCRM・HRアナリティクスへ昇華。オペレーションをデータ資産に変える。",
  },
  {
    title: "リーガルテック・セキュリティ",
    body: "専門家ネットワーク連携による強固な運用基盤。弁護士への適法性確認、顧問税理士による税務スキーム監修など外部専門家と連携。法的課題を設計段階から織り込み、コンプライアンスリスクを極小化。",
  },
];

export function StrengthsSection() {
  return (
    <section id="strengths" className="section-space relative z-10 bg-gradient-to-b from-paper/0 via-paper to-paper px-5 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          index="01 / STRENGTHS"
          title="突破力の、正体。"
          lead="行動設計UX × 先端AI × リーガルテック"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <Card key={item.title} className="p-8">
              <h3 className="font-mincho text-paper-lift mb-4 text-lg tracking-[0.08em] text-ink">{item.title}</h3>
              <p className="text-sm leading-[2.3]">{item.body}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
