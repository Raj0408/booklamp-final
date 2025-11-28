'use client';

import { useEffect } from 'react';
import { useCart } from './context/CartContext';

import Navbar from './components/Navbar';
import CartModal from './components/CartModal';
import HeroAnimation from './components/HeroAnimation';
import ProductSection from './components/ProductSection';
import FeaturesGrid from './components/FeaturesGrid';
import CorporateGifting from './components/CorporateGifting';
import TrackOrder from './components/TrackOrder';
import CheckoutForm from './components/CheckoutForm';
import TrackOrderContent from './components/TrackOrderContent';
import OrderConfirmation from './components/OrderConfirmation';

export default function Home() {
  const { view, cartCount } = useCart();

  useEffect(() => {
    if (view !== 'home') {
      window.scrollTo(0, 0);
    }
  }, [view]);

  const renderView = () => {
    if (view === 'checkout' && cartCount === 0) {
      return (
        <>
          <div id="products"><ProductSection /></div>
          <div id="features"><FeaturesGrid /></div>
          <div id="gifting"><CorporateGifting /></div>
          <div id="track"><TrackOrder /></div>
        </>
      );
    }

    switch (view) {
      case 'checkout':
        return <CheckoutForm />;
      case 'track':
        return <TrackOrderContent />;
      case 'confirmation':
        return <OrderConfirmation />;
      case 'home':
      default:
        return (
          <>
            <div id="products"><ProductSection /></div>
            <div id="features"><FeaturesGrid /></div>
            <div id="gifting"><CorporateGifting /></div>
            <div id="track"><TrackOrder /></div>
          </>
        );
    }
  };

  return (
    <div className="bg-background text-text-primary">
      <Navbar />
      
      {/* The HeroAnimation is now controlled by CSS and its own state */}
      <HeroAnimation />

      <main>
        <div className="relative z-10 bg-background">
          {renderView()}
        </div>
      </main>

      <div className="relative z-10 bg-background">
        <footer className="border-t border-border-color py-8">
          <div className="container mx-auto text-center text-text-secondary">
            <p>&copy; {new Date().getFullYear()} LumiFold. All Rights Reserved.</p>
          </div>
        </footer>
      </div>
      
      <CartModal />
    </div>
  );
}