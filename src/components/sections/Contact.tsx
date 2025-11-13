import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react';
import { useProfile } from '../../contexts/ProfileContext';
import { contactInfo } from '../../data/contact';
import { useLocale } from '../../contexts/LocaleContext';

const Contact = () => {
  const { isDarkMode } = useProfile();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const { t } = useLocale();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Use mailto to open user's email client prefilled to the target address
    const subject = encodeURIComponent(`Contact depuis portfolio: ${formData.name}`);
    const body = encodeURIComponent(`Nom: ${formData.name}%0AEmail: ${formData.email}%0A%0A${formData.message}`);
    window.location.href = `mailto:cmtt1004@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            {t('contact.title')}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              {t('contact.workingTogether')}
            </h3>
            <p className={`mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              {t('contact.workingTogether')}. {t('contact.title')} - {contactInfo.email}
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg ${
                  isDarkMode ? 'bg-blue-600/20' : 'bg-blue-50'
                }`}>
                  <Mail size={24} className={isDarkMode ? 'text-blue-400' : 'text-blue-600'} />
                </div>
                <div>
                  <h4 className={`font-semibold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {t('contact.email')}
                  </h4>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className={`${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'} transition-colors`}
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg ${
                  isDarkMode ? 'bg-green-600/20' : 'bg-green-50'
                }`}>
                  <Phone size={24} className={isDarkMode ? 'text-green-400' : 'text-green-600'} />
                </div>
                <div>
                  <h4 className={`font-semibold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {t('contact.phone')}
                  </h4>
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg ${
                  isDarkMode ? 'bg-orange-600/20' : 'bg-orange-50'
                }`}>
                  <MapPin size={24} className={isDarkMode ? 'text-orange-400' : 'text-orange-600'} />
                </div>
                <div>
                  <h4 className={`font-semibold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {t('contact.location')}
                  </h4>
                  <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                    {contactInfo.location}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              {contactInfo.linkedin && (
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-lg ${
                    isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
                  } transition-colors`}
                >
                  <Linkedin size={24} className={isDarkMode ? 'text-blue-400' : 'text-blue-600'} />
                </a>
              )}
              {contactInfo.github && (
                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-lg ${
                    isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
                  } transition-colors`}
                >
                  <Github size={24} className={isDarkMode ? 'text-purple-400' : 'text-purple-600'} />
                </a>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className={`block mb-2 font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Nom
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full px-4 py-3 rounded-lg ${
                    isDarkMode
                      ? 'bg-gray-800 text-white border-gray-700'
                      : 'bg-gray-50 text-gray-900 border-gray-300'
                  } border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
                  required
                />
              </div>

              <div>
                <label className={`block mb-2 font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full px-4 py-3 rounded-lg ${
                    isDarkMode
                      ? 'bg-gray-800 text-white border-gray-700'
                      : 'bg-gray-50 text-gray-900 border-gray-300'
                  } border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
                  required
                />
              </div>

              <div>
                <label className={`block mb-2 font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className={`w-full px-4 py-3 rounded-lg ${
                    isDarkMode
                      ? 'bg-gray-800 text-white border-gray-700'
                      : 'bg-gray-50 text-gray-900 border-gray-300'
                  } border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none`}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-orange-500/50 transition-all flex items-center justify-center gap-2"
              >
                <span>{t('contact.sendMessage')}</span>
                <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
