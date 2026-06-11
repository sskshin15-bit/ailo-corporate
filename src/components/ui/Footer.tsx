import { Link } from "@/i18n/navigation";

export function Footer({ basePath = "" }: { basePath?: string }) {
  return (
    <footer className="relative z-10 border-t border-[var(--hairline-soft)] bg-paper-deep px-5 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <p className="font-mincho text-lg tracking-[0.12em] text-ink">
          信頼を礎に。
        </p>
        <p className="font-latin text-caption mt-1 text-sm tracking-[0.2em] italic">
          Built on Trust.
        </p>

        <div className="text-readable mt-10 grid gap-10 text-sm leading-[2.2] md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="mb-3 text-[11px] tracking-[0.18em] text-ink">会社情報</p>
            <p>兵庫県神戸市中央区磯辺通1-1-18</p>
            <p>カサベラ国際プラザビル707号室</p>
            <p className="mt-2">
              <a href="mailto:contact@ailo.co.jp" className="hover:text-ink">
                contact@ailo.co.jp
              </a>
            </p>
            <p className="mt-1">受付 平日10:00–18:00</p>
          </div>

          <div>
            <p className="mb-3 text-[11px] tracking-[0.18em] text-ink">会社情報</p>
            <ul className="space-y-1">
              <li>
                <Link href="/#top" className="hover:text-ink">
                  Ailoについて
                </Link>
              </li>
              <li>
                <Link href="/#readiness" className="hover:text-ink">
                  導入体制
                </Link>
              </li>
              <li>
                <Link href="/#leadership" className="hover:text-ink">
                  経営陣
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-ink">
                  採用情報
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-ink">
                  ニュース
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-3 text-[11px] tracking-[0.18em] text-ink">ソリューション</p>
            <ul className="space-y-1">
              {[
                "SendThanks",
                "LINEモバイルオーダー&AI-CRM",
                "TrustLoop",
                "HP制作",
                "SNS運用",
                "MEO対策",
                "Googleマップ返信",
                "AI-DXコンサルティング",
              ].map((item) => (
                <li key={item}>
                  <Link href="/#solutions" className="hover:text-ink">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-3 text-[11px] tracking-[0.18em] text-ink">法務</p>
            <ul className="space-y-1">
              <li>
                <Link href="/privacy-policy" className="hover:text-ink">
                  プライバシーポリシー
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="hover:text-ink">
                  Cookieポリシー
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-ink">
                  利用規約
                </Link>
              </li>
              <li>
                <Link href="/legal-notice" className="hover:text-ink">
                  特定商取引法に基づく表記
                </Link>
              </li>
            </ul>
          </div>
        </div>

          <div className="text-caption mt-12 flex flex-col gap-4 border-t border-[var(--hairline-soft)] pt-8 text-xs tracking-[0.12em] sm:flex-row sm:items-center sm:justify-between">
          <p>© Ailo LLC. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/" locale="ja" className="hover:text-ink">
              日本語
            </Link>
            <Link href="/" locale="en" className="hover:text-ink">
              English
            </Link>
            <Link href="/" locale="zh" className="hover:text-ink">
              中文
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
