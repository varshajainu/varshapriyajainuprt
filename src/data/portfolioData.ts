import { Project, ExperienceItem, SkillCategory, Certification, EducationItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Varsha Priya Jainu',
  role: 'Senior Software Engineer',
  tagline: 'Building resilient enterprise microservices, secure Java backends, and responsive Angular interfaces.',
  location: 'Visakhapatnam, India',
  email: 'varshafame336@gmail.com',
  phone: '+91 6281627785',
  github: 'https://github.com/varshajainu',
  linkedin: 'https://www.linkedin.com/in/varsha-priya-jainu-317193210/',
  status: 'Open to Senior & Full-Stack Engineering Roles',
  yearsOfExperience: '2+ Years',
  summary: `Software Engineer with 2+ years of experience developing Java Full Stack applications using Spring Boot, Angular, REST APIs, and Microservices. Proven success in resolving critical security vulnerabilities, optimizing Maven build pipelines, and delivering scalable end-to-end solutions that improve application reliability and development efficiency. Currently expanding expertise in AI/ML, System Design, and Data Structures & Algorithms to build intelligent, scalable software products.`
};

export const HIGHLIGHT_STATS = [
  {
    value: '100%',
    label: 'CVE Alerts Eliminated',
    description: 'Resolved 4 high/moderate CVEs up to 7.5 CVSS'
  },
  {
    value: '100%',
    label: 'Maven Build Success',
    description: 'Diagnosed classpath & dependency conflicts'
  },
  {
    value: '+20%',
    label: 'Feature Delivery Velocity',
    description: 'Streamlined Angular & Spring Boot workflows'
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'capgemini',
    role: 'Senior Software Engineer',
    company: 'Capgemini',
    location: 'India',
    period: 'September 2024 – Present',
    current: true,
    type: 'Full-Time',
    description: 'Leading microservice hardening, full-stack enterprise feature engineering, and CI/CD build optimization across Java and Angular ecosystems.',
    achievements: [
      'Remediated 4 high and moderate severity CVEs (CVSS up to 7.5) in a Spring Boot microservice, eliminating 100% of associated security alerts and improving compliance with enterprise security standards.',
      'Diagnosed and resolved complex Maven dependency conflicts, version mismatches, and classpath issues, achieving a 100% build success rate and significantly reducing deployment delays.',
      'Designed and developed Angular frontend components and Spring Boot backend services supporting 3+ business workflows, improving application usability and accelerating feature delivery by approximately 20%.',
      'Developed and integrated RESTful APIs to enable seamless communication between frontend and backend systems, improving data consistency and operational efficiency.',
      'Applied secure coding practices and dependency management strategies to improve maintainability and reduce technical debt across enterprise applications.'
    ],
    skills: [
      'Java',
      'Spring Boot',
      'Angular',
      'REST APIs',
      'Microservices',
      'Maven',
      'CVE Remediation',
      'CI/CD',
      'Secure Coding'
    ],
    metrics: [
      { label: 'Security Compliance', value: '100%' },
      { label: 'Workflows Automated', value: '3+' },
      { label: 'Build Success Rate', value: '100%' }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'civic-core',
    title: 'CivicCore',
    subtitle: 'Citizen Issue Resolution & Municipal Workflow Management Engine',
    description: 'A full-stack municipal governance platform that streamlines citizen complaint reporting, department routing, and real-time resolution tracking with role-based workflows.',
    longDescription: 'CivicCore solves citizen-municipality communication bottlenecks through automated ticket lifecycle management. Built with a decoupled RESTful backend and intuitive user interface, it features status audit trails, priority queueing, and department assignment matrices.',
    tags: ['Java', 'Spring Boot', 'REST APIs', 'Angular / TypeScript', 'PostgreSQL / SQL', 'Security & RBAC'],
    featured: true,
    githubUrl: 'https://github.com/varshajainu/civic-core',
    category: 'Full Stack',
    highlights: [
      'Engineered clean RESTful endpoints handling citizen grievance intake, attachment uploads, and status transitions.',
      'Implemented role-based access control (RBAC) separating Citizen, Municipal Officer, and Admin authority levels.',
      'Optimized query performance for geospatial and category-based issue aggregation and filtering.',
      'Structured modular Spring Boot service architecture designed for high availability and low latency.'
    ],
    architecture: [
      'Backend: Spring Boot 3.x with MVC architecture and RESTful resource endpoints',
      'Database: Relational SQL schema with foreign key constraints and transactional integrity',
      'Security: JWT-based stateless authentication and authorization middleware',
      'Frontend: Responsive component hierarchy with real-time ticket state indicators'
    ]
  },
  {
    id: 'trade-stock',
    title: 'TradeStock',
    subtitle: 'Real-Time Stock Trading & Portfolio Simulation Engine',
    description: 'An interactive trading simulator providing live market data tracking, instantaneous mock order execution, portfolio valuation, and performance analytics.',
    longDescription: 'TradeStock provides investors and analysts with a low-latency environment to test trading strategies without capital risk. Designed with mathematical precision for portfolio balancing, profit/loss calculations, and historical trade logs.',
    tags: ['Java', 'Spring Boot', 'JavaScript / Angular', 'REST APIs', 'Data Analysis', 'Finance Engine'],
    featured: true,
    githubUrl: 'https://github.com/varshajainu/TradeStock',
    category: 'Full Stack',
    highlights: [
      'Constructed order matching and position tracking logic with instant balance and margin verification.',
      'Designed real-time portfolio valuation engine calculating P&L, percentage gains, and asset distribution.',
      'Integrated market data feeds with clean caching layers to reduce redundant API overhead.',
      'Built clean user views for watchlist management, order history, and interactive financial metric cards.'
    ],
    architecture: [
      'Backend: Spring Boot microservices handling order books and user ledger updates',
      'Data Analytics: Structured numerical processing algorithms for ROI and volatility calculations',
      'API Design: Standardized JSON payloads with rigorous validation and error handling',
      'Client: Minimalist reactive UI with high-contrast numerical indicators'
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Programming Languages',
    iconName: 'Code2',
    skills: [
      { name: 'Java', level: 'Advanced' },
      { name: 'JavaScript', level: 'Proficient' },
      { name: 'Python', level: 'Proficient' },
      { name: 'SQL', level: 'Advanced' },
      { name: 'HTML5', level: 'Advanced' },
      { name: 'CSS3', level: 'Advanced' }
    ]
  },
  {
    category: 'Frameworks & Libraries',
    iconName: 'Layers',
    skills: [
      { name: 'Spring Boot', level: 'Advanced' },
      { name: 'Spring MVC', level: 'Advanced' },
      { name: 'Angular', level: 'Advanced' },
      { name: 'Bootstrap', level: 'Proficient' },
      { name: 'NumPy', level: 'Proficient' },
      { name: 'Pandas', level: 'Proficient' }
    ]
  },
  {
    category: 'Backend & Microservices',
    iconName: 'Server',
    skills: [
      { name: 'REST APIs', level: 'Advanced' },
      { name: 'Microservices Architecture', level: 'Advanced' },
      { name: 'API Integration', level: 'Advanced' },
      { name: 'JSON / Payload Design', level: 'Advanced' },
      { name: 'Data Structures & Algorithms', level: 'Proficient' },
      { name: 'System Design', level: 'Proficient' }
    ]
  },
  {
    category: 'Build & DevOps',
    iconName: 'GitBranch',
    skills: [
      { name: 'Git & GitHub', level: 'Advanced' },
      { name: 'Maven Build Pipelines', level: 'Advanced' },
      { name: 'CI/CD Pipelines', level: 'Proficient' },
      { name: 'Dependency Management', level: 'Advanced' },
      { name: 'Build Optimization', level: 'Advanced' },
      { name: 'Classpath & Conflict Resolution', level: 'Advanced' }
    ]
  },
  {
    category: 'Security & Governance',
    iconName: 'ShieldCheck',
    skills: [
      { name: 'CVE Vulnerability Remediation', level: 'Advanced' },
      { name: 'CVSS Impact Assessment', level: 'Advanced' },
      { name: 'Secure Coding Practices', level: 'Advanced' },
      { name: 'Dependency Vulnerability Auditing', level: 'Advanced' },
      { name: 'Role-Based Access Control (RBAC)', level: 'Advanced' }
    ]
  },
  {
    category: 'Cloud & Emerging AI',
    iconName: 'Cpu',
    skills: [
      { name: 'Azure AI', level: 'Proficient' },
      { name: 'Generative AI', level: 'Proficient' },
      { name: 'Model Context Protocol (MCP)', level: 'Proficient' },
      { name: 'Agent Development Kit (ADK)', level: 'Proficient' },
      { name: 'Machine Learning', level: 'Familiar' },
      { name: 'Google Cloud Gen AI', level: 'Proficient' }
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'azure-ai',
    title: 'Microsoft Certified: Azure AI Engineer Associate',
    issuer: 'Microsoft',
    date: 'Credential Verified',
    description: 'Demonstrates industry proficiency in designing and implementing AI solutions using Azure Cognitive Services, Azure OpenAI, natural language processing, and computer vision.',
    badgeText: 'Associate Level',
    skills: ['Azure AI', 'Cognitive Services', 'Generative AI', 'Cloud Solution Design']
  },
  {
    id: 'google-adk-mcp',
    title: 'Location Intelligence ADK Agent with MCP Servers Workshop',
    issuer: 'Conducted by GeeksforGeeks Connect & Google',
    date: 'Certified Workshop',
    description: 'Hands-on architectural workshop focused on building autonomous location intelligence agents using Google Maps Platform, BigQuery spatial queries, and Model Context Protocol (MCP) server connectivity.',
    badgeText: 'Google & GFG Connect',
    skills: ['Model Context Protocol', 'Google Maps API', 'BigQuery', 'Agentic AI']
  },
  {
    id: 'google-genai-academy',
    title: 'Google Cloud: Gen AI Academy APAC 2026 - Cohort 2',
    issuer: 'Google Cloud',
    date: 'APAC 2026',
    description: 'Intensive immersion in state-of-the-art Generative AI system architectures, foundation model tuning, prompt orchestration, and production deployment on Google Cloud.',
    badgeText: 'APAC Cohort 2',
    skills: ['Google Cloud', 'Generative AI', 'LLM Architectures', 'Vertex AI']
  }
];

export const EDUCATION: EducationItem[] = [
  {
    institution: 'Gayatri Vidya Parishad College of Engineering for Women (GVPCEW)',
    degree: 'Bachelor of Technology (B.Tech)',
    score: '7.98 CGPA',
    period: '2020 – 2024',
    location: 'Visakhapatnam, India',
    highlights: [
      'Graduated with distinction (7.98 CGPA) in Engineering curriculum.',
      'Strong academic foundation in Data Structures, Algorithms, Object-Oriented Analysis & Design, Database Systems, and Computer Networks.',
      'Active participant in software engineering hackathons, technical symposiums, and engineering coding clubs.'
    ]
  }
];
