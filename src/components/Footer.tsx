import React from 'react';
import { ArrowUp, Mail, Phone, MapPin, Github } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { SupportedLanguage } from '../types/portfolio';
import { TRANSLATIONS } from '../data/translations';

interface FooterProps {
  currentLang: SupportedLanguage;
}

export const Footer: React.FC<FooterProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 py-12 pb-24 md:pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand lockup */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg overflow-hidden bg-slate-900 border border-teal-500/30 p-1 flex items-center justify-center">
              <img
                src={PERSONAL_INFO.logoUrl}
                alt="AC Logo"
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <span className="text-sm font-bold text-white font-display">
                Amine CHAÏB
              </span>
              <p className="text-[11px] text-slate-500 font-mono">
                Full-Stack Developer · Data Analyst · Souidania, Algiers
              </p>
            </div>
          </div>

          {/* Copyright & Meta */}
          <div className="text-center md:text-right space-y-1">
            <p className="text-slate-400">
              © {new Date().getFullYear()} Amine Chaïb. {t.footer.rights}
            </p>
            <p className="text-[11px] text-slate-500 font-mono">
              {t.footer.craftedWith}
            </p>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-teal-400 hover:border-teal-500/40 transition-all shadow-sm"
            aria-label="Scroll back to top"
            title="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>

        </div>

      </div>
    </footer>
  );
};
