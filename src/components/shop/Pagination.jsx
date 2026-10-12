import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * Presentational pagination and "Load More" controls.
 * 
 * NOTE FOR STUDENTS:
 * Pagination state (page numbers, items per page slice) will be implemented
 * using `useState` in class.
 */
export default function Pagination({ currentPage = 1, totalPages = 3, className = '' }) {
  return (
    <div className={`flex flex-col sm:flex-row items-center justify-between gap-4 pt-10 border-t border-neutral-200 ${className}`}>
      
      {/* Mobile / Secondary CTA: Load More button */}
      <div className="w-full sm:w-auto text-center order-2 sm:order-1">
        <button
          type="button"
          className="w-full sm:w-auto px-6 py-2.5 rounded-lg border border-neutral-300 bg-white hover:bg-neutral-50 text-xs font-semibold text-neutral-800 transition-colors shadow-2xs"
        >
          Load More Products
        </button>
      </div>

      {/* Numerical Page Selector */}
      <nav aria-label="Pagination" className="flex items-center gap-1.5 order-1 sm:order-2">
        <button
          type="button"
          disabled
          className="p-2 rounded-md border border-neutral-200 text-neutral-400 cursor-not-allowed hover:bg-neutral-50"
          aria-label="Previous page"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <button
          type="button"
          className="w-9 h-9 rounded-md text-xs font-bold bg-neutral-900 text-white"
          aria-current="page"
        >
          1
        </button>

        <button
          type="button"
          className="w-9 h-9 rounded-md text-xs font-medium text-neutral-700 hover:bg-neutral-100 transition-colors"
        >
          2
        </button>

        <button
          type="button"
          className="w-9 h-9 rounded-md text-xs font-medium text-neutral-700 hover:bg-neutral-100 transition-colors"
        >
          3
        </button>

        <button
          type="button"
          className="p-2 rounded-md border border-neutral-200 text-neutral-700 hover:bg-neutral-50 transition-colors"
          aria-label="Next page"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </nav>

    </div>
  );
}
