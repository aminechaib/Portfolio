import React, { useState } from 'react';
import { Download, FileText, Briefcase, GraduationCap, Award, CheckCircle, ExternalLink } from 'lucide-react';
import { RESUME_EXPERIENCES, RESUME_EDUCATION, SKILL_CATEGORIES, LANGUAGES, PERSONAL_INFO } from '../data/portfolioData';
import { SupportedLanguage } from '../types/portfolio';
import { TRANSLATIONS } from '../data/translations';

interface ResumeSectionProps {
  currentLang: SupportedLanguage;
  onOpenPdfModal: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({
  currentLang,
  onOpenPdfModal,
}) => {
  const [activeTab, setActiveTab] = useState<'experience' | 'education' | 'skills' | 'languages'>('experience');
  const t = TRANSLATIONS[currentLang];

  return (
    <section id="resume" className="py-16 md:py-24 border-t border-slate-800/80 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with PDF Download Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-teal-400 mb-2">
              {t.resume.kicker}
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-display text-balance">
              {t.resume.title}
            </h2>
            <p className="text-slate-400 mt-2 max-w-2xl text-sm sm:text-base">
              {t.resume.subtitle}
            </p>
          </div>

          {/* Quick PDF CV Actions */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={onOpenPdfModal}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium text-slate-200 bg-slate-900 border border-slate-700/80 hover:border-teal-500/50 hover:bg-slate-800/80 rounded-lg transition-all"
            >
              <FileText className="w-4 h-4 text-teal-400" />
              <span>{t.resume.viewPdfModal}</span>
            </button>

            <a
              href={PERSONAL_INFO.cvPdfUrl}
              download="CV_Amine_Chaib.pdf"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-lg shadow-sm shadow-teal-500/20 transition-all"
            >
              <Download className="w-4 h-4" />
              <span>{t.resume.downloadPdf}</span>
            </a>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 border-b border-slate-800 mb-8 overflow-x-auto scrollbar-none pb-2">
          <button
            onClick={() => setActiveTab('experience')}
            className={`flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
              activeTab === 'experience'
                ? 'bg-teal-500/15 text-teal-300 border border-teal-500/30'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
            }`}
          >
            <Briefcase className="w-4 h-4" />
            <span>{t.resume.tabs.experience}</span>
          </button>

          <button
            onClick={() => setActiveTab('education')}
            className={`flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
              activeTab === 'education'
                ? 'bg-teal-500/15 text-teal-300 border border-teal-500/30'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>{t.resume.tabs.education}</span>
          </button>

          <button
            onClick={() => setActiveTab('skills')}
            className={`flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
              activeTab === 'skills'
                ? 'bg-teal-500/15 text-teal-300 border border-teal-500/30'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>{t.resume.tabs.skills}</span>
          </button>

          <button
            onClick={() => setActiveTab('languages')}
            className={`flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
              activeTab === 'languages'
                ? 'bg-teal-500/15 text-teal-300 border border-teal-500/30'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
            }`}
          >
            <span>{t.resume.tabs.languages}</span>
          </button>
        </div>

        {/* Tab Content: Experience */}
        {activeTab === 'experience' && (
          <div className="space-y-8">
            {RESUME_EXPERIENCES.map((exp) => (
              <div
                key={exp.id}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8 space-y-6"
              >
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-5">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono text-teal-400 mb-1">
                      <span>{exp.company}</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-slate-400">{exp.location}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                      {exp.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-xs font-mono text-slate-300 bg-slate-800/90 border border-slate-700 px-3 py-1 rounded-md">
                      {exp.period}
                    </span>
                    {exp.badge && (
                      <span className="text-xs font-mono text-teal-300 bg-teal-950/80 border border-teal-500/40 px-2.5 py-1 rounded-md">
                        {exp.badge}
                      </span>
                    )}
                  </div>
                </div>

                {/* Summary */}
                <p className="text-sm text-slate-300 leading-relaxed">
                  {exp.summary}
                </p>

                {/* 3 Core Pillars */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-2">
                  {exp.pillars.map((pillar, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl border border-slate-800/90 bg-slate-950/60 p-5 space-y-3"
                    >
                      <h4 className="text-sm font-bold text-teal-400 font-display flex items-center gap-2">
                        <span className="font-mono text-xs text-slate-500">0{idx + 1}.</span>
                        <span>{pillar.title}</span>
                      </h4>
                      <ul className="space-y-2.5 text-xs text-slate-300">
                        {pillar.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 leading-relaxed">
                            <span className="text-teal-400 mt-0.5">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

              </div>
            ))}
          </div>
        )}

        {/* Tab Content: Education */}
        {activeTab === 'education' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {RESUME_EDUCATION.map((edu, idx) => (
              <div
                key={edu.id}
                className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 space-y-3 hover:border-slate-700 transition-colors"
              >
                <div className="flex items-center justify-between gap-2 text-xs font-mono text-slate-400">
                  <span className="text-teal-400 font-semibold">0{idx + 1}</span>
                  <span>{edu.period}</span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white font-display">
                  {edu.degree}
                </h3>

                <p className="text-xs sm:text-sm font-medium text-slate-300">
                  {edu.institution}
                </p>

                {edu.details && (
                  <p className="text-xs text-slate-400 pt-1 leading-relaxed border-t border-slate-800/60">
                    {edu.details}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Tab Content: Skills */}
        {activeTab === 'skills' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SKILL_CATEGORIES.map((category) => (
              <div
                key={category.title}
                className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 space-y-4"
              >
                <h3 className="text-base font-bold text-white font-display flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-teal-400" />
                  <span>{category.title}</span>
                </h3>

                <div className="space-y-3.5">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-slate-200">{skill.name}</span>
                        <span className="text-slate-400 font-mono text-[11px]">{skill.level}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-teal-400 rounded-full transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                      {skill.note && (
                        <p className="text-[11px] text-slate-400">{skill.note}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab Content: Languages */}
        {activeTab === 'languages' && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {LANGUAGES.map((lang) => (
              <div
                key={lang.code}
                className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 text-center space-y-2 hover:border-teal-500/30 transition-colors"
              >
                <div className="text-4xl mb-2">{lang.flag}</div>
                <h3 className="text-lg font-bold text-white font-display">{lang.name}</h3>
                <p className="text-xs text-teal-400 font-mono">{lang.level}</p>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
