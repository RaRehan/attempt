import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        KN Watches
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/collections">Collections</Link>
        <Link to="/login">Login</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </nav>
  );
}