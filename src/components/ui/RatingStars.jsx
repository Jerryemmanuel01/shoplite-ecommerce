import React from 'react';
import { Star } from 'lucide-react';

/**
 * Presentational star rating component.
 *
 * @param {number} rating - e.g. 4.8
 * @param {number} reviewCount - optional review count
 * @param {string} size - 'sm' | 'md'
 */
export default function RatingStars({ rating = 5, reviewCount, size = 'sm', showValue = false }) {
  const starSize = size === 'md' ? 'w-4 h-4' : 'w-3.5 h-3.5';
  const roundedRating = Math.round(rating);

  return (
    <div className="flex items-center gap-1.5" aria-label={`Rating: ${rating} out of 5 stars`}>
      <div className="flex items-center text-amber-400">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`${starSize} ${
              star <= roundedRating
                ? 'fill-amber-400 text-amber-400'
                : 'text-neutral-300 fill-neutral-100'
            }`}
          />
        ))}
      </div>

      {showValue && (
        <span className="text-xs font-semibold text-neutral-800 ml-0.5">
          {rating.toFixed(1)}
        </span>
      )}

      {typeof reviewCount === 'number' && (
        <span className="text-xs text-neutral-500">
          ({reviewCount})
        </span>
      )}
    </div>
  );
}
