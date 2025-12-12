
import { motion } from 'framer-motion';
import { ChevronDown, Database, Server, Cloud, ArrowRight } from 'lucide-react';
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
      description: profileConfig.data.subtitle[locale],
      color: 'blue'
    },
    {
      type: 'itops' as const,
      icon: Server,
      title: profileConfig.itops.title[locale],
      description: profileConfig.itops.subtitle[locale],
      color: 'violet'
    },
    {
      type: 'devops' as const,
      icon: Cloud,
      title: profileConfig.devops.title[locale],
      description: profileConfig.devops.subtitle[locale],
      color: 'orange'
    }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className={`absolute inset-0 transition-colors duration-500 ${isDarkMode ? 'bg-dark-bg' : 'bg-gray-50'}`}>
        <div className={`absolute top-0 -left-4 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob ${isDarkMode ? 'bg-primary-blue/20' : 'bg-purple-300'}`}></div>
        <div className={`absolute top-0 -right-4 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 ${isDarkMode ? 'bg-primary-violet/20' : 'bg-yellow-300'}`}></div>
        <div className={`absolute -bottom-8 left-20 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 ${isDarkMode ? 'bg-primary-orange/20' : 'bg-pink-300'}`}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <span className={`inline-block py-1 px-3 rounded-full text-sm font-medium mb-6 ${isDarkMode ? 'bg-white/10 text-primary-blue' : 'bg-blue-50 text-blue-600'} border ${isDarkMode ? 'border-white/10' : 'border-blue-100'}`}>
            Welcome to my portfolio
          </span>
          <h1 className={`text-5xl md:text-7xl font-heading font-bold mb-6 tracking-tight ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Cheikh M. T. Thiam
          </h1>
          <motion.div
            key={profile}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className={`text-2xl md:text-4xl mb-8 font-semibold bg-gradient-to-r ${profileConfig[profile].gradient} bg-clip-text text-transparent`}
          >
            {profileConfig[profile].title[locale]}
          </motion.div>
          <p className={`text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            {profileConfig[profile].subtitle[locale]}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto">
          {profiles.map((item, index) => {
            const Icon = item.icon;
            const isActive = profile === item.type;
            return (
              <motion.button
                key={item.type}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                onClick={() => setProfile(item.type)}
                className={`group relative text-left p-6 rounded-2xl transition-all duration-300 ${isActive
                  ? isDarkMode
                    ? 'bg-white/10 shadow-2xl shadow-blue-500/10 ring-1 ring-white/20'
                    : 'bg-white shadow-xl shadow-blue-500/5 ring-1 ring-black/5'
                  : isDarkMode
                    ? 'bg-transparent hover:bg-white/5'
                    : 'bg-transparent hover:bg-white/50'
                  }`}
              >
                <div className={`inline-flex p-3 rounded-xl mb-4 transition-colors ${isActive
                  ? `bg-gradient-to-br ${profileConfig[item.type].gradient} text-white shadow-lg`
                  : isDarkMode ? 'bg-white/5 text-gray-400 group-hover:text-white' : 'bg-gray-100 text-gray-500 group-hover:text-gray-900'
                  }`}>
                  <Icon size={24} />
                </div>
                <h3 className={`text-lg font-bold mb-2 font-heading ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {item.title}
                </h3>
                {isActive && (
                  <motion.div
                    layoutId="active-indicator"
                    className="absolute inset-0 rounded-2xl border-2 border-primary-blue/30"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center"
        >
          <a
            href="#projects"
            className={`group flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all ${isDarkMode
              ? 'bg-white text-gray-900 hover:bg-gray-100'
              : 'bg-gray-900 text-white hover:bg-gray-800'
              }`}
          >
            <span>{t('hero.discoverProjects')}</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown className={`opacity-50 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} />
      </motion.div>
    </section>
  );
};

export default Hero;
