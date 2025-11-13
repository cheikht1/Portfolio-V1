import { Linkedin, Github, Mail, MapPin, Phone, Globe } from 'lucide-react';
import { useProfile } from '../../contexts/ProfileContext';
import { contactInfo } from '../../data/contact';
import { useLocale } from '../../contexts/LocaleContext';

const Footer = () => {
  const { isDarkMode } = useProfile();
  const { t } = useLocale();

  return (
    <footer className={`${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} border-t`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent mb-4">
              Cheikh M. T. Thiam
            </h3>
            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-4`}>
              {t('footer.roles')}
            </p>
            <div className="flex space-x-4">
              {contactInfo.linkedin && (
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${isDarkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'} transition-colors`}
                >
                  <Linkedin size={24} />
                </a>
              )}
              {contactInfo.github && (
                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${isDarkMode ? 'text-gray-400 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'} transition-colors`}
                >
                  <Github size={24} />
                </a>
              )}
              <a
                href={`mailto:${contactInfo.email}`}
                className={`${isDarkMode ? 'text-gray-400 hover:text-orange-400' : 'text-gray-600 hover:text-orange-600'} transition-colors`}
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div>
            <h4 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
              {t('footer.quickNav')}
            </h4>
            <ul className="space-y-2">
              {[
                { label: t('nav.home'), href: '#home' },
                { label: t('nav.about'), href: '#about' },
                { label: t('nav.projects'), href: '#projects' },
                { label: t('nav.contact'), href: '#contact' }
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
              {t('contact.title')}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Mail size={18} className={isDarkMode ? 'text-blue-400' : 'text-blue-600'} />
                <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                  {contactInfo.email}
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} className={isDarkMode ? 'text-green-400' : 'text-green-600'} />
                <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                  {contactInfo.phone}
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin size={18} className={isDarkMode ? 'text-orange-400' : 'text-orange-600'} />
                <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                  {contactInfo.location}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className={`mt-12 pt-8 border-t ${isDarkMode ? 'border-gray-800' : 'border-gray-200'} text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          <p>&copy; {new Date().getFullYear()} Cheikh Mouhamed Tidiane Thiam. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
