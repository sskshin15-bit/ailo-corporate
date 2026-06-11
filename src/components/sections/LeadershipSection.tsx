import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { withBasePath } from "@/lib/site-path";

const leaders = [
  {
    seed: "ceo",
    role: "代表 / CEO",
    name: "佐々木 慎太朗",
    nameImage: "/board-member-s1-name.png",
    portrait: "/board-ceo.png",
    portraitClass: "object-top scale-[1.03] lg:scale-[1.06] lg:translate-y-[0.2rem]",
    bio: "デジタルマーケティング、UI/UX戦略、事業開発統括。ユーザー心理を読み解き「自然な行動」を促すCX設計を牽引。複雑な要件を直感的なサービスへ落とし込むプロダクトマネジメントを主導。",
  },
  {
    seed: "cto",
    role: "共同創業者 / CTO",
    name: "小暮 陽",
    nameImage: "/board-member-k2-name.png",
    portrait: "/board-cto-20260601.png",
    portraitClass:
      "object-top scale-[1.3] origin-top -translate-y-[6.25rem] lg:scale-[1.34] lg:-translate-y-[4.35rem]",
    bio: "システムアーキテクチャ、AI開発、データアナリティクス統括。国内最大手総合広告代理店でのデータサイエンス知見。American Mathematical Olympiad金メダル、海外大学飛び級。日英中トリリンガル。グローバル水準のセキュアなインフラ構築を統括。",
  },
];

export function LeadershipSection() {
  return (
    <section id="leadership" className="section-space relative z-10 bg-paper-deep px-5 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading index="05 / LEADERSHIP" title="道を切り拓く、二人。" />
        <div className="grid gap-8 md:grid-cols-2">
          {leaders.map((l) => (
            <Card key={l.seed} className="overflow-hidden p-0">
              <div className="relative h-56 w-full overflow-hidden border-b border-[var(--hairline-soft)] bg-paper">
                <Image
                  src={withBasePath(l.portrait)}
                  alt={`${l.name}の写真`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={`object-cover grayscale-[18%] ${l.portraitClass}`}
                />
              </div>
              <div className="p-8 text-center md:p-10">
                <p className="font-latin mb-3 text-[11px] tracking-[0.4em] text-gold-readable">{l.role}</p>
                <h3 className="mb-4 flex justify-center">
                  <Image
                    src={withBasePath(l.nameImage)}
                    alt={l.name}
                    width={840}
                    height={170}
                    className="name-mark h-11 w-auto max-w-full object-contain"
                  />
                </h3>
                <p className="text-left text-sm leading-[2.3]">{l.bio}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
