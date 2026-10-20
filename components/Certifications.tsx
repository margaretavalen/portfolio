'use client';

import { portfolioData } from '@/data/portfolio';

export default function Certifications() {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="py-24 px-6 md:px-16 lg:px-24 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="font-mono text-xs tracking-widest uppercase text-[#06B6D4] mb-2">
        05 — Certifications
      </div>
      <h2 className="font-sora text-2xl sm:text-4xl font-bold mb-12">
        <span className="grad">Training & Certifications</span>
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, idx) => (
          <div
            key={idx}
            className="bg-[#0F172A]/70 border border-[rgba(99,102,241,0.15)] rounded-2xl p-6 flex flex-col justify-between hover:border-[#06B6D4]/40 hover:shadow-[0_10px_30px_rgba(6,182,212,0.1)] transition-all group"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#1E293B] border border-slate-700/60 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                {cert.icon}
              </div>
              <h3 className="font-sora text-base font-bold text-white mb-2 leading-snug">
                {cert.name}
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                {cert.issuer}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-800">
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-[#06B6D4] hover:underline inline-flex items-center gap-1"
              >
                View Certificate ↗
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

