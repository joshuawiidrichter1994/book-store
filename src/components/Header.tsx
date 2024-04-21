import React, { useContext, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { LanguageContext, Language } from "../context/LanguageContext";
import enTranslations from "../../public/translations/en.json"; // Import English translations
import frTranslations from "../../public/translations/fr.json"; // Import French translations

const Header = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        event.target &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsLanguageDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  const handleLanguageChange = (selectedLanguage: Language) => {
    setLanguage(selectedLanguage);
    setIsLanguageDropdownOpen(false);
    console.log("Selected language:", selectedLanguage);
  };

  // Load translations based on language
  const translations = language === "en" ? enTranslations : frTranslations;

  return (
    <header className="bg-gradient-to-r from-blue-300 to-blue-800 text-white py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                <span className="text-white text-2xl font-bold cursor-pointer">
                  UrbanEagle {translations.books}
                </span>
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <div className="hidden md:flex md:ml-10 md:space-x-4 items-center">
              <Link href="/BooksPage">
                <span className="text-white hover:bg-blue-400 hover:text-white px-3 py-2 rounded-md text-base font-semibold cursor-pointer">
                  {translations.books}
                </span>
              </Link>
              <Link href="/AddBookPage">
                <span className="text-white hover:bg-blue-400 hover:text-white px-3 py-2 rounded-md text-base font-semibold cursor-pointer">
                  {translations.addBook}
                </span>
              </Link>
              <div className="text-gray-300">|</div>
              <div className="relative ml-4" ref={dropdownRef}>
                <button
                  onClick={toggleLanguageDropdown}
                  className="text-white hover:text-white px-3 py-2 rounded-md text-base font-semibold cursor-pointer"
                >
                  {translations.language}
                </button>
                {isLanguageDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                    <ul>
                      <li
                        onClick={() => handleLanguageChange("en")}
                        className="cursor-pointer px-4 py-2 hover:bg-blue-400 hover:text-white text-gray-900 text-sm font-semibold"
                      >
                        English
                      </li>
                      <li
                        onClick={() => handleLanguageChange("fr")}
                        className="cursor-pointer px-4 py-2 hover:bg-blue-400 hover:text-white text-gray-900 text-sm font-semibold"
                      >
                        French
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
