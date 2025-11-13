import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import { useProfile } from '../../contexts/ProfileContext';
import { useLocale } from '../../contexts/LocaleContext';
import { experiences } from '../../data/experiences';

const Experiences = () => {
  const { isDarkMode } = useProfile();
  const { t } = useLocale();

  return (
    <section id="experiences" className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            {t('experiences.title')}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto" />
        </motion.div>

        <div className="relative">
          <div className={`absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'}`} />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'
              }`}
            >
              <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                <div className={`absolute left-8 md:left-1/2 w-4 h-4 rounded-full ${
                  isDarkMode ? 'bg-blue-500' : 'bg-blue-600'
                } border-4 ${isDarkMode ? 'border-gray-900' : 'border-white'} transform -translate-x-1/2`} />

                <div className={`p-6 rounded-2xl ${
                  isDarkMode
                    ? 'bg-gradient-to-br from-gray-800 to-gray-700'
                    : 'bg-gradient-to-br from-white to-gray-50'
                } shadow-xl border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className={`text-2xl font-bold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {exp.position}
                      </h3>
                      <p className={`text-lg font-semibold ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                        {exp.company}
                      </p>
                    </div>
                    <Briefcase className={isDarkMode ? 'text-orange-400' : 'text-orange-600'} size={24} />
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <Calendar size={16} className={isDarkMode ? 'text-gray-400' : 'text-gray-600'} />
                    <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.missions.map((mission, i) => (
                      <li key={i} className={`flex items-start gap-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        <span className={`mt-2 w-1.5 h-1.5 rounded-full ${isDarkMode ? 'bg-blue-400' : 'bg-blue-600'} flex-shrink-0`} />
                        <span>{mission}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 text-sm rounded-full ${
                          isDarkMode
                            ? 'bg-gray-900 text-blue-400 border border-blue-400/30'
                            : 'bg-blue-50 text-blue-700 border border-blue-200'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {exp.kpi && (
                    <div className={`p-3 rounded-lg ${
                      isDarkMode ? 'bg-green-900/30' : 'bg-green-50'
                    } border ${isDarkMode ? 'border-green-700' : 'border-green-200'}`}>
                      <p className={`text-sm font-semibold ${isDarkMode ? 'text-green-400' : 'text-green-700'}`}>
                        {exp.kpi}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
