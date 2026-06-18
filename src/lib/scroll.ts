"use client";

import Lenis from "lenis";
import { useEffect, useRef, type MutableRefObject } from "react";

/** Scroll distance (px) mapped to hero progress 0→1 */
export const HERO_SCROLL_RANGE = 1.6;
/** Scroll target after "enter light" — fully reveals the corridor */
export const HERO_ENTER_LIGHT_TARGET = 2.3;

export function heroScrollProgress(scrollPx: number): number {
  return Math.min(scrollPx / (window.innerHeight * HERO_SCROLL_RANGE), 1);
}

export function heroEnterLightTargetPx(): number {
  return window.innerHeight * HERO_ENTER_LIGHT_TARGET;
}

/** Smoothly scroll to the post-hero "light revealed" state (same as manual scroll). */
export function enterHeroLight(
  lenisRef: MutableRefObject<Lenis | null>,
  duration = 2,
): void {
  const target = heroEnterLightTargetPx();
  const lenis = lenisRef.current;
  if (lenis) {
    lenis.scrollTo(target, { duration });
    return;
  }
  window.scrollTo({ top: target, behavior: "smooth" });
}

export type ScrollBridge = {
  scrollRef: MutableRefObject<number>;
  lenisRef: MutableRefObject<Lenis | null>;
};

export function useScrollBridge(): ScrollBridge {
  const scrollRef = useRef(0);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    const onScroll = ({ scroll }: { scroll: number }) => {
      scrollRef.current = heroScrollProgress(scroll);
    };
    lenis.on("scroll", onScroll);
    onScroll({ scroll: lenis.scroll });

    let raf = 0;
    function frame(time: number) {
      lenis.raf(time);
      raf = requestAnimationFrame(frame);
    }
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return { scrollRef, lenisRef };
}
