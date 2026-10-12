import Link from 'next/link';
import { notFound } from 'next/navigation';
import { products } from '@/data/products';

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = products.find((item) => item.id === Number(params.id));

  if (!product) {
    notFound();
  }

  function addToCart() {
    const current = JSON.parse(localStorage.getItem('perfume-cart') || '[]');
    const next = current.includes(product.id) ? current : [...current, product.id];
    localStorage.setItem('perfume-cart', JSON.stringify(next));
    window.dispatchEvent(new Event('cart-updated'));
  }

  return (
    <main className="page-shell product-detail">
      <Link href="/products" className="text-link">← Back to collections</Link>
      <div className="detail-layout">
        <div className="detail-image" style={{ background: product.accent }}>
          <img src={product.image} alt={product.name} />
        </div>

        <div className="detail-copy">
          <p className="eyebrow">{product.category}</p>
          <h1>{product.name}</h1>
          <div className="rating-line">
            <span>★ {product.rating}</span>
            <span>{product.reviews} reviews</span>
          </div>
          <p className="detail-description">{product.description}</p>
          <div className="detail-price">
            <strong>${product.price}</strong>
            <span>{product.size}</span>
          </div>

          <div className="purchase-actions">
            <button type="button" className="primary-btn" onClick={addToCart}>Add to cart</button>
            <button type="button" className="secondary-btn">Add to wishlist</button>
          </div>

          <ul className="detail-points">
            <li>Long-lasting fragrance with balanced projection</li>
            <li>Premium oil concentration for luxurious wear</li>
            <li>Presented in signature glass packaging</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
