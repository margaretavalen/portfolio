'use client';

import Image from 'next/image';
import { portfolioData } from '@/data/portfolio';

export default function About() {
  const { terminalData, aboutParagraphs, stats } = portfolioData;

  return (
    <section id="about" className="py-24 px-6 md:px-16 lg:px-24 max-w-6xl mx-auto relative">
      {/* Section Header */}
      <div className="font-mono text-xs tracking-widest uppercase text-[#06B6D4] mb-2">
        01 — About
      </div>
      <h2 className="font-sora text-2xl sm:text-4xl font-bold mb-12">
        <span className="grad">Who I Am</span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Terminal Window (Left) */}
        <div className="lg:col-span-5 terminal font-mono text-xs leading-relaxed">
          <div className="terminal-bar">
            <div className="dot dot-r" />
            <div className="dot dot-y" />
            <div className="dot dot-g" />
            <span className="ml-2 text-slate-400 text-[11px]">developer.json</span>
          </div>
          <div className="p-5 text-slate-300 space-y-1 overflow-x-auto">
            <div>&#123;</div>
            <div className="pl-4">
              <span className="t-key">&quot;name&quot;</span>: <span className="t-str">&quot;{terminalData.name}&quot;</span>,
            </div>
            <div className="pl-4">
              <span className="t-key">&quot;role&quot;</span>: <span className="t-str">&quot;{terminalData.role}&quot;</span>,
            </div>
            <div className="pl-4">
              <span className="t-key">&quot;based_in&quot;</span>: <span className="t-str">&quot;{terminalData.based_in}&quot;</span>,
            </div>
            <div className="pl-4">
              <span className="t-key">&quot;education&quot;</span>: <span className="t-str">&quot;{terminalData.education}&quot;</span>,
            </div>
            <div className="pl-4">
              <span className="t-key">&quot;focus&quot;</span>: [
            </div>
            {terminalData.focus.map((f, i) => (
              <div key={f} className="pl-8">
                <span className="t-str">&quot;{f}&quot;</span>
                {i < terminalData.focus.length - 1 ? ',' : ''}
              </div>
            ))}
            <div className="pl-4">],</div>
            <div className="pl-4">
              <span className="t-key">&quot;status&quot;</span>: <span className="t-str">&quot;{terminalData.status}&quot;</span>,
            </div>
            <div className="pl-4">
              <span className="t-key">&quot;available&quot;</span>: <span className="t-bool">{String(terminalData.available)}</span>
            </div>
            <div>&#125;</div>
            <div className="pt-2 t-comment">
              // Let&apos;s build something great. <span className="typed-cursor">_</span>
            </div>
          </div>
        </div>

        {/* Profile Card & Bio (Right) */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            {/* Photo Card with status indicator */}
            <div className="relative flex-shrink-0 w-36 h-44 rounded-xl overflow-hidden border border-[#06B6D4]/30 shadow-lg bg-gradient-to-br from-[#0F172A] to-[#1E293B]">
              <Image
                src="/foto.png"
                alt="Valencia"
                fill
                className="object-cover"
                sizes="144px"
              />
              <div className="absolute bottom-2 left-2 right-2 bg-[#050816]/90 backdrop-blur-md rounded-lg p-2 border border-slate-700/60 flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                <div className="text-[10px] leading-tight font-medium text-slate-200">
                  <div>Valencia</div>
                  <div className="text-[9px] text-slate-400">Open to Work 🇮🇩</div>
                </div>
              </div>
            </div>

            {/* Paragraphs */}
            <div className="flex-1 space-y-4 text-sm text-slate-300 leading-relaxed">
              <p>
                I&apos;m an <strong className="text-white font-semibold">Informatics graduate</strong> passionate about Data Analytics and Web Development, with experience in developing data-driven applications, managing databases, and building responsive web platforms. My work includes machine learning projects, interactive systems, and full-stack web development using Python, PHP, SQL, and Laravel.
              </p>
              <p>
                With hands-on experience at <strong className="text-white font-semibold">Diskominfo</strong> and experience leading academic projects, I combine analytical thinking, technical skills, and a problem-solving mindset to create impactful digital solutions.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-[#0F172A]/70 border border-[rgba(99,102,241,0.15)] rounded-xl p-4 text-center hover:border-[#06B6D4]/40 transition-colors"
              >
                <div className="font-sora font-extrabold text-2xl text-[#06B6D4] mb-1">
                  {stat.num}
                </div>
                <div className="text-xs text-slate-400 leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

