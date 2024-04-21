import React, { useState } from 'react';
import { LanguageContext, Language, LanguageContextType } from '../context/LanguageContext';

interface Currency {
  exchangeRate: number;
}

interface LanguageProviderProps {
  children: React.ReactNode;
}

const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const contextValue: LanguageContextType = {
    language,
    setLanguage,
    currency: getCurrencyForLanguage(language),
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

const getCurrencyForLanguage = (lang: Language): Currency => {
  if (lang === 'en') {
    return { exchangeRate: 1 }; // Dollar for English
  } else if (lang === 'fr') {
    return { exchangeRate: 0.85 }; // Euro for French
  } else {
    return { exchangeRate: 1 }; // Default to Dollar for unknown languages
  }
};

export const convertPriceToCurrency = (price: number, currency: Currency): string => {
  const convertedPrice = price * currency.exchangeRate;
  return convertedPrice.toFixed(2); // Round to two decimal places
};

export default LanguageProvider;
