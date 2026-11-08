/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { ResumeSection } from './components/ResumeSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ManageLinksModal } from './components/ManageLinksModal';
import { PdfModal } from './components/PdfModal';
import { QrModal } from './components/QrModal';
import { MobileQuickBar } from './components/MobileQuickBar';
import { INITIAL_PROJECTS } from './data/portfolioData';
import { Project, SupportedLanguage } from './types/portfolio';

const STORAGE_PROJECTS_KEY = 'amine_portfolio_projects';
const STORAGE_LANG_KEY = 'amine_portfolio_lang';

export default function App() {
  // Load saved projects or fallback to initial realistic projects
  const [projects, setProjects] = useState<Project[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_PROJECTS_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch {
      // Fallback
    }
    return INITIAL_PROJECTS;
  });

  // Current language state (en, fr, ar)
  const [currentLang, setCurrentLang] = useState<SupportedLanguage>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_LANG_KEY) as SupportedLanguage;
      if (saved && ['en', 'fr', 'ar'].includes(saved)) {
        return saved;
      }
    } catch {
      // Fallback
    }
    return 'en';
  });

  // Modal states
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);
  const [isManageModalOpen, setIsManageModalOpen] = useState(false);
  const [qrModalData, setQrModalData] = useState<{ url: string; title: string } | null>(null);

  // Sync language with document direction and localStorage
  const handleLanguageChange = (lang: SupportedLanguage) => {
    setCurrentLang(lang);
    try {
      localStorage.setItem(STORAGE_LANG_KEY, lang);
    } catch {
      // ignore
    }
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  };

  useEffect(() => {
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLang;
  }, [currentLang]);

  // Save projects to localStorage
  const handleSaveProjects = (updatedProjects: Project[]) => {
    setProjects(updatedProjects);
    try {
      localStorage.setItem(STORAGE_PROJECTS_KEY, JSON.stringify(updatedProjects));
    } catch {
      // ignore
    }
  };

  // Reset to default projects
  const handleResetDefaults = () => {
    setProjects(INITIAL_PROJECTS);
    try {
      localStorage.removeItem(STORAGE_PROJECTS_KEY);
    } catch {
      // ignore
    }
  };

  const handleOpenContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenQr = (url: string, title: string) => {
    setQrModalData({ url, title });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-teal-500/30 selection:text-teal-200 bg-grid-pattern relative">
      {/* Top Navbar */}
      <Navbar
        currentLang={currentLang}
        onLanguageChange={handleLanguageChange}
        onOpenPdfModal={() => setIsPdfModalOpen(true)}
        onOpenContact={handleOpenContact}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          currentLang={currentLang}
          onOpenPdfModal={() => setIsPdfModalOpen(true)}
          onOpenManageModal={() => setIsManageModalOpen(true)}
        />

        {/* Projects & Apps Showcase */}
        <ProjectsSection
          projects={projects}
          currentLang={currentLang}
          onSelectProject={(project) => setSelectedProject(project)}
          onOpenManageModal={() => setIsManageModalOpen(true)}
          onOpenQrModal={handleOpenQr}
        />

        {/* Resume & Credentials Section */}
        <ResumeSection
          currentLang={currentLang}
          onOpenPdfModal={() => setIsPdfModalOpen(true)}
        />

        {/* Contact & Inquiries Section */}
        <ContactSection currentLang={currentLang} />
      </main>

      {/* Footer */}
      <Footer currentLang={currentLang} />

      {/* Mobile Quick Action Bar (strictly under 15% viewport height) */}
      <MobileQuickBar
        currentLang={currentLang}
        onOpenPdfModal={() => setIsPdfModalOpen(true)}
      />

      {/* Modals */}
      <ProjectModal
        project={selectedProject}
        currentLang={currentLang}
        onClose={() => setSelectedProject(null)}
        onOpenQr={handleOpenQr}
      />

      <ManageLinksModal
        projects={projects}
        isOpen={isManageModalOpen}
        currentLang={currentLang}
        onClose={() => setIsManageModalOpen(false)}
        onSaveProjects={handleSaveProjects}
        onResetDefaults={handleResetDefaults}
      />

      <PdfModal
        isOpen={isPdfModalOpen}
        currentLang={currentLang}
        onClose={() => setIsPdfModalOpen(false)}
      />

      <QrModal
        url={qrModalData?.url || null}
        title={qrModalData?.title || null}
        currentLang={currentLang}
        onClose={() => setQrModalData(null)}
      />
    </div>
  );
}
