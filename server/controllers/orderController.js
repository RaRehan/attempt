const db = require("../config/db");

const createOrder = (req, res) => {

  const user_id = req.user.id;

  const cartSql = `
    SELECT
      cart.product_id,
      cart.quantity,
      products.price
    FROM cart
    JOIN products
      ON cart.product_id = products.id
    WHERE cart.user_id = ?
  `;

  db.query(
    cartSql,
    [user_id],
    (err, cartItems) => {

      if (err) {
        return res.status(500).json(err);
      }

      if (cartItems.length === 0) {
        return res.status(400).json({
          message: "Cart is empty",
        });
      }

      let totalAmount = 0;

      cartItems.forEach(item => {
        totalAmount +=
          item.price * item.quantity;
      });

      const orderSql = `
        INSERT INTO orders
        (
          user_id,
          total_amount
        )
        VALUES (?, ?)
      `;

      db.query(
        orderSql,
        [user_id, totalAmount],
        (err, orderResult) => {

          if (err) {
            return res.status(500).json(err);
          }

          const orderId =
            orderResult.insertId;

          const orderItemsValues =
            cartItems.map(item => [
              orderId,
              item.product_id,
              item.quantity,
              item.price
            ]);

          const orderItemsSql = `
            INSERT INTO order_items
            (
              order_id,
              product_id,
              quantity,
              price
            )
            VALUES ?
          `;

          db.query(
            orderItemsSql,
            [orderItemsValues],
            (err) => {

              if (err) {
                return res.status(500).json(err);
              }

              const clearCartSql =
                "DELETE FROM cart WHERE user_id = ?";

              db.query(
                clearCartSql,
                [user_id],
                (err) => {

                  if (err) {
                    return res.status(500).json(err);
                  }

                  res.status(201).json({
                    message:
                      "Order placed successfully",
                    orderId,
                    totalAmount,
                  });

                }
              );

            }
          );

        }
      );

    }
  );
};

module.exports = {
  createOrder,
};