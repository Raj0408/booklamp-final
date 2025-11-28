'use client';

import { useCart } from '../context/CartContext';
import Image from 'next/image'; // Import Image

const CheckoutForm = () => {
  const { cartItems, cartCount, setView, clearCart } = useCart();

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const shippingFee = subtotal > 0 ? 50 : 0;
  const total = subtotal + shippingFee;

  const handlePlaceOrder = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Order Submitted:', { cartItems, total });
    setView('confirmation');
    clearCart();
  };

  return (
    <div className="container mx-auto px-6 py-24 sm:py-32">
      <h1 className="text-4xl font-extrabold text-center mb-12">Complete Your Order</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-6">Shipping Address</h2>
          <form className="space-y-4" onSubmit={handlePlaceOrder}>
            <input type="text" required placeholder="Full Name" className="w-full p-3 bg-gray-900 border border-border-color rounded-md" />
            <input type="email" required placeholder="Email Address" className="w-full p-3 bg-gray-900 border border-border-color rounded-md" />
            <input type="tel" required placeholder="Mobile Number" className="w-full p-3 bg-gray-900 border border-border-color rounded-md" />
            <textarea placeholder="Street Address" required rows={3} className="w-full p-3 bg-gray-900 border border-border-color rounded-md"></textarea>
            <div className="flex gap-4">
              <input type="text" required placeholder="City" className="w-full p-3 bg-gray-900 border border-border-color rounded-md" />
              <input type="text" required placeholder="Pincode" className="w-full p-3 bg-gray-900 border border-border-color rounded-md" />
            </div>
            <input type="text" required placeholder="State" className="w-full p-3 bg-gray-900 border border-border-color rounded-md" />
            <button type="submit" className="w-full mt-6 bg-accent text-black font-bold py-4 rounded-lg text-lg hover:bg-accent-hover transition-colors">
              Place Order & Proceed to Payment
            </button>
          </form>
        </div>
        <div className="bg-gray-900 p-8 rounded-lg border border-border-color h-fit">
          <h2 className="text-2xl font-semibold mb-6">Order Summary ({cartCount})</h2>
          <div className="space-y-4">
            {cartItems.map(item => (
              <div key={item.id} className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <Image 
                    src={item.image} 
                    alt={item.name} 
                    width={64}
                    height={64}
                    className="w-16 h-16 rounded-md" 
                  />
                  <div>
                    <p>{item.name}</p>
                    <p className="text-sm text-text-secondary">Qty: {item.quantity}</p>
                  </div>
                </div>
                <p>₹{(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
          </div>
          <div className="border-t border-border-color mt-6 pt-6 space-y-2">
            <div className="flex justify-between"><p>Subtotal</p><p>₹{subtotal.toFixed(2)}</p></div>
            <div className="flex justify-between"><p>Shipping</p><p>₹{shippingFee.toFixed(2)}</p></div>
            <div className="flex justify-between text-xl font-bold border-t border-border-color mt-4 pt-4"><p>Total</p><p>₹{total.toFixed(2)}</p></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;