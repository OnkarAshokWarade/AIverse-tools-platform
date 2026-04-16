import React from 'react';
import { useNavigate } from 'react-router-dom';
import data from '../data/tools.json';
import { FiArrowRight } from 'react-icons/fi';
import { getCategoryTheme } from '../theme/categoryThemes';

const Categories = ({ isDarkMode }) => {
  const navigate = useNavigate();

  return (
    <main className={`min-h-screen py-16 px-4 ${isDarkMode ? 'bg-slate-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto page-fade-in">
        <div className="mb-12">
          <h1 className={`text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            AI Tool Categories
          </h1>
          <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Browse and explore AI tools organized by category and subcategory
          </p>
        </div>

        <div className="space-y-12">
          {data.categories.map((category) => (
            <div key={category.id} className="p-6 rounded-xl theme-glass-card" style={getCategoryTheme(category.id, isDarkMode).cssVars}>
              <h2 className="text-3xl font-bold mb-2" style={{ color: 'var(--theme-heading)' }}>
                {category.name}
              </h2>
              <p className="mb-6" style={{ color: 'var(--theme-muted)' }}>
                {category.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.subcategories.map((subcategory) => (
                  <button
                    key={subcategory.id}
                    onClick={() => navigate(`/category/${category.id}/${subcategory.id}`)}
                    className="p-6 rounded-lg text-left transition-all duration-300 hover:-translate-y-1 theme-glass-card theme-card-hover"
                  >
                    <h3 className="text-lg font-bold mb-2 flex items-center gap-2" style={{ color: 'var(--theme-heading)' }}>
                      {subcategory.name}
                      <FiArrowRight style={{ color: 'var(--theme-accent)' }} />
                    </h3>
                    <p className="text-sm" style={{ color: 'var(--theme-muted)' }}>
                      {subcategory.description}
                    </p>
                    <div className="mt-4 text-sm font-semibold transition" style={{ color: 'var(--theme-accent)' }}>
                      View Tools {'->'}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Categories;
