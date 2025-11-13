import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'fraud-detection',
    title: 'Système de détection de fraude temps réel',
    description: 'Développement d\'un système de détection de fraude en temps réel pour Orange MEA, permettant d\'identifier et de prévenir les transactions frauduleuses avec une précision élevée.',
    category: ['data', 'itops'],
    technologies: ['Python', 'Machine Learning', 'Real-time Analytics', 'Grafana', 'Prometheus'],
    impact: 'Réduction de 35% des fraudes détectées'
  },
  {
    id: 'dashboard-cbs',
    title: 'Dashboard migration CBS',
    description: 'Création d\'un dashboard Power BI pour le suivi de la migration du Core Banking System (CBS) à BICIS, permettant un monitoring en temps réel de l\'avancement et des métriques clés.',
    category: ['data'],
    technologies: ['Power BI', 'SQL', 'DAX', 'Data Modeling'],
    impact: 'Amélioration de 40% de la visibilité sur le projet'
  },
  {
    id: 'dashboard-gfa',
    title: 'Dashboard GFA - Gestion files d\'attente',
    description: 'Dashboard interactif pour la gestion et l\'optimisation des files d\'attente en agence bancaire, avec analyse des temps d\'attente et recommandations d\'optimisation.',
    category: ['data'],
    technologies: ['Power BI', 'Python', 'SQL', 'Statistical Analysis'],
    impact: 'Réduction de 25% du temps d\'attente moyen'
  },
  {
    id: 'etl-pipeline',
    title: 'Pipeline ETL automatisé',
    description: 'Conception et mise en place d\'un pipeline ETL robuste pour l\'extraction, la transformation et le chargement de données multi-sources avec orchestration automatisée.',
    category: ['data', 'devops'],
    technologies: ['Python', 'Apache Airflow', 'SQL', 'Docker', 'AWS S3'],
    impact: 'Automatisation complète du processus de données'
  },
  {
    id: 'aws-architecture',
    title: 'Architecture cloud AWS multi-région',
    description: 'Design et déploiement d\'une architecture cloud AWS hautement disponible et résiliente, avec réplication multi-région et disaster recovery.',
    category: ['devops'],
    technologies: ['AWS', 'Terraform', 'CloudFormation', 'VPC', 'EC2', 'RDS'],
    impact: 'SLA de 99.99% atteint'
  },
  {
    id: 'monitoring-solution',
    title: 'Solution de monitoring Grafana/Prometheus',
    description: 'Mise en place d\'une solution de monitoring complète avec Grafana et Prometheus pour la supervision des infrastructures critiques et alerting proactif.',
    category: ['itops', 'devops'],
    technologies: ['Grafana', 'Prometheus', 'Kubernetes', 'Docker', 'AlertManager'],
    impact: 'Détection 60% plus rapide des incidents'
  }
];
