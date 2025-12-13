import { createContext, useContext, useState, ReactNode } from 'react';
import { ProfileType } from '../types';

interface ProfileContextType {
  profile: ProfileType;
  setProfile: (profile: ProfileType) => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export const ProfileProvider = ({ children }: { children: ReactNode }) => {
  const [profile, setProfile] = useState<ProfileType>('data');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <ProfileContext.Provider value={{ profile, setProfile, isDarkMode, toggleDarkMode }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error('useProfile must be used within ProfileProvider');
  }
  return context;
};
