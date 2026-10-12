import React from 'react';
import { Truck, Sparkles } from 'lucide-react';

/**
 * Top announcement bar displaying a short promotional message.
 */
export default function AnnouncementBar() {
  return (
    <div className="bg-neutral-900 text-neutral-100 text-xs py-2 px-4 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="hidden sm:flex items-center gap-1.5 text-neutral-400">
          <Truck className="w-3.5 h-3.5 text-orange-400" />
          <span>Complimentary delivery across Lagos & Abuja on orders over ₦50,000</span>
        </div>

        <div className="w-full sm:w-auto text-center font-medium flex items-center justify-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-orange-400" />
          <span>Curated Summer Essentials — Enjoy up to 25% off selected pieces</span>
        </div>

        <div className="hidden md:flex items-center gap-4 text-neutral-400">
          <span>Need help? <a href="tel:+2348000000000" className="text-white hover:underline">+234 (0) 800 SHOPLITE</a></span>
        </div>
      </div>
    </div>
  );
}
