/* ============================================================
   UNITYESS · Cinematic motion
   GSAP + ScrollTrigger + Lenis
   ============================================================ */
gsap.registerPlugin(ScrollTrigger);

if ('scrollRestoration' in history) history.scrollRestoration = 'manual';

const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ------------------------------------------------------------
   1 · LENIS SMOOTH SCROLL  (synced to GSAP ticker + ScrollTrigger)
------------------------------------------------------------ */
let lenis;
function initLenis(){
  lenis = new Lenis({
    duration: 1.25,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // expo-out, slow & smooth
    smoothWheel: true,
    touchMultiplier: 1.4,
  });
  window.lenis = lenis;
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  // anchor links → lenis
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (id.length > 1 && document.querySelector(id)) {
        e.preventDefault();
        lenis.scrollTo(id, { offset: -10, duration: 1.6 });
      }
    });
  });
}

/* ------------------------------------------------------------
   2 · CUSTOM CURSOR
------------------------------------------------------------ */
function initCursor(){
  const dot = document.querySelector('.cursor');
  const ring = document.querySelector('.cursor-ring');
  if (!dot || window.matchMedia('(max-width:900px)').matches) return;

  let mx = innerWidth/2, my = innerHeight/2;
  let rx = mx, ry = my;
  window.addEventListener('mousemove', (e)=>{ mx = e.clientX; my = e.clientY;
    gsap.set(dot, { x: mx, y: my });
  });
  gsap.ticker.add(()=>{
    rx += (mx - rx) * 0.16;
    ry += (my - ry) * 0.16;
    gsap.set(ring, { x: rx, y: ry });
  });
  document.querySelectorAll('[data-hot], a, button').forEach((el)=>{
    el.addEventListener('mouseenter', ()=> ring.classList.add('hot'));
    el.addEventListener('mouseleave', ()=> ring.classList.remove('hot'));
  });
}

/* ------------------------------------------------------------
   3 · PRELOADER  → then reveal hero
------------------------------------------------------------ */
function initLoader(){
  const loader = document.getElementById('loader');
  // pages without a preloader (e.g. product pages) reveal the hero straight away
  if (!loader){ heroReveal(); return; }
  const numEl  = document.getElementById('loadNum');
  const barEl  = document.getElementById('loadBar');
  const counter = { v: 0 };

  const tl = gsap.timeline({ onComplete: heroReveal });
  tl.to(counter, {
    v: 100, duration: 2.0, ease: 'power2.inOut',
    onUpdate(){ numEl.textContent = Math.round(counter.v); }
  })
  .to(barEl, { scaleX: 1, duration: 2.0, ease: 'power2.inOut' }, 0)
  .to(loader, { yPercent: -100, duration: 1.0, ease: 'expo.inOut' }, '+=0.15')
  .set(loader, { display: 'none' })
  .call(() => ScrollTrigger.refresh()); /* re-measure after late layout shifts settle */
}

/* ------------------------------------------------------------
   4 · HERO REVEAL (line masks + sub + cta)
------------------------------------------------------------ */
function heroReveal(){
  const tl = gsap.timeline({ defaults:{ ease:'expo.out' } });
  tl.from('.hero .line-mask > span', {
      yPercent: 120, duration: 1.5, stagger: 0.12,
    })
    .from('.hero-sub', { y: 24, autoAlpha: 0, duration: 1.1 }, '-=0.9')
    .from('.hero-cta', { y: 24, autoAlpha: 0, duration: 1.1 }, '-=0.85');
  /* the nav is deliberately NOT animated here: a .from() stamps its start state
     immediately, so any frame where rAF is throttled (background tab, slow
     window.load behind the hero videos) leaves the menu offset and invisible.
     It reveals itself now — CSS only, visible from first paint. */
}

/* ------------------------------------------------------------
   5 · NAV — glass on scroll + hide on scroll-down
------------------------------------------------------------ */
function initNav(){
  const nav = document.getElementById('nav');
  let last = 0;
  ScrollTrigger.create({
    start: 0, end: 'max',
    onUpdate(self){
      const y = self.scroll();
      nav.classList.toggle('glassed', y > 60);
      /* the bar stays put — no hide-on-scroll */
      last = y;
    }
  });
}

