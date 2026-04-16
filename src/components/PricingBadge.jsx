import React from 'react';

const PricingBadge = ({ pricing, isDarkMode }) => {
  const getStyles = () => {
    switch (pricing) {
      case 'Free':
        return isDarkMode
          ? 'bg-green-900 text-green-200'
          : 'bg-green-100 text-green-800';
      case 'Paid':
        return isDarkMode
          ? 'bg-blue-900 text-blue-200'
          : 'bg-blue-100 text-blue-800';
      case 'Freemium':
        return isDarkMode
          ? 'bg-purple-900 text-purple-200'
          : 'bg-purple-100 text-purple-800';
      default:
        return isDarkMode
          ? 'bg-gray-700 text-gray-200'
          : 'bg-gray-200 text-gray-800';
    }
  };

  return (
    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStyles()}`}>
      {pricing}
    </span>
  );
};

export default PricingBadge;
