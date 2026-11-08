import React, { useEffect } from 'react';
import { X, Download, ExternalLink, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { SupportedLanguage } from '../types/portfolio';
import { TRANSLATIONS } from '../data/translations';

interface PdfModalProps {
  isOpen: boolean;
  currentLang: SupportedLanguage;
  onClose: () => void;
}

export const PdfModal: React.FC<PdfModalProps> = ({ isOpen, currentLang, onClose }) => {
  const t = TRANSLATIONS[currentLang];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      <div className="relative w-full max-w-5xl h-[92vh] rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl z-10 flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/95">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-sm sm:text-base font-bold text-white font-display">
                Curriculum Vitae — Amine CHAÏB
              </h2>
              <p className="text-[11px] text-slate-400 font-mono">
                Official PDF Document (2026-10-18)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={PERSONAL_INFO.cvPdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors hidden sm:inline-flex"
              title="Open PDF in new browser tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.cvPdfUrl}
              download="CV_Amine_Chaib.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-lg transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{t.resume.downloadPdf}</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              aria-label="Close PDF viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* PDF Viewer Body */}
        <div className="flex-1 w-full bg-slate-950 relative">
          <object
            data={PERSONAL_INFO.cvPdfUrl}
            type="application/pdf"
            className="w-full h-full"
          >
            <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center space-y-4">
              <FileText className="w-16 h-16 text-teal-400/60" />
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-white">
                  Direct PDF Preview
                </h3>
                <p className="text-xs text-slate-400 max-w-md">
                  Your browser does not support embedded PDF rendering in this view. You can download the CV or open it directly in a new window.
                </p>
              </div>
              <div className="flex items-center gap-3 pt-2">
                <a
                  href={PERSONAL_INFO.cvPdfUrl}
                  download="CV_Amine_Chaib.pdf"
                  className="px-5 py-2.5 text-xs font-semibold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-lg"
                >
                  Download CV File
                </a>
                <a
                  href={PERSONAL_INFO.cvPdfUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 text-xs text-slate-300 hover:text-white border border-slate-700 rounded-lg"
                >
                  Open in New Tab
                </a>
              </div>
            </div>
          </object>
        </div>

      </div>
    </div>
  );
};