/* ------------------------------------------------------------
   6 · SCROLL REVEALS — line masks, fades, reveals
------------------------------------------------------------ */
function initReveals(){
  // line-mask headings (everything except hero, handled above)
  gsap.utils.toArray('.line-mask').forEach((mask)=>{
    if (mask.closest('.hero')) return;
    const inner = mask.querySelector('span');
    gsap.from(inner, {
      yPercent: 120, duration: 1.3, ease: 'expo.out',
      scrollTrigger: { trigger: mask, start: 'top 88%' }
    });
  });

  // generic fades
  gsap.utils.toArray('.fade').forEach((el)=>{
    gsap.from(el, {
      y: 18, autoAlpha: 0, duration: 1, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 90%' }
    });
  });

  // reveals with subtle stagger when grouped
  gsap.utils.toArray('.reveal').forEach((el)=>{
    gsap.from(el, {
      y: 30, autoAlpha: 0, duration: 1.1, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 90%' }
    });
  });
}

/* ------------------------------------------------------------
   7 · PARALLAX (hero / banner backgrounds)
------------------------------------------------------------ */
function initParallax(){
  gsap.utils.toArray('[data-parallax]').forEach((el)=>{
    const amt = parseFloat(el.dataset.parallax) || 0.15;
    gsap.to(el, {
      yPercent: amt * 100, ease: 'none',
      scrollTrigger: { trigger: el.closest('section,header') || el, start: 'top top', end: 'bottom top', scrub: true }
    });
  });

  // drift on feature media (gentle vertical travel)
  gsap.utils.toArray('[data-drift]').forEach((img)=>{
    gsap.fromTo(img, { yPercent: -8 }, {
      yPercent: 8, ease: 'none',
      scrollTrigger: { trigger: img.closest('.feat-media') || img, start: 'top bottom', end: 'bottom top', scrub: true }
    });
  });
}

/* ------------------------------------------------------------
   8 · IMAGE EXPANSION (pinned)  — frame grows to fullscreen
------------------------------------------------------------ */
/* ------------------------------------------------------------
   8b · HORIZONTAL PARALLAX GALLERY — pin + pan, with depth inside each frame
------------------------------------------------------------ */
function initHGallery(){
  const sec   = document.getElementById('story');
  const wrap  = document.getElementById('hgal');
  const track = document.getElementById('hgalTrack');
  if (!track || window.matchMedia('(max-width:760px)').matches) return; // mobile = native swipe

  const getX = () => Math.max(0, track.scrollWidth - window.innerWidth);

  // pin the section and pan the track horizontally
  const pan = gsap.to(track, {
    x: () => -getX(),
    ease: 'none',
    scrollTrigger: {
      trigger: wrap, start: 'center center',
      end: () => '+=' + getX(),
      scrub: 1, pin: true, anticipatePin: 1, invalidateOnRefresh: true,
    }
  });

  // each image drifts within its frame, driven by the horizontal pan → parallax depth
  gsap.utils.toArray('.hgal-track .hg-media img').forEach((img)=>{
    gsap.fromTo(img,
      { xPercent: -9 },
      { xPercent: 9, ease: 'none',
        scrollTrigger: {
          trigger: img.closest('.hg'), containerAnimation: pan,
          start: 'left right', end: 'right left', scrub: true,
        }
      });
  });
}

/* ------------------------------------------------------------
   9 · COUNTERS
------------------------------------------------------------ */
function initCounters(){
  gsap.utils.toArray('[data-count]').forEach((el)=>{
    const end = parseFloat(el.dataset.count);
    const dec = parseInt(el.dataset.dec || '0', 10);
    const suf = el.dataset.suf || '';
    const obj = { v: 0 };
    ScrollTrigger.create({
      trigger: el, start: 'top 92%', once: true,
      onEnter(){
        gsap.to(obj, {
          v: end, duration: 2.0, ease: 'power2.out',
          onUpdate(){ el.textContent = obj.v.toFixed(dec) + suf; }
        });
      }
    });
  });
}

/* ------------------------------------------------------------
   10 · HORIZONTAL SCROLL (applications)
------------------------------------------------------------ */
function initHorizontal(){
  const track = document.getElementById('htrack');
  const sec   = track?.closest('.hsec');
  if (!track || window.matchMedia('(max-width:760px)').matches) return;

  const getX = () => track.scrollWidth - window.innerWidth + parseFloat(getComputedStyle(track).paddingLeft);
  gsap.to(track, {
    x: () => -getX(),
    ease: 'none',
    scrollTrigger: {
      trigger: sec, start: 'center center',
      end: () => '+=' + getX(),
      scrub: 1, pin: true, anticipatePin: 1, invalidateOnRefresh: true,
    }
  });
}

