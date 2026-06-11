"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--mx", `${x}%`);
    el.style.setProperty("--my", `${y}%`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className={`washi-card relative overflow-hidden ${className}`}
      style={{
        backgroundImage:
          "radial-gradient(circle at var(--mx,50%) var(--my,50%), rgba(168,133,79,0.08), transparent 55%)",
      }}
    >
      {children}
    </div>
  );
}
