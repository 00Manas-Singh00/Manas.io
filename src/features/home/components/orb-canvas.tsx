"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useTheme } from "next-themes";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

import { orb, orbScreen } from "../lib/orb";

// Ashima Arts 3D simplex noise (MIT).
const NOISE = /* glsl */ `
vec3 mod289(vec3 x){return x-floor(x*(1./289.))*289.;}
vec4 mod289(vec4 x){return x-floor(x*(1./289.))*289.;}
vec4 permute(vec4 x){return mod289(((x*34.)+1.)*x);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-.85373472095314*r;}
float snoise(vec3 v){
  const vec2 C=vec2(1./6.,1./3.);const vec4 D=vec4(0.,.5,1.,2.);
  vec3 i=floor(v+dot(v,C.yyy));vec3 x0=v-i+dot(i,C.xxx);
  vec3 g=step(x0.yzx,x0.xyz);vec3 l=1.-g;vec3 i1=min(g.xyz,l.zxy);vec3 i2=max(g.xyz,l.zxy);
  vec3 x1=x0-i1+C.xxx;vec3 x2=x0-i2+C.yyy;vec3 x3=x0-D.yyy;
  i=mod289(i);
  vec4 p=permute(permute(permute(i.z+vec4(0.,i1.z,i2.z,1.))+i.y+vec4(0.,i1.y,i2.y,1.))+i.x+vec4(0.,i1.x,i2.x,1.));
  float n_=.142857142857;vec3 ns=n_*D.wyz-D.xzx;
  vec4 j=p-49.*floor(p*ns.z*ns.z);vec4 x_=floor(j*ns.z);vec4 y_=floor(j-7.*x_);
  vec4 x=x_*ns.x+ns.yyyy;vec4 y=y_*ns.x+ns.yyyy;vec4 h=1.-abs(x)-abs(y);
  vec4 b0=vec4(x.xy,y.xy);vec4 b1=vec4(x.zw,y.zw);
  vec4 s0=floor(b0)*2.+1.;vec4 s1=floor(b1)*2.+1.;vec4 sh=-step(h,vec4(0.));
  vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
  vec3 p0=vec3(a0.xy,h.x);vec3 p1=vec3(a0.zw,h.y);vec3 p2=vec3(a1.xy,h.z);vec3 p3=vec3(a1.zw,h.w);
  vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
  p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;
  vec4 m=max(.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.);m=m*m;
  return 42.*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
}`;

const vertexShader = /* glsl */ `
uniform float uTime; uniform float uAmp;
varying vec3 vNormal; varying vec3 vView; varying float vNoise;
${NOISE}
void main(){
  float n = snoise(normal * 1.3 + vec3(uTime * 0.18));
  n += 0.5 * snoise(normal * 2.6 - vec3(uTime * 0.11));
  vNoise = n;
  vec3 p = position + normal * n * uAmp;
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  vView = -mv.xyz;
  vNormal = normalize(normalMatrix * normal);
  gl_Position = projectionMatrix * mv;
}`;

const fragmentShader = /* glsl */ `
uniform vec3 uColor; uniform vec3 uCore; uniform float uOpacity;
varying vec3 vNormal; varying vec3 vView; varying float vNoise;
void main(){
  float ndv = max(dot(normalize(vNormal), normalize(vView)), 0.0);
  // Dense saturated core, feathered rim: reads as the soft orb from the references.
  vec3 col = mix(uColor, uCore, pow(ndv, 2.2) + vNoise * 0.08);
  float alpha = smoothstep(0.0, 0.85, ndv) * uOpacity;
  gl_FragColor = vec4(col, alpha);
}`;

function Orb({ ink, core }: { ink: string; core: string }) {
  const mesh = useRef<THREE.Mesh>(null);
  const material = useRef<THREE.ShaderMaterial>(null);
  const { viewport } = useThree();
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uAmp: { value: orb.amp },
      uOpacity: { value: 0 },
      uColor: { value: new THREE.Color(ink) },
      uCore: { value: new THREE.Color(core) },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  useEffect(() => {
    const u = material.current?.uniforms;
    u?.uColor.value.set(ink);
    u?.uCore.value.set(core);
  }, [ink, core]);

  useFrame((state, delta) => {
    const m = mesh.current;
    // Always write through the live material: under StrictMode the memoised object and
    // the one R3F attached can differ.
    const u = material.current?.uniforms;
    if (!m || !u) return;
    const d = Math.min(delta, 0.1);
    u.uTime.value += d;

    // Section target + a gentle lean toward the pointer.
    const tx = orb.x * (viewport.width / 2) + state.pointer.x * 0.18;
    const ty = orb.y * (viewport.height / 2) + state.pointer.y * 0.12;
    m.position.x = THREE.MathUtils.damp(m.position.x, tx, 2.4, d);
    m.position.y = THREE.MathUtils.damp(m.position.y, ty, 2.4, d);

    const breathe = 1 + Math.sin(u.uTime.value * 0.6) * 0.025;
    const s = THREE.MathUtils.damp(m.scale.x, orb.scale * breathe, 2.2, d);
    m.scale.setScalar(s);
    m.rotation.y += d * 0.08;

    u.uAmp.value = THREE.MathUtils.damp(u.uAmp.value, orb.amp, 2, d);
    u.uOpacity.value = THREE.MathUtils.damp(
      u.uOpacity.value,
      orb.opacity,
      1.6,
      d,
    );

    // Publish the on-screen circle for the ink effects (world units -> CSS px).
    const w = state.size.width;
    const h = state.size.height;
    orbScreen.cx = w / 2 + (m.position.x / (viewport.width / 2)) * (w / 2);
    orbScreen.cy = h / 2 - (m.position.y / (viewport.height / 2)) * (h / 2);
    orbScreen.r = (s / viewport.height) * h;
    orbScreen.opacity = u.uOpacity.value;
  });

  return (
    <mesh ref={mesh} position={[orb.x * 3, orb.y * 1.5, 0]} scale={orb.scale}>
      <icosahedronGeometry args={[1, 64]} />
      <shaderMaterial
        ref={material}
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        transparent
        depthWrite={false}
      />
    </mesh>
  );
}

export default function OrbCanvas() {
  const { resolvedTheme } = useTheme();
  const dark = resolvedTheme === "dark";

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0"
      style={{ filter: "blur(clamp(16px, 2.2vw, 36px))" }}
    >
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 5], fov: 35 }}
        gl={{ antialias: false, alpha: true, powerPreference: "low-power" }}
        eventSource={
          typeof document !== "undefined" ? document.body : undefined
        }
        eventPrefix="client"
      >
        <Orb
          ink={dark ? "#4a5ef0" : "#1d3bd1"}
          core={dark ? "#1c2fc9" : "#1530c4"}
        />
      </Canvas>
    </div>
  );
}