/* ------------------------------------------------------------
   11 · CARD HOVER TILT (subtle)
------------------------------------------------------------ */
function initTilt(){
  if (window.matchMedia('(max-width:900px)').matches) return;
  document.querySelectorAll('.card').forEach((card)=>{
    const qX = gsap.quickTo(card, 'rotationY', { duration: 0.6, ease: 'power3' });
    const qY = gsap.quickTo(card, 'rotationX', { duration: 0.6, ease: 'power3' });
    card.style.transformPerspective = '900px';
    card.addEventListener('mousemove', (e)=>{
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      qX(px * 5); qY(-py * 5);
    });
    card.addEventListener('mouseleave', ()=>{ qX(0); qY(0); });
  });
}

/* ------------------------------------------------------------
   12 · IMAGE EXPANSION — pinned frame grows to fullscreen
------------------------------------------------------------ */
function initImageExpand(){
  const sec   = document.getElementById('xpand');
  const frame = document.getElementById('xpandFrame');
  const img   = document.getElementById('xpandImg');
  const surr  = document.getElementById('xpandSurround');
  if (!sec) return;

  const mobile = window.matchMedia('(max-width:760px)').matches;
  const from = mobile ? 'inset(6% 5% 6% 5% round 16px)' : 'inset(9% 13% 9% 13% round 20px)';

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: sec, start: 'top top',
      end: '+=130%', scrub: 1, pin: true, anticipatePin: 1,
    }
  });
  tl.fromTo(frame, { clipPath: from },
      { clipPath: 'inset(0% 0% 0% 0% round 0px)', ease: 'none', duration: 1 })
    .fromTo(img, { scale: 1.18 }, { scale: 1, ease: 'none', duration: 1 }, 0)
    .to(surr, { opacity: 0, y: -12, duration: 0.42, ease: 'power1.out' }, 0);
  /* the caption is no longer part of the scrubbed timeline — it stays put
     and fully visible throughout, instead of fading in partway through the
     scroll (which left it invisible/easy to miss at the start) */
}

/* ------------------------------------------------------------
   13 · MOSAIC — columns drift at different speeds
------------------------------------------------------------ */
function initMosaic(){
  const mosaic = document.getElementById('mosaic');
  if (!mosaic || window.matchMedia('(max-width:760px)').matches) return;
  mosaic.querySelectorAll('.mcol').forEach((col)=>{
    const speed = parseFloat(col.dataset.speed) || 0;
    gsap.fromTo(col, { yPercent: -speed }, {
      yPercent: speed, ease: 'none',
      scrollTrigger: { trigger: mosaic, start: 'top bottom', end: 'bottom top', scrub: 1 }
    });
  });
}

/* ------------------------------------------------------------
   14 · LAZY VIDEOS — play only while on screen (film + mosaic)
------------------------------------------------------------ */
function initLazyVideos(){
  document.querySelectorAll('#filmVideo, .mvid').forEach((vid)=>{
    ScrollTrigger.create({
      trigger: vid, start: 'top 95%', end: 'bottom 5%',
      onEnter: () => vid.play().catch(()=>{}),
      onEnterBack: () => vid.play().catch(()=>{}),
      onLeave: () => vid.pause(),
      onLeaveBack: () => vid.pause(),
    });
  });
}

