import { SectionHeading } from "@/components/ui/SectionHeading";

const lines = [
  "要件定義初期からの法務・税務リスク評価",
  "セキュリティ要件・権限設計の可視化と社内稟議資料の作成支援",
  "導入後の運用フロー・監査対応まで見据えた再現性の高い実装",
];

export function ReadinessSection() {
  return (
    <section id="readiness" className="section-space relative z-10 bg-paper px-5 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-4xl">
        <SectionHeading index="04 / READINESS" title="稟議が通る設計。" />
        <ul className="space-y-6">
          {lines.map((line) => (
            <li
              key={line}
              className="border-b border-[var(--hairline-soft)] pb-6 text-readable text-paper-lift text-sm leading-[2.4] last:border-0"
            >
              {line}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
