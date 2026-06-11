"use client";

import Lenis from "lenis";
import { useEffect, useRef } from "react";

export type ScrollBridge = {
  scrollRef: React.MutableRefObject<number>;
  lenisRef: React.MutableRefObject<Lenis | null>;
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
      scrollRef.current = Math.min(scroll / (window.innerHeight * 1.6), 1);
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