/* ------------------------------------------------------------
   15 · YOU INTRO — "Built for You" → UNITY ESS (pinned)
   "You" holds centre stage while prefixes swap beneath it with
   parallax drift; then "You" crossfades into the teal U and the
   rest of the lockup assembles around it.
------------------------------------------------------------ */
function initYouIntro(){
  const sec = document.getElementById('you');
  if (!sec) return;

  const line     = document.getElementById('youLine');
  const anchor   = document.getElementById('youAnchor');
  const word     = document.getElementById('youWord');
  const prefixes = gsap.utils.toArray('.you-prefix', sec);
  const logo     = document.getElementById('youLogo');
  const img      = document.getElementById('ylImg');
  const tag      = document.getElementById('ylTag');

  /* geometry of the teal U inside the logo PNG (fractions of the rendered image,
     measured from the artwork's pixels — see assets/img/logo.png) */
  const U_CX = 0.0623, U_CY = 0.5023, U_H = 0.9136;
  const U_CLIP = 'inset(0% 86.5% 0% 0%)';   /* everything right of the U hidden */

  if (prefersReduced){
    /* static brand card: lockup only, no sequence */
    gsap.set(line, { display: 'none' });
    gsap.set([logo, tag], { opacity: 1 }); /* CSS starts these hidden */
    return;
  }

  /* ---- geometry (offset* = layout values, immune to transforms) ---- */
  const fs    = () => parseFloat(getComputedStyle(line).fontSize);
  const px    = (i) => (prefixes[i].offsetWidth + fs() * 0.3) / 2; /* line shift that optically centres prefix+You */
  const uScale = () => word.offsetHeight / (img.offsetHeight * U_H); /* U starts at the size "You" was */

  /* where is the centre of "You" vs the centre of the logo's U? */
  const dx = () =>
    (line.offsetLeft + anchor.offsetLeft + word.offsetLeft + word.offsetWidth  / 2) -
    (logo.offsetLeft + img.offsetLeft + img.offsetWidth  * U_CX);
  const dy = () =>
    (line.offsetTop  + anchor.offsetTop  + word.offsetTop  + word.offsetHeight / 2) -
    (logo.offsetTop  + img.offsetTop  + img.offsetHeight * U_CY);
  const setOrigin = () => {
    /* scale the logo around the U's centre so the U never drifts off "You" */
    const ox = img.offsetLeft + img.offsetWidth  * U_CX;
    const oy = img.offsetTop  + img.offsetHeight * U_CY;
    gsap.set(logo, { transformOrigin: ox + 'px ' + oy + 'px' });
  };

  /* ---- initial states ---- */
  gsap.set(prefixes, { yPercent: (i)=> i === 0 ? 0 : 130, opacity: (i)=> i === 0 ? 1 : 0 });
  gsap.set(logo, { opacity: 0 });
  gsap.set(img,  { clipPath: U_CLIP, webkitClipPath: U_CLIP });
  gsap.set(tag,  { opacity: 0, y: 12 });
  setOrigin();

  const tl = gsap.timeline({ defaults: { ease: 'power2.inOut' }, paused: true });

  /* prefix swap — old drifts up fast, new rises slower = parallax depth */
  const swap = (t, from, to) => {
    tl.to(prefixes[from], { yPercent: -120, opacity: 0, filter: 'blur(5px)', duration: .42, ease: 'power2.in' }, t)
      .fromTo(prefixes[to], { yPercent: 130, opacity: 0, filter: 'blur(5px)' },
              { yPercent: 0, opacity: 1, filter: 'blur(0px)', duration: .55, ease: 'power2.out' }, t + .16)
      .to(line, { x: () => px(to), duration: .6 }, t + .04);
  };

  tl.fromTo(line, { x: () => px(0) }, { x: () => px(0), duration: .01 }, 0);  /* centre "Built for You" */

  /* every phrase gets the same ~0.7s hold before it transitions to the next —
     the old timings (0.25s / 0.09s) left almost no time to read the first
     couple of phrases, so the sequence felt rushed and uneven */
  swap(0.7, 0, 1);   /* Built for You  → Always with You */
  swap(2.1, 1, 2);   /* Always with You → Always You */

  /* Always You → You (alone, dead centre) */
  tl.to(prefixes[2], { yPercent: -120, opacity: 0, filter: 'blur(5px)', duration: .42, ease: 'power2.in' }, 3.5)
    .to(line, { x: 0, duration: .6 }, 3.5);

  /* ---- the morph: You becomes the teal U of the logo PNG ---- */
  const m = 4.6;
  tl.to(word, { opacity: 0, filter: 'blur(8px)', duration: .34, ease: 'power1.in' }, m)
    .fromTo(logo, { opacity: 0 }, { opacity: 1, duration: .3, ease: 'none' }, m + .04)
    .fromTo(logo, { x: () => dx(), y: () => dy(), scale: () => uScale() },
            { x: 0, y: 0, scale: 1, duration: .95, ease: 'power3.inOut', immediateRender: true }, m + .34)
    /* the rest of the wordmark sweeps out of the U, left to right */
    .to(img, { clipPath: 'inset(0% 0% 0% 0%)', webkitClipPath: 'inset(0% 0% 0% 0%)',
               duration: .8, ease: 'power2.inOut' }, m + .72)
    .to(tag, { opacity: 1, y: 0, duration: .45, ease: 'power2.out' }, m + 1.3)
    .to({}, { duration: .55 });  /* hold the settled lockup before release */

  /* background video drifts gently through the whole sequence */
  const media = sec.querySelector('.you-media');
  if (media){
    tl.fromTo(media, { yPercent: -8 }, { yPercent: 8, ease: 'none', duration: tl.duration() }, 0);
  }

  /* hold the hero video until the intro has handed off to it */
  const heroVid = document.querySelector('.hero-video');
  if (heroVid){
    heroVid.pause();
    ScrollTrigger.create({
      trigger: '.hero', start: 'top 85%', end: 'bottom top',
      onEnter:     () => heroVid.play().catch(()=>{}),
      onEnterBack: () => heroVid.play().catch(()=>{}),
      onLeave:     () => heroVid.pause(),
      onLeaveBack: () => heroVid.pause(),
    });
  }

  /* plays on its own as soon as the page loads — no scrolling required */
  tl.play();
}

