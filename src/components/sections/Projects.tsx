import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code, BarChart3 } from 'lucide-react';
import { useProfile } from '../../contexts/ProfileContext';
import { useLocale } from '../../contexts/LocaleContext';
import { projects } from '../../data/projects';
import { ProfileType } from '../../types';

const Projects = () => {
  const { profile, isDarkMode } = useProfile();
  const [filter, setFilter] = useState<ProfileType | 'all'>('all');

  const { t } = useLocale();

  const filters = [
    { value: 'all' as const, label: t('nav.projects') },
    { value: 'data' as const, label: 'Data' },
    { value: 'itops' as const, label: 'IT Ops' },
    { value: 'devops' as const, label: 'DevOps' }
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category.includes(filter));

  return (
    <section id="projects" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            {t('projects.title')}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mb-8" />

          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  filter === f.value
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                    : isDarkMode
                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`rounded-2xl overflow-hidden ${
                isDarkMode ? 'bg-gray-900' : 'bg-white'
              } shadow-xl hover:shadow-2xl transition-all duration-300 border ${
                isDarkMode ? 'border-gray-700' : 'border-gray-200'
              }`}
            >
              <div className={`h-48 ${
                project.category.includes('data')
                  ? 'bg-gradient-to-br from-blue-600 to-cyan-600'
                  : project.category.includes('itops')
                  ? 'bg-gradient-to-br from-purple-600 to-pink-600'
                  : 'bg-gradient-to-br from-orange-600 to-red-600'
              } flex items-center justify-center`}>
                <BarChart3 size={64} className="text-white opacity-50" />
              </div>

              <div className="p-6">
                <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {project.title}
                </h3>
                <p className={`mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {project.description}
                </p>

                {project.impact && (
                  <div className={`mb-4 p-3 rounded-lg ${
                    isDarkMode ? 'bg-green-900/30' : 'bg-green-50'
                  } border ${isDarkMode ? 'border-green-700' : 'border-green-200'}`}>
                    <p className={`text-sm font-semibold ${isDarkMode ? 'text-green-400' : 'text-green-700'}`}>
                      {project.impact}
                    </p>
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 text-xs rounded-full ${
                        isDarkMode
                          ? 'bg-gray-800 text-gray-300'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className={`px-3 py-1 text-xs rounded-full ${
                      isDarkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-700'
                    }`}>
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex gap-3">
                  {project.demoUrl && (
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg ${
                      isDarkMode
                        ? 'bg-blue-600 hover:bg-blue-700'
                        : 'bg-blue-500 hover:bg-blue-600'
                    } text-white transition-colors`}>
                      <ExternalLink size={16} />
                      <span>{t('projects.demo')}</span>
                    </a>
                  )}
                  {project.codeUrl && (
                    <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg ${
                      isDarkMode
                        ? 'bg-gray-700 hover:bg-gray-600'
                        : 'bg-gray-200 hover:bg-gray-300'
                    } ${isDarkMode ? 'text-white' : 'text-gray-900'} transition-colors`}>
                      <Code size={16} />
                      <span>{t('projects.code')}</span>
                    </a>
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

export default Projects;
