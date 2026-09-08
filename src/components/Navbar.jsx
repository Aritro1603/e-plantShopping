import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const totalQuantity = useSelector((state) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0)
  );

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/">🌿 Paradise Nursery</Link>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>

        <Link to="/plants">Plants</Link>

        <Link to="/cart" className="cart-link">
          🛒 Cart
          <span className="cart-count">{totalQuantity}</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;