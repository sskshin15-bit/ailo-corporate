"use client";

import { useEffect, useRef } from "react";
import { RubyAilo } from "@/components/ui/RubyAilo";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function HeroSection({
  scrollRef,
}: {
  scrollRef: React.MutableRefObject<number>;
}) {
  const heroRef = useRef<HTMLElement>(null);
  const microRef = useRef<HTMLDivElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctasRef = useRef<HTMLDivElement>(null);
  const trustRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);

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
          className="text-glow font-latin mb-16 text-[13px] font-semibold tracking-[0.52em] text-[#8A6A38] uppercase will-change-[transform,opacity]"
          style={{ textIndent: "0.52em" }}
        >
          Beyond the Bottleneck<span className="font-mincho text-[12px] tracking-[0.4em] normal-case">　—　AI・愛・O</span>
        </div>

        <h1
          ref={h1Ref}
          className="text-glow font-mincho text-[clamp(2.3rem,6.4vw,5.6rem)] leading-[1.5] tracking-[0.06em] text-ink will-change-[transform,opacity] max-sm:whitespace-normal sm:whitespace-nowrap"
        >
          <RubyAilo />
        </h1>

        <p
          ref={subRef}
          className="text-glow mt-12 max-w-[37em] text-[clamp(0.82rem,1.2vw,0.98rem)] leading-[2.4] font-medium tracking-[0.06em] text-[#2E2A23] will-change-[transform,opacity]"
        >
          AI実装——それは今、すべての企業が直面する時代最大のボトルネック。
          <br className="hidden sm:inline" />
          Ailoは御社の「外部CTO」として、コンプライアンス・ファーストの設計で
          <br className="hidden sm:inline" />
          この難所を共に突破します。
        </p>

        <div ref={ctasRef} className="mt-14 flex flex-wrap justify-center gap-[1.1rem] will-change-[transform,opacity]">
          <MagneticButton
            href="#contact"
            className="rounded-full border border-ink bg-ink px-12 py-[1.05rem] text-[0.88rem] font-medium tracking-[0.22em] text-paper transition-[transform,box-shadow,background] duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:bg-[#2C2720] hover:shadow-[0_18px_40px_-18px_rgba(168,133,79,0.55)] [text-indent:0.22em]"
          >
            相談する
          </MagneticButton>
          <MagneticButton
            href="#contact"
            className="rounded-full border border-[rgba(33,29,23,0.45)] bg-[rgba(255,255,255,0.22)] px-12 py-[1.05rem] text-[0.88rem] font-medium tracking-[0.22em] text-ink transition-[transform,border-color,color,background] duration-[450ms] hover:border-gold hover:bg-[rgba(255,255,255,0.5)] hover:text-[#7D5F31] [text-indent:0.22em]"
          >
            資料請求
          </MagneticButton>
        </div>

        <div
          ref={trustRef}
          className="text-glow mt-[4.6rem] flex flex-wrap justify-center gap-y-2 text-[11px] font-medium tracking-[0.18em] text-[#3D3830] will-change-[transform,opacity]"
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

      <div
        ref={hintRef}
        className="pointer-events-none fixed bottom-[2.4rem] left-1/2 z-10 -translate-x-1/2 font-latin text-[11px] tracking-[0.5em] text-gold opacity-85"
        style={{ textIndent: "0.5em" }}
      >
        Scroll
        <span
          aria-hidden
          className="mx-auto mt-3 block h-[42px] w-px origin-top animate-[drip_2.6s_ease-in-out_infinite] bg-gradient-to-b from-gold to-transparent"
        />
      </div>

      <div aria-hidden className="h-[220vh]" />
    </>
  );
}
