"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Core, site-wide animation system — ported from assets/js/main.js.
 * Runs on every route change (App Router keeps the layout mounted across
 * navigations, so this re-initializes per pathname instead of per full load).
 */
export default function SiteEffects() {
  const pathname = usePathname();

  useEffect(() => {
    let cancelled = false;
    let lenis;
    let mobileNavCleanup = () => {};

    function boot() {
      if (cancelled) return;
      const gsap = window.gsap;
      const ScrollTrigger = window.ScrollTrigger;
      const Lenis = window.Lenis;
      if (!gsap || !ScrollTrigger || !Lenis) return;

      gsap.registerPlugin(ScrollTrigger);
      // clear any triggers left over from the previous route
      ScrollTrigger.getAll().forEach((t) => t.kill());

      if ("scrollRestoration" in history) history.scrollRestoration = "manual";
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      /* 1 · Lenis smooth scroll */
      lenis = new Lenis({
        duration: 1.25,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 1.4,
      });
      window.lenis = lenis;
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add((time) => lenis.raf(time * 1000));
      gsap.ticker.lagSmoothing(0);

      document.querySelectorAll('a[href^="#"]').forEach((a) => {
        a.addEventListener("click", (e) => {
          const id = a.getAttribute("href");
          if (id.length > 1 && document.querySelector(id)) {
            e.preventDefault();
            lenis.scrollTo(id, { offset: -10, duration: 1.6 });
          }
        });
      });

      /* 2 · Nav — glass on scroll */
      const nav = document.getElementById("nav");
      if (nav) {
        ScrollTrigger.create({
          start: 0,
          end: "max",
          onUpdate(self) {
            nav.classList.toggle("glassed", self.scroll() > 60);
          },
        });
      }

      /* 3 · Scroll reveals — line masks, fades, reveals */
      gsap.utils.toArray(".line-mask").forEach((mask) => {
        if (mask.closest(".hero") || mask.closest(".you-line")) return;
        const inner = mask.querySelector("span");
        if (!inner) return;
        gsap.from(inner, {
          yPercent: 120,
          duration: 1.3,
          ease: "expo.out",
          scrollTrigger: { trigger: mask, start: "top 88%" },
        });
      });

      gsap.utils.toArray(".fade").forEach((el) => {
        gsap.from(el, {
          y: 18,
          autoAlpha: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 90%" },
        });
      });

      gsap.utils.toArray(".reveal").forEach((el) => {
        gsap.from(el, {
          y: 30,
          autoAlpha: 0,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 90%" },
        });
      });

      /* 4 · Parallax */
      gsap.utils.toArray("[data-parallax]").forEach((el) => {
        const amt = parseFloat(el.dataset.parallax) || 0.15;
        gsap.to(el, {
          yPercent: amt * 100,
          ease: "none",
          scrollTrigger: {
            trigger: el.closest("section,header") || el,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      /* 5 · Counters */
      gsap.utils.toArray("[data-count]").forEach((el) => {
        const end = parseFloat(el.dataset.count);
        const dec = parseInt(el.dataset.dec || "0", 10);
        const suf = el.dataset.suf || "";
        const obj = { v: 0 };
        ScrollTrigger.create({
          trigger: el,
          start: "top 92%",
          once: true,
          onEnter() {
            gsap.to(obj, {
              v: end,
              duration: 2.0,
              ease: "power2.out",
              onUpdate() {
                el.textContent = obj.v.toFixed(dec) + suf;
              },
            });
          },
        });
      });

      /* 6 · Horizontal scroll (applications track, if present) */
      const track = document.getElementById("htrack");
      const hsec = track?.closest(".hsec");
      if (track && hsec && !window.matchMedia("(max-width:760px)").matches) {
        const getX = () =>
          track.scrollWidth - window.innerWidth + parseFloat(getComputedStyle(track).paddingLeft);
        gsap.to(track, {
          x: () => -getX(),
          ease: "none",
          scrollTrigger: {
            trigger: hsec,
            start: "center center",
            end: () => "+=" + getX(),
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
      }

      /* 7 · Card hover tilt */
      if (!window.matchMedia("(max-width:900px)").matches) {
        document.querySelectorAll(".card").forEach((card) => {
          const qX = gsap.quickTo(card, "rotationY", { duration: 0.6, ease: "power3" });
          const qY = gsap.quickTo(card, "rotationX", { duration: 0.6, ease: "power3" });
          card.style.transformPerspective = "900px";
          card.addEventListener("mousemove", (e) => {
            const r = card.getBoundingClientRect();
            const px = (e.clientX - r.left) / r.width - 0.5;
            const py = (e.clientY - r.top) / r.height - 0.5;
            qX(px * 5);
            qY(-py * 5);
          });
          card.addEventListener("mouseleave", () => {
            qX(0);
            qY(0);
          });
        });
      }

      /* 8 · Progress beam */
      const beam = document.querySelector(".progress-beam");
      if (beam && !prefersReduced) {
        gsap.to(beam, {
          scaleX: 1,
          ease: "none",
          scrollTrigger: { start: 0, end: "max", scrub: 0.3 },
        });
      }

      if (prefersReduced) gsap.globalTimeline.timeScale(100);

      requestAnimationFrame(() => ScrollTrigger.refresh());
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => ScrollTrigger.refresh());
      }

      /* 9 · Mobile nav — hamburger + dropdown mirror */
      mobileNavCleanup = initMobileNav();
    }

    if (window.gsap && window.ScrollTrigger && window.Lenis) {
      boot();
    } else {
      window.addEventListener("site-scripts-ready", boot, { once: true });
    }

    return () => {
      cancelled = true;
      window.removeEventListener("site-scripts-ready", boot);
      if (window.ScrollTrigger) window.ScrollTrigger.getAll().forEach((t) => t.kill());
      if (lenis) lenis.destroy();
      mobileNavCleanup();
    };
  }, [pathname]);

  return null;
}

function initMobileNav() {
  const nav = document.getElementById("nav");
  const linkWrap = nav && nav.querySelector(".nav-links");
  const links = linkWrap ? linkWrap.querySelectorAll("a") : [];
  if (!linkWrap || !links.length) return () => {};

  // avoid stacking duplicates on repeated boots (fast route changes)
  const existingToggle = linkWrap.querySelector(".nav-toggle");
  if (existingToggle) existingToggle.remove();
  const existingMenu = document.querySelector(".nav-menu");
  if (existingMenu) existingMenu.remove();

  const toggle = document.createElement("button");
  toggle.className = "nav-toggle";
  toggle.setAttribute("aria-label", "Menu");
  toggle.innerHTML = "<span></span><span></span><span></span>";
  linkWrap.appendChild(toggle);

  const menu = document.createElement("div");
  menu.className = "nav-menu";
  links.forEach((a) => {
    const c = a.cloneNode(true);
    c.classList.remove("hide-sm");
    menu.appendChild(c);
  });
  document.body.appendChild(menu);

  const close = () => {
    menu.classList.remove("open");
    toggle.classList.remove("open");
  };
  const onToggleClick = (e) => {
    e.stopPropagation();
    menu.style.top = nav.getBoundingClientRect().bottom + 8 + "px";
    menu.classList.toggle("open");
    toggle.classList.toggle("open");
  };
  const onMenuClick = (e) => {
    if (e.target.closest("a")) close();
  };
  const onDocClick = (e) => {
    if (!e.target.closest(".nav-menu,.nav-toggle")) close();
  };

  toggle.addEventListener("click", onToggleClick);
  menu.addEventListener("click", onMenuClick);
  document.addEventListener("click", onDocClick);
  window.addEventListener("scroll", close, { passive: true });

  return () => {
    toggle.removeEventListener("click", onToggleClick);
    menu.removeEventListener("click", onMenuClick);
    document.removeEventListener("click", onDocClick);
    window.removeEventListener("scroll", close);
    toggle.remove();
    menu.remove();
  };
}
