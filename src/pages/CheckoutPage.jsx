import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldAlert,
  CreditCard,
  Building,
  Banknote,
  Truck,
  CheckCircle2,
  Lock,
  ArrowLeft,
} from 'lucide-react';
import PageContainer from '../components/layout/PageContainer';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import Input from '../components/ui/Input';
import { initialCartItems } from '../data/products';
import { formatCurrency } from '../utils/formatCurrency';

/**
 * Checkout Page (`/checkout`).
 * 
 * TEACHING NOTE & SAFETY NOTICE:
 * This is a visual UI scaffolding only for React students learning form inputs.
 * All inputs and radio options are presentational.
 * NO real payments or data transmissions occur.
 */
export default function CheckoutPage() {
  const [selectedDelivery, setSelectedDelivery] = useState('standard');
  const [selectedPayment, setSelectedPayment] = useState('card');

  // Static sample order calculations
  const subtotal = initialCartItems.reduce(
    (acc, item) => acc + item.unitPrice * item.quantity,
    0
  );
  const deliveryFee = selectedDelivery === 'express' ? 5000 : 2500;
  const total = subtotal + deliveryFee;

  return (
    <div className="pb-24">
      {/* Top Banner & Breadcrumbs */}
      <div className="bg-[#F8F8F6] border-b border-neutral-200">
        <PageContainer className="py-6 sm:py-8">
          <Breadcrumbs
            items={[
              { label: 'Cart', to: '/cart' },
              { label: 'Checkout' },
            ]}
          />
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900 mt-2">
            Secure Checkout
          </h1>
        </PageContainer>
      </div>

      <PageContainer className="mt-8 sm:mt-12">
        {/* Demonstration Store Alert Notice */}
        <div className="mb-8 p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm">
            <span className="font-bold">Teaching Demo Notice: </span>
            This storefront is an educational training sandbox for learning React. Form fields and order submission are presentational — no actual charges, payments, or orders will be processed.
          </div>
        </div>

        {/* 2-Column Responsive Checkout Grid */}
        <form onSubmit={(e) => e.preventDefault()} className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Checkout Form (8 Cols) */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* 1. Contact Information */}
            <section className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-200">
                <h2 className="text-base font-bold text-neutral-900 uppercase tracking-wider">
                  1. Contact Information
                </h2>
                <span className="text-xs text-neutral-500">Step 1 of 3</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="Email Address"
                  type="email"
                  placeholder="your.name@example.com"
                  defaultValue="student@shoplite.dev"
                  required
                />
                <Input
                  label="Phone Number"
                  type="tel"
                  placeholder="+234 801 234 5678"
                  defaultValue="+234 802 345 6789"
                  required
                />
              </div>
            </section>

            {/* 2. Delivery Address */}
            <section className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-200">
                <h2 className="text-base font-bold text-neutral-900 uppercase tracking-wider">
                  2. Delivery Address
                </h2>
                <span className="text-xs text-neutral-500">Step 2 of 3</span>
              </div>

              <div className="space-y-4">
                <Input
                  label="Full Name"
                  placeholder="First and last name"
                  defaultValue="Chinedu Okonkwo"
                  required
                />

                <Input
                  label="Street Address"
                  placeholder="Apartment, suite, house number and street name"
                  defaultValue="14 Admiralty Way, Lekki Phase 1"
                  required
                />

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <Input
                    label="City"
                    placeholder="Lekki / Ikeja / Garki"
                    defaultValue="Lekki"
                    required
                  />
                  <Input
                    label="State"
                    placeholder="Lagos State"
                    defaultValue="Lagos"
                    required
                  />
                  <Input
                    label="Postal Code"
                    placeholder="101233"
                    defaultValue="105102"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1.5">
                    Country / Region
                  </label>
                  <select
                    defaultValue="Nigeria"
                    className="w-full rounded-md border border-neutral-200 bg-white px-3.5 py-2.5 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                  >
                    <option value="Nigeria">Nigeria (NG)</option>
                    <option value="Ghana">Ghana (GH)</option>
                    <option value="Kenya">Kenya (KE)</option>
                    <option value="United Kingdom">United Kingdom (UK)</option>
                  </select>
                </div>
              </div>
            </section>

            {/* 3. Delivery Options */}
            <section className="space-y-4">
              <h2 className="text-base font-bold text-neutral-900 uppercase tracking-wider pb-3 border-b border-neutral-200">
                3. Delivery Method
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label
                  onClick={() => setSelectedDelivery('standard')}
                  className={`p-4 rounded-xl border cursor-pointer transition-all flex items-start gap-3 ${
                    selectedDelivery === 'standard'
                      ? 'border-orange-500 bg-orange-50/30 ring-1 ring-orange-500'
                      : 'border-neutral-200 bg-white hover:border-neutral-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="deliveryMethod"
                    value="standard"
                    checked={selectedDelivery === 'standard'}
                    onChange={() => setSelectedDelivery('standard')}
                    className="mt-1 text-orange-500 focus:ring-orange-400"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-neutral-900">Standard Delivery</span>
                      <span className="text-sm font-semibold text-neutral-900">₦2,500</span>
                    </div>
                    <p className="text-xs text-neutral-500 mt-1">
                      Estimated 2–4 business days delivery via tracked dispatch.
                    </p>
                  </div>
                </label>

                <label
                  onClick={() => setSelectedDelivery('express')}
                  className={`p-4 rounded-xl border cursor-pointer transition-all flex items-start gap-3 ${
                    selectedDelivery === 'express'
                      ? 'border-orange-500 bg-orange-50/30 ring-1 ring-orange-500'
                      : 'border-neutral-200 bg-white hover:border-neutral-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="deliveryMethod"
                    value="express"
                    checked={selectedDelivery === 'express'}
                    onChange={() => setSelectedDelivery('express')}
                    className="mt-1 text-orange-500 focus:ring-orange-400"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-neutral-900">Express Priority</span>
                      <span className="text-sm font-semibold text-neutral-900">₦5,000</span>
                    </div>
                    <p className="text-xs text-neutral-500 mt-1">
                      Next-day expedited express courier service.
                    </p>
                  </div>
                </label>
              </div>
            </section>

            {/* 4. Payment Options (Presentational Mockup) */}
            <section className="space-y-4">
              <h2 className="text-base font-bold text-neutral-900 uppercase tracking-wider pb-3 border-b border-neutral-200">
                4. Payment Method
              </h2>

              <div className="space-y-3">
                {/* Option 1: Card */}
                <label
                  onClick={() => setSelectedPayment('card')}
                  className={`p-4 rounded-xl border cursor-pointer transition-all flex items-start gap-3 ${
                    selectedPayment === 'card'
                      ? 'border-orange-500 bg-orange-50/20 ring-1 ring-orange-500'
                      : 'border-neutral-200 bg-white hover:border-neutral-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={selectedPayment === 'card'}
                    onChange={() => setSelectedPayment('card')}
                    className="mt-1 text-orange-500 focus:ring-orange-400"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <CreditCard className="w-4 h-4 text-orange-600" />
                      <span className="text-sm font-bold text-neutral-900">Debit / Credit Card</span>
                    </div>
                    <p className="text-xs text-neutral-500 mt-1">
                      Pay via Mastercard, Visa, or Verve cards (Paystack / Flutterwave mockup).
                    </p>
                  </div>
                </label>

                {/* Option 2: Bank Transfer */}
                <label
                  onClick={() => setSelectedPayment('transfer')}
                  className={`p-4 rounded-xl border cursor-pointer transition-all flex items-start gap-3 ${
                    selectedPayment === 'transfer'
                      ? 'border-orange-500 bg-orange-50/20 ring-1 ring-orange-500'
                      : 'border-neutral-200 bg-white hover:border-neutral-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="transfer"
                    checked={selectedPayment === 'transfer'}
                    onChange={() => setSelectedPayment('transfer')}
                    className="mt-1 text-orange-500 focus:ring-orange-400"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <Building className="w-4 h-4 text-orange-600" />
                      <span className="text-sm font-bold text-neutral-900">Direct Bank Transfer</span>
                    </div>
                    <p className="text-xs text-neutral-500 mt-1">
                      Direct automated payment through Nigerian banking apps or USSD.
                    </p>
                  </div>
                </label>

                {/* Option 3: Cash on Delivery */}
                <label
                  onClick={() => setSelectedPayment('cod')}
                  className={`p-4 rounded-xl border cursor-pointer transition-all flex items-start gap-3 ${
                    selectedPayment === 'cod'
                      ? 'border-orange-500 bg-orange-50/20 ring-1 ring-orange-500'
                      : 'border-neutral-200 bg-white hover:border-neutral-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cod"
                    checked={selectedPayment === 'cod'}
                    onChange={() => setSelectedPayment('cod')}
                    className="mt-1 text-orange-500 focus:ring-orange-400"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <Banknote className="w-4 h-4 text-orange-600" />
                      <span className="text-sm font-bold text-neutral-900">Pay on Delivery</span>
                    </div>
                    <p className="text-xs text-neutral-500 mt-1">
                      Available for verified delivery addresses within Lagos metropolis.
                    </p>
                  </div>
                </label>
              </div>
            </section>

          </div>

          {/* Right Column: Order Summary (5 Cols) */}
          <div className="lg:col-span-5 sticky top-28 space-y-6">
            <div className="p-6 rounded-2xl bg-[#F8F8F6] border border-neutral-200/90 shadow-2xs space-y-6">
              
              <div className="flex items-center justify-between pb-3 border-b border-neutral-200">
                <h2 className="text-base font-bold text-neutral-900 uppercase tracking-wider">
                  Order Summary
                </h2>
                <Link to="/cart" className="text-xs text-orange-600 hover:underline font-semibold">
                  Edit Cart
                </Link>
              </div>

              {/* Order Items Review */}
              <div className="divide-y divide-neutral-200/80 max-h-72 overflow-y-auto pr-1">
                {initialCartItems.map((item) => (
                  <div key={item.id} className="py-3 flex items-center gap-3">
                    <div className="relative w-14 h-14 rounded-lg overflow-hidden bg-white border border-neutral-200 shrink-0">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute top-0 right-0 bg-neutral-900 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-bl-md">
                        {item.quantity}
                      </span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold text-neutral-900 truncate">
                        {item.product.name}
                      </p>
                      <p className="text-[11px] text-neutral-500">
                        {item.selectedVariant || item.product.category}
                      </p>
                    </div>

                    <div className="text-xs font-bold text-neutral-900 shrink-0">
                      {formatCurrency(item.unitPrice * item.quantity)}
                    </div>
                  </div>
                ))}
              </div>

              {/* Breakdown */}
              <div className="pt-3 border-t border-neutral-200 space-y-2.5 text-xs sm:text-sm">
                <div className="flex items-center justify-between text-neutral-600">
                  <span>Subtotal</span>
                  <span className="font-semibold text-neutral-900">{formatCurrency(subtotal)}</span>
                </div>

                <div className="flex items-center justify-between text-neutral-600">
                  <span>Delivery ({selectedDelivery === 'express' ? 'Express' : 'Standard'})</span>
                  <span className="font-semibold text-neutral-900">{formatCurrency(deliveryFee)}</span>
                </div>

                <div className="pt-3 border-t border-neutral-200 flex items-center justify-between text-base font-bold text-neutral-900">
                  <span>Total Due</span>
                  <span className="text-xl text-neutral-900">{formatCurrency(total)}</span>
                </div>
              </div>

              {/* Place Order Button Mockup */}
              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-lg bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-2"
              >
                <Lock className="w-4 h-4" />
                <span>Place Order Demo</span>
              </button>

              <div className="text-[11px] text-center text-neutral-500 space-y-1">
                <p>By placing this order you agree to the ShopLite demo store policies.</p>
                <p className="text-neutral-400">Classroom UI Scaffold • No backend execution</p>
              </div>

            </div>

            <div className="text-center">
              <Link
                to="/cart"
                className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Return to Shopping Cart</span>
              </Link>
            </div>
          </div>

        </form>
      </PageContainer>
    </div>
  );
}
