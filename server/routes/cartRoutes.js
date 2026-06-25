const express = require("express");

const router = express.Router();

const verifyToken =
  require("../middleware/authMiddleware");

const {
  addToCart,
  getCart,
  removeFromCart,
  updateCartQuantity,
} = require(
  "../controllers/cartController"
);

router.post(
  "/add",
  verifyToken,
  addToCart
);
router.delete( "/:id", verifyToken, removeFromCart);
router.put("/:id", verifyToken, updateCartQuantity);

router.get("/", verifyToken, getCart);

module.exports = router;