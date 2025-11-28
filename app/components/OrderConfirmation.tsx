'use client';

import { useCart } from '../context/CartContext';

const OrderConfirmation = () => {
  const { setView } = useCart();

  return (
    <div className="container mx-auto px-6 py-24 sm:py-40 text-center flex flex-col items-center">
      <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mb-6">
        <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
      </div>
      <h1 className="text-4xl font-extrabold mb-4">Thank You For Your Order!</h1>
      <p className="text-text-secondary max-w-xl mb-8">
        Your order has been placed successfully. A confirmation email with your order details and tracking information will be sent to you shortly.
      </p>
      <button 
        onClick={() => setView('home')} 
        className="bg-accent text-black font-bold py-4 px-10 rounded-lg text-lg hover:bg-accent-hover transition-colors"
      >
        Continue Shopping
      </button>
    </div>
  );
};

export default OrderConfirmation;