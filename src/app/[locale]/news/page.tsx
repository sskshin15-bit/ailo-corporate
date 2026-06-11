import { Link } from "@/i18n/navigation";
import { newsItems } from "@/lib/news-content";
import { Nav } from "@/components/ui/Nav";
import { Footer } from "@/components/ui/Footer";
import { GrainOverlay } from "@/components/ui/GrainOverlay";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default function NewsPage() {
  return (
    <>
      <GrainOverlay />
      <Nav />
      <main className="relative z-10 min-h-screen bg-paper px-5 pb-20 pt-28 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-mincho mb-10 text-3xl tracking-[0.08em]">ニュース</h1>
          <ul className="divide-y divide-[var(--hairline-soft)]">
            {newsItems.map((item) => (
              <li key={item.slug} className="py-6">
                <time className="font-latin text-[11px] tracking-[0.2em] text-gold">
                  {item.translations.ja.date}
                </time>
                <Link
                  href={`/news/${item.slug}`}
                  className="mt-2 block text-sm tracking-[0.06em] text-ink hover:text-gold"
                >
                  {item.translations.ja.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
