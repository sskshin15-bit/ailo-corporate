"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useFBO } from "@react-three/drei";
import * as THREE from "three";

const COUNT_DESKTOP = 45000;
const COUNT_MOBILE = 12000;

const simVertex = /* glsl */ `
attribute vec2 aUv;
varying vec2 vUv;
void main() {
  vUv = aUv;
  gl_Position = vec4(aUv * 2.0 - 1.0, 0.0, 1.0);
}
`;

const simFragment = /* glsl */ `
precision highp float;
uniform sampler2D uPos;
uniform float uPhase;
uniform float uTime;
uniform vec2 uPointer;
uniform float uRepel;
varying vec2 vUv;

float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

vec3 curl(vec3 p) {
  float e = 0.1;
  vec3 dx = vec3(e, 0.0, 0.0);
  vec3 dy = vec3(0.0, e, 0.0);
  vec3 dz = vec3(0.0, 0.0, e);
  float n1 = sin(p.y) + cos(p.z);
  float n2 = sin(p.z) + cos(p.x);
  float n3 = sin(p.x) + cos(p.y);
  float n1x = sin(p.y + dx.y) + cos(p.z + dx.z);
  float n2x = sin(p.z + dx.z) + cos(p.x + dx.x);
  float n3x = sin(p.x + dx.x) + cos(p.y + dx.y);
  float n1y = sin(p.y + dy.y) + cos(p.z + dy.z);
  float n2y = sin(p.z + dy.z) + cos(p.x + dy.x);
  float n3y = sin(p.x + dy.x) + cos(p.y + dy.y);
  return vec3(
    (n3y - n3x) - (n2z - n2x),
    (n1z - n1x) - (n3y - n3x),
    (n2x - n2y) - (n1z - n1y)
  ) / (2.0 * e);
}

vec3 torusTarget(vec2 uv, float t) {
  float angle = uv.x * 6.28318 + t * 0.08;
  float tube = 0.35 + uv.y * 0.12;
  float R = 1.15;
  return vec3(
    cos(angle) * (R + tube * cos(uv.y * 6.28318)),
    sin(angle) * (R + tube * cos(uv.y * 6.28318)),
    tube * sin(uv.y * 6.28318) * 0.35
  );
}

void main() {
  vec3 p = texture2D(uPos, vUv).xyz;
  float phase = clamp(uPhase, 0.0, 2.0);
  vec3 target = p;

  if (phase < 1.0) {
    vec3 c = curl(p * 1.4 + uTime * 0.08);
    target = mix(p, p + c * 0.035, 1.0 - phase);
  } else if (phase < 2.0) {
    float t = phase - 1.0;
    vec3 slit = vec3(0.0, (vUv.y - 0.5) * 2.8, (hash(vUv) - 0.5) * 0.08);
    target = mix(p, slit, t);
  } else {
    target = torusTarget(vUv, uTime);
  }

  vec3 v = (target - p) * 0.06;
  float d = length(p.xy - uPointer);
  v += normalize(p.xy - uPointer + vec3(0.001)) * uRepel * smoothstep(0.8, 0.0, d) * 0.12;
  p += v;
  gl_FragColor = vec4(p, 1.0);
}
`;

const particleVertex = /* glsl */ `
uniform sampler2D uPos;
uniform float uSize;
attribute vec2 aUv;
varying float vSpeed;
void main() {
  vec3 p = texture2D(uPos, aUv).xyz;
  vSpeed = length(p);
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  gl_PointSize = uSize * (280.0 / -mv.z);
  gl_Position = projectionMatrix * mv;
}
`;

const particleFragment = /* glsl */ `
precision highp float;
varying float vSpeed;
void main() {
  vec2 c = gl_PointCoord - 0.5;
  if (dot(c, c) > 0.25) discard;
  vec3 ink = vec3(0.129, 0.114, 0.090);
  vec3 gold = vec3(0.659, 0.522, 0.310);
  vec3 col = mix(ink, gold, smoothstep(0.8, 1.6, vSpeed));
  gl_FragColor = vec4(col, 0.4);
}
`;

function makeSimGeo() {
  const geo = new THREE.PlaneGeometry(2, 2, 1, 1);
  const uvs = geo.attributes.uv.array as Float32Array;
  geo.setAttribute("aUv", new THREE.BufferAttribute(uvs.slice(), 2));
  return geo;
}

