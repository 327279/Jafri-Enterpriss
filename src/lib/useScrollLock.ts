"use client";
import { useEffect, useRef } from "react";
import { useLenis } from "@studio-freight/react-lenis";

/**
 * useScrollLock — prevent background scrolling while a modal / mobile menu
 * is open.
 *
 * Plain `document.body.style.overflow = "hidden"` is NOT enough here:
 * Lenis drives root scroll in this app, so this hook also stops the Lenis
 * instance (which fixes both desktop wheel and mobile touch) and adds a
 * touch-action / overscroll guard for iOS Safari. It also snapshots the
 * current scroll offset and restores it on release, because on iOS the
 * document gets scrolled to the top when a `position: fixed` overlay mounts.
 */
export function useScrollLock(active: boolean) {
  const lenis = useLenis();
  const scrollYRef = useRef(0);

  useEffect(() => {
    if (!active) return;
    scrollYRef.current = window.scrollY;
    const prevOverflow = document.body.style.overflow;
    const prevTouchAction = document.body.style.touchAction;
    document.body.style.overflow = "hidden";
    document.body.style.touchAction = "none";
    lenis?.stop();
    return () => {
      document.body.style.overflow = prevOverflow;
      document.body.style.touchAction = prevTouchAction;
      lenis?.start();
      window.scrollTo(0, scrollYRef.current);
    };
  }, [active, lenis]);
}
