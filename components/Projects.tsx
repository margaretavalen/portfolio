'use client';

import { useState } from 'react';
import Image from 'next/image';
import { portfolioData, Project } from '@/data/portfolio';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [filter, setFilter] = useState<'all' | 'web' | 'ml' | 'data'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [openCaseStudyId, setOpenCaseStudyId] = useState<string | null>(null);

  const projectCounts = {
    all: portfolioData.projects.length,
    web: portfolioData.projects.filter((p) => p.category === 'web').length,
    ml: portfolioData.projects.filter((p) => p.category === 'ml').length,
    data: portfolioData.projects.filter((p) => p.category === 'data').length,
  };

  const filterButtons = [
    { label: 'All Projects', value: 'all' as const, count: projectCounts.all },
    { label: 'Web Development', value: 'web' as const, count: projectCounts.web },
    { label: 'Data Science', value: 'ml' as const, count: projectCounts.ml },
    { label: 'Data Analysis', value: 'data' as const, count: projectCounts.data },
  ];

  const filteredProjects = portfolioData.projects.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  const toggleCaseStudy = (id: string) => {
    setOpenCaseStudyId(openCaseStudyId === id ? null : id);
  };

  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="font-mono text-xs tracking-widest uppercase text-[#06B6D4] mb-2 flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#06B6D4] animate-pulse" />
            02 — Projects
          </div>
          <h2 className="font-sora text-2xl sm:text-4xl font-bold">
            <span className="grad">Featured Work</span>
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-400 max-w-md font-mono">
          Showcasing real-world systems across machine learning, full-stack platforms, and data analytics.
        </p>
      </div>

      {/* Filter Tabs */}
      <div
        className="flex flex-wrap items-center gap-2 sm:gap-3 mb-12"
        role="group"
        aria-label="Filter projects by category"
      >
        {filterButtons.map((btn) => {
          const isActive = filter === btn.value;
          return (
            <button
              key={btn.value}
              type="button"
              onClick={() => setFilter(btn.value)}
              className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-2 ${
                isActive
                  ? 'bg-gradient-to-r from-[#06B6D4] to-[#3B82F6] text-white shadow-[0_0_20px_rgba(6,182,212,0.35)] font-semibold scale-105'
                  : 'bg-[#0F172A] text-slate-400 border border-[rgba(99,102,241,0.15)] hover:border-[#06B6D4]/40 hover:text-slate-200'
              }`}
            >
              <span>{btn.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  isActive ? 'bg-white/20 text-white' : 'bg-slate-800 text-slate-400'
                }`}
              >
                {btn.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Projects Grid: 2-Columns on md and up */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
        {filteredProjects.map((project) => {
          const isCaseOpen = openCaseStudyId === project.id;

          return (
            <div
              key={project.id}
              className="group bg-[#0F172A]/85 hover:bg-[#0F172A] border border-[rgba(99,102,241,0.18)] hover:border-[#06B6D4]/50 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col hover:shadow-[0_12px_35px_rgba(6,182,212,0.15)] hover:-translate-y-1"
            >
              {/* Card Image Banner */}
              <div
                className="relative w-full h-52 sm:h-60 bg-[#0A0F1E] overflow-hidden cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-4xl text-slate-600">
                    {project.icon || '🖼️'}
                  </div>
                )}

                {/* Gradient Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-black/30 pointer-events-none" />

                {/* Top Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <div className="flex items-center gap-1.5 bg-[#050816]/85 backdrop-blur-md px-2.5 py-1 rounded-full border border-slate-700/60 font-mono text-[11px]">
                    <span className="text-[#06B6D4] font-semibold">{project.number}</span>
                    <span className="text-slate-500">•</span>
                    <span className="text-slate-300 uppercase tracking-wider text-[10px]">
                      {project.categoryLabel.split('·')[0].trim()}
                    </span>
                  </div>

                  <span className="bg-[#050816]/85 backdrop-blur-md px-2.5 py-1 rounded-full border border-slate-700/60 font-mono text-[10px] text-slate-300 tracking-wider">
                    {project.date}
                  </span>
                </div>

                {/* Bottom Overlay Hint on Hover */}
                <div className="absolute bottom-2 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="inline-flex items-center gap-1 bg-[#06B6D4]/90 text-[#050816] font-mono text-[10px] font-bold px-2 py-0.5 rounded shadow">
                    Quick View ↗
                  </span>
                </div>

                {/* Highlight Pill if present */}
                {project.highlight && (
                  <div className="absolute bottom-2.5 left-3 max-w-[80%] bg-[#050816]/90 backdrop-blur-md px-2.5 py-1 rounded-lg border border-[#06B6D4]/30 text-[11px] text-[#06B6D4] font-medium truncate">
                    ⚡ {project.highlight}
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex flex-col flex-1">
                {/* Title */}
                <h3
                  onClick={() => setSelectedProject(project)}
                  className="font-sora text-lg sm:text-xl font-bold text-white group-hover:text-[#06B6D4] cursor-pointer transition-colors mb-1.5 leading-snug line-clamp-1"
                >
                  {project.title}
                </h3>

                {/* Subtitle / Category */}
                <div className="text-[11px] font-mono uppercase text-[#06B6D4] tracking-wider mb-3">
                  {project.categoryLabel}
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Key results bullet list */}
                <ul className="text-xs text-slate-400 space-y-1 mb-4 list-disc list-inside">
                  {project.results.slice(0, 2).map((r, i) => (
                    <li key={i} className="line-clamp-1">
                      {r}
                    </li>
                  ))}
                </ul>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-4 mt-auto">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 bg-[#111827] text-slate-300 rounded text-[11px] font-mono border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Row */}
                <div className="pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => toggleCaseStudy(project.id)}
                      className="inline-flex items-center gap-1 px-2.5 py-1.5 bg-[#1E293B] hover:bg-[#334155] text-slate-200 text-xs font-medium rounded-lg border border-slate-700 transition-colors"
                    >
                      <span>{isCaseOpen ? '−' : '+'}</span>
                      <span>Case Study</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1 px-2.5 py-1.5 bg-[#06B6D4]/15 hover:bg-[#06B6D4]/25 text-[#06B6D4] text-xs font-medium rounded-lg border border-[#06B6D4]/30 transition-colors"
                    >
                      <span>Details ↗</span>
                    </button>
                  </div>

                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-[#06B6D4] hover:text-cyan-300 transition-colors font-medium ml-auto"
                    >
                      <span>Live Preview</span>
                      <span>↗</span>
                    </a>
                  ) : project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-[#06B6D4] hover:text-cyan-300 transition-colors font-medium ml-auto"
                    >
                      <span>Source Code</span>
                      <span>↗</span>
                    </a>
                  ) : null}
                </div>

                {/* Expandable Case Study Drawer */}
                <div className={`project-inline-detail ${isCaseOpen ? 'open' : ''}`}>
                  <div className="project-inline-inner">
                    <div className="mt-4 pt-3 border-t border-slate-800/70 space-y-2.5 text-xs">
                      <div className="bg-[#111827] p-3 rounded-lg border border-slate-800/80">
                        <div className="text-[10px] font-mono text-[#06B6D4] uppercase tracking-wider mb-1">
                          Role & Contribution
                        </div>
                        <p className="text-slate-300 text-xs leading-relaxed">
                          {project.contribution}
                        </p>
                      </div>
                      <div className="bg-[#111827] p-3 rounded-lg border border-slate-800/80">
                        <div className="text-[10px] font-mono text-[#06B6D4] uppercase tracking-wider mb-1">
                          Impact & Outcome
                        </div>
                        <p className="text-slate-300 text-xs leading-relaxed">
                          {project.detailedResult}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
