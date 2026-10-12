export default function LoginPage() {
  return (
    <main className="page-shell auth-shell">
      <div className="auth-card">
        <p className="eyebrow">Welcome back</p>
        <h1>Sign in to your account</h1>
        <form className="auth-form">
          <label>
            Email
            <input type="email" placeholder="you@example.com" />
          </label>
          <label>
            Password
            <input type="password" placeholder="••••••••" />
          </label>
          <button type="submit" className="primary-btn">Sign in</button>
        </form>
      </div>
    </main>
  );
}
