const db = require("../config/db");

const addToCart = (req, res) => {

  const user_id = req.user.id;

  const {
    product_id,
    quantity,
  } = req.body;

  const sql = `
    INSERT INTO cart
    (
      user_id,
      product_id,
      quantity
    )
    VALUES (?, ?, ?)
  `;

  db.query(
    sql,
    [
      user_id,
      product_id,
      quantity || 1,
    ],
    (err, result) => {

      if (err) {
        return res
          .status(500)
          .json(err);
      }

      res.status(201).json({
        message:
          "Product added to cart",
      });

    }
  );
};

const getCart = (req, res) => {

  const user_id = req.user.id;

  const sql = `
    SELECT
      cart.id,
      cart.quantity,
      products.name,
      products.price,
      products.image_url
    FROM cart
    JOIN products
      ON cart.product_id = products.id
    WHERE cart.user_id = ?
  `;

  db.query(
    sql,
    [user_id],
    (err, results) => {

      if (err) {
        return res
          .status(500)
          .json(err);
      }

      res.json(results);

    }
  );
};

const removeFromCart = (req, res) => {
  const cartId = req.params.id;

  const sql = `
    DELETE FROM cart
    WHERE id = ?
  `;

  db.query(
    sql,
    [cartId],
    (err, result) => {
      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        message: "Item removed from cart",
      });
    }
  );
};

module.exports = {
  addToCart,
  getCart,
  removeFromCart,
};