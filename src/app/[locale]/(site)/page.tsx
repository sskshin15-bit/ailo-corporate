import { routing } from "@/i18n/routing";
import HomePageClient from "./HomePageClient";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default function HomePage() {
  return <HomePageClient />;
}
