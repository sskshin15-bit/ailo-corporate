"use client";

import dynamic from "next/dynamic";
import { useRef, type ReactNode } from "react";
import { useScrollBridge } from "@/lib/scroll";
import { GrainOverlay } from "@/components/ui/GrainOverlay";
import { AxisLine } from "@/components/ui/AxisLine";
import { CursorRing } from "@/components/ui/CursorRing";

const CanvasRoot = dynamic(
  () => import("@/components/gl/CanvasRoot").then((m) => m.CanvasRoot),
  { ssr: false }
);

export type SiteRefs = {
  scrollRef: React.MutableRefObject<number>;
  lenisRef: React.MutableRefObject<import("lenis").default | null>;
  visionPhaseRef: React.MutableRefObject<number>;
  visionActiveRef: React.MutableRefObject<boolean>;
  pointerRef: React.MutableRefObject<{ x: number; y: number; active: boolean }>;
};

export function SiteShell({
  children,
}: {
  children: (refs: SiteRefs) => ReactNode;
}) {
  const { scrollRef, lenisRef } = useScrollBridge();
  const visionPhaseRef = useRef(0);
  const visionActiveRef = useRef(false);
  const pointerRef = useRef({ x: 0, y: 0, active: false });

  return (
    <>
      <CanvasRoot
        scrollRef={scrollRef}
        visionPhaseRef={visionPhaseRef}
        visionActiveRef={visionActiveRef}
        pointerRef={pointerRef}
      />
      <GrainOverlay />
      <AxisLine />
      <CursorRing />
      {children({
        scrollRef,
        lenisRef,
        visionPhaseRef,
        visionActiveRef,
        pointerRef,
      })}
    </>
  );
}
