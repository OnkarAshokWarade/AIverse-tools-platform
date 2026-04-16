import React from 'react';
import { Link } from 'react-router-dom';
import { FiGithub, FiTwitter, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer = ({ isDarkMode }) => {
  return (
    <footer className={`${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-gray-50 border-gray-200'} border-t mt-16`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              AIverse
            </h3>
            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
              Discover and explore the best AI tools for your needs.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className={`font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className={`${isDarkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'} transition text-sm`}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/categories" className={`${isDarkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'} transition text-sm`}>
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/blog" className={`${isDarkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'} transition text-sm`}>
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className={`font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Popular Categories
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/category/creative" className={`${isDarkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'} transition text-sm`}>
                  Creative AI
                </Link>
              </li>
              <li>
                <Link to="/category/productivity" className={`${isDarkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'} transition text-sm`}>
                  Productivity
                </Link>
              </li>
              <li>
                <Link to="/category/code-development" className={`${isDarkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'} transition text-sm`}>
                  Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className={`font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Connect
            </h4>
            <div className="flex gap-4">
              <a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'} transition`}>
                <FiGithub size={20} />
              </a>
              <a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'} transition`}>
                <FiTwitter size={20} />
              </a>
              <a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'} transition`}>
                <FiLinkedin size={20} />
              </a>
              <a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'} transition`}>
                <FiMail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className={`border-t ${isDarkMode ? 'border-slate-800' : 'border-gray-200'} pt-8 text-center`}>
          <p className={`${isDarkMode ? 'text-gray-500' : 'text-gray-600'} text-sm`}>
           © 2026 Alverse.
Discover the best AI tools for productivity and creativity.
Built with ❤️ by OnkarWarade
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
