import { SupportedLanguage } from '../types/portfolio';

export interface Translations {
  nav: {
    about: string;
    projects: string;
    resume: string;
    skills: string;
    contact: string;
    downloadCv: string;
    manageLinks: string;
  };
  hero: {
    badge: string;
    greeting: string;
    name: string;
    title: string;
    lead: string;
    viewProjects: string;
    downloadResume: string;
    contactMe: string;
    availableForWork: string;
    metrics: {
      dbRecords: string;
      accuracy: string;
      modules: string;
      languages: string;
    };
  };
  projects: {
    title: string;
    kicker: string;
    subtitle: string;
    all: string;
    web: string;
    mobile: string;
    aiData: string;
    database: string;
    manageButton: string;
    liveDemo: string;
    viewDetails: string;
    githubCode: string;
    qrCode: string;
    noProjectsFound: string;
  };
  resume: {
    title: string;
    kicker: string;
    subtitle: string;
    downloadPdf: string;
    viewPdfModal: string;
    tabs: {
      experience: string;
      education: string;
      skills: string;
      languages: string;
    };
    currentPosition: string;
    keyDomains: string;
  };
  skills: {
    title: string;
    kicker: string;
    subtitle: string;
  };
  contact: {
    title: string;
    kicker: string;
    subtitle: string;
    emailMe: string;
    callMe: string;
    location: string;
    whatsapp: string;
    copyEmail: string;
    copyPhone: string;
    copied: string;
    sendMessage: string;
    yourName: string;
    yourEmail: string;
    subject: string;
    message: string;
    sendButton: string;
    sentSuccess: string;
  };
  modals: {
    projectDetails: string;
    architecture: string;
    keyFeatures: string;
    metrics: string;
    scanToOpen: string;
    close: string;
    manageProjectsTitle: string;
    addProject: string;
    editProject: string;
    save: string;
    cancel: string;
    resetDefaults: string;
    projectTitle: string;
    category: string;
    liveUrl: string;
    githubUrl: string;
    description: string;
    tagsComma: string;
  };
  footer: {
    rights: string;
    craftedWith: string;
  };
}

