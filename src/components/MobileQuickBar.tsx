import React from 'react';
import { Layers, FileText, Phone, MessageSquare } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { SupportedLanguage } from '../types/portfolio';
import { TRANSLATIONS } from '../data/translations';

interface MobileQuickBarProps {
  currentLang: SupportedLanguage;
  onOpenPdfModal: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({
  currentLang,
  onOpenPdfModal,
}) => {
  const t = TRANSLATIONS[currentLang];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 px-3 py-2 shadow-2xl safe-area-bottom">
      <div className="grid grid-cols-4 gap-1.5 max-w-md mx-auto">
        <a
          href="#projects"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg text-slate-400 hover:text-teal-400 active:bg-slate-900 transition-colors"
        >
          <Layers className="w-4 h-4 text-teal-400" />
          <span className="text-[10px] font-medium mt-1 truncate max-w-full">
            {t.nav.projects}
          </span>
        </a>

        <button
          onClick={onOpenPdfModal}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg text-slate-400 hover:text-teal-400 active:bg-slate-900 transition-colors"
        >
          <FileText className="w-4 h-4 text-teal-400" />
          <span className="text-[10px] font-medium mt-1 truncate max-w-full">
            {t.nav.downloadCv}
          </span>
        </button>

        <a
          href={`tel:${PERSONAL_INFO.phone}`}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg text-slate-400 hover:text-teal-400 active:bg-slate-900 transition-colors"
        >
          <Phone className="w-4 h-4 text-teal-400" />
          <span className="text-[10px] font-medium mt-1 truncate max-w-full">
            Call
          </span>
        </a>

        <a
          href={PERSONAL_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg text-slate-400 hover:text-emerald-400 active:bg-slate-900 transition-colors"
        >
          <MessageSquare className="w-4 h-4 text-emerald-400" />
          <span className="text-[10px] font-medium mt-1 truncate max-w-full">
            WhatsApp
          </span>
        </a>
      </div>
    </div>
  );
};
