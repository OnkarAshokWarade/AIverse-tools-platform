import React from 'react';
import { useNavigate } from 'react-router-dom';
import ToolCard from '../components/ToolCard';
import data from '../data/tools.json';
import { FiArrowRight } from 'react-icons/fi';

const Search = ({ isDarkMode, searchTerm }) => {
  const navigate = useNavigate();
  const normalizedSearch = searchTerm.trim().toLowerCase();

  const results = normalizedSearch
    ? data.tools.filter(
        (tool) =>
          tool.name.toLowerCase().includes(normalizedSearch) ||
          tool.description.toLowerCase().includes(normalizedSearch) ||
          tool.fullDescription.toLowerCase().includes(normalizedSearch)
      )
    : [];

  return (
    <main className={`min-h-screen py-16 px-4 page-fade-in ${isDarkMode ? 'bg-slate-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className={`text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Search Results
          </h1>
          <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Search for: <strong>{searchTerm || '...'}</strong>
          </p>
        </div>

        {!normalizedSearch ? (
          <div className="text-center py-12">
            <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Start typing in the search bar to find AI tools.
            </p>
          </div>
        ) : results.length > 0 ? (
          <>
            <p className={`mb-8 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Found {results.length} result{results.length !== 1 ? 's' : ''}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {results.map(tool => (
                <ToolCard
                  key={tool.id}
                  tool={tool}
                  isDarkMode={isDarkMode}
                />
              ))}
            </div>
          </>
        ) : (
          <div className={`text-center py-12`}>
            <p className={`text-lg mb-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              No tools found matching "{searchTerm}"
            </p>
            <button
              onClick={() => navigate('/categories')}
              className="text-blue-500 hover:text-blue-600 inline-flex items-center gap-2 font-semibold"
            >
              Browse Categories <FiArrowRight />
            </button>
          </div>
        )}
      </div>
    </main>
  );
};

export default Search;

