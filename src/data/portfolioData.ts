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
    id: 'auto-dispatch',
    title: 'Auto Dispatch',
    category: 'web',
    categoryLabel: 'Web & Operations',
    summary: 'Dispatch management web application for planning, assigning, and tracking deliveries in real time.',
    description: 'A web-based dispatch platform that streamlines delivery planning and driver assignment. Centralizes orders, routes, and status updates so operations teams can coordinate shipments from a single dashboard.',
    imageUrl: '/projects/auto-dispatch.png',
    tags: ['Web App', 'Dispatch', 'Dashboard', 'Logistics'],
    liveUrl: '',
    githubUrl: '',
    featured: true,
    keyFeatures: [
      'Central dispatch dashboard for orders and driver assignment',
      'Real-time delivery status tracking',
      'Organized route and shipment planning'
    ],
    date: '2024'
  },
  {
    id: 'gda-web',
    title: 'GDA Web',
    category: 'web',
    categoryLabel: 'Web & SaaS',
    summary: 'Full-featured web platform for managing business operations and day-to-day workflows.',
    description: 'GDA Web is a responsive management platform built to handle core business operations through a clean, modern interface. It brings records, workflows, and reporting together in one place.',
    imageUrl: '/projects/gda-web.png',
    tags: ['Web App', 'Management', 'Dashboard', 'SaaS'],
    liveUrl: '',
    githubUrl: '',
    featured: true,
    keyFeatures: [
      'Centralized business management dashboard',
      'Responsive layout for desktop and tablet',
      'Structured records and workflow management'
    ],
    date: '2024'
  },
  {
    id: 'portage-store',
    title: 'Portage Store',
    category: 'web',
    categoryLabel: 'Web & E-Commerce',
    summary: 'Modern e-commerce storefront with product catalog, cart, and order checkout.',
    description: 'Portage Store is an online shopping platform featuring a product catalog, search and filtering, a shopping cart, and a streamlined checkout experience.',
    imageUrl: '/projects/portage-store.png',
    tags: ['E-Commerce', 'Web App', 'Storefront', 'Checkout'],
    liveUrl: '',
    githubUrl: '',
    featured: true,
    keyFeatures: [
      'Product catalog with search and filtering',
      'Shopping cart and checkout flow',
      'Responsive storefront design'
    ],
    date: '2024'
  },
  {
    id: 'excel-tool',
    title: 'Excel Tool',
    category: 'ai-data',
    categoryLabel: 'Data Automation',
    summary: 'Automation utility for processing, cleaning, and transforming spreadsheet data efficiently.',
    description: 'Excel Tool automates repetitive spreadsheet work such as data cleaning, merging, formatting, and report generation, saving hours of manual processing.',
    imageUrl: '/projects/excel-tool.png',
    tags: ['Excel', 'Automation', 'Data Processing', 'Reporting'],
    liveUrl: '',
    githubUrl: '',
    featured: false,
    keyFeatures: [
      'Automated data cleaning and transformation',
      'Bulk spreadsheet processing',
      'Consistent, repeatable report generation'
    ],
    date: '2024'
  },
  {
    id: 'gda-mobile-app',
    title: 'GDA Mobile App',
    category: 'mobile',
    categoryLabel: 'Mobile App',
    summary: 'Cross-platform mobile companion app for the GDA platform, available on Android and iOS.',
    description: 'GDA Mobile brings the GDA platform to phones and tablets, letting users manage their work and access key features on the go with a native mobile experience.',
    imageUrl: '/projects/gda-mobile-app.png',
    tags: ['Mobile App', 'Android', 'iOS', 'Cross-Platform'],
    keyFeatures: [
      'Native mobile experience on Android and iOS',
      'Access to core GDA features on the go',
      'Clean, touch-friendly interface'
    ],
    date: '2024'
  },
  {
    id: 'card-scanner',
    title: 'Card Scanner',
    category: 'mobile',
    categoryLabel: 'Mobile App',
    summary: 'Mobile app that scans and digitizes business cards into organized contacts.',
    description: 'Card Scanner uses the phone camera to capture business cards, extract contact details, and store them in a clean, searchable digital list.',
    imageUrl: '/projects/card-scanner.png',
    tags: ['Mobile App', 'Scanner', 'OCR', 'Contacts'],
    keyFeatures: [
      'Camera-based business card scanning',
      'Automatic contact detail extraction',
      'Organized, searchable contact list'
    ],
    date: '2024'
  },
  {
    id: 'task-manager',
    title: 'Task Manager',
    category: 'mobile',
    categoryLabel: 'Mobile App',
    summary: 'Mobile productivity app for organizing tasks, setting priorities, and tracking progress.',
    description: 'Task Manager helps users stay organized with task lists, priorities, and progress tracking in a simple, focused mobile interface.',
    imageUrl: '/projects/task-manager.png',
    tags: ['Mobile App', 'Productivity', 'Tasks', 'To-Do'],
    keyFeatures: [
      'Create and organize task lists',
      'Set priorities and deadlines',
      'Track progress and completed tasks'
    ],
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
