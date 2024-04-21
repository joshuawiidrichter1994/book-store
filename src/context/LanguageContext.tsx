import React, { createContext, useState } from 'react';

export type Language = 'en' | 'fr'; // Define possible language options

interface Currency {
  exchangeRate: number;
}

export interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  currency: Currency;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: 'en', // Default language
  setLanguage: (language: Language) => {}, // Default function to be replaced
  currency: { exchangeRate: 1 }, // Default currency: Dollar
});
