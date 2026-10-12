export default function CartPage() {
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
          <div className="cart-item">
            <div className="mini-image" />
            <div>
              <h3>Velvet Bloom</h3>
              <span>50ml · Floral</span>
            </div>
            <strong>$128</strong>
          </div>
          <div className="cart-item">
            <div className="mini-image alt" />
            <div>
              <h3>Amber Reverie</h3>
              <span>100ml · Oriental</span>
            </div>
            <strong>$159</strong>
          </div>
        </div>

        <aside className="checkout-card">
          <h3>Order summary</h3>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>$287</span>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className="summary-row total">
            <span>Total</span>
            <span>$287</span>
          </div>
          <button type="button" className="primary-btn checkout-btn">Checkout</button>
        </aside>
      </div>
    </main>
  );
}
