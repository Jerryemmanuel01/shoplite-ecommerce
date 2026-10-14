import React, { useState } from "react";
import { SlidersHorizontal, Search, X } from "lucide-react";
import PageContainer from "../components/layout/PageContainer";
import Breadcrumbs from "../components/ui/Breadcrumbs";
import ProductGrid from "../components/products/ProductGrid";
import FilterSidebar from "../components/shop/FilterSidebar";
import SortDropdown from "../components/shop/SortDropdown";
import Pagination from "../components/shop/Pagination";
import { products } from "../data/products";
import { useParams, useSearchParams } from "react-router-dom";

/**
 * ShopLite Catalog Page (`/shop`).
 *
 * TEACHING ARCHITECTURE NOTE:
 * In this starter scaffold, all 16 products are rendered directly from `products.js`.
 * The search input, filter checkboxes, sorting select, and pagination buttons are
 * presentational UI elements. Students will practice React concepts by wiring them up:
 *  - Step 1: Manage search text with `useState`
 *  - Step 2: Filter products by category and price range using array `.filter()`
 *  - Step 3: Sort filtered list using `.sort()`
 *  - Step 4: Paginate results with `.slice()`
 */
export default function ShopPage() {
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  console.log(searchParams.get("category"));
  

  return (
    <div className="pb-20">
      {/* Top Banner & Breadcrumbs */}
      <div className="bg-[#F8F8F6] border-b border-neutral-200">
        <PageContainer className="py-8 sm:py-12">
          <Breadcrumbs items={[{ label: "Shop Catalog" }]} />

          <div className="mt-4 max-w-3xl">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900">
              All Products
            </h1>
            <p className="mt-2 text-sm sm:text-base text-neutral-600 leading-relaxed">
              Explore our complete collection of meticulously designed everyday
              essentials. Filter by department or sort by price to discover your
              next favorite item.
            </p>
          </div>
        </PageContainer>
      </div>

      <PageContainer className="mt-8 sm:mt-10">
        {/* Controls Toolbar: Search, Filter toggle, Count & Sort */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-neutral-200">
          {/* Search Bar & Mobile Filter Trigger */}
          <div className="flex items-center gap-3 flex-1 max-w-lg">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search catalog by title or keyword..."
                className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-white border border-neutral-200 rounded-lg placeholder-neutral-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
                aria-label="Search catalog products"
              />
              <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            {/* Mobile Filter Button */}
            <button
              type="button"
              onClick={() => setIsMobileFilterOpen(true)}
              className="lg:hidden flex items-center gap-2 px-3.5 py-2.5 text-xs font-semibold rounded-lg border border-neutral-300 bg-white hover:bg-neutral-50 text-neutral-800 transition-colors shadow-2xs shrink-0"
              aria-label="Open filter options"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-orange-500" />
              <span>Filters</span>
            </button>
          </div>

          {/* Catalog Count & Sorting */}
          <div className="flex items-center justify-between lg:justify-end gap-4">
            <p className="text-xs sm:text-sm text-neutral-500">
              Showing <span className="font-semibold text-neutral-900">16</span>{" "}
              of{" "}
              <span className="font-semibold text-neutral-900">
                {products.length}
              </span>{" "}
              products
            </p>

            <SortDropdown />
          </div>
        </div>

        {/* Catalog Main Layout: Sidebar + Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-10 mt-8 items-start">
          {/* Desktop Filter Sidebar */}
          <div className="hidden lg:block lg:col-span-1 sticky top-28">
            <div className="bg-white p-5 rounded-2xl border border-neutral-200 shadow-2xs">
              <FilterSidebar />
            </div>
          </div>

          {/* Products Grid & Pagination */}
          <div className="lg:col-span-3 space-y-10">
            <ProductGrid products={products} />

            <Pagination currentPage={1} totalPages={2} />
          </div>
        </div>
      </PageContainer>

      {/* Mobile Filters Drawer Modal */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-neutral-900/60 backdrop-blur-xs"
            onClick={() => setIsMobileFilterOpen(false)}
            aria-hidden="true"
          />

          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-white shadow-2xl flex flex-col z-10">
            <div className="flex items-center justify-between p-4 border-b border-neutral-200">
              <span className="font-bold text-sm uppercase tracking-wider text-neutral-900 flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-orange-500" />
                Filter Products
              </span>
              <button
                type="button"
                onClick={() => setIsMobileFilterOpen(false)}
                className="p-2 text-neutral-500 hover:text-neutral-900 rounded-md"
                aria-label="Close filters"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-5">
              <FilterSidebar />
            </div>

            <div className="p-4 border-t border-neutral-200 bg-neutral-50">
              <button
                type="button"
                onClick={() => setIsMobileFilterOpen(false)}
                className="w-full py-2.5 rounded-lg bg-neutral-900 text-white text-xs font-semibold hover:bg-neutral-800 transition-colors"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
