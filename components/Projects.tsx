'use client';

import { useState } from 'react';
import Image from 'next/image';
import { portfolioData, Project } from '@/data/portfolio';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [filter, setFilter] = useState<'all' | 'web' | 'ml' | 'data'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [openCaseStudyId, setOpenCaseStudyId] = useState<string | null>(null);

  const filterButtons = [
    { label: 'All Projects', value: 'all' as const },
    { label: 'Web Development', value: 'web' as const },
    { label: 'Data Scientist', value: 'ml' as const },
    { label: 'Data Analysis', value: 'data' as const },
  ];

  const filteredProjects = portfolioData.projects.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  const toggleCaseStudy = (id: string) => {
    setOpenCaseStudyId(openCaseStudyId === id ? null : id);
  };

  return (
    <section id="projects" className="py-24 px-6 md:px-16 lg:px-24 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="font-mono text-xs tracking-widest uppercase text-[#06B6D4] mb-2">
        02 — Projects
      </div>
      <h2 className="font-sora text-2xl sm:text-4xl font-bold mb-8">
        <span className="grad">Featured Work</span>
      </h2>

      {/* Filter Tabs */}
      <div
        className="flex flex-wrap items-center gap-2 mb-12"
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
              className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                isActive
                  ? 'bg-gradient-to-r from-[#06B6D4] to-[#3B82F6] text-white shadow-[0_0_20px_rgba(6,182,212,0.35)] font-semibold'
                  : 'bg-[#0F172A] text-slate-400 border border-[rgba(99,102,241,0.15)] hover:border-[#06B6D4]/40 hover:text-slate-200'
              }`}
            >
              {btn.label}
            </button>
          );
        })}
      </div>

      {/* Projects List */}
      <div className="space-y-12">
        {filteredProjects.map((project) => {
          const isCaseOpen = openCaseStudyId === project.id;

          return (
            <div
              key={project.id}
              className="bg-[#0F172A]/80 border border-[rgba(99,102,241,0.15)] rounded-2xl p-6 sm:p-8 hover:border-[#06B6D4]/40 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              {/* Left Column: Project Details */}
              <div className="lg:col-span-7 flex flex-col">
                <div className="flex items-center gap-3 mb-2 font-mono text-xs">
                  <span className="text-[#06B6D4] font-semibold tracking-wider">
                    {project.number}
                  </span>
                  <span className="text-slate-500">•</span>
                  <span className="text-slate-400 uppercase tracking-wider">
                    {project.date}
                  </span>
                </div>

                <h3
                  onClick={() => setSelectedProject(project)}
                  className="font-sora text-xl sm:text-2xl font-bold text-white hover:text-[#06B6D4] cursor-pointer transition-colors mb-2"
                >
                  {project.title}
                </h3>

                <div className="text-xs font-mono uppercase text-[#06B6D4] tracking-wider mb-4">
                  {project.categoryLabel}
                </div>

                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  {project.description}
                </p>

                <ul className="text-xs text-slate-400 space-y-1.5 mb-5 list-disc list-inside">
                  {project.results.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-[#111827] text-slate-300 rounded-md text-[11px] font-mono border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 bg-[#06B6D4]/10 text-[#06B6D4] rounded text-[10px] font-mono border border-[#06B6D4]/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions & Case Study Toggle */}
                <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-slate-800/80">
                  <button
                    type="button"
                    onClick={() => toggleCaseStudy(project.id)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#1E293B] hover:bg-[#334155] text-slate-200 text-xs font-medium rounded-lg border border-slate-700 transition-colors"
                  >
                    <span>{isCaseOpen ? '−' : '+'}</span> Case Study
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#06B6D4]/15 hover:bg-[#06B6D4]/25 text-[#06B6D4] text-xs font-medium rounded-lg border border-[#06B6D4]/30 transition-colors"
                  >
                    Details Modal ↗
                  </button>

                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#06B6D4] hover:underline ml-auto"
                    >
                      Live Preview ↗
                    </a>
                  ) : project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#06B6D4] hover:underline ml-auto"
                    >
                      Source Code ↗
                    </a>
                  ) : null}
                </div>

                {/* Expandable Case Study Drawer */}
                <div className={`project-inline-detail ${isCaseOpen ? 'open' : ''}`}>
                  <div className="project-inline-inner">
                    <div className="mt-4 pt-4 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div className="bg-[#111827] p-3 rounded-lg border border-slate-800/80">
                        <div className="text-[10px] font-mono text-[#06B6D4] uppercase tracking-wider mb-1">
                          My Contribution
                        </div>
                        <p className="text-slate-300">{project.contribution}</p>
                      </div>
                      <div className="bg-[#111827] p-3 rounded-lg border border-slate-800/80">
                        <div className="text-[10px] font-mono text-[#06B6D4] uppercase tracking-wider mb-1">
                          Result
                        </div>
                        <p className="text-slate-300">{project.detailedResult}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Visual Preview */}
              <div
                className="lg:col-span-5 relative w-full h-56 sm:h-72 rounded-xl overflow-hidden border border-slate-700/60 bg-[#0A0F1E] group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 400px"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-4xl text-slate-600">
                    {project.icon || '🖼️'}
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-xs text-[#06B6D4] font-mono tracking-wider">
                    Click to view details →
                  </span>
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

