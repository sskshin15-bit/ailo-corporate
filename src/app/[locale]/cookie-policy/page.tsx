import { cookiePolicyContent } from "@/lib/legal/cookie-policy";
import { LegalSectionsPage } from "@/components/legal/LegalDocumentLayout";

export default function CookiePolicyPage() {
  return <LegalSectionsPage content={cookiePolicyContent} />;
}
