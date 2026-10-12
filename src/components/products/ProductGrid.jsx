import React from 'react';
import ProductCard from './ProductCard';

/**
 * Responsive grid container rendering ProductCards.
 * Uses CSS Grid: 1 col (mobile) -> 2 cols (sm) -> 3 cols (md/lg) -> 4 cols (xl).
 */
export default function ProductGrid({ products = [], emptyMessage = "No products found." }) {
  if (!products || products.length === 0) {
    return (
      <div className="py-16 text-center bg-[#F8F8F6] rounded-2xl border border-neutral-200">
        <p className="text-neutral-500 text-sm font-medium">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
