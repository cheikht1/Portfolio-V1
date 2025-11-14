import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'fraud-detection',
    title: {
      fr: 'Systeme de detection de fraude temps reel',
      en: 'Real-time Fraud Detection System'
    },
    description: {
      fr: 'Developpement dun systeme de detection de fraude en temps reel pour Orange MEA, permettant didentifier et de prevenir les transactions frauduleuses avec une precision elevee.',
      en: 'Developed a real-time fraud detection system for Orange MEA to identify and prevent fraudulent transactions with high accuracy.'
    },
    category: ['data', 'itops'],
    technologies: ['Python', 'Machine Learning', 'Real-time Analytics', 'Grafana', 'Prometheus'],
    impact: {
      fr: 'Reduction de 35% des fraudes detectees',
      en: 'Reduced detected fraud by 35%'
    }
  },
  {
    id: 'dashboard-cbs',
    title: {
      fr: 'Dashboard migration CBS',
      en: 'CBS Migration Dashboard'
    },
    description: {
      fr: 'Creation dun dashboard Power BI pour le suivi de la migration du Core Banking System (CBS) a BICIS, offrant un monitoring temps reel de lavancement et des metriques cles.',
      en: 'Produced a Power BI dashboard tracking the CBS migration at BICIS with real-time progress and key metrics monitoring.'
    },
    category: ['data'],
    technologies: ['Power BI', 'SQL', 'DAX', 'Data Modeling'],
    impact: {
      fr: 'Amelioration de 40% de la visibilite sur le projet',
      en: 'Improved project visibility by 40%'
    }
  },
  {
    id: 'dashboard-gfa',
    title: {
      fr: 'Dashboard GFA - Gestion files dattente',
      en: 'GFA Queue Management Dashboard'
    },
    description: {
      fr: 'Dashboard interactif pour la gestion et loptimisation des files dattente en agence bancaire, avec analyse des temps dattente et recommandations daction.',
      en: 'Interactive dashboard to manage and optimize bank branch queues with wait time analysis and actionable recommendations.'
    },
    category: ['data'],
    technologies: ['Power BI', 'Python', 'SQL', 'Statistical Analysis'],
    impact: {
      fr: 'Reduction de 25% du temps dattente moyen',
      en: 'Cut average waiting time by 25%'
    }
  },
  {
    id: 'etl-pipeline',
    title: {
      fr: 'Pipeline ETL automatise',
      en: 'Automated ETL Pipeline'
    },
    description: {
      fr: 'Conception et mise en place dun pipeline ETL robuste pour lextraction, la transformation et le chargement de donnees multi-sources avec orchestration automatisee.',
      en: 'Designed and delivered a robust ETL pipeline handling multi-source extraction, transformation, and loading with automated orchestration.'
    },
    category: ['data', 'devops'],
    technologies: ['Python', 'Apache Airflow', 'SQL', 'Docker', 'AWS S3'],
    impact: {
      fr: 'Automatisation complete du processus de donnees',
      en: 'Achieved full automation of the data ingestion process'
    }
  },
  {
    id: 'aws-architecture',
    title: {
      fr: 'Architecture cloud AWS multi-region',
      en: 'AWS Multi-region Cloud Architecture'
    },
    description: {
      fr: 'Design et deploiement dune architecture cloud AWS hautement disponible et resiliente, avec replication multi-region et capacites de reprise apres sinistre.',
      en: 'Designed and deployed a highly available AWS architecture with multi-region replication and disaster recovery capabilities.'
    },
    category: ['devops'],
    technologies: ['AWS', 'Terraform', 'CloudFormation', 'VPC', 'EC2', 'RDS'],
    impact: {
      fr: 'SLA de 99.99% atteint',
      en: 'Achieved a 99.99% service-level agreement'
    }
  },
  {
    id: 'monitoring-solution',
    title: {
      fr: 'Solution de monitoring Grafana/Prometheus',
      en: 'Grafana/Prometheus Monitoring Solution'
    },
    description: {
      fr: 'Mise en place dune solution de monitoring complete avec Grafana et Prometheus pour la supervision des infrastructures critiques et un alerting proactif.',
      en: 'Implemented a comprehensive Grafana and Prometheus monitoring solution for critical infrastructure with proactive alerting.'
    },
    category: ['itops', 'devops'],
    technologies: ['Grafana', 'Prometheus', 'Kubernetes', 'Docker', 'AlertManager'],
    impact: {
      fr: 'Detection 60% plus rapide des incidents',
      en: 'Improved incident detection speed by 60%'
    }
  }
];
