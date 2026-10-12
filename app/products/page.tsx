import type { Metadata } from 'next';
import Link from 'next/link';
import { products } from '@/data/products';

export const metadata: Metadata = {
  title: 'Shop Perfume | Maison de Parfum',
  description: 'Browse luxury perfumes and fragrance essentials from our signature collection.',
};

export default function ProductsPage() {
  return (
    <main className="page-shell">
      <section className="page-header">
        <div>
          <p className="eyebrow">Shop all</p>
          <h1>Curated fragrances.</h1>
        </div>
        <Link href="/cart" className="secondary-btn">Cart (2)</Link>
      </section>

      <div className="filters-row">
        <button type="button">All</button>
        <button type="button">Floral</button>
        <button type="button">Woody</button>
        <button type="button">Fresh</button>
        <button type="button">Oriental</button>
      </div>

      <div className="product-grid large-grid">
        {products.map((product) => (
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
              <Link href={`/products/${product.id}`} className="card-btn">Add to cart</Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
