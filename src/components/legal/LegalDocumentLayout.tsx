"use client";

import { useParams } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { Nav } from "@/components/ui/Nav";
import { Footer } from "@/components/ui/Footer";
import { GrainOverlay } from "@/components/ui/GrainOverlay";

export type LegalLocale = "ja" | "en" | "zh";

export type LegalSection = { title: string; body: string };

export type LegalSectionsDoc = Record<
  LegalLocale,
  {
    label: string;
    heading: string;
    updatedAt: string;
    intro: string;
    sections: LegalSection[];
    backHome: string;
  }
>;

export type LegalNoticeItem = { term: string; desc: string };

export type LegalNoticeDoc = Record<
  LegalLocale,
  {
    label: string;
    heading: string;
    updatedAt: string;
    intro: string;
    items: LegalNoticeItem[];
    notesTitle: string;
    notes: string;
    backHome: string;
  }
>;

export function LegalSectionsPage({ content }: { content: LegalSectionsDoc }) {
  const params = useParams();
  const locale = (params?.locale as LegalLocale) ?? "ja";
  const t = content[locale] ?? content.ja;

  return (
    <LegalShell>
      <p className="font-latin text-gold-readable text-[11px] tracking-[0.35em] uppercase">{t.label}</p>
      <h1 className="font-mincho text-paper-lift mt-5 text-3xl tracking-[0.08em] text-ink lg:text-4xl">
        {t.heading}
      </h1>
      <p className="text-caption mt-4 text-sm">{t.updatedAt}</p>
      <p className="text-readable text-paper-lift mt-8 text-sm leading-[2.4]">{t.intro}</p>

      <div className="mt-10 space-y-8">
        {t.sections.map((section) => (
          <article
            key={section.title}
            className="border-l border-[var(--hairline)] pl-5"
          >
            <h2 className="font-mincho text-lg tracking-[0.06em] text-ink">{section.title}</h2>
            <p className="text-readable mt-3 text-sm leading-[2.4]">{section.body}</p>
          </article>
        ))}
      </div>

      <Link
        href="/"
        className="mt-12 inline-flex rounded-full border border-[rgba(33,29,23,0.45)] px-6 py-2.5 text-sm tracking-[0.12em] text-ink transition-colors hover:border-gold hover:text-[#7D5F31]"
      >
        {t.backHome}
      </Link>
    </LegalShell>
  );
}

export function LegalNoticePageView({ content }: { content: LegalNoticeDoc }) {
  const params = useParams();
  const locale = (params?.locale as LegalLocale) ?? "ja";
  const t = content[locale] ?? content.ja;

  return (
    <LegalShell>
      <p className="font-latin text-gold-readable text-[11px] tracking-[0.35em] uppercase">{t.label}</p>
      <h1 className="font-mincho text-paper-lift mt-5 text-3xl tracking-[0.08em] text-ink lg:text-4xl">
        {t.heading}
      </h1>
      <p className="text-caption mt-4 text-sm">{t.updatedAt}</p>
      <p className="text-readable text-paper-lift mt-8 text-sm leading-[2.4]">{t.intro}</p>

      <dl className="mt-10 space-y-5">
        {t.items.map((item) => (
          <div key={item.term} className="border-l border-[var(--hairline)] pl-5">
            <dt className="font-mincho text-lg tracking-[0.06em] text-ink">{item.term}</dt>
            <dd className="text-readable mt-2 text-sm leading-[2.4]">{item.desc}</dd>
          </div>
        ))}
      </dl>

      <article className="mt-10 border-l border-[var(--hairline)] pl-5">
        <h2 className="font-mincho text-lg tracking-[0.06em] text-ink">{t.notesTitle}</h2>
        <p className="text-readable mt-3 text-sm leading-[2.4]">{t.notes}</p>
      </article>

      <Link
        href="/"
        className="mt-12 inline-flex rounded-full border border-[rgba(33,29,23,0.45)] px-6 py-2.5 text-sm tracking-[0.12em] text-ink transition-colors hover:border-gold hover:text-[#7D5F31]"
      >
        {t.backHome}
      </Link>
    </LegalShell>
  );
}

function LegalShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GrainOverlay />
      <Nav />
      <main className="relative z-10 min-h-screen bg-paper px-5 pb-20 pt-28 sm:px-8 lg:px-10">
        <section className="mx-auto max-w-4xl">{children}</section>
      </main>
      <Footer />
    </>
  );
}
