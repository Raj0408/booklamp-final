'use client';

import { useCart } from '../context/CartContext';

const CartModal = () => {
  const { isCartOpen, toggleCart, cartItems, removeFromCart, updateQuantity, cartCount, setView } = useCart();

  const handleCheckout = () => {
    setView('checkout'); // Change the view to checkout
    toggleCart(); // Close the cart modal
  };

  if (!isCartOpen) {
    return null; // Return null when the cart is not open
  }

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  // --- THIS IS THE FIX ---
  // The entire component's JSX must be inside this return statement.
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end backdrop-blur-sm" onClick={toggleCart}>
      <div className="w-full max-w-md h-full bg-background shadow-2xl flex flex-col" onClick={e => e.stopPropagation()}>
        <div className="p-6 border-b border-border-color flex justify-between items-center">
          <h2 className="text-xl font-semibold">Your Cart ({cartCount})</h2>
          <button onClick={toggleCart} className="text-2xl">&times;</button>
        </div>
        <div className="flex-grow p-6 overflow-y-auto">
          {cartItems.length === 0 ? (
            <p className="text-text-secondary">Your cart is empty.</p>
          ) : (
            cartItems.map(item => (
              <div key={item.id} className="flex items-center space-x-4 mb-4">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
                <div className="flex-grow">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-text-secondary">₹{item.price}</p>
                  <div className="flex items-center mt-2 border border-border-color rounded w-fit">
                    <button onClick={() => updateQuantity(item.id, -1)} className="px-3 py-1">-</button>
                    <span className="px-3 py-1 border-l border-r border-border-color">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)} className="px-3 py-1">+</button>
                  </div>
                </div>
                <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-400 text-sm">Remove</button>
              </div>
            ))
          )}
        </div>
        <div className="p-6 border-t border-border-color">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg">Subtotal</span>
            <span className="text-lg font-bold">₹{subtotal.toFixed(2)}</span>
          </div>
          <button onClick={handleCheckout} className="w-full bg-accent text-black font-bold py-3 px-6 rounded-lg text-lg hover:bg-accent-hover transition-colors">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;