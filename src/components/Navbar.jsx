import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX, FiMoon, FiSun, FiSearch } from 'react-icons/fi';

const Navbar = ({ isDarkMode, setIsDarkMode, onSearch, searchTerm = '' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchInput, setSearchInput] = useState(searchTerm);

  useEffect(() => {
    setSearchInput(searchTerm);
  }, [searchTerm]);

  const handleSearch = (value) => {
    setSearchInput(value);
    onSearch(value);
  };

  return (
    <nav className={`${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-gray-200'} sticky top-0 z-50 border-b shadow-md`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className={`text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent`}>
              AIverse
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`${isDarkMode ? 'hover:text-blue-400' : 'hover:text-blue-600'} transition`}>Home</Link>
            <Link to="/categories" className={`${isDarkMode ? 'hover:text-blue-400' : 'hover:text-blue-600'} transition`}>Categories</Link>
            <Link to="/blog" className={`${isDarkMode ? 'hover:text-blue-400' : 'hover:text-blue-600'} transition`}>Blog</Link>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center gap-2">
            <div className={`flex items-center gap-2 px-3 py-2 rounded-lg ${isDarkMode ? 'bg-slate-800' : 'bg-gray-100'}`}>
              <FiSearch size={18} />
              <input
                type="text"
                placeholder="Search tools..."
                value={searchInput}
                onChange={(e) => handleSearch(e.target.value)}
                className={`bg-transparent outline-none w-48 ${isDarkMode ? 'text-white placeholder-gray-400' : 'text-gray-900 placeholder-gray-500'}`}
              />
            </div>
          </div>

          {/* Dark Mode Toggle & Menu Button */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-lg ${isDarkMode ? 'bg-slate-800 hover:bg-slate-700' : 'bg-gray-100 hover:bg-gray-200'} transition`}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`md:hidden pb-4 space-y-3`}>
            <Link to="/" className="block py-2 hover:text-blue-500 transition" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/categories" className="block py-2 hover:text-blue-500 transition" onClick={() => setIsMenuOpen(false)}>Categories</Link>
            <Link to="/blog" className="block py-2 hover:text-blue-500 transition" onClick={() => setIsMenuOpen(false)}>Blog</Link>
            <div className={`flex items-center gap-2 px-3 py-2 rounded-lg ${isDarkMode ? 'bg-slate-800' : 'bg-gray-100'}`}>
              <FiSearch size={18} />
              <input
                type="text"
                placeholder="Search tools..."
                value={searchInput}
                onChange={(e) => handleSearch(e.target.value)}
                className={`bg-transparent outline-none w-full ${isDarkMode ? 'text-white placeholder-gray-400' : 'text-gray-900 placeholder-gray-500'}`}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
