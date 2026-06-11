"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function SectionHeading({
  index,
  title,
  lead,
  children,
}: {
  index: string;
  title: string;
  lead?: string;
  children?: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      el.querySelectorAll("[data-char]").forEach((c) => {
        (c as HTMLElement).style.opacity = "1";
        (c as HTMLElement).style.transform = "none";
      });
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        const chars = el.querySelectorAll("[data-char]");
        chars.forEach((char, i) => {
          setTimeout(() => {
            (char as HTMLElement).style.opacity = "1";
            (char as HTMLElement).style.transform = "translateY(0)";
          }, i * 25);
        });
        observer.disconnect();
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const split = (text: string) =>
    [...text].map((ch, i) => (
      <span
        key={i}
        data-char
        className="inline-block opacity-0 translate-y-[0.6em] transition-[opacity,transform] duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ transitionDelay: `${i * 0.025}s` }}
      >
        {ch === " " ? "\u00a0" : ch}
      </span>
    ));

  return (
    <div ref={ref} className="mb-12 md:mb-16">
      <p className="font-latin mb-6 text-[12px] font-semibold tracking-[0.5em] text-gold-readable uppercase">
        {index}
      </p>
      <h2 className="font-mincho text-[clamp(1.6rem,3.5vw,2.4rem)] leading-[1.5] tracking-[0.08em] text-ink text-paper-lift">
        {split(title)}
      </h2>
      {lead && (
        <p className="text-readable text-paper-lift mt-6 max-w-2xl text-sm leading-[2.3]">{lead}</p>
      )}
      {children}
    </div>
  );
}
