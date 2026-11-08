import { Project, ExperienceItem, EducationItem, SkillCategory } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Amine CHAÏB',
  title: 'Full-Stack Developer & Data Systems Engineer',
  roleFr: 'Développeur Full-Stack & Ingénieur Systèmes de Données',
  roleAr: 'مطور برمجيات متكامل ومهندس نظم بيانات',
  email: 'ccamine4@gmail.com',
  phone: '0675 56 10 07',
  phoneFormatted: '+213 675 56 10 07',
  location: 'Souidania, Algiers, Algeria',
  logoUrl: '/assets/aistudio/AC_7bfc9ad1.png',
  cvPdfUrl: '/assets/aistudio/CV_2026-10-18_Amine_Chaib_0ea0edb2.pdf',
  whatsappUrl: 'https://wa.me/213675561007',
  githubProfile: 'https://github.com/amine-chaib',
  linkedinProfile: 'https://linkedin.com/in/amine-chaib',
  about: {
    en: 'Versatile tech professional specialized in relational database engineering, data analytics, modern web & mobile development (React, Flutter, Laravel, Python). Proven track record managing mission-critical inventory databases, optimizing supply-chain logistics, and building high-performance e-commerce integrations.',
    fr: 'Professionnel polyvalent disposant d’une solide expérience en gestion et modélisation de bases de données, analyse de données, développement web & mobile moderne (React, Flutter, Laravel, Python). Expertise avérée dans l’optimisation des flux logistiques, le dédouanement international et les intégrations e-commerce.',
    ar: 'مهندس برمجيات ونظم بيانات متعدد المهارات، متخصص في هندسة قواعد البيانات العلائقية، تحليل البيانات، وتطوير تطبيقات الويب والهاتف المحمول (React، Flutter، Laravel، Python). خبرة مؤكدة في إدارة سلاسل الإمداد، الاستيراد، وتطوير منصات التجارة الإلكترونية.'
  }
};