export function ParticlesO({
  phaseRef,
  activeRef,
  pointerRef,
}: {
  phaseRef: React.MutableRefObject<number>;
  activeRef: React.MutableRefObject<boolean>;
  pointerRef: React.MutableRefObject<{ x: number; y: number; active: boolean }>;
}) {
  const { gl, camera } = useThree();
  const side = useMemo(() => {
    if (typeof window === "undefined") return Math.ceil(Math.sqrt(COUNT_DESKTOP));
    const mobile =
      !window.matchMedia("(pointer: fine)").matches || window.innerWidth < 768;
    return Math.ceil(Math.sqrt(mobile ? COUNT_MOBILE : COUNT_DESKTOP));
  }, []);

  const posA = useFBO(side, side, { type: THREE.FloatType });
  const posB = useFBO(side, side, { type: THREE.FloatType });
  const ping = useRef(true);
  const simGeo = useMemo(() => makeSimGeo(), []);
  const simCam = useMemo(() => new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1), []);
  const simScene = useMemo(() => new THREE.Scene(), []);
  const simMesh = useMemo(() => new THREE.Mesh(simGeo), [simGeo]);

  const initMat = useMemo(
    () =>
      new THREE.ShaderMaterial({
        vertexShader: simVertex,
        fragmentShader: /* glsl */ `
          precision highp float;
          varying vec2 vUv;
          float hash(vec2 p) {
            p = fract(p * vec2(123.34, 456.21));
            p += dot(p, p + 45.32);
            return fract(p.x * p.y);
          }
          void main() {
            vec3 p = vec3((vUv - 0.5) * 3.5, (hash(vUv) - 0.5) * 2.0);
            gl_FragColor = vec4(p, 1.0);
          }
        `,
      }),
    []
  );

  const simMat = useMemo(
    () =>
      new THREE.ShaderMaterial({
        vertexShader: simVertex,
        fragmentShader: simFragment,
        uniforms: {
          uPos: { value: posA.texture },
          uPhase: { value: 0 },
          uTime: { value: 0 },
          uPointer: { value: new THREE.Vector2(0, 0) },
          uRepel: { value: 0 },
        },
      }),
    [posA.texture]
  );

  const renderMat = useMemo(
    () =>
      new THREE.ShaderMaterial({
        vertexShader: particleVertex,
        fragmentShader: particleFragment,
        uniforms: {
          uPos: { value: posA.texture },
          uSize: { value: 1.5 },
        },
        transparent: true,
        depthWrite: false,
      }),
    [posA.texture]
  );

  const pointsGeo = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const uvs: number[] = [];
    for (let y = 0; y < side; y++) {
      for (let x = 0; x < side; x++) {
        uvs.push((x + 0.5) / side, (y + 0.5) / side);
      }
    }
    geo.setAttribute("aUv", new THREE.BufferAttribute(new Float32Array(uvs), 2));
    return geo;
  }, [side]);

  const inited = useRef(false);

  useFrame((state) => {
    if (!activeRef.current) return;

    if (!inited.current) {
      inited.current = true;
      const prev = gl.getRenderTarget();
      gl.setRenderTarget(posA);
      simMesh.material = initMat;
      simScene.add(simMesh);
      gl.render(simScene, simCam);
      gl.setRenderTarget(prev);
    }

    const read = ping.current ? posA : posB;
    const write = ping.current ? posB : posA;

    simMat.uniforms.uPos.value = read.texture;
    simMat.uniforms.uPhase.value = phaseRef.current;
    simMat.uniforms.uTime.value = state.clock.elapsedTime;
    simMat.uniforms.uPointer.value.set(pointerRef.current.x, pointerRef.current.y);
    simMat.uniforms.uRepel.value = pointerRef.current.active ? 1 : 0;

    simMesh.material = simMat;
    const prev = gl.getRenderTarget();
    gl.setRenderTarget(write);
    gl.render(simScene, simCam);
    gl.setRenderTarget(prev);

    renderMat.uniforms.uPos.value = write.texture;
    ping.current = !ping.current;
  });

  useEffect(() => {
    camera.position.z = 5;
  }, [camera]);

  return (
    <points geometry={pointsGeo} frustumCulled={false}>
      <primitive object={renderMat} attach="material" />
    </points>
  );
}
