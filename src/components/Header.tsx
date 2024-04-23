import React, { useContext, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { LanguageContext, Language } from "../context/LanguageContext";
import enTranslations from "../../public/translations/en.json"; // Import English translations
import frTranslations from "../../public/translations/fr.json"; // Import French translations

const Header = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State to manage mobile menu visibility
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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLanguageChange = (selectedLanguage: Language) => {
    setLanguage(selectedLanguage);
    setIsLanguageDropdownOpen(false);
  };

  // Load translations based on language
  const translations = language === "en" ? enTranslations : frTranslations;

  const changeLanguage = (selectedLanguage: Language) => {
    setLanguage(selectedLanguage);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white text-gray-900 border-b-2 border-gray-700 py-4 fixed top-0 left-0 w-full z-50">

      <div className="mx-auto px-4 mr-4 ml-4">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                  <img src="./images/logo.png"/>
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            {/* Burger menu icon for mobile */}
            <button
              onClick={toggleMobileMenu}
              className="block md:hidden text-gray-900 hover:text-gray-900 focus:outline-none"
            >
              <img src="/images/burger-menu.png" alt="Menu" className="h-6 w-6" />
            </button>
            {/* Mobile menu */}
            {isMobileMenuOpen && (
              <div className="menu-modal md:hidden fixed inset-0 bg-white z-50 flex flex-col items-center">
                <button
                  onClick={toggleMobileMenu}
                  className="absolute top-0 right-0 m-4 text-gray-900 hover:text-gray-900 focus:outline-none"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
                <div className="flex flex-col items-center mt-10">
                  <Link href="/BooksPage">
                    <span className="header-text text-gray-900 px-3 py-2 -md  font-semibold 0">
                      {translations.books}
                    </span>
                  </Link>
                  <Link href="/AddBookPage">
                    <span className="header-text text-gray-900 px-3 py-2 rounded-md  font-semibold cursor-pointer transition duration-300 hover:text-gray-900">
                      {translations.addBook}
                    </span>
                  </Link>
                  <div>
                    <button className="header-text text-gray-900 hover:text-gray-900  font-semibold cursor-pointer" onClick={() => changeLanguage("en")}>
                      English
                    </button>
                    <span className="mx-2 text-gray-900">|</span>
                    <button className="header-text text-gray-900 hover:text-gray-900  font-semibold cursor-pointer" onClick={() => changeLanguage("fr")}>
                      French
                    </button>
                  </div>
                </div>
              </div>
            )}
            {/* End of mobile menu */}
            {/* Desktop navigation */}
            <div className="hidden md:flex md:ml-10 md:space-x-4 items-center">
              <Link href="/BooksPage">
                <span className="header-text text-gray-900 px-3 py-2 rounded-md text-base font-semibold cursor-pointer transition duration-300 border-b border-transparent hover:border-gray-300 hover:text-gray-900">
                  {translations.books}
                </span>
              </Link>
              <Link href="/AddBookPage">
                <span className="header-text text-gray-900 px-3 py-2 rounded-md text-base font-semibold cursor-pointer transition duration-300 border-b border-transparent hover:border-gray-300 hover:text-gray-900">
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
            {/* End of desktop navigation */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