export const INITIAL_PROJECTS: Project[] = [
  {
    id: 'parts-matrix-db',
    title: 'AutoParts Pro: Vehicle Compatibility Matrix & DB',
    category: 'database',
    categoryLabel: 'Database & Architecture',
    summary: 'High-performance SQL relational catalog categorizing 50,000+ spare parts across multi-brand vehicle makes, models, and years.',
    description: 'Designed and deployed an enterprise-grade database engine and web management console for an automotive spare parts distributor in Algiers. The system models cross-compatibility between hundreds of OEM manufacturers and vehicle trims with sub-50ms indexed query speeds.',
    imageUrl: '/src/assets/images/project_parts_catalog_1794172493509.jpg',
    tags: ['SQL', 'Database Schema', 'Laravel', 'React.js', 'ETL', 'Indexing'],
    liveUrl: 'https://autoparts-matrix-demo.web.app',
    githubUrl: 'https://github.com/amine-chaib/autoparts-matrix-engine',
    featured: true,
    metrics: [
      { label: 'Parts Cataloged', value: '50,000+' },
      { label: 'Query Latency', value: '< 45ms' },
      { label: 'Data Accuracy', value: '99.9%' }
    ],
    keyFeatures: [
      'Multi-tier vehicle compatibility taxonomy (Make, Model, Year, Engine code, VIN range)',
      'Sub-second SQL indexing and query cache for high-concurrency parts search',
      'Automated data cleansing, deduplication, and mass CSV/Excel import pipeline',
      'Bi-directional synchronization between local inventory ERP and e-commerce platforms'
    ],
    architecture: 'PostgreSQL / MariaDB partitioned schema, Laravel REST API layer, Tailwind & React front-end management grid.',
    date: '2024 - Present'
  },
  {
    id: 'flexilog-mobile',
    title: 'FlexiLog: Flutter Cross-Platform Warehouse & Barcode App',
    category: 'mobile',
    categoryLabel: 'Mobile App (Flutter)',
    summary: 'Cross-platform mobile application for warehouse logistics, rapid barcode scanning, stock intake, and order fulfillment.',
    description: 'Built with Flutter for iOS and Android, FlexiLog empowers warehouse staff to scan incoming shipments, reconcile vendor packing slips against pro-forma invoices, update real-time shelf locations, and operate seamlessly in low-connectivity warehouse environments with offline local SQLite caching.',
    imageUrl: '/src/assets/images/project_flutter_mobile_1794172493084.jpg',
    tags: ['Flutter', 'Dart', 'Mobile iOS/Android', 'Barcode Scanner', 'SQLite', 'REST API'],
    liveUrl: 'https://flexilog-warehouse.app',
    githubUrl: 'https://github.com/amine-chaib/flexilog-flutter-app',
    featured: true,
    metrics: [
      { label: 'Scan Time', value: '0.2s' },
      { label: 'Offline Support', value: '100%' },
      { label: 'Platform Support', value: 'iOS & Android' }
    ],
    keyFeatures: [
      'High-speed camera barcode & QR reader with instant vibration haptic feedback',
      'Offline-first architecture with local SQLite queue and automatic server sync upon Wi-Fi reconnect',
      'Multi-warehouse bin and shelf location routing with interactive pick-lists',
      'Direct receipt printing and dispatch invoice generation'
    ],
    architecture: 'Flutter (Dart) client, Provider state management, SQLite local caching, Laravel REST backend.',
    date: '2024'
  },
  {
    id: 'atlas-predictive-analytics',
    title: 'Atlas: Predictive Sales & Supply Chain Analytics Hub',
    category: 'ai-data',
    categoryLabel: 'AI & Data Analytics',
    summary: 'Automated Python & SQL analytics suite predicting inventory turnover, lead times, and seasonal demand variations.',
    description: 'An executive analytics platform built with Python, SQL, and modern data visualization dashboards. Extracts transaction history to identify sales velocity, calculates safety stock thresholds, forecasts maritime shipping lead times, and automatically generates monthly PDF reports for management.',
    imageUrl: '/src/assets/images/project_ai_analytics_1794172493907.jpg',
    tags: ['Python', 'SQL', 'Predictive Modeling', 'Data Analysis', 'Excel VBA', 'Dashboards'],
    liveUrl: 'https://atlas-analytics-platform.cloud',
    githubUrl: 'https://github.com/amine-chaib/atlas-predictive-analytics',
    featured: true,
    metrics: [
      { label: 'Forecast Accuracy', value: '93.5%' },
      { label: 'Stockouts Prevented', value: '-38%' },
      { label: 'Reports Automated', value: 'Weekly / Monthly' }
    ],
    keyFeatures: [
      'Automated ETL data extraction pipelines pulling directly from relational operational databases',
      'Demand forecasting algorithms based on historical seasonal cycles and vehicle repair frequencies',
      'Lead-time tracking for international freight booking from initial order to customs release',
      'Exportable executive summaries in interactive HTML, Excel pivot, and formatted PDF formats'
    ],
    architecture: 'Python (Pandas, NumPy, Scikit-learn), FastAPI microservice, React charts, automated cron pipelines.',
    date: '2024'
  },
  {
    id: 'autocomponents-b2b',
    title: 'AutoComponents B2B: High-Load E-Commerce Storefront',
    category: 'web',
    categoryLabel: 'Web & SaaS',
    summary: 'Responsive B2B e-commerce platform with instant faceted filter, real-time stock sync, and pro-forma invoice generator.',
    description: 'A modern web application built for business-to-business transactions in automotive spare parts. Features dynamic multi-filter facet search (by vehicle brand, chassis type, OEM reference, and price range), wholesale quantity pricing tiers, and automated pro-forma quote generation.',
    imageUrl: '/src/assets/images/project_ecommerce_hub_1794172494498.jpg',
    tags: ['React.js', 'Tailwind CSS', 'PHP', 'Laravel', 'REST API', 'Faceted Search'],
    liveUrl: 'https://autocomponents-b2b-store.com',
    githubUrl: 'https://github.com/amine-chaib/autocomponents-b2b-store',
    featured: true,
    metrics: [
      { label: 'SKUs Listed', value: '30,000+' },
      { label: 'Filter Speed', value: 'Instant' },
      { label: 'B2B Client Quotes', value: '1,200+' }
    ],
    keyFeatures: [
      'Instant facet filtering across brands (Bosch, Brembo, Continental, Denso, Moog)',
      'Direct order quote drafting and instantaneous pro-forma generation for banking approval',
      'Real-time inventory lookup against central warehouse database',
      'Responsive design strictly tuned for both desktop and mobile field technicians'
    ],
    architecture: 'React 19 SPA, Tailwind CSS v4, Laravel API, Redis session cache, PostgreSQL storage.',
    date: '2023 - 2024'
  },
  {
    id: 'maritime-import-tracker',
    title: 'LogiFlow: Maritime Import & Customs Booking Tracker',
    category: 'database',
    categoryLabel: 'Logistics & Supply Chain',
    summary: 'End-to-end supply chain compliance software managing ALGEX pre-domiciliation, container bookings, and customs.',
    description: 'Custom internal portal streamlining the entire international procurement cycle from overseas vendor orders to warehouse delivery. Manages commercial documentation, pro-forma approvals with ALGEX, maritime container space booking optimization, and customs clearance milestones.',
    imageUrl: '/src/assets/images/project_parts_catalog_1794172493509.jpg',
    tags: ['SQL', 'Process Automation', 'Supply Chain', 'ALGEX & Customs', 'PHP'],
    liveUrl: 'https://logiflow-import-tracker.dev',
    githubUrl: 'https://github.com/amine-chaib/logiflow-maritime-tracker',
    featured: false,
    metrics: [
      { label: 'Containers Tracked', value: '120+' },
      { label: 'Clearance Time', value: '-25% Delay' },
      { label: 'Audit Compliance', value: '100%' }
    ],
    keyFeatures: [
      'Document tracking checklist (Bill of Lading, Packing List, Commercial Invoice, Certificate of Origin)',
      'Automated milestone alerts for banking pre-domiciliation and customs broker handoffs',
      'Container loading optimizer calculating CBM volume vs payload weight',
      'Real-time vessel tracking notifications'
    ],
    architecture: 'Relational database schema, PHP backend, responsive web console with dark-mode analytics.',
    date: '2024'
  },
  {
    id: 'ai-invoice-extractor',
    title: 'DocuParse AI: Intelligent Invoicing & Packing List OCR',
    category: 'ai-data',
    categoryLabel: 'AI & Data Analytics',
    summary: 'Automated AI document parsing tool extracting line items from vendor invoices directly into relational SQL tables.',
    description: 'An AI-powered document processing pipeline utilizing Gemini AI & OCR to extract part numbers, unit prices, HS customs codes, and quantities from multilingual foreign invoices (English, French, Chinese) and inject structured data directly into the central inventory database.',
    imageUrl: '/src/assets/images/project_ai_analytics_1794172493907.jpg',
    tags: ['Python', 'Gemini AI API', 'OCR', 'FastAPI', 'Data Extraction'],
    liveUrl: 'https://docuparse-ai.online',
    githubUrl: 'https://github.com/amine-chaib/docuparse-ai-invoices',
    featured: false,
    metrics: [
      { label: 'Data Entry Time', value: '90% faster' },
      { label: 'Extraction Accuracy', value: '98.7%' },
      { label: 'Languages', value: 'FR / EN / CN' }
    ],
    keyFeatures: [
      'Multi-page PDF parsing with automated tabular line item detection',
      'Automated reconciliation against purchasing orders and currency conversion rates',
      'Direct SQL table insertion with human-in-the-loop validation interface',
      'Zero manual typing for large shipments of 500+ line items'
    ],
    architecture: 'Python, Google Gemini API, PyMuPDF, FastAPI, React review UI.',
    date: '2024'
  }
];