export const TRANSLATIONS: Record<SupportedLanguage, Translations> = {
  en: {
    nav: {
      about: 'About',
      projects: 'Apps & Projects',
      resume: 'Resume / CV',
      skills: 'Skills',
      contact: 'Contact',
      downloadCv: 'CV (PDF)',
      manageLinks: 'Manage Links'
    },
    hero: {
      badge: 'Available for New Challenges',
      greeting: "Hello, I'm",
      name: 'Amine CHAÏB',
      title: 'Full-Stack Developer & Data Systems Engineer',
      lead: 'Specialized in robust relational database systems, high-performance web & mobile applications (React, Flutter, Laravel), and intelligent data analytics. Bridging operational logistics with cutting-edge software architecture.',
      viewProjects: 'Explore Apps & Projects',
      downloadResume: 'Download Resume (PDF)',
      contactMe: 'Get In Touch',
      availableForWork: 'Based in Algiers · Open to On-site & Remote',
      metrics: {
        dbRecords: '50K+ DB Records Managed',
        accuracy: '99.9% Data Accuracy',
        modules: '12+ Production Modules',
        languages: '3 Spoken Languages'
      }
    },
    projects: {
      title: 'Featured Apps & Software Projects',
      kicker: 'Engineering Portfolio',
      subtitle: 'Production web platforms, cross-platform mobile apps, and relational data architecture built for real-world enterprise operations.',
      all: 'All Projects',
      web: 'Web & SaaS',
      mobile: 'Mobile (Flutter)',
      aiData: 'AI & Data Tools',
      database: 'Databases & Logistics',
      manageButton: 'Manage My Links',
      liveDemo: 'Live Demo',
      viewDetails: 'View Details',
      githubCode: 'Source Code',
      qrCode: 'QR Test on Mobile',
      noProjectsFound: 'No projects match this category.'
    },
    resume: {
      title: 'Professional Experience & Credentials',
      kicker: 'Curriculum Vitae',
      subtitle: 'Verified track record across database R&D, international procurement, software engineering, and data-driven decision making.',
      downloadPdf: 'Download Original CV (PDF)',
      viewPdfModal: 'Interactive PDF Preview',
      tabs: {
        experience: 'Experience',
        education: 'Education & Degrees',
        skills: 'Technical Skills',
        languages: 'Languages'
      },
      currentPosition: 'Current Position',
      keyDomains: 'Core Responsibilities & Pillars'
    },
    skills: {
      title: 'Technical & Operational Mastery',
      kicker: 'Core Competencies',
      subtitle: 'A versatile toolkit combining backend engineering, complex database design, modern frontend and cross-platform mobile development.'
    },
    contact: {
      title: "Let's Collaborate on Your Next Project",
      kicker: 'Direct Contact',
      subtitle: 'Interested in database systems, custom web apps, Flutter mobile tools, or enterprise data analytics? Reach out directly.',
      emailMe: 'Email Address',
      callMe: 'Direct Phone',
      location: 'Location',
      whatsapp: 'WhatsApp Direct Chat',
      copyEmail: 'Copy Email',
      copyPhone: 'Copy Phone',
      copied: 'Copied to clipboard!',
      sendMessage: 'Send a Message',
      yourName: 'Your Name',
      yourEmail: 'Your Email',
      subject: 'Subject',
      message: 'Your Message',
      sendButton: 'Send Message (Opens Mail Client)',
      sentSuccess: 'Message prepared! Opening your mail application...'
    },
    modals: {
      projectDetails: 'Project Specifications',
      architecture: 'System Architecture',
      keyFeatures: 'Key Deliverables & Features',
      metrics: 'Performance & Impact Metrics',
      scanToOpen: 'Scan QR code to launch this app on your phone:',
      close: 'Close',
      manageProjectsTitle: 'Manage Your App & Project Links',
      addProject: 'Add New Project',
      editProject: 'Edit Project',
      save: 'Save Changes',
      cancel: 'Cancel',
      resetDefaults: 'Reset to Defaults',
      projectTitle: 'Project Title',
      category: 'Category',
      liveUrl: 'Live App URL',
      githubUrl: 'GitHub Repository URL',
      description: 'Short Description',
      tagsComma: 'Tags (separated by commas)'
    },
    footer: {
      rights: 'All rights reserved.',
      craftedWith: 'Designed & Developed with React & Tailwind CSS.'
    }
  },
  fr: {
    nav: {
      about: 'À Propos',
      projects: 'Applications & Projets',
      resume: 'Mon CV',
      skills: 'Compétences',
      contact: 'Contact',
      downloadCv: 'CV (PDF)',
      manageLinks: 'Gérer les liens'
    },
    hero: {
      badge: 'Disponible pour de nouveaux défis',
      greeting: 'Bonjour, je suis',
      name: 'Amine CHAÏB',
      title: 'Développeur Full-Stack & Ingénieur Systèmes de Données',
      lead: 'Spécialisé dans les bases de données relationnelles complexes, le développement web & mobile moderne (React, Flutter, Laravel) et l’analyse décisionnelle. Alliant rigueur opérationnelle et architectures logicielles performantes.',
      viewProjects: 'Voir mes applications & projets',
      downloadResume: 'Télécharger mon CV (PDF)',
      contactMe: 'Me Contacter',
      availableForWork: 'Basé à Alger (Souidania) · Présentiel & Télétravail',
      metrics: {
        dbRecords: '50 000+ données gérées',
        accuracy: '99,9% d’exactitude',
        modules: '12+ modules en production',
        languages: '3 langues maîtrisées'
      }
    },
    projects: {
      title: 'Applications & Projets Réalisés',
      kicker: 'Portfolio Technique',
      subtitle: 'Plateformes web, applications mobiles multiplateformes et architectures de données conçues pour des opérations d’entreprise réelles.',
      all: 'Tous les projets',
      web: 'Web & SaaS',
      mobile: 'Mobile (Flutter)',
      aiData: 'IA & Analyse de Données',
      database: 'Bases de Données & Logistique',
      manageButton: 'Gérer mes liens',
      liveDemo: 'Démo en Ligne',
      viewDetails: 'Détails du Projet',
      githubCode: 'Code Source',
      qrCode: 'Tester sur Mobile (QR)',
      noProjectsFound: 'Aucun projet dans cette catégorie.'
    },
    resume: {
      title: 'Parcours Professionnel & Formations',
      kicker: 'Curriculum Vitae',
      subtitle: 'Expérience avérée en R&D bases de données, chaîne logistique internationale, développement informatique et reporting d’entreprise.',
      downloadPdf: 'Télécharger le CV Original (PDF)',
      viewPdfModal: 'Aperçu Interactif du CV',
      tabs: {
        experience: 'Expériences',
        education: 'Diplômes & Formations',
        skills: 'Compétences Techniques',
        languages: 'Langues'
      },
      currentPosition: 'Poste Actuel',
      keyDomains: 'Pôles de Responsabilités'
    },
    skills: {
      title: 'Maîtrise Technique & Opérationnelle',
      kicker: 'Compétences Clés',
      subtitle: 'Un profil polyvalent conjuguant ingénierie backend, optimisation SQL, développement mobile réactif et analyse statistique.'
    },
    contact: {
      title: 'Contactez-moi pour Vos Projets',
      kicker: 'Contact Direct',
      subtitle: 'Besoin d’une expertise en base de données, d’une application sur mesure (Web / Flutter) ou d’analyse décisionnelle ? Discutons-en.',
      emailMe: 'Adresse Email',
      callMe: 'Téléphone Mobile',
      location: 'Localisation',
      whatsapp: 'Discussion WhatsApp',
      copyEmail: 'Copier l’email',
      copyPhone: 'Copier le numéro',
      copied: 'Copié dans le presse-papier !',
      sendMessage: 'Envoyer un message',
      yourName: 'Votre Nom',
      yourEmail: 'Votre Email',
      subject: 'Objet',
      message: 'Votre Message',
      sendButton: 'Envoyer (Ouvre votre messagerie)',
      sentSuccess: 'Message prêt ! Ouverture de votre client mail...'
    },
    modals: {
      projectDetails: 'Fiche Technique du Projet',
      architecture: 'Architecture Technique',
      keyFeatures: 'Fonctionnalités Principales',
      metrics: 'Métriques & Impact',
      scanToOpen: 'Scannez le code QR pour lancer l’application sur votre téléphone :',
      close: 'Fermer',
      manageProjectsTitle: 'Gérer Vos Liens d’Applications & Projets',
      addProject: 'Ajouter un Projet',
      editProject: 'Modifier le Projet',
      save: 'Enregistrer',
      cancel: 'Annuler',
      resetDefaults: 'Réinitialiser par défaut',
      projectTitle: 'Titre du Projet',
      category: 'Catégorie',
      liveUrl: 'Lien de l’application (URL)',
      githubUrl: 'Dépôt GitHub (URL)',
      description: 'Courte description',
      tagsComma: 'Technologies (séparées par des virgules)'
    },
    footer: {
      rights: 'Tous droits réservés.',
      craftedWith: 'Conçu et développé avec React & Tailwind CSS.'
    }
  },
  ar: {
    nav: {
      about: 'نبذة عني',
      projects: 'التطبيقات والمشاريع',
      resume: 'السيرة الذاتية',
      skills: 'المهارات',
      contact: 'اتصل بي',
      downloadCv: 'السيرة الذاتية (PDF)',
      manageLinks: 'إدارة الروابط'
    },
    hero: {
      badge: 'متاح للفرص والمشاريع الجديدة',
      greeting: 'مرحباً، أنا',
      name: 'أمين شايب',
      title: 'مطور برمجيات متكامل ومهندس نظم بيانات',
      lead: 'متخصص في نظم قواعد البيانات العلائقية المعقدة، تطوير تطبيقات الويب والهاتف المحمول الحديثة (React، Flutter، Laravel) والتحليلات البيانية الذكية.',
      viewProjects: 'استعراض التطبيقات والمشاريع',
      downloadResume: 'تحميل السيرة الذاتية (PDF)',
      contactMe: 'تواصل معي',
      availableForWork: 'الجزائر (سويدانية) · عمل مكتبي أو عن بعد',
      metrics: {
        dbRecords: '+50,000 سجل مدار',
        accuracy: '99.9% دقة البيانات',
        modules: '+12 نظام قيد التشغيل',
        languages: '3 لغات متقنة'
      }
    },
    projects: {
      title: 'التطبيقات والأنظمة البرمجية',
      kicker: 'معرض الأعمال والمشاريع',
      subtitle: 'منصات ويب متقدمة، تطبيقات هاتف متعددة المنصات، وبنية بيانات مصممة للعمليات المؤسسية الحقيقية.',
      all: 'جميع المشاريع',
      web: 'تطبيقات الويب',
      mobile: 'تطبيقات الهاتف (Flutter)',
      aiData: 'الذكاء الاصطناعي والبيانات',
      database: 'قواعد البيانات واللوجستيات',
      manageButton: 'تعديل وإضافة الروابط',
      liveDemo: 'معاينة حية',
      viewDetails: 'تفاصيل المشروع',
      githubCode: 'الكود المصدري',
      qrCode: 'فحص عبر الهاتف (QR)',
      noProjectsFound: 'لا توجد مشاريع في هذا التصنيف حالياً.'
    },
    resume: {
      title: 'المسار المهني والمؤهلات الأكاديمية',
      kicker: 'السيرة الذاتية المفصلة',
      subtitle: 'خبرة عملية متينة في تطوير قواعد البيانات، الاستيراد وسلاسل الإمداد، البرمجة وتحليل البيانات.',
      downloadPdf: 'تحميل ملف السيرة الذاتية الأصلية (PDF)',
      viewPdfModal: 'معاينة السيرة الذاتية التفاعلية',
      tabs: {
        experience: 'الخبرات المهنية',
        education: 'الشهادات والتعليم',
        skills: 'المهارات التقنية',
        languages: 'اللغات'
      },
      currentPosition: 'المنصب الحالي',
      keyDomains: 'محاور المسؤولية الرئيسية'
    },
    skills: {
      title: 'الكفاءات التقنية والعملياتية',
      kicker: 'المهارات الأساسية',
      subtitle: 'مجموعة شاملة تجمع بين هندسة الخوادم، ضبط أداء قواعد البيانات، وتطوير واجهات المستخدم والهاتف.'
    },
    contact: {
      title: 'تواصل معي لبدء التعاون',
      kicker: 'معلومات الاتصال',
      subtitle: 'هل تحتاج إلى استشارة في قواعد البيانات، تطبيق ويب أو هاتف مخصص، أو نظم لتحليل البيانات؟ تواصل معي مباشرة.',
      emailMe: 'البريد الإلكتروني',
      callMe: 'الهاتف المباشر',
      location: 'الموقع',
      whatsapp: 'محادثة واتساب مباشرة',
      copyEmail: 'نسخ البريد',
      copyPhone: 'نسخ رقم الهاتف',
      copied: 'تم النسخ بنجاح!',
      sendMessage: 'إرسال رسالة',
      yourName: 'الاسم الكريم',
      yourEmail: 'بريدك الإلكتروني',
      subject: 'الموضوع',
      message: 'نص الرسالة',
      sendButton: 'إرسال عبر برنامج البريد',
      sentSuccess: 'تم إعداد الرسالة وفتح تطبيق البريد...'
    },
    modals: {
      projectDetails: 'المواصفات التقنية للمشروع',
      architecture: 'البنية الهندسية للنظام',
      keyFeatures: 'الميزات والوظائف الأساسية',
      metrics: 'مؤشرات الأداء والتأثير',
      scanToOpen: 'امسح رمز QR لفتح التطبيق على هاتفك المحمول:',
      close: 'إغلاق',
      manageProjectsTitle: 'إدارة روابط التطبيقات والمشاريع',
      addProject: 'إضافة مشروع جديد',
      editProject: 'تعديل المشروع',
      save: 'حفظ التعديلات',
      cancel: 'إلغاء',
      resetDefaults: 'استعادة المشاريع الافتراضية',
      projectTitle: 'عنوان المشروع',
      category: 'التصنيف',
      liveUrl: 'رابط التطبيق المباشر (URL)',
      githubUrl: 'رابط مستودع GitHub',
      description: 'وصف مختصر',
      tagsComma: 'التقنيات (مفصولة بفواصل)'
    },
    footer: {
      rights: 'جميع الحقوق محفوظة.',
      craftedWith: 'تم التصميم والبرمجة باستخدام React و Tailwind CSS.'
    }
  }
};
