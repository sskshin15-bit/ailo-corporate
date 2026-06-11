"use client";

import { useEffect, useRef } from "react";

export function AxisLine() {
  const ref = useRef<HTMLDivElement>(null);
  const lastScroll = useRef(0);
  const lastTime = useRef(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      const now = performance.now();
      const dt = Math.max(now - lastTime.current, 16);
      const velocity = Math.abs(window.scrollY - lastScroll.current) / dt;
      lastScroll.current = window.scrollY;
      lastTime.current = now;
      const pulse = Math.min(velocity * 0.8, 1);
      el.style.setProperty("--pulse", String(pulse));
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-y-0 z-20 hidden md:block"
      style={{ left: "38%" }}
    >
      <div
        className="h-full w-px"
        style={{
          background: `linear-gradient(to bottom, transparent, rgba(168,133,79,calc(0.15 + var(--pulse,0)*0.35)) 20%, rgba(168,133,79,calc(0.25 + var(--pulse,0)*0.45)) 50%, rgba(168,133,79,calc(0.15 + var(--pulse,0)*0.35)) 80%, transparent)`,
        }}
      />
    </div>
  );
}
