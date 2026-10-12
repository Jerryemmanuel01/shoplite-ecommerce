import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Search, ShoppingBag, User, Menu } from 'lucide-react';
import MobileNav from './MobileNav';

/**
 * Main application navigation header.
 * Maintains presentational static controls (search input mockup, cart badge '0').
 */
export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-200 transition-shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 gap-4">
            
            {/* Left: Mobile hamburger & Brand Logo */}
            <div className="flex items-center gap-3 sm:gap-4">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden p-2 -ml-2 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded-md transition-colors"
                aria-label="Open navigation menu"
              >
                <Menu className="w-5 h-5" />
              </button>

              <Link to="/" className="flex items-center gap-2 group">
                <span className="w-8 h-8 rounded-lg bg-neutral-900 text-white flex items-center justify-center font-bold text-base tracking-tight shadow-xs group-hover:bg-neutral-800 transition-colors">
                  S<span className="text-orange-500">.</span>
                </span>
                <span className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900">
                  Shop<span className="text-orange-500">Lite</span>
                </span>
              </Link>
            </div>

            {/* Middle: Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `transition-colors hover:text-orange-600 ${
                    isActive ? 'text-orange-600 font-semibold' : 'text-neutral-700'
                  }`
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/shop"
                className={({ isActive }) =>
                  `transition-colors hover:text-orange-600 ${
                    isActive ? 'text-orange-600 font-semibold' : 'text-neutral-700'
                  }`
                }
              >
                Shop
              </NavLink>

              <a
                href="/#categories"
                className="text-neutral-700 hover:text-orange-600 transition-colors"
              >
                Categories
              </a>

              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `transition-colors hover:text-orange-600 ${
                    isActive ? 'text-orange-600 font-semibold' : 'text-neutral-700'
                  }`
                }
              >
                About
              </NavLink>
            </nav>

            {/* Right: Search, Account & Shopping Bag */}
            <div className="flex items-center gap-2 sm:gap-4">
              {/* Desktop Search input (presentational mockup) */}
              <div className="hidden md:flex items-center relative w-48 lg:w-64">
                <input
                  type="search"
                  placeholder="Search products..."
                  className="w-full text-xs pl-9 pr-3 py-2 bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 rounded-full focus:bg-white focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 transition-all"
                  readOnly
                  aria-label="Search storefront products"
                />
                <Search className="w-3.5 h-3.5 text-neutral-400 absolute left-3 pointer-events-none" />
              </div>

              {/* Account action */}
              <button
                type="button"
                className="p-2 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded-full transition-colors hidden sm:flex"
                aria-label="User Account"
                title="Account"
              >
                <User className="w-5 h-5" />
              </button>

              {/* Cart Icon with static 0 badge */}
              <Link
                to="/cart"
                className="relative p-2 text-neutral-800 hover:text-orange-600 hover:bg-orange-50/60 rounded-full transition-colors flex items-center justify-center group"
                aria-label="Shopping Cart (0 items)"
                title="Shopping Bag"
              >
                <ShoppingBag className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-orange-500 text-white text-[11px] font-bold flex items-center justify-center shadow-xs">
                  0
                </span>
              </Link>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileNav
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
