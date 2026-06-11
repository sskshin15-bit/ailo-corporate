import { legalNoticeContent } from "@/lib/legal/legal-notice";
import { LegalNoticePageView } from "@/components/legal/LegalDocumentLayout";

export default function LegalNoticePage() {
  return <LegalNoticePageView content={legalNoticeContent} />;
}
