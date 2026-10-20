'use client';

import { portfolioData } from '@/data/portfolio';

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-24 px-6 md:px-16 lg:px-24 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="font-mono text-xs tracking-widest uppercase text-[#06B6D4] mb-2">
        03 — Skills
      </div>
      <h2 className="font-sora text-2xl sm:text-4xl font-bold mb-12">
        <span className="grad">Tech Stack</span>
      </h2>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((item, idx) => {
          // If it's a stat card
          if (item.stat) {
            return (
              <div
                key={idx}
                className="bento-card justify-center items-center text-center p-8 bg-[#0F172A]/80 border border-[rgba(99,102,241,0.15)] rounded-2xl hover:border-[#06B6D4]/40 transition-all"
              >
                <div className="font-sora font-extrabold text-4xl sm:text-5xl text-[#06B6D4] mb-2">
                  {item.stat}
                </div>
                <div className="font-mono text-xs uppercase tracking-wider text-[#38BDF8] mb-1">
                  {item.category}
                </div>
                <div className="text-xs text-slate-400">
                  {item.desc}
                </div>
              </div>
            );
          }

          // If it's a wide AI / ML card
          if (item.wide) {
            return (
              <div
                key={idx}
                className="bento-card md:col-span-2 lg:col-span-3 p-8 bg-[#0F172A]/80 border border-[rgba(99,102,241,0.15)] rounded-2xl hover:border-[#06B6D4]/40 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{item.icon}</span>
                  <div>
                    <div className="font-mono text-xs uppercase text-[#06B6D4] tracking-wider">
                      {item.category}
                    </div>
                    <h3 className="font-sora text-xl font-bold text-white">
                      {item.title}
                    </h3>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {item.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 bg-[#111827] text-slate-300 rounded-lg text-xs font-mono border border-slate-800 hover:border-[#06B6D4]/30 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          }

          // Standard category card
          return (
            <div
              key={idx}
              className="bento-card p-6 bg-[#0F172A]/80 border border-[rgba(99,102,241,0.15)] rounded-2xl hover:border-[#06B6D4]/40 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <div className="font-mono text-[11px] uppercase text-[#06B6D4] tracking-wider">
                    {item.category}
                  </div>
                  <h3 className="font-sora text-lg font-bold text-white">
                    {item.title}
                  </h3>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                {item.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 bg-[#111827] text-slate-300 rounded-md text-xs font-mono border border-slate-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

