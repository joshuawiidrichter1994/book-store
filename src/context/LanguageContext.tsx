import { createContext } from 'react';

export type Language = 'en' | 'fr'; // Define possible language options

export interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
}

export const LanguageContext = createContext<LanguageContextType>({
    language: 'en', // Default language
    setLanguage: (language: Language) => {}, // Default function to be replaced
  });
  
