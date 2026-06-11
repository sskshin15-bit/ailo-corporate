import { privacyPolicyContent } from "@/lib/legal/privacy-policy";
import { LegalSectionsPage } from "@/components/legal/LegalDocumentLayout";

export default function PrivacyPolicyPage() {
  return <LegalSectionsPage content={privacyPolicyContent} />;
}