export const RESUME_EXPERIENCES: ExperienceItem[] = [
  {
    id: 'sar-pieces-rechange',
    title: 'Recherche et développement de systèmes de bases de données & Gestion logistique',
    company: 'SARL PIECES DE RECHANGE ORIGINALES',
    location: 'Algiers, Les Eucalyptus, Algeria',
    period: 'Depuis mars 2024 — Présent',
    badge: 'Poste Actuel',
    summary: 'Conception architecturale et pilotage des systèmes de données critiques, optimisation des flux d’importation internationale et analyses prédictives pour un distributeur majeur de pièces automobiles.',
    pillars: [
      {
        title: 'Développement & Gestion des Bases de Données',
        items: [
          'Conception, développement et maintenance de bases de données relationnelles structurées pour la gestion des produits (50k+ références), des stocks, des ventes et des clients.',
          'Modélisation avancée des données pour la catégorisation des pièces automobiles et la gestion de leur compatibilité selon les marques, modèles, années et motorisations.',
          'Contrôle, nettoyage (ETL), déduplication et validation rigoureuse des données afin d’assurer une exactitude et cohérence totales.',
          'Audit et optimisation fine des requêtes SQL pour accélérer les temps de réponse et l’efficacité de l’accès aux données volumineuses.',
          'Intégration et synchronisation automatisée des flux de données entre les plateformes e-commerce et les systèmes ERP internes.'
        ]
      },
      {
        title: 'Approvisionnement, Importation & Gestion de la Chaîne Logistique',
        items: [
          'Gestion et suivi complet du processus d’approvisionnement international, de la commande fournisseur jusqu’à la réception en entrepôt.',
          'Instruction et suivi des offres commerciales, factures pro forma et dossiers d’importation auprès des organismes régulateurs (notamment l’ALGEX).',
          'Pilotage des procédures de pré-domiciliation bancaire et suivi des formalités bancaires liées aux opérations d’importation de devises.',
          'Coordination avec les fournisseurs internationaux, réservation maritime (booking) et optimisation du chargement des conteneurs selon le volume (CBM) et le poids.',
          'Contrôle de conformité des documents d’expédition (BL, factures, certificats d’origine) et coordination étroite avec le transitaire pour le dédouanement rapide.'
        ]
      },
      {
        title: 'Analyse des Données, Reporting & Décisionnel',
        items: [
          'Analyse des ventes, de la rotation des stocks et des tendances commerciales pour soutenir la prise de décision de la direction générale.',
          'Création de rapports automatisés et de tableaux de bord de pilotage destinés aux équipes commerciales, marketing et logistiques.',
          'Exploitation conjointe de SQL, Excel avancé, PHP et Python pour l’extraction, le nettoyage et l’analyse statistique des données transactionnelles.',
          'Élaboration d’analyses prédictives pour optimiser les réapprovisionnements, affiner les stratégies de prix et anticiper la demande saisonnière.'
        ]
      }
    ]
  }
];

