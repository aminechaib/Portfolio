import React, { useState, useMemo } from 'react';
import { ExternalLink, Github, QrCode, Info, PlusCircle, Search, Sparkles } from 'lucide-react';
import { Project, ProjectCategory, SupportedLanguage } from '../types/portfolio';
import { TRANSLATIONS } from '../data/translations';

interface ProjectsSectionProps {
  projects: Project[];
  currentLang: SupportedLanguage;
  onSelectProject: (project: Project) => void;
  onOpenManageModal: () => void;
  onOpenQrModal: (url: string, title: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects,
  currentLang,
  onSelectProject,
  onOpenManageModal,
  onOpenQrModal,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const t = TRANSLATIONS[currentLang];

  const categories: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: t.projects.all },
    { id: 'web', label: t.projects.web },
    { id: 'mobile', label: t.projects.mobile },
    { id: 'ai-data', label: t.projects.aiData },
    { id: 'database', label: t.projects.database },
  ];

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === 'all' || project.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.summary.toLowerCase().includes(q) ||
        project.tags.some((tag) => tag.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [projects, selectedCategory, searchQuery]);

  return (
    <section id="projects" className="py-16 md:py-24 border-t border-slate-800/80 bg-slate-950/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-teal-400 mb-2">
              {t.projects.kicker}
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-display text-balance">
              {t.projects.title}
            </h2>
            <p className="text-slate-400 mt-2 max-w-2xl text-sm sm:text-base">
              {t.projects.subtitle}
            </p>
          </div>

          {/* Manage Links Button */}
          <div className="shrink-0 flex items-center gap-3">
            <button
              onClick={onOpenManageModal}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-teal-300 bg-teal-950/60 border border-teal-500/40 hover:bg-teal-900/60 hover:border-teal-400 rounded-lg transition-all shadow-sm"
            >
              <PlusCircle className="w-4 h-4 text-teal-400" />
              <span>{t.projects.manageButton}</span>
            </button>
          </div>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8">
          {/* Functional Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900/90 border border-slate-800 rounded-xl overflow-x-auto scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                  selectedCategory === cat.id
                    ? 'bg-teal-500/20 text-teal-300 border border-teal-500/30 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative max-w-xs w-full">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by keyword (e.g. Flutter, SQL)..."
              className="w-full pl-9 pr-3 py-2 text-xs bg-slate-900/80 border border-slate-800 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-teal-500 transition-colors"
            />
          </div>
        </div>

        {/* Projects Grid / Dynamic Bento Layout */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 border border-dashed border-slate-800 rounded-2xl bg-slate-900/20">
            <p className="text-slate-400 text-sm">{t.projects.noProjectsFound}</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-3 text-xs text-teal-400 hover:underline"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project, index) => {
              const isLarge = index === 0;

              return (
                <div
                  key={project.id}
                  className={`group rounded-2xl border border-slate-800 bg-slate-900/70 hover:border-teal-500/40 hover:bg-slate-900/90 transition-all duration-300 flex flex-col overflow-hidden shadow-lg hover:shadow-xl hover:shadow-teal-500/5 ${
                    isLarge ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'
                  }`}
                >
                  {/* Thumbnail Container */}
                  <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        // Fallback container if local image fails
                        e.currentTarget.style.display = 'none';
                        const parent = e.currentTarget.parentElement;
                        if (parent) {
                          parent.classList.add('bg-gradient-to-br', 'from-slate-900', 'to-slate-950', 'flex', 'items-center', 'justify-center');
                          parent.innerHTML = `<div class="p-6 text-center"><div class="w-12 h-12 mx-auto rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 mb-2"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg></div><p class="text-sm font-semibold text-white">${project.title}</p></div>`;
                        }
                      }}
                    />
                    
                    {/* Dark gradient overlay for typography readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80" />

                    {/* Top right quick actions overlay */}
                    <div className="absolute top-3 right-3 flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity">
                      {project.liveUrl && (
                        <button
                          onClick={() => onOpenQrModal(project.liveUrl!, project.title)}
                          className="p-1.5 rounded-md bg-slate-950/80 backdrop-blur-md text-slate-300 hover:text-teal-400 border border-slate-700/60 shadow-sm"
                          title="Generate QR code to test on mobile"
                        >
                          <QrCode className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>

                    {/* Bottom overlay: Metrics pill if available */}
                    {project.metrics && project.metrics.length > 0 && (
                      <div className="absolute bottom-3 left-3 right-3 flex items-center gap-3 text-xs text-slate-300 backdrop-blur-md bg-slate-950/70 p-2 rounded-lg border border-slate-800">
                        {project.metrics.slice(0, 2).map((m, i) => (
                          <div key={i} className="flex items-center gap-1 font-mono text-[11px]">
                            <span className="text-teal-400 font-semibold tabular-nums">{m.value}</span>
                            <span className="text-slate-400 text-[10px]">{m.label}</span>
                            {i === 0 && <span className="text-slate-600 ml-2" aria-hidden="true">·</span>}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Content Container */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      {/* Clean unboxed category & date metadata (NO PILLS) */}
                      <div className="flex items-center gap-2 text-xs text-slate-400">
                        <span className="text-teal-400 font-medium">{project.categoryLabel}</span>
                        <span aria-hidden="true">·</span>
                        <span>{project.date}</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold text-white group-hover:text-teal-300 transition-colors font-display">
                        {project.title}
                      </h3>

                      {/* Summary */}
                      <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 leading-relaxed">
                        {project.summary}
                      </p>

                      {/* Clean tags list */}
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 pt-1 text-[11px] font-mono text-slate-400">
                        {project.tags.map((tag, i) => (
                          <span key={tag} className="flex items-center gap-1">
                            <span className="text-slate-500">#</span>
                            <span>{tag}</span>
                            {i < project.tags.length - 1 && <span className="text-slate-700">·</span>}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
                      <button
                        onClick={() => onSelectProject(project)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-200 hover:text-teal-400 transition-colors"
                      >
                        <Info className="w-3.5 h-3.5" />
                        <span>{t.projects.viewDetails}</span>
                      </button>

                      <div className="flex items-center gap-2">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700/80 border border-slate-700/60 transition-colors"
                            title="View source code on GitHub"
                          >
                            <Github className="w-3.5 h-3.5" />
                          </a>
                        )}

                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-lg shadow-sm transition-all"
                          >
                            <span>{t.projects.liveDemo}</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
