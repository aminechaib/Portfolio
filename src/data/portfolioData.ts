import { Project, ExperienceItem, EducationItem, SkillCategory } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Amine CHAÏB',
  title: 'Full-Stack Developer',
  roleFr: 'Développeur Full-Stack',
  roleAr: 'مطور برمجيات متكامل',
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
    en: 'Versatile tech professional specialized in relational database, data analytics, modern web & mobile development (React, Flutter, Laravel, Python). Proven track record managing mission-critical inventory databases, optimizing supply-chain logistics, and building high-performance e-commerce integrations.',
    fr: 'Professionnel polyvalent disposant d’une solide expérience en gestion et modélisation de bases de données, analyse de données, développement web & mobile moderne (React, Flutter, Laravel, Python). Expertise avérée dans l’optimisation des flux logistiques, le dédouanement international et les intégrations e-commerce.',
    ar: 'متعدد المهارات، متخصص في قواعد البيانات العلائقية، تحليل البيانات، وتطوير تطبيقات الويب والهاتف المحمول (React، Flutter، Laravel، Python). خبرة مؤكدة في إدارة سلاسل الإمداد، الاستيراد، وتطوير منصات التجارة الإلكترونية.'
  }
};

export const INITIAL_PROJECTS: Project[] = [
  {
    id: 'gda-web',
    title: 'GDA — Gestion d’Arrivage',
    category: 'web',
    categoryLabel: 'Web Platform',
    summary: 'Arrival management platform that stores millions of lines and concurrent arrivals with prices and dates, plus fast checking and export.',
    description: 'GDA (Gestion d’Arrivage) is a web platform built to manage arrival records at scale. It handles millions of lines while storing concurrent arrivals, prices, and dates. Records can be checked quickly and exported easily, making day-to-day arrival management fast and reliable.',
    imageUrl: '/projects/gda-web.png',
    tags: ['Web App', 'SQL', 'Data Management', 'Arrivage', 'Export'],
    liveUrl: 'https://gda.sarlpro.com/',
    githubUrl: '',
    featured: true,
    keyFeatures: [
      'Handles millions of lines and concurrent arrivals',
      'Stores prices and dates for every arrival',
      'Fast search and easy export of arrival data'
    ],
    date: '2025 - Present'
  },
  {
    id: 'gda-mobile-app',
    title: 'GDA Mobile (Android)',
    category: 'mobile',
    categoryLabel: 'Android App',
    summary: 'Dedicated Android app for GDA to check and manage arrival data from a phone.',
    description: 'The GDA mobile app brings arrival management to Android devices. Users can access arrival records, prices, and dates on the go. Android only — no iOS version.',
    imageUrl: '/projects/gda-mobile-app.png',
    tags: ['Android', 'Mobile App', 'Data Management'],
    keyFeatures: [
      'Native Android application',
      'Access GDA arrival records on the go',
      'Check prices and dates from mobile'
    ],
    date: '2025'
  },
  {
    id: 'label-maker',
    title: 'Label Maker',
    category: 'web',
    categoryLabel: 'Web Tool',
    summary: 'TypeScript web app with a modern UI for building dynamic labels from Excel data.',
    description: 'Label Maker is a TypeScript application with a clean, modern interface for generating dynamic labels based on Excel data. Import a spreadsheet, map the fields, and produce ready-to-print labels in a few steps.',
    imageUrl: '/projects/label-maker.png',
    tags: ['TypeScript', 'Excel', 'Label Printing', 'Web App'],
    liveUrl: 'https://ac-label-maker.vercel.app/',
    githubUrl: '',
    featured: true,
    keyFeatures: [
      'Dynamic labels generated from Excel data',
      'Modern, easy-to-use interface',
      'Built with TypeScript'
    ],
    date: '2026'
  },

  {
    id: 'client-activity-dashboard',
    title: 'Client Activity Dashboard',
    category: 'ai-data',
    categoryLabel: 'Data & Operations',
    summary: 'Analyzes client activity based on sales orders or invoices, tracking yearly and monthly transactions, client performance, and revenue.',
    description: 'Client Activity Analytics Dashboard transforms Excel order or invoice data into interactive business insights. It provides an overview of client activity, invoice volumes, yearly and monthly trends, and chiffre d’affaires. Users can map their Excel columns, filter results by year and client, identify top-performing customers, and export analytical reports.',
    imageUrl: '/projects/client-activity-dashboard.png',
    tags: ['Python', 'Streamlit', 'Pandas', 'Plotly', 'Excel', 'Data Analytics'],
    liveUrl: 'https://partagesarlprogit-dlbtkftpivvksvxtmyxezv.streamlit.app/',
    githubUrl: '',
    featured: true,
    keyFeatures: [
      'Imports and analyzes Excel orders or invoice records',
      'Flexible Excel column mapping',
      'Tracks client activity and invoice volumes by year',
      'Visualizes monthly transaction trends',
      'Calculates client revenue and identifies top customers',
      'Filters analytics by year and client',
      'Exports client summaries and analytical reports to Excel'
    ],
    date: '2024'
  },

  {
    id: 'excel-tool',
    title: 'Excel Tool',
    category: 'ai-data',
    categoryLabel: 'Data Analysis',
    summary: 'Builds pivot tables from two Excel files — orders and stock — to make manual dispatch quantities easy.',
    description: 'Excel Tool is structured to generate a pivot table from two files, orders and stock. The resulting view makes it easy to read and manually decide dispatch quantities.',
    imageUrl: '/projects/excel-tool.png',
    tags: ['Python', 'Streamlit', 'Excel', 'Pivot Table', 'Data Analysis'],
    liveUrl: 'https://ac-analyse.streamlit.app/',
    githubUrl: '',
    featured: false,
    keyFeatures: [
      'Combines orders and stock Excel files',
      'Generates a clear pivot table',
      'Simplifies manual dispatch quantity decisions'
    ],
    date: '2024'
  },
  {
    id: 'sarlpro',
    title: 'SARL PRO — Company Website',
    category: 'web',
    categoryLabel: 'Web & Marketing',
    summary: 'Static single-page company website built with Vue.js to present the company.',
    description: 'A static single-page application built with Vue.js that presents SARL PRO and its company information. Fast to load, responsive, and focused on a clear company presentation.',
    imageUrl: '/projects/sarlpro.png',
    tags: ['Vue.js', 'SPA', 'Static Site', 'Responsive'],
    liveUrl: 'https://sarlpro.com/',
    githubUrl: '',
    featured: false,
    keyFeatures: [
      'Built as a Vue.js single-page app',
      'Static, fast-loading company website',
      'Responsive presentation of the company'
    ],
    date: '2025'
  },
  {
    id: 'portage-store',
    title: 'Portage Store',
    category: 'web',
    categoryLabel: 'Web & E-Commerce',
    summary: 'Robust e-commerce platform with a Laravel API and Next.js frontend, including client ordering, order tracking, and an admin dashboard.',
    description: 'Portage Store is a full e-commerce platform built with a Laravel backend API and a Next.js frontend. Clients can order and track their orders, while the admin dashboard manages the website, orders, and stock. Fully responsive on phones.',
    imageUrl: '/projects/portage-store.png',
    tags: ['Laravel', 'Next.js', 'REST API', 'E-Commerce', 'Admin Dashboard'],
    liveUrl: 'https://landing-six-jade.vercel.app/',
    githubUrl: '',
    featured: true,
    keyFeatures: [
      'Client-side ordering and order tracking',
      'Admin dashboard to manage website, orders, and stock',
      'Laravel API backend with Next.js frontend',
      'Fully responsive on phones'
    ],
    date: '2026'
  },
  {
    id: 'card-scanner',
    title: 'Card Scanner',
    category: 'mobile',
    categoryLabel: 'Android App',
    summary: 'Android app that scans and digitizes business cards into organized contacts.',
    description: 'Card Scanner uses the phone camera to capture business cards, extract contact details, and store them in a clean, searchable digital list. Android only.',
    imageUrl: '/projects/card-scanner.png',
    tags: ['Android', 'Mobile App', 'Scanner', 'OCR'],
    keyFeatures: [
      'Camera-based business card scanning',
      'Automatic contact detail extraction',
      'Organized, searchable contact list'
    ],
    date: '2026'
  },
  {
    id: 'task-manager',
    title: 'Task Manager',
    category: 'mobile',
    categoryLabel: 'Android App',
    summary: 'Android productivity app for organizing tasks, setting priorities, and tracking progress.',
    description: 'Task Manager helps users stay organized with task lists, priorities, and progress tracking in a simple, focused Android interface.',
    imageUrl: '/projects/task-manager.png',
    tags: ['Android', 'Mobile App', 'Productivity', 'Tasks'],
    keyFeatures: [
      'Create and organize task lists',
      'Set priorities and deadlines',
      'Track progress and completed tasks'
    ],
    date: '2025'
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
      { name: 'Flutter & Dart', level: 88, note: 'Android mobile applications' },
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
