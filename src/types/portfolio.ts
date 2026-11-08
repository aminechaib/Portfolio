export type ProjectCategory = 'all' | 'web' | 'mobile' | 'ai-data' | 'database';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  summary: string;
  description: string;
  imageUrl: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  metrics?: { label: string; value: string }[];
  keyFeatures: string[];
  architecture?: string;
  date: string;
}

export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  badge?: string;
  summary: string;
  pillars: {
    title: string;
    items: string[];
  }[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  details?: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: { name: string; level: number; note?: string }[];
}

export type SupportedLanguage = 'en' | 'fr' | 'ar';