/* ------------------------------------------------------------
   16 · ENERGY CHIP — BESS circuit with travelling light pulses
   A central module (solar-cell grid) with Manhattan-routed traces
   radiating out; teal comets flow along them = charge / dispatch.
   Pure SVG + GSAP. Desktop animates; mobile/reduced = static board.
------------------------------------------------------------ */
function initEnergyChip(){
  const svg = document.getElementById('chipCircuit');
  if (!svg) return;

  const SVGNS = 'http://www.w3.org/2000/svg';
  const VB = svg.viewBox.baseVal;               // 760 x 720
  const W = VB.width, H = VB.height, cx = W/2, cy = H/2;
  const chipW = 300, chipH = 232;
  const chipL = cx - chipW/2, chipT = cy - chipH/2, chipR = cx + chipW/2, chipB = cy + chipH/2;

  const baseG = svg.querySelector('#chipBase');
  const nodeG = svg.querySelector('#chipNodes');
  const flowG = svg.querySelector('#chipFlow');
  const coreG = svg.querySelector('#chipCore');

  const animate = !prefersReduced && !window.matchMedia('(max-width:900px)').matches;

  /* seeded RNG (mulberry32) — stable, tuned layout every load */
  let _s = 0x9e3779b9;
  const rnd = () => { _s |= 0; _s = _s + 0x6D2B79F5 | 0;
    let t = Math.imul(_s ^ _s >>> 15, 1 | _s);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296; };
  const R = (a,b) => a + rnd()*(b-a);
  const snap = v => Math.round(v/10)*10;
  const el = (n,a) => { const e = document.createElementNS(SVGNS,n); for (const k in a) e.setAttribute(k,a[k]); return e; };

  /* rounded orthogonal path through points */
  function roundedPath(pts, r=16){
    let d = `M ${pts[0][0]} ${pts[0][1]}`;
    for (let i=1;i<pts.length-1;i++){
      const [px,py]=pts[i-1],[x,y]=pts[i],[nx,ny]=pts[i+1];
      const d1=Math.hypot(x-px,y-py), d2=Math.hypot(nx-x,ny-y);
      const r1=Math.min(r,d1/2,d2/2);
      const a=[x-(x-px)/d1*r1, y-(y-py)/d1*r1];
      const b=[x+(nx-x)/d2*r1, y+(ny-y)/d2*r1];
      d += ` L ${a[0]} ${a[1]} Q ${x} ${y} ${b[0]} ${b[1]}`;
    }
    const last=pts[pts.length-1];
    return d + ` L ${last[0]} ${last[1]}`;
  }

  /* pins spaced along a chip edge */
  function pins(side,count){
    const arr=[];
    for (let i=0;i<count;i++){
      const t=(i+1)/(count+1);
      if (side==='L') arr.push([chipL, chipT+chipH*t]);
      if (side==='R') arr.push([chipR, chipT+chipH*t]);
      if (side==='T') arr.push([chipL+chipW*t, chipT]);
      if (side==='B') arr.push([chipL+chipW*t, chipB]);
    }
    return arr;
  }

  /* Manhattan trace from a pin out toward the frame */
  const traces=[];
  function makeTrace(start,dir){
    const pts=[start.slice()];
    let [x,y]=start;
    const out = dir==='L'?[-1,0]:dir==='R'?[1,0]:dir==='T'?[0,-1]:[0,1];
    x+=out[0]*R(28,64); y+=out[1]*R(28,64); pts.push([snap(x),snap(y)]);
    const steps=Math.floor(R(2,4));
    for (let s=0;s<steps;s++){
      if (dir==='L'||dir==='R'){
        y += (rnd()<.5?-1:1)*R(26,110); pts.push([snap(x),snap(y)]);
        x += out[0]*R(54,140);          pts.push([snap(x),snap(y)]);
      } else {
        x += (rnd()<.5?-1:1)*R(26,110); pts.push([snap(x),snap(y)]);
        y += out[1]*R(54,140);          pts.push([snap(x),snap(y)]);
      }
    }
    x=Math.max(34,Math.min(W-34,x)); y=Math.max(34,Math.min(H-34,y));
    pts[pts.length-1]=[snap(x),snap(y)];
    traces.push({pts});
  }

  const allPins=[...pins('L',4),...pins('R',4),...pins('T',5),...pins('B',5)];
  pins('L',4).forEach(p=>makeTrace(p,'L'));
  pins('R',4).forEach(p=>makeTrace(p,'R'));
  pins('T',5).forEach(p=>makeTrace(p,'T'));
  pins('B',5).forEach(p=>makeTrace(p,'B'));

  /* render traces: faint base + end pad + flowing comet */
  const comets=[];
  traces.forEach((tr,i)=>{
    const d=roundedPath(tr.pts,16);
    baseG.appendChild(el('path',{d,fill:'none',stroke:'var(--trace,rgba(79,179,191,0.16))',
      'stroke-width':1.4,'stroke-linecap':'round','stroke-linejoin':'round'}));

    const end=tr.pts[tr.pts.length-1];
    nodeG.appendChild(el('circle',{cx:end[0],cy:end[1],r:3.4,fill:'none',
      stroke:'rgba(79,179,191,0.4)','stroke-width':1.3}));
    const core=el('circle',{cx:end[0],cy:end[1],r:1.4,fill:'#4fb3bf',opacity:0.5});
    nodeG.appendChild(core);

    if (!animate) return;
    const comet=el('path',{d,fill:'none',stroke:'#7fe6f0','stroke-width':2.2,
      'stroke-linecap':'round',filter:'url(#chipSoft)'});
    flowG.appendChild(comet);
    const len=comet.getTotalLength();
    const dash=R(56,116);
    comet.setAttribute('stroke-dasharray',`${dash} ${len}`);
    comet.setAttribute('stroke-dashoffset',len+dash);
    comets.push({comet,len,dash,core,inward:(i%3===0)});
  });

  /* central BESS module: glow, body, solar-cell grid, pins, label */
  coreG.appendChild(el('rect',{x:chipL-10,y:chipT-10,width:chipW+20,height:chipH+20,rx:22,
    fill:'url(#chipCoreGlow)',opacity:0.9,class:'chip-core-glow'}));
  coreG.appendChild(el('rect',{x:chipL,y:chipT,width:chipW,height:chipH,rx:16,
    fill:'rgba(6,35,40,0.55)',stroke:'rgba(127,230,240,0.55)','stroke-width':1.5}));
  const gi=24, gx=chipL+gi, gy=chipT+gi, gw=chipW-gi*2, gh=chipH-gi*2, cols=6, rows=4;
  const cells=[];
  for (let r=0;r<rows;r++) for (let c=0;c<cols;c++){
    const cell=el('rect',{x:gx+c*gw/cols+3,y:gy+r*gh/rows+3,width:gw/cols-6,height:gh/rows-6,rx:3,
      fill:'url(#chipCellGrad)',stroke:'rgba(79,179,191,0.22)','stroke-width':0.8});
    coreG.appendChild(cell); cells.push(cell);
  }
  allPins.forEach(p=>coreG.appendChild(el('circle',{cx:p[0],cy:p[1],r:2.4,
    fill:'#7fe6f0',opacity:0.85,filter:'url(#chipSoft)'})));
  coreG.appendChild(el('text',{x:cx,y:chipB-13,'text-anchor':'middle',fill:'rgba(200,235,240,0.7)',
    'font-size':11,'letter-spacing':5,'font-family':'Chivo,sans-serif'})).textContent='UNITY ESS · BMS';

  if (!animate) return;   // static board is complete

  /* master timeline of flowing pulses (paused until section is in view) */
  const chipTL = gsap.timeline({ paused:true });
  comets.forEach(c=>{
    const from = c.inward ? -c.dash : c.len+c.dash;
    const to   = c.inward ? c.len+c.dash : -c.dash;
    const t = gsap.fromTo(c.comet, {strokeDashoffset:from}, {
      strokeDashoffset:to, duration:R(2.6,4.4), ease:'none',
      repeat:-1, repeatDelay:R(0.4,1.6),
      onRepeat(){ /* destination pad flashes as a pulse arrives */
        gsap.fromTo(c.core,{opacity:.5,attr:{r:1.4}},
          {opacity:1,attr:{r:3},duration:.25,yoyo:true,repeat:1,ease:'sine.out'});
      }
    });
    chipTL.add(t, R(0,3.4));   // stagger starts
  });

  /* breathing core + twinkling cells */
  gsap.to('.chip-core-glow',{opacity:.55,duration:2.4,repeat:-1,yoyo:true,ease:'sine.inOut'});
  cells.forEach(cell=>gsap.to(cell,{opacity:R(.5,1),duration:R(1.6,3.4),
    repeat:-1,yoyo:true,ease:'sine.inOut',delay:R(0,2)}));

  /* only run while the section is on screen */
  ScrollTrigger.create({
    trigger:'#intelligence', start:'top 85%', end:'bottom 15%',
    onToggle:self=> self.isActive ? chipTL.play() : chipTL.pause()
  });

  /* gentle depth: the whole board drifts + the core scales in on enter */
  gsap.fromTo(coreG,{scale:0.92,transformOrigin:'50% 50%'},{scale:1,ease:'none',
    scrollTrigger:{trigger:'#intelligence',start:'top bottom',end:'top top',scrub:true}});

  /* subtle cursor interaction — energy speeds up when you lean in */
  const stage=svg.closest('.chip-stage');
  if (stage){
    stage.addEventListener('mouseenter',()=>gsap.to(chipTL,{timeScale:1.85,duration:.6}));
    stage.addEventListener('mouseleave',()=>gsap.to(chipTL,{timeScale:1,duration:.8}));
  }
}

