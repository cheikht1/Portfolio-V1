import { ProfileType } from '../types';

export const profileConfig: Record<ProfileType, any> = {
  data: {
    title: { en: 'Data Analyst', fr: 'Data Analyst' },
    subtitle: {
      en: 'Transforming data into actionable insights',
      fr: 'Transformer les données en insights actionnables'
    },
    color: '#0A84FF',
    gradient: 'from-blue-500 to-cyan-500',
    highlight: 'text-blue-400'
  },
  itops: {
    title: { en: 'IT Operations', fr: 'Opérations IT' },
    subtitle: {
      en: 'Ensuring system reliability and performance',
      fr: 'Assurer la fiabilité et la performance des systèmes'
    },
    color: '#8B5CF6',
    gradient: 'from-purple-500 to-pink-500',
    highlight: 'text-purple-400'
  },
  devops: {
    title: { en: 'DevOps & Cloud', fr: 'DevOps & Cloud' },
    subtitle: {
      en: 'Building scalable cloud infrastructure',
      fr: "Concevoir des infrastructures cloud scalables"
    },
    color: '#FF6B35',
    gradient: 'from-orange-500 to-red-500',
    highlight: 'text-orange-400'
  }
};

export const getProfileColor = (profile: ProfileType): string => {
  return profileConfig[profile].color;
};

export const getProfileGradient = (profile: ProfileType): string => {
  return profileConfig[profile].gradient;
};
