"use client";

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { products } from '@/data/products';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'All') return products;
    return products.filter((product) => product.category === selectedCategory);
  }, [selectedCategory]);

  function addToCart(productId: number) {
    const current = JSON.parse(localStorage.getItem('perfume-cart') || '[]');
    const next = current.includes(productId) ? current : [...current, productId];
    localStorage.setItem('perfume-cart', JSON.stringify(next));
    window.dispatchEvent(new Event('cart-updated'));
  }

  return (
    <main className="page-shell">
      <section className="page-header">
        <div>
          <p className="eyebrow">Shop all</p>
          <h1>Curated fragrances.</h1>
        </div>
        <Link href="/cart" className="secondary-btn">Cart</Link>
      </section>

      <div className="filters-row">
        {['All', 'Floral', 'Woody', 'Fresh', 'Oriental'].map((category) => (
          <button
            key={category}
            type="button"
            className={selectedCategory === category ? 'active' : ''}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="product-grid large-grid">
        {filteredProducts.map((product) => (
          <article key={product.id} className="product-card">
            <div className="product-image-wrap" style={{ background: product.accent }}>
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-meta">
              <div className="product-row">
                <span>{product.category}</span>
                <span>★ {product.rating}</span>
              </div>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <div className="product-row price-row">
                <strong>${product.price}</strong>
                <span>{product.size}</span>
              </div>
              <div className="shop-actions">
                <Link href={`/products/${product.id}`} className="card-btn secondary-card-btn">Details</Link>
                <button type="button" className="primary-btn add-cart-btn" onClick={() => addToCart(product.id)}>
                  Add to cart
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
