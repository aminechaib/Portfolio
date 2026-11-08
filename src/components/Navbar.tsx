import React, { useState } from 'react';
import { Menu, X, FileText, Globe, ArrowUpRight, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { SupportedLanguage } from '../types/portfolio';
import { TRANSLATIONS } from '../data/translations';

interface NavbarProps {
  currentLang: SupportedLanguage;
  onLanguageChange: (lang: SupportedLanguage) => void;
  onOpenPdfModal: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onLanguageChange,
  onOpenPdfModal,
  onOpenContact,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[currentLang];

  const navLinks = [
    { name: t.nav.about, href: '#about' },
    { name: t.nav.projects, href: '#projects' },
    { name: t.nav.resume, href: '#resume' },
    { name: t.nav.skills, href: '#skills' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-md transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 gap-8">
          {/* Zone 1: Brand Wordmark with User's Logo */}
          <a
            href="#about"
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 rounded-lg shrink-0"
          >
            <div className="w-10 h-10 rounded-xl overflow-hidden bg-slate-900 border border-teal-500/30 flex items-center justify-center p-1 group-hover:border-teal-400 transition-colors shadow-sm shadow-teal-500/10">
              <img
                src={PERSONAL_INFO.logoUrl}
                alt="Amine Chaïb Logo"
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-white group-hover:text-teal-400 transition-colors whitespace-nowrap font-display">
                Amine Chaïb
              </span>
              <span className="text-[11px] text-teal-400/90 font-mono tracking-wider">
                Full-Stack · Data
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links (single line, no pills) */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-teal-400 transition-colors whitespace-nowrap shrink-0 py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action + Language Selector */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Language Selector */}
            <div className="relative flex items-center bg-slate-900 border border-slate-800 rounded-lg p-0.5 text-xs">
              <Globe className="w-3.5 h-3.5 ml-2 text-slate-400" />
              {(['en', 'fr', 'ar'] as SupportedLanguage[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => onLanguageChange(lang)}
                  className={`px-2 py-1 rounded font-medium uppercase transition-all ${
                    currentLang === lang
                      ? 'bg-teal-500/20 text-teal-300 font-semibold border border-teal-500/30'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                  title={`Switch to ${lang.toUpperCase()}`}
                >
                  {lang}
                </button>
              ))}
            </div>

            {/* Quick CV PDF Button (Desktop) */}
            <button
              onClick={onOpenPdfModal}
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 bg-slate-900 border border-slate-700/80 rounded-lg hover:border-teal-500/50 hover:text-white transition-all whitespace-nowrap shrink-0"
              title="View Amine's CV in PDF format"
            >
              <FileText className="w-3.5 h-3.5 text-teal-400" />
              <span>{t.nav.downloadCv}</span>
            </button>

            {/* Primary Action Button */}
            <button
              onClick={onOpenContact}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-lg transition-all shadow-md shadow-teal-500/20 active:scale-95 whitespace-nowrap shrink-0"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{t.hero.contactMe}</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-400 hover:text-white hover:bg-slate-800/80 rounded-lg transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-slate-950/98 px-4 pt-3 pb-6 space-y-3 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium text-slate-200 hover:text-teal-400 hover:bg-slate-900/60 rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPdfModal();
              }}
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-sm font-medium text-slate-200 bg-slate-900 border border-slate-700/80 rounded-lg hover:border-teal-500/50"
            >
              <FileText className="w-4 h-4 text-teal-400" />
              <span>{t.resume.downloadPdf}</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-sm font-semibold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-lg shadow-md shadow-teal-500/20"
            >
              <Mail className="w-4 h-4" />
              <span>{t.hero.contactMe}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
