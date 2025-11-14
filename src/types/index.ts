export type ProfileType = 'data' | 'itops' | 'devops';

export interface LocalizedText {
  fr: string;
  en: string;
}

export interface Project {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  category: ProfileType[];
  technologies: string[];
  image?: string;
  demoUrl?: string;
  codeUrl?: string;
  dashboardUrl?: string;
  impact?: LocalizedText;
}

export interface Experience {
  id: string;
  company: string;
  position: LocalizedText;
  period: LocalizedText;
  startDate: string;
  endDate: string;
  missions: LocalizedText[];
  technologies: string[];
  kpi?: LocalizedText;
}

export interface Certification {
  id: string;
  name: string;
  organization: string;
  date: string;
  icon?: string;
  url?: string;
}

export interface Education {
  id: string;
  school: LocalizedText;
  degree: LocalizedText;
  period: LocalizedText;
  startDate: string;
  endDate: string;
  location?: LocalizedText;
  highlights?: LocalizedText[];
  skills?: string[];
}

export interface Skill {
  name: string;
  level: number;
  category: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  website: string;
  linkedin?: string;
  github?: string;
}
