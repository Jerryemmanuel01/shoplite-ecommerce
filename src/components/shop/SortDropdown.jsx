import React from 'react';
import { ArrowUpDown } from 'lucide-react';

/**
 * Presentational sort dropdown for catalog ordering.
 * 
 * Options: Featured, Price: Low to High, Price: High to Low, Newest
 */
export default function SortDropdown({ className = '' }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <label htmlFor="shop-sort" className="text-xs font-medium text-neutral-500 whitespace-nowrap hidden sm:inline-block">
        Sort by:
      </label>
      <div className="relative">
        <select
          id="shop-sort"
          defaultValue="featured"
          className="appearance-none bg-white text-xs sm:text-sm font-medium text-neutral-800 border border-neutral-200 rounded-lg pl-3 pr-8 py-2 hover:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 cursor-pointer shadow-2xs"
        >
          <option value="featured">Featured</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="newest">Newest Arrivals</option>
        </select>
        <ArrowUpDown className="w-3.5 h-3.5 text-neutral-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
      </div>
    </div>
  );
}
