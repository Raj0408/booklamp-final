'use client';

import { products } from '@/data/products';
import { useCart } from '../context/CartContext';
import Image from 'next/image'; // Import the special Image component

const ProductSection = () => {
  const { addToCart } = useCart();

  return (
    <section id="products" className="container mx-auto py-24 px-6">
      <div className="space-y-20">
        {products.map((product, index) => (
          <div key={product.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}>
            <div className={`w-full h-auto bg-gray-900 rounded-lg p-8 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
              <Image 
                src={product.image} 
                alt={product.name} 
                width={500}
                height={500}
                className="w-full h-full object-cover rounded-md" 
              />
            </div>
            <div className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
              <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">{product.name}</h2>
              <div className="mt-4 flex items-baseline">
                <p className="text-4xl text-white">₹{product.price}</p>
                <p className="text-xl text-text-secondary line-through ml-4">₹{product.originalPrice}</p>
              </div>
              <p className="mt-6 text-base text-text-secondary">{product.description}</p>
              <button onClick={() => addToCart(product)} className="mt-8 w-full sm:w-auto bg-accent text-black font-bold py-3 px-10 rounded-lg text-lg hover:bg-accent-hover transition-all duration-300 transform hover:scale-105">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;