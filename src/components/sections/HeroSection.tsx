"use client";

import { useEffect, useRef } from "react";
import type Lenis from "lenis";
import { RubyAilo } from "@/components/ui/RubyAilo";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function HeroSection({
  scrollRef,
  lenisRef,
}: {
  scrollRef: React.MutableRefObject<number>;
  lenisRef: React.MutableRefObject<Lenis | null>;
}) {
  const heroRef = useRef<HTMLElement>(null);
  const microRef = useRef<HTMLDivElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctasRef = useRef<HTMLDivElement>(null);
  const trustRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const layers: [HTMLElement | null, number][] = [
      [microRef.current, 1.25],
      [h1Ref.current, 1.0],
      [subRef.current, 0.85],
      [ctasRef.current, 0.75],
      [trustRef.current, 0.65],
    ];

    let raf = 0;
    const tick = () => {
      const scrollP = scrollRef.current;
      const e =
        scrollP < 0.5
          ? 2 * scrollP * scrollP
          : 1 - Math.pow(-2 * scrollP + 2, 2) / 2;
      const rise = -e * 9;

      for (const [el, k] of layers) {
        if (!el) continue;
        el.style.transform = `translateY(${rise * k}vh)`;
        el.style.opacity = String(Math.max(0, 1 - e * 1.45 * k));
      }

      if (hintRef.current) {
        hintRef.current.style.opacity = String(Math.max(0, 0.85 - scrollP * 3));
        hintRef.current.style.pointerEvents = scrollP > 0.35 ? "none" : "auto";
      }
      if (heroRef.current) {
        heroRef.current.style.setProperty("--scrimO", String(Math.max(0, 1 - e * 1.6)));
        heroRef.current.style.pointerEvents = scrollP > 0.4 ? "none" : "auto";
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [scrollRef]);

  const onScrollHint = () => {
    const target = window.innerHeight * 2.3;
    const lenis = lenisRef.current;
    if (lenis) {
      lenis.scrollTo(target, { duration: 1.8 });
    } else {
      window.scrollTo({ top: target, behavior: "smooth" });
    }
  };

  return (
    <>
      <section
        ref={heroRef}
        id="top"
        className="pointer-events-auto fixed inset-0 z-10 flex flex-col items-center justify-center px-[6vw] text-center"
        style={{ ["--scrimO" as string]: 1 }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-[8%] -z-10"
          style={{
            background:
              "radial-gradient(58% 54% at 50% 47%, rgba(247,244,237,.94) 0%, rgba(247,244,237,.72) 44%, rgba(247,244,237,.30) 66%, rgba(247,244,237,0) 80%)",
            opacity: "var(--scrimO, 1)",
          }}
        />

        <div
          ref={microRef}
          className="hero-micro text-glow font-latin mb-16 text-[13px] font-semibold tracking-[0.52em] text-[#8A6A38] uppercase will-change-[transform,opacity]"
          style={{ textIndent: "0.52em" }}
        >
          Beyond the Bottleneck
          <span className="jp font-mincho text-[12px] tracking-[0.4em] normal-case">　—　AI・愛・O</span>
        </div>

        <h1
          ref={h1Ref}
          className="text-glow font-mincho text-[clamp(2.3rem,6.4vw,5.6rem)] leading-[1.5] tracking-[0.06em] text-ink will-change-[transform,opacity] max-sm:whitespace-normal sm:whitespace-nowrap"
        >
          <RubyAilo />
        </h1>

        <p
          ref={subRef}
          className="hero-sub text-glow mt-12 max-w-[37em] text-[clamp(0.82rem,1.2vw,0.98rem)] leading-[2.4] font-medium tracking-[0.06em] text-[#2E2A23] will-change-[transform,opacity]"
        >
          AI実装——それは今、すべての企業が直面する時代最大のボトルネック。
          <br />
          Ailoは御社の「外部CTO」として、コンプライアンス・ファーストの設計で
          <br />
          この難所を共に突破します。
        </p>

        <div
          ref={ctasRef}
          className="hero-ctas mt-14 flex flex-wrap justify-center gap-[1.1rem] will-change-[transform,opacity]"
        >
          <MagneticButton
            href="#contact"
            className="hero-btn hero-btn-primary rounded-full border border-ink bg-ink px-12 py-[1.05rem] text-[0.88rem] font-medium tracking-[0.22em] text-paper transition-[transform,box-shadow,background] duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:bg-[#2C2720] hover:shadow-[0_18px_40px_-18px_rgba(168,133,79,0.55)] [text-indent:0.22em]"
          >
            相談する
          </MagneticButton>
          <MagneticButton
            href="#contact"
            className="hero-btn hero-btn-ghost rounded-full border border-[rgba(33,29,23,0.45)] bg-[rgba(255,255,255,0.22)] px-12 py-[1.05rem] text-[0.88rem] font-medium tracking-[0.22em] text-ink transition-[transform,border-color,color,background] duration-[450ms] hover:border-gold hover:bg-[rgba(255,255,255,0.5)] hover:text-[#7D5F31] [text-indent:0.22em]"
          >
            資料請求
          </MagneticButton>
        </div>

        <div
          ref={trustRef}
          className="hero-trust text-glow mt-[4.6rem] flex flex-wrap justify-center gap-y-2 text-[11px] font-medium tracking-[0.18em] text-[#3D3830] will-change-[transform,opacity]"
        >
          {[
            "特許出願中（SendThanks）",
            "コンプライアンス・ファースト設計",
            "日・英・中 対応",
            "専門家ネットワーク連携",
          ].map((item, i, arr) => (
            <span
              key={item}
              className={`px-[1.6em] ${i < arr.length - 1 ? "border-r border-[rgba(33,29,23,0.22)] max-sm:border-r-0" : ""}`}
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      <button
        ref={hintRef}
        type="button"
        id="scrollhint"
        className="scrollhint"
        aria-label="下へスクロールして光の中へ"
        onClick={onScrollHint}
      >
        <span className="cap">Scroll</span>
        <span className="ring">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path
              d="M2 5 L8 11 L14 5"
              stroke="#A8854F"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      <div aria-hidden className="h-[220vh]" />
    </>
  );
}
