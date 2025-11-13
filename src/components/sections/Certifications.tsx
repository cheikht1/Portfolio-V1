import { motion } from 'framer-motion';
import { Award, Calendar } from 'lucide-react';
import { useProfile } from '../../contexts/ProfileContext';
import { useLocale } from '../../contexts/LocaleContext';
import { certifications } from '../../data/certifications';

const Certifications = () => {
  const { isDarkMode } = useProfile();
  const { t } = useLocale();

  return (
    <section id="certifications" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            {t('certifications.title')}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-cyan-500 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className={`p-6 rounded-2xl ${
                isDarkMode
                  ? 'bg-gradient-to-br from-gray-900 to-gray-800'
                  : 'bg-gradient-to-br from-white to-gray-50'
              } shadow-xl border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} cursor-pointer`}
            >
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                isDarkMode
                  ? 'bg-gradient-to-br from-green-600 to-cyan-600'
                  : 'bg-gradient-to-br from-green-500 to-cyan-500'
              }`}>
                <Award size={32} className="text-white" />
              </div>

              <h3 className={`text-lg font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                {cert.name}
              </h3>

              <p className={`text-sm font-semibold mb-3 ${
                isDarkMode ? 'text-blue-400' : 'text-blue-600'
              }`}>
                {cert.organization}
              </p>

              <div className="flex items-center gap-2">
                <Calendar size={14} className={isDarkMode ? 'text-gray-400' : 'text-gray-600'} />
                <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {cert.date}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
