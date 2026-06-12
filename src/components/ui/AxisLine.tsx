"use client";

import { useEffect, useRef } from "react";

/** Editorial axis hairline — sits behind content; fades out after the hero gate. */
export function AxisLine() {
  const ref = useRef<HTMLDivElement>(null);
  const lastScroll = useRef(0);
  const lastTime = useRef(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => {
      const now = performance.now();
      const dt = Math.max(now - lastTime.current, 16);
      const scrollY = window.scrollY;
      const velocity = Math.abs(scrollY - lastScroll.current) / dt;
      lastScroll.current = scrollY;
      lastTime.current = now;

      const pulse = Math.min(velocity * 0.8, 1);
      el.style.setProperty("--pulse", String(pulse));

      const vh = window.innerHeight;
      const fadeStart = vh * 0.85;
      const fadeEnd = vh * 2.0;
      const scrollFade =
        1 - Math.min(Math.max((scrollY - fadeStart) / (fadeEnd - fadeStart), 0), 1);
      el.style.opacity = String(scrollFade);
    };

    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-y-0 z-[1] hidden transition-opacity duration-700 md:block"
      style={{ left: "38%" }}
    >
      <div
        className="h-full w-px"
        style={{
          background: `linear-gradient(to bottom, transparent, rgba(168,133,79,calc(0.12 + var(--pulse,0)*0.28)) 20%, rgba(168,133,79,calc(0.2 + var(--pulse,0)*0.35)) 50%, rgba(168,133,79,calc(0.12 + var(--pulse,0)*0.28)) 80%, transparent)`,
        }}
      />
    </div>
  );
}
