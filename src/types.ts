export type Theme = 'dark' | 'light';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  tags: string[];
  featured: boolean;
  githubUrl: string;
  liveUrl?: string;
  highlights: string[];
  architecture: string[];
  category: 'Full Stack' | 'Backend & Security' | 'AI & Cloud';
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  current: boolean;
  type: string;
  description: string;
  achievements: string[];
  skills: string[];
  metrics: {
    label: string;
    value: string;
  }[];
}

export interface SkillCategory {
  category: string;
  iconName: string;
  skills: {
    name: string;
    level?: 'Advanced' | 'Proficient' | 'Familiar';
    highlight?: boolean;
  }[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  description: string;
  badgeText: string;
  skills: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  score: string;
  period: string;
  location: string;
  highlights: string[];
}
