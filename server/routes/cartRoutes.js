const express = require("express");

const router = express.Router();

const verifyToken =
  require("../middleware/authMiddleware");

const {
  addToCart,
  getCart,
  removeFromCart,
} = require("../controllers/cartController");

router.post(
  "/add",
  verifyToken,
  addToCart
);
router.delete( "/:id", verifyToken, removeFromCart);

router.get("/", verifyToken, getCart);

module.exports = router;