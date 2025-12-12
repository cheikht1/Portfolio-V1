
import { motion } from 'framer-motion';
import { skillsData } from '../../data/skills';
import { useLocale } from '../../contexts/LocaleContext';
import { useProfile } from '../../contexts/ProfileContext';

const SkillBar = ({ name, level, index }: { name: string; level: number; index: number }) => {
  const { isDarkMode } = useProfile();

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="mb-6"
    >
      <div className="flex justify-between mb-2">
        <span className={`text-base font-medium font-heading ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{name}</span>
        <span className={`text-sm font-semibold ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{level}%</span>
      </div>
      <div className={`w-full ${isDarkMode ? 'bg-white/5' : 'bg-gray-100'} h-3 rounded-full overflow-hidden backdrop-blur-sm`}>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="h-full bg-gradient-to-r from-primary-blue to-primary-violet rounded-full relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-white/20 animate-pulse" />
        </motion.div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const { t } = useLocale();
  const { isDarkMode } = useProfile();

  return (
    <section id="skills" className={`py-20 relative ${isDarkMode ? 'bg-dark-bg' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className={`inline-block py-1 px-3 rounded-full text-sm font-medium mb-4 ${isDarkMode ? 'bg-white/5 text-primary-violet' : 'bg-purple-50 text-purple-600'}`}>
            Expertise
          </span>
          <h2 className={`text-4xl md:text-5xl font-heading font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{t('skills.title')}</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`p-8 rounded-3xl border backdrop-blur-sm transition-colors ${isDarkMode
              ? 'bg-white/5 border-white/10 hover:border-primary-blue/30'
              : 'bg-white border-gray-100 shadow-xl shadow-blue-500/5 hover:border-blue-200'
              }`}
          >
            <h3 className={`text-2xl font-bold mb-8 flex items-center gap-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
              </div>
              {t('skills.dataTitle')}
            </h3>
            {skillsData.dataAnalysis.map((s, idx) => (
              <SkillBar key={s.name} name={s.name} level={s.level} index={idx} />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`p-8 rounded-3xl border backdrop-blur-sm transition-colors ${isDarkMode
              ? 'bg-white/5 border-white/10 hover:border-primary-violet/30'
              : 'bg-white border-gray-100 shadow-xl shadow-purple-500/5 hover:border-purple-200'
              }`}
          >
            <h3 className={`text-2xl font-bold mb-8 flex items-center gap-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-500">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
              </div>
              {t('skills.cloudTitle')}
            </h3>
            {[...skillsData.cloudDevops, ...skillsData.bigData].map((s, idx) => (
              <SkillBar key={s.name} name={s.name} level={s.level} index={idx} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
