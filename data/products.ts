export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  description: string;
  features: string[];
  image: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'The Wooden Book Lamp',
    price: 1499,
    originalPrice: 2999,
    description: 'A masterpiece of design and functionality. When closed, it appears to be a simple wooden book, but when opened, it transforms into a beautiful sculptural light.',
    features: ['Opens to 360 degrees', '6-hour rechargeable battery', 'Made from real, natural wood', 'Portable & wire-free design'],
    image: '/product-wooden.jpg',
  },
  {
    id: 2,
    name: 'The Leather Book Lamp',
    price: 1799,
    originalPrice: 3499,
    description: 'An executive-class lamp wrapped in premium-grade leather. The perfect sophisticated gift for a colleague or loved one.',
    features: ['Luxurious leather finish', 'Warm-white LED light', '8-hour extended battery', 'Magnetic closing mechanism'],
    image: '/product-leather.jpg',
  },
];