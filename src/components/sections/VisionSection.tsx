"use client";

import { useEffect, useRef } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const blocks = [
  {
    phase: 0,
    label: "混沌",
    title: "使命としての「隘路」",
    body: "AIは企業の生存を左右する最大の戦術的要衝。御社の外部CTOとして、この時代最大のボトルネックに切り込む。",
  },
  {
    phase: 1,
    label: "突破",
    title: "哲学としての「AI・愛・O」",
    body: "自律的なAI。余白を生み人を思いやる愛。温もりが永続的な価値として連なるO（輪・繋がり）。",
  },
  {
    phase: 2,
    label: "輪",
    title: "",
    body: "私たちは、人が「人を想う時間」を最大化する次世代インフラを創造します。",
  },
];

export function VisionSection({
  phaseRef,
  activeRef,
  pointerRef,
}: {
  phaseRef: React.MutableRefObject<number>;
  activeRef: React.MutableRefObject<boolean>;
  pointerRef: React.MutableRefObject<{ x: number; y: number; active: boolean }>;
}) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        activeRef.current = entry.isIntersecting;
      },
      { rootMargin: "100% 0px 100% 0px", threshold: 0 }
    );
    observer.observe(el);

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = 1 - Math.min(Math.max((rect.top + rect.height * 0.5) / (vh + rect.height), 0), 1);
      phaseRef.current = progress * 2;
    };

    const onPointer = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 3.5;
      const y = -((e.clientY - rect.top) / rect.height - 0.5) * 3.5;
      pointerRef.current = { x, y, active: true };
    };

    const onTouch = (e: TouchEvent) => {
      const t = e.touches[0];
      const rect = el.getBoundingClientRect();
      pointerRef.current = {
        x: ((t.clientX - rect.left) / rect.width - 0.5) * 3.5,
        y: -((t.clientY - rect.top) / rect.height - 0.5) * 3.5,
        active: true,
      };
      setTimeout(() => {
        pointerRef.current.active = false;
      }, 400);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointermove", onPointer);
    window.addEventListener("touchstart", onTouch, { passive: true });
    onScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("touchstart", onTouch);
      activeRef.current = false;
    };
  }, [phaseRef, activeRef, pointerRef]);

  return (
    <section
      ref={sectionRef}
      id="vision"
      className="section-space relative z-10 min-h-[120vh] bg-paper px-5 sm:px-8 lg:px-10"
    >
      <div className="relative mx-auto max-w-4xl">
        <SectionHeading index="06 / VISION" title="隘路の先に、O（輪）がある。" />
        <div className="space-y-12">
          {blocks.map((b) => (
            <div key={b.label} className="border-l border-[var(--hairline-soft)] pl-6">
              {b.title && (
                <h3 className="font-mincho mb-3 text-lg tracking-[0.08em] text-ink">
                  {b.title}
                </h3>
              )}
              <p className="text-readable text-paper-lift text-sm leading-[2.4]">{b.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
