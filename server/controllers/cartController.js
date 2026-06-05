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

module.exports = {
  addToCart,
};