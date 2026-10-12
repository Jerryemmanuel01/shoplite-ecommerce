import React from 'react';
import { Sparkles, Compass, ShieldCheck, Heart, ArrowRight } from 'lucide-react';
import PageContainer from '../components/layout/PageContainer';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import Button from '../components/ui/Button';

/**
 * About ShopLite Page (`/about`).
 * Introduces the brand story, mission statement, shopping philosophy,
 * core brand values, and provides a CTA to explore the shop.
 */
export default function AboutPage() {
  return (
    <div className="pb-24 space-y-16 sm:space-y-24">
      
      {/* 1. Page Header & Intro */}
      <div className="bg-[#F8F8F6] border-b border-neutral-200">
        <PageContainer className="py-12 sm:py-20">
          <Breadcrumbs items={[{ label: 'About Us' }]} />

          <div className="mt-6 max-w-3xl space-y-4">
            <span className="inline-block text-xs uppercase tracking-widest font-semibold text-orange-600 bg-orange-50 px-3 py-1 rounded-full border border-orange-100">
              Our Story & Philosophy
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 leading-tight">
              Thoughtfully Curated for the Mindful Everyday.
            </h1>
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
              ShopLite was born from a simple belief: everyday objects should bring quiet satisfaction to the moments we experience every single day.
            </p>
          </div>
        </PageContainer>
      </div>

      {/* 2. Brand Introduction & Lifestyle Imagery */}
      <PageContainer>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center">
              <Compass className="w-5 h-5" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">
              The ShopLite Story
            </h2>

            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              In a marketplace saturated with fleeting novelties and disposable goods, ShopLite sets a calm, deliberate standard. Founded in 2026, we seek out items that unite durable functionality, clean aesthetic silhouettes, and fair pricing.
            </p>

            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              Whether it's an ergonomic pair of headphones designed for deep focus or an organic linen shirt made to age gracefully across seasons, we believe design should serve life, not dominate it.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-4/3 border-4 border-white bg-neutral-100">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80"
                alt="ShopLite team and studio"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </PageContainer>

      {/* 3. Mission Statement & Shopping Philosophy */}
      <section className="bg-[#F8F8F6] py-16 sm:py-24 border-y border-neutral-200">
        <PageContainer>
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <span className="text-xs uppercase font-bold tracking-widest text-orange-600">
              Our Guiding Compass
            </span>

            <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-neutral-900 leading-snug">
              "We curate essentials that simplify choice and elevate daily routines, proving that timeless simplicity and modern performance can coexist harmoniously."
            </blockquote>

            <div className="pt-4 max-w-2xl mx-auto">
              <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-900 mb-2">
                Our Shopping Philosophy
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Fewer, better things. We test each prospective product against strict durability standards, avoiding trend-driven churn in favor of reliable objects that remain cherished year after year.
              </p>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* 4. Three Core Brand Values */}
      <PageContainer>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">
            Our Core Values
          </h2>
          <p className="mt-2 text-sm text-neutral-600">
            The foundational principles that guide every collection we curate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Value 1: Curation */}
          <div className="p-8 rounded-2xl bg-white border border-neutral-200/90 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-neutral-900">
              Intentional Curation
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              We say no to 90% of prospective items so our customers are presented with only the most refined, practical options in each category.
            </p>
          </div>

          {/* Value 2: Quality */}
          <div className="p-8 rounded-2xl bg-white border border-neutral-200/90 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-neutral-900">
              Lasting Materiality
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              From full-grain leather to organic combed cotton and aircraft-grade aluminum, we insist on materials that withstand everyday use.
            </p>
          </div>

          {/* Value 3: Transparency */}
          <div className="p-8 rounded-2xl bg-white border border-neutral-200/90 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-neutral-900">
              Radical Transparency
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Honest specifications, clear pricing in Nigerian Naira, and direct customer care with no hidden surprises.
            </p>
          </div>

        </div>
      </PageContainer>

      {/* 5. CTA Section */}
      <PageContainer size="narrow">
        <div className="p-10 sm:p-14 rounded-3xl bg-neutral-900 text-white text-center space-y-6 shadow-xl border border-neutral-800">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Ready to explore our catalog?
          </h2>
          <p className="text-sm text-neutral-400 max-w-md mx-auto leading-relaxed">
            Browse our full range of audio, apparel, home essentials, and everyday accessories today.
          </p>
          <div className="pt-2">
            <Button to="/shop" variant="accent" size="lg" className="shadow-lg">
              <span>Explore ShopLite Store</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </PageContainer>

    </div>
  );
}
