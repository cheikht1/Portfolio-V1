import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code, BarChart3 } from 'lucide-react';
import { useProfile } from '../../contexts/ProfileContext';
import { useLocale } from '../../contexts/LocaleContext';
import { projects } from '../../data/projects';
import { ProfileType } from '../../types';

const Projects = () => {
  const { isDarkMode } = useProfile();
  const [filter, setFilter] = useState<ProfileType | 'all'>('all');
  const { t, locale } = useLocale();

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
    <section id="projects" className={`py-20 relative overflow-hidden ${isDarkMode ? 'bg-dark-bg' : 'bg-gray-50'}`}>
      {/* Background Decoration */}
      <div className={`absolute top-0 right-0 w-96 h-96 -mr-20 -mt-20 rounded-full blur-[100px] opacity-20 pointer-events-none ${isDarkMode ? 'bg-primary-blue' : 'bg-blue-300'}`} />
      <div className={`absolute bottom-0 left-0 w-96 h-96 -ml-20 -mb-20 rounded-full blur-[100px] opacity-20 pointer-events-none ${isDarkMode ? 'bg-primary-violet' : 'bg-purple-300'}`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className={`inline-block py-1 px-3 rounded-full text-sm font-medium mb-4 ${isDarkMode ? 'bg-white/5 text-primary-orange' : 'bg-orange-50 text-orange-600'}`}>
            Portfolio
          </span>
          <h2 className={`text-4xl md:text-5xl font-heading font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            {t('projects.title')}
          </h2>

          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${filter === f.value
                    ? 'bg-primary-blue text-white shadow-lg shadow-blue-500/30'
                    : isDarkMode
                      ? 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-900 border border-gray-200'
                  }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`group flex flex-col rounded-2xl overflow-hidden backdrop-blur-sm border transition-all duration-300 ${isDarkMode
                  ? 'bg-white/5 border-white/10 hover:border-primary-blue/30 hover:shadow-2xl hover:shadow-blue-900/10'
                  : 'bg-white border-gray-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5'
                }`}
            >
              <div className="relative h-48 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br transition-opacity duration-500 ${project.category.includes('data')
                    ? 'from-blue-600/20 to-cyan-600/20 group-hover:opacity-100'
                    : project.category.includes('itops')
                      ? 'from-violet-600/20 to-pink-600/20 group-hover:opacity-100'
                      : 'from-orange-600/20 to-red-600/20 group-hover:opacity-100'
                  } opacity-0`} />

                <div className={`h-full w-full flex items-center justify-center ${isDarkMode ? 'bg-gray-800/50' : 'bg-gray-100'
                  }`}>
                  {/* Placeholder for actual project image if available, else icon */}
                  <BarChart3 size={48} className={`opacity-40 transition-transform duration-500 group-hover:scale-110 ${isDarkMode ? 'text-white' : 'text-gray-900'
                    }`} />
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="mb-4">
                  <h3 className={`text-xl font-heading font-bold mb-2 group-hover:text-primary-blue transition-colors ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {project.title[locale]}
                  </h3>
                  <p className={`text-sm leading-relaxed line-clamp-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {project.description[locale]}
                  </p>
                </div>

                {project.impact && (
                  <div className={`mb-6 p-3 rounded-lg text-xs font-medium border ${isDarkMode
                      ? 'bg-green-500/10 border-green-500/20 text-green-400'
                      : 'bg-green-50 border-green-100 text-green-700'
                    }`}>
                    {project.impact[locale]}
                  </div>
                )}

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className={`px-2.5 py-0.5 text-xs rounded-full font-medium ${isDarkMode
                            ? 'bg-white/5 text-gray-300 border border-white/5'
                            : 'bg-gray-100 text-gray-600 border border-gray-200'
                          }`}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className={`px-2.5 py-0.5 text-xs rounded-full font-medium ${isDarkMode ? 'bg-white/5 text-gray-300' : 'bg-gray-100 text-gray-600'
                        }`}>
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex gap-3">
                    {project.demoUrl && (
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-primary-blue text-white hover:bg-blue-600 transition-colors">
                        <ExternalLink size={16} />
                        <span>{t('projects.demo')}</span>
                      </a>
                    )}
                    {project.codeUrl && (
                      <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg transition-colors border ${isDarkMode
                          ? 'border-white/20 hover:bg-white/10 text-white'
                          : 'border-gray-200 hover:bg-gray-50 text-gray-700'
                        }`}>
                        <Code size={16} />
                        <span>{t('projects.code')}</span>
                      </a>
                    )}
                  </div>
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
