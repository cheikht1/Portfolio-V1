import { motion } from 'framer-motion';
import { ChevronDown, Database, Server, Cloud } from 'lucide-react';
import { useProfile } from '../../contexts/ProfileContext';
import { profileConfig } from '../../utils/profileConfig';
import { useLocale } from '../../contexts/LocaleContext';

const Hero = () => {
  const { profile, setProfile, isDarkMode } = useProfile();

  const { t, locale } = useLocale();

  const profiles = [
    {
      type: 'data' as const,
      icon: Database,
      title: profileConfig.data.title[locale],
      description: profileConfig.data.subtitle[locale]
    },
    {
      type: 'itops' as const,
      icon: Server,
      title: profileConfig.itops.title[locale],
      description: profileConfig.itops.subtitle[locale]
    },
    {
      type: 'devops' as const,
      icon: Cloud,
      title: profileConfig.devops.title[locale],
      description: profileConfig.devops.subtitle[locale]
    }
  ];

  return (
    <section id="home" className={`min-h-screen flex items-center justify-center relative overflow-hidden ${isDarkMode ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'}`}>
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 ${isDarkMode ? 'bg-blue-400' : 'bg-blue-600'} rounded-full`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className={`text-5xl md:text-7xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Cheikh M. T. Thiam
          </h1>
          <motion.div
            key={profile}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className={`text-2xl md:text-3xl mb-8 bg-gradient-to-r ${profileConfig[profile].gradient} bg-clip-text text-transparent font-semibold`}
          >
            {profileConfig[profile].title[locale]}
          </motion.div>
          <p className={`text-lg md:text-xl mb-12 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            {profileConfig[profile].subtitle[locale]}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {profiles.map((item, index) => {
            const Icon = item.icon;
            const isActive = profile === item.type;
            return (
              <motion.div
                key={item.type}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                onClick={() => setProfile(item.type)}
                className={`cursor-pointer p-8 rounded-2xl backdrop-blur-lg ${
                  isDarkMode
                    ? 'bg-white/10 hover:bg-white/20'
                    : 'bg-white/60 hover:bg-white/80'
                } border-2 ${
                  isActive
                    ? `border-${item.type === 'data' ? 'blue' : item.type === 'itops' ? 'purple' : 'orange'}-500 shadow-lg shadow-${item.type === 'data' ? 'blue' : item.type === 'itops' ? 'purple' : 'orange'}-500/50`
                    : isDarkMode ? 'border-white/20' : 'border-gray-300'
                } transition-all duration-300`}
              >
                <div className={`inline-flex p-4 rounded-full mb-4 ${
                  isActive
                    ? `bg-gradient-to-br ${profileConfig[item.type].gradient}`
                    : isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
                }`}>
                  <Icon size={32} className="text-white" />
                </div>
                <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {item.title}
                </h3>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

          <motion.a
            href="#projects"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-orange-500/50 transition-all"
          >
            <span>{t('hero.discoverProjects')}</span>
            <ChevronDown className="animate-bounce" />
          </motion.a>
      </div>
    </section>
  );
};

export default Hero;
