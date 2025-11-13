import { skillsData } from '../../data/skills';
import { useLocale } from '../../contexts/LocaleContext';
import { useProfile } from '../../contexts/ProfileContext';

const SkillBar = ({ name, level }: { name: string; level: number }) => {
  const { isDarkMode } = useProfile();

  return (
    <div className="mb-3">
      <div className="flex justify-between mb-1">
        <span className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{name}</span>
        <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{level}%</span>
      </div>
      <div className={`w-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} h-3 rounded-full overflow-hidden`}>
        <div className="h-3 bg-gradient-to-r from-blue-500 to-cyan-400" style={{ width: `${level}%` }} />
      </div>
    </div>
  );
};

const Skills = () => {
  const { t } = useLocale();
  const { isDarkMode } = useProfile();

  return (
    <section id="skills" className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{t('skills.title')}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{t('skills.dataTitle')}</h3>
            {skillsData.dataAnalysis.map((s) => (
              <SkillBar key={s.name} name={s.name} level={s.level} />
            ))}
          </div>

          <div>
            <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{t('skills.cloudTitle')}</h3>
            {[...skillsData.cloudDevops, ...skillsData.bigData].map((s) => (
              <SkillBar key={s.name} name={s.name} level={s.level} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
