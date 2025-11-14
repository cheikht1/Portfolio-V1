import { Education } from '../types';

export const education: Education[] = [
  {
    id: 'swiss-umef-master-finance',
    school: {
      fr: 'SWISS UMEF University of Applied Sciences Institute',
      en: 'SWISS UMEF University of Applied Sciences Institute'
    },
    degree: {
      fr: 'Master, Finance et Banque',
      en: 'Master\'s Degree, Finance and Banking'
    },
    period: {
      fr: 'Nov. 2025 - Juil. 2027',
      en: 'Nov 2025 - Jul 2027'
    },
    startDate: '2025-11',
    endDate: '2027-07',
    location: {
      fr: 'Geneve, Suisse',
      en: 'Geneva, Switzerland'
    },
    highlights: [
      {
        fr: 'Specialisation en gestion des risques financiers et conformite bancaire',
        en: 'Specialization in financial risk management and banking compliance'
      },
      {
        fr: 'Projet de recherche sur les modeles predictifs pour la detection de fraude en fintech',
        en: 'Research project on predictive models for fintech fraud detection'
      }
    ]
  },
  {
    id: 'esp-dakar-ai-master',
    school: {
      fr: 'Ecole Superieure Polytechnique de Dakar',
      en: 'Ecole Superieure Polytechnique de Dakar'
    },
    degree: {
      fr: 'Master, Intelligence artificielle et Big Data',
      en: 'Master\'s Degree, Artificial Intelligence and Big Data'
    },
    period: {
      fr: 'Nov. 2023 - Juin 2025',
      en: 'Nov 2023 - Jun 2025'
    },
    startDate: '2023-11',
    endDate: '2025-06',
    location: {
      fr: 'Dakar, Senegal',
      en: 'Dakar, Senegal'
    },
    highlights: [
      {
        fr: 'Conception de pipelines de donnees scalables pour l evenementiel telecom',
        en: 'Designed scalable data pipelines for telecom event processing'
      },
      {
        fr: 'Participation a des projets collaboratifs en machine learning appliquee a la finance',
        en: 'Led collaborative machine learning initiatives applied to finance use cases'
      }
    ],
    skills: ['Microsoft Power BI', 'DevOps', 'Machine Learning', 'Big Data']
  },
  {
    id: 'orange-digital-center',
    school: {
      fr: 'Orange Digital Center Senegal',
      en: 'Orange Digital Center Senegal'
    },
    degree: {
      fr: 'AWS re/Start - DevOps & Cloud Computing',
      en: 'AWS re/Start - DevOps & Cloud Computing'
    },
    period: {
      fr: 'Mars 2024 - Juil. 2024',
      en: 'Mar 2024 - Jul 2024'
    },
    startDate: '2024-03',
    endDate: '2024-07',
    location: {
      fr: 'Dakar, Senegal',
      en: 'Dakar, Senegal'
    },
    highlights: [
      {
        fr: 'Immersion intensive sur l ecosysteme AWS et les bonnes pratiques DevOps',
        en: 'Immersive training on the AWS ecosystem and DevOps best practices'
      },
      {
        fr: 'Mise en pratique de l infrastructure as code et des evenements serverless',
        en: 'Hands-on implementation of infrastructure as code and serverless patterns'
      }
    ],
    skills: ['AWS Cloud', 'Terraform', 'CI/CD', 'Observability']
  },
  {
    id: 'universite-thies-licence',
    school: {
      fr: 'Universite Iba Der THIAM de Thies',
      en: 'Universite Iba Der THIAM de Thies'
    },
    degree: {
      fr: 'Licence, Mathematics and Computer Science',
      en: 'Bachelor\'s Degree, Mathematics and Computer Science'
    },
    period: {
      fr: 'Fevr. 2020 - Mai 2023',
      en: 'Feb 2020 - May 2023'
    },
    startDate: '2020-02',
    endDate: '2023-05',
    location: {
      fr: 'Thies, Senegal',
      en: 'Thies, Senegal'
    },
    highlights: [
      {
        fr: 'Fondamentaux solides en mathematiques appliquees et algorithmique',
        en: 'Acquired strong foundations in applied mathematics and algorithm design'
      },
      {
        fr: 'Projets academiques en analyse de donnees et developpement logiciel',
        en: 'Completed academic projects in data analysis and software development'
      }
    ]
  }
];