/* ------------------------------------------------------------
   BOOT
------------------------------------------------------------ */
window.addEventListener('load', ()=>{
  initLenis();
  initNav();
  initYouIntro();
  initReveals();
  initParallax();
  initImageExpand();
  initHGallery();
  initCounters();
  initMosaic();
  initHorizontal();
  initTilt();
  initLazyVideos();
  initEnergyChip();

  if (prefersReduced){
    gsap.globalTimeline.timeScale(100);
  }
  initLoader();
  ScrollTrigger.refresh();

  /* the Chivo webfont (@import) can finish after 'load', reflowing the page and
     leaving every trigger's measured position stale — re-measure when fonts land */
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => ScrollTrigger.refresh());
  }
});

/* ============================================================
   CINEMATIC+ — beam, letterbox shutters, decode, film timecode
   ============================================================ */

/* shutters start closed behind the preloader */
gsap.set('.lb', { scaleY: 1 });

/* extend the hero reveal: shutters open, video eases out of a slow zoom,
   eyebrow decodes like a signal locking on */
const _heroReveal = heroReveal;
heroReveal = function(){
  _heroReveal();
  if (prefersReduced){
    gsap.set('.lb', { scaleY: 0 });
    return;
  }
  gsap.to('.lb', { scaleY: 0, duration: 1.6, ease: 'expo.inOut', delay: 0.05 });
  /* zoom-out intro only on image heroes — video heroes should just play, no delayed effects */
  const heroMedia = document.querySelector('.hero-media img');
  if (heroMedia) gsap.fromTo(heroMedia, { scale: 1.15 }, { scale: 1, duration: 2.8, ease: 'power3.out' });
  const eye = document.querySelector('.hero .eyebrow span');
  if (eye) decodeText(eye, 1.3);
};

