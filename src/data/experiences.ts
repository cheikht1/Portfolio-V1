import { Experience } from '../types';

export const experiences: Experience[] = [
  {
    id: 'orange-it-supervision',
    company: 'Orange MEA',
    position: 'Technicien Supervision IT',
    period: 'Avril 2025 - Présent',
    startDate: '2025-04',
    endDate: 'present',
    missions: [
      'Supervision temps réel des infrastructures critiques',
      'Gestion des incidents et résolution de problèmes',
      'Mise en place de solutions de monitoring avancées',
      'Analyse des performances et optimisation système'
    ],
    technologies: ['Grafana', 'Prometheus', 'ELK Stack', 'Nagios', 'Splunk'],
    kpi: 'Réduction de 40% du temps de résolution des incidents'
  },
  {
    id: 'bicis-data-analyst',
    company: 'BICIS SUNU Group',
    position: 'Data Analyst',
    period: 'Août 2024 - Avril 2025',
    startDate: '2024-08',
    endDate: '2025-04',
    missions: [
      'Création de dashboards Power BI pour le suivi de projets stratégiques',
      'Analyse de données bancaires et reporting',
      'Optimisation des processus de gestion des files d\'attente',
      'Support décisionnel pour la direction'
    ],
    technologies: ['Power BI', 'SQL', 'Python', 'Excel', 'DAX'],
    kpi: '15+ dashboards déployés en production'
  }
];
