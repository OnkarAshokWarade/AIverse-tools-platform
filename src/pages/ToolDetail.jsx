import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiExternalLink, FiArrowLeft } from 'react-icons/fi';
import PricingBadge from '../components/PricingBadge';
import ToolCard from '../components/ToolCard';
import data from '../data/tools.json';

const ToolDetail = ({ isDarkMode }) => {
  const { toolId } = useParams();
  const tool = data.tools.find(t => t.id === toolId);

  const similarTools = useMemo(() => {
    if (!tool) return [];
    return data.tools
      .filter(t => t.category === tool.category && t.id !== tool.id)
      .slice(0, 3);
  }, [tool]);

  if (!tool) {
    return (
      <main className={`min-h-screen py-16 px-4 page-fade-in ${isDarkMode ? 'bg-slate-900' : 'bg-white'}`}>
        <div className="max-w-3xl mx-auto text-center">
          <h1 className={`text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Tool Not Found
          </h1>
          <Link to="/categories" className="text-blue-500 hover:text-blue-600 inline-flex items-center gap-2">
            <FiArrowLeft /> Back to Categories
          </Link>
        </div>
      </main>
    );
  }

  const category = data.categories.find(c => c.id === tool.category);
  const subcategory = category?.subcategories.find(s => s.id === tool.subcategory);

  return (
    <main className={`min-h-screen py-16 px-4 page-fade-in ${isDarkMode ? 'bg-slate-900' : 'bg-white'}`}>
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link to="/categories" className={`inline-flex items-center gap-2 mb-8 ${isDarkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'} transition`}>
          <FiArrowLeft /> Back
        </Link>

        {/* Tool Header */}
        <div className={`rounded-lg overflow-hidden ${isDarkMode ? 'bg-slate-800' : 'bg-gray-50'} border ${isDarkMode ? 'border-slate-700' : 'border-gray-200'} mb-8`}>
          {/* Hero Image */}
          <div className="w-full h-80 bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center overflow-hidden">
            <img
              src={tool.image}
              alt={tool.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            {!tool.image && (
              <span className="text-white text-9xl font-bold opacity-20">{tool.name.charAt(0)}</span>
            )}
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="mb-6">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h1 className={`text-5xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {tool.name}
                  </h1>
                  <div className="flex gap-2 mb-4">
                    {category && (
                      <Link to={`/category/${category.id}`} className={`text-sm px-3 py-1 rounded-full ${isDarkMode ? 'bg-slate-700 text-gray-300 hover:text-blue-400' : 'bg-gray-200 text-gray-700 hover:text-blue-600'} transition`}>
                        {category.name}
                      </Link>
                    )}
                    {subcategory && (
                      <Link to={`/category/${category.id}/${subcategory.id}`} className={`text-sm px-3 py-1 rounded-full ${isDarkMode ? 'bg-slate-700 text-gray-300 hover:text-blue-400' : 'bg-gray-200 text-gray-700 hover:text-blue-600'} transition`}>
                        {subcategory.name}
                      </Link>
                    )}
                  </div>
                </div>
                <PricingBadge pricing={tool.pricing} isDarkMode={isDarkMode} />
              </div>

              <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {tool.fullDescription}
              </p>
            </div>

            {/* Visit Button */}
            <a
              href={tool.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              Visit Tool <FiExternalLink />
            </a>
          </div>
        </div>

        {/* Use Case and Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Use Case */}
          <div className={`p-8 rounded-lg border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-gray-50 border-gray-200'}`}>
            <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Use Cases
            </h2>
            <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
              {tool.useCase}
            </p>
          </div>

          {/* Features */}
          <div className={`p-8 rounded-lg border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-gray-50 border-gray-200'}`}>
            <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Key Features
            </h2>
            <ul className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {tool.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold mt-1">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Similar Tools */}
        {similarTools.length > 0 && (
          <div>
            <h2 className={`text-3xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Similar Tools
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {similarTools.map(similarTool => (
                <ToolCard
                  key={similarTool.id}
                  tool={similarTool}
                  isDarkMode={isDarkMode}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default ToolDetail;

