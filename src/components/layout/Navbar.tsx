import { useState } from 'react';
import { NavLink } from 'react-router-dom';

interface NavbarProps {
  data: {
    lang?: {
      menus?: string[];
    };
  };
  convertLang: (lang: string) => void;
}

export default function Navbar({ data, convertLang }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Use data to get menu labels for better i18n support
  const menuLabels = data.lang?.menus || ['Home', 'Experiences', 'Services', 'Portfolios', 'Lang', 'Certificates'];

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand Logo */}
          <div className="flex-shrink-0 flex items-center">
            <NavLink to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-blue-500/30 transition-all duration-300 group-hover:scale-105">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <span className="text-xl font-bold text-gray-800 hidden sm:block group-hover:text-blue-600 transition-colors duration-300">
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
                  : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                  }`}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Language Selector & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="relative group">
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 text-gray-600 hover:text-blue-600 hover:border-blue-200 transition-all duration-300 bg-white hover:bg-blue-50">
                <span className="fa fa-globe text-blue-500"></span>
                <span className="text-sm font-medium">EN</span>
                <span className="fa fa-chevron-down text-xs transition-transform duration-300 group-hover:rotate-180"></span>
              </button>
              {/* Dropdown menu */}
              <div className="absolute right-0 mt-2 w-40 bg-gray-50 rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-right">
                <div className="py-2">
                  <button
                    onClick={() => convertLang('english')}
                    className="w-full px-4 py-2 text-left text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200 flex items-center gap-3"
                  >
                    <img src="/icons/united-kingdom.svg" alt="English" className="w-6 h-3 flex-shrink-0" />
                    English
                  </button>
                  <button
                    onClick={() => convertLang('indo')}
                    className="w-full px-4 py-2 text-left text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200 flex items-center gap-3"
                  >
                    <img src="/icons/indonesia.svg" alt="Indonesia" className="w-6 h-3 flex-shrink-0" />
                    Indonesia
                  </button>
                  <button
                    onClick={() => convertLang('arab')}
                    className="w-full px-4 py-2 text-left text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200 flex items-center gap-3"
                  >
                    <img src="/icons/arabic.svg" alt="Arabic" className="w-6 h-3 flex-shrink-0" />
                    العربية
                  </button>
                </div>
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

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href="https://wa.me/6281907456710"
              className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center text-white shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-105"
            >
              <span className="fa fa-whatsapp text-lg"></span>
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-all duration-300 hover:scale-105"
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
          className={`absolute top-16 left-0 right-0 bg-white shadow-2xl transition-transform duration-300 ease-out ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
            }`}
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
                  : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600'
                  }`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <span className="fa fa-circle text-xs mr-3 opacity-0"></span>
                {item.label}
              </NavLink>
            ))}

            {/* Language Switcher Mobile */}
            <div className="border-t border-gray-100 pt-4 mt-4">
              <p className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                Bahasa
              </p>
              <div className="flex gap-2 px-4">
                <button
                  onClick={() => {
                    convertLang('english');
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex-1 py-2 px-4 rounded-lg border border-gray-200 text-sm font-medium text-gray-600 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <img src="/icons/united-kingdom.svg" alt="English" className="w-6 h-3 flex-shrink-0" />
                  English
                </button>
                <button
                  onClick={() => {
                    convertLang('indo');
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex-1 py-2 px-4 rounded-lg border border-gray-200 text-sm font-medium text-gray-600 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <img src="/icons/indonesia.svg" alt="Indonesia" className="w-6 h-3 flex-shrink-0" />
                  Indonesia
                </button>
                <button
                  onClick={() => {
                    convertLang('arab');
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex-1 py-2 px-4 rounded-lg border border-gray-200 text-sm font-medium text-gray-600 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <img src="/icons/arabic.svg" alt="Arabic" className="w-6 h-3 flex-shrink-0" />
                  العربية
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

