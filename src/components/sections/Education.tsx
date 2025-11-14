import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Star } from 'lucide-react';
import { useProfile } from '../../contexts/ProfileContext';
import { useLocale } from '../../contexts/LocaleContext';
import { education } from '../../data/education';

const Education = () => {
  const { isDarkMode } = useProfile();
  const { t, locale } = useLocale();

  return (
    <section id="education" className={`py-20 ${isDarkMode ? 'bg-gray-950' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            {t('education.title')}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto" />
          <p className={`mt-4 max-w-2xl mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            {t('education.subtitle')}
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {education.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-6 rounded-2xl border ${
                isDarkMode
                  ? 'bg-gradient-to-br from-gray-900 to-gray-800 border-gray-800'
                  : 'bg-white border-gray-200 shadow-lg'
              }`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`p-3 rounded-xl ${isDarkMode ? 'bg-blue-900/40' : 'bg-blue-100'}`}>
                  <GraduationCap className={isDarkMode ? 'text-blue-300' : 'text-blue-600'} size={28} />
                </div>
                <div>
                  <h3 className={`text-2xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {item.school[locale]}
                  </h3>
                  <p className={`text-lg ${isDarkMode ? 'text-blue-300' : 'text-blue-600'}`}>
                    {item.degree[locale]}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 text-sm font-medium mb-4">
                <span className={`inline-flex items-center gap-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  <Calendar size={16} />
                  {item.period[locale]}
                </span>
                {item.location && (
                  <span className={`inline-flex items-center gap-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    <MapPin size={16} />
                    {item.location[locale]}
                  </span>
                )}
              </div>

              {item.highlights && (
                <ul className="space-y-2 mb-4">
                  {item.highlights.map((highlight) => (
                    <li
                      key={highlight[locale]}
                      className={`flex gap-2 text-sm leading-relaxed ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}
                    >
                      <Star size={16} className={isDarkMode ? 'text-cyan-300' : 'text-cyan-600'} />
                      <span>{highlight[locale]}</span>
                    </li>
                  ))}
                </ul>
              )}

              {item.skills && (
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1 text-xs font-semibold uppercase tracking-wide rounded-full ${
                        isDarkMode
                          ? 'bg-gray-900 text-cyan-300 border border-cyan-800/40'
                          : 'bg-cyan-50 text-cyan-700 border border-cyan-200'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
