import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useProfile } from '../../contexts/ProfileContext';
import { useLocale } from '../../contexts/LocaleContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDarkMode, toggleDarkMode } = useProfile();
  const { t, locale, setLocale } = useLocale();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.skills'), href: '#skills' },
    { name: t('nav.education'), href: '#education' },
    { name: t('nav.projects'), href: '#projects' },
    { name: t('nav.experiences'), href: '#experiences' },
    { name: t('nav.contact'), href: '#contact' }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? `py-2 backdrop-blur-xl border-b ${isDarkMode ? 'bg-dark-bg/80 border-white/10' : 'bg-white/80 border-gray-200/50'}`
          : 'py-4 bg-transparent border-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0"
          >
            <a href="#home" className={`text-2xl font-heading font-bold tracking-tight ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              CMTT<span className="text-primary-blue">.</span>
            </a>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`text-sm font-medium transition-colors relative group ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                  }`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-blue group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-3">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-all duration-300 ${isDarkMode
                  ? 'bg-white/10 text-yellow-400 hover:bg-white/20'
                  : 'bg-black/5 text-gray-600 hover:bg-black/10'
                }`}
              aria-label={isDarkMode ? 'Light mode' : 'Dark mode'}
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              onClick={() => setLocale(locale === 'fr' ? 'en' : 'fr')}
              className={`p-2 rounded-full transition-all duration-300 ${isDarkMode
                  ? 'bg-white/10 text-white hover:bg-white/20'
                  : 'bg-black/5 text-gray-600 hover:bg-black/10'
                }`}
              title="Change language"
            >
              <Globe size={18} />
              <span className="sr-only">Change language</span>
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg ${isDarkMode ? 'text-white hover:bg-white/10' : 'text-gray-900 hover:bg-black/5'}`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden overflow-hidden ${isDarkMode ? 'bg-dark-bg border-t border-white/10' : 'bg-white border-t border-gray-200'}`}
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium ${isDarkMode
                      ? 'text-gray-300 hover:bg-white/10 hover:text-white'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    } transition-colors`}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex items-center space-x-4 px-4 pt-4 border-t border-gray-200 dark:border-gray-800 mt-2">
                <button
                  onClick={toggleDarkMode}
                  className={`p-2 rounded-lg ${isDarkMode ? 'bg-white/10 text-yellow-400' : 'bg-gray-100 text-gray-600'}`}
                >
                  {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
                <button
                  onClick={() => setLocale(locale === 'fr' ? 'en' : 'fr')}
                  className={`p-2 rounded-lg ${isDarkMode ? 'bg-white/10 text-white' : 'bg-gray-100 text-gray-600'}`}
                >
                  <Globe size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
