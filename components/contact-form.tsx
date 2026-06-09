'use client'

import { useEffect, useState, type FormEvent } from 'react'
import { Lock, Check } from 'lucide-react'
import { useLocale } from '@/components/locale-provider'

const CONTACT_EMAIL = 'contact@ailo.co.jp'
const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`

const copy = {
  ja: {
    thanksTitle: 'ありがとうございます。',
    thanksBody:
      'お問い合わせを受け付けました。担当者より、機密性に十分配慮したうえで順次ご連絡いたします。',
    formAria: 'お問い合わせフォーム',
    name: 'お名前',
    namePlaceholder: '山田 太郎',
    autoResponse: 'お問い合わせありがとうございます。内容を確認し、担当よりご連絡いたします。',
    company: '会社名',
    email: 'メールアドレス',
    phone: '電話番号（任意）',
    companyPlaceholder: '会社名をご入力ください',
    phonePlaceholder: '03-xxxx-xxxx',
    help: 'ご相談内容',
    inquiryType: 'ご希望内容',
    inquiryConsultation: 'ご相談',
    inquiryMaterials: '資料請求',
    inquiryCareers: '採用について',
    messagePlaceholder: '貴社の課題やご相談内容をご記入ください。',
    secure: '通信は暗号化され、厳重な機密管理のもとで取り扱います',
    submit: '送信する',
    submitting: '送信中...',
    submitError: '送信に失敗しました。時間をおいて再度お試しください。',
  },
  en: {
    thanksTitle: 'Thank you.',
    thanksBody: 'We have received your inquiry. Our team will review it confidentially and contact you shortly.',
    formAria: 'Contact form',
    name: 'Full Name',
    namePlaceholder: 'Jane Smith',
    autoResponse: 'Thank you for contacting Ailo. We will review your inquiry and get back to you shortly.',
    company: 'Company',
    email: 'Business Email',
    phone: 'Phone (optional)',
    companyPlaceholder: 'Company name',
    phonePlaceholder: '+81 ...',
    help: 'How can we help?',
    inquiryType: 'Request Type',
    inquiryConsultation: 'Consultation',
    inquiryMaterials: 'Materials Request',
    inquiryCareers: 'Careers',
    messagePlaceholder: 'Tell us about your organization and objectives.',
    secure: 'Encrypted and handled with strict confidentiality',
    submit: 'Submit Inquiry',
    submitting: 'Sending...',
    submitError: 'Failed to send. Please try again shortly.',
  },
  zh: {
    thanksTitle: '感谢您的咨询。',
    thanksBody: '我们已收到您的咨询内容，团队将在严格保密的前提下尽快与您联系。',
    formAria: '联系表单',
    name: '姓名',
    namePlaceholder: '张三',
    autoResponse: '感谢您联系Ailo。我们已收到您的咨询，将尽快与您取得联系。',
    company: '公司名称',
    email: '企业邮箱',
    phone: '电话（可选）',
    companyPlaceholder: '请输入公司名称',
    phonePlaceholder: '+81 ...',
    help: '您的需求',
    inquiryType: '咨询类型',
    inquiryConsultation: '咨询洽谈',
    inquiryMaterials: '资料索取',
    inquiryCareers: '招聘相关',
    messagePlaceholder: '请填写贵公司的需求与目标。',
    secure: '信息将加密传输并严格保密处理',
    submit: '提交咨询',
    submitting: '发送中...',
    submitError: '发送失败，请稍后重试。',
  },
} as const

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [inquiryType, setInquiryType] = useState<'consultation' | 'materials' | 'careers'>('consultation')
  const { locale } = useLocale()
  const t = copy[locale]

  useEffect(() => {
    const type = new URLSearchParams(window.location.search).get('inquiry')
    if (type === 'materials' || type === 'careers') {
      setInquiryType(type)
    }
  }, [])

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (isSubmitting) return

    setSubmitError(null)
    setIsSubmitting(true)

    try {
      const formElement = e.currentTarget
      const formData = new FormData(formElement)

      formData.append('_subject', `[AILO Contact] ${inquiryType}`)
      formData.append('_template', 'table')
      formData.append('_captcha', 'true')
      formData.append('_autoresponse', t.autoResponse)
      formData.append('locale', locale)

      const response = await fetch(FORMSUBMIT_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      })

      const payload = (await response.json().catch(() => null)) as
        | { success?: string | boolean; message?: string }
        | null

      const isSuccess = response.ok && (payload?.success === true || payload?.success === 'true')

      if (!isSuccess) {
        throw new Error(payload?.message || `Request failed: ${response.status}`)
      }

      setSubmitted(true)
      formElement.reset()
      setInquiryType('consultation')
    } catch {
      setSubmitError(t.submitError)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="flex min-h-[420px] flex-col items-center justify-center border border-border/60 bg-card p-10 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-primary/50 text-primary">
          <Check className="h-6 w-6" strokeWidth={1.5} />
        </span>
        <h3 className="mt-8 font-serif text-2xl font-light text-foreground">{t.thanksTitle}</h3>
        <p className="mt-3 max-w-sm text-sm font-light leading-relaxed text-muted-foreground text-pretty">
          {t.thanksBody}
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-border/60 bg-card p-8 lg:p-10"
      aria-label={t.formAria}
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="name" label={t.name} type="text" autoComplete="name" placeholder={t.namePlaceholder} />
        <Field
          id="company"
          label={t.company}
          type="text"
          autoComplete="organization"
          placeholder={t.companyPlaceholder}
        />
      </div>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <Field id="email" label={t.email} type="email" autoComplete="email" placeholder="name@company.com" />
        <Field
          id="phone"
          label={t.phone}
          type="tel"
          autoComplete="tel"
          placeholder={t.phonePlaceholder}
          required={false}
        />
      </div>

      <div className="mt-6 flex flex-col gap-2">
        <label htmlFor="inquiryType" className="text-xs font-light uppercase tracking-[0.2em] text-muted-foreground">
          {t.inquiryType}
        </label>
        <select
          id="inquiryType"
          name="inquiryType"
          value={inquiryType}
          onChange={(e) => setInquiryType(e.target.value as 'consultation' | 'materials' | 'careers')}
          className="border border-border bg-background px-4 py-3 text-sm font-light text-foreground focus:border-primary focus:outline-none"
        >
          <option value="consultation">{t.inquiryConsultation}</option>
          <option value="materials">{t.inquiryMaterials}</option>
          <option value="careers">{t.inquiryCareers}</option>
        </select>
      </div>

      <div className="mt-6 flex flex-col gap-2">
        <label htmlFor="message" className="text-xs font-light uppercase tracking-[0.2em] text-muted-foreground">
          {t.help}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder={t.messagePlaceholder}
          className="resize-none border border-border bg-background px-4 py-3 text-sm font-light text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none"
        />
      </div>

      <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="flex items-center gap-2 text-xs font-light text-muted-foreground">
          <Lock className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
          {t.secure}
        </p>
        <button
          type="submit"
          disabled={isSubmitting}
          aria-busy={isSubmitting}
          className="bg-primary px-8 py-4 text-sm font-medium tracking-wide text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
        >
          {isSubmitting ? t.submitting : t.submit}
        </button>
      </div>
      {submitError ? <p className="mt-4 text-sm text-red-300">{submitError}</p> : null}
    </form>
  )
}

function Field({
  id,
  label,
  type,
  autoComplete,
  placeholder,
  required = true,
}: {
  id: string
  label: string
  type: string
  autoComplete?: string
  placeholder?: string
  required?: boolean
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-xs font-light uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className="border border-border bg-background px-4 py-3 text-sm font-light text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none"
      />
    </div>
  )
}
