import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import ProductCard from './ProductCard';
import { products } from '../../data/products';

/**
 * Related products section for the Product Details page.
 */
export default function RelatedProducts({ currentProductId, currentCategory }) {
  // Filter products by same category excluding current product, take first 4
  const related = products
    .filter((p) => p.id !== currentProductId && (!currentCategory || p.category === currentCategory))
    .slice(0, 4);

  // Fallback to any 4 items if not enough in same category
  const displayItems = related.length >= 2 ? related : products.filter((p) => p.id !== currentProductId).slice(0, 4);

  return (
    <section className="mt-16 sm:mt-24 pt-12 border-t border-neutral-200">
      <SectionHeading
        badge="Recommendations"
        title="You Might Also Like"
        subtitle="Complementary essentials curated to pair seamlessly with your selection."
        actionText="View all catalog"
        actionTo="/shop"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {displayItems.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </section>
  );
}
