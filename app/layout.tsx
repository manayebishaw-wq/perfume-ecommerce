import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Maison de Parfum',
  description: 'Luxury perfume boutique',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="topbar">
          <div className="brand-block">
            <div className="brand-mark">M</div>
            <div>
              <span>Maison</span>
              <strong>de Parfum</strong>
            </div>
          </div>

          <nav className="nav-links" aria-label="Main navigation">
            <a href="/">Home</a>
            <a href="/products">Shop</a>
            <a href="/admin">Admin</a>
            <a href="/login">Account</a>
          </nav>

          <div className="nav-actions">
            <a href="/cart" className="cart-pill">Cart (2)</a>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
