"use client";
import { useEffect, useRef } from "react";

const clips = ["/assets/hero-scene-1.mp4", "/assets/hero-scene-2.mp4", "/assets/hero-scene-3.mp4"];

export default function YouVideo() {
  const videoRef = useRef(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    let i = 0;
    const onEnded = () => {
      i = (i + 1) % clips.length;
      v.src = clips[i];
      v.play();
    };
    v.addEventListener("ended", onEnded);
    return () => v.removeEventListener("ended", onEnded);
  }, []);

  return (
    <video className="you-video" ref={videoRef} autoPlay muted playsInline preload="auto">
      <source src={clips[0]} type="video/mp4" />
    </video>
  );
}
