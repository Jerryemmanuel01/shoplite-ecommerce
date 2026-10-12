import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Truck, Headphones, Award, Sparkles, CheckCircle2 } from 'lucide-react';
import PageContainer from '../components/layout/PageContainer';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import ProductCard from '../components/products/ProductCard';
import CategoryCard from '../components/shop/CategoryCard';
import { products } from '../data/products';
import { categories } from '../data/categories';

/**
 * ShopLite Home Page.
 * Showcases the Hero, Category highlights, Featured products, Promotional banner,
 * Value propositions ("Why ShopLite"), and Newsletter subscription.
 */
export default function HomePage() {
  // Take 8 featured products for the storefront home showcase
  const featuredProducts = products.filter((p) => p.featured).slice(0, 8);

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#F8F8F6] border-b border-neutral-200 overflow-hidden">
        <PageContainer className="py-12 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Headline and CTAs */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-neutral-200 shadow-2xs">
                <Sparkles className="w-4 h-4 text-orange-500" />
                <span className="text-xs font-semibold text-neutral-800 tracking-wide uppercase">
                  New Season Collection 2026
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 leading-[1.1]">
                Everyday Essentials. <br className="hidden sm:inline" />
                <span className="text-orange-500 underline decoration-orange-200 underline-offset-8">Elevated.</span>
              </h1>

              <p className="text-base sm:text-lg text-neutral-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Discover thoughtfully selected pieces for your everyday life. We blend durable craftsmanship, understated design, and accessible luxury across modern gear, apparel, and home staples.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Button to="/shop" variant="primary" size="lg" className="w-full sm:w-auto shadow-sm">
                  <span>Shop Collection</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
                <a
                  href="#categories"
                  className="w-full sm:w-auto px-6 py-3 rounded-lg border border-neutral-300 bg-white hover:bg-neutral-50 text-neutral-800 text-base font-medium transition-colors text-center shadow-2xs"
                >
                  Explore Categories
                </a>
              </div>

              {/* Trust Badges */}
              <div className="pt-6 border-t border-neutral-200/80 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-neutral-500">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Premium Tested Quality
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Fast Nationwide Delivery
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Transparent Pricing (₦)
                </span>
              </div>
            </div>

            {/* Right Column: Hero Visual Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Main hero image card */}
                <div className="aspect-4/5 rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-neutral-200">
                  <img
                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80"
                    alt="ShopLite Curated Collection"
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                {/* Floating highlight card 1 */}
                <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-neutral-100 max-w-xs hidden sm:flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-neutral-900">Curated & Verified</p>
                    <p className="text-[11px] text-neutral-500">Every product vetted for longevity and aesthetic harmony.</p>
                  </div>
                </div>

                {/* Floating highlight card 2 */}
                <div className="absolute -top-4 -right-4 bg-neutral-900 text-white p-3.5 rounded-2xl shadow-xl border border-neutral-800 hidden sm:block">
                  <p className="text-[10px] uppercase font-bold tracking-widest text-orange-400">Trending Now</p>
                  <p className="text-xs font-semibold">Minimalist Home & Living</p>
                </div>
              </div>
            </div>

          </div>
        </PageContainer>
      </section>

      {/* 2. SHOP BY CATEGORY SECTION */}
      <section id="categories" className="scroll-mt-24">
        <PageContainer>
          <SectionHeading
            badge="Categories"
            title="Explore by Department"
            subtitle="Browse our carefully organized collections built around your modern lifestyle."
            actionText="View all 16 items"
            actionTo="/shop"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </PageContainer>
      </section>

      {/* 3. FEATURED PRODUCTS SECTION */}
      <section>
        <PageContainer>
          <SectionHeading
            badge="Editor's Choice"
            title="Featured Essentials"
            subtitle="Hand-picked essentials loved for their exceptional design and enduring quality."
            actionText="Browse full store"
            actionTo="/shop"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button to="/shop" variant="outline" size="lg">
              <span>View All Products</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </PageContainer>
      </section>

      {/* 4. PROMOTIONAL BANNER */}
      <section>
        <PageContainer>
          <div className="relative rounded-3xl overflow-hidden bg-neutral-950 text-white shadow-2xl border border-neutral-800">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              
              <div className="p-8 sm:p-12 lg:p-16 lg:col-span-7 space-y-6">
                <span className="inline-block text-xs uppercase font-bold tracking-widest text-orange-400 bg-orange-950/60 border border-orange-800/60 px-3 py-1 rounded-full">
                  Mid-Year Highlight
                </span>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                  Designed for Living. <br />
                  Built to Endure.
                </h2>

                <p className="text-sm sm:text-base text-neutral-300 max-w-lg leading-relaxed">
                  Upgrade your daily rituals with our signature series. From precision-engineered audio to organic linen garments, experience thoughtful simplicity without compromise.
                </p>

                <div className="pt-2">
                  <Button to="/shop" variant="accent" size="lg" className="shadow-lg">
                    <span>Explore Collection</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-5 h-72 sm:h-96 lg:h-full relative overflow-hidden bg-neutral-900">
                <img
                  src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=900&q=80"
                  alt="Modern lifestyle showcase"
                  className="w-full h-full object-cover object-center brightness-90 hover:scale-105 transition-transform duration-700"
                />
              </div>

            </div>
          </div>
        </PageContainer>
      </section>

      {/* 5. WHY SHOPLITE SECTION */}
      <section className="bg-[#F8F8F6] py-16 border-y border-neutral-200">
        <PageContainer>
          <SectionHeading
            badge="The ShopLite Difference"
            title="Why Choose ShopLite"
            subtitle="We prioritize craftsmanship, customer satisfaction, and reliable fulfillment in everything we offer."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Pillar 1: Product Quality */}
            <div className="p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-xs space-y-3">
              <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-neutral-900">
                Uncompromising Quality
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Every piece is rigorously inspected for material integrity, durability, and ergonomic comfort before it reaches you.
              </p>
            </div>

            {/* Pillar 2: Secure Shopping */}
            <div className="p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-xs space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-neutral-900">
                Secure & Safe Orders
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Shop with complete peace of mind. Transparent order tracking and encrypted customer verification protocols.
              </p>
            </div>

            {/* Pillar 3: Reliable Delivery */}
            <div className="p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-xs space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-neutral-900">
                Reliable Fast Delivery
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Same-day dispatch in Lagos and rapid express courier delivery across all 36 Nigerian states.
              </p>
            </div>

            {/* Pillar 4: Customer Support */}
            <div className="p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-xs space-y-3">
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                <Headphones className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-neutral-900">
                Dedicated Support
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Have questions or need assistance? Our friendly human support desk is always ready to guide your purchase.
              </p>
            </div>

          </div>
        </PageContainer>
      </section>

      {/* 6. NEWSLETTER SUBSCRIPTION */}
      <section>
        <PageContainer size="narrow">
          <div className="p-8 sm:p-12 rounded-3xl bg-neutral-900 text-white text-center space-y-6 shadow-xl border border-neutral-800">
            <div className="w-12 h-12 mx-auto rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center">
              <Sparkles className="w-6 h-6" />
            </div>

            <div className="space-y-2 max-w-md mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Stay in the Loop
              </h2>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Receive secret seasonal drops, early access to limited edition pieces, and curated styling guides directly to your inbox.
              </p>
            </div>

            {/* Newsletter Input & Submit mockup */}
            <form onSubmit={(e) => e.preventDefault()} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-neutral-800 text-sm text-white placeholder-neutral-400 border border-neutral-700 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                aria-label="Email address for newsletter"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-lg bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold transition-colors shrink-0 shadow-md"
              >
                Subscribe
              </button>
            </form>

            <p className="text-[11px] text-neutral-500">
              No spam, ever. Unsubscribe at any time with a single click.
            </p>
          </div>
        </PageContainer>
      </section>

    </div>
  );
}
