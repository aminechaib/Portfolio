import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageSquare, Copy, Check, Send, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { SupportedLanguage } from '../types/portfolio';
import { TRANSLATIONS } from '../data/translations';

interface ContactSectionProps {
  currentLang: SupportedLanguage;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang];
  const [copiedType, setCopiedType] = useState<'email' | 'phone' | null>(null);
  
  // Message form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      subject || 'Inquiry from Portfolio'
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-16 md:py-24 border-t border-slate-800/80 bg-slate-950/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-teal-400 mb-2">
            {t.contact.kicker}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-display text-balance">
            {t.contact.title}
          </h2>
          <p className="text-slate-400 mt-2 text-sm sm:text-base">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/80 flex items-start justify-between gap-4 hover:border-teal-500/40 transition-colors">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400">{t.contact.emailMe}</span>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="block text-sm font-semibold text-white hover:text-teal-400 transition-colors font-mono mt-0.5"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <button
                onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                className="p-2 text-slate-400 hover:text-teal-400 rounded-lg hover:bg-slate-800 transition-colors shrink-0"
                title={t.contact.copyEmail}
              >
                {copiedType === 'email' ? (
                  <Check className="w-4 h-4 text-teal-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/80 flex items-start justify-between gap-4 hover:border-teal-500/40 transition-colors">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400">{t.contact.callMe}</span>
                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="block text-sm font-semibold text-white hover:text-teal-400 transition-colors font-mono mt-0.5"
                  >
                    {PERSONAL_INFO.phoneFormatted} ({PERSONAL_INFO.phone})
                  </a>
                </div>
              </div>

              <button
                onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                className="p-2 text-slate-400 hover:text-teal-400 rounded-lg hover:bg-slate-800 transition-colors shrink-0"
                title={t.contact.copyPhone}
              >
                {copiedType === 'phone' ? (
                  <Check className="w-4 h-4 text-teal-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Location Card */}
            <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/80 flex items-start gap-3.5">
              <div className="p-2.5 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-400 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono text-slate-400">{t.contact.location}</span>
                <p className="text-sm font-semibold text-white mt-0.5">
                  {PERSONAL_INFO.location}
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  Permis de conduire · Véhicule personnel · Mobile
                </p>
              </div>
            </div>

            {/* WhatsApp Direct Chat */}
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl border border-emerald-500/30 bg-emerald-950/20 hover:bg-emerald-950/30 hover:border-emerald-500/50 flex items-center justify-between gap-4 transition-all group"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-emerald-300">
                    {t.contact.whatsapp}
                  </h4>
                  <p className="text-xs text-slate-400">
                    Chat directly on WhatsApp (instant response)
                  </p>
                </div>
              </div>

              <ExternalLink className="w-4 h-4 text-emerald-400" />
            </a>

            {/* Toast feedback */}
            {copiedType && (
              <div className="p-3 rounded-lg bg-teal-950/80 border border-teal-500/40 text-xs text-teal-300 flex items-center gap-2">
                <Check className="w-4 h-4 text-teal-400" />
                <span>{t.contact.copied}</span>
              </div>
            )}

          </div>

          {/* Right Column: Interactive Message Composer */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl border border-slate-800 bg-slate-900/80 space-y-5">
              <h3 className="text-lg font-bold text-white font-display">
                {t.contact.sendMessage}
              </h3>

              {submitted && (
                <div className="p-3.5 rounded-xl bg-teal-950/80 border border-teal-500/50 text-xs text-teal-300 flex items-center gap-2">
                  <Check className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>{t.contact.sentSuccess}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-400">
                      {t.contact.yourName} *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Karim Bensalem"
                      className="w-full px-3.5 py-2.5 text-xs bg-slate-950/80 border border-slate-800 rounded-lg text-white placeholder-slate-600 focus:outline-none focus:border-teal-400 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-400">
                      {t.contact.yourEmail} *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. karim@company.com"
                      className="w-full px-3.5 py-2.5 text-xs bg-slate-950/80 border border-slate-800 rounded-lg text-white placeholder-slate-600 focus:outline-none focus:border-teal-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-400">
                    {t.contact.subject}
                  </label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. Project Inquiry: Database Architecture or Mobile App"
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-950/80 border border-slate-800 rounded-lg text-white placeholder-slate-600 focus:outline-none focus:border-teal-400 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-400">
                    {t.contact.message} *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your project, app needs, timeline, or requirements..."
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-950/80 border border-slate-800 rounded-lg text-white placeholder-slate-600 focus:outline-none focus:border-teal-400 transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 w-full py-3 px-6 text-xs font-semibold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-lg shadow-lg shadow-teal-500/20 transition-all active:scale-98"
                >
                  <Send className="w-4 h-4" />
                  <span>{t.contact.sendButton}</span>
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
