"use client";
import Script from "next/script";

export default function SiteScripts() {
  return (
    <>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" strategy="afterInteractive" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js" strategy="afterInteractive" />
      <Script
        src="https://cdn.jsdelivr.net/npm/@studio-freight/lenis@1.0.42/dist/lenis.min.js"
        strategy="afterInteractive"
        onLoad={() => {
          window.dispatchEvent(new Event("site-scripts-ready"));
        }}
      />
    </>
  );
}
