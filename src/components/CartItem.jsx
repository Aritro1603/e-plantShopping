import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  updateQuantity,
  removeItem,
} from "../redux/CartSlice";

import Navbar from "./Navbar";

function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalCost = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleIncrease = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1,
      })
    );
  };

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({
          id: item.id,
          quantity: item.quantity - 1,
        })
      );
    }
  };

  const handleCheckout = () => {
    alert("Coming Soon!");
  };

  return (
    <>
      <Navbar />

      <main className="cart-page">
        <h1>Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <h2>Your cart is empty 🌱</h2>

            <p>Add some beautiful plants to your cart.</p>

            <Link to="/plants" className="continue-btn">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="cart-summary">
              <h2>Total Plants: {totalQuantity}</h2>
              <h2>Total Cost: ₹{totalCost.toFixed(2)}</h2>
            </div>

            <div className="cart-items">
              {cartItems.map((item) => (
                <div className="cart-item" key={item.id}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-image"
                  />

                  <div className="cart-item-details">
                    <h2>{item.name}</h2>

                    <p>Unit Price: ₹{item.price}</p>

                    <p>Quantity: {item.quantity}</p>

                    <p className="item-total">
                      Item Total: ₹
                      {(item.price * item.quantity).toFixed(2)}
                    </p>

                    <div className="quantity-controls">
                      <button
                        onClick={() => handleDecrease(item)}
                        disabled={item.quantity === 1}
                      >
                        −
                      </button>

                      <span>{item.quantity}</span>

                      <button onClick={() => handleIncrease(item)}>
                        +
                      </button>
                    </div>

                    <button
                      className="delete-btn"
                      onClick={() => dispatch(removeItem(item.id))}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-actions">
              <Link to="/plants" className="continue-btn">
                Continue Shopping
              </Link>

              <button
                className="checkout-btn"
                onClick={handleCheckout}
              >
                Checkout
              </button>
            </div>
          </>
        )}
      </main>
    </>
  );
}

export default CartItem;
