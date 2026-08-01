"use client";
import { useEffect } from "react";

/**
 * Homepage-only bespoke sequences — ported verbatim from assets/js/main.js:
 * the "Built for You → UNITY ESS" logo-morph intro, the pinned image-expansion
 * section, and the decoding hero eyebrow text. Waits for SiteEffects' core
 * boot (gsap/ScrollTrigger/Lenis ready) via the same "site-scripts-ready" event.
 */
export default function HomeEffects() {
  useEffect(() => {
    let cancelled = false;
    let youTl = null;
    let imageExpandTl = null;
    let heroTl = null;
    let decodeTween = null;
    let youAnchorTween = null;
    let resizeHandler = null;

    function boot() {
      if (cancelled) return;
      const gsap = window.gsap;
      const ScrollTrigger = window.ScrollTrigger;
      if (!gsap || !ScrollTrigger) return;
      gsap.registerPlugin(ScrollTrigger); // idempotent — guards against SiteEffects not having registered it yet

      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      /* ---------- hero reveal (runs once, no preloader on this page) ---------- */
      heroTl = gsap.timeline({ defaults: { ease: "expo.out" } });
      heroTl
        .from(".hero .line-mask > span", { yPercent: 120, duration: 1.5, stagger: 0.12 })
        .from(".hero-sub", { y: 24, autoAlpha: 0, duration: 1.1 }, "-=0.9")
        .from(".hero-cta", { y: 24, autoAlpha: 0, duration: 1.1 }, "-=0.85");

      const heroMedia = document.querySelector(".hero-media img");
      if (heroMedia) {
        gsap.fromTo(heroMedia, { scale: 1.15 }, { scale: 1, duration: 2.8, ease: "power3.out" });
      }
      const eyebrowSpan = document.querySelector(".hero .eyebrow span");
      if (eyebrowSpan) decodeTween = decodeText(gsap, eyebrowSpan, 1.3);

      const anchor = document.getElementById("youAnchor");
      if (anchor && !prefersReduced) {
        youAnchorTween = gsap.from(anchor, {
          yPercent: 46,
          autoAlpha: 0,
          duration: 1.5,
          ease: "expo.out",
          delay: 0.15,
        });
      }

      /* ---------- You Intro: Built for You → UNITY ESS ---------- */
      youTl = initYouIntro(gsap, prefersReduced);

      /* ---------- Image expansion (pinned) ---------- */
      imageExpandTl = initImageExpand(gsap, ScrollTrigger);

      requestAnimationFrame(() => ScrollTrigger.refresh());

      resizeHandler = () => ScrollTrigger.refresh();
      window.addEventListener("resize", resizeHandler);
    }

    if (window.gsap && window.ScrollTrigger) {
      // core SiteEffects may not have finished its own boot yet; defer a tick
      requestAnimationFrame(boot);
    } else {
      window.addEventListener("site-scripts-ready", boot, { once: true });
    }

    return () => {
      cancelled = true;
      window.removeEventListener("site-scripts-ready", boot);
      if (resizeHandler) window.removeEventListener("resize", resizeHandler);
      if (heroTl) heroTl.kill();
      if (youTl) youTl.kill();
      if (imageExpandTl) imageExpandTl.scrollTrigger?.kill();
      if (imageExpandTl) imageExpandTl.kill();
      if (decodeTween) decodeTween.kill();
      if (youAnchorTween) youAnchorTween.kill();
    };
  }, []);

  return null;
}

function decodeText(gsap, el, dur) {
  const original = el.textContent;
  const glyphs = "01<>/▪ABCDEFGHIKLMNORSTUVX";
  const obj = { p: 0 };
  return gsap.to(obj, {
    p: 1,
    duration: dur || 1.1,
    ease: "power2.out",
    delay: 0.25,
    onUpdate() {
      const n = Math.floor(obj.p * original.length);
      let out = original.slice(0, n);
      for (let i = n; i < original.length; i++) {
        out += original[i] === " " ? " " : glyphs[(Math.random() * glyphs.length) | 0];
      }
      el.textContent = out;
    },
    onComplete() {
      el.textContent = original;
    },
  });
}

