import React from 'react';
import { Link } from 'react-router-dom';
import {
  FiImage,
  FiTrendingUp,
  FiCode,
  FiBarChart2,
  FiBook,
  FiBriefcase,
} from 'react-icons/fi';
import { getCategoryTheme } from '../theme/categoryThemes';

const CategoryCard = ({ category, isDarkMode }) => {
  const theme = getCategoryTheme(category.id, isDarkMode);

  const getIcon = (categoryId) => {
    const iconProps = { size: 32, className: 'transition', style: { color: 'var(--theme-accent)' } };
    switch (categoryId) {
      case 'creative':
        return <FiImage {...iconProps} />;
      case 'productivity':
        return <FiTrendingUp {...iconProps} />;
      case 'code-development':
        return <FiCode {...iconProps} />;
      case 'analytics':
        return <FiBarChart2 {...iconProps} />;
      case 'education':
        return <FiBook {...iconProps} />;
      case 'business':
        return <FiBriefcase {...iconProps} />;
      default:
        return <FiImage {...iconProps} />;
    }
  };

  return (
    <Link to={`/category/${category.id}`}>
      <div
        style={theme.cssVars}
        className="group p-6 rounded-lg cursor-pointer theme-glass-card theme-card-hover"
      >
        <div className="mb-4">{getIcon(category.id)}</div>
        <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--theme-heading)' }}>
          {category.name}
        </h3>
        <p className="text-sm" style={{ color: 'var(--theme-muted)' }}>
          {category.description}
        </p>
        <div className="mt-4 flex items-center gap-2 transition text-sm font-semibold" style={{ color: 'var(--theme-accent)' }}>
          Explore {category.subcategories?.length || 0} subcategories
          <span>→</span>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
