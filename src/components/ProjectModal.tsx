import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle, Cpu, Calendar, Tag, QrCode } from 'lucide-react';
import { Project, SupportedLanguage } from '../types/portfolio';
import { TRANSLATIONS } from '../data/translations';

interface ProjectModalProps {
  project: Project | null;
  currentLang: SupportedLanguage;
  onClose: () => void;
  onOpenQr: (url: string, title: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  currentLang,
  onClose,
  onOpenQr,
}) => {
  const t = TRANSLATIONS[currentLang];

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="fixed inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border border-slate-700/80 bg-slate-900 shadow-2xl z-10 flex flex-col focus:outline-none">
        
        {/* Modal Top Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/95 backdrop-blur-md">
          <div className="flex items-center gap-2 text-xs font-mono text-teal-400">
            <span>{project.categoryLabel}</span>
            <span aria-hidden="true">·</span>
            <span className="text-slate-400">{project.date}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Hero Preview Image */}
        <div className="relative aspect-video w-full bg-slate-950 overflow-hidden">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover object-top"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-70" />
        </div>

        {/* Body Content */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Title & Metrics Bar */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
              {project.title}
            </h2>

            {project.metrics && project.metrics.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="space-y-0.5">
                    <span className="text-lg font-bold text-teal-400 font-mono tabular-nums">
                      {m.value}
                    </span>
                    <p className="text-xs text-slate-400">{m.label}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Description */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 font-mono">
              Overview
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Deliverables & Features */}
          {project.keyFeatures && project.keyFeatures.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-teal-400 font-mono flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>{t.modals.keyFeatures}</span>
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.keyFeatures.map((feat, i) => (
                  <li
                    key={i}
                    className="p-3 rounded-lg bg-slate-950/40 border border-slate-800/80 text-xs text-slate-300 flex items-start gap-2 leading-relaxed"
                  >
                    <span className="text-teal-400 font-bold mt-0.5">•</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Architecture */}
          {project.architecture && (
            <div className="space-y-2 p-4 rounded-xl bg-slate-950/60 border border-slate-800">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono flex items-center gap-2">
                <Cpu className="w-4 h-4 text-teal-400" />
                <span>{t.modals.architecture}</span>
              </h3>
              <p className="text-xs text-slate-300 font-mono leading-relaxed">
                {project.architecture}
              </p>
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono text-slate-300 bg-slate-800/80 border border-slate-700/60 px-2.5 py-1 rounded-md"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Action Links Bar */}
          <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-lg shadow-sm transition-all"
                >
                  <span>{t.projects.liveDemo}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>{t.projects.githubCode}</span>
                </a>
              )}

              {project.liveUrl && (
                <button
                  onClick={() => onOpenQr(project.liveUrl!, project.title)}
                  className="inline-flex items-center gap-1.5 px-3 py-2.5 text-xs font-mono text-slate-300 hover:text-white bg-slate-900 border border-slate-700/80 rounded-lg transition-colors"
                  title="Generate QR code to test on mobile device"
                >
                  <QrCode className="w-4 h-4 text-teal-400" />
                  <span className="hidden sm:inline">Mobile QR</span>
                </button>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors"
            >
              {t.modals.close}
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
