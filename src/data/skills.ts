import { Skill } from '../types';

export const skillsData = {
  dataAnalysis: [
    { name: 'Python', level: 90, category: 'Data Analysis' },
    { name: 'SQL', level: 95, category: 'Data Analysis' },
    { name: 'Pandas', level: 85, category: 'Data Analysis' },
    { name: 'NumPy', level: 85, category: 'Data Analysis' },
    { name: 'R', level: 70, category: 'Data Analysis' }
  ],
  cloudDevops: [
    { name: 'AWS', level: 85, category: 'Cloud & DevOps' },
    { name: 'Docker', level: 90, category: 'Cloud & DevOps' },
    { name: 'Kubernetes', level: 75, category: 'Cloud & DevOps' },
    { name: 'Terraform', level: 80, category: 'Cloud & DevOps' },
    { name: 'CI/CD', level: 85, category: 'Cloud & DevOps' }
  ],
  visualization: [
    { name: 'Power BI', level: 95, category: 'Visualization' },
    { name: 'Tableau', level: 85, category: 'Visualization' },
    { name: 'Grafana', level: 90, category: 'Visualization' },
    { name: 'D3.js', level: 70, category: 'Visualization' },
    { name: 'Matplotlib', level: 80, category: 'Visualization' }
  ],
  bigData: [
    { name: 'Apache Spark', level: 80, category: 'Big Data' },
    { name: 'Hadoop', level: 75, category: 'Big Data' },
    { name: 'Kafka', level: 85, category: 'Big Data' },
    { name: 'Airflow', level: 80, category: 'Big Data' },
    { name: 'Elasticsearch', level: 75, category: 'Big Data' }
  ],
  machineLearning: [
    { name: 'scikit-learn', level: 85, category: 'Machine Learning' },
    { name: 'TensorFlow', level: 75, category: 'Machine Learning' },
    { name: 'PyTorch', level: 70, category: 'Machine Learning' },
    { name: 'XGBoost', level: 80, category: 'Machine Learning' },
    { name: 'Statistical Analysis', level: 85, category: 'Machine Learning' }
  ]
};

export const allSkills: Skill[] = [
  ...skillsData.dataAnalysis,
  ...skillsData.cloudDevops,
  ...skillsData.visualization,
  ...skillsData.bigData,
  ...skillsData.machineLearning
];
