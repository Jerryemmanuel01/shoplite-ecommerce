import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

/**
 * Reusable breadcrumb navigation component.
 *
 * @param {Array<{ label: string, to?: string }>} items
 */
export default function Breadcrumbs({ items = [] }) {
  return (
    <nav aria-label="Breadcrumb" className="py-3 text-xs sm:text-sm text-neutral-500">
      <ol className="flex items-center flex-wrap gap-1 sm:gap-1.5">
        <li className="flex items-center">
          <Link
            to="/"
            className="flex items-center gap-1 text-neutral-500 hover:text-neutral-900 transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center gap-1 sm:gap-1.5">
              <ChevronRight className="w-3 h-3 text-neutral-400 shrink-0" />
              {isLast || !item.to ? (
                <span className="font-medium text-neutral-900 truncate max-w-[200px] sm:max-w-xs" aria-current={isLast ? 'page' : undefined}>
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.to}
                  className="hover:text-neutral-900 transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
