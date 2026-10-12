export default function CheckoutSuccessPage({
  searchParams,
}: {
  searchParams?: { session_id?: string; demo?: string };
}) {
  return (
    <main className="page-shell checkout-success">
      <div className="success-card">
        <p className="eyebrow">Order confirmed</p>
        <h1>Thank you for your fragrance order.</h1>
        <p>
          {searchParams?.demo === '1'
            ? 'This was a demo checkout session. Connect Stripe to enable live payments.'
            : `Your payment session ${searchParams?.session_id ?? 'was created'} is being processed.`}
        </p>
        <a href="/products" className="primary-btn">Continue shopping</a>
      </div>
    </main>
  );
}
