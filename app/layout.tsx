import './globals.css';
import { CartProvider } from './context/CartContext';

export const metadata = {
  title: 'LumiFold - The Book That Glows',
  description: 'A unique, foldable book lamp for gifting and reading.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background">
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}