'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { portfolioData } from '@/data/portfolio';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [typedText, setTypedText] = useState('');

  // Particle Canvas network
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = (canvas.width = canvas.offsetWidth);
    let h = (canvas.height = canvas.offsetHeight);

    const onResize = () => {
      if (!canvas) return;
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', onResize);

    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      opacity: number;
    }[] = [];

    const count = 55;
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * (w || 1000),
        y: Math.random() * (h || 800),
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.4 + 0.15,
      });
    }

    let animId: number;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(6,182,212,${p.opacity})`;
        ctx.fill();
      }

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 115) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(6,182,212,${0.08 * (1 - dist / 115)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  // Typewriter effect
  useEffect(() => {
    const phrases = portfolioData.typingPhrases;
    let pi = 0;
    let ci = 0;
    let deleting = false;
    let timer: NodeJS.Timeout;

    const type = () => {
      const currentPhrase = phrases[pi];
      if (!deleting) {
        setTypedText(currentPhrase.slice(0, ci + 1));
        ci++;
        if (ci === currentPhrase.length) {
          timer = setTimeout(() => {
            deleting = true;
            type();
          }, 2000);
          return;
        }
      } else {
        setTypedText(currentPhrase.slice(0, ci - 1));
        ci--;
        if (ci === 0) {
          deleting = false;
          pi = (pi + 1) % phrases.length;
        }
      }
      timer = setTimeout(type, deleting ? 45 : 85);
    };

    timer = setTimeout(type, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen relative flex flex-col items-center justify-center text-center overflow-hidden pt-28 pb-16 px-6"
    >
      {/* Background layers */}
      <div className="hero-bg" />
      <div className="hero-noise" />
      <div className="hero-grid" />
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* Floating ambient glow orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      {/* Floating orbital tech badges (hidden on very small screens) */}
      <div className="hidden lg:block orbit-container">
        <div className="orbit-icon">🧠</div>
        <div className="orbit-icon">⚛️</div>
        <div className="orbit-icon">🐍</div>
        <div className="orbit-icon">🔥</div>
        <div className="orbit-icon">📊</div>
        <div className="orbit-icon">🌐</div>
      </div>

      {/* Main hero content */}
      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
        <div className="hero-tag inline-flex items-center gap-2 font-mono text-[0.72rem] tracking-widest uppercase text-[#06B6D4] mb-7">
          <span className="opacity-40">//</span> {portfolioData.bioTag} <span className="opacity-40">//</span>
        </div>

        <h1 className="font-sora font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight text-slate-100 mb-4 leading-tight">
          {portfolioData.name}
        </h1>

        <p className="font-mono text-sm sm:text-lg text-[#06B6D4] h-7 mb-6 flex items-center justify-center">
          <span>{typedText}</span>
          <span className="typed-cursor">|</span>
        </p>

        <p className="text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed mb-9">
          {portfolioData.summary}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href="#projects" className="btn-glow">
            View Projects
          </Link>
          <a
            href={portfolioData.contacts.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost-glow"
          >
            Download CV
          </a>
          <Link href="#contact" className="btn-ghost-glow">
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  );
}

