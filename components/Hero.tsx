'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
      className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden pt-28 pb-16 px-6"
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

      {/* Main Hero Split Container */}
      <div className="relative z-10 max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Headline, Bio & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0F172A]/90 border border-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.15)] mb-6 text-xs font-mono text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{portfolioData.bioTag}</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Semarang, ID</span>
          </div>

          {/* Subtitle tag */}
          <div className="font-mono text-xs sm:text-sm uppercase tracking-widest text-[#06B6D4] mb-2 flex items-center gap-2">
            <span className="opacity-40">//</span>
            <span>Data Scientist & Software Engineer</span>
            <span className="opacity-40">//</span>
          </div>

          {/* Main Name Heading */}
          <h1 className="font-sora font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white mb-4 leading-[1.12]">
            Margareta <br className="hidden sm:inline" />
            <span className="grad">Valencia</span>
          </h1>

          {/* Dynamic Typing Role */}
          <div className="font-mono text-sm sm:text-lg text-slate-300 h-8 mb-5 flex items-center justify-center lg:justify-start">
            <span className="text-slate-400 mr-2">I build</span>
            <span className="text-[#06B6D4] font-semibold bg-[#06B6D4]/10 px-2.5 py-0.5 rounded border border-[#06B6D4]/30 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              {typedText}
            </span>
            <span className="typed-cursor">|</span>
          </div>

          {/* Bio Summary */}
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 max-w-xl">
            {portfolioData.summary}
          </p>

          {/* Core Competency Chips */}
          <div className="flex flex-wrap items-center gap-2 mb-8 justify-center lg:justify-start">
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-[#0F172A] text-cyan-300 border border-cyan-500/20 flex items-center gap-1.5 shadow-sm">
              <span>🧠</span> Machine Learning
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-[#0F172A] text-blue-300 border border-blue-500/20 flex items-center gap-1.5 shadow-sm">
              <span>⚛️</span> Full-Stack Next.js
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-[#0F172A] text-purple-300 border border-purple-500/20 flex items-center gap-1.5 shadow-sm">
              <span>🐍</span> Python & SQL
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-[#0F172A] text-pink-300 border border-pink-500/20 flex items-center gap-1.5 shadow-sm">
              <span>📊</span> Data Analytics
            </span>
          </div>

          {/* Action Button Row */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 mb-7">
            <Link href="#projects" className="btn-glow inline-flex items-center gap-2">
              <span>Explore Projects</span>
              <span className="text-base">↓</span>
            </Link>
            <a
              href={portfolioData.contacts.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost-glow inline-flex items-center gap-2"
            >
              <span>Download CV</span>
              <span className="text-xs">↗</span>
            </a>
            <Link href="#contact" className="btn-ghost-glow inline-flex items-center gap-2">
              <span>Get In Touch</span>
              <span className="text-xs">✉</span>
            </Link>
          </div>

          {/* Quick Social & Contact row */}
          <div className="flex items-center gap-4 text-xs font-mono text-slate-400 justify-center lg:justify-start">
            <span className="text-slate-500">Quick Links:</span>
            <a
              href={portfolioData.contacts.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#06B6D4] transition-colors flex items-center gap-1"
            >
              GitHub ↗
            </a>
            <span className="text-slate-700">•</span>
            <a
              href={portfolioData.contacts.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#06B6D4] transition-colors flex items-center gap-1"
            >
              LinkedIn ↗
            </a>
            <span className="text-slate-700">•</span>
            <a
              href={`mailto:${portfolioData.contacts.email}`}
              className="hover:text-[#06B6D4] transition-colors flex items-center gap-1"
            >
              Email ✉
            </a>
          </div>
        </div>

        {/* Right Column: Visual Showcase Profile Card */}
        <div className="lg:col-span-5 flex justify-center items-center relative mt-4 lg:mt-0">
          <div className="relative group/card">
            {/* Multi-color ambient glow halo */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-cyan-500/30 via-blue-500/20 to-purple-500/30 rounded-3xl blur-2xl opacity-60 group-hover/card:opacity-100 transition duration-700 pointer-events-none" />

            {/* Main Portrait Card */}
            <div className="relative w-64 sm:w-72 aspect-[3/4] rounded-2xl overflow-hidden border border-cyan-500/30 bg-[#0F172A] shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
              <Image
                src="/foto.png"
                alt="Margareta Valencia"
                fill
                priority
                className="object-cover object-top scale-100 group-hover/card:scale-105 transition-transform duration-700"
                sizes="(max-width: 640px) 256px, 288px"
              />

              {/* Bottom gradient fade */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/95 via-transparent to-transparent opacity-90" />

              {/* Bottom Card Identity Pill */}
              <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-[#0F172A]/90 backdrop-blur-md border border-slate-700/60 flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-white">Margareta Valencia</div>
                  <div className="text-[10px] text-cyan-400 font-mono">Informatics & ML Engineer</div>
                </div>
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
              </div>
            </div>

            {/* Floating Badge: Top Right */}
            <div className="absolute -top-4 -right-4 sm:-right-6 bg-[#0F172A]/95 border border-cyan-500/40 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-[0_10px_25px_rgba(0,0,0,0.6)] flex items-center gap-2 animate-float-subtle">
              <span className="text-base">🎯</span>
              <div>
                <div className="text-[10px] text-slate-400 font-mono uppercase">ML Accuracy</div>
                <div className="text-xs font-bold text-cyan-300">94% Score</div>
              </div>
            </div>

            {/* Floating Badge: Bottom Left */}
            <div className="absolute -bottom-4 -left-4 sm:-left-6 bg-[#0F172A]/95 border border-indigo-500/40 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-[0_10px_25px_rgba(0,0,0,0.6)] flex items-center gap-2 animate-float-delayed">
              <span className="text-base">🚀</span>
              <div>
                <div className="text-[10px] text-slate-400 font-mono uppercase">Featured Work</div>
                <div className="text-xs font-bold text-indigo-300">10+ Projects</div>
              </div>
            </div>

            {/* Floating Tech Chips */}
            <div className="absolute top-1/3 -left-6 sm:-left-10 bg-[#111827]/95 border border-slate-700/70 px-2.5 py-1 rounded-lg text-[11px] font-mono text-slate-300 shadow-xl flex items-center gap-1.5 hidden sm:flex">
              <span>🐍</span> Python & ML
            </div>

            <div className="absolute top-1/2 -right-6 sm:-right-10 bg-[#111827]/95 border border-slate-700/70 px-2.5 py-1 rounded-lg text-[11px] font-mono text-slate-300 shadow-xl flex items-center gap-1.5 hidden sm:flex">
              <span>⚛️</span> React & Next.js
            </div>
          </div>
        </div>
      </div>

      {/* Metrics Bar at Bottom of Hero */}
      <div className="relative z-10 w-full max-w-5xl mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-4">
        {portfolioData.stats.map((stat, i) => (
          <div
            key={i}
            className="bg-[#0F172A]/70 backdrop-blur-md border border-[rgba(99,102,241,0.15)] hover:border-[#06B6D4]/40 rounded-xl p-4 text-center transition-all duration-300 hover:-translate-y-1 group"
          >
            <div className="text-2xl sm:text-3xl font-extrabold font-sora bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-1 group-hover:scale-105 transition-transform">
              {stat.num}
            </div>
            <div className="text-xs text-slate-400 font-mono">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="relative z-10 mt-10 flex flex-col items-center gap-2">
        <Link href="#about" className="flex flex-col items-center gap-2 group">
          <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 group-hover:text-cyan-400 transition-colors">
            Scroll to explore
          </span>
          <div className="w-5 h-8 border-2 border-slate-700 group-hover:border-cyan-400 rounded-full flex justify-center p-1 transition-colors">
            <div className="w-1 h-2 bg-cyan-400 rounded-full animate-bounce" />
          </div>
        </Link>
      </div>
    </section>
  );
}
