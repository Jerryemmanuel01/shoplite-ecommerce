import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

/**
 * Visual Category Card for homepage category grid and shop page shortcuts.
 */
export default function CategoryCard({ category }) {
  if (!category) return null;

  const { name, slug, image, itemCount, description } = category;

  return (
    <Link
      to={`/shop?category=${slug}`}
      className="group relative rounded-2xl overflow-hidden aspect-4/3 sm:aspect-square bg-neutral-100 flex flex-col justify-end p-6 border border-neutral-200/60 shadow-xs hover:shadow-xl transition-all duration-300"
    >
      {/* Background Image with dark gradient overlay */}
      <img
        src={image}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/85 via-neutral-950/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-white">
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs uppercase font-semibold tracking-wider text-orange-400">
            {itemCount || '4'} Items
          </span>
          <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-orange-500 transition-colors">
            <ArrowUpRight className="w-4 h-4" />
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mt-1 group-hover:text-orange-200 transition-colors">
          {name}
        </h3>

        {description && (
          <p className="text-xs text-neutral-300 mt-1 line-clamp-1 opacity-90 hidden sm:block">
            {description}
          </p>
        )}
      </div>
    </Link>
  );
}
