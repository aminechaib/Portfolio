import React, { useEffect } from 'react';
import { X, Smartphone, ExternalLink, Copy, Check } from 'lucide-react';
import { SupportedLanguage } from '../types/portfolio';
import { TRANSLATIONS } from '../data/translations';

interface QrModalProps {
  url: string | null;
  title: string | null;
  currentLang: SupportedLanguage;
  onClose: () => void;
}

export const QrModal: React.FC<QrModalProps> = ({
  url,
  title,
  currentLang,
  onClose,
}) => {
  const [copied, setCopied] = React.useState(false);
  const t = TRANSLATIONS[currentLang];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (url) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [url, onClose]);

  if (!url) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(
    url
  )}&bgcolor=090d16&color=14b8a6`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      <div className="relative w-full max-w-sm rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-2xl z-10 flex flex-col items-center text-center space-y-5">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-white rounded-lg transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Icon & Title */}
        <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400">
          <Smartphone className="w-6 h-6" />
        </div>

        <div className="space-y-1">
          <h3 className="text-base font-bold text-white font-display">
            {title || 'Launch on Mobile'}
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            {t.modals.scanToOpen}
          </p>
        </div>

        {/* QR Code Container */}
        <div className="p-4 rounded-xl bg-slate-950 border border-teal-500/40 shadow-inner flex items-center justify-center">
          <img
            src={qrImageUrl}
            alt={`QR code to open ${title || url}`}
            className="w-48 h-48 rounded-lg object-contain"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* URL Link and Copy Action */}
        <div className="w-full space-y-2">
          <div className="flex items-center justify-between p-2 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono">
            <span className="truncate text-teal-300 max-w-[200px] text-left">
              {url}
            </span>
            <button
              onClick={handleCopy}
              className="p-1.5 text-slate-400 hover:text-white transition-colors"
              title="Copy URL"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-teal-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>

          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 w-full py-2 text-xs font-semibold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-lg transition-all"
          >
            <span>Open Link in New Tab</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </div>
  );
};
