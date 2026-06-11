import { Card } from "@/components/ui/Card";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SectionHeading } from "@/components/ui/SectionHeading";

const pains = [
  "口コミ返信の放置",
  "日本語レビューだけが溜まる",
  "最新情報に動画がない",
  "効果測定ができていない",
];

const solutions = [
  "プロ品質×AI多言語ショート動画配信",
  "24時間稼働AI多言語コンシェルジュ（24時間以内に母国語で自動返信）",
  "感動を口コミに変えるチップ連携システム",
];

const steps = [
  "無料デジタル監査",
  "既存データの無償引き継ぎ",
  "AI連携・トラッキング",
  "多言語ショート動画配信",
];

export function MeoSection() {
  return (
    <section id="meo" className="section-space relative z-10 bg-paper-deep px-5 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          index="03 / INBOUND"
          title="言葉の壁という隘路も、抜ける。"
          lead="次世代インバウンド特化型 Googleマップ集客 — 「文字と写真」のMEOから、AIと動画の「視覚とホスピタリティ」のMEOへ。"
        />

        <ul className="mb-10 space-y-3 border-l border-[var(--hairline-soft)] pl-6">
          {pains.map((p) => (
            <li key={p} className="text-readable text-paper-lift text-sm">
              {p}
            </li>
          ))}
        </ul>

        <div className="mb-12 grid gap-6 md:grid-cols-3">
          {solutions.map((s, i) => (
            <Card key={s} className="p-8">
              <p className="font-latin mb-3 text-[12px] font-semibold tracking-[0.5em] text-gold-readable">
                {String(i + 1).padStart(2, "0")}
              </p>
              <p className="text-sm leading-[2.3] text-ink">{s}</p>
            </Card>
          ))}
        </div>

        <ol className="mb-12 grid gap-6 md:grid-cols-4">
          {steps.map((step, i) => (
            <li key={step} className="relative pl-6 md:pl-0">
              <span className="font-latin text-gold-readable text-[12px] font-semibold tracking-[0.5em]">
                {i + 1}
              </span>
              <p className="text-readable text-paper-lift mt-2 text-sm leading-[2.2]">{step}</p>
            </li>
          ))}
        </ol>

        <MagneticButton
          href="#contact"
          className="inline-flex rounded-full bg-ink px-8 py-3 text-sm font-medium tracking-[0.22em] text-paper"
        >
          無料デジタル監査を体験する
        </MagneticButton>
      </div>
    </section>
  );
}
