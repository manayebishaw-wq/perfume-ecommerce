"use client";

import { useEffect, useMemo, useState } from 'react';
import { products } from '@/data/products';

export default function CartPage() {
  const [cartItems, setCartItems] = useState<number[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('perfume-cart');
    if (stored) {
      try {
        setCartItems(JSON.parse(stored));
      } catch {
        setCartItems([]);
      }
    }
  }, []);

  const selectedProducts = useMemo(
    () => products.filter((product) => cartItems.includes(product.id)),
    [cartItems],
  );

  const subtotal = selectedProducts.reduce((sum, product) => sum + product.price, 0);

  async function handleCheckout() {
    if (!selectedProducts.length) return;
    setLoading(true);

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: selectedProducts.map((product) => ({ id: product.id, quantity: 1 })),
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Checkout failed');
      }

      if (result.url) {
        window.location.href = result.url;
        return;
      }

      window.location.href = '/checkout/success?demo=1';
    } catch (error) {
      console.error(error);
      alert('Unable to start checkout. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="page-shell cart-page">
      <section className="page-header">
        <div>
          <p className="eyebrow">Your cart</p>
          <h1>Ready to check out?</h1>
        </div>
      </section>

      <div className="cart-layout">
        <div className="cart-items">
          {selectedProducts.length ? (
            selectedProducts.map((product) => (
              <div key={product.id} className="cart-item">
                <div className="mini-image" style={{ background: `linear-gradient(135deg, ${product.accent}, #5f2d28)` }} />
                <div>
                  <h3>{product.name}</h3>
                  <span>
                    {product.size} · {product.category}
                  </span>
                </div>
                <strong>${product.price}</strong>
              </div>
            ))
          ) : (
            <div className="empty-state">
              <p>Your cart is empty.</p>
              <a href="/products" className="secondary-btn">Browse fragrances</a>
            </div>
          )}
        </div>

        <aside className="checkout-card">
          <h3>Order summary</h3>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>${subtotal || 0}</span>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <span>{subtotal > 0 ? 'Free' : '$0'}</span>
          </div>
          <div className="summary-row total">
            <span>Total</span>
            <span>${subtotal || 0}</span>
          </div>
          <button
            type="button"
            className="primary-btn checkout-btn"
            onClick={handleCheckout}
            disabled={loading || !selectedProducts.length}
          >
            {loading ? 'Processing...' : 'Checkout'}
          </button>
        </aside>
      </div>
    </main>
  );
}
