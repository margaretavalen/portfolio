'use client';

import { useEffect, useRef, useState } from 'react';
import { portfolioData } from '@/data/portfolio';

export default function Experience() {
  const { experience } = portfolioData;
  const sectionRef = useRef<HTMLElement>(null);
  const [fillHeight, setFillHeight] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const progress = Math.max(
        0,
        Math.min(1, (-rect.top + window.innerHeight * 0.4) / rect.height)
      );
      setFillHeight(progress * 100);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-24 px-6 md:px-16 lg:px-24 max-w-6xl mx-auto"
    >
      {/* Section Header */}
      <div className="font-mono text-xs tracking-widest uppercase text-[#06B6D4] mb-2">
        04 — Experience
      </div>
      <h2 className="font-sora text-2xl sm:text-4xl font-bold mb-12">
        <span className="grad">Career Path</span>
      </h2>

      {/* Timeline */}
      <div className="relative pl-6 sm:pl-10 space-y-12">
        {/* Background Track Line */}
        <div className="absolute left-2.5 sm:left-4 top-2 bottom-2 w-0.5 bg-slate-800" />
        {/* Glowing Filled Progress Line */}
        <div
          className="absolute left-2.5 sm:left-4 top-2 w-0.5 bg-gradient-to-b from-[#06B6D4] via-[#3B82F6] to-[#8B5CF6] transition-all duration-150"
          style={{ height: `${fillHeight}%` }}
        />

        {experience.map((item, idx) => (
          <div key={idx} className="relative group">
            {/* Dot on the timeline */}
            <div className="absolute -left-[27px] sm:-left-[35px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#050816] border-2 border-[#06B6D4] group-hover:scale-125 group-hover:shadow-[0_0_12px_rgba(6,182,212,0.8)] transition-all" />

            <div className="bg-[#0F172A]/70 border border-[rgba(99,102,241,0.15)] rounded-2xl p-6 hover:border-[#06B6D4]/40 transition-colors">
              <div className="font-mono text-xs text-[#06B6D4] uppercase tracking-wider mb-1">
                {item.period}
              </div>
              <h3 className="font-sora text-lg sm:text-xl font-bold text-white mb-1">
                {item.role}
              </h3>
              <div className="text-xs sm:text-sm text-slate-400 font-medium mb-4">
                {item.company}
              </div>
              <ul className="text-xs sm:text-sm text-slate-300 space-y-2 list-disc list-inside">
                {item.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
              {item.link && (
                <div className="mt-4 pt-3 border-t border-slate-800">
                  <a
                    href={item.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs text-[#06B6D4] hover:underline font-mono"
                  >
                    {item.link.text}
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

