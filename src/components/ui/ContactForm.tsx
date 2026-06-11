"use client";

import { useEffect, useState, type FormEvent } from "react";
import { Link } from "@/i18n/navigation";
import { MagneticButton } from "./MagneticButton";

const FORMSUBMIT_ENDPOINT = "https://formsubmit.co/ajax/contact@ailo.co.jp";

export function ContactForm() {
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [inquiryType, setInquiryType] = useState("ご相談");

  useEffect(() => {
    const type = new URLSearchParams(window.location.search).get("inquiry");
    if (type === "materials") setInquiryType("資料請求");
    if (type === "careers") setInquiryType("採用について");
    if (type === "consultation") setInquiryType("ご相談");
  }, []);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!consent) {
      setError("プライバシーポリシーへの同意が必要です。");
      return;
    }
    if (isSubmitting) return;

    setError("");
    setIsSubmitting(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    data.set("inquiry_type", inquiryType);
    data.set("_subject", `[AILO Contact] ${inquiryType}`);
    data.set("_template", "table");
    data.set("_captcha", "true");
    data.set(
      "_autoresponse",
      "お問い合わせありがとうございます。内容を確認し、担当よりご連絡いたします。"
    );

    try {
      const response = await fetch(FORMSUBMIT_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      const payload = (await response.json().catch(() => null)) as
        | { success?: string | boolean; message?: string }
        | null;
      const ok = response.ok && (payload?.success === true || payload?.success === "true");
      if (!ok) throw new Error(payload?.message || "send failed");

      setSubmitted(true);
      form.reset();
      setConsent(false);
      setInquiryType("ご相談");
    } catch {
      setError("送信に失敗しました。時間をおいて再度お試しください。");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full border-0 border-b border-[var(--hairline)] bg-transparent py-3 text-sm text-ink outline-none transition-colors focus:border-gold";

  if (submitted) {
    return (
      <p className="washi-card p-8 text-sm leading-[2.2] text-ink">
        お問い合わせを受け付けました。担当者より、機密性に十分配慮したうえで順次ご連絡いたします。
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      <input type="hidden" name="_subject" value="Ailo お問い合わせ" />
      <input type="text" name="_honey" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

      <div className="grid gap-8 md:grid-cols-2">
        <label className="block">
          <span className="text-caption mb-2 block text-[11px] tracking-[0.14em]">お名前</span>
          <input name="name" required className={inputClass} />
        </label>
        <label className="block">
          <span className="text-caption mb-2 block text-[11px] tracking-[0.14em]">会社名</span>
          <input name="company" required className={inputClass} />
        </label>
        <label className="block">
          <span className="text-caption mb-2 block text-[11px] tracking-[0.14em]">メールアドレス</span>
          <input name="email" type="email" required className={inputClass} />
        </label>
        <label className="block">
          <span className="text-caption mb-2 block text-[11px] tracking-[0.14em]">電話番号（任意）</span>
          <input name="phone" type="tel" className={inputClass} />
        </label>
      </div>

      <label className="block">
        <span className="text-caption mb-2 block text-[11px] tracking-[0.14em]">ご希望内容</span>
        <select
          name="inquiry_type"
          required
          value={inquiryType}
          onChange={(e) => setInquiryType(e.target.value)}
          className={inputClass}
        >
          <option value="ご相談">ご相談</option>
          <option value="資料請求">資料請求</option>
          <option value="採用について">採用について</option>
        </select>
      </label>

      <label className="block">
        <span className="text-caption mb-2 block text-[11px] tracking-[0.14em]">ご相談内容</span>
        <textarea name="message" required rows={5} className={`${inputClass} resize-none`} />
      </label>

      <label className="flex items-start gap-3 text-sm text-ink">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-1"
          required
        />
        <span>
          <Link href="/privacy-policy" className="underline decoration-gold/50 underline-offset-4">
            プライバシーポリシー
          </Link>
          に同意する
        </span>
      </label>

      {error && <p className="text-sm text-red-800">{error}</p>}

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <MagneticButton
          type="submit"
          className="rounded-full bg-ink px-8 py-3 text-sm font-medium tracking-[0.22em] text-paper transition-shadow hover:shadow-[0_18px_40px_-18px_rgba(168,133,79,0.55)]"
        >
          相談する
        </MagneticButton>
        <MagneticButton
          type="button"
          onClick={() => setInquiryType("資料請求")}
          className="rounded-full border border-[rgba(33,29,23,0.45)] bg-[rgba(255,255,255,0.22)] px-8 py-3 text-sm font-medium tracking-[0.22em] text-ink transition-colors hover:border-gold hover:text-[#7D5F31]"
        >
          資料請求
        </MagneticButton>
        <p className="text-caption text-[11px] leading-[2] sm:ml-4">
          お預かりする情報は機密保持に十分配慮して取り扱います。
        </p>
      </div>
    </form>
  );
}