/* text decode / signal lock-on */
function decodeText(el, dur){
  const original = el.textContent;
  const glyphs = '01<>/▪ABCDEFGHIKLMNORSTUVX';
  const obj = { p: 0 };
  gsap.to(obj, {
    p: 1, duration: dur || 1.1, ease: 'power2.out', delay: 0.25,
    onUpdate(){
      const n = Math.floor(obj.p * original.length);
      let out = original.slice(0, n);
      for (let i = n; i < original.length; i++){
        out += original[i] === ' ' ? ' ' : glyphs[(Math.random() * glyphs.length) | 0];
      }
      el.textContent = out;
    },
    onComplete(){ el.textContent = original; }
  });
}

window.addEventListener('load', () => {
  /* scroll progress beam */
  const beam = document.querySelector('.progress-beam');
  if (beam && !prefersReduced){
    gsap.to(beam, { scaleX: 1, ease: 'none',
      scrollTrigger: { start: 0, end: 'max', scrub: 0.3 } });
  }

  /* running film timecode (24 fps) */
  const tc = document.getElementById('filmTC');
  if (tc && !prefersReduced){
    const t0 = performance.now();
    gsap.ticker.add(() => {
      const s = (performance.now() - t0) / 1000;
      const f  = Math.floor((s % 1) * 24);
      const ss = Math.floor(s) % 60;
      const mm = Math.floor(s / 60) % 60;
      const hh = Math.floor(s / 3600);
      tc.textContent = [hh, mm, ss, f].map(v => String(v).padStart(2, '0')).join(':');
    });
  }
});

