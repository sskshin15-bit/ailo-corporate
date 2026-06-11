import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { newsItems } from "@/lib/news-content";
import { Nav } from "@/components/ui/Nav";
import { Footer } from "@/components/ui/Footer";
import { GrainOverlay } from "@/components/ui/GrainOverlay";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    newsItems.map((item) => ({ locale, slug: item.slug }))
  );
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { slug } = await params;
  const item = newsItems.find((n) => n.slug === slug);
  if (!item) notFound();
  const t = item.translations.ja;

  return (
    <>
      <GrainOverlay />
      <Nav />
      <main className="relative z-10 min-h-screen bg-paper px-5 pb-20 pt-28 sm:px-8">
        <article className="mx-auto max-w-3xl">
          <p className="font-latin text-[11px] tracking-[0.2em] text-gold">{t.category}</p>
          <time className="mt-2 block text-xs text-ink-soft">{t.date}</time>
          <h1 className="font-mincho mt-4 text-2xl tracking-[0.08em]">{t.title}</h1>
          <div className="mt-8 space-y-4 text-sm leading-[2.4] text-ink-soft">
            {t.content.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <Link href="/news" className="mt-12 inline-block text-sm text-ink-soft hover:text-ink">
            ← ニュース一覧
          </Link>
        </article>
      </main>
      <Footer />
    </>
  );
}
