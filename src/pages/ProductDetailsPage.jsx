import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ShoppingBag,
  Heart,
  Truck,
  RotateCcw,
  ShieldCheck,
  Share2,
  Check,
  Minus,
  Plus,
  HelpCircle,
} from "lucide-react";
import PageContainer from "../components/layout/PageContainer";
import Breadcrumbs from "../components/ui/Breadcrumbs";
import RatingStars from "../components/ui/RatingStars";
import ProductBadge from "../components/products/ProductBadge";
import ProductGallery from "../components/products/ProductGallery";
import RelatedProducts from "../components/products/RelatedProducts";
import { products } from "../data/products";
import { formatCurrency } from "../utils/formatCurrency";
import { useCart } from "../context/CartProvider";
import toast from "react-hot-toast";

/**
 * Product Details Page (`/product/:productId`).
 *
 * TEACHING NOTE:
 * Uses `useParams` to look up the product by ID from `products.js`.
 * All buttons (Add to Cart, Wishlist, Quantity, Tabs, Color selectors) are presentational
 * scaffolds ready for students to connect to state and event handlers during class.
 */
export default function ProductDetailsPage() {
  const { productId } = useParams();
  const product =
    products.find((p) => p.id === String(productId)) || products[0];
  const { addToCart, updateQuantity } = useCart();
  const [isAdded, setIsAdded] = useState(false);
  const [activeTab, setActiveTab] = useState("description");
  const [wishlist, setWishlist] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState(
    product.colors?.[0] || "",
  );

  const handleIncrease = () => setQuantity((prev) => prev + 1);

  const handleDecrease = () => setQuantity((prev) => Math.max(1, prev - 1));

  const handleQuickAddToCart = (e) => {
    e.preventDefault();

    if (!product.inStock) return;

    addToCart(product, quantity, selectedVariant);
    setIsAdded(true);

    setTimeout(() => {
      toast.success("Added to cart");
      setQuantity(1);
      return setIsAdded(false);
    }, 500);
  };

  // Find product from dataset, fallback to product 1 if not found or invalid

  // Active tab state for Description vs Specifications vs Reviews presentation

  const {
    id,
    name,
    category,
    price,
    originalPrice,
    image,
    images = [image],
    rating,
    reviewCount,
    description,
    inStock = true,
    badge,
    colors = ["Standard"],
    specs = {},
  } = product;

  // Calculate discount percentage if original price exists
  const discountPercent =
    originalPrice && originalPrice > price
      ? Math.round(((originalPrice - price) / originalPrice) * 100)
      : null;

  
  console.log(selectedVariant)

  return (
    <div className="pb-24">
      {/* Top Breadcrumbs */}
      <div className="border-b border-neutral-200 bg-white">
        <PageContainer className="py-4">
          <Breadcrumbs
            items={[
              { label: "Shop", to: "/shop" },
              {
                label: category,
                to: `/shop?category=${category.toLowerCase()}`,
              },
              { label: name },
            ]}
          />
        </PageContainer>
      </div>

      <PageContainer className="mt-8 sm:mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Product Image Gallery */}
          <div className="lg:col-span-6 lg:sticky lg:top-28">
            <ProductGallery images={images} name={name}  />
          </div>

          {/* Right Column: Product Meta, Pricing, Purchase Options */}
          <div className="lg:col-span-6 space-y-6">
            {/* Category & Badge */}
            <div className="flex items-center justify-between gap-3">
              <span className="text-xs uppercase tracking-widest font-bold text-neutral-500">
                {category}
              </span>
              {badge && <ProductBadge text={badge} />}
            </div>

            {/* Product Title */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-neutral-900 leading-tight">
              {name}
            </h1>

            {/* Rating & Stock Status */}
            <div className="flex flex-wrap items-center gap-4 pb-4 border-b border-neutral-200 text-sm">
              <RatingStars
                rating={rating}
                reviewCount={reviewCount}
                size="md"
                showValue
              />
              <span className="text-neutral-300">|</span>
              <span
                className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full ${
                  inStock
                    ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                    : "bg-red-50 text-red-700 border border-red-200"
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${inStock ? "bg-emerald-600" : "bg-red-600"}`}
                />
                {inStock ? "In Stock — Ships within 24h" : "Out of Stock"}
              </span>
            </div>

            {/* Price Display */}
            <div className="space-y-1">
              <div className="flex items-baseline gap-3">
                <span className="text-3xl sm:text-4xl font-black tracking-tight text-neutral-900">
                  {formatCurrency(price)}
                </span>

                {originalPrice && originalPrice > price && (
                  <>
                    <span className="text-lg text-neutral-400 line-through">
                      {formatCurrency(originalPrice)}
                    </span>
                    {discountPercent && (
                      <span className="text-xs font-bold text-red-600 bg-red-100 px-2 py-0.5 rounded-md">
                        Save {discountPercent}%
                      </span>
                    )}
                  </>
                )}
              </div>
              <p className="text-xs text-neutral-500">
                Taxes included. Free standard shipping on orders over ₦50,000.
              </p>
            </div>

            {/* Short Description */}
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              {description}
            </p>

            {/* Color / Variant Selector mockup */}
            {colors && colors.length > 0 && (
              <div className="space-y-2.5 pt-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-neutral-900 uppercase tracking-wider">
                    Select Color / Finish:
                  </span>
                  <span className="text-neutral-500">{selectedVariant}</span>
                </div>
                <div className="flex items-center gap-2">
                  {colors.map((color, index) => (
                    <button
                      key={index}
                      onClick={()=>setSelectedVariant(color)}
                      type="button"
                      className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-all ${
                        color === selectedVariant
                          ? "border-neutral-900 bg-neutral-900 text-white shadow-2xs"
                          : "border-neutral-200 bg-white text-neutral-700 hover:border-neutral-400"
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selector & Action Buttons */}
            <div className="pt-4 space-y-3">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                {/* Quantity Control mockup (Static value 1) */}
                <div className="flex items-center border border-neutral-300 rounded-lg bg-white h-12 w-full sm:w-36 justify-between px-3 shadow-2xs">
                  <button
                    onClick={() => handleDecrease(product)}
                    type="button"
                    className="p-1 text-neutral-400 hover:text-neutral-700 disabled:opacity-40 disabled:cursor-not-allowed"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="text-sm font-bold text-neutral-900">
                    {quantity}
                  </span>
                  <button
                    onClick={() => handleIncrease(product)}
                    type="button"
                    className="p-1 text-neutral-700 hover:text-neutral-900"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                {/* Primary Add to Cart Button (Presentational mockup) */}
                <button
                  type="button"
                  disabled={!inStock}
                  onClick={handleQuickAddToCart}
                  className={`flex-1 h-12 px-6 rounded-lg text-sm font-bold flex items-center justify-center gap-2 shadow-md transition-colors ${
                    inStock
                      ? "bg-neutral-900 text-white hover:bg-neutral-800 active:bg-neutral-950"
                      : "bg-neutral-200 text-neutral-400 cursor-not-allowed"
                  }`}
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>
                    {inStock ? "Add to Cart" : "Currently Unavailable"}
                  </span>
                </button>

                {/* Wishlist Button */}
                <button
                  onClick={()=>setWishlist((prev)=> !prev)}
                  type="button"
                  className="h-12 w-12 rounded-lg border border-neutral-300 bg-white hover:bg-neutral-50 text-neutral-700 hover:text-red-500 flex items-center justify-center shrink-0 transition-colors shadow-2xs"
                  aria-label="Add to wishlist"
                  title="Add to Wishlist"
                >
                  <Heart className={`w-5 h-5 ${wishlist? "fill-red-800 text-red-800": ""}`} />
                </button>
              </div>

              {/* Direct Checkout Link */}
              <Link
                to="/checkout"
                className="block w-full py-3 text-center rounded-lg border border-orange-500 bg-orange-50 hover:bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider transition-colors"
              >
                Buy Now (Proceed to Checkout)
              </Link>
            </div>

            {/* Delivery & Assurance Pills */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-neutral-600">
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F8F8F6] border border-neutral-200/70">
                <Truck className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-neutral-900">
                    Fast Nationwide Shipping
                  </p>
                  <p className="text-neutral-500">
                    Delivered within 2–4 business days across Nigeria.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F8F8F6] border border-neutral-200/70">
                <RotateCcw className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-neutral-900">
                    7-Day Free Returns
                  </p>
                  <p className="text-neutral-500">
                    Hassle-free exchanges on unopened items.
                  </p>
                </div>
              </div>
            </div>

            {/* Tabs for Description, Specifications, and Reviews */}
            <div className="pt-8 border-t border-neutral-200">
              {/* Tab Header Controls */}
              <div className="flex items-center space-x-6 border-b border-neutral-200">
                <button
                  type="button"
                  onClick={() => setActiveTab("description")}
                  className={`pb-3 text-sm font-semibold transition-colors border-b-2 -mb-px ${
                    activeTab === "description"
                      ? "border-orange-500 text-neutral-900"
                      : "border-transparent text-neutral-500 hover:text-neutral-900"
                  }`}
                >
                  Overview
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab("specs")}
                  className={`pb-3 text-sm font-semibold transition-colors border-b-2 -mb-px ${
                    activeTab === "specs"
                      ? "border-orange-500 text-neutral-900"
                      : "border-transparent text-neutral-500 hover:text-neutral-900"
                  }`}
                >
                  Specifications
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab("reviews")}
                  className={`pb-3 text-sm font-semibold transition-colors border-b-2 -mb-px ${
                    activeTab === "reviews"
                      ? "border-orange-500 text-neutral-900"
                      : "border-transparent text-neutral-500 hover:text-neutral-900"
                  }`}
                >
                  Reviews ({reviewCount || 0})
                </button>
              </div>

              {/* Tab Content Display */}
              <div className="py-5 text-sm text-neutral-600 leading-relaxed">
                {activeTab === "description" && (
                  <div className="space-y-3">
                    <p>{description}</p>
                    <p>
                      Crafted with high attention to precision and aesthetics.
                      Each unit undergoes strict multi-stage quality control to
                      ensure enduring functionality.
                    </p>
                  </div>
                )}

                {activeTab === "specs" && (
                  <div className="overflow-hidden border border-neutral-200 rounded-xl">
                    <table className="min-w-full divide-y divide-neutral-200 text-xs sm:text-sm">
                      <tbody className="divide-y divide-neutral-100 bg-white">
                        {Object.entries(specs).map(([key, val], idx) => (
                          <tr
                            key={idx}
                            className={
                              idx % 2 === 0 ? "bg-[#F8F8F6]" : "bg-white"
                            }
                          >
                            <td className="px-4 py-2.5 font-semibold text-neutral-700 w-1/3">
                              {key}
                            </td>
                            <td className="px-4 py-2.5 text-neutral-600">
                              {val}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {activeTab === "reviews" && (
                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-[#F8F8F6] border border-neutral-200 flex items-center justify-between">
                      <div>
                        <p className="font-bold text-neutral-900 text-sm">
                          Overall Customer Rating
                        </p>
                        <RatingStars
                          rating={rating}
                          reviewCount={reviewCount}
                          size="md"
                          showValue
                        />
                      </div>
                      <button
                        type="button"
                        className="px-3 py-1.5 text-xs font-semibold rounded-md border border-neutral-300 bg-white hover:bg-neutral-50 text-neutral-800"
                      >
                        Write a Review
                      </button>
                    </div>

                    <div className="p-4 rounded-xl border border-neutral-200 space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-neutral-900 text-xs">
                          Adeyemi O. — Verified Buyer
                        </span>
                        <span className="text-[11px] text-neutral-400">
                          2 weeks ago
                        </span>
                      </div>
                      <RatingStars rating={5} size="sm" />
                      <p className="text-xs text-neutral-600 pt-1">
                        Exceeded my expectations. Packaging was immaculate and
                        delivery to Ikeja was prompt. Highly recommend ShopLite!
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Showcase */}
        <RelatedProducts currentProductId={id} currentCategory={category} />
      </PageContainer>
    </div>
  );
}