/* the intro line rises as the preloader lifts (index only) */
const _heroRevealYou = heroReveal;
heroReveal = function(){
  _heroRevealYou();
  const anchor = document.getElementById('youAnchor');
  if (anchor && !prefersReduced){
    gsap.from(anchor, { yPercent: 46, autoAlpha: 0, duration: 1.5, ease: 'expo.out', delay: .15 });
  }
};

/* ============================================================
   HOPEWIND — spec cyclone: specs whirl in and settle into orbit
   ============================================================ */
function initCyclone(){
  const sec = document.getElementById('cyclone');
  if (!sec || !window.gsap) return;
  const stage   = sec.querySelector('.cyc-stage');
  const chips   = gsap.utils.toArray('.cyc-chip', sec);
  const product = sec.querySelector('.cyc-product');
  const rings   = gsap.utils.toArray('.cyc-ring', sec);
  const n = chips.length || 1;
  const mobile = window.matchMedia('(max-width:760px)').matches;

  /* swirl: extra winding angle; rad: 0 = centre, 1 = settled orbit */
  const state = { swirl: Math.PI * 3, rad: 0, op: 0 };

  function place(){
    const w = stage.clientWidth, h = stage.clientHeight;
    /* cap the orbit so chips never leave the stage */
    const rx = Math.min(w * (mobile ? .38 : .30), w * .5 - 140);
    const ry = Math.min(h * (mobile ? .24 : .30), h * .5 - 110);
    chips.forEach((chip, i) => {
      const a = (i / n) * Math.PI * 2 + state.swirl;
      gsap.set(chip, {
        xPercent: -50, yPercent: -50,
        x: Math.cos(a) * rx * state.rad,
        y: Math.sin(a) * ry * state.rad,
        scale: .5 + .5 * state.rad,
        rotation: (1 - state.rad) * 24,
        opacity: state.op,
      });
    });
  }

  if (prefersReduced){
    state.swirl = 0; state.rad = 1; state.op = 1; place();
    gsap.set(rings, { xPercent: -50, yPercent: -50, opacity: .6 });
    return;
  }

  place();
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: sec, start: 'top top', end: '+=240%',
      scrub: 1, pin: true, anticipatePin: 1, invalidateOnRefresh: true,
    }
  });
  tl.fromTo(product,
      { scale: 1.3, opacity: 0, filter: 'blur(16px)' },
      { scale: 1, opacity: 1, filter: 'blur(0px)', duration: .9, ease: 'power2.out' }, 0)
    .to(state, { swirl: 0, rad: 1, op: 1, duration: 2.4, ease: 'power2.inOut', onUpdate: place }, .35)
    .fromTo(rings,
      { xPercent: -50, yPercent: -50, scale: .5, opacity: 0 },
      { xPercent: -50, yPercent: -50, scale: 1, opacity: .7, duration: 1, stagger: .2, ease: 'power2.out' }, 1.2)
    .to(state, { swirl: -.55, duration: 1.4, ease: 'none', onUpdate: place });

  window.addEventListener('resize', place);
}
window.addEventListener('load', initCyclone);

/* ------------------------------------------------------------
   MOBILE NAV — hamburger + dropdown. The bar's links are
   display:none below 760px (.hide-sm); this injects a toggle
   into the bar and mirrors the links into a dropdown panel.
------------------------------------------------------------ */
(function(){
  const nav = document.getElementById('nav');
  const linkWrap = nav && nav.querySelector('.nav-links');
  const links = linkWrap ? linkWrap.querySelectorAll('a') : [];
  if (!linkWrap || !links.length) return;

  const toggle = document.createElement('button');
  toggle.className = 'nav-toggle';
  toggle.setAttribute('aria-label', 'Menu');
  toggle.innerHTML = '<span></span><span></span><span></span>';
  linkWrap.appendChild(toggle);

  const menu = document.createElement('div');
  menu.className = 'nav-menu';
  links.forEach((a) => {
    const c = a.cloneNode(true);
    c.classList.remove('hide-sm');
    menu.appendChild(c);
  });
  document.body.appendChild(menu);

  const close = () => { menu.classList.remove('open'); toggle.classList.remove('open'); };
  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    menu.style.top = (nav.getBoundingClientRect().bottom + 8) + 'px';
    menu.classList.toggle('open');
    toggle.classList.toggle('open');
  });
  menu.addEventListener('click', (e) => { if (e.target.closest('a')) close(); });
  document.addEventListener('click', (e) => { if (!e.target.closest('.nav-menu,.nav-toggle')) close(); });
  window.addEventListener('scroll', close, { passive: true });
})();
