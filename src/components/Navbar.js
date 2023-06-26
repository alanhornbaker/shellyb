export default function Navbar() {
  return (
    <nav className="nav">
      <a href="/" className="site-title">
        ShellyB
      </a>
      <ul className="links">
        <li>
          <a href="/new-arrivals">New Arrivals</a>
        </li>
        <li>
          <a href="/seasonal">Seasonal</a>
        </li>
        <li>
          <a href="/on-sale">On Sale</a>
        </li>
        <li>
          <a href="/custom-orders">Custom Orders</a>
        </li>
      </ul>
    </nav>
  );
}
