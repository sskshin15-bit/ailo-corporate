import { Link } from "@/i18n/navigation";

const items = [
  { date: "2026.06.05", title: "社名変更のお知らせ（CyberFreeks合同会社→合同会社Ailo）", slug: "company-name-changed-to-ailo" },
  { date: "2026.05.22", title: "SendThanks本番運用開始", slug: "sendthanks-production-launch" },
  { date: "2026.05.10", title: "TrustLoop本番運用開始", slug: "trustloop-production-launch" },
  { date: "2026.04.28", title: "LINEモバイルオーダー&AI-CRM本番運用開始", slug: "line-order-ai-crm-production-launch" },
];

export function NewsStrip() {
  return (
    <section className="relative z-10 border-y border-[var(--hairline-soft)] bg-paper-deep px-5 py-12 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <ul className="divide-y divide-[var(--hairline-soft)]">
          {items.map((item) => (
            <li key={item.slug} className="flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:gap-8">
              <time className="font-latin shrink-0 text-[11px] tracking-[0.2em] text-gold">
                {item.date}
              </time>
              <Link
                href={`/news/${item.slug}`}
                className="text-sm tracking-[0.06em] text-ink transition-colors hover:text-gold"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-6 text-right">
          <Link href="/news" className="font-latin text-caption hover:text-ink text-[11px] tracking-[0.35em]">
            → /news
          </Link>
        </div>
      </div>
    </section>
  );
}
