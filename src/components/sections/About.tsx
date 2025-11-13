import { motion } from 'framer-motion';
import { useProfile } from '../../contexts/ProfileContext';
import { Award, Briefcase, Code, MapPin } from 'lucide-react';
import { useLocale } from '../../contexts/LocaleContext';

const About = () => {
  const { isDarkMode } = useProfile();

  const { t } = useLocale();

  const stats = [
    { icon: Briefcase, label: t('aboutStats.yearsExperience'), value: '3+' },
    { icon: Code, label: t('aboutStats.projectsDone'), value: '15+' },
    { icon: Award, label: t('aboutStats.certifications'), value: '7+' },
    { icon: MapPin, label: t('aboutStats.location'), value: 'Dakar' }
  ];

  return (
    <section id="about" className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            {t('about.title')}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className={`w-full h-96 rounded-2xl ${isDarkMode ? 'bg-gradient-to-br from-blue-600/20 to-purple-600/20' : 'bg-gradient-to-br from-blue-100 to-purple-100'} flex items-center justify-center border-4 border-dashed ${isDarkMode ? 'border-blue-500/30' : 'border-blue-300'}`}>
              <div className={`text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                <p className="text-lg">Photo professionnelle</p>
                <p className="text-sm">(À ajouter)</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              {t('about.headline')}
            </h3>
            <p className={`text-lg mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
              {t('about.paragraph1')}
            </p>
            <p className={`text-lg mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
              {t('about.paragraph2')}
            </p>
            <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
              {t('about.paragraph3')}
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-xl text-center ${
                  isDarkMode
                    ? 'bg-gradient-to-br from-gray-800 to-gray-700'
                    : 'bg-gradient-to-br from-gray-50 to-gray-100'
                } border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}
              >
                <Icon className={`w-8 h-8 mx-auto mb-3 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                <div className={`text-3xl font-bold mb-2 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent`}>
                  {stat.value}
                </div>
                <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
