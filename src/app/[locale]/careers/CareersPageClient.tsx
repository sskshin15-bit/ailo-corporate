"use client";

import { useParams } from "next/navigation";
import { Nav } from "@/components/ui/Nav";
import { Footer } from "@/components/ui/Footer";
import { GrainOverlay } from "@/components/ui/GrainOverlay";
import { AxisLine } from "@/components/ui/AxisLine";
import { Link } from "@/i18n/navigation";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { withBasePath } from "@/lib/site-path";

export default function CareersPageClient() {
  const params = useParams();
  const locale = (params?.locale as string) ?? "ja";
  const contactHref = withBasePath(`/${locale}/?inquiry=careers#contact`);
  return (
    <>
      <GrainOverlay />
      <AxisLine />
      <Nav />
      <main className="relative z-10 min-h-screen bg-paper px-5 pb-20 pt-28 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-4xl">
          <p className="font-latin mb-4 text-[12px] font-semibold tracking-[0.5em] text-gold uppercase">
            Careers
          </p>
          <h1 className="font-mincho mb-8 text-3xl tracking-[0.08em]">採用情報</h1>
          <p className="mb-12 text-sm leading-[2.4] text-ink-soft">
            Ailoは、AI・リーガルテック・SaaSを横断して事業を一気に伸ばす、少数精鋭のスタートアップです。0→1と1→10を同時に動かせる仲間を募集しています。
          </p>

          <div className="space-y-10">
            {[
              {
                cat: "セールス・事業開発（積極採用中：営業/AE、BizDev）",
                roles: ["営業 / アカウントエグゼクティブ（法人向け）", "事業開発 / BizDev"],
              },
              {
                cat: "グロース・顧客支援（注力採用中：CS、マーケ/グロース）",
                roles: ["カスタマーサクセス", "マーケティング / グロース"],
              },
              {
                cat: "プロダクト・開発（継続採用中：フルスタック、AIソリューションエンジニア、PM/PjM）",
                roles: [
                  "フルスタックエンジニア",
                  "AIソリューションエンジニア",
                  "プロダクトマネージャー",
                  "プロジェクトマネージャー",
                ],
              },
            ].map((g) => (
              <div key={g.cat} className="washi-card p-8">
                <h2 className="font-mincho mb-4 text-lg tracking-[0.06em]">{g.cat}</h2>
                <ul className="space-y-2 text-sm text-ink-soft">
                  {g.roles.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 washi-card p-8">
            <h2 className="font-mincho mb-4 text-lg">報酬・インセンティブ</h2>
            <ul className="space-y-2 text-sm leading-[2.2] text-ink-soft">
              <li>想定年収700万–1,500万円、四半期インセンティブ上限なし、セールスはコミッション制。</li>
            </ul>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="washi-card p-8">
              <h2 className="font-mincho mb-4 text-lg">求める人物像</h2>
              <ul className="space-y-2 text-sm leading-[2.2] text-ink-soft">
                <li>顧客課題を自分ごと化し、解決までコミットできる方</li>
                <li>不確実性を楽しみながら、仮説検証を高速で回せる方</li>
                <li>肩書きに縛られず、必要な役割を自ら取りにいける方</li>
              </ul>
            </div>
            <div className="washi-card p-8">
              <h2 className="font-mincho mb-4 text-lg">働き方</h2>
              <ul className="space-y-2 text-sm leading-[2.2] text-ink-soft">
                <li>リモート中心 / アウトプット評価 / 法令・社内規程に基づく勤務条件</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <MagneticButton
              href={contactHref}
              className="rounded-full bg-ink px-8 py-3 text-sm tracking-[0.2em] text-paper"
            >
              採用について問い合わせる
            </MagneticButton>
            <Link href="/" className="self-center text-sm text-ink-soft hover:text-ink">
              トップページへ戻る
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
