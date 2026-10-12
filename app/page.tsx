import type { Metadata } from 'next';
import Link from 'next/link';
import { products } from '@/data/products';

export const metadata: Metadata = {
  title: 'Maison de Parfum',
  description: 'Luxury perfume boutique with curated scents and modern fragrance rituals.',
};

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">Curated scent stories</p>
          <h1>Luxury fragrances for the everyday ritual.</h1>
          <p className="subtitle">
            Discover signature blends crafted for confidence, memory, and modern elegance.
          </p>
          <div className="hero-actions">
            <Link href="#shop" className="primary-btn">Shop collection</Link>
            <Link href="/login" className="secondary-btn">Join members</Link>
          </div>
          <div className="stats-row">
            <div>
              <strong>15k+</strong>
              <span>happy customers</span>
            </div>
            <div>
              <strong>4.9/5</strong>
              <span>average rating</span>
            </div>
            <div>
              <strong>48h</strong>
              <span>dispatch window</span>
            </div>
          </div>
        </div>

        <div className="hero-visual" aria-label="Luxury perfume display">
          <div className="glass-card main-bottle">
            <div className="bottle-cap" />
            <div className="bottle-body" />
          </div>
          <div className="glass-card floating-card">
            <span>New arrival</span>
            <strong>Velvet Bloom</strong>
            <small>Rose · Amber · Musk</small>
          </div>
        </div>
      </section>

      <section className="brands-strip">
        <span>Maison de Parfum</span>
        <span>Vogue Select</span>
        <span>Elle Beauty</span>
        <span>Harper Luxe</span>
        <span>Fragrance Daily</span>
      </section>

      <section className="feature-grid">
        <div className="feature-item">
          <span>01</span>
          <h3>Small-batch luxury</h3>
          <p>Crafted with rare ingredients and master perfumers in limited runs.</p>
        </div>
        <div className="feature-item">
          <span>02</span>
          <h3>Free international shipping</h3>
          <p>Complimentary delivery on orders over $120 with insured packaging.</p>
        </div>
        <div className="feature-item">
          <span>03</span>
          <h3>Gifting concierge</h3>
          <p>Elegant wrapping, handwritten notes, and beautifully boxed surprise sets.</p>
        </div>
      </section>

      <section id="shop" className="collection">
        <div className="section-heading">
          <p className="eyebrow">The collection</p>
          <h2>Signature scents for every mood.</h2>
        </div>

        <div className="product-grid">
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
                <Link href={`/products/${product.id}`} className="card-btn">View details</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="story-banner">
        <div>
          <p className="eyebrow">Our philosophy</p>
          <h2>Perfume is memory you can wear.</h2>
        </div>
        <p>
          We blend contemporary artistry with timeless ingredients to create fragrances that feel
          personal, intimate, and unmistakably luxurious.
        </p>
      </section>

      <section className="newsletter">
        <div>
          <p className="eyebrow">Stay in the loop</p>
          <h2>Exclusive launches and member perks.</h2>
        </div>
        <form className="newsletter-form">
          <input type="email" placeholder="Enter your email" aria-label="Email address" />
          <button type="submit">Subscribe</button>
        </form>
      </section>
    </main>
  );
}
