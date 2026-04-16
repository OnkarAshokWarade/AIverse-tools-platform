import React, { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import ToolCard from '../components/ToolCard';
import data from '../data/tools.json';
import ThemeBackdrop from '../components/ThemeBackdrop';
import { getCategoryTheme } from '../theme/categoryThemes';

const Tools = ({ isDarkMode, searchTerm = '' }) => {
  const { categoryId, subcategoryId } = useParams();
  const [pricingFilter, setPricingFilter] = useState('');

  const currentCategory = data.categories.find(c => c.id === categoryId);
  const currentSubcategory = currentCategory?.subcategories.find(s => s.id === subcategoryId);
  const theme = useMemo(
    () => getCategoryTheme(categoryId, isDarkMode, subcategoryId),
    [categoryId, isDarkMode, subcategoryId]
  );

  const filteredTools = useMemo(() => {
    let tools = data.tools;

    // Filter by category
    if (categoryId) {
      tools = tools.filter(t => t.category === categoryId);
    }

    // Filter by subcategory
    if (subcategoryId) {
      tools = tools.filter(t => t.subcategory === subcategoryId);
    }

    // Filter by search term
    if (searchTerm) {
      tools = tools.filter(t =>
        t.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        t.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by pricing
    if (pricingFilter) {
      tools = tools.filter(t => t.pricing === pricingFilter);
    }

    return tools;
  }, [categoryId, subcategoryId, searchTerm, pricingFilter]);

  return (
    <main className="theme-page min-h-screen py-16 px-4" style={theme.cssVars}>
      <ThemeBackdrop pattern={theme.pattern} motion={theme.motion} />
      <div
        key={`${categoryId || 'all'}-${subcategoryId || 'all'}-${isDarkMode ? 'dark' : 'light'}`}
        className="relative z-10 max-w-7xl mx-auto page-fade-in"
      >
        {/* Header */}
        <div className="mb-12">
          <p className="text-xs sm:text-sm tracking-[0.18em] uppercase mb-3" style={{ color: 'var(--theme-accent)' }}>
            {currentCategory ? `${currentCategory.name} Theme` : 'AIverse Dynamic Theme'}
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-2" style={{ color: 'var(--theme-heading)' }}>
            {searchTerm ? `Search Results: ${searchTerm}` : currentSubcategory?.name || currentCategory?.name || 'All Tools'}
          </h1>
          <p className="text-lg" style={{ color: 'var(--theme-muted)' }}>
            {currentSubcategory?.description || currentCategory?.description || 'Browse all AI tools'}
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 p-6 rounded-xl theme-glass-card">
          <h3 className="font-semibold mb-4" style={{ color: 'var(--theme-heading)' }}>
            Filters
          </h3>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setPricingFilter('')}
              className={`px-4 py-2 theme-filter-btn ${pricingFilter === '' ? 'is-active' : ''}`}
            >
              All Pricing
            </button>
            {['Free', 'Freemium', 'Paid'].map(pricing => (
              <button
                key={pricing}
                onClick={() => setPricingFilter(pricing)}
                className={`px-4 py-2 theme-filter-btn ${pricingFilter === pricing ? 'is-active' : ''}`}
              >
                {pricing}
              </button>
            ))}
          </div>
        </div>

        {/* Tools Grid */}
        {filteredTools.length > 0 ? (
          <>
            <p className="mb-6 text-sm" style={{ color: 'var(--theme-muted)' }}>
              Found {filteredTools.length} tool{filteredTools.length !== 1 ? 's' : ''}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTools.map(tool => (
                <ToolCard
                  key={tool.id}
                  tool={tool}
                  isDarkMode={isDarkMode}
                  theme={theme}
                />
              ))}
            </div>
          </>
        ) : (
          <div className={`text-center py-12`}>
            <p className="text-lg mb-6" style={{ color: 'var(--theme-muted)' }}>
              No tools found matching your criteria
            </p>
            <button
              onClick={() => setPricingFilter('')}
              className="px-6 py-3 rounded-lg font-semibold theme-primary-button"
            >
              Try a Different Filter
            </button>
          </div>
        )}
      </div>
    </main>
  );
};

export default Tools;