export const RESUME_EDUCATION: EducationItem[] = [
  {
    id: 'inav',
    degree: 'Diplôme de Technicien Supérieur en Développement Web et Multimédia',
    institution: 'Institut National de l’Audiovisuel (INAV), Alger (Ouled Fayet)',
    period: 'Sept. 2021 — Sept. 2023',
    details: 'Spécialisation en programmation web full-stack, technologies frontend modernes, bases de données relationnelles, multimédia et architectures logicielles.'
  },
  {
    id: 'master-rh',
    degree: 'Master en Gestion des Ressources Humaines',
    institution: 'Université d’Alger 3, Faculté des sciences économiques et de gestion (Dely Brahim)',
    period: 'Sept. 2019 — Juin 2021',
    details: 'Analyse organisationnelle, pilotage des systèmes d’information RH, gestion des compétences et management stratégique.'
  },
  {
    id: 'licence-mgmt',
    degree: 'Licence en Management',
    institution: 'Université d’Alger 3, Faculté des sciences économiques et de gestion (Dely Brahim)',
    period: 'Sept. 2016 — Juil. 2019',
    details: 'Fondamentaux de la gestion d’entreprise, comptabilité, logistique d’approvisionnement, analyse financière et méthodes quantitatives.'
  },
  {
    id: 'bac',
    degree: 'Baccalauréat en Gestion et Économie',
    institution: 'Lycée Houcine Aït Ahmed, Souidania, Alger',
    period: 'Sept. 2013 — Juin 2016',
    details: 'Série Économie et Gestion d’entreprise.'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'AI & Backend Development',
    iconName: 'Cpu',
    skills: [
      { name: 'Python', level: 90, note: 'Data analysis, automation, AI solutions' },
      { name: 'PHP & Laravel', level: 88, note: 'REST APIs, backend logic, ERP modules' },
      { name: 'AI APIs Integration', level: 85, note: 'Gemini, LLM integrations, document OCR' },
      { name: 'RESTful Architecture', level: 92, note: 'Microservices & API security' }
    ]
  },
  {
    title: 'Databases & Data Analytics',
    iconName: 'Database',
    skills: [
      { name: 'SQL & Database Architecture', level: 95, note: 'Complex queries, schema design, index optimization' },
      { name: 'Data Modeling & ETL', level: 92, note: 'Automotive compatibility, cleaning, normalization' },
      { name: 'Microsoft Excel & Modeling', level: 94, note: 'Advanced formulas, pivot analytics, forecasting' },
      { name: 'SPSS', level: 80, note: 'Statistical modeling & empirical analysis' }
    ]
  },
  {
    title: 'Frontend & Mobile',
    iconName: 'Smartphone',
    skills: [
      { name: 'Flutter & Dart', level: 88, note: 'Multiplatform iOS & Android mobile applications' },
      { name: 'React.js & TypeScript', level: 90, note: 'Modern SPAs, hooks, state management' },
      { name: 'HTML5 & CSS3 / Tailwind', level: 95, note: 'Responsive, mobile-first dark-mode layouts' },
      { name: 'JavaScript (ES6+)', level: 90, note: 'Asynchronous programming, event-driven UI' }
    ]
  },
  {
    title: 'Supply Chain & Operations',
    iconName: 'Truck',
    skills: [
      { name: 'International Procurement', level: 92, note: 'End-to-end purchasing & vendor follow-up' },
      { name: 'ALGEX & Bank Pre-Domiciliation', level: 94, note: 'Regulatory compliance & import dossiers' },
      { name: 'Maritime Logistics & Booking', level: 90, note: 'Container volume (CBM) & freight coordination' },
      { name: 'Customs & Transit Clearance', level: 88, note: 'Documentation audit, customs liaison' }
    ]
  }
];

export const LANGUAGES = [
  { name: 'Français', level: 'Courant / Professionnel', code: 'fr', flag: '🇫🇷' },
  { name: 'Arabe', level: 'Langue Maternelle', code: 'ar', flag: '🇩🇿' },
  { name: 'Anglais', level: 'Technique / Professionnel', code: 'en', flag: '🇬🇧' }
];
