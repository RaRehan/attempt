import { useEffect, useState } from "react";
import {
  getCart,
  removeFromCart,
} from "../services/cartService";

export default function Cart() {
  const [cartItems, setCartItems] =
    useState([]);

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const token =
        localStorage.getItem("token");

      const data =
        await getCart(token);

      setCartItems(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleRemove = async (cartId) => {
  try {

    const token =
      localStorage.getItem("token");

    await removeFromCart(
      cartId,
      token
    );

    fetchCart();

  } catch (error) {
    console.error(error);
  }
};

  const total = cartItems.reduce(
    (sum, item) =>
      sum +
      Number(item.price) *
        item.quantity,
    0
  );

  return (
    <div
      style={{
        padding: "120px 8%",
      }}
    >
      <h1>Your Cart</h1>

      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item.id}
              style={{
                border:
                  "1px solid #333",
                padding: "20px",
                marginBottom: "20px",
              }}
            >
              <h3>{item.name}</h3>

              <p>
                Price: $
                {item.price}
              </p>

              <p>
                Quantity:
                {item.quantity}
              </p>

              <p>
                Subtotal: $
                {(
                  item.price *
                  item.quantity
                ).toFixed(2)}
              </p>
            </div>
          ))}

          <h2>
            Total: $
            {total.toFixed(2)}
          </h2>

          <button
  onClick={() =>
    handleRemove(item.id)
  }
>
  Remove
</button>
        </>
      )}
    </div>
  );
}