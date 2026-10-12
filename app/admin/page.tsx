export default function AdminPage() {
  return (
    <main className="page-shell">
      <section className="page-header">
        <div>
          <p className="eyebrow">Dashboard</p>
          <h1>Store admin</h1>
        </div>
      </section>

      <div className="admin-grid">
        <div className="stat-box">
          <span>Revenue</span>
          <strong>$18.4k</strong>
          <small>+12.2% this month</small>
        </div>
        <div className="stat-box">
          <span>Orders</span>
          <strong>342</strong>
          <small>+21 new this week</small>
        </div>
        <div className="stat-box">
          <span>Inventory</span>
          <strong>93%</strong>
          <small>Healthy stock levels</small>
        </div>
      </div>
    </main>
  );
}
