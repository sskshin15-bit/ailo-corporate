"use client";

import { useState } from "react";
import { Link } from "@/i18n/navigation";
import { MagneticButton } from "./MagneticButton";

const links = [
  { href: "#solutions", label: "ソリューション" },
  { href: "#meo", label: "MEO" },
  { href: "#readiness", label: "会社情報" },
  { href: "/news", label: "ニュース" },
  { href: "#contact", label: "お問い合わせ" },
];

export function Nav({ basePath = "" }: { basePath?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[rgba(33,29,23,0.08)] bg-paper/88 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
        <Link
          href="/"
          className="font-latin text-sm font-semibold tracking-[0.35em] text-ink"
        >
          AILO
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href.startsWith("#") ? l.href : `${basePath}${l.href}`}
              className="text-[11px] tracking-[0.18em] text-caption transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
          <MagneticButton
            href="#contact"
            className="rounded-full bg-ink px-6 py-2.5 text-[11px] font-medium tracking-[0.22em] text-paper transition-shadow hover:shadow-[0_18px_40px_-18px_rgba(168,133,79,0.55)]"
          >
            相談する
          </MagneticButton>
        </nav>

        <button
          type="button"
          className="lg:hidden text-xs tracking-[0.2em] text-ink"
          onClick={() => setOpen(!open)}
          aria-label="メニュー"
        >
          Menu
        </button>
      </div>

      {open && (
        <div className="border-t border-[var(--hairline-soft)] bg-paper/95 px-5 py-6 lg:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href.startsWith("#") ? l.href : `${basePath}${l.href}`}
              className="block py-3 text-sm tracking-[0.12em] text-ink"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
