import { termsContent } from "@/lib/legal/terms";
import { LegalSectionsPage } from "@/components/legal/LegalDocumentLayout";

export default function TermsPage() {
  return <LegalSectionsPage content={termsContent} />;
}
