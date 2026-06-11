"use client";

import { useEffect, useRef } from "react";

/**
 * Pointer state shared with the shader.
 * - target: raw pointer in aspect-corrected NDC
 * - current: lerped toward target each frame (0.04) — the organic lag
 * - vel: pointer speed, decays ×0.92/frame
 * - fine: `pointer: fine` media query (false on touch devices)
 *
 * Mutated via refs — never causes React re-renders.
 */
export interface PointerState {
  tx: number; ty: number;   // target
  mx: number; my: number;   // current (lerped in useFrame)
  vel: number;
  fine: boolean;
}

export function usePointer() {
  const ref = useRef<PointerState>({ tx: 0, ty: 0, mx: 0, my: 0, vel: 0, fine: true });

  useEffect(() => {
    const s = ref.current;
    s.fine = window.matchMedia("(pointer: fine)").matches;
    let lastX = 0, lastY = 0;

    const onMove = (e: PointerEvent) => {
      const W = window.innerWidth, H = window.innerHeight;
      const nx = ((e.clientX / W) * 2 - 1) * (W / H);
      const ny = -((e.clientY / H) * 2 - 1);
      const inst = Math.min(Math.hypot(nx - lastX, ny - lastY) * 7.0, 1.0);
      s.vel = Math.max(s.vel, inst);
      lastX = nx; lastY = ny;
      s.tx = nx; s.ty = ny;
    };

    const onTouch = (e: TouchEvent) => {
      const W = window.innerWidth, H = window.innerHeight;
      const t = e.touches[0];
      s.tx = ((t.clientX / W) * 2 - 1) * (W / H);
      s.ty = -((t.clientY / H) * 2 - 1);
      s.vel = Math.max(s.vel, 0.6); // tap = gentle shimmer impulse
    };

    if (s.fine) window.addEventListener("pointermove", onMove);
    window.addEventListener("touchstart", onTouch, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("touchstart", onTouch);
    };
  }, []);

  return ref;
}
