"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Industry = "すべて" | "ホスピタリティ" | "飲食" | "士業・B2B" | "エンタープライズ";

type Product = {
  index: string;
  name: string;
  summary: string;
  points: string[];
  industries: Industry[];
  priority?: number;
};

const tabs: Industry[] = ["すべて", "ホスピタリティ", "飲食", "士業・B2B", "エンタープライズ"];

const products: Product[] = [
  {
    index: "01",
    name: "LINEモバイルオーダー & AI-CRM",
    summary:
      "「日々の注文」を「リピーター育成」へ直結させる飲食インフラ。QR起点のストレスフリー注文で省人化と客単価向上を両立、購買データをAIが解析し最適な追客を自動化。",
    points: [],
    industries: ["すべて", "飲食"],
  },
  {
    index: "02",
    name: "SendThanks｜チップ機能",
    summary:
      "ホスピタリティ業界向けデジタルチップ基盤。専用アプリ不要・既存POS変更なし。法人売上と適法な手当へ自動集計・分配（特許出願中）。",
    points: [],
    industries: ["すべて", "ホスピタリティ"],
    priority: 1,
  },
  {
    index: "03",
    name: "SendThanks｜HR機能",
    summary:
      "感謝コメントをリアルタイムでスタッフへ。批判的な声はAIが穏やかな改善示唆へ変換、または経営者のみへルーティング。",
    points: [],
    industries: ["すべて", "ホスピタリティ"],
    priority: 2,
  },
  {
    index: "04",
    name: "TrustLoop & AI-DXコンサルティング",
    summary:
      "士業・B2B向けレピュテーション管理。E-E-A-T強化、HP自動生成・電話自動応答。専門家最終確認を組み込んだ安全設計。",
    points: [],
    industries: ["すべて", "士業・B2B"],
  },
  {
    index: "05",
    name: "HP制作（LLMアンサンブル×RAG）",
    summary:
      "ブランド知識をベクトルDBに格納しRAG参照。複数LLM競作→多数決品質保証→ワンクリック承認公開。Core Web Vitals標準実装。",
    points: [],
    industries: ["すべて", "士業・B2B", "エンタープライズ"],
  },
  {
    index: "06",
    name: "SNS全自動運用",
    summary:
      "X/Instagram/Facebook/TikTok/LinkedIn。多段階炎上リスクフィルタリング、クロスプラットフォーム最適化。",
    points: [],
    industries: ["すべて"],
  },
  {
    index: "07",
    name: "MEO対策分析ツール",
    summary: "GBPを24時間監視、競合比較とAI自動レコメンド、施策効果のPDCA。",
    points: [],
    industries: ["すべて", "ホスピタリティ"],
    priority: 3,
  },
  {
    index: "08",
    name: "Googleマップ レビュー返信",
    summary:
      "低評価を瞬時検知し経営者通知。多言語（日英中韓）・ブランドトーン検証済みの返信を全自動生成。",
    points: [],
    industries: ["すべて", "ホスピタリティ"],
    priority: 4,
  },
  {
    index: "09",
    name: "エンタープライズAI & DXソリューション",
    summary:
      "戦略策定〜フルスクラッチ開発〜組織定着・ガバナンスまでエンドツーエンド。リセールではなくゼロから最適解を設計。",
    points: [],
    industries: ["すべて", "エンタープライズ"],
  },
  {
    index: "10",
    name: "個別実装支援",
    summary:
      "基幹システム連携・厳格運用が必要な大企業向け。法務・税務リスクを踏まえた全体最適。",
    points: [],
    industries: ["すべて", "エンタープライズ"],
  },
];

export function SolutionsSection() {
  const [tab, setTab] = useState<Industry>("すべて");

  const filtered = useMemo(() => {
    const list =
      tab === "すべて"
        ? products
        : products.filter((p) => p.industries.includes(tab));
    if (tab === "ホスピタリティ") {
      return [...list].sort((a, b) => (a.priority ?? 99) - (b.priority ?? 99));
    }
    return list;
  }, [tab]);

  return (
    <section id="solutions" className="section-space relative z-10 bg-paper px-5 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          index="02 / SOLUTIONS"
          title="本番で、動いている。"
          lead="現場の負担を減らし、経営の数字を動かす。事業特性に寄り添う設計で、確実な成果へ。"
        />

        <div className="mb-10 flex flex-wrap gap-4">
          {tabs.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTab(t)}
              className={`relative pb-2 text-[11px] tracking-[0.16em] transition-colors ${
                tab === t ? "text-ink" : "text-caption hover:text-ink"
              }`}
            >
              {t}
              {tab === t && (
                <span className="absolute inset-x-0 -bottom-px h-px bg-gold" />
              )}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.div
                key={p.index}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <Card className="sticky top-24 p-8 md:p-10">
                  <p className="font-latin mb-4 text-[12px] font-semibold tracking-[0.5em] text-gold-readable">
                    {p.index}
                  </p>
                  <h3 className="font-mincho mb-3 text-xl tracking-[0.06em]">{p.name}</h3>
                  <p className="text-sm leading-[2.3]">{p.summary}</p>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <p className="text-caption mt-10 text-[11px] leading-[2]">
          ※記載の効果数値は導入モデルに基づく当社シミュレーション値であり、実際の成果を保証するものではありません。
        </p>
      </div>
    </section>
  );
}
