// Default Header Component
export default function DefaultHeader() {
  return (
    <header className="navbar">
      <h1>🏠 Default Theme</h1>
      <nav>
        <a href="#" className="nav-link">Home</a>
        <a href="#" className="nav-link active">Products</a>
        <a href="#" className="nav-link">Contact</a>
      </nav>
    </header>
  );
}
