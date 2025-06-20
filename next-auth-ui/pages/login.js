export default function LoginPage() {
  return (
    <div style={{ padding: 20, maxWidth: 400, margin: 'auto' }}>
      <h2>Login</h2>
      <input placeholder="Username" style={{ display: 'block', marginBottom: 10 }} />
      <input type="password" placeholder="Password" style={{ display: 'block', marginBottom: 10 }} />
      <button>Login</button>
    </div>
  );
}
