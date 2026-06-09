const express = require("express");

const router = express.Router();

const verifyToken =
  require("../middleware/authMiddleware");

const {
  createOrder,
  getOrders,
} = require(
  "../controllers/orderController"
);

router.post(
  "/",
  verifyToken,
  createOrder
);

router.get(
  "/",
  verifyToken,
  getOrders
);

module.exports = router;