function initYouIntro(gsap, prefersReduced) {
  const sec = document.getElementById("you");
  if (!sec) return null;

  const line = document.getElementById("youLine");
  const anchor = document.getElementById("youAnchor");
  const word = document.getElementById("youWord");
  const prefixes = gsap.utils.toArray(".you-prefix", sec);
  const logo = document.getElementById("youLogo");
  const img = document.getElementById("ylImg");
  const tag = document.getElementById("ylTag");
  if (!line || !anchor || !word || !logo || !img || !tag || prefixes.length < 3) return null;

  const U_CX = 0.0623, U_CY = 0.5023, U_H = 0.9136;
  const U_CLIP = "inset(0% 86.5% 0% 0%)";

  if (prefersReduced) {
    gsap.set(line, { display: "none" });
    gsap.set([logo, tag], { opacity: 1 });
    return null;
  }

  const fs = () => parseFloat(getComputedStyle(line).fontSize);
  const px = (i) => (prefixes[i].offsetWidth + fs() * 0.3) / 2;
  const uScale = () => word.offsetHeight / (img.offsetHeight * U_H);

  const dx = () =>
    line.offsetLeft + anchor.offsetLeft + word.offsetLeft + word.offsetWidth / 2 -
    (logo.offsetLeft + img.offsetLeft + img.offsetWidth * U_CX);
  const dy = () =>
    line.offsetTop + anchor.offsetTop + word.offsetTop + word.offsetHeight / 2 -
    (logo.offsetTop + img.offsetTop + img.offsetHeight * U_CY);
  const setOrigin = () => {
    const ox = img.offsetLeft + img.offsetWidth * U_CX;
    const oy = img.offsetTop + img.offsetHeight * U_CY;
    gsap.set(logo, { transformOrigin: ox + "px " + oy + "px" });
  };

  gsap.set(prefixes, { yPercent: (i) => (i === 0 ? 0 : 130), opacity: (i) => (i === 0 ? 1 : 0) });
  gsap.set(logo, { opacity: 0 });
  gsap.set(img, { clipPath: U_CLIP, webkitClipPath: U_CLIP });
  gsap.set(tag, { opacity: 0, y: 12 });
  setOrigin();

  const tl = gsap.timeline({ defaults: { ease: "power2.inOut" }, paused: true });

  const swap = (t, from, to) => {
    tl.to(prefixes[from], { yPercent: -120, opacity: 0, filter: "blur(5px)", duration: 0.42, ease: "power2.in" }, t)
      .fromTo(
        prefixes[to],
        { yPercent: 130, opacity: 0, filter: "blur(5px)" },
        { yPercent: 0, opacity: 1, filter: "blur(0px)", duration: 0.55, ease: "power2.out" },
        t + 0.16
      )
      .to(line, { x: () => px(to), duration: 0.6 }, t + 0.04);
  };

  tl.fromTo(line, { x: () => px(0) }, { x: () => px(0), duration: 0.01 }, 0);

  swap(0.7, 0, 1);
  swap(2.1, 1, 2);

  tl.to(prefixes[2], { yPercent: -120, opacity: 0, filter: "blur(5px)", duration: 0.42, ease: "power2.in" }, 3.5).to(
    line,
    { x: 0, duration: 0.6 },
    3.5
  );

  const m = 4.6;
  tl.to(word, { opacity: 0, filter: "blur(8px)", duration: 0.34, ease: "power1.in" }, m)
    .fromTo(logo, { opacity: 0 }, { opacity: 1, duration: 0.3, ease: "none" }, m + 0.04)
    .fromTo(
      logo,
      { x: () => dx(), y: () => dy(), scale: () => uScale() },
      { x: 0, y: 0, scale: 1, duration: 0.95, ease: "power3.inOut", immediateRender: true },
      m + 0.34
    )
    .to(img, { clipPath: "inset(0% 0% 0% 0%)", webkitClipPath: "inset(0% 0% 0% 0%)", duration: 0.8, ease: "power2.inOut" }, m + 0.72)
    .to(tag, { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" }, m + 1.3)
    .to({}, { duration: 0.55 });

  const media = sec.querySelector(".you-media");
  if (media) {
    tl.fromTo(media, { yPercent: -8 }, { yPercent: 8, ease: "none", duration: tl.duration() }, 0);
  }

  tl.play();
  return tl;
}

function initImageExpand(gsap, ScrollTrigger) {
  const sec = document.getElementById("xpand");
  const frame = document.getElementById("xpandFrame");
  const img = document.getElementById("xpandImg");
  const surr = document.getElementById("xpandSurround");
  if (!sec || !frame || !img) return null;

  const mobile = window.matchMedia("(max-width:760px)").matches;
  const from = mobile ? "inset(6% 5% 6% 5% round 16px)" : "inset(9% 13% 9% 13% round 20px)";

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: sec,
      start: "top top",
      end: "+=130%",
      scrub: 1,
      pin: true,
      anticipatePin: 1,
    },
  });
  tl.fromTo(frame, { clipPath: from }, { clipPath: "inset(0% 0% 0% 0% round 0px)", ease: "none", duration: 1 })
    .fromTo(img, { scale: 1.18 }, { scale: 1, ease: "none", duration: 1 }, 0);
  if (surr) tl.to(surr, { opacity: 0, y: -12, duration: 0.42, ease: "power1.out" }, 0);

  return tl;
}
