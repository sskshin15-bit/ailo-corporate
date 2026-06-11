/**
 * FIRST LIGHT（夜明けの隘路）— hero background shader (Ailo LLC)
 * Bright sacred dawn over an SDF-raymarched WHITE MARBLE temple colonnade.
 * The causeway is the only floor; beyond its curb the ground opens into a
 * warm pit whose rim, light spill and fog share the floor-plane geometry.
 * Realism: faint strata + whisper veins on luminous marble, per-slab tone,
 * speckle, beveled joints, foot-polished wear band, pillar contact shadows,
 * curb shadow, micro-bump chiseled normals. Performance: sky cached per
 * pixel, 64-step march, tetrahedral normals, reflection culled beyond 14u.
 * Identical to the approved hero-prototype.html.
 * Do NOT "improve" the GLSL — it is final, art-directed output.
 */

export const defileVertex = /* glsl */ `
void main() {
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`;

export const defileFragment = /* glsl */ `
precision highp float;
uniform vec2  uRes;
uniform float uTime;
uniform vec2  uMouse;   // aspect-corrected NDC, lerped on CPU
uniform float uVel;     // smoothed pointer speed 0..1
uniform float uScroll;  // 0..1

#define SP 3.4                                /* gate spacing */
#define SUN normalize(vec3(0.0,0.10,1.0))     /* sunrise direction */
#define PATHW 1.62                            /* causeway half width — beyond lies the drop */
#define PAPER vec3(0.969,0.957,0.929)
#define CHAMP vec3(0.918,0.852,0.718)
#define AKATSUKI vec3(0.957,0.824,0.718)
#define ASAGI vec3(0.760,0.858,0.828)
#define SUNC vec3(1.000,0.996,0.985)    /* near-pure white core（神々しさの芯） */
#define BEAM vec3(0.990,0.930,0.800)
#define GOLD vec3(0.860,0.720,0.450)

float hash(vec2 p){ p=fract(p*vec2(123.34,456.21)); p+=dot(p,p+45.32); return fract(p.x*p.y); }
float noise(vec2 p){
  vec2 i=floor(p), f=fract(p); f=f*f*(3.-2.*f);
  float a=hash(i), b=hash(i+vec2(1,0)), c=hash(i+vec2(0,1)), d=hash(i+vec2(1,1));
  return mix(mix(a,b,f.x), mix(c,d,f.x), f.y);
}
float fbm(vec2 p){
  float v=0., a=.5;
  mat2 r=mat2(1.6,1.2,-1.2,1.6);
  for(int i=0;i<4;i++){ v+=a*noise(p); p=r*p; a*=.55; }
  return v;
}

/* rounded box SDF */
float sdRBox(vec3 p, vec3 b, float r){
  vec3 q=abs(p)-b;
  return length(max(q,vec3(0.0)))+min(max(q.x,max(q.y,q.z)),0.0)-r;
}

/* temple architecture, repeated infinitely along z.
   inner gate: tapered pillar + plinth + capital + double lintel + dentils
   outer colonnade (half-bay offset) on a stepped stylobate,
   tied together by a continuous architrave running into the distance */
float map(vec3 p){
  float z=mod(p.z,SP)-SP*0.5;
  vec3 q=vec3(abs(p.x),p.y,z);
  float taper=1.0-0.10*clamp(p.y/2.6,0.0,1.0);
  /* --- inner gate --- */
  float pil =sdRBox(vec3(q.x-1.35,q.y-1.30,q.z),vec3(0.130*taper,1.30,0.130*taper),0.035);
  float base=sdRBox(vec3(q.x-1.35,q.y-0.14,q.z),vec3(0.220,0.140,0.220),0.020);
  float cap =sdRBox(vec3(q.x-1.35,q.y-2.52,q.z),vec3(0.200,0.075,0.200),0.020);
  float lin =sdRBox(vec3(q.x,     q.y-2.78,q.z),vec3(1.750,0.100,0.160),0.030);
  float lin2=sdRBox(vec3(q.x,     q.y-2.60,q.z),vec3(1.550,0.045,0.120),0.020);
  float d=min(min(pil,base),min(cap,min(lin,lin2)));
  /* --- dentil course under the lintel --- */
  float xx=mod(q.x,0.24)-0.12;
  float den=sdRBox(vec3(xx,q.y-2.66,q.z),vec3(0.050,0.032,0.125),0.008);
  d=min(d, max(den, q.x-1.55));
  /* --- outer colonnade, offset half a bay --- */
  float z2=mod(p.z+SP*0.5,SP)-SP*0.5;
  float pil2=sdRBox(vec3(q.x-2.55,p.y-1.42,z2),vec3(0.150*taper,1.20,0.150*taper),0.035);
  float cap2=sdRBox(vec3(q.x-2.55,p.y-2.56,z2),vec3(0.215,0.070,0.215),0.020);
  d=min(d,min(pil2,cap2));
  /* --- continuous architrave above the outer row (infinite along z) --- */
  vec2 a=abs(vec2(q.x-2.55,p.y-2.72))-vec2(0.200,0.085);
  d=min(d, length(max(a,vec2(0.0)))+min(max(a.x,a.y),0.0)-0.02);
  /* --- outer piers: massive bases rising from the abyss --- */
  vec2 b1=abs(vec2(q.x-2.55,p.y+1.29))-vec2(0.850,1.510);
  d=min(d, length(max(b1,vec2(0.0)))+min(max(b1.x,b1.y),0.0)-0.015);
  /* --- low curb along the causeway edge (the brink of the drop) --- */
  vec2 c0=abs(vec2(q.x-(PATHW-0.04),p.y-0.055))-vec2(0.060,0.055);
  d=min(d, length(max(c0,vec2(0.0)))+min(max(c0.x,c0.y),0.0)-0.012);
  return d;
}

vec3 calcN(vec3 p){                       /* tetrahedral: 4 taps, not 6 */
  vec2 e=vec2(0.004,-0.004);
  return normalize(
    e.xyy*map(p+e.xyy)+e.yyx*map(p+e.yyx)+
    e.yxy*map(p+e.yxy)+e.xxx*map(p+vec3(e.x)));
}

float march(vec3 ro, vec3 rd, float maxd){
  float t=0.02;
  for(int i=0;i<48;i++){
    float h=map(ro+rd*t);
    if(h<0.003*t) return t;
    t+=h;
    if(t>maxd) break;
  }
  return -1.0;
}
float marchR(vec3 ro, vec3 rd, float maxd){      /* cheaper, for reflections */
  float t=0.05;
  for(int i=0;i<16;i++){
    float h=map(ro+rd*t);
    if(h<0.006*t) return t;
    t+=h*1.1;
    if(t>maxd) break;
  }
  return -1.0;
}

/* dawn sky in any 3D direction: gradient + silk + cloud bands + distant ridges */
vec3 skyCol(vec3 rd){
  float sunA=clamp(dot(rd,SUN),0.0,1.0);
  vec3 col=mix(PAPER, AKATSUKI, smoothstep(0.35,-0.05,rd.y));
  col=mix(col, ASAGI, smoothstep(0.20,0.70,rd.y)*0.30);
  float v=fbm(rd.xy*2.2+vec2(uTime*0.010,0.0)+uMouse*0.03);
  col=mix(col, CHAMP, smoothstep(0.40,0.85,v)*0.30);
  /* stratus bands of dawn cloud, hugging the horizon */
  float cb=fbm(vec2(rd.x*2.6+uTime*0.008, rd.y*10.0));
  col=mix(col, mix(AKATSUKI,SUNC,0.6), smoothstep(0.52,0.80,cb)*exp(-abs(rd.y-0.14)*9.0)*0.40);
  /* distant mountain ridges sleeping in the haze (two layers) */
  float r1=fbm(vec2(rd.x*2.0+7.0,0.5))*0.100+0.015;
  col=mix(col, mix(AKATSUKI,CHAMP,0.5)*0.985, smoothstep(0.012,-0.012,rd.y-r1)*0.20);
  float r2=fbm(vec2(rd.x*3.1+19.0,1.5))*0.055+0.004;
  col=mix(col, vec3(0.862,0.792,0.712), smoothstep(0.008,-0.008,rd.y-r2)*0.26);
  col+=SUNC*pow(sunA,600.0)*1.45;
  col+=BEAM*pow(sunA, 60.0)*0.55;
  col+=GOLD*pow(sunA,  9.0)*0.18;
  return col;
}
/* lite sky for secondary (reflection) rays — no fbm, just gradient + sun */
vec3 skyLite(vec3 rd){
  float sunA=clamp(dot(rd,SUN),0.0,1.0);
  vec3 col=mix(PAPER, AKATSUKI, smoothstep(0.35,-0.05,rd.y));
  col+=SUNC*pow(sunA,600.0)*1.45 + BEAM*pow(sunA,60.0)*0.55 + GOLD*pow(sunA,9.0)*0.18;
  return col;
}

/* temple stone: travertine strata, marble veins, fluting, weathering —
   lit by sky ambient, golden backlit rim, AO, floor bounce */
vec3 gateShade(vec3 p, vec3 n, vec3 rd){
  /* micro-bump: chiseled stone surface */
  n=normalize(n+vec3(noise(p.yz*9.0)-0.5, noise(p.xz*9.0)-0.5, noise(p.xy*9.0)-0.5)*0.10);
  /* nearest column center (inner 1.35 / outer 2.55) for fluting coords */
  float cx=(abs(p.x)<1.95)?1.35:2.55;
  float zz=(abs(p.x)<1.95)?(mod(p.z,SP)-SP*0.5):(mod(p.z+SP*0.5,SP)-SP*0.5);
  float lx=abs(p.x)-cx;

  /* white marble: faint strata + whisper-thin veins, kept luminous */
  vec3 alb=vec3(0.800,0.778,0.740);
  float strata=0.5+0.5*sin(p.y*9.0+fbm(p.xz*2.0)*2.2);
  alb*=0.96+0.05*strata;
  float vein=1.0-smoothstep(0.0,0.05,abs(fbm(vec2(p.y*1.4,p.x*1.1+p.z*0.8))-0.48));
  alb=mix(alb, vec3(0.700,0.685,0.655), vein*0.35);
  alb*=0.93+0.10*fbm(p.xz*1.6+p.y*0.7);                 /* gentle weathering */
  /* fluting on the shafts (vertical grooves) */
  float shaft=smoothstep(0.30,0.50,p.y)*smoothstep(2.50,2.30,p.y);
  alb*=1.0-0.08*shaft*(0.5+0.5*sin(atan(lx,zz)*16.0));
  /* softly shaded foot */
  alb*=0.90+0.10*smoothstep(0.0,0.65,p.y);

  float occ=clamp(map(p+n*0.15)/0.15,0.0,1.0)*0.6
           +clamp(map(p+n*0.45)/0.45,0.0,1.0)*0.4;
  float skyamb=clamp(0.55+0.45*n.y,0.0,1.0);
  vec3 col=alb*(0.38+0.55*skyamb)*(0.40+0.60*occ)*vec3(1.0,0.965,0.915);
  float back=clamp(dot(n,SUN),0.0,1.0);
  col+=BEAM*back*0.30;                                  /* grazing dawn light */
  float fres=pow(1.0-clamp(dot(n,-rd),0.0,1.0),3.5);
  col+=GOLD*fres*(0.45+0.50*back);                      /* golden rim — the luxe edge */
  col+=vec3(0.92,0.87,0.78)*clamp(-n.y,0.0,1.0)*0.12;   /* bounce from the bright floor */
  return col;
}

void main(){
  vec2 uv=(gl_FragCoord.xy/uRes)*2.0-1.0;
  uv.x*=uRes.x/uRes.y;
  float t=uTime;

  /* camera: perpetual dolly + scroll pushes through the pass */
  vec3 ro=vec3(uMouse.x*0.32, 1.15, t*0.30+uScroll*5.0);
  vec3 rd=normalize(vec3(uv.x*0.62, uv.y*0.62-0.065, 1.0));

  float tG=march(ro,rd,34.0);
  float tF=(rd.y<-0.001)? -ro.y/rd.y : -1.0;
  /* the floor exists ONLY on the causeway — beyond its edge lies the drop */
  float onPath=0.0;
  if(tF>0.0){ onPath=step(abs(ro.x+rd.x*tF),PATHW); }
  float tP=(tF>0.0 && onPath>0.5)? tF : -1.0;

  vec3 sky=skyCol(rd);                      /* computed ONCE, reused by fog */
  vec3 col;
  if(tP>0.0 && (tG<0.0 || tP<tG)){
    /* ---- the shining causeway ---- */
    vec3 fp=ro+rd*tP;
    /* stone slabs: per-slab tone variation + speckle grain */
    vec2 cell=vec2(floor(fp.x/0.90+0.5), floor(fp.z/(SP*0.5)));
    float tone=0.92+0.16*hash(cell);
    vec3 fcol=mix(vec3(0.886,0.852,0.796), vec3(0.835,0.792,0.722), fbm(fp.xz*0.8))*tone;
    fcol*=0.96+0.07*noise(fp.xz*24.0);
    /* beveled paving joints — width scales with distance, darkening fades */
    float jw=(0.018+0.014*tP)*exp(-tP*0.11);
    float jz=abs(fract(fp.z/SP*2.0)-0.5)*SP*0.5;
    float jx=abs(fract(fp.x/0.90+0.5)-0.5)*0.90;
    fcol*=1.0-0.06*(1.0-smoothstep(0.0,jw,jz))-0.06*(1.0-smoothstep(0.0,jw,jx));
    /* contact shadows grounding the inner pillars */
    float zc=mod(fp.z,SP)-SP*0.5;
    fcol*=1.0-0.28*exp(-pow((abs(fp.x)-1.35)*3.2,2.0))*exp(-pow((zc+0.9)*1.1,2.0));
    /* curb shadow line along the brink */
    fcol*=1.0-0.16*exp(-pow((abs(fp.x)-(PATHW-0.12))*9.0,2.0));
    /* reflection — strongest on the foot-polished center band; culled far away */
    float wear=exp(-fp.x*fp.x*1.6);
    vec3 rrd=reflect(rd,vec3(0.0,1.0,0.0));
    float refF=1.0-smoothstep(5.0,7.0,tP);
    vec3 rcol=skyLite(rrd);
    if(tP<7.0){
      float tR=marchR(fp+vec3(0.0,0.01,0.0),rrd,22.0);
      rcol=(tR>0.0)? gateShade(fp+rrd*tR,calcN(fp+rrd*tR),rrd) : skyLite(rrd);
    }
    float fres=pow(1.0-clamp(-rd.y,0.0,1.0),3.0);
    fcol=mix(fcol,rcol,(0.12+0.50*fres)*(0.55+0.45*wear)*refF);
    fcol+=BEAM*pow(clamp(dot(rrd,SUN),0.0,1.0),36.0)*0.5*(0.5+0.5*wear);
    col=mix(fcol, sky, 1.0-exp(-tP*0.075));
  }else if(tG>0.0){
    vec3 p=ro+rd*tG;
    col=mix(gateShade(p,calcN(p),rd), sky, 1.0-exp(-tG*0.075));
  }else if(tF>0.0){
    /* ---- the drop: a pit whose rim runs PARALLEL to the causeway ----
       shaded on the same y=0 plane geometry as the floor, so its edge,
       its light spill and its fog all share the floor's perspective */
    vec3 fp=ro+rd*tF;
    float s=abs(fp.x)-PATHW;                 /* distance into the opening */
    float mist=fbm(fp.xz*0.55+vec2(0.0,t*0.05));
    vec3 ab=vec3(0.062,0.050,0.040);
    ab+=vec3(0.300,0.240,0.170)*exp(-s*1.1)*0.60;   /* path light spilling over the rim */
    ab+=GOLD*mist*exp(-s*0.7)*0.12;                 /* gold-touched mist below the rim */
    col=mix(ab, sky, 1.0-exp(-tF*0.075));
  }else{
    col=sky;
  }

  /* ---- screen-space luxury post ---- */
  vec2 lp=vec2(uMouse.x*0.06, 0.27+uMouse.y*0.04);
  float dl=length(uv-lp);
  float ang=atan(uv.y-lp.y,uv.x-lp.x);
  float rays=pow(0.5+0.5*sin(ang*7.0+t*0.12+fbm(vec2(ang*1.5,t*0.04))*3.0),3.0)*exp(-dl*1.9);
  col+=BEAM*rays*(0.10+uVel*0.18+uScroll*0.08);
  float flare=exp(-abs(uv.y-lp.y)*26.0)*exp(-abs(uv.x-lp.x)*1.6);
  col+=SUNC*flare*(0.13+uScroll*0.12);

  /* gold motes rising in the light */
  vec2 ep=vec2(uv.x*34.0,uv.y*34.0-t*1.6);
  vec2 gv=fract(ep)-0.5;
  float id=hash(floor(ep));
  float mote=smoothstep(0.08,0.0,length(gv))*step(0.993,id)*(0.35+0.65*sin(t*1.8+id*40.0));
  col=mix(col,vec3(0.78,0.63,0.38),clamp(mote,0.0,1.0)*exp(-dl*2.0)*0.85);

  /* framing */
  col*=1.0-0.085*dot(uv*0.62,uv*0.62);
  col+=(hash(gl_FragCoord.xy+fract(t)*60.0)-0.5)*0.012;

  gl_FragColor=vec4(col,1.0);
}`;
