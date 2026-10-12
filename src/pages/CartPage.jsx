import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowRight, ArrowLeft, ShoppingBag, ShieldCheck, Tag } from 'lucide-react';
import PageContainer from '../components/layout/PageContainer';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import Button from '../components/ui/Button';
import { initialCartItems } from '../data/products';
import { formatCurrency } from '../utils/formatCurrency';

/**
 * Shopping Cart Page (`/cart`).
 * 
 * TEACHING NOTE:
 * Renders sample cart items from `initialCartItems` in `products.js`.
 * All buttons (quantity +/- and Remove) are presentational scaffolds.
 * Students will implement cart mutations in class using `useReducer` and Context API!
 * 
 * Also includes a toggle to preview the "Empty Cart" UI design.
 */
export default function CartPage() {
  // Teaching demo helper: Allows students to toggle between populated cart & empty cart UI
  const [showEmptyState, setShowEmptyState] = useState(false);

  // Static pricing calculations for the sample items
  const subtotal = initialCartItems.reduce(
    (acc, item) => acc + item.unitPrice * item.quantity,
    0
  );
  const deliveryEstimate = 2500;
  const discount = 5000;
  const total = subtotal + deliveryEstimate - discount;

  return (
    <div className="pb-24">
      {/* Top Banner & Breadcrumbs */}
      <div className="bg-[#F8F8F6] border-b border-neutral-200">
        <PageContainer className="py-6 sm:py-8">
          <Breadcrumbs items={[{ label: 'Shopping Cart' }]} />
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900">
              Shopping Cart
            </h1>

            {/* Teaching Preview Toggle */}
            <button
              type="button"
              onClick={() => setShowEmptyState(!showEmptyState)}
              className="text-xs font-medium text-orange-600 bg-orange-50 border border-orange-200 px-3 py-1.5 rounded-md hover:bg-orange-100 transition-colors w-fit"
              title="Classroom preview toggle"
            >
              {showEmptyState ? 'Preview Populated Cart UI' : 'Preview Empty Cart UI'}
            </button>
          </div>
        </PageContainer>
      </div>

      <PageContainer className="mt-8 sm:mt-12">
        {showEmptyState ? (
          /* EMPTY CART STATE UI */
          <div className="max-w-md mx-auto text-center py-16 px-4 space-y-6 bg-white rounded-3xl border border-neutral-200 shadow-xs">
            <div className="w-20 h-20 mx-auto rounded-full bg-neutral-100 flex items-center justify-center text-neutral-400">
              <ShoppingBag className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-bold text-neutral-900">
                Your cart is currently empty
              </h2>
              <p className="text-sm text-neutral-500 leading-relaxed">
                Looks like you haven't added anything to your cart yet. Explore our curated collections to find everyday essentials.
              </p>
            </div>

            <div>
              <Button to="/shop" variant="primary" size="lg" className="w-full sm:w-auto">
                <ArrowLeft className="w-4 h-4 mr-1" />
                <span>Start Shopping</span>
              </Button>
            </div>
          </div>
        ) : (
          /* POPULATED CART LAYOUT (Responsive 2-column) */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Cart Items List */}
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-200 text-xs font-semibold uppercase tracking-wider text-neutral-500">
                <span>Products ({initialCartItems.length})</span>
                <span className="hidden sm:inline">Price / Quantity</span>
              </div>

              <div className="divide-y divide-neutral-200">
                {initialCartItems.map((item) => (
                  <div key={item.id} className="py-6 flex flex-col sm:flex-row gap-5 items-start sm:items-center justify-between">
                    
                    {/* Item Thumbnail & Information */}
                    <div className="flex items-center gap-4 flex-1">
                      <Link
                        to={`/product/${item.product.id}`}
                        className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-[#F8F8F6] border border-neutral-200 shrink-0"
                      >
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-full h-full object-cover hover:scale-105 transition-transform"
                        />
                      </Link>

                      <div className="space-y-1">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                          {item.product.category}
                        </span>
                        <h2 className="text-sm sm:text-base font-bold text-neutral-900 hover:text-orange-600 transition-colors">
                          <Link to={`/product/${item.product.id}`}>
                            {item.product.name}
                          </Link>
                        </h2>
                        {item.selectedVariant && (
                          <p className="text-xs text-neutral-500">
                            Variant: <span className="text-neutral-700 font-medium">{item.selectedVariant}</span>
                          </p>
                        )}
                        <p className="text-sm font-bold text-neutral-900 sm:hidden">
                          {formatCurrency(item.unitPrice)}
                        </p>
                      </div>
                    </div>

                    {/* Quantity & Unit Price & Remove Controls */}
                    <div className="flex items-center justify-between w-full sm:w-auto gap-6 pt-2 sm:pt-0">
                      
                      {/* Quantity Controller mockup */}
                      <div className="flex items-center border border-neutral-300 rounded-lg bg-white h-10 px-2 shadow-2xs">
                        <button
                          type="button"
                          className="p-1 text-neutral-400 hover:text-neutral-700 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="w-8 text-center text-xs font-bold text-neutral-900">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          className="p-1 text-neutral-700 hover:text-neutral-900 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Total Item Price */}
                      <div className="hidden sm:block text-right min-w-[100px]">
                        <p className="text-base font-bold text-neutral-900">
                          {formatCurrency(item.unitPrice * item.quantity)}
                        </p>
                        <p className="text-[11px] text-neutral-400">
                          {formatCurrency(item.unitPrice)} each
                        </p>
                      </div>

                      {/* Remove Button mockup */}
                      <button
                        type="button"
                        className="p-2 text-neutral-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        aria-label={`Remove ${item.product.name} from cart`}
                        title="Remove Item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>

                    </div>

                  </div>
                ))}
              </div>

              {/* Continue Shopping Link */}
              <div className="pt-6 border-t border-neutral-200">
                <Link
                  to="/shop"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-800 hover:text-orange-600 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Continue Shopping</span>
                </Link>
              </div>

            </div>

            {/* Right Column: Order Summary Card */}
            <div className="lg:col-span-4 sticky top-28">
              <div className="p-6 rounded-2xl bg-[#F8F8F6] border border-neutral-200/90 shadow-2xs space-y-6">
                
                <h2 className="text-base font-bold tracking-tight text-neutral-900 uppercase tracking-wider pb-3 border-b border-neutral-200">
                  Order Summary
                </h2>

                {/* Subtotal Calculations */}
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between text-neutral-600">
                    <span>Subtotal</span>
                    <span className="font-semibold text-neutral-900">{formatCurrency(subtotal)}</span>
                  </div>

                  <div className="flex items-center justify-between text-neutral-600">
                    <span>Estimated Delivery (Lagos / Abuja)</span>
                    <span className="font-semibold text-neutral-900">{formatCurrency(deliveryEstimate)}</span>
                  </div>

                  <div className="flex items-center justify-between text-emerald-600 font-medium">
                    <span className="flex items-center gap-1">
                      <Tag className="w-3.5 h-3.5" />
                      Promotional Discount
                    </span>
                    <span>-{formatCurrency(discount)}</span>
                  </div>

                  <div className="pt-3 border-t border-neutral-200 flex items-center justify-between text-base font-bold text-neutral-900">
                    <span>Total</span>
                    <span className="text-xl text-neutral-900">{formatCurrency(total)}</span>
                  </div>
                </div>

                {/* Coupon Code Input Mockup */}
                <div className="space-y-2 pt-2 border-t border-neutral-200">
                  <label htmlFor="coupon" className="text-xs font-semibold text-neutral-700">
                    Discount Voucher
                  </label>
                  <div className="flex gap-2">
                    <input
                      id="coupon"
                      type="text"
                      placeholder="e.g. SHOPLITE2026"
                      defaultValue="ESSENTIALS2026"
                      className="flex-1 px-3 py-2 text-xs bg-white border border-neutral-200 rounded-lg uppercase tracking-wider focus:outline-none focus:border-orange-500"
                    />
                    <button
                      type="button"
                      className="px-3 py-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-semibold transition-colors"
                    >
                      Apply
                    </button>
                  </div>
                </div>

                {/* Proceed to Checkout CTA */}
                <Button to="/checkout" variant="accent" size="lg" className="w-full shadow-md font-bold">
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>

                {/* Assurance note */}
                <div className="flex items-center justify-center gap-2 text-xs text-neutral-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Safe and encrypted checkout experience</span>
                </div>

              </div>
            </div>

          </div>
        )}
      </PageContainer>
    </div>
  );
}
