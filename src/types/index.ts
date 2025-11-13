export type ProfileType = 'data' | 'itops' | 'devops';

export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProfileType[];
  technologies: string[];
  image?: string;
  demoUrl?: string;
  codeUrl?: string;
  dashboardUrl?: string;
  impact?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  startDate: string;
  endDate: string;
  missions: string[];
  technologies: string[];
  kpi?: string;
}

export interface Certification {
  id: string;
  name: string;
  organization: string;
  date: string;
  icon?: string;
  url?: string;
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
