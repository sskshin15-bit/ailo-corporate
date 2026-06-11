import { routing } from "@/i18n/routing";
import CareersPageClient from "./CareersPageClient";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default function CareersPage() {
  return <CareersPageClient />;
}
