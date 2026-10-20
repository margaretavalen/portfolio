'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only enable on desktop pointer devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    document.body.classList.add('has-custom-cursor');

    let mx = -100;
    let my = -100;
    let rx = -100;
    let ry = -100;
    let animId: number;

    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };

    const animate = () => {
      if (cursorRef.current && ringRef.current && glowRef.current) {
        cursorRef.current.style.left = `${mx}px`;
        cursorRef.current.style.top = `${my}px`;

        rx += (mx - rx) * 0.15;
        ry += (my - ry) * 0.15;
        ringRef.current.style.left = `${rx}px`;
        ringRef.current.style.top = `${ry}px`;

        glowRef.current.style.left = `${mx}px`;
        glowRef.current.style.top = `${my}px`;
      }
      animId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMouseMove);
    animId = requestAnimationFrame(animate);

    const handleMouseEnter = () => {
      if (cursorRef.current && ringRef.current) {
        cursorRef.current.style.width = '4px';
        cursorRef.current.style.height = '4px';
        ringRef.current.style.width = '50px';
        ringRef.current.style.height = '50px';
        ringRef.current.style.borderColor = 'rgba(6, 182, 212, 0.8)';
      }
    };

    const handleMouseLeave = () => {
      if (cursorRef.current && ringRef.current) {
        cursorRef.current.style.width = '8px';
        cursorRef.current.style.height = '8px';
        ringRef.current.style.width = '32px';
        ringRef.current.style.height = '32px';
        ringRef.current.style.borderColor = 'rgba(6, 182, 212, 0.5)';
      }
    };

    const attachListeners = () => {
      const targets = document.querySelectorAll('a, button, [role="button"], input, textarea, .interactive');
      targets.forEach((el) => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
      return targets;
    };

    const targets = attachListeners();

    return () => {
      document.body.classList.remove('has-custom-cursor');
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animId);
      targets.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div id="cursor" ref={cursorRef} aria-hidden="true" />
      <div id="cursor-ring" ref={ringRef} aria-hidden="true" />
      <div id="cursor-glow" ref={glowRef} aria-hidden="true" />
    </>
  );
}

