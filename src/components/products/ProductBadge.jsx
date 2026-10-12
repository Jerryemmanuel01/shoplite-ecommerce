import React from 'react';

/**
 * Product status / promotional badge.
 */
export default function ProductBadge({ text, className = '' }) {
  if (!text) return null;

  const getStyle = () => {
    switch (text.toLowerCase()) {
      case 'best seller':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'new arrival':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'trending':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'sale':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'sold out':
        return 'bg-neutral-200 text-neutral-700 border-neutral-300';
      default:
        return 'bg-neutral-900 text-white border-neutral-800';
    }
  };

  return (
    <span
      className={`inline-block text-[11px] font-semibold tracking-wider uppercase px-2.5 py-0.5 rounded-full border shadow-2xs backdrop-blur-xs ${getStyle()} ${className}`}
    >
      {text}
    </span>
  );
}
