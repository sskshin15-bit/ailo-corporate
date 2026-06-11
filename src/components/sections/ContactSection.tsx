import { ContactForm } from "@/components/ui/ContactForm";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ContactSection() {
  return (
    <section id="contact" className="section-space relative z-10 bg-paper px-5 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          index="CONTACT"
          title="最初の一歩は、無料診断から。"
          lead="グローバル展開企業から国内大手まで。顧客体験を事業資産へ転換する最適な設計・実装をご提案します。"
        />
        <div className="content-panel p-8 md:p-10">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
