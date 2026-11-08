import React, { useState } from 'react';
import { X, Plus, Trash2, Edit2, RotateCcw, Save, Check, ExternalLink } from 'lucide-react';
import { Project, ProjectCategory, SupportedLanguage } from '../types/portfolio';
import { TRANSLATIONS } from '../data/translations';

interface ManageLinksModalProps {
  projects: Project[];
  isOpen: boolean;
  currentLang: SupportedLanguage;
  onClose: () => void;
  onSaveProjects: (updated: Project[]) => void;
  onResetDefaults: () => void;
}

export const ManageLinksModal: React.FC<ManageLinksModalProps> = ({
  projects,
  isOpen,
  currentLang,
  onClose,
  onSaveProjects,
  onResetDefaults,
}) => {
  const t = TRANSLATIONS[currentLang];
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [localProjects, setLocalProjects] = useState<Project[]>(projects);
  const [savedSuccess, setSavedSuccess] = useState(false);

  // Form state for creating/editing
  const [formData, setFormData] = useState<{
    title: string;
    category: ProjectCategory;
    summary: string;
    liveUrl: string;
    githubUrl: string;
    tags: string;
  }>({
    title: '',
    category: 'web',
    summary: '',
    liveUrl: '',
    githubUrl: '',
    tags: '',
  });

  if (!isOpen) return null;

  const handleStartEdit = (proj: Project) => {
    setEditingId(proj.id);
    setIsAddingNew(false);
    setFormData({
      title: proj.title,
      category: proj.category,
      summary: proj.summary,
      liveUrl: proj.liveUrl || '',
      githubUrl: proj.githubUrl || '',
      tags: proj.tags.join(', '),
    });
  };

  const handleStartAdd = () => {
    setIsAddingNew(true);
    setEditingId(null);
    setFormData({
      title: '',
      category: 'web',
      summary: '',
      liveUrl: 'https://',
      githubUrl: 'https://github.com/amine-chaib/',
      tags: 'React, Tailwind, API',
    });
  };

  const handleSaveForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title.trim()) return;

    const tagsArray = formData.tags
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);

    let updatedList: Project[];

    if (isAddingNew) {
      const newProj: Project = {
        id: `custom-proj-${Date.now()}`,
        title: formData.title.trim(),
        category: formData.category,
        categoryLabel:
          formData.category === 'mobile'
            ? 'Mobile App (Flutter)'
            : formData.category === 'ai-data'
            ? 'AI & Data Analytics'
            : formData.category === 'database'
            ? 'Databases & Logistics'
            : 'Web & SaaS',
        summary: formData.summary.trim() || 'Custom project application.',
        description: formData.summary.trim() || 'Custom project application.',
        imageUrl: '/projects/auto-dispatch.png',
        tags: tagsArray.length > 0 ? tagsArray : ['React', 'Web'],
        liveUrl: formData.liveUrl.trim() || undefined,
        githubUrl: formData.githubUrl.trim() || undefined,
        keyFeatures: [
          'Responsive modern user interface',
          'Production-tested architecture',
          'Direct live link integration'
        ],
        date: '2024'
      };
      updatedList = [newProj, ...localProjects];
    } else if (editingId) {
      updatedList = localProjects.map((p) => {
        if (p.id === editingId) {
          return {
            ...p,
            title: formData.title.trim(),
            category: formData.category,
            summary: formData.summary.trim(),
            liveUrl: formData.liveUrl.trim() || undefined,
            githubUrl: formData.githubUrl.trim() || undefined,
            tags: tagsArray,
          };
        }
        return p;
      });
    } else {
      return;
    }

    setLocalProjects(updatedList);
    onSaveProjects(updatedList);
    setEditingId(null);
    setIsAddingNew(false);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  const handleDelete = (id: string) => {
    const updated = localProjects.filter((p) => p.id !== id);
    setLocalProjects(updated);
    onSaveProjects(updated);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl z-10 flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/90">
          <div>
            <h2 className="text-lg font-bold text-white font-display">
              {t.modals.manageProjectsTitle}
            </h2>
            <p className="text-xs text-slate-400">
              Easily update live URLs, GitHub repositories, or add new apps to your portfolio.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          
          {/* Top action toolbar */}
          <div className="flex items-center justify-between gap-4">
            <button
              onClick={handleStartAdd}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-lg shadow-sm transition-all"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>{t.modals.addProject}</span>
            </button>

            <button
              onClick={() => {
                if (confirm('Reset all projects and links back to original default settings?')) {
                  onResetDefaults();
                  onClose();
                }
              }}
              className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-red-400 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{t.modals.resetDefaults}</span>
            </button>
          </div>

          {/* Toast feedback */}
          {savedSuccess && (
            <div className="p-3 rounded-lg bg-teal-950/80 border border-teal-500/40 text-xs text-teal-300 flex items-center gap-2 animate-in fade-in">
              <Check className="w-4 h-4 text-teal-400" />
              <span>Changes saved successfully to your local storage!</span>
            </div>
          )}

          {/* Add / Edit Form */}
          {(isAddingNew || editingId) && (
            <form
              onSubmit={handleSaveForm}
              className="p-5 rounded-xl border border-teal-500/40 bg-slate-950/80 space-y-4 animate-in slide-in-from-top-2"
            >
              <h3 className="text-sm font-bold text-teal-300 font-display">
                {isAddingNew ? t.modals.addProject : t.modals.editProject}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-mono text-slate-400">
                    {t.modals.projectTitle} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="e.g. My Next.js Dashboard"
                    className="w-full px-3 py-2 text-xs bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-teal-400"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono text-slate-400">
                    {t.modals.category}
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) =>
                      setFormData({ ...formData, category: e.target.value as ProjectCategory })
                    }
                    className="w-full px-3 py-2 text-xs bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-teal-400"
                  >
                    <option value="web">Web & SaaS</option>
                    <option value="mobile">Mobile (Flutter)</option>
                    <option value="ai-data">AI & Data Analytics</option>
                    <option value="database">Databases & Logistics</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono text-slate-400">
                    {t.modals.liveUrl}
                  </label>
                  <input
                    type="url"
                    value={formData.liveUrl}
                    onChange={(e) => setFormData({ ...formData, liveUrl: e.target.value })}
                    placeholder="https://my-app.com"
                    className="w-full px-3 py-2 text-xs bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-teal-400"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono text-slate-400">
                    {t.modals.githubUrl}
                  </label>
                  <input
                    type="url"
                    value={formData.githubUrl}
                    onChange={(e) => setFormData({ ...formData, githubUrl: e.target.value })}
                    placeholder="https://github.com/amine-chaib/my-repo"
                    className="w-full px-3 py-2 text-xs bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-teal-400"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono text-slate-400">
                  {t.modals.description}
                </label>
                <textarea
                  rows={2}
                  value={formData.summary}
                  onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                  placeholder="Key summary of this application and what problem it solves..."
                  className="w-full px-3 py-2 text-xs bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-teal-400"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono text-slate-400">
                  {t.modals.tagsComma}
                </label>
                <input
                  type="text"
                  value={formData.tags}
                  onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                  placeholder="React, TypeScript, SQL, Tailwind"
                  className="w-full px-3 py-2 text-xs bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-teal-400"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setIsAddingNew(false);
                    setEditingId(null);
                  }}
                  className="px-3.5 py-1.5 text-xs text-slate-400 hover:text-white"
                >
                  {t.modals.cancel}
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-lg"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>{t.modals.save}</span>
                </button>
              </div>
            </form>
          )}

          {/* List of current projects */}
          <div className="space-y-3">
            {localProjects.map((proj) => (
              <div
                key={proj.id}
                className="p-4 rounded-xl border border-slate-800 bg-slate-950/40 hover:border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-colors"
              >
                <div className="space-y-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-teal-400">
                      [{proj.category}]
                    </span>
                    <h4 className="text-sm font-semibold text-white truncate font-display">
                      {proj.title}
                    </h4>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-400 font-mono">
                    {proj.liveUrl ? (
                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-teal-400 hover:underline flex items-center gap-1 truncate max-w-xs"
                      >
                        <ExternalLink className="w-3 h-3" />
                        <span className="truncate">{proj.liveUrl}</span>
                      </a>
                    ) : (
                      <span className="text-slate-600">No live URL</span>
                    )}
                    {proj.githubUrl && (
                      <span className="text-slate-500 truncate max-w-xs">
                        GitHub: {proj.githubUrl}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => handleStartEdit(proj)}
                    className="p-2 text-slate-400 hover:text-teal-400 hover:bg-slate-800 rounded-lg transition-colors"
                    title="Edit project"
                  >
                    <Edit2 className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => handleDelete(proj.id)}
                    className="p-2 text-slate-400 hover:text-red-400 hover:bg-slate-800 rounded-lg transition-colors"
                    title="Delete project"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-slate-800 bg-slate-900 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white"
          >
            {t.modals.close}
          </button>
        </div>

      </div>
    </div>
  );
};
