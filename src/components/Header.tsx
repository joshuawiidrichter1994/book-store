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
    <header className="bg-white text-gray-900 border-b-2 border-gray-700 py-4">

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                  <img src="./images/logo.png"/>
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <div className="hidden md:flex md:ml-10 md:space-x-4 items-center">
              <Link href="/BooksPage">
                <span className="header-text text-gray-900 px-3 py-2 rounded-md text-base font-semibold cursor-pointer transition duration-300 border border-transparent hover:border-gray-300 hover:text-gray-900">
                  {translations.books}
                </span>
              </Link>
              <Link href="/AddBookPage">
                <span className="header-text text-gray-900 px-3 py-2 rounded-md text-base font-semibold cursor-pointer transition duration-300 border border-transparent hover:border-gray-300 hover:text-gray-900">
                  {translations.addBook}
                </span>
              </Link>
              <div className="text-gray-900">|</div>
              <div className="relative ml-4" ref={dropdownRef}>
                <button
                  onClick={toggleLanguageDropdown}
                  className="header-text text-gray-900 hover:text-gray-900 px-3 py-2 rounded-md text-base font-semibold cursor-pointer"
                >
                  {translations.language}
                </button>
                {isLanguageDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                    <ul>
                      <li
                        onClick={() => handleLanguageChange("en")}
                        className="dropdown-text cursor-pointer px-4 py-2 hover:bg-gray-300 hover:text-gray-900 text-gray-900 text-sm font-semibold"
                      >
                        English
                      </li>
                      <li
                        onClick={() => handleLanguageChange("fr")}
                        className="dropdown-text cursor-pointer px-4 py-2 hover:bg-gray-300 hover:text-gray-900 text-gray-900 text-sm font-semibold"
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
