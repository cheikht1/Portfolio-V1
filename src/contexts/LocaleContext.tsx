import { createContext, useContext, useState, ReactNode } from 'react';
import { translations } from '../i18n';

type Locale = 'en' | 'fr';

interface LocaleContextType {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: string) => string;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export const LocaleProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<Locale>('fr');

  const t = (key: string) => {
    const parts = key.split('.');
    let cur: any = translations[locale];
    for (const p of parts) {
      if (!cur) return key;
      cur = cur[p];
    }
    return typeof cur === 'string' ? cur : key;
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = () => {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error('useLocale must be used within LocaleProvider');
  return ctx;
};

export default LocaleContext;
