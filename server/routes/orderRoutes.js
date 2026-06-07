const express = require("express");

const router = express.Router();

const verifyToken =
  require("../middleware/authMiddleware");

const {
  createOrder,
} = require(
  "../controllers/orderController"
);

router.post(
  "/",
  verifyToken,
  createOrder
);

module.exports = router;