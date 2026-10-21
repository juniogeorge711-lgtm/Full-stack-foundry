import React, { useState } from 'react';
import { ExternalLink, Github, ArrowUpRight, X } from 'lucide-react';
import { otherProjects, ProjectItem } from '../data';
import { TechIcon } from './TechIcon';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = ['All', 'Backend', 'Cloud', 'Systems'];

  const filtered = activeCategory === 'All'
    ? otherProjects
    : otherProjects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#3E2723]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-2">
            <p className="text-xs font-mono uppercase tracking-widest text-[#1E88E5]">
              Featured Engineering Portfolio
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#F5EFEA] light:text-[#271C19]">
              Distributed Systems & Cloud Work
            </h2>
            <p className="text-base text-[#D7CCC8] light:text-[#4E342E]">
              Selected infrastructure projects, consensus engines, and cloud cost management platforms.
            </p>
          </div>

          {/* Interactive filter tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl glass-panel border border-[#6D4C41]/30 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-[#C62828] text-white shadow-sm font-semibold'
                    : 'text-[#D7CCC8] light:text-[#4E342E] hover:text-[#F5EFEA]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map((project) => (
            <div
              key={project.id}
              className="group rounded-3xl glass-panel glass-panel-hover border border-[#6D4C41]/35 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Image Container with hover zoom */}
                <div className="relative aspect-[16/10] overflow-hidden bg-black/40 border-b border-[#6D4C41]/25">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  {/* Category tag overlay */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-lg bg-[#0B0B0F]/80 backdrop-blur-md border border-[#6D4C41]/40 text-xs font-mono text-[#1E88E5]">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 space-y-4">
                  <h3 className="text-xl font-bold text-[#F5EFEA] light:text-[#271C19] group-hover:text-[#1E88E5] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#D7CCC8] light:text-[#4E342E] leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Impact Metric Strip */}
                  <div className="p-3 rounded-xl bg-black/30 border border-[#6D4C41]/20 text-xs font-mono text-[#10B981] flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                    <span>{project.metrics}</span>
                  </div>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-[#3E2723]/30 border border-[#6D4C41]/25 text-[#D7CCC8]"
                      >
                        <TechIcon name={t} className="w-3.5 h-3.5 text-[#1E88E5]" size={13} />
                        <span>{t}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Links Bar */}
              <div className="px-6 sm:px-8 py-4 bg-black/20 border-t border-[#6D4C41]/20 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-semibold text-[#C62828] hover:text-[#D32F2F] flex items-center gap-1 group/btn"
                >
                  <span>Architecture Deep Dive</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>

                <div className="flex items-center gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${project.title} source on GitHub`}
                    className="p-2 rounded-lg glass-panel text-[#8D6E63] hover:text-[#F5EFEA] hover:border-[#1E88E5]/50 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${project.title} live preview`}
                    className="p-2 rounded-lg glass-panel text-[#8D6E63] hover:text-[#C62828] hover:border-[#C62828]/50 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Deep Dive Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-2xl rounded-3xl glass-panel border border-[#6D4C41]/50 p-6 sm:p-8 bg-[#0B0B0F] light:bg-[#FAF6F0] shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-[#6D4C41]/30">
              <span className="text-xs font-mono text-[#1E88E5] uppercase">{selectedProject.category} Infrastructure</span>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="w-8 h-8 rounded-lg glass-panel flex items-center justify-center text-[#8D6E63] hover:text-[#C62828]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-6 space-y-4">
              <h3 className="text-2xl font-bold text-[#F5EFEA] light:text-[#271C19]">
                {selectedProject.title}
              </h3>
              <p className="text-sm font-medium text-[#1E88E5]">
                {selectedProject.tagline}
              </p>
              <p className="text-sm text-[#D7CCC8] light:text-[#4E342E] leading-relaxed">
                {selectedProject.description}
              </p>

              <div className="p-4 rounded-xl bg-black/40 border border-[#6D4C41]/30">
                <span className="text-xs font-mono text-[#8D6E63] uppercase">Production Benchmark:</span>
                <p className="text-sm font-mono font-bold text-[#10B981] mt-1">
                  {selectedProject.metrics}
                </p>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono text-[#8D6E63] uppercase">Technologies Utilized:</span>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-md text-xs bg-[#3E2723]/40 border border-[#6D4C41]/30 text-[#F5EFEA]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#6D4C41]/30 flex justify-end gap-3">
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 text-xs font-semibold glass-panel rounded-xl hover:text-white"
              >
                GitHub Repository
              </a>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2 text-xs font-semibold text-white bg-[#C62828] hover:bg-[#D32F2F] rounded-xl"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
