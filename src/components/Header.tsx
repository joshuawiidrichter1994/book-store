import Link from "next/link";
import { useState, useRef, useEffect } from "react";

const Header = () => {
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (dropdownRef.current && event.target && !dropdownRef.current.contains(event.target as Node)) {
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

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
    setIsLanguageDropdownOpen(false);
    // You can add logic here to change the language of your app
    // For now, let's just console log the selected language
    console.log("Selected language:", language);
  };

  return (
    <header className="bg-gradient-to-r from-blue-300 to-blue-800 text-white py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              {/* Your Logo or Site Name */}
              <Link href="/">
                <span className="text-white text-2xl font-bold cursor-pointer">UrbanEagle Books</span>
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            {/* Navigation Links */}
            <div className="hidden md:flex md:ml-10 md:space-x-4 items-center">
              <Link href="/BooksPage">
                <span className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">Books</span>
              </Link>
              <Link href="/AddBookPage">
                <span className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">Add Book</span>
              </Link>
              <div className="text-gray-300">|</div>
              {/* Language Dropdown */}
              <div className="relative ml-4" ref={dropdownRef}>
                <button onClick={toggleLanguageDropdown} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">
                  Language
                </button>
                {isLanguageDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                    <ul>
                      <li onClick={() => handleLanguageChange("English")} className="cursor-pointer px-4 py-2 hover:bg-gray-100 text-gray-900 text-xs">English</li>
                      <li onClick={() => handleLanguageChange("French")} className="cursor-pointer px-4 py-2 hover:bg-gray-100 text-gray-900 text-xs">French</li>
                      {/* Add more languages as needed */}
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
