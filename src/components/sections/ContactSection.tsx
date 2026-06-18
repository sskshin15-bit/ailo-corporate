import { ContactForm } from "@/components/ui/ContactForm";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ContactSection() {
  return (
    <section id="contact" className="section-space relative z-10 bg-paper px-5 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          index="CONTACT"
          title="お問い合わせ"
          lead="AI導入のご相談から、業務診断・実装・定着支援まで。グローバル展開企業から国内大手まで、御社に最適なAI導入プランをご提案します。"
        />
        <div className="content-panel p-8 md:p-10">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
