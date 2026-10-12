import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

/**
 * Reusable section header with title, subtitle, optional badge, and link.
 */
export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = 'left',
  actionText,
  actionTo,
  className = '',
}) {
  const isCentered = align === 'center';

  return (
    <div className={`mb-8 sm:mb-12 ${isCentered ? 'text-center' : ''} ${className}`}>
      <div className={`flex flex-col sm:flex-row sm:items-end justify-between gap-4 ${isCentered ? 'items-center' : ''}`}>
        <div className={isCentered ? 'max-w-2xl mx-auto' : 'max-w-2xl'}>
          {badge && (
            <span className="inline-block text-xs uppercase tracking-widest font-semibold text-orange-600 bg-orange-50 px-2.5 py-1 rounded-full mb-3 border border-orange-100">
              {badge}
            </span>
          )}
          {title && (
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="mt-2 text-sm sm:text-base text-neutral-600 leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        {actionText && actionTo && (
          <Link
            to={actionTo}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-900 hover:text-orange-600 transition-colors group shrink-0"
          >
            <span>{actionText}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        )}
      </div>
    </div>
  );
}
