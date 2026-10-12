import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import ProductBadge from './ProductBadge';
import { formatCurrency } from '../../utils/formatCurrency';

/**
 * Reusable Product Card component.
 *
 * NOTE FOR STUDENTS & INSTRUCTORS:
 * The "Add to Cart" button is strictly presentational in this starter template.
 * You can connect it to your useReducer / Context cart action during class exercises!
 */
export default function ProductCard({ product }) {
  if (!product) return null;

  const {
    id,
    name,
    category,
    price,
    originalPrice,
    image,
    rating,
    reviewCount,
    badge,
    inStock = true,
  } = product;

  return (
    <div className="group relative bg-white border border-neutral-200/80 rounded-xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-lg hover:border-neutral-300">
      
      {/* Top Image Container */}
      <div className="relative aspect-square w-full bg-[#F8F8F6] overflow-hidden">
        <Link to={`/product/${id}`} className="block w-full h-full">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
            loading="lazy"
          />
        </Link>

        {/* Badge */}
        {badge && (
          <div className="absolute top-3 left-3 pointer-events-none">
            <ProductBadge text={badge} />
          </div>
        )}

        {/* Quick Add to Cart Presentational Button (Floats on hover on desktop) */}
        <div className="absolute bottom-3 inset-x-3 transition-all duration-300 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 hidden sm:block">
          <button
            type="button"
            disabled={!inStock}
            className={`w-full py-2.5 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 shadow-md transition-colors ${
              inStock
                ? 'bg-neutral-900 text-white hover:bg-neutral-800 active:bg-neutral-950'
                : 'bg-neutral-200 text-neutral-500 cursor-not-allowed'
            }`}
            aria-label={`Add ${name} to cart`}
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>{inStock ? 'Add to Cart' : 'Out of Stock'}</span>
          </button>
        </div>
      </div>

      {/* Product Details */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Category & Rating */}
          <div className="flex items-center justify-between text-xs text-neutral-500 mb-1.5">
            <span className="uppercase tracking-wider font-medium text-[11px]">
              {category}
            </span>
            {rating && (
              <span className="flex items-center gap-1 font-medium text-neutral-700">
                <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                <span>{rating.toFixed(1)}</span>
                {reviewCount && (
                  <span className="text-neutral-400">({reviewCount})</span>
                )}
              </span>
            )}
          </div>

          {/* Product Name */}
          <h3 className="text-sm font-semibold text-neutral-900 line-clamp-1 group-hover:text-orange-600 transition-colors">
            <Link to={`/product/${id}`}>
              {name}
            </Link>
          </h3>
        </div>

        {/* Price & Mobile Add-to-cart button */}
        <div className="mt-3 pt-3 border-t border-neutral-100 flex items-center justify-between gap-2">
          <div className="flex items-baseline gap-2">
            <span className="text-base font-bold text-neutral-900">
              {formatCurrency(price)}
            </span>
            {originalPrice && originalPrice > price && (
              <span className="text-xs text-neutral-400 line-through">
                {formatCurrency(originalPrice)}
              </span>
            )}
          </div>

          {/* Mobile visible Add-to-Cart button */}
          <button
            type="button"
            disabled={!inStock}
            className="sm:hidden p-2 rounded-lg bg-neutral-900 text-white hover:bg-neutral-800 disabled:bg-neutral-200 disabled:text-neutral-400"
            aria-label={`Add ${name} to cart`}
          >
            <ShoppingBag className="w-4 h-4" />
          </button>
        </div>

      </div>

    </div>
  );
}
