'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { Project } from '@/data/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#050816]/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div className="relative bg-[#0F172A] border border-[rgba(99,102,241,0.3)] rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 z-10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] text-slate-200">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-2 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-colors"
          aria-label="Close dialog"
        >
          ✕
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-4 mb-6 pr-8">
          <div className="w-12 h-12 rounded-xl bg-[#1E293B] border border-slate-700/60 flex items-center justify-center text-2xl flex-shrink-0">
            {project.icon || '🚀'}
          </div>
          <div>
            <div className="text-xs font-mono uppercase text-[#06B6D4] tracking-wider mb-1">
              {project.categoryLabel}
            </div>
            <h3 id="modal-title" className="font-sora text-xl sm:text-2xl font-bold text-white">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Media Preview Showcase */}
        <div className="relative w-full h-56 sm:h-72 rounded-xl overflow-hidden border border-slate-700/60 mb-6 bg-[#0A0F1E]">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center text-slate-500">
              <span className="text-3xl mb-2">🖼️</span>
              <span className="text-xs">Preview</span>
            </div>
          )}
          {project.highlight && (
            <div className="absolute bottom-3 left-3 right-3 sm:right-auto bg-[#050816]/90 backdrop-blur-md px-3.5 py-2 rounded-lg border border-[#06B6D4]/30 text-xs text-[#06B6D4] font-medium flex items-center gap-2">
              <span>⚡</span> {project.highlight}
            </div>
          )}
        </div>

        {/* Detail Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-[#111827] p-4 rounded-xl border border-slate-800">
            <div className="text-[11px] font-mono text-[#06B6D4] uppercase tracking-wider mb-2">
              01 — Problem
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {project.description}
            </p>
          </div>
          <div className="bg-[#111827] p-4 rounded-xl border border-slate-800">
            <div className="text-[11px] font-mono text-[#06B6D4] uppercase tracking-wider mb-2">
              02 — My Contribution
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {project.contribution}
            </p>
          </div>
          <div className="bg-[#111827] p-4 rounded-xl border border-slate-800">
            <div className="text-[11px] font-mono text-[#06B6D4] uppercase tracking-wider mb-2">
              03 — Result
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {project.detailedResult}
            </p>
          </div>
        </div>

        {/* Extra info: Tech Stack & Key Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="bg-[#111827] p-4 rounded-xl border border-slate-800">
            <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-3">
              Tech Stack
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 bg-slate-800/80 text-slate-300 rounded-md text-[11px] font-mono border border-slate-700/50"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-[#111827] p-4 rounded-xl border border-slate-800">
            <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-3">
              Key Features
            </div>
            <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
              {project.results.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow text-xs"
            >
              Live Demo ↗
            </a>
          )}
          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost-glow text-xs"
            >
              Source Code ↗
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}

