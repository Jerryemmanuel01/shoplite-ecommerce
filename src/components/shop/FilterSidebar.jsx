import React from 'react';
import { Filter, Star, Check } from 'lucide-react';
import { categories } from '../../data/categories';

/**
 * Filter Sidebar for the Shop page.
 * 
 * NOTE FOR STUDENTS & INSTRUCTOR:
 * All filter controls here are purely presentational in this scaffold.
 * Students will wire these inputs to React state (`useState`) or URL query params
 * to filter the rendered product list dynamically during classroom exercises!
 */
export default function FilterSidebar({ className = '' }) {
  return (
    <aside className={`w-full space-y-6 ${className}`}>
      
      {/* Filter Heading & Clear Mockup */}
      <div className="flex items-center justify-between pb-4 border-b border-neutral-200">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-orange-500" />
          <h2 className="text-sm font-bold uppercase tracking-wider text-neutral-900">
            Filters
          </h2>
        </div>
        <button
          type="button"
          className="text-xs text-neutral-500 hover:text-orange-600 transition-colors font-medium"
        >
          Reset All
        </button>
      </div>

      {/* Category Filter */}
      <div className="space-y-3 pb-6 border-b border-neutral-200">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-700">
          Category
        </h3>
        <div className="space-y-2">
          <label className="flex items-center gap-2.5 text-sm text-neutral-800 cursor-pointer group">
            <input
              type="radio"
              name="category-filter"
              defaultChecked
              className="w-4 h-4 text-orange-500 focus:ring-orange-400 border-neutral-300"
            />
            <span className="font-medium group-hover:text-neutral-900">All Categories</span>
          </label>

          {categories.map((cat) => (
            <label
              key={cat.id}
              className="flex items-center justify-between text-sm text-neutral-600 cursor-pointer group hover:text-neutral-900"
            >
              <span className="flex items-center gap-2.5">
                <input
                  type="radio"
                  name="category-filter"
                  className="w-4 h-4 text-orange-500 focus:ring-orange-400 border-neutral-300"
                />
                <span>{cat.name}</span>
              </span>
              <span className="text-xs text-neutral-400 bg-neutral-100 px-2 py-0.5 rounded-full">
                {cat.itemCount}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range Filter */}
      <div className="space-y-3 pb-6 border-b border-neutral-200">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-700">
          Price Range (₦)
        </h3>
        <div className="space-y-3">
          <input
            type="range"
            min="0"
            max="150000"
            defaultValue="150000"
            className="w-full accent-orange-500 cursor-pointer"
          />
          <div className="flex items-center justify-between gap-2 text-xs">
            <div className="flex-1 p-2 bg-neutral-50 border border-neutral-200 rounded-md text-neutral-700">
              <span className="block text-[10px] text-neutral-400">Min</span>
              <span>₦0</span>
            </div>
            <span className="text-neutral-400">—</span>
            <div className="flex-1 p-2 bg-neutral-50 border border-neutral-200 rounded-md text-neutral-700">
              <span className="block text-[10px] text-neutral-400">Max</span>
              <span>₦150,000</span>
            </div>
          </div>
        </div>
      </div>

      {/* Availability Filter */}
      <div className="space-y-3 pb-6 border-b border-neutral-200">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-700">
          Availability
        </h3>
        <div className="space-y-2">
          <label className="flex items-center gap-2.5 text-sm text-neutral-600 cursor-pointer hover:text-neutral-900">
            <input
              type="checkbox"
              defaultChecked
              className="w-4 h-4 rounded text-orange-500 focus:ring-orange-400 border-neutral-300"
            />
            <span>In Stock Only</span>
          </label>
          <label className="flex items-center gap-2.5 text-sm text-neutral-600 cursor-pointer hover:text-neutral-900">
            <input
              type="checkbox"
              className="w-4 h-4 rounded text-orange-500 focus:ring-orange-400 border-neutral-300"
            />
            <span>On Sale Items</span>
          </label>
        </div>
      </div>

      {/* Customer Rating Filter */}
      <div className="space-y-3">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-700">
          Customer Rating
        </h3>
        <div className="space-y-2">
          {[4, 3, 2].map((stars) => (
            <label
              key={stars}
              className="flex items-center gap-2.5 text-sm text-neutral-600 cursor-pointer hover:text-neutral-900"
            >
              <input
                type="checkbox"
                className="w-4 h-4 rounded text-orange-500 focus:ring-orange-400 border-neutral-300"
              />
              <span className="flex items-center gap-1">
                <span className="flex items-center text-amber-400">
                  {Array.from({ length: stars }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </span>
                <span className="text-xs text-neutral-500">& above</span>
              </span>
            </label>
          ))}
        </div>
      </div>

    </aside>
  );
}
