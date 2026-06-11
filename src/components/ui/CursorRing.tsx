"use client";

import { useEffect, useRef, useState } from "react";

export function CursorRing() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    setEnabled(fine);
    if (!fine) return;

    let rx = 0,
      ry = 0,
      tx = 0,
      ty = 0,
      vx = 0,
      vy = 0,
      lastX = 0,
      lastY = 0,
      gold = false,
      raf = 0;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      vx = tx - lastX;
      vy = ty - lastY;
      lastX = tx;
      lastY = ty;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${tx}px, ${ty}px)`;
      }
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      gold = !!t.closest("[data-magnetic]");
    };

    const frame = () => {
      rx += (tx - rx) * 0.12;
      ry += (ty - ry) * 0.12;
      const speed = Math.min(Math.hypot(vx, vy) * 0.08, 0.6);
      const stretch = 1 + speed;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${rx}px, ${ry}px) scaleX(${stretch})`;
        ringRef.current.style.borderColor = gold ? "#A8854F" : "rgba(33,29,23,0.35)";
        ringRef.current.style.width = gold ? "36px" : "28px";
        ringRef.current.style.height = gold ? "36px" : "28px";
      }
      vx *= 0.85;
      vy *= 0.85;
      raf = requestAnimationFrame(frame);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    raf = requestAnimationFrame(frame);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[100] h-[3px] w-[3px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ink"
      />
      <div
        ref={ringRef}
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[100] h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(33,29,23,0.35)] transition-[border-color,width,height] duration-300"
      />
    </>
  );
}
