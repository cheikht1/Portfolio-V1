import { Experience } from '../types';

export const experiences: Experience[] = [
  {
    id: 'orange-it-supervision',
    company: 'Orange MEA',
    position: {
      fr: 'IT Operations Technician | Fraud & Revenue Assurance | Telecoms & Fintech (Orange Money)',
      en: 'IT Operations Technician | Fraud & Revenue Assurance | Telecoms & Fintech (Orange Money)'
    },
    period: {
      fr: 'Avril 2025 - Present',
      en: 'Apr 2025 - Present'
    },
    startDate: '2025-04',
    endDate: 'present',
    missions: [
      {
        fr: 'Supervision temps reel des infrastructures critiques',
        en: 'Real-time supervision of critical infrastructure'
      },
      {
        fr: 'Gestion des incidents et resolution de problemes',
        en: 'Incident management and rapid issue resolution'
      },
      {
        fr: 'Mise en place de solutions de monitoring avancees',
        en: 'Implemented advanced monitoring solutions'
      },
      {
        fr: 'Analyse des performances et optimisation systeme',
        en: 'Performance analysis and system optimization initiatives'
      }
    ],
    technologies: ['Grafana', 'Prometheus', 'ELK Stack', 'Nagios', 'Splunk'],
    kpi: {
      fr: 'Reduction de 40% du temps de resolution des incidents',
      en: 'Reduced incident resolution time by 40%'
    }
  },
  {
    id: 'bicis-data-analyst',
    company: 'BICIS SUNU Group',
    position: {
      fr: 'Data Analyst',
      en: 'Data Analyst'
    },
    period: {
      fr: 'Aout 2024 - Avril 2025',
      en: 'Aug 2024 - Apr 2025'
    },
    startDate: '2024-08',
    endDate: '2025-04',
    missions: [
      {
        fr: 'Creation de dashboards Power BI pour le suivi de projets strategiques',
        en: 'Built Power BI dashboards to track strategic initiatives'
      },
      {
        fr: 'Analyse de donnees bancaires et reporting',
        en: 'Performed banking data analysis and executive reporting'
      },
      {
        fr: 'Optimisation des processus de gestion des files dattente',
        en: 'Optimized queue management processes across branches'
      },
      {
        fr: 'Support decisionnel pour la direction',
        en: 'Provided data-driven decision support to leadership'
      }
    ],
    technologies: ['Power BI', 'SQL', 'Python', 'Excel', 'DAX'],
    kpi: {
      fr: '15+ dashboards deployes en production',
      en: 'Delivered 15+ dashboards into production'
    }
  }
];
