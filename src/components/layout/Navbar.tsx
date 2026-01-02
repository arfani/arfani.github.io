import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';

interface NavbarProps {
  data: {
    lang?: {
      menus?: string[];
      langEnglish?: string;
      langIndonesian?: string;
      langArabic?: string;
      darkModeLabel?: string;
      lightModeLabel?: string;
    };
    isDarkMode?: boolean;
  };
  convertLang: (lang: string) => void;
  toggleDarkMode: () => void;
  isDarkMode?: boolean;
}

export default function Navbar({ data, convertLang, toggleDarkMode, isDarkMode: propIsDarkMode }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('english');
  const isDarkModeRef = useRef(propIsDarkMode || false);
  const [isDarkMode, setIsDarkMode] = useState(propIsDarkMode || false);

  // Use data to get menu labels for better i18n support
  const menuLabels = data.lang?.menus || ['Home', 'Experiences', 'Services', 'Portfolios', 'Lang', 'Certificates'];

  // Get language display names
  const langLabels = {
    english: data.lang?.langEnglish || 'English',
    indo: data.lang?.langIndonesian || 'Indonesia',
    arab: data.lang?.langArabic || 'العربية',
  };

  // Get current language from localStorage on mount
  useEffect(() => {
    try {
      const savedLang = localStorage.getItem('preferredLang');
      if (savedLang) {
        setCurrentLang(savedLang);
      }
    } catch {
      console.log('Could not read language preference');
    }
  }, []);

  // Sync dark mode with prop changes
  useEffect(() => {
    if (propIsDarkMode !== undefined) {
      isDarkModeRef.current = propIsDarkMode;
      setIsDarkMode(propIsDarkMode);
    }
  }, [propIsDarkMode]);

  const handleLangChange = (lang: string) => {
    setCurrentLang(lang);
    convertLang(lang);
  };

  // Handle dark mode toggle
  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
    toggleDarkMode();

    // Apply dark mode class to documentElement
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // Get current language display label
  const getCurrentLangLabel = () => {
    switch (currentLang) {
      case 'indo':
        return langLabels.indo;
      case 'arab':
        return langLabels.arab;
      default:
        return langLabels.english;
    }
  };

  // Get current language flag
  const getCurrentFlag = () => {
    switch (currentLang) {
      case 'indo':
        return '/icons/indonesia.svg';
      case 'arab':
        return '/icons/arabic.svg';
      default:
        return '/icons/united-kingdom.svg';
    }
  };

  const navItems = [
    { path: '/', label: menuLabels[0] || 'Home' },
    { path: '/experiences', label: menuLabels[1] || 'Experiences' },
    { path: '/services', label: menuLabels[2] || 'Services' },
    { path: '/portfolios', label: menuLabels[3] || 'Portfolios' },
    { path: '/certificates', label: menuLabels[5] || 'Certificates' },
  ];

  const isActive = (path: string) => {
    return window.location.pathname === path;
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md shadow-sm border-b transition-colors duration-300 ${isDarkMode
      ? 'bg-gray-900/95 border-gray-800'
      : 'bg-white/95 border-gray-100'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand Logo */}
          <div className="flex-shrink-0 flex items-center">
            <NavLink to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-blue-500/30 transition-all duration-300 group-hover:scale-105">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <span className={`text-xl font-bold hidden sm:block group-hover:text-blue-600 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-800'
                }`}>
                r'Fun
              </span>
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${isActive(item.path)
                  ? 'bg-blue-50 text-blue-600 shadow-sm'
                  : isDarkMode
                    ? 'text-gray-300 hover:text-blue-400 hover:bg-gray-800'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                  }`}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Language Selector, Dark Mode Toggle & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={handleDarkModeToggle}
              className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-105 ${isDarkMode
                ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              title={isDarkMode ? (data.lang?.lightModeLabel || 'Light Mode') : (data.lang?.darkModeLabel || 'Dark Mode')}
            >
              {isDarkMode ? (
                <span className="fa fa-sun text-lg"></span>
              ) : (
                <span className="fa fa-moon text-lg"></span>
              )}
            </button>

            <div className="relative group">
              <button className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-300 hover:bg-blue-50 ${isDarkMode
                ? 'bg-gray-800 border-gray-700 text-gray-300 hover:text-blue-400 hover:border-blue-800 hover:bg-gray-700'
                : 'bg-white border-gray-200 text-gray-600 hover:text-blue-600 hover:border-blue-200'
                }`}>
                <img src={getCurrentFlag()} alt={getCurrentLangLabel()} className="w-6 h-4 flex-shrink-0" />
                <span className="text-sm font-medium">{getCurrentLangLabel()}</span>
                <span className="fa fa-chevron-down text-xs transition-transform duration-300 group-hover:rotate-180"></span>
              </button>
              {/* Dropdown menu */}
              <div className={`absolute right-0 mt-2 w-40 rounded-xl shadow-xl border py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-right ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'
                }`}>
                <button
                  onClick={() => handleLangChange('english')}
                  className={`w-full px-4 py-2 text-left text-sm transition-colors duration-200 flex items-center gap-3 ${isDarkMode
                    ? 'text-gray-300 hover:text-blue-400 hover:bg-gray-700'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                >
                  <img src="/icons/united-kingdom.svg" alt="English" className="w-6 h-3 flex-shrink-0" />
                  {langLabels.english}
                </button>
                <button
                  onClick={() => handleLangChange('indo')}
                  className={`w-full px-4 py-2 text-left text-sm transition-colors duration-200 flex items-center gap-3 ${isDarkMode
                    ? 'text-gray-300 hover:text-blue-400 hover:bg-gray-700'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                >
                  <img src="/icons/indonesia.svg" alt="Indonesia" className="w-6 h-3 flex-shrink-0" />
                  {langLabels.indo}
                </button>
                <button
                  onClick={() => handleLangChange('arab')}
                  className={`w-full px-4 py-2 text-left text-sm transition-colors duration-200 flex items-center gap-3 ${isDarkMode
                    ? 'text-gray-300 hover:text-blue-400 hover:bg-gray-700'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                >
                  <img src="/icons/arabic.svg" alt="Arabic" className="w-6 h-3 flex-shrink-0" />
                  {langLabels.arab}
                </button>
              </div>
            </div>

            <a
              href="https://wa.me/6281907456710"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-semibold rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300"
            >
              <span className="fa fa-whatsapp"></span>
              <span>Let's Talk</span>
            </a>
          </div>

          {/* Mobile Menu Button & Dark Mode Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            {/* Mobile Dark Mode Toggle */}
            <button
              onClick={handleDarkModeToggle}
              className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-105 ${isDarkMode
                ? 'bg-gray-800 text-yellow-400'
                : 'bg-gray-100 text-gray-600'
                }`}
            >
              {isDarkMode ? (
                <span className="fa fa-sun text-lg"></span>
              ) : (
                <span className="fa fa-moon text-lg"></span>
              )}
            </button>

            <a
              href="https://wa.me/6281907456710"
              className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center text-white shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-105"
            >
              <span className="fa fa-whatsapp text-lg"></span>
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-105 ${isDarkMode
                ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
            >
              {isMobileMenuOpen ? (
                <span className="fa fa-times text-lg"></span>
              ) : (
                <span className="fa fa-bars text-lg"></span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>

        {/* Mobile Menu Drawer */}
        <div
          className={`absolute top-16 left-0 right-0 shadow-2xl transition-transform duration-300 ease-out ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
            } ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}
        >
          <div className="px-4 py-6 space-y-2">
            {/* Mobile Navigation Links */}
            {navItems.map((item, index) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${isActive(item.path)
                  ? 'bg-blue-50 text-blue-600'
                  : isDarkMode
                    ? 'text-gray-300 hover:bg-gray-800 hover:text-blue-400'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600'
                  }`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <span className="fa fa-circle text-xs mr-3 opacity-0"></span>
                {item.label}
              </NavLink>
            ))}

            {/* Language Switcher Mobile */}
            <div className={`border-t pt-4 mt-4 ${isDarkMode ? 'border-gray-700' : 'border-gray-100'}`}>
              <p className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                Bahasa
              </p>
              <div className="flex gap-2 px-4">
                <button
                  onClick={() => {
                    handleLangChange('english');
                    setIsMobileMenuOpen(false);
                  }}
                  className={`flex-1 py-2 px-4 rounded-lg border text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 ${isDarkMode
                    ? 'border-gray-700 text-gray-300 hover:text-blue-400 hover:border-blue-800 hover:bg-gray-800'
                    : 'border-gray-200 text-gray-600 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50'
                    }`}
                >
                  <img src="/icons/united-kingdom.svg" alt="English" className="w-6 h-3 flex-shrink-0" />
                  {langLabels.english}
                </button>
                <button
                  onClick={() => {
                    handleLangChange('indo');
                    setIsMobileMenuOpen(false);
                  }}
                  className={`flex-1 py-2 px-4 rounded-lg border text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 ${isDarkMode
                    ? 'border-gray-700 text-gray-300 hover:text-blue-400 hover:border-blue-800 hover:bg-gray-800'
                    : 'border-gray-200 text-gray-600 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50'
                    }`}
                >
                  <img src="/icons/indonesia.svg" alt="Indonesia" className="w-6 h-3 flex-shrink-0" />
                  {langLabels.indo}
                </button>
                <button
                  onClick={() => {
                    handleLangChange('arab');
                    setIsMobileMenuOpen(false);
                  }}
                  className={`flex-1 py-2 px-4 rounded-lg border text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 ${isDarkMode
                    ? 'border-gray-700 text-gray-300 hover:text-blue-400 hover:border-blue-800 hover:bg-gray-800'
                    : 'border-gray-200 text-gray-600 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50'
                    }`}
                >
                  <img src="/icons/arabic.svg" alt="Arabic" className="w-6 h-3 flex-shrink-0" />
                  {langLabels.arab}
                </button>
              </div>
            </div>

            {/* CTA Button Mobile */}
            <div className="pt-4 px-4">
              <a
                href="https://wa.me/6281907456710"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 transition-all duration-300"
              >
                <span className="fa fa-whatsapp"></span>
                Let's Talk
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

