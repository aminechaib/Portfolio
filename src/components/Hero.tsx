import React from 'react';
import { Download, ArrowRight, Database, Smartphone, Code, Layers, CheckCircle2, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { SupportedLanguage } from '../types/portfolio';
import { TRANSLATIONS } from '../data/translations';

interface HeroProps {
  currentLang: SupportedLanguage;
  onOpenPdfModal: () => void;
  onOpenManageModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  currentLang,
  onOpenPdfModal,
  onOpenManageModal,
}) => {
  const t = TRANSLATIONS[currentLang];

  return (
    <section id="about" className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-radial-glow pointer-events-none opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 2-Column Split Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            
            {/* Status Kicker (unboxed text metadata, no pill badge sandwich) */}
            <div className="flex items-center gap-2 text-xs font-mono text-teal-400">
              <span className="inline-block w-2 h-2 rounded-full bg-teal-400"></span>
              <span className="uppercase tracking-wider font-semibold">{t.hero.badge}</span>
              <span className="text-slate-600" aria-hidden="true">·</span>
              <span className="text-slate-400 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                Souidania, Algiers
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-display text-balance">
                Amine CHAÏB
              </h1>
              <p className="text-xl sm:text-2xl font-medium text-teal-400 font-display">
                {currentLang === 'fr'
                  ? PERSONAL_INFO.roleFr
                  : currentLang === 'ar'
                  ? PERSONAL_INFO.roleAr
                  : PERSONAL_INFO.title}
              </p>
            </div>

            {/* Lead Bio Description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl text-pretty">
              {PERSONAL_INFO.about[currentLang]}
            </p>

            {/* Interactive Primary & Secondary CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3 text-sm font-semibold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-lg shadow-lg shadow-teal-500/20 hover:shadow-teal-500/30 transition-all active:scale-98"
              >
                <span>{t.hero.viewProjects}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenPdfModal}
                className="inline-flex items-center gap-2.5 px-6 py-3 text-sm font-medium text-slate-200 bg-slate-900 border border-slate-700/80 hover:border-teal-500/50 hover:bg-slate-800/80 hover:text-white rounded-lg transition-all"
              >
                <Download className="w-4 h-4 text-teal-400" />
                <span>{t.hero.downloadResume}</span>
              </button>

              <button
                onClick={onOpenManageModal}
                className="inline-flex items-center gap-2 px-4 py-3 text-xs font-mono text-slate-400 hover:text-teal-300 bg-slate-900/50 border border-slate-800 rounded-lg transition-colors hover:border-slate-700"
                title="Add or update links to your apps and repositories"
              >
                <Code className="w-3.5 h-3.5 text-teal-400" />
                <span>+ {t.projects.manageButton}</span>
              </button>
            </div>

            {/* Quick trust cues as clean unboxed text */}
            <div className="pt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-400" />
                SQL & Relational DBs
              </span>
              <span className="text-slate-700" aria-hidden="true">·</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-400" />
                Flutter Mobile (iOS & Android)
              </span>
              <span className="text-slate-700" aria-hidden="true">·</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-400" />
                Python & Predictive Analytics
              </span>
              <span className="text-slate-700" aria-hidden="true">·</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-400" />
                ALGEX & Customs Procurement
              </span>
            </div>

          </div>

          {/* Right Column: Visual Anchor Featuring Custom AC Logo */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Decorative ambient glow backdrop */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-teal-500/20 to-cyan-500/10 rounded-2xl blur-xl opacity-75" />
              
              <div className="relative rounded-2xl border border-slate-800 bg-slate-900/90 p-6 md:p-8 backdrop-blur-xl shadow-2xl flex flex-col items-center text-center space-y-6">
                
                {/* Logo Frame */}
                <div className="relative group">
                  <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border-2 border-teal-500/30 p-4 shadow-xl shadow-teal-500/10 flex items-center justify-center transition-transform group-hover:scale-102">
                    <img
                      src={PERSONAL_INFO.logoUrl}
                      alt="Amine Chaïb AC Monogram Logo"
                      className="w-full h-full object-contain filter drop-shadow-md"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  {/* Subtle corner badge */}
                  <div className="absolute -bottom-2 -right-2 bg-slate-950 border border-teal-500/40 px-2.5 py-1 rounded-md text-[11px] font-mono font-medium text-teal-300 shadow">
                    AC · Dev
                  </div>
                </div>

                {/* Identity Summary Card */}
                <div className="space-y-1 w-full">
                  <h3 className="text-lg font-bold text-white font-display">Amine CHAÏB</h3>
                  <p className="text-xs text-slate-400 font-mono">SARL PIÈCES DE RECHANGE ORIGINALES</p>
                  <p className="text-xs text-teal-400/90">Database R&D · Supply Chain · Web & Mobile</p>
                </div>

                {/* Quick Capability Matrix */}
                <div className="grid grid-cols-2 gap-2.5 w-full pt-2">
                  <div className="p-2.5 rounded-lg bg-slate-950/70 border border-slate-800 text-left">
                    <div className="flex items-center gap-1.5 text-teal-400 text-xs font-semibold">
                      <Database className="w-3.5 h-3.5" />
                      <span>Data & SQL</span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-0.5">50k+ catalog & indexing</p>
                  </div>

                  <div className="p-2.5 rounded-lg bg-slate-950/70 border border-slate-800 text-left">
                    <div className="flex items-center gap-1.5 text-teal-400 text-xs font-semibold">
                      <Smartphone className="w-3.5 h-3.5" />
                      <span>Flutter App</span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-0.5">Warehouse barcode scanner</p>
                  </div>

                  <div className="p-2.5 rounded-lg bg-slate-950/70 border border-slate-800 text-left">
                    <div className="flex items-center gap-1.5 text-teal-400 text-xs font-semibold">
                      <Layers className="w-3.5 h-3.5" />
                      <span>Analytics</span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-0.5">Python demand forecasting</p>
                  </div>

                  <div className="p-2.5 rounded-lg bg-slate-950/70 border border-slate-800 text-left">
                    <div className="flex items-center gap-1.5 text-teal-400 text-xs font-semibold">
                      <Code className="w-3.5 h-3.5" />
                      <span>Web Dev</span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-0.5">React & Laravel APIs</p>
                  </div>
                </div>

                {/* Direct quick action */}
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="w-full text-center py-2 text-xs font-mono text-slate-400 hover:text-teal-300 border-t border-slate-800 pt-3 transition-colors"
                >
                  {PERSONAL_INFO.email}
                </a>

              </div>
            </div>
          </div>

        </div>

        {/* Full-Width Quantitative KPI Strip Below Hero Split */}
        <div className="mt-16 pt-10 border-t border-slate-800/80">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            
            <div className="border-l-2 border-teal-500/40 pl-4">
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight tabular-nums">
                50,000+
              </div>
              <div className="text-xs sm:text-sm text-slate-400 mt-1">
                {t.hero.metrics.dbRecords}
              </div>
            </div>

            <div className="border-l-2 border-teal-500/40 pl-4">
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight tabular-nums">
                99.9%
              </div>
              <div className="text-xs sm:text-sm text-slate-400 mt-1">
                {t.hero.metrics.accuracy}
              </div>
            </div>

            <div className="border-l-2 border-teal-500/40 pl-4">
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight tabular-nums">
                12+
              </div>
              <div className="text-xs sm:text-sm text-slate-400 mt-1">
                {t.hero.metrics.modules}
              </div>
            </div>

            <div className="border-l-2 border-teal-500/40 pl-4">
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight tabular-nums">
                3
              </div>
              <div className="text-xs sm:text-sm text-slate-400 mt-1">
                {t.hero.metrics.languages} (FR · AR · EN)
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
