"use client";

import { useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { PerformanceMonitor } from "@react-three/drei";
import { DefileBackground } from "./DefileBackground";
import { ParticlesO } from "./ParticlesO";

export function CanvasRoot({
  scrollRef: externalScrollRef,
  visionPhaseRef,
  visionActiveRef,
  pointerRef,
}: {
  scrollRef: React.MutableRefObject<number>;
  visionPhaseRef: React.MutableRefObject<number>;
  visionActiveRef: React.MutableRefObject<boolean>;
  pointerRef: React.MutableRefObject<{ x: number; y: number; active: boolean }>;
}) {
  const [reduced, setReduced] = useState(false);
  const [visible, setVisible] = useState(true);
  const [heroActive, setHeroActive] = useState(true);
  const [visionActive, setVisionActive] = useState(false);
  const [dpr, setDpr] = useState(1);

  useEffect(() => {
    const budget = () =>
      Math.min(
        window.devicePixelRatio || 1,
        1.5,
        Math.sqrt(1_500_000 / (window.innerWidth * window.innerHeight))
      );
    const apply = () => setDpr(budget());
    apply();
    window.addEventListener("resize", apply);
    return () => window.removeEventListener("resize", apply);
  }, []);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);

    const onVis = () => setVisible(!document.hidden);
    const onScroll = () => setHeroActive(window.scrollY < window.innerHeight * 2.2);
    const poll = setInterval(() => setVisionActive(visionActiveRef.current), 100);

    document.addEventListener("visibilitychange", onVis);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      document.removeEventListener("visibilitychange", onVis);
      window.removeEventListener("scroll", onScroll);
      clearInterval(poll);
    };
  }, [visionActiveRef]);

  if (reduced) {
    return (
      <div
        aria-hidden
        className="fixed inset-0 z-0"
        style={{
          background:
            "radial-gradient(70% 60% at 50% 34%, rgba(255,250,234,.95), transparent 70%)," +
            "linear-gradient(to right, rgba(38,30,21,.55), transparent 22%, transparent 78%, rgba(38,30,21,.55))," +
            "radial-gradient(110% 90% at 70% 80%, rgba(244,210,183,.45), transparent 65%)," +
            "#F7F4ED",
        }}
      />
    );
  }

  const shouldRender = visible && (heroActive || visionActive);

  return (
    <div aria-hidden className="fixed inset-0 z-0">
      <Canvas
        dpr={dpr}
        frameloop={shouldRender ? "always" : "never"}
        gl={{ antialias: false, alpha: false, powerPreference: "high-performance" }}
        camera={{ position: [0, 0, 5], fov: 50 }}
      >
        <PerformanceMonitor onDecline={() => setDpr((d) => Math.max(0.55, d * 0.82))}>
          {heroActive && <DefileBackground scrollRef={externalScrollRef} />}
          {visionActive && (
            <ParticlesO
              phaseRef={visionPhaseRef}
              activeRef={visionActiveRef}
              pointerRef={pointerRef}
            />
          )}
        </PerformanceMonitor>
      </Canvas>
    </div>
  );
}
