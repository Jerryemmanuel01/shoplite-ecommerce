import React from 'react';

/**
 * Standard container component to ensure responsive width and padding across all storefront pages.
 */
export default function PageContainer({ children, className = '', size = 'default' }) {
  const sizeStyles = {
    default: 'max-w-7xl',
    narrow: 'max-w-4xl',
    wide: 'max-w-[1440px]',
    full: 'max-w-full',
  };

  return (
    <div className={`mx-auto px-4 sm:px-6 lg:px-8 ${sizeStyles[size] || sizeStyles.default} ${className}`}>
      {children}
    </div>
  );
}
