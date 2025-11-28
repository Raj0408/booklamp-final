'use client';

import { useState, useEffect } from 'react';
// FIX: Removed 'View' from the import as it's not used in this file.
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { toggleCart, cartCount, setView, view } = useCart();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollLink = (sectionId: string) => {
    if (view !== 'home') {
      setView('home');
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ease-in-out ${isScrolled ? 'bg-black bg-opacity-70 backdrop-blur-lg border-b border-border-color' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <button onClick={() => setView('home')}><h1 className="text-2xl font-bold text-white">LumiFold</h1></button>
        <ul className="hidden md:flex items-center space-x-8 text-text-primary">
          <li><button onClick={() => handleScrollLink('products')} className="hover:text-accent transition-colors">Products</button></li>
          <li><button onClick={() => handleScrollLink('features')} className="hover:text-accent transition-colors">Why Us</button></li>
          <li><button onClick={() => handleScrollLink('gifting')} className="hover:text-accent transition-colors">Gifting</button></li>
          <li><button onClick={() => setView('track')} className="hover:text-accent transition-colors">Track Order</button></li>
        </ul>
        <button onClick={toggleCart} className="relative">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-accent text-black text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
              {cartCount}
            </span>
          )}
        </button>
      </nav>
    </header>
  );
};
export default Navbar;