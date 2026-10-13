import React from "react";
import { NavLink, Link } from "react-router-dom";
import { X, Search, ShoppingBag, User, ArrowRight } from "lucide-react";
import { categories } from "../../data/categories";
import { useCart } from "../../context/CartProvider";

/**
 * Mobile navigation drawer for small screens.
 */
export default function MobileNav({ isOpen, onClose }) {
  if (!isOpen) return null;
  const { totalItemsCount } = useCart();

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-neutral-900/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer content */}
      <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-white shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-200">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-neutral-200">
          <Link to="/" onClick={onClose} className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-md bg-neutral-900 text-white flex items-center justify-center font-bold text-sm tracking-tight">
              S<span className="text-orange-500">.</span>
            </span>
            <span className="text-lg font-bold tracking-tight text-neutral-900">
              Shop<span className="text-orange-500">Lite</span>
            </span>
          </Link>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 rounded-md transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Bar mockup */}
        <div className="p-4 border-b border-neutral-100">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-9 pr-3 py-2 text-sm bg-neutral-100 border border-transparent rounded-md focus:bg-white focus:border-orange-500 focus:outline-none"
            />
            <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Primary Navigation Links */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
              Menu
            </p>
            <nav className="flex flex-col space-y-1">
              <NavLink
                to="/"
                onClick={onClose}
                className={({ isActive }) =>
                  `px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-neutral-100 text-orange-600 font-semibold"
                      : "text-neutral-700 hover:bg-neutral-50"
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/shop"
                onClick={onClose}
                className={({ isActive }) =>
                  `px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-neutral-100 text-orange-600 font-semibold"
                      : "text-neutral-700 hover:bg-neutral-50"
                  }`
                }
              >
                Shop All
              </NavLink>
              <NavLink
                to="/about"
                onClick={onClose}
                className={({ isActive }) =>
                  `px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-neutral-100 text-orange-600 font-semibold"
                      : "text-neutral-700 hover:bg-neutral-50"
                  }`
                }
              >
                About ShopLite
              </NavLink>
              <NavLink
                to="/cart"
                onClick={onClose}
                className={({ isActive }) =>
                  `px-3 py-2.5 rounded-md text-sm font-medium flex items-center justify-between transition-colors ${
                    isActive
                      ? "bg-neutral-100 text-orange-600 font-semibold"
                      : "text-neutral-700 hover:bg-neutral-50"
                  }`
                }
              >
                <span className="flex items-center gap-2">
                  <ShoppingBag className="w-4 h-4" />
                  <span>Cart</span>
                </span>
                <span className="bg-neutral-900 text-white text-xs px-2 py-0.5 rounded-full">
                  {totalItemsCount}
                </span>
              </NavLink>
            </nav>
          </div>

          {/* Categories Quick Links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
              Featured Categories
            </p>
            <div className="flex flex-col space-y-1">
              {categories.map((cat) => (
                <Link
                  key={cat.id}
                  to={`/shop?category=${cat.slug}`}
                  onClick={onClose}
                  className="flex items-center justify-between px-3 py-2 rounded-md text-sm text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900"
                >
                  <span>{cat.name}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-neutral-400" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Account / Checkout shortcut */}
        <div className="p-4 border-t border-neutral-200 bg-neutral-50 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-neutral-700">
            <User className="w-4 h-4 text-neutral-500" />
            <span>My Account</span>
          </div>
          <Link
            to="/checkout"
            onClick={onClose}
            className="text-xs font-semibold text-orange-600 hover:underline"
          >
            Checkout Demo
          </Link>
        </div>
      </div>
    </div>
  );
}
