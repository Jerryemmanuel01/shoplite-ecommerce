import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AnnouncementBar from './components/layout/AnnouncementBar';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import AppRoutes from './routes/AppRoutes';
import { Toaster } from 'react-hot-toast';

/**
 * Root ShopLite Application Component.
 * 
 * Provides:
 * - BrowserRouter routing container
 * - Shared global layout (AnnouncementBar, Navbar, Footer)
 * - Flexible main content area hosting AppRoutes
 */
export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-white text-neutral-900 selection:bg-orange-500 selection:text-white">
        {/* Top Promotional Bar */}
        <AnnouncementBar />

        {/* Global Navigation Header */}
        <Navbar />

        {/* Main Routed Page Content */}
        <main className="flex-1">
          <AppRoutes />
        </main>
        <Toaster />

        {/* Global Storefront Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
