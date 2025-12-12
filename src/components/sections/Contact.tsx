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
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const { t } = useLocale();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contact depuis portfolio: ${formData.name}`);
    const body = encodeURIComponent(`Nom: ${formData.name}%0AEmail: ${formData.email}%0A%0A${formData.message}`);
    window.location.href = `mailto:cmtt1004@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className={`py-20 relative px-4 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Background Decoration */}
      <div className={`absolute top-1/2 left-0 w-72 h-72 -translate-y-1/2 -ml-20 rounded-full blur-[100px] opacity-20 pointer-events-none ${isDarkMode ? 'bg-primary-blue' : 'bg-blue-300'}`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className={`inline-block py-1 px-3 rounded-full text-sm font-medium mb-4 ${isDarkMode ? 'bg-white/5 text-primary-orange' : 'bg-orange-50 text-orange-600'}`}>
            Get in Touch
          </span>
          <h2 className={`text-4xl md:text-5xl font-heading font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            {t('contact.title')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className={`text-3xl font-heading font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                {t('contact.workingTogether')}
              </h3>
              <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {t('contact.subtitle')}
              </p>
            </div>

            <div className="space-y-6">
              <a href={`mailto:${contactInfo.email}`} className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 border ${isDarkMode
                  ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-primary-blue/30'
                  : 'bg-white border-gray-100 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5'
                }`}>
                <div className={`p-4 rounded-xl ${isDarkMode ? 'bg-primary-blue/20 text-primary-blue' : 'bg-blue-50 text-primary-blue'}`}>
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className={`text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {t('contact.email')}
                  </h4>
                  <p className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {contactInfo.email}
                  </p>
                </div>
              </a>

              <a href={`tel:${contactInfo.phone}`} className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 border ${isDarkMode
                  ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-primary-green/30'
                  : 'bg-white border-gray-100 hover:border-green-200 hover:shadow-lg hover:shadow-green-500/5'
                }`}>
                <div className={`p-4 rounded-xl ${isDarkMode ? 'bg-primary-green/20 text-primary-green' : 'bg-green-50 text-primary-green'}`}>
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className={`text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {t('contact.phone')}
                  </h4>
                  <p className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {contactInfo.phone}
                  </p>
                </div>
              </a>

              <div className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 border ${isDarkMode
                  ? 'bg-white/5 border-white/10'
                  : 'bg-white border-gray-100'
                }`}>
                <div className={`p-4 rounded-xl ${isDarkMode ? 'bg-primary-orange/20 text-primary-orange' : 'bg-orange-50 text-primary-orange'}`}>
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className={`text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {t('contact.location')}
                  </h4>
                  <p className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
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
                  className={`p-4 rounded-xl transition-all duration-300 ${isDarkMode
                      ? 'bg-white/5 hover:bg-white/10 text-white hover:text-primary-blue'
                      : 'bg-gray-50 hover:bg-gray-100 text-gray-600 hover:text-primary-blue'
                    }`}
                >
                  <Linkedin size={24} />
                </a>
              )}
              {contactInfo.github && (
                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 rounded-xl transition-all duration-300 ${isDarkMode
                      ? 'bg-white/5 hover:bg-white/10 text-white hover:text-primary-violet'
                      : 'bg-gray-50 hover:bg-gray-100 text-gray-600 hover:text-primary-violet'
                    }`}
                >
                  <Github size={24} />
                </a>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`p-8 rounded-3xl border backdrop-blur-sm ${isDarkMode
                ? 'bg-white/5 border-white/10'
                : 'bg-white border-gray-100 shadow-xl shadow-gray-200/50'
              }`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {t('contact.form.name')}
                </label>
                <div className={`relative px-4 py-3 rounded-xl border transition-all duration-300 ${focusedField === 'name'
                    ? 'ring-2 ring-primary-blue/20 border-primary-blue'
                    : isDarkMode ? 'bg-dark-bg border-gray-700' : 'bg-gray-50 border-gray-200'
                  }`}>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full bg-transparent outline-none"
                    placeholder="John Doe"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {t('contact.form.email')}
                </label>
                <div className={`relative px-4 py-3 rounded-xl border transition-all duration-300 ${focusedField === 'email'
                    ? 'ring-2 ring-primary-blue/20 border-primary-blue'
                    : isDarkMode ? 'bg-dark-bg border-gray-700' : 'bg-gray-50 border-gray-200'
                  }`}>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full bg-transparent outline-none"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {t('contact.form.message')}
                </label>
                <div className={`relative px-4 py-3 rounded-xl border transition-all duration-300 ${focusedField === 'message'
                    ? 'ring-2 ring-primary-blue/20 border-primary-blue'
                    : isDarkMode ? 'bg-dark-bg border-gray-700' : 'bg-gray-50 border-gray-200'
                  }`}>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    rows={4}
                    className="w-full bg-transparent outline-none resize-none"
                    placeholder="Hello..."
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-bold hover:shadow-lg hover:shadow-orange-500/30 transition-all flex items-center justify-center gap-2 group"
              >
                <span>{t('contact.sendMessage')}</span>
                <Send size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
