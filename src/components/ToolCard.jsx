import React from 'react';
import { Link } from 'react-router-dom';

const ToolCard = ({ tool, isDarkMode, theme = null }) => {
  const getPricingColor = (pricing) => {
    switch (pricing) {
      case 'Free':
        return 'bg-green-500/20 text-green-600 dark:text-green-400';
      case 'Paid':
        return 'bg-blue-500/20 text-blue-600 dark:text-blue-400';
      case 'Freemium':
        return 'bg-purple-500/20 text-purple-600 dark:text-purple-400';
      default:
        return 'bg-gray-500/20 text-gray-600 dark:text-gray-400';
    }
  };

  const isThemed = Boolean(theme);

  return (
    <Link to={`/tool/${tool.id}`}>
      <div
        className={
          isThemed
            ? 'h-full rounded-lg overflow-hidden cursor-pointer theme-glass-card theme-card-hover'
            : `h-full rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer ${
                isDarkMode ? 'bg-slate-800 hover:bg-slate-700' : 'bg-white hover:bg-gray-50'
              } border ${isDarkMode ? 'border-slate-700 hover:border-blue-500' : 'border-gray-200 hover:border-blue-400'}`
        }
      >
        {/* Image */}
        <div
          className={`w-full h-40 flex items-center justify-center overflow-hidden ${
            isThemed ? '' : 'bg-gradient-to-br from-blue-500 to-purple-500'
          }`}
          style={
            isThemed
              ? {
                  backgroundImage: 'linear-gradient(135deg, var(--theme-accent), var(--theme-accent-strong))',
                }
              : undefined
          }
        >
          <img
            src={tool.image}
            alt={tool.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
          {!tool.image && (
            <span className="text-white text-4xl font-bold opacity-30">{tool.name.charAt(0)}</span>
          )}
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="flex justify-between items-start gap-2 mb-2">
            <h3
              className={`text-lg font-bold ${isThemed ? '' : isDarkMode ? 'text-white' : 'text-gray-900'}`}
              style={isThemed ? { color: 'var(--theme-heading)' } : undefined}
            >
              {tool.name}
            </h3>
            <span className={`text-xs font-semibold px-2 py-1 rounded-full whitespace-nowrap ${getPricingColor(tool.pricing)}`}>
              {tool.pricing}
            </span>
          </div>

          <p
            className={`text-sm mb-3 line-clamp-2 ${isThemed ? '' : isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}
            style={isThemed ? { color: 'var(--theme-muted)' } : undefined}
          >
            {tool.description}
          </p>

          <p
            className={`text-xs ${isThemed ? '' : isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}
            style={isThemed ? { color: 'var(--theme-muted)' } : undefined}
          >
            <strong>Use case:</strong> {tool.useCase}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ToolCard;
