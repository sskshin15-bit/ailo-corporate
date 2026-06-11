"use client";

import { useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { defileVertex, defileFragment } from "./shaders/defile";
import { usePointer } from "@/lib/usePointer";

/**
 * Fullscreen "Luminous Defile" shader plane.
 * Mount inside <Canvas>. Reads scroll progress from a MutableRefObject<number>
 * (0..1 across the hero) so any scroll source (lenis / framer-motion) can drive it.
 */
export function DefileBackground({
  scrollRef,
}: {
  scrollRef: React.MutableRefObject<number>;
}) {
  const pointer = usePointer();
  const matRef = useRef<THREE.ShaderMaterial>(null!);
  const { gl } = useThree();

  const geometry = useMemo(() => {
    const g = new THREE.BufferGeometry();
    g.setAttribute(
      "position",
      new THREE.BufferAttribute(new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]), 3)
    );
    return g;
  }, []);

  const uniforms = useMemo(
    () => ({
      uRes: { value: new THREE.Vector2(1, 1) },
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
      uVel: { value: 0 },
      uScroll: { value: 0 },
    }),
    []
  );

  useFrame((state) => {
    const s = pointer.current;
    const u = matRef.current.uniforms;
    const t = state.clock.elapsedTime;

    s.mx += (s.tx - s.mx) * 0.035;
    s.my += (s.ty - s.my) * 0.035;
    s.vel *= 0.94;

    if (!s.fine) {
      s.tx = Math.sin(t * 0.19) * 0.4;
      s.ty = Math.sin(t * 0.14 + 2.0) * 0.35;
    }

    const size = gl.getDrawingBufferSize(new THREE.Vector2());
    u.uRes.value.copy(size);
    u.uTime.value = t;
    (u.uMouse.value as THREE.Vector2).set(s.mx, s.my);
    u.uVel.value = s.vel;
    u.uScroll.value = scrollRef.current;
  });

  return (
    <mesh geometry={geometry} frustumCulled={false}>
      <shaderMaterial
        ref={matRef}
        vertexShader={defileVertex}
        fragmentShader={defileFragment}
        uniforms={uniforms}
        depthWrite={false}
        depthTest={false}
      />
    </mesh>
  );
}
