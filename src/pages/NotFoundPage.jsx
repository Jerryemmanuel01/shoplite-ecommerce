import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search } from 'lucide-react';
import PageContainer from '../components/layout/PageContainer';
import Button from '../components/ui/Button';

/**
 * Custom 404 Not Found Page for ShopLite (`*`).
 */
export default function NotFoundPage() {
  return (
    <div className="py-20 sm:py-32 flex items-center justify-center">
      <PageContainer size="narrow" className="text-center space-y-8">
        
        {/* Visual 404 Accent Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-600 text-xs font-bold uppercase tracking-wider">
          Error 404 • Page Not Found
        </div>

        {/* Big Heading */}
        <div className="space-y-3">
          <h1 className="text-6xl sm:text-8xl font-black tracking-tight text-neutral-900">
            4<span className="text-orange-500">0</span>4
          </h1>
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-800">
            We couldn't find the page you're looking for.
          </h2>
          <p className="text-sm sm:text-base text-neutral-500 max-w-md mx-auto leading-relaxed">
            The link you followed may have expired, or the product or category might have moved to a new destination.
          </p>
        </div>

        {/* Quick Action Navigation */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Button to="/" variant="primary" size="lg" className="w-full sm:w-auto">
            <Home className="w-4 h-4 mr-2" />
            <span>Return to Home</span>
          </Button>

          <Button to="/shop" variant="outline" size="lg" className="w-full sm:w-auto">
            <Search className="w-4 h-4 mr-2" />
            <span>Explore All Products</span>
          </Button>
        </div>

      </PageContainer>
    </div>
  );
}